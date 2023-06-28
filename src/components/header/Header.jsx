import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function searchQueryHandler(e) {
    e.preventDefault()
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
      setTimeout(()=>{
        setShowSearch(false)
      },100)
    }
  }

  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }

  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>

      <div className="contentWrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem"><HiOutlineSearch onClick={()=> setShowSearch(true)}/></li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch}/>
          {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
        </div>
      </div>

      {showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input type="text" placeholder='Search for a movie and TV show...' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} />
            <VscChromeClose onClick={()=> setShowSearch(false)}/>
          </div>
        </ContentWrapper>
      </div>}

    </header>
  )
};

export default Header;