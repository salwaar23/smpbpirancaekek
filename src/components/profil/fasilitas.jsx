import Footer from "../Footer";
import Nav from "../Nav";

function Fasilitas(){
    return(
        <div>
            <Nav />
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <div id="header">
                    <h1 className="text-[#005972] text-center text-xl font-serif font-bold">Fasilitas</h1>
                    <h1 className="text-[#005972] text-center text-md font-serif">SMP BPI RANCAEKEK</h1>
                </div>
                <div className="flex justify-center mt-10 space-x-4">
                    <div className="inline-flex">
                        <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-2xl">
                        <img src="./assets/WhatsApp Image 2024-01-25 at 09.13.13_b16b220d.jpg" className="rounded-lg"/>
                        <p className="font-bold text-center mt-5 text-lg">Ruang Kelas</p>
                        </div>
                    </div>
                    <div className="inline-flex">
                        <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-2xl">
                        <div className="flex justify-center"><img src="./assets/IMG_7411.JPEG" className="rounded-lg h-[180px]"/></div>
                        <p className="font-bold text-center mt-2 text-lg">Perpustakaan</p>
                        </div>
                    </div>
                    <div className="inline-flex">
                        <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-2xl">
                        <div className="flex justify-center"><img src="./assets/IMG-20240228-WA0006 (1).jpg" className="rounded-lg h-[180px]"/></div>
                        <p className="font-bold text-center mt-2 text-lg">Lapangan</p>
                        </div>
                    </div>
                    <div className="inline-flex">
                        <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-2xl">
                        <div className="flex justify-center"><img src="./assets/e6d99e72-539b-4974-98a6-ff9263ea70f9.jpg" className="rounded-lg h-[180px]"/></div>
                        <p className="font-bold text-center mt-2 text-lg">Lab.Komputer</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 space-x-4 pb-10">
                    <div className="inline-flex">
                        <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image1.png" className="rounded-lg"/>
                        <p className="font-bold text-center mt-2 text-lg">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="inline-flex">
                        <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image1.png" className="rounded-lg"/>
                        <p className="font-bold text-center mt-2 text-lg">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="inline-flex">
                        <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image1.png" className="rounded-lg"/>
                        <p className="font-bold text-center mt-2 text-lg">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="inline-flex">
                        <div className="bg-white w-[300px] h-[250px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image1.png" className="rounded-lg"/>
                        <p className="font-bold text-center mt-2 text-lg">Lorem Ipsum</p>
                        </div>
                    </div>
                </div>

            </div>


            <div id="mobile" className="lg:hidden mt-[100px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="text-[#005972] text-xl ml-2 font-bold font-serif">Fasilitas</h1>
                    <p className="text-[#005972] text-sm ml-2 font-serif">SMP BPI RANCAEKEK</p>
                </div>
                <div className="flex justify-center mt-4">
                    <div className="box-border bg-slate-50 w-[250px] h-[260px] rounded-xl shadow-xl">
                        <div className="box-border bg-white w-[250px] h-[50px]"></div>
                        <img src="./assets/WhatsApp Image 2024-01-25 at 09.13.13_b16b220d.jpg"/>
                        <p className="text-xl font-bold mt-2 ml-2">Ruang Kelas</p>
                    </div>
                </div>
                <div className="flex justify-center mt-7">
                    <div className="box-border bg-slate-50 w-[250px] h-[280px] rounded-xl shadow-xl">
                        <div className="box-border bg-white w-[250px] h-[50px]"></div>
                        <img src="./assets/IMG_7411.JPEG"/>
                        <p className="text-xl font-bold mt-1 ml-2">Perpustakaan </p>
                    </div>
                </div>
                <div className="flex justify-center mt-7">
                    <div className="box-border bg-slate-50 w-[250px] h-[280px] rounded-xl shadow-xl">
                        <div className="box-border bg-white w-[250px] h-[50px]"></div>
                        <img src="./assets/IMG-20240228-WA0006 (1).jpg"/>
                        <p className="text-xl font-bold mt-1 ml-2">Lapangan</p>
                    </div>
                </div>
                <div className="flex justify-center mt-7">
                    <div className="box-border bg-slate-50 w-[250px] h-[280px] rounded-xl shadow-xl">
                        <div className="box-border bg-white w-[250px] h-[50px]"></div>
                        <img src="./assets/e6d99e72-539b-4974-98a6-ff9263ea70f9.jpg"/>
                        <p className="text-xl font-bold mt-1 ml-2">Lab Komputer</p>
                    </div>
                </div>
                <div className="flex justify-center mt-7">
                    <div className="box-border bg-slate-50 w-[250px] h-[280px] rounded-xl shadow-xl">
                        <div className="box-border bg-white w-[250px] h-[50px]"></div>
                        <img src=""/>
                        <p className="text-xl font-bold mt-1 ml-2">Lorem Ipsum</p>
                    </div>
                </div>
                <div className="flex justify-center mt-7">
                    <div className="box-border bg-slate-50 w-[250px] h-[260px] rounded-xl shadow-xl">
                        <div className="box-border bg-white w-[250px] h-[50px]"></div>
                        <img src="./src/components/assets/image3.png"/>
                        <p className="text-xl font-bold mt-1 ml-2">lorem ipsum</p>
                    </div>
                </div>
                <div className="flex justify-center mt-7 pb-10">
                    <div className="box-border bg-slate-50 w-[250px] h-[260px] rounded-xl shadow-xl">
                        <div className="box-border bg-white w-[250px] h-[50px]"></div>
                        <img src="./src/components/assets/image3.png"/>
                        <p className="text-xl font-bold mt-1 ml-2">lorem ipsum</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Fasilitas;