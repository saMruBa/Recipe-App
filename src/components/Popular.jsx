import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

import "@splidejs/splide/css";

const Card = styled.div`
  overflow: hidden;
  min-height: 25rem;
  position: relative;
  border-radius: 2rem;

  img {
    overflow: hidden;
    border-radius: 2rem;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  p {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  margin: 4rem 0;
  min-height: 20rem;

  h3 {
    margin-bottom: 2rem;
  }
`;

const Gradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
  z-index: 3;
`;

function Popular() {
  const [popular, setPopular] = useState([]);

  const requestPopular = async function () {
    const items = localStorage.getItem("popular");
    if (items) {
      setPopular(JSON.parse(items));
    } else {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=9abede69dc0b4c65a28b17bc5d8a1694&number=9`
      );

      const data = await req.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    requestPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Popular Recipes</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={/recipe/ + `${recipe.id}`}>
                    <p className="text">{recipe.title}</p>

                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      crossOrigin="Anonymous"
                    />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Popular;
