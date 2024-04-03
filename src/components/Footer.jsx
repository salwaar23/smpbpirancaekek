import React from "react";
import { FaFacebook, FaInstagram, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Footer(){
    return(
        <footer>
                <div id="desktop" className="lg:block hidden box-border bg-[#005972] mt-10">
                    <h1 className="text-white text-2xl ml-2 font-bold pt-4">Kontak Kami</h1>
                    <div className="inline-flex">
                        <p className="text-red-700 text-xl ml-2 pt-2"><FaLocationDot/></p>
                        <p className="text-white font-serif mt-2 ml-1">Lorem ipsum dolor sit amet consectetur, adipisic</p>
                    </div><br/>
                    <div className="inline-flex">
                        <p className="text-green-500 text-xl ml-2"><FaPhoneSquareAlt /></p>
                        <p className="text-white ml-1 font-serif">Lorem</p>
                    </div><br />
                    <div className="inline-flex">
                        <p className="text-slate-200 ml-2 text-xl"><GrMail/></p>
                        <p className="text-white ml-1 font-serif">Lorem Ipsum</p>
                    </div><br/>
                    <div className="inline-flex mt-5 ml-2">
                        <FaFacebook className="text-xl text-blue-400"/>
                        <FaInstagram className="text-xl ml-[2px] text-white"/>
                        <FaYoutube className="text-xl ml-[2px] text-red-600"/>
                    </div>
                    <p className="text-xs text-center mt-7 pb-2 text-white opacity-50">Copyright © 2024 SMP BPI RANCAEKEK</p>
                </div>


                <div id="mobile" className="lg:hidden box-border bg-[#005972] mt-10">
                    <h1 className="text-xl ml-2 font-bold pt-4 text-white">Kontak Kami</h1>
                    <div className="inline-flex">
                        <p className="text-red-700 text-xl ml-2 pt-2"><FaLocationDot/></p>
                        <p className="text-white font-serif mt-2 ml-1 text-sm pr-6">Lorem ipsum dolor sit amet consectetur, adipisic</p>
                    </div><br/>
                    <div className="inline-flex">
                        <p className="text-green-400 text-xl ml-2"><FaPhoneSquareAlt /></p>
                        <p className="text-white ml-1 font-serif text-sm">Lorem</p>
                    </div><br />
                    <div className="inline-flex">
                        <p className="text-slate-200 ml-2 text-xl"><GrMail/></p>
                        <p className="text-white ml-1 font-serif text-sm">Lorem Ipsum</p>
                    </div><br/>
                    <div className="flex justify-center">
                        <div className="inline-flex mt-5 ml-2">
                            <FaFacebook className="text-xl text-blue-400"/>
                            <FaInstagram className="text-xl ml-[2px] text-white"/>
                            <FaYoutube className="text-xl ml-[2px] text-red-600"/>
                        </div>
                    </div>
                    <p className="text-xs text-center mt-7 pb-2 text-white opacity-50">Copyright © 2024 SMP BPI RANCAEKEK</p>
                </div>
            </footer>
    )
}

export default Footer;