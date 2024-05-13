import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuOpen2, setSubMenuOpen2] = useState(false);
    const [subMenuOpen3, setSubMenuOpen3] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen); 
    };

    const toggleSubMenu2 = () => {
        setSubMenuOpen2(!subMenuOpen2); 
    };

    const toggleSubMenu3 = () => {
        setSubMenuOpen3(!subMenuOpen3); 
    };

    return(
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="lg:flex max-width:768px hidden inline-flex bg-white py-5 w-screen overflow-hidden shadow-lg">
                <div className="w-[45px] ml-5 mt-[3px]"><img src="./assets/logo.jpg"/></div>
                <div>
                    <div className="text-xl ml-5 font-bold text-[#EE9322]">SMP BPI RANCAEKEK</div>
                    <div className="text-sm ml-5 font-bold text-[#005972]">Tangguh, Berprestasi, Dipercaya</div>
                </div>
                <div className="inline-flex fixed top-5 right-10">
                <Link to={`/`}><div className="text-[#005972] mt-3 hover:font-bold">Beranda</div></Link>
                <div className="mt-3 ml-4">
                    <button onClick={toggleSubMenu}>
                    <p className="text-[#005972] inline-flex ml-4 hover:font-bold">
                        Profil
                        {subMenuOpen ? <FaChevronUp className="mt-1 ml-1"/> : <FaChevronDown className="mt-1 ml-1"/>}
                    </p>
                    </button>
                    {subMenuOpen && (
                        <ul className="absolute bg-white px-5 rounded-lg">
                            <Link to={`/sekolah`} className="">
                                <p className="mt-1 text-[#005972] hover:font-bold">Sekolah</p>
                            </Link>
                            <Link to={`/visimisi`} className="">
                                <p className="mt-1 text-[#005972] hover:font-bold">Visi & Misi</p>
                            </Link>
                            <Link to={`/fasilitas`} className="">
                                <p className="mt-1 text-[#005972] hover:font-bold">Fasilitas</p>
                            </Link>
                            <Link to={`/prestasi`} className="">
                                <p className="mt-1 pb-2 text-[#005972] hover:font-bold">Prestasi</p>
                            </Link>
                        </ul>
                    )}
                </div>
                <div className="mt-3 ml-7">
                    <button onClick={toggleSubMenu2}>
                    <p className="text-[#005972] inline-flex hover:font-bold">
                        Program Pendidikan
                        {subMenuOpen2 ? <FaChevronUp className="mt-1 ml-1"/> : <FaChevronDown className="mt-1 ml-1"/>}
                    </p>
                    </button>
                    {subMenuOpen2 && (
                        <ul className="absolute bg-white px-5 rounded-lg">
                            <Link to={`/kurikulum`} className="">
                                <p className="mt-1 text-[#005972] hover:font-bold">Kegiatan</p>
                            </Link>
                            <Link to={`/unggulan`} className="">
                                <p className="mt-1 text-[#005972] hover:font-bold">Program Unggulan</p>
                            </Link>
                            <Link to={`/ekskul`} className="">
                                <p className="mt-1 text-[#005972] hover:font-bold">Ekstrakurikuler</p>
                            </Link>
                        </ul>
                    )}
                </div>
                <div className="mt-3 ml-5">
                    <button onClick={toggleSubMenu3}>
                    <p className="text-[#005972] inline-flex hover:font-bold">
                        Pendaftaran
                        {subMenuOpen3 ? <FaChevronUp className="mt-1 ml-1"/> : <FaChevronDown className="mt-1 ml-1"/>}
                    </p>
                    </button>
                    {subMenuOpen3 && (
                        <ul className="absolute bg-white px-5 rounded-lg">
                            <Link to={`/prosedur`} className="">
                                <p className="mt-1 text-[#005972] hover:font-bold">Prosedur Pendaftaran</p>
                            </Link>
                            <Link to={`/biaya`} className="">
                                <p className="mt-1 text-[#005972] hover:font-bold">Biaya</p>
                            </Link>
                        </ul>
                    )}
                </div>
                <Link to={`/kontak`}>
                    <div className="text-[#005972] mt-3 ml-[20px] hover:font-bold">Kontak</div>
                </Link>
                </div>
            </div>

            
            <div className="lg:hidden inline-flex bg-white shadow-xl pb-3 w-screen">
            <div className="w-[35px] ml-5 mt-5"><img src="./assets/logo.jpg"/></div>
            <div>
                <div className="text-md mt-4 ml-3 font-bold text-[#EE9322]">SMP&nbsp;BPI&nbsp;RANCAEKEK</div>
                <div className="text-[10px] ml-3 font-bold text-[#005972]">Tangguh, Beprestasi, dan Dipercaya</div>
            </div>
            <button className="fixed top-2 right-0 text-[#005972] pt-[16px] text-3xl pr-6" onClick={handleClick}>
                    {isOpen ? <FaTimes /> : <FaBars />}
            </button>
                    {isOpen && (
                    <div
                        className={`fixed top-0 right-0 w-[50%] h-full bg-white transition duration-100 ease-in-out overflow-auto ${
                            isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    >
                <ul className="fixed top-14 flex flex-col h-full">
                    <li className= "fixed top-6 right-6 text-3xl ">
                        <button><FaTimes onClick={handleClick} /></button>
                    </li>
                    <li className="my-2 ml-4">
                    <Link to="/" className="text-gray-700 hover:text-gray-900 hover:font-bold">
                        Beranda
                    </Link>
                    </li>
                    <li className="my-2 ml-4">
                    <button onClick={toggleSubMenu}>
                    <p className="text-gray-700 hover:text-gray-900 hover:font-bold inline-flex">
                        Profil
                        {subMenuOpen ? <FaChevronUp className="mt-1 ml-[80px]"/> : <FaChevronDown className="mt-1 ml-[80px]"/>}
                    </p>
                    </button>
                    {subMenuOpen && (
                        <ul className="absolute pl-5">
                            <Link to={`/sekolah`} className="">
                                <li className="mt-1 hover:font-bold">Sekolah</li>
                            </Link>
                            <Link to={`/visimisi`} className="">
                                <li className="mt-1 hover:font-bold">Visi&nbsp;&&nbsp;Misi</li>
                            </Link>
                            <Link to={`/fasilitas`} className="">
                                <li className="mt-1 hover:font-bold">Fasilitas</li>
                            </Link>
                            <Link to={`/prestasi`} className="">
                                <li className="mt-1 hover:font-bold">Prestasi</li>
                            </Link>
                        </ul>
                    )}
                    </li>
                    <div className={`
                        transition duration-100 ease-in-out transform mt-2
                        ${subMenuOpen ? "translate-y-[100px]" : ""} 
                    `}> 
                    <li className="ml-4">
                    <button onClick={toggleSubMenu2}>
                    <p className="text-gray-700 hover:text-gray-900 hover:font-bold inline-flex">
                        Program
                        {subMenuOpen2 ? <FaChevronUp className="mt-1 ml-[55px]"/> : <FaChevronDown className="mt-1 ml-[55px]"/>}
                    </p>
                    </button>
                    {subMenuOpen2 && (
                        <ul className="absolute pl-5">
                            <Link to={`/kurikulum`} className="">
                                <li className="mt-1 hover:font-bold">Kegiatan</li>
                            </Link>
                            <Link to={`/unggulan`} className="">
                                <li className="mt-1 hover:font-bold">Program&nbsp;Unggulan</li>
                            </Link>
                            <Link to={`/ekskul`} className="">
                                <li className="mt-1 hover:font-bold">Ekstrakurikuler</li>
                            </Link>
                        </ul>
                    )}
                    </li>
                    </div>

                    <div className={`
                        transition duration-100 ease-in-out transform mt-2
                        ${subMenuOpen ? "translate-y-[95px]" : ""} 
                    `}> 
                    <div className={`
                        transition duration-100 ease-in-out transform mt-2
                        ${subMenuOpen2 ? "translate-y-[80px]" : ""} 
                    `}> 
                    <li className="ml-4">
                    <button onClick={toggleSubMenu3}>
                    <div className="text-gray-700 hover:text-gray-900 hover:font-bold inline-flex">
                        <div>Pendaftaran</div>
                        <div className="mt-1 ml-[30px]">{subMenuOpen3 ? <FaChevronUp className=""/> : <FaChevronDown className=""/>}</div>
                    </div>
                    </button>
                    {subMenuOpen3 && (
                        <ul className="absolute pl-5">
                            <Link to={`/prosedur`} className="">
                                <li className="mt-1 hover:font-bold">Prosedur Pendaftaran</li>
                            </Link>
                            <Link to={`/biaya`} className="">
                                <li className="mt-1 hover:font-bold">Biaya</li>
                            </Link>
                        </ul>
                    )}
                    </li>
                    </div>
                    </div>
                    <div className={`
                        transition duration-100 ease-in-out transform mt-2
                        ${subMenuOpen ? "translate-y-[90px]" : ""} 
                    `}>
                    <div className={`
                        transition duration-100 ease-in-out transform mt-2
                        ${subMenuOpen2 ? "translate-y-[75px]" : ""} 
                    `}> 
                    <div className={`
                        transition duration-100 ease-in-out transform mt-2
                        ${subMenuOpen3 ? "translate-y-[70px]" : ""} 
                    `}> 
                    <li className="ml-4">
                    
                    <Link to={`/kontak`}>
                        <p className="text-gray-700 hover:text-gray-900 hover:font-bold inline-flex">
                            Kontak
                        </p>
                    </Link>
                    </li>
                    </div>
                    </div>
                    </div>
                </ul>
            </div>
            )}
            </div>
        </nav>
        
    )
}

export default Nav;