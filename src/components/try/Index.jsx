import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Index = () => {
  const [namaBarang, setNamaBarang] = useState("");
  const [listBarang, setListBarang] = useState([]);

  const handleBtn = () => {
    setListBarang([namaBarang, ...listBarang]);
    setNamaBarang("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNamaBarang(e.target.value)}
        value={namaBarang}
        placeholder="Masukan nama barang"
      />

      <button onClick={handleBtn}>Submit</button>
      {listBarang.map((ltb, id) => {
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nama Barang</th>
                <th>Harga Barang</th>
              </tr>
            </thead>
            <tbody>
              <tr key={id}>
                <td>{ltb}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </div>
  );
};

export default Index;
