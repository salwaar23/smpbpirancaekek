import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function home(){

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() =>{
        AOS.init({duration:1200})
    })

    const images = [
        "./assets/IMG_0184.JPG",
        "./assets/WhatsApp Image 2024-01-25 at 08.38.36_f5dee3f8.jpg",
        "./assets/anbk.jpeg",
        "./assets/IMG_8631.JPEG",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length); 
        }, 5000); 

        return () => clearInterval(intervalId); 
    }, []);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length); 
    };

    return(
        <div>
            <Nav />
            <div id="desktop-carousel" className="lg:block hidden max-width:768px mt-[100px]">
                <div id="main" className="bg-[#005972] inline-flex py-10 w-full h-[380px]">
                    <div className="mt-[100px] ml-6">
                        <span className="text-3xl font-serif text-white font-bold">Profil&nbsp;SMP&nbsp;BPI&nbsp;Rancaekek</span><br />
                        <p className="text-sm text-white ">SMP BPI Rancaekek merupakan Sekolah Menengah Pertama yang berada di Kab. Bandung. Berlokasi di <br/>desa Nanjung Mekar, Kec. Rancekek, Kab. Bandung. Sudah terakreditasi "B" dengan berbagai program unggulan untuk menunjang<br/> kompetensi akademik siswa.</p>
                    </div>
                    <div className="overflow-auto rounded-lg w-[400px] h-[300px] absolute right-14">
                        <img src={images[currentSlide]} 
                            alt="Carousel Image"
                            className="h-[300px]" />         
                        </div>
                    <button onClick={handlePreviousSlide} className="absolute right-[400px] top-[270px] bg-white rounded-full p-2"><GrPrevious/></button>
                    <button onClick={handleNextSlide} className="absolute right-[80px] top-[270px] bg-white rounded-full p-2"><GrNext/></button>
                </div>
            </div>
            <div className="lg:block hidden mt-[100px] ml-10">
                <div className="inline-flex">
                    <img src="./assets/image6.png" className="h-[400px] rounded-lg sticky left-[100px]"/>
                    <div className="absolute right-[150px]" data-aos="flip-up">
                        <h1 className="text-[#EE9322] font-bold text-3xl text-center mt-20">Mengapa SMP BPI Rancaekek?</h1>
                        <p className="text-left mt-4">1. Sudah terakreditasi "B" <br/>2. Memiliki beberapa program unggulan<br/> 3. Beragam ekstrakurikuler sesuai minat dan bakat<br/>4. Fasilitas Lengkap<br/>5. Tenaga pendidik dan kependidikan yang profesional</p>
                        <div className="flex justify-center"><a href="https://forms.gle/s12kvk4unqdfsejQA"><button className="text-2xl bg-[#005972] px-7 py-2 rounded-lg text-white mt-4 inline-flex">Daftar Sekarang<FaArrowRight className="ml-2 mt-[5px]"/></button></a></div>
                    </div>
                </div>
            </div>
            <div className="lg:block hidden mt-20" data-aos="fade-up">
                <div className="bg-[#EE9322] w-full h-[400px] shadow-xl">
                    <div className="inline-flex mt-[60px]">
                        <div className="ml-10 pt-5">
                            <div className="text-white text-3xl font-bold mt-20">Sambutan Kepala Sekolah</div>
                            <p className="text-white text-sm mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos et ratione mollitia, ex animi nulla atque id<br/> cum optio quod eveniet tempora deserunt quam est. Rem sit iusto nam voluptatibus!</p>
                        </div>
                        <img src="./assets/image5.jpg" className="w-[400px] ml-[200px] absolute right-16"/>
                    </div>
                </div>
            </div>


            
            <div id="mobile-carousel" className="lg:hidden flex justify-center w-full mt-[100px]">
                <button onClick={handlePreviousSlide} className="absolute left-5 top-[230px] bg-white rounded-full p-2"><GrPrevious/></button>
                <div className="overflow-auto rounded-lg w-full h-full flex justify-center">
                    <img src={images[currentSlide]} 
                        alt="Carousel Image"
                        className="h-[300px]" />         
                </div>
                <button onClick={handleNextSlide} className="absolute right-5 top-[230px] bg-white rounded-full p-2"><GrNext/></button>
            </div>
            <div className="lg:hidden mt-10 flex justify-center">
                <div className="box-border bg-[#005972] w-[280px] rounded-md absolute top-[427px]">
                    <h1 className="text-center text-white text-xl font-serif">Profil SMP BPI RANCAEKEK</h1>
                </div>
                <div className="box-border bg-slate-200 w-[350px] h-[200px] rounded-lg shadow-lg">
                    <p className="py-10 text-center text-sm px-4 pb-4">SMP BPI Rancaekek merupakan Sekolah Menengah Pertama yang berada di Kab. Bandung. Berlokasi di desa Nanjung Mekar, Kec. Rancekek, Kab. Bandung. Sudah terakreditasi "B" dengan berbagai program unggulan untuk menunjang kompetensi akademik siswa serta beragam ekstrakurikuler sebagai sarana pengembangan minat dan bakat siswa.</p>
                </div>
            </div>
            <div className="lg:hidden mt-[100px] flex justify-center mx-4" data-aos="zoom-in-up" data-aos-duration="300">
                <div className="box-border border-1 bg-white w-[400px] h-[500px] rounded-lg shadow-lg">
                    <h1 className="text-center font-bold text-[#EE9322] text-xl mt-5">Mengapa SMP BPI Rancaekek</h1>
                    <div className="flex justify-center" data-aos="fade-up"><img className="w-[200px] h-[200px]" src="./assets/image6.png"/></div>
                    <p className="text-sm mx-6 mt-5 text-left" data-aos="fade-up">1. Sudah terakreditasi "B"<br/>2. Memiliki beberapa program unggulan<br/>3. Beragam ekstrakurikuler sesuai minat dan bakat<br/>4. Fasilitas Lengkap<br/>5. Tenaga pendidik dan kependidikan yang profesional</p>         
                    <a href="https://forms.gle/s12kvk4unqdfsejQA"><div className="flex justify-center"><button className="w-[150px] bg-[#005972] text-center text-white py-1 rounded-lg mt-10">Daftar Sekarang</button></div></a>
                </div>
            </div>
            <div className="lg:hidden flex justify-center pb-[40px] mt-10" data-aos="fade-up">
                <div className="box-border bg-[#EE9322] w-[300px] h-[450px] shadow-lg rounded-lg mt-10">
                    <div className="text-white text-center font-semibold mt-2 text-xl font-serif">Sambutan Kepala Sekolah</div>
                    <div className="flex justify-center"><img src="./assets/image5.jpg" className="w-[200px] rounded-lg mt-4"/></div>
                    <blockquote className="text-white ml-4 text-4xl mt-6">❝</blockquote>
                    <div className="text-white -mt-10 ml-14 text-sm pr-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis! Unde veniam sunt distinctio asperiores, in eum et, consectetur, vero nam iusto nihil ut incidunt reprehenderit est perferendis illo odit.</div>
                </div>
            </div>
        <div className=""><Footer/></div>            
        </div>
    )
}

export default home;