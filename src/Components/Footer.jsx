import { BsFacebook, BsFillArrowUpCircleFill, BsInstagram, BsLinkedin  } from 'react-icons/bs';
import { BsTwitterX } from "react-icons/bs";
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const toTop = ()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                <section className='text-lg text-red'>
                    Copyright {year} | All rights reserved
                </section>
                <button onClick={toTop} className="fixed bottom-3 right-4 z-10 rounded-full p-2 text-white shadow-md hover:bg-gradient-to-r from-yellow-500 to-amber-500 active:scale-110 transition-transform ease-in-out duration-150">
               <BsFillArrowUpCircleFill className="h-8 w-8 text-white" />
               </button>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsFacebook />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsInstagram />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsLinkedin />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsTwitterX />
                    </a>
                </section>
            </footer>
        </>
    );

}

export default Footer;