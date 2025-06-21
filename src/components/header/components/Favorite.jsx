import heart from "../../../assets/heart.svg";
export default function Favorite() {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all text-white">
      <img src={heart} alt="" />
      <span>Favorite Locations</span>
    </div>
  );
}
