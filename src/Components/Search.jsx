/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { indexJS } from "../scripts/index.js";
import { findIP } from "../scripts/findIP.js";

const Search = ({ notifyRef, themeRef, navRef }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const searchInputRef = useRef(null);
  const searchButtonRef = useRef(null);
  const searchIconRef = useRef(null);
  const searchTermRef = useRef("");
  let inputValue = "";
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      console.log("useEffect 1");
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWindowWidth(newWidth);
      setWindowHeight(newHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    console.log("Window size changed!");
    setSearchTerm("");

    if (windowWidth < 576) {
      setIsButtonClicked(false);
      searchButtonRef.current.style.background = "none";
      searchIconRef.current.className = "bx bx-search";
    }
    if (windowWidth > 576) {
      searchButtonRef.current.style.background = "var(--primary)";
      searchIconRef.current.className = "bx bx-search";
    }
  }, [windowWidth]);

  useEffect(() => {
    // Carrega o indexJS e a localização do usuário
    const LoadPageSearch = () => {
      findIP().then((location) => indexJS(location));
    };
    LoadPageSearch();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 576) {
      if (isButtonClicked) {
        searchIconRef.current.className = "bx bx-x";
        searchButtonRef.current.style.background = "var(--danger)";

        searchInputRef.current.focus();
        notifyRef.current.style.display = "none";
        themeRef.current.style.display = "none";
      } else {
        notifyRef.current.style.display = "";
        themeRef.current.style.display = "";
        searchButtonRef.current.style.background = "none";
      }
    }
  }, [isButtonClicked]);

  // Detecta a mudança no valor do input
  const handleInputChange = (e) => {
    inputValue = e.target.value;
    setSearchTerm(inputValue);
    searchTermRef.current = inputValue;
    if (inputValue == "") {
      searchIconRef.current.className = "bx bx-x";
      searchButtonRef.current.style.background = "var(--danger)";
    } else {
      searchIconRef.current.className = "bx bx-search";
      searchButtonRef.current.style.background = "var(--primary)";
    }
  };

  // Função para lidar com o clique no botão de pesquisa
  const handleSearchClick = (e) => {
    e.preventDefault();

    if (window.innerWidth < 576) {
      setIsButtonClicked(!isButtonClicked);
      setSearchTerm("");
    }

    if (searchIconRef.current.classList.contains("bx-x")) {
      setSearchTerm("");
      searchIconRef.current.className = "bx bx-search";
      searchButtonRef.current.style.background = "var(--primary)";
    } else if (
      searchIconRef.current.classList.contains("bx-search") &&
      searchTerm.trim() !== ""
    ) {
      indexJS(searchTerm);
      setSearchTerm("");
    }
  };

  // Fecha o campo de pesquisa quando clicar fora de <form>
  const handleClickOutside = () => {
    if (window.innerWidth < 576) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsButtonClicked(false);
        setSearchTerm("");
        searchIconRef.current.className = "bx bx-search";
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className={isButtonClicked ? "show" : ""}>
      <input
        className={`search`}
        type="search"
        placeholder="Pesquise sua localização"
        value={searchTerm}
        onChange={handleInputChange}
        ref={searchInputRef}
      />
      <button
        className="search-btn"
        type="submit"
        onClick={handleSearchClick}
        ref={searchButtonRef}>
        <i className="bx bx-search" ref={searchIconRef}></i>
      </button>
    </form>
  );
};

export default Search;
