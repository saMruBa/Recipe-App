import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const InputFieldHandler = function (e) {
    setInputValue(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    navigate(`/searched/${inputValue}`);
  };

  return (
    <SearchBox onSubmit={submitHandler}>
      <div>
        <BiSearch />
        <input onChange={InputFieldHandler} value={inputValue} type="text" />
      </div>
    </SearchBox>
  );
}

const SearchBox = styled.form`
  div {
    position: relative;
    width: 60%;
    margin: 0 auto;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 2rem;
    margin-left: 1rem;
  }

  input {
    padding: 1rem 4rem;
    border: none;
    background: linear-gradient(5deg, #2a2a2a, #5d5d5d);
    border-radius: 2rem;
    outline: none;
    color: #fff;
    width: 100%;
    font-family: inherit;
  }
`;

export default Search;
