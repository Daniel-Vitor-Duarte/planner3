"use client";
import Image from "next/image";
import plannerBar from "@/planner-bar.png";
import phone from "@/phone-frame.png";

function GifSection(){
    return(
        <section className="sm:w-full">
            <section className='mt-[3.94rem] sm:hidden max-w-[73.125rem] w-full '>
                <h1 className='text-[2.8125rem] text-[#545353] font-bold leading-[2.86731rem] tracking-[0.05625rem] ml-[5.56rem] '>Veja como tudo isso funciona na prática:</h1>
                <div className='mx-auto'>
                <Image src={plannerBar} alt='' className='mt-[2.94rem] mb-[.56rem]' />
                </div>
                <div>
                <video autoPlay loop muted className='gif w-[73rem]'>
                    <source src="video-component-2-full-screen.mp4" />
                </video>
                {/* colocar tudo posicionado dentro de uma div e tratar como um objeto só, depois posicionar usando somente o flex */}
                <div className='z-10  flex justify-center -mt-[35.5rem] -mr-[calc(100%-7rem)] '>
                <video autoPlay loop muted className='gif2 w-full h-full'>
                    <source src="video-component-2-phone.mp4" />
                </video>
                <Image src={phone} alt='' className='mx-auto relative min-w-[17.67644rem] rounded-[0.50438rem]' />
                </div>
                </div>
            </section>

            <section className=" w-full">
                <div className="flex flex-col items-center">
                <a
                    className="flex flex-col items-center w-full  "
                    href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
                >
                    <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-2 text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.44rem] sm:max-w-[22.5rem] leading-[1.75rem]">
                    Acesse o aplicativo
                    </button>
                </a>
                </div>
            </section>
        </section>
    );
}

export default GifSection