import { FC, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar: FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("SearchBar must be used within a ShopContextProvider");
  }

  const { search, setSearch, showSearch, setShowSearch } = context;
  const [visible, setVisible] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt=""
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
