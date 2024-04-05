import Footer from "../Footer";
import Nav from "../Nav";
import React from "react";

function Biaya(){
    return(
        <div>
            <Nav/>
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <h1 className="text-[#005972] text-xl font-serif font-bold text-center">Biaya</h1>
                <p className="text-[#005972] text-md font-serif text-center">SMP BPI RANCAEKEK</p>
                <div><Footer/></div>
            </div>

            <div id="mobile" className="lg:hidden mt-[100px] pb-[320px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="ml-2 font-serif font-bold text-lg">Biaya</h1>
                    <p className="ml-2 font-serif text-sm">SMP BPI RANCAEKEK</p>
                </div>
                <div className="fixed bottom-0"><Footer/></div>
            </div>         
        </div>
    )
}

export default Biaya;