import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { getDatabase, onValue, ref, set, update} from "firebase/database"

function Products() {
  const Headers = [
    "#",
    "Product",
    "Description",
    "Price",
    "Quantity Left",
    "Purchase",
  ];

  const db = getDatabase(undefined,'https://chai-website-rohan-default-rtdb.asia-southeast1.firebasedatabase.app/');

  useEffect(() => {
    set(ref(db, 'users'), {
      username: 'Rohan',
      email: 'yo@gmail.com'
    });
    console.log("Testingggggggg")
    const query = ref(db, "products");
    console.log(query)
    onValue(query, (snapshot) => {
      console.log("Data is..." )
      const data = snapshot.val();
      console.log("Data is..." )
      console.log(data)

      if (snapshot.exists()) {
        // Object.values(data).map((spice) => {
        //   // setSpice((spices) => [...spices, spice]);
        //   console.log(spice)
        // });
        setOg(data['og'])
        setSpice(data['spice'])
        setZest(data['zest'])
        console.log(data['og'])
      }
    });
  }, []);



  const [og, setOg] = useState();
  const [spice, setSpice] = useState();
  const [zest, setZest] = useState();
  const [status, setstatus] = useState("");
  let statusColour

  const handleOg = () => {
    if (og !== 0) {
      // setOg(og - 1);
      setstatus("Purchased Successfully!");
      update(ref(db, 'products'), {
        og: og-1,
      });

    } else {
      setstatus("Out Of Stock!");
    }
  };

  const handleSpice = () => {
    if (spice !== 0) {
      // setSpice(spice - 1);
      setstatus("Purchased Successfully!");
      update(ref(db, 'products'), {
        spice: spice-1,
      });
    } else {
      setstatus("Out Of Stock!");
    }
  };

  const handleZest = () => {
    if (zest !== 0) {
      // setZest(zest - 1);
      setstatus("Purchased Successfully!");
      update(ref(db, 'products'), {
        zest: zest-1,
      });
    } else {
      setstatus("Out Of Stock!");
    }
  };

  if (status == "Out Of Stock!"){
    statusColour = <p style={{ color: "red" }}>{status}</p>
  }
  else{
    statusColour = <p style={{ color: "green" }}>{status}</p>
  }

  return (
    <div>
      {/* <NavBar /> */}
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
              <Button variant="primary" onClick={handleOg}>
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
              <Button variant="primary" onClick={handleSpice}>
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
              <Button variant="primary" onClick={handleZest}>
                Buy
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      {statusColour}
    </div>
  );
}

export default Products;
