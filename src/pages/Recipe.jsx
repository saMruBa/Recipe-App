import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRightCircleFill } from "react-icons/bs";

function Recipe() {
  const params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async function (id) {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=9abede69dc0b4c65a28b17bc5d8a1694`
    );

    const data = await res.json();
    console.log(data);
    setDetails(data);
  };

  useEffect(() => {
    fetchDetails(params.id);
  }, [params.id]);

  const [activeBtn, setActiveButton] = useState("instructions");

  const instructionsHandler = function () {
    setActiveButton("instructions");
  };

  const ingredientHandler = function () {
    setActiveButton("ingredients");
  };

  const btn = activeBtn === "instructions" ? true : false;

  return (
    <Wrapper key={details.id}>
      <Image>
        <img src={details.image} alt="" />
        <h3>{details.title}</h3>
        <div></div>
      </Image>
      <ButtonWrapper>
        <button onClick={instructionsHandler} className={btn ? "active" : ""}>
          Instructions
        </button>
        <button onClick={ingredientHandler} className={!btn ? "active" : ""}>
          Ingredients
        </button>
      </ButtonWrapper>

      {btn && (
        <DetailRecipe>
          <h3>Summary :-</h3>
          <Summary
            dangerouslySetInnerHTML={{ __html: details.summary }}
          ></Summary>
          <h3>Instructions :-</h3>

          <div>{details.instructions}</div>
        </DetailRecipe>
      )}

      {!btn && (
        <List>
          {details.extendedIngredients.map((item) => {
            return (
              <li key={item.id}>
                <BsArrowRightCircleFill />

                <span>{item.original}</span>
              </li>
            );
          })}
        </List>
      )}
    </Wrapper>
  );
}

const List = styled.ul`
  padding-top: 3rem;
  font-size: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* gap: 1rem; */
    flex: 0 0 49%;

    @media screen and (max-width: 1200px) {
      align-items: center;
      flex: 0 0 100%;
    }
  }

  svg {
    margin: 0.5rem 1rem 0 0;
    width: 2em;
    height: 2rem;
    font-size: 2rem;
    color: #f92;
    align-self: flex-start;
  }
`;

const DetailRecipe = styled.div`
  h3 {
    padding: 2rem 0;
  }
`;

const Summary = styled.div`
  b {
    color: #f92;
  }

  a {
    text-decoration: none;
    font-family: inherit;
    color: #000;
    font-style: italic;

    font-weight: 700;

    &:hover {
      color: #ff3d2a;
    }
  }
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  font-family: inherit;
  font-size: 1.4rem;
  color: #333;
  line-height: 1.9;
`;

const Image = styled.div`
  position: relative;

  img {
    height: 30rem;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
    position: absolute;
    top: 5%;
    right: 3%;
    z-index: 5;
    /* color: #4d4d4d; */
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;

  button {
    padding: 1rem 2rem;
    background: linear-gradient(5deg, #2a2a2a, #5d5d5d);
    color: #fff;
    border: none;
    font-family: inherit;
    border-radius: 0.5rem;

    &:hover {
      cursor: pointer;
      background: linear-gradient(5deg, #2a2a2aef, #5d5d5df5);
    }

    &.active {
      background: linear-gradient(30deg, #f92, #ff3d2a);
    }
  }
`;

export default Recipe;
