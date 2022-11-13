import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Searched() {
  const params = useParams();
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  const searchResult = params.search;

  const getSearchedRecipe = async function (item) {
    const query = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9abede69dc0b4c65a28b17bc5d8a1694&query=${item}`
    );

    const data = await query.json();

    setSearchedRecipe(data.results);
  };

  useEffect(() => {
    getSearchedRecipe(searchResult);
  }, [searchResult]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {searchedRecipe.map((recipe) => {
        return (
          <li key={recipe.id}>
            <Link to={/recipe/ + `${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                crossOrigin="anonymous"
              />
              <p>{recipe.title}</p>
            </Link>
          </li>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.ul)`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;

  li {
    margin: 1.5rem;
    border-radius: 1rem;
    width: 100%;
    height: 70%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    text-align: center;
    font-family: inherit;
    font-weight: 600;
  }
`;

export default Searched;
