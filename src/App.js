import "./App.css";
import Index from "./components/try/Index.jsx";
// import WaveSatu from './components/wave1/WaveSatu';
// import WaveDua from './components/wave1&2/WaveDua';

function App() {
  return (
    <div>
      <Index />
      {/* <WaveDua /> */}
      {/* <WaveSatu /> */}
    </div>
  );
}

export default App;

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
