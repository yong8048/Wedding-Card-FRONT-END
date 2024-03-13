import { useEffect, useState } from "react";
import * as S from "./style";

import { IoArrowBackOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const [storageData, setStorageData] = useState<string[]>([]);

  useEffect(() => {
    const savedSearches = localStorage.getItem("searchData");
    if (savedSearches) {
      setStorageData(JSON.parse(savedSearches));
    }
  }, []);

  const changeSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const clickSearch = () => {
    if (searchData === "") {
      alert("검색어를 추가하세요.");
    } else {
      const newStorageList = [...storageData, searchData];
      setStorageData(newStorageList);
      localStorage.setItem("searchData", JSON.stringify(newStorageList));
      alert("검색어가 저장되었습니다");
    }
  };

  return (
    <S.Container>
      <S.BackLink to={"/"}>
        <IoArrowBackOutline size={26} />
      </S.BackLink>
      <input type="text" onChange={changeSearchData} />
      <button onClick={clickSearch}>
        <IoSearch size={20} />
      </button>
    </S.Container>
  );
};

export default Header;
