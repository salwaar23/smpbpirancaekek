import Footer from "../Footer";
import Nav from "../Nav";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Sekolah(){

    useEffect(() =>{
        AOS.init({duration:1200})
    })

    return(
        <div>
            <Nav />
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <div id="header">
                    <h1 className="text-[#005972] font-bold text-xl font-serif text-center mt-5">PROFIL SEKOLAH</h1>
                    <h1 className="text-[#005972] text-md font-serif text-center">SMP BPI RANCAEKEK</h1>
                </div>
                <div>
                <table className="mt-6 text-sm mx-4 bg-slate-200 rounded-md shadow-md font-serif w-[600px] ml-[360px]">
                    <tbody>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">Nama&nbsp;Sekolah</td>
                            <td className="pl-7 py-1">SMP BPI RANCAEKEK</td>
                        </tr>
                        <tr className="bg-[#EE9322]">
                            <td className="px-2 flex justify-top py-1">Alamat</td>
                            <td className="px-2 pl-7 border-l-2 border-[#EE9322] py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis enim, minima velit, pariatur nam corrupti perferendis incidunt dolor eaque cumque eligendi consequatur harum inventore quaerat, illo fuga reprehenderit officiis.</td>
                        </tr>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">NPSN</td>
                            <td className="pl-7 py-1">0976499</td>
                        </tr>
                        <tr className="bg-[#EE9322]">
                            <td className="px-2 py-1">Akreditasi</td>
                            <td className="pl-7 border-l-2 border-[#EE9322]">lorem</td>
                        </tr>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">Status&nbsp;Sekolah</td>
                            <td className="pl-7">lorem</td>
                        </tr>
                        <tr className="bg-[#EE9322]">
                            <td className="px-2 py-1">Kurikulum</td>
                            <td className="pl-7 border-l-2 border-[#EE9322]">lorem</td>
                        </tr>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">Telepon</td>
                            <td className="pl-7">lorem</td>
                        </tr>
                        <tr className="bg-[#EE9322]">
                            <td className="px-2 py-1">Ruang Kelas</td>
                            <td className="pl-7 border-l-2 border-[#EE9322]">lorem</td>
                        </tr>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">Ruang Lab</td>
                            <td className="pl-7">lorem</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="bg-[#005972] w-[200px] text-center rounded-lg text-white text-xl font-serif absolute bottom-[53px] left-[575px]">Kata Mereka</div>
                <div className="box-border bg-slate-100 w-[900px] h-[400px] mt-14 ml-[230px] rounded-lg shadow-2xl inline-flex px-5">
                    <div className="box-border bg-white w-[270px] h-[340px] rounded-lg mt-10 shadow-xl">
                        <img src ="./src/components/assets/image5.jpg" className="w-[200px] ml-[30px] mt-5"/>
                        <h1 className="font-serif font-bold text-md text-center">Lorem Ipsum</h1>
                        <p className="text-sm px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ipsum odit magni minus, fuga architecto asperiores nam perspiciatis molestiae voluptatum enim deserunt cumque blanditiis doloribus, sequi officiis ipsa, excepturi illo?</p>
                    </div>
                    <div className="box-border bg-white w-[270px] h-[340px] ml-[50px] rounded-lg mt-10 shadow-xl">
                        <img src ="./src/components/assets/image5.jpg" className="w-[200px] ml-[30px] mt-5"/>
                        <h1 className="font-serif font-bold text-md text-center">Lorem Ipsum</h1>
                        <p className="text-sm px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere beatae a et dicta quisquam id fuga, aliquam harum consequuntur ut doloribus velit labore, rem ex aliquid sed corrupti delectus aut.</p>
                    </div>
                    <div className="box-border bg-white w-[270px] h-[340px] ml-[50px] rounded-lg mt-10 shadow-xl pr-10">
                        <img src ="./src/components/assets/image5.jpg" className="w-[200px] ml-[30px] mt-5"/>
                        <h1 className="font-serif font-bold text-md text-center">Lorem Ipsum</h1>
                        <p className="text-sm px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere beatae a et dicta quisquam id fuga, aliquam harum consequuntur ut doloribus velit labore, rem ex aliquid sed corrupti delectus aut.</p>
                    </div>
                </div>
            </div>


            <div id="mobile" className="lg:hidden mt-24">
                <div className="border-l-4 border-blue-600">
                    <h1 className="text-[#005972] ml-2 text-xl font-serif font-bold">Profil Sekolah</h1>
                    <h1 className="text-[#005972] ml-2 text-sm font-serif">SMP BPI RANCAEKEK</h1>
                </div>
                <table className="mt-6 text-sm mx-4 bg-slate-200 rounded-md shadow-md font-serif">
                    <tbody>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">Nama&nbsp;Sekolah</td>
                            <td className="pl-7 py-1">SMP BPI RANCAEKEK</td>
                        </tr>
                        <tr className="bg-[#EE9322]">
                            <td className="px-2 flex justify-top py-1">Alamat</td>
                            <td className="px-2 pl-7 border-l-2 border-[#EE9322] py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis enim, minima velit, pariatur nam corrupti perferendis incidunt dolor eaque cumque eligendi consequatur harum inventore quaerat, illo fuga reprehenderit officiis.</td>
                        </tr>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">NPSN</td>
                            <td className="pl-7 py-1">0976499</td>
                        </tr>
                        <tr className="bg-[#EE9322]">
                            <td className="px-2 py-1">Akreditasi</td>
                            <td className="pl-7 border-l-2 border-[#EE9322]">lorem</td>
                        </tr>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">Status&nbsp;Sekolah</td>
                            <td className="pl-7">lorem</td>
                        </tr>
                        <tr className="bg-[#EE9322]">
                            <td className="px-2 py-1">Kurikulum</td>
                            <td className="pl-7 border-l-2 border-[#EE9322]">lorem</td>
                        </tr>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">Telepon</td>
                            <td className="pl-7">lorem</td>
                        </tr>
                        <tr className="bg-[#EE9322]">
                            <td className="px-2 py-1">Ruang Kelas</td>
                            <td className="pl-7 border-l-2 border-[#EE9322]">lorem</td>
                        </tr>
                        <tr className="bg-[#FDE767]">
                            <td className="px-2 py-1">Ruang Lab</td>
                            <td className="pl-7">lorem</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center text-white mt-10 font-bold bg-[#005972] w-[200px] ml-[80px] rounded-lg" data-aos="fade-up">Kata Mereka</div>
                <div className="bg-slate-200 justify-center w-[250px] ml-[55px] mt-4 rounded-lg shadow-2xl" data-aos="fade-up">
                    <div><img src="./src/components/assets/image5.jpg" className="w-[150px] pt-4 ml-[50px]"/></div>
                    <div className="text-center font-bold text-sm">Lorem Ipsum</div>
                    <p className="px-2 py-2 text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus est ea itaque ad velit! Quisquam quidem tempore consequuntur, modi ipsa asperiores fugiat facere cumque natus iusto obcaecati. Incidunt, excepturi dolor!</p>
                </div>
                <div className="bg-slate-200 justify-center w-[250px] ml-[55px] mt-10 rounded-lg shadow-2xl" data-aos="fade-up">
                    <div><img src="./src/components/assets/image5.jpg" className="w-[150px] pt-4 ml-[50px]"/></div>
                    <div className="text-center font-bold text-sm">Lorem Ipsum</div>
                    <p className="px-2 py-2 text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus est ea itaque ad velit! Quisquam quidem tempore consequuntur, modi ipsa asperiores fugiat facere cumque natus iusto obcaecati. Incidunt, excepturi dolor!</p>
                </div>
                <div className="bg-slate-200 justify-center w-[250px] ml-[55px] mt-10 rounded-lg shadow-2xl" data-aos="fade-up">
                    <div><img src="./src/components/assets/image5.jpg" className="w-[150px] pt-4 ml-[50px]"/></div>
                    <div className="text-center font-bold text-sm">Lorem Ipsum</div>
                    <p className="px-2 py-2 text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus est ea itaque ad velit! Quisquam quidem tempore consequuntur, modi ipsa asperiores fugiat facere cumque natus iusto obcaecati. Incidunt, excepturi dolor!</p>
                </div>
            </div>
            <div className="mt-10"><Footer/></div>
        </div>
    )
}

export default Sekolah;