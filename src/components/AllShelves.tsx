import { useState } from "react"
import { LuPlus } from "react-icons/lu"
import AddNewShelf from "./AddNewShelf"

const backgroundColors = [
  "linear-gradient(90deg, rgba(191,137,175,1) 0%, rgba(217,133,148,1) 100%)",
  "linear-gradient(153deg, rgba(0,69,33,1) 0%, rgba(0,136,73,1) 100%)",
  "linear-gradient(34deg, rgba(242,143,44,1) 0%, rgba(223,76,45,1) 100%)",
  "linear-gradient(171deg, rgba(242,143,44,1) 0%, rgba(241,213,0,1) 80%)",
  "linear-gradient(171deg, rgba(44,178,242,1) 0%, rgba(241,222,0,1) 85%)",
  "linear-gradient(174deg, rgba(107,28,161,1) 0%, rgba(171,111,236,1) 52%, rgba(107,28,161,1) 100%)",
  "linear-gradient(174deg, rgba(34,195,185,1) 13%, rgba(68,102,221,0.7877275910364145) 100%)",
  "linear-gradient(174deg, rgba(221,48,83,1) 18%, rgba(205,197,27,1) 80%)"
]


const AllShelves = ({allShelves}: any) => {
  const [isNewShelfClicked, setIsNewShelfClicked] = useState(false);
 
  return (
    <div>
      {
      isNewShelfClicked ? 
        <AddNewShelf setIsNewShelfClicked={setIsNewShelfClicked} isNewShelfClicked={isNewShelfClicked} /> : 
        <div className="flex flex-col mt-1 gap-1">
          <p className="text-[15px]">All Shelves</p>
            <div className="flex flex-wrap items-center max-h-[190px] overflow-auto">
                {allShelves?.map((item, index) => (
                  <div className={`h-10 w-[48%] ${index === 0 ? 'shadow bg-[#DFE3EE] rounded-lg h-16 mb-[12px] ' : ''} flex flex-row mb-9 gap-1 mr-[2%] cursor-pointer`} key={index} >
                    <div className={`w-16 h-16 ${index === 0 ? 'rounded-full w-16 h-16 my-auto' : 'rounded-sm'}`} style={{background: backgroundColors[index % backgroundColors.length]}}/>
                    <div className={`w-24 m-[1px] my-auto ${index === 0 ? 'h-[64px] py-1' : 'h-[36px]'}`} style={{lineHeight: "14px"}}>
                      <p className="text-[13px] line-clamp-2">{item?.name}</p>
                      <p className="text-[10px]">{`${item?.numberOfArticles} articles`}</p>
                    </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="w-24 h-5 rounded-md flex items-center justify-center text-white bg-[#940FAF] text-[12px] font-medium"
                onClick={() => setIsNewShelfClicked(true)}
              >
                <LuPlus fontSize={11}/>
                New Shelf
              </button> 
            </div>
        </div>
       }
    </div>
  )
}

export default AllShelves;
