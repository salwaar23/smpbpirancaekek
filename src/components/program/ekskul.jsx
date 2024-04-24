import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

function Ekstrakurikuler(){
    return(
        <div>
            <Nav/>
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <h1 className="text-[#005972] text-xl font-bold font-serif text-center">Ekstrakurikuler</h1>
                <p className="text-[#005972] text-md font-serif text-center">SMP BPI RANCAEKEK</p>
                <div className="flex justify-center"><div className="inline-flex space-x-5 mt-7 pb-10 ml-10">
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Futsal</p>
                    </div>
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Pencak Silat</p>
                    </div>
                </div></div>
            </div>

            <div id="mobile" className="lg:hidden mt-[100px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="text-[#005972] ml-2 font-serif text-lg font-bold">Ekstrakurikuler</h1>
                    <p className="text-[#005972] ml-2 font-serif text-sm">SMP BPI RANCAEKEK</p>
                </div>
                <div className="flex justify-center mt-7">
                    <div className="bg-white w-[200px] h-[170px] rouded-lg shadow-2xl">
                        <img src="./src/components/assets/image3.png"/>
                        <p className="text-center font-bold">Futsal</p>
                    </div>
                </div>
                <div className="flex justify-center mt-7">
                    <div className="bg-white w-[200px] h-[170px] rouded-lg shadow-2xl">
                        <img src="./src/components/assets/image3.png"/>
                        <p className="text-center font-bold">Pencak Silat</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Ekstrakurikuler;