import { Nav } from "rsuite";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav className="gap-5 w-[350px] mx-auto mt-auto h-1/2 relative items-start m-2 flex">
      <Nav.Menu title="CATEGORIES" className="w-full  px-2 pb-1">
        <Nav.Item>Electric</Nav.Item>
        <Nav.Item>Acoustic</Nav.Item>
        <Nav.Item>Bass</Nav.Item>
        <Nav.Item>AudioPro</Nav.Item>
      </Nav.Menu>
      <Nav.Menu title="BRANDS" className="w-full  px-2 pb-1">
        <Nav.Item>Item E-1</Nav.Item>
        <Nav.Item>Item E-2</Nav.Item>
        <Nav.Item>Item E-3</Nav.Item>
        <Nav.Item>Item E-4</Nav.Item>
      </Nav.Menu>
      <Nav.Item className="w-full  px-2 pb-1">
        <Link to="/about">ABOUT</Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
