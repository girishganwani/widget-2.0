import { VscLinkExternal } from 'react-icons/vsc'

const allRecommendedUrls = [
  {
    title: "a",
    articleURL : "aaa",
    websiteBaseURL : "zzz" 
  },
  {
    title: "b",
    articleURL : "bbb",
    websiteBaseURL : "yyy" 
  },
  {
    title: "c",
    articleURL : "ccc",
    websiteBaseURL : "xxx" 
  },
  {
    title: "a",
    articleURL : "aaa",
    websiteBaseURL : "zzz" 
  },
  {
    title: "b",
    articleURL : "bbb",
    websiteBaseURL : "yyy" 
  },
  {
    title: "c",
    articleURL : "ccc",
    websiteBaseURL : "xxx" 
  },
  {
    title: "a",
    articleURL : "aaa",
    websiteBaseURL : "zzz" 
  },
  {
    title: "b",
    articleURL : "bbb",
    websiteBaseURL : "yyy" 
  },
  {
    title: "c",
    articleURL : "ccc",
    websiteBaseURL : "xxx" 
  },
  {
    title: "a",
    articleURL : "aaa",
    websiteBaseURL : "zzz" 
  },
  {
    title: "b",
    articleURL : "bbb",
    websiteBaseURL : "yyy" 
  },
  {
    title: "c",
    articleURL : "ccc",
    websiteBaseURL : "xxx" 
  },
  {
    title: "a",
    articleURL : "aaa",
    websiteBaseURL : "zzz" 
  },
  {
    title: "b",
    articleURL : "bbb",
    websiteBaseURL : "yyy" 
  },
  {
    title: "c",
    articleURL : "ccc",
    websiteBaseURL : "xxx" 
  },
  {
    title: "a",
    articleURL : "aaa",
    websiteBaseURL : "zzz" 
  },
  {
    title: "b",
    articleURL : "bbb",
    websiteBaseURL : "yyy" 
  },
  {
    title: "c",
    articleURL : "ccc",
    websiteBaseURL : "xxx" 
  },
  {
    title: "a",
    articleURL : "aaa",
    websiteBaseURL : "zzz" 
  },
  {
    title: "b",
    articleURL : "bbb",
    websiteBaseURL : "yyy" 
  },
  {
    title: "c",
    articleURL : "ccc",
    websiteBaseURL : "xxx" 
  },
]

const RecommendedReads = () => {

  return (
    <div className='flex flex-col gap-2 mt-2'>
      <h2 className='text-[17px] font-medium text-[#343334B5]'>RECOMMENDED READS</h2>
      <div className='max-h-[230px] overflow-y-auto overflow-x-hidden space-y-2 scrollbar-hide'>
        {allRecommendedUrls?.map((item, index) => (
          <a href={item.articleURL} target='_blank' className='pb-0 flex' key={index}>
            <div className='w-[411px] min-h-[51px] border-[1px] p-1 border-[#DBC9E5] rounded-xl bg-white' key={index}>
              <div className='flex items-center justify-between'>
                <p className='text-base font-normal line-clamp-1 mr-2'>{item.title}</p>
                <div className='text-[12px] mr-4'>
                  <VscLinkExternal/>
                </div>
              </div>
              <p className='text-[10px] text-[#940FAF]'>{item.websiteBaseURL}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RecommendedReads;