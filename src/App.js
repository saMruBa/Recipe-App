import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { ImSpoonKnife } from "react-icons/im";
import styled from "styled-components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <LogoWrapper>
        <Logo />
        <Link to="/">Deliciousss</Link>
      </LogoWrapper>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    font-size: 1.4rem;
    font-family: "Lobster Two", cursive;
    color: #333;
  }
`;

const Logo = styled(ImSpoonKnife)`
  font-size: 2rem;
`;

export default App;
