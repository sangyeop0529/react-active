import React, { useState } from "react";
import { BiCaretDown, BiSearch, BiCheck } from "react-icons/bi";
import DropDown from "./DropDown";

function Search(){
  const [toggleSort, setToggleSort] = useState(false);
  return(
    <div id="search">
      <p>
        <BiSearch />
        <input type="text" />
        <button type="button" onClick={()=>{setToggleSort(!toggleSort)}}>
          정렬하기
          <BiCaretDown />
        </button>
      </p>
      <DropDown 
        toggleSort={toggleSort}
      />
    </div>
  )
}

export default Search;