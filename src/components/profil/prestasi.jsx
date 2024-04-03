import Footer from "../Footer";
import Nav from "../Nav";

function Prestasi(){
    return(
        <div>
            <Nav />
            <div id="desktop" className="lg:block hidden mt-[130px]">
                <div id="header">
                    <h1 className="text-[#005972] text-center text-xl font-serif font-bold">Prestasi</h1>
                    <p className="text-[#005972] text-center text-md font-serif">SMP BPI RANCAEKEK</p>
                </div>
                <div className="flex justify-center space-x-5 mt-7">
                    <div className="bg-white w-[300px] h-[210px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[250px] ml-5"/>
                        <p className="text-center font-bold mt-2">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white w-[300px] h-[210px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[250px] ml-5"/>
                        <p className="text-center font-bold mt-2">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white w-[300px] h-[210px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[250px] ml-5"/>
                        <p className="text-center font-bold mt-2">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white w-[300px] h-[210px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[250px] ml-5"/>
                        <p className="text-center font-bold mt-2">Lorem Ipsum</p>
                    </div>
                </div>
            </div>

            <div id="mobile" className="lg:hidden mt-[100px]">
                <div className="border-l-4 border-blue-600">
                    <h1 className="text-[#005972] ml-2 text-xl font-serif font-bold">Prestasi</h1>
                    <p className="text-[#005972] ml-2 text-sm font-serif">SMP BPI RANCAEKEK</p>
                </div> 
                <div className="ml-[55px] mt-7">
                    <div className="bg-white w-[250px] h-[200px] rounded-lg shadow-2xl">
                        <img src="./src/components/assets/image5.jpg" className="w-[200px] h-[140px] mt-4 ml-[24px] rounded-lg"/>
                        <p className="text-center mt-2 font-bold">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white w-[250px] h-[200px] rounded-lg shadow-2xl mt-7">
                        <img src="./src/components/assets/image5.jpg" className="w-[200px] h-[140px] mt-4 ml-[24px] rounded-lg"/>
                        <p className="text-center mt-2 font-bold">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white w-[250px] h-[200px] rounded-lg shadow-2xl mt-7">
                        <img src="./src/components/assets/image5.jpg" className="w-[200px] h-[140px] mt-4 ml-[24px] rounded-lg"/>
                        <p className="text-center mt-2 font-bold">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white w-[250px] h-[200px] rounded-lg shadow-2xl mt-7">
                        <img src="./src/components/assets/image5.jpg" className="w-[200px] h-[140px] mt-4 ml-[24px] rounded-lg"/>
                        <p className="text-center mt-2 font-bold">Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Prestasi;