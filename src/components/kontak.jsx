import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Kontak(){
    return(
        <div>
            <Nav/>
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <div id="header">
                    <h1 className="text-[#005972] text-center text-xl font-serif font-bold">Kontak</h1>
                    <h1 className="text-[#005972] text-center text-md font-serif">SMP BPI RANCAEKEK</h1>
                    <div className="mt-7 ml-7 pb-7">
                        <div className="inline-flex">
                            <div className="text-red-600 text-2xl"><FaLocationDot/></div>
                            <p className="ml-2 font-serif">Kp.Karapiak RT.03 RW.02 Kec. Rancaekek Kab. Bandung Jawa Barat 40394</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-green-700 text-2xl"><FaPhoneSquareAlt/></div>
                            <p className="ml-2 font-serif">02287837087</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-2xl"><GrMail/></div>
                            <p className="ml-2 font-serif">bpi.rckschool@gmail.com</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-green-700 text-2xl"><FaWhatsapp/></div>
                            <p className="ml-2 font-serif">082240649261 (Intan Sari)</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-green-700 text-2xl"><FaWhatsapp/></div>
                            <p className="ml-2 font-serif">089628415865 (Desty Ayu Suciati)</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-green-700 text-2xl"><FaWhatsapp/></div>
                            <p className="ml-2 font-serif">085601064890 (Ginanjar Saehab)</p>
                        </div>
                    </div> 
                </div>
                <div><Footer/></div>
            </div>

            <div id="mobile" className="lg:hidden mt-[100px] pb-[320px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="ml-2 font-serif font-bold text-lg">Kontak</h1>
                    <p className="ml-2 font-serif text-sm">SMP BPI RANCAEKEK</p>
                </div>
                <div className="mt-7 ml-7 pb-7">
                        <div className="inline-flex">
                            <div className="text-red-600 text-2xl"><FaLocationDot/></div>
                            <p className="ml-2 font-serif">Kp.Karapiak RT.03 RW.02 Kec. Rancaekek Kab. Bandung Jawa Barat 40394</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-green-700 text-2xl"><FaPhoneSquareAlt/></div>
                            <p className="ml-2 font-serif">02287837087</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-2xl"><GrMail/></div>
                            <p className="ml-2 font-serif">bpi.rckschool@gmail.com</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-green-700 text-2xl"><FaWhatsapp/></div>
                            <p className="ml-2 font-serif">082240649261 (Intan Sari)</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-green-700 text-2xl"><FaWhatsapp/></div>
                            <p className="ml-2 font-serif">089628415865 (Desty Ayu Suciati)</p>
                        </div><br/>
                        <div className="inline-flex">
                            <div className="text-green-700 text-2xl"><FaWhatsapp/></div>
                            <p className="ml-2 font-serif">085601064890 (Ginanjar Saehab)</p>
                        </div>
                    </div> 
                <div className="fixed bottom-0"><Footer/></div>
            </div>
            
        </div>
    )
}

export default Kontak;