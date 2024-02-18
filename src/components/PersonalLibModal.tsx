import AllShelves from "./AllShelves"
import RecentShelves from "./RecentShelves"


const shelves = [
  {
    name: "abc",
    numberOfArticles: 5
  },
  {
    name: "def",
    numberOfArticles: 10
  },
  {
    name: "ghi",
    numberOfArticles: 8
  },
  {
    name: "jkl",
    numberOfArticles: 7
  },
  {
    name: "mno",
    numberOfArticles: 12
  },
  {
    name: "pqr",
    numberOfArticles: 13
  },
  {
    name: "stu",
    numberOfArticles: 11
  },
  {
    name: "vwx",
    numberOfArticles: 2
  },
  {
    name: "yz",
    numberOfArticles: 7
  }
]

const PersonalLibModal = () => {

  const recentShelves = shelves?.slice(0, 4) || [];
  const allShelves = shelves?.slice(4) || [];
  return (
    <div className="absolute z-50 w-[409px] bg-white p-3 pt-0 rounded-b-xl rounded-se-xl border-[1px] border-[#DBC9E5]">
      <RecentShelves recentShelves={recentShelves}/>
      <AllShelves allShelves={allShelves} />
    </div>
  )
}

export default PersonalLibModal;
