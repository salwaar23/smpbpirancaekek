import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/Nav";
import VisiMisi from "./components/profil/visiMisi";
import Fasilitas from "./components/profil/fasilitas";
import Sekolah from "./components/profil/sekolah";
import Prestasi from "./components/profil/prestasi";
import Kurikulum from "./components/program/kurikulum";
import Unggulan from "./components/program/unggulan";
import Ekstrakurikuler from "./components/program/ekskul";
import Prosedur from "./components/pendaftaran/prosedur";
import Biaya from "./components/pendaftaran/biaya";
import Kontak from "./components/kontak";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter basename="/">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nav" element={<Nav/>}/>
        <Route path="/visimisi" element={<VisiMisi/>}/>
        <Route path="/fasilitas" element={<Fasilitas/>}/>
        <Route path="/sekolah" element={<Sekolah/>}/>
        <Route path="/prestasi" element={<Prestasi/>}/>
        <Route path="/kurikulum" element={<Kurikulum/>}/>
        <Route path="/unggulan" element={<Unggulan/>}/>
        <Route path="/ekskul" element={<Ekstrakurikuler/>}/>
        <Route path="/prosedur" element={<Prosedur/>}/>
        <Route path="/biaya" element={<Biaya/>}/>
        <Route path="/kontak" element={<Kontak/>}/>
        <Route path="/footer" element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
