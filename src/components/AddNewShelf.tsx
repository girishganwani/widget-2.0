import { FormEvent } from "react";

type AddNewShelfProps = {
  setIsNewShelfClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isNewShelfClicked: boolean;
}

const AddNewShelf = ({ setIsNewShelfClicked, isNewShelfClicked}: AddNewShelfProps) => {

const handleSubmit = async (e : FormEvent<HTMLElement>) => {
  e.preventDefault();
  setIsNewShelfClicked(!isNewShelfClicked);
}

  return (
    <div className="mt-3 flex flex-col gap-2">
      <p className="text-[15px] ">Create New Shelf</p>
      <form onSubmit={handleSubmit}>
        <label className="text-[10px]">Name</label>
        <input
          type="text"
          placeholder="Name this bookshelf"
          className="w-[379px] h-[28px] bg-[#EDEFF8] boder-[1px] outline-none placeholder:text-[#C3D7FF] px-1 text-[9px] text-black border-[#C3D7FF] border-[1px] rounded-sm "
          />
        <button 
          type="submit"
          className="bg-[#940FAF] text-white mt-2 text-[12px] font-medium w-[194px] h-[18px] ml-[90px] rounded-sm"
        >
          Create Shelf
        </button>
      </form>
    </div>
  )
}

export default AddNewShelf;
