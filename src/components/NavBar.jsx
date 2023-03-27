import { Nav } from "rsuite";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Nav className="w-11/12 mx-auto mt-auto h-1/2 relative mx-auto items-start m-2 flex justify-around columns-4">
    <Nav.Menu
      title="CATEGORIES "
      className="relative w-full bg-headerAndFooterColor px-2 pb-1"
    >
      <Nav.Item>Electro</Nav.Item>
      <Nav.Item>Acoustic</Nav.Item>
      <Nav.Item>Bass</Nav.Item>
      <Nav.Item>Item E-4</Nav.Item>
      <Nav.Menu title="Item E-4">
        <Nav.Item>Item E-4-1</Nav.Item>
        <Nav.Item active>Item E-4-2</Nav.Item>
        <Nav.Item>Item E-4-3</Nav.Item>
      </Nav.Menu>
    </Nav.Menu>
    <Nav.Menu
      title="BRANDS"
      className="relative w-full bg-headerAndFooterColor px-2 pb-1"
    >
      <Nav.Item>Item E-1</Nav.Item>
      <Nav.Item>Item E-2</Nav.Item>
      <Nav.Item>Item E-3</Nav.Item>
      <Nav.Item>Item E-4</Nav.Item>
      <Nav.Menu title="Item E-4">
        <Nav.Item>Item E-4-1</Nav.Item>
        <Nav.Item active>Item E-4-2</Nav.Item>
        <Nav.Item>Item E-4-3</Nav.Item>
      </Nav.Menu>
    </Nav.Menu>
    <Nav.Item className="relative w-full bg-headerAndFooterColor px-2 pb-1">
      <Link to="/about">ABOUT US</Link>
    </Nav.Item>

    <Nav.Menu
      title="LOGIN"
      className="relative w-full bg-headerAndFooterColor px-2 pb-1"
    >
      <Nav.Item>Item E-1</Nav.Item>
      <Nav.Item>Item E-2</Nav.Item>
      <Nav.Item>Item E-3</Nav.Item>
      <Nav.Item>Item E-4</Nav.Item>
      <Nav.Menu title="Item E-4">
        <Nav.Item>Item E-4-1</Nav.Item>
        <Nav.Item active>Item E-4-2</Nav.Item>
        <Nav.Item>Item E-4-3</Nav.Item>
      </Nav.Menu>
    </Nav.Menu>
  </Nav>
);

export default NavBar;
