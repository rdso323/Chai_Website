import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import NavBar from "./NavBar";

function Products() {
  const Headers = ["#", "Product", "Description", "Quantity Left", "Purchase"];
  const [og, setOg] = useState(20);
  const [spice, setspice] = useState(10);
  const [zest, setzest] = useState(8);
  const [status, setstatus] = useState("");

  const handleOg = () => {
    setOg(og - 1);
    setstatus("Purchased Successfully!");
  };

  const handleSpice = () => {
    //setOg(og - 1);
    setstatus("Purchased Successfully!");
  };

  const handleZest = () => {
    //setOg(og - 1);
    setstatus("Purchased Successfully!");
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
            <td>{spice}</td>
            <td>
              <Button variant="outline-secondary">Buy</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Zesty</td>
            <td>A hint of lemon zest for a tangy texture</td>
            <td>{zest}</td>
            <td>
              <Button variant="outline-secondary">Buy</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <p style={{ color: "green" }}>{status}</p>
    </div>
  );
}

export default Products;
