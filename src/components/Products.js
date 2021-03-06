import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import NavBar from "./NavBar";

function Products() {
  const Headers = [
    "#",
    "Product",
    "Description",
    "Price",
    "Quantity Left",
    "Purchase",
  ];
  const [og, setOg] = useState(20);
  const [spice, setSpice] = useState(10);
  const [zest, setZest] = useState(8);
  const [status, setstatus] = useState("");

  const handleOg = () => {
    if (og !== 0) {
      setOg(og - 1);
      setstatus("Purchased Successfully!");
    } else {
      setstatus("Out Off Stock!");
    }
  };

  const handleSpice = () => {
    if (spice !== 0) {
      setSpice(spice - 1);
      setstatus("Purchased Successfully!");
    } else {
      setstatus("Out Off Stock!");
    }
  };

  const handleZest = () => {
    if (zest !== 0) {
      setZest(zest - 1);
      setstatus("Purchased Successfully!");
    } else {
      setstatus("Out Off Stock!");
    }
  };

  return (
    <div>
      <NavBar />
      <Table striped bordered hover>
        <thead>
          <tr>
            {Headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Original Blend</td>
            <td>The original our customers have known to love</td>
            <td>$12.00</td>
            <td>{og}</td>

            <td>
              <Button variant="outline-secondary" onClick={handleOg}>
                Buy
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Extra Spice</td>
            <td>Same great taste, with more of a kick</td>
            <td>$16.00</td>
            <td>{spice}</td>

            <td>
              <Button variant="outline-secondary" onClick={handleSpice}>
                Buy
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Zesty</td>
            <td>A hint of lemon zest for a tangy texture</td>
            <td>$16.00</td>
            <td>{zest}</td>
            <td>
              <Button variant="outline-secondary" onClick={handleZest}>
                Buy
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <p style={{ color: "green" }}>{status}</p>
    </div>
  );
}

export default Products;
