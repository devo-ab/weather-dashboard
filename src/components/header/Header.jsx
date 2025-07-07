import { useState } from "react";
import Favorite from "./components/Favorite";
import FavoriteListModal from "./components/FavoriteListModal";
import Logo from "./components/Logo";
import Search from "./components/Search";
export default function Header() {
  const [showFavModal, setShowFavModal] = useState(false);

  return (
    <header className="w-full z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo></Logo>

        <div className="flex items-center gap-4 relative">
          <Search></Search>

          <Favorite onShow={() => setShowFavModal(!showFavModal)}></Favorite>

          {showFavModal && <FavoriteListModal></FavoriteListModal>}
        </div>
      </nav>
    </header>
  );
}
