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
                <div className="border-2 bg-[#EE9322] w-[600px] h-[200px] rounded-lg ml-[370px] mt-7 shadow-xl">
                    <p className="text-white text-center pt-2 font-serif font-bold text-xl">VISI</p>
                    <p className="text-white px-4 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates explicabo facilis placeat id optio? Impedit perferendis, consectetur labore corporis suscipit, deserunt tempore perspiciatis animi cupiditate eaque soluta doloremque mollitia ipsa?</p>
                </div>
                <div className="border-2 bg-[#EE9322] w-[600px] h-[400px] rounded-lg ml-[370px] mt-7 shadow-xl">
                    <p className="text-white text-center pt-2 font-serif font-bold text-xl">MISI</p>
                    <p className="text-white px-4 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates explicabo facilis placeat id optio? Impedit perferendis, consectetur labore corporis suscipit, deserunt tempore perspiciatis animi cupiditate eaque soluta doloremque mollitia ipsa?</p>
                </div>
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
                <div className="h-[190px] w-[300px] bg-[#EE9322] rounded-lg border-2">
                    <h1 className="text-white font-serif text-center pt-4 font-bold">VISI</h1>
                    <p className="text-white mx-4 text-center text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quam velit voluptatum? Saepe hic ullam sequi id aperiam sed quae dolor inventore eum. Tempore, accusamus deleniti atque laborum repudiandae quo!</p>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="h-[500px] w-[300px] bg-[#EE9322] rounded-lg border-2">
                    <h1 className="text-white font-serif text-center pt-4 font-bold">MISI</h1>
                    <p className="text-white mx-4 text-center text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quam velit voluptatum? Saepe hic ullam sequi id aperiam sed quae dolor inventore eum. Tempore, accusamus deleniti atque laborum repudiandae quo!</p>
                </div>
            </div>
            <Footer/>
            </div>
        </div>
        
    )
}

export default visimisi;