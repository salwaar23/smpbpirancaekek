import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

function Kurikulum(){
    return(
        <div>
            <Nav/>
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <div id="header">
                    <h1 className="text-[#005972] text-center font-serif text-xl font-bold">Kegiatan</h1>
                    <p className="text-[#005972] text-center font-serif text-md">SMP BPI RANCAEKEK</p>
                </div>
                <div className="mt-5 pb-[110px]">
                    <p className="px-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in atque deserunt deleniti quia dignissimos, magni reprehenderit voluptate asperiores aspernatur vel, nihil laborum necessitatibus explicabo reiciendis repudiandae corporis illum. Labore.</p>
                </div>
            </div>


            <div id="mobile" className="lg:hidden mt-[100px] pb-[170px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="ml-2 font-serif text-lg font-bold">Kegiatan</h1>
                    <p className="ml-2 font-serif text-sm">SMP BPI RANCAEKEK</p>
                </div>
                <div className="mt-7 ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis exercitationem illo vitae rerum iusto atque ea fugiat minus dolor esse molestias ullam quae, soluta tenetur voluptates tempora voluptatibus quas.</div>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Kurikulum;