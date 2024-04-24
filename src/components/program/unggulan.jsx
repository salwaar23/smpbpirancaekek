import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

function Unggulan(){
    return(
        <div>
            <Nav/>
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <h1 className="text-[#005972] text-xl font-bold font-serif text-center">Program Unggulan</h1>
                <p className="text-[#005972] text-md font-serif text-center">SMP BPI RANCAEKEK</p>
                <div className="flex justify-center"><div className="inline-flex space-x-5 mt-7 pb-7 ml-10">
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Pembinaan Akhlak</p>
                    </div>
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Malam Bina Iman dan Taqwa</p>
                    </div>
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Bintalis</p>
                    </div>
                </div>
                </div>
                <div><Footer/></div>
            </div>

            <div id="mobile" className="lg:hidden mt-[100px] pb-[95px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="ml-2 font-serif font-bold text-lg">Program Unggulan</h1>
                    <p className="ml-2 font-serif text-sm">SMP BPI RANCAEKEK</p>
                </div>
                <div className="mt-6">
                    <p className="px-4"></p>
                    <p className="ml-10">
                        1. Pembinaan Akhlak<br/>
                        2. Malam Bina Iman dan Taqwa (Mabit)<br/>
                        3. Tahfidz Qur'an<br/>
                        4. English Elementary<br/>
                        5. Arabic Language
                    </p>
                </div>
                <div className="fixed bottom-0"><Footer/></div>
            </div>
            
        </div>
    )
}

export default Unggulan;