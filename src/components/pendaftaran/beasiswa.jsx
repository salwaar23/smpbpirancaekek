import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

function Beasiswa(){
    return(
        <div>
            <Nav/>
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <h1 className="text-[#005972] text-xl font-serif font-bold text-center">Beasiswa</h1>
                <p className="text-[#005972] text-md font-serif text-center">SMP BPI RANCAEKEK</p>
            </div>

            <div id="mobile" className="lg:hidden mt-[100px] pb-[320px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="ml-2 font-serif font-bold text-lg">Beasiswa</h1>
                    <p className="ml-2 font-serif text-sm">SMP BPI RANCAEKEK</p>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Beasiswa;