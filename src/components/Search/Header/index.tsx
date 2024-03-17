import { useEffect, useRef, useState } from "react";
import * as S from "./style";

import { IoArrowBackOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const [storageData, setStorageData] = useState<string[]>([]);
  const { word } = useParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const savedSearches = localStorage.getItem("searchData");
    if (savedSearches) {
      setStorageData(JSON.parse(savedSearches));
    }
  }, []);

  useEffect(() => {
    setSearchData(word as string);
    if (inputRef.current) {
      inputRef.current.value = "";
      console.log(inputRef.current.value);
    }
  }, [word]);

  const clickBack = () => {
    navigate(-1);
  };

  const changeSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const clickSearch = () => {
    if (!searchData) {
      alert("검색어를 추가하세요.");
    } else {
      const newStorageList = [...storageData, searchData];
      setStorageData(newStorageList);
      localStorage.setItem("searchData", JSON.stringify(newStorageList));
      navigate(`/search/${searchData}`);
    }
  };

  return (
    <S.Container>
      <S.BackLink onClick={clickBack}>
        <IoArrowBackOutline size={26} />
      </S.BackLink>
      <input type="text" onChange={changeSearchData} value={searchData} ref={inputRef} />
      <button onClick={clickSearch}>
        <IoSearch size={20} />
      </button>
    </S.Container>
  );
};

export default Header;
