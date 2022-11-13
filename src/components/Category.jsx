import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiCroissant } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Box = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  gap: 2rem;

  li {
    list-style: none;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  background: linear-gradient(95deg, #2a2a2a, #5d5d5d);
  text-decoration: none;
  border-radius: 50%;
  color: #fff;
  width: 5rem;
  height: 5rem;
  font-family: inherit;

  svg {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
  }

  &.active {
    background: linear-gradient(30deg, #f92, #ff3d2a);
    /* color: #222; */
  }
`;

function Category() {
  return (
    <Box>
      <li>
        <SLink to="/cuisine/Italian">
          <FaPizzaSlice />
          <p>Italian</p>
        </SLink>
      </li>
      <li>
        <SLink to="/cuisine/American">
          <FaHamburger />
          <p>American</p>
        </SLink>
      </li>
      <li>
        <SLink to="/cuisine/Thai">
          <GiNoodles />
          <p>Thai</p>
        </SLink>
      </li>
      <li>
        <SLink to="/cuisine/French">
          <GiCroissant />
          <p>French</p>
        </SLink>
      </li>
    </Box>
  );
}

export default Category;
