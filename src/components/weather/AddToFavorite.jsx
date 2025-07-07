import { useContext, useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import redHeart from "../../assets/heart-red.svg";
import { FavoriteContext } from "../../context/FavoriteContext";
import { WeatherContext } from "../../context/WeatherContext";

export default function AddToFavorite() {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [isFavorite, toggleFavorite] = useState(false);
  const { latitude, longitude, location } = weatherData;


  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorite(found)
  },[])

  const handleFavorites = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }

    toggleFavorite(!isFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorites}
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? redHeart : heart} alt="" />
        </button>
      </div>
    </div>
  );
}
