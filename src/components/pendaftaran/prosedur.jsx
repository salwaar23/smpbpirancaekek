import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

function Prosedur(){
    return(
        <main>
            <Nav/>
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <h1 className="text-[#005972] text-xl font-serif font-bold text-center">Prosedur Pendaftaran</h1>
                <p className="text-[#005972] text-md font-serif text-center">SMP BPI RANCAEKEK</p>
            </div>

            <div id="mobile" className="lg:hidden mt-[100px] pb-[120px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="text-[#005972] ml-2 font-serif font-bold text-lg">Prosedur Pendaftaran</h1>
                    <p className="text-[#005972] ml-2 font-serif text-sm">SMP BPI RANCAEKEK</p>
                </div>
                <div className="px-4 mt-5">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia adipisci ab ratione illo sit eaque et, minima cupiditate harum eius in voluptatem quia recusandae, magnam, quo labore veritatis rerum tempore.</p>
                    <div className="bg-[#005972] w-[150px] text-center mt-5 text-white rounded-xl py-2 ml-20">Daftar Sekarang</div>
                </div>

            </div>
            <div className=""><Footer/></div>
        </main>
    )
}

export default Prosedur;