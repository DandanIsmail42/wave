import {
  Alert,
  Button,
  Container,
  Form,
  ListGroup,
  Stack,
} from "react-bootstrap";
import { useState } from "react";
import { ImPlus } from "react-icons/im";

const WaveDua = () => {
  const [nama, setNama] = useState("");
  const [hasilNama, setHasilNama] = useState("");
  const [namaPacar, setNamaPacar] = useState("");
  const [listPacar, setListPacar] = useState([]);

  return (
    <Container>
      {/* input nama */}
      <Stack direction="horizontal" gap="2" className="mt-4">
        <Form.Control
          type="text"
          placeholder="Masukan Nama . . ."
          onChange={(cb) => setNama(cb.target.value)}
        />
        <Button onClick={() => setHasilNama(nama)}>
          <ImPlus />
        </Button>
      </Stack>

      <h2 className="text-center mt-2">{hasilNama}</h2>

      {/* input nama pacar */}
      <Stack direction="horizontal" gap="2" className="mt-4">
        <Form.Control
          type="text"
          placeholder="Masukan Hoby"
          onChange={(cb) => setNamaPacar(cb.target.value)}
        />
        <Button onClick={() => setListPacar([namaPacar, ...listPacar])}>
          <ImPlus />
        </Button>
      </Stack>

      {/* list nama pacar */}
      <ListGroup className="mt-5">
        {listPacar.map((pcr, id) => {
          return (
            <Alert variant="success" key={id}>
              {pcr}
            </Alert>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default WaveDua;

// const [nama, setNama] = useState('') // ini buat nama pacar
//   const [pacar, setPacar] = useState('') // ini buat inputan
//   const [hasil, setHasil] = useState('')

// const pacarIdaman = 'Ariel Tatum'

//   const validasiPacar = () => {
//     // console.log('Aman Cuy')
//     // if(nama === pacarIdaman) {
//     //   alert('Anjay tercapai')
//     // } else{
//     //   alert('Kureng si lu')
//     // }

//     nama === pacarIdaman ? setHasil('KEREN BRO') : setHasil('Coba lagi')
//   }

{
  /* <marquee>
        <h1>{hasil}</h1>
      </marquee>
     <h1>pacar idaman : {nama}</h1>
     <i>Realtime data : {pacar}</i>
     <br />
     <br />
     <input type="string"
      placeholder='blog!'
      onChange={(cb) => setPacar(cb.target.value)} />
     <Button variant="outline-success" size='sm' onClick={() => setNama(pacar)}>SET PACAR SEKARANG</Button>
     <br />
     
     <br /> */
}
