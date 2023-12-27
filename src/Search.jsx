import { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchForm = document.querySelector(".content nav form");
  const searchBtnIcon = document.querySelector(
    ".content nav form .form-input button .bx"
  );
  const searchBtn = document.querySelector(".search-btn");

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

    if (window.innerWidth < 576) {
      searchForm.classList.toggle("show");
      if (searchForm.classList.contains("show")) {
        searchBtnIcon.classList.replace("bx-search", "bx-x");
      } else {
        searchBtnIcon.classList.replace("bx-x", "bx-search");
        searchBtn.style.background = "";
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
