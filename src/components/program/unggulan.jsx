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
                <div className="inline-flex space-x-5 mt-7 pb-10 ml-10">
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white rounded-lg w-[300px] h-[200px] shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[240px] ml-7"/>
                        <p className="text-center font-bold">Lorem Ipsum</p>
                    </div>
                </div>
            </div>

            <div id="mobile" className="lg:hidden mt-[100px] pb-[150px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="ml-2 font-serif font-bold text-lg">Program Unggulan</h1>
                    <p className="ml-2 font-serif text-sm">SMP BPI RANCAEKEK</p>
                </div>
                <div className="mt-6">
                    <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque fuga tempore itaque numquam consequatur facere, enim laboriosam eveniet. Mollitia esse recusandae id voluptates ipsa officiis dolorum quisquam iusto vitae.</p>
                </div>
            </div>
            <div className=""><Footer/></div>
        </div>
    )
}

export default Unggulan;