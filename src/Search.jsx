/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";

const Search = ({ notifyRef, themeRef }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);
  const searchButtonRef = useRef(null);
  const searchIconRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      notifyRef.current.style.animation = "none";
      themeRef.current.style.animation = "none";
      searchButtonRef.current.style.animation = "none";
      //console.log(searchTerm);
      if (window.innerWidth > 576) {
        searchButtonRef.current.style.background = "var(--primary)";
        searchIconRef.current.style.color = "var(--light)";
        searchIconRef.current.classList.replace("bx-x", "bx-search");

        notifyRef.current.style.display = "";
        themeRef.current.style.display = "";
        searchButtonRef.current.style.display = "";
        searchInputRef.current.style.display = "";
        notifyRef.current.style.animation = "slideOutLeft 1.5s forwards";
        themeRef.current.style.animation = "slideOutLeft 1.5s forwards";
        searchButtonRef.current.style.animation = "slideOutLeft 1.5s forwards";
      }
      if (window.innerWidth < 576) {
        if (
          searchTerm.trim() == "" &&
          searchInputRef.current.classList.contains("show") == false
        ) {
          searchButtonRef.current.style.background = "transparent";
          searchIconRef.current.style.color = "var(--dark)";
        }

        if (searchTerm.trim() != "") {
          searchInputRef.current.classList.toggle("show");

          searchButtonRef.current.style.background = "var(--primary)";
          searchIconRef.current.style.color = "var(--light)";
          searchIconRef.current.classList.replace("bx-x", "bx-search");

          notifyRef.current.style.animation = "slideOutRight 1.5s forwards";
          themeRef.current.style.animation = "slideOutRight 1.5s forwards";
          setTimeout(() => {
            notifyRef.current.style.display = "none";
            themeRef.current.style.display = "none";
            searchButtonRef.current.style.display = "block";
            searchInputRef.current.style.display = "block";
          }, 500);
        }
      }
    };

    handleResize();
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);
    };
  }, [notifyRef, searchTerm, themeRef]);

  // Detecta as mudanças no input de pesquisa
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    if (window.innerWidth < 576) {
      if (inputValue != "") {
        searchButtonRef.current.style.background = "var(--primary)";
        searchIconRef.current.classList.replace("bx-x", "bx-search");
      } else {
        searchButtonRef.current.style.background = "var(--danger)";
        searchIconRef.current.classList.replace("bx-search", "bx-x");
      }
    }
  };

  // Detecta o clique no botão de pesquisa
  const handleSearchClick = (e) => {
    e.preventDefault();
    if (
      searchIconRef.current.classList.contains("bx-search") &&
      searchTerm.trim() !== ""
    ) {
      window.alert("Pesquisando: " + searchTerm);
    }

    if (window.innerWidth < 576) {
      if (searchButtonRef.current) {
        searchButtonRef.current.style.animation = "";
      }
      if (searchInputRef.current) {
        searchInputRef.current.classList.toggle("show");
      }

      if (searchInputRef.current.classList.contains("show")) {
        if (searchTerm.trim() == "") {
          searchButtonRef.current.style.background = "var(--danger)";
          searchIconRef.current.style.color = "var(--light)";
          searchIconRef.current.classList.replace("bx-search", "bx-x");
        } else {
          searchButtonRef.current.style.background = "var(--primary)";
          searchIconRef.current.style.color = "var(--light)";
          searchIconRef.current.classList.replace("bx-x", "bx-search");
        }

        notifyRef.current.style.animation = "slideOutRight 1.5s forwards";
        themeRef.current.style.animation = "slideOutRight 1.5s forwards";
        setTimeout(() => {
          notifyRef.current.style.display = "none";
          themeRef.current.style.display = "none";
          searchButtonRef.current.style.display = "block";
          searchInputRef.current.style.display = "block";
        }, 500);
      } else {
        searchIconRef.current.classList.replace("bx-x", "bx-search");
        searchButtonRef.current.style.background = "transparent";
        searchIconRef.current.style.color = "var(--dark)";

        notifyRef.current.style.display = "";
        themeRef.current.style.display = "";
        searchButtonRef.current.style.display = "";
        searchInputRef.current.style.display = "";
        notifyRef.current.style.animation = "slideOutLeft 1.5s forwards";
        themeRef.current.style.animation = "slideOutLeft 1.5s forwards";
        searchButtonRef.current.style.animation = "slideOutLeft 1.5s forwards";
      }
    }

    /*if (searchTerm.trim() !== "") {
      console.log("Termo de pesquisa:", searchTerm);
      searchIconRef.current.classList.replace("bx-x", "bx-search");
      searchButtonRef.style.background = "";
    }*/

    setSearchTerm("");
  };

  return (
    <form>
      <input
        className="search"
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
