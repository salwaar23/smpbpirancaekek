import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";


function visimisi(){
    return(
        <div className="min-h-screen">
            <div className=""><Nav/></div>
            <div className="lg:block hidden max-width:768px mt-[130px]">
                <div className="text-[#005972] text-center font-serif text-xl font-bold">VISI & MISI</div>
                <div className="text-[#005972] text-center font-serif text-md">SMP BPI RANCAEKEK</div>
                <div className="flex justify-center"><div className="border-2 bg-[#EE9322] w-[600px] h-[160px] rounded-lg mt-7">
                    <p className="text-white text-center pt-2 font-serif font-bold text-xl">VISI</p>
                    <p className="text-white px-4 mt-4 text-center text-lg">"Terwujudnya Sumber Daya Manusia yang Cerdas, Terampil, Berakhlak, Beriman, dan Bertaqwa Kepada Tuhan Yang Maha Esa"</p>
                </div></div>
                <div className="flex justify-center"><div className="border-2 bg-[#EE9322] w-[600px] h-[260px] rounded-lg mt-7 shadow-xl">
                    <p className="text-white text-center pt-2 font-serif font-bold text-xl">MISI</p>
                    <p className="text-white px-4 mt-4">1. Meningkatkan Pelayanan Pendidikan Untuk Mengembangkan Kecerdasan (IQ)<br/>
                    2. Melatih Dan Menolong Minat, Bakat, dan Kreatifitas Siswa Yang Berkepribadian (EQ)<br/>
                    3. Mendidik dan Membiasakan Berperilaku Yang Religius Dalam Bersikap Di Dalam Lingkungan Sekolah</p>
                </div></div>
                <div className="flex justify-center"><div className="border-2 bg-[#EE9322] w-[600px] h-[300px] rounded-lg mt-7 shadow-xl">
                    <p className="text-white text-center pt-2 font-serif font-bold text-xl">Tujuan</p>
                    <p className="text-white px-4 mt-4">1. Meningkatkan Etos Kerja Dan Profesionalitas Pendidik Dan Tenaga Kependidikan<br/>
                    2. Meningkatkan Kualitas Siswa Dalam Bidang Akademis Dan Non Akademis<br/>
                    3. Meningkatkan Kreatifitas Siswa, Kemandirian Siswa dan Peduli Terhadap Lingkungan<br/>
                    4. Meningkatkan Sarana Dan Prasarana Belajar Yang Layak Berstandar<br/>
                    5. Meningkatkan Sumber Daya Manusia Yang Religius, Berpengetahuan Luas, Dan Berkarakter Serta Berakhlak</p>
                </div></div>
                <Footer/>
            </div>


            <div className="lg:hidden">
            <div className="border-l-4 border-blue-600">
                <div className="text-[#005972] text-xl font-bold mt-24 ml-3"> 
                    VISI & MISI
                </div>
                <div className="text-[#005972] text-sm ml-3 font-serif">
                    SMP BPI RANCAEKEK
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="h-[150px] w-[300px] bg-[#EE9322] rounded-lg border-2">
                    <h1 className="text-white font-serif text-center pt-4 mb-2 font-bold">VISI</h1>
                    <p className="text-white mx-4 text-center text-sm">"Terwujudnya Sumber Daya Manusia yang Cerdas, Terampil, Berakhlak, Beriman, dan Bertaqwa Kepada Tuhan Yang Maha Esa"</p>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="h-[300px] w-[300px] bg-[#EE9322] rounded-lg border-2">
                    <h1 className="text-white font-serif text-center pt-4 mb-2 font-bold">MISI</h1>
                    <p className="text-white mx-4 text-left text-sm">1. Meningkatkan Pelayanan Pendidikan Untuk Mengembangkan Kecerdasan (IQ)<br/>
                    2. Melatih Dan Menolong Minat, Bakat, dan Kreatifitas Siswa Yang Berkepribadian (EQ)<br/>
                    3. Mendidik dan Membiasakan Berperilaku Yang Religius Dalam Bersikap Di Dalam Lingkungan Sekolah
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="h-[370px] w-[300px] bg-[#EE9322] rounded-lg border-2">
                    <h1 className="text-white font-serif text-center pt-4 mb-2 font-bold">Tujuan</h1>
                    <p className="text-white mx-4 text-left text-sm">1. Meningkatkan Etos Kerja Dan Profesionalitas Pendidik Dan Tenaga Kependidikan<br/>
                    2. Meningkatkan Kualitas Siswa Dalam Bidang Akademis Dan Non Akademis<br/>
                    3. Meningkatkan Kreatifitas Siswa, Kemandirian Siswa dan Peduli Terhadap Lingkungan<br/>
                    4. Meningkatkan Sarana Dan Prasarana Belajar Yang Layak Berstandar<br/>
                    5. Meningkatkan Sumber Daya Manusia Yang Religius, Berpengetahuan Luas, Dan Berkarakter Serta Berakhlak
                    </p>
                </div>
            </div>
            <Footer/>
            </div>
        </div>
        
    )
}

export default visimisi;