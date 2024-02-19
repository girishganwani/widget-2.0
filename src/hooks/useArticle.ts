import { useEffect, useState } from "react";
import { ArticleType } from "../typings";
import axiosInstance from "../axios";

const useArticle = () => {
  const [articles, setArticles] = useState<ArticleType[] | null>(null);

  useEffect(() => {
    const fetchArticles = async () : Promise<ArticleType[]> => {
      const {data} = await axiosInstance.get("/articles");
      localStorage.setItem('articles', JSON.stringify(data));
      return data;
    }

    const saveCurrentArticle = async (url : string) : Promise<ArticleType> => {
      const postData: ArticleType= await axiosInstance.post("/articles", {
        articleURL : url,
        title: "",
        websiteBaseURL: "",
        curatorNote: "",
        bookshelfName: ""
      })
      return postData;
    }

    const fetchData = async () => {
      const localData : string | null = localStorage?.getItem('articles');
      const parsedLocalData : ArticleType[] = JSON.parse(localData) || null;

      const urlFromTab = window.location.href;

      const urlInLocal = parsedLocalData?.find(item => item.articleURL === urlFromTab); 

      if(!urlInLocal) {
        await saveCurrentArticle(urlFromTab);
        await fetchArticles();
        return;
      }

      if(parsedLocalData && urlInLocal) {
        setArticles(parsedLocalData);
        return;
      }

      fetchArticles();
      }
      
      fetchData();
  },[]);
}

export default useArticle;