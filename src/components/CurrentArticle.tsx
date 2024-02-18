import LoadingSpinner from "./LoadingSpinner"
import PinButton from "./PinButton"
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { useState } from "react";
import CuratorNote from "./CuratorNote";


const CurrentArticle = () => {
  const [isCuratorNote, setIsCuratorNote] = useState(false);
  const isLoading = false
  
  return (
    <div className="w-[411px] min-h-[155px] bg-[url('/backgroundImage.png')] rounded-xl flex flex-col justify-between border-[1px] border-[#504874] gap-5">
      <div className="flex justify-between items-center mr-3">
        <PinButton/> 
        <button><RiDeleteBinLine fontSize={22} color="#504874" fontWeight={600} /></button>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[23px] font-bold text-[#940FAF] ml-3 font-Anonymous line-clamp-2" style={{lineHeight: "22px"}}>URL Title</p>
        {isLoading && <LoadingSpinner/>}  
      </div>
      <div className="text-[12px] font-Raleway font-semibold text-[#504874] mb-[14px] mx-3 flex justify-between items-center">
        <p className="line-clamp-1 w-2/3">Url address</p>
        <button className="flex gap-1 items-center" onClick={() => setIsCuratorNote(!isCuratorNote)}>
          <LuPencilLine fontSize={20}/>
          Add Note
        </button>
      </div>
      {isCuratorNote && <CuratorNote setIsCuratorNote={setIsCuratorNote} />}
    </div>
  )
}

export default CurrentArticle;