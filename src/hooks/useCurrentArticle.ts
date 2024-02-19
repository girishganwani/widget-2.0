import { useEffect, useState } from "react";
import { CurrentArticleType } from "../typings";
import axios from "axios";

const useCurrentArticle = () => {
  const [currArtData, setCurrArtData] = useState<CurrentArticleType[] | null>(null);

  useEffect(() => {
    const fetchCurrentArticles = async () : Promise<CurrentArticleType[]> => {
      const {data} = await axios.get("http://localhost:3000/currarticles");
      localStorage.setItem('currarticles', JSON.stringify(data));
      return data;
    }

    const saveCurrentArticles = async (url : string) : Promise<CurrentArticleType> => {
      const postData: CurrentArticleType= await axios.post("http://localhost:3000/currarticles", {
        articleURL : url,
        title: "",
        websiteBaseURL: "",
        curatorNote: "",
        bookshelfName: ""
      })
      return postData
    }

    const fetchData = async () => {
     const localData : string | null = localStorage?.getItem('currarticles');
     const parsedLocalData : CurrentArticleType[] = JSON.parse(localData) || null;

     const urlFromTab = window.location.href;

     const urlInLocal = parsedLocalData?.find(item => item.articleURL === urlFromTab); 

     if(!urlInLocal) {
      await saveCurrentArticles(urlFromTab);
      await fetchCurrentArticles()
      return;
     }

     if(parsedLocalData) {
      setCurrArtData(parsedLocalData);
      return;
     }

    fetchCurrentArticles();
    }
    
    fetchData();
  },[])
}

export default useCurrentArticle