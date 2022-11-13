import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Cuisine() {
  const params = useParams();

  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async function (item) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9abede69dc0b4c65a28b17bc5d8a1694&cuisine=${item}`
    );
    const res = await data.json();
    setCuisine(res.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {cuisine.map((recipe) => {
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

    a {
      text-decoration: none;
    }

    p {
      color: #333;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    text-align: center;
    font-family: inherit;
    font-weight: 600;
  }
`;

export default Cuisine;
