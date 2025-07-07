import { useContext, useState } from "react";
import heart from "../../assets/heart.svg";
import redHeart from "../../assets/heart-red.svg"
import { FavoriteContext } from "../../context/FavoriteContext";

export default function AddToFavorite() {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);

  const [isFavorite, toggleFavorite] = useState(false);

  const handleFavorites = () => {
toggleFavorite(!isFavorite)
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]" onClick={handleFavorites}>
          <span>Add to Favorite</span>
          <img src={isFavorite ? redHeart : heart} alt="" />
        </button>
      </div>
    </div>
  );
}
