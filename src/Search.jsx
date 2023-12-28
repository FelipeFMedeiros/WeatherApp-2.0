import { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchForm = document.querySelector(".content nav form");
  const searchBtnIcon = document.querySelector(
    ".content nav form .form-input button .bx"
  );
  const searchBtn = document.querySelector(".search-btn");
  const notify = document.querySelector(".notif");
  const theme = document.querySelector(".theme-toggle");
  const searchContainer = document.querySelector(".search")

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    if (window.innerWidth < 576) {
      if (inputValue != "") {
        searchBtn.style.background = "var(--primary)";
        searchBtnIcon.classList.replace("bx-x", "bx-search");
      } else {
        searchBtn.style.background = "var(--danger)";
        searchBtnIcon.classList.replace("bx-search", "bx-x");
      }
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (searchBtnIcon.classList.contains("bx-search") && searchTerm.trim() !== "") {
        window.alert("Vai pesquisar");
    }

    if (window.innerWidth < 576) {
      searchBtn.style.animation = "";
      
      searchForm.classList.toggle("show");
      if (searchForm.classList.contains("show")) {
        searchBtnIcon.classList.replace("bx-search", "bx-x");
        notify.style.animation = "slideOutRight 1.5s forwards";
        theme.style.animation = "slideOutRight 1.5s forwards";
        setTimeout(() => {
          notify.style.display = "none";
          theme.style.display = "none";
          searchBtn.style.display = "block";
          searchContainer.style.display = "block";
        }, 500);
      } else {
        searchBtnIcon.classList.replace("bx-x", "bx-search");
        searchBtn.style.background = "";

        notify.style.display = "";
        theme.style.display = "";
        searchBtn.style.display = "";
        searchContainer.style.display = "";
        notify.style.animation = "slideOutLeft 1.5s forwards";
        theme.style.animation = "slideOutLeft 1.5s forwards";
        searchBtn.style.animation = "slideOutLeft 1.5s forwards";
      }
    }

    if (searchTerm.trim() !== "") {
      console.log("Termo de pesquisa:", searchTerm);
      searchBtnIcon.classList.replace("bx-x", "bx-search");
      searchBtn.style.background = "";
    }
    setSearchTerm("");
  };

  return (
    <div className="form-input">
      <input
        className="search"
        type="search"
        placeholder="Pesquise sua localização"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-btn" type="submit" onClick={handleSearchClick}>
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
};

export default Search;
