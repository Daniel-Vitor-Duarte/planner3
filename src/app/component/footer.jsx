"use client";
import Image from "next/image";

export default function Footer(){
    return(
        <section className="w-full ">
        <div className="w-[98%] sm:w-[92%] mx-auto h-[0.0625rem] bg-[#C2C0C0] mt-[6.94rem] sm:mt-[3.25rem]"></div>

        <div className=" w-full h-[4.75rem] flex flex-col justify-center">
          <h1 className="copyright sm:max-w-[19.1875rem] text-[0.9375rem] sm:text-[0.875rem] text-[#7C7C7C] sm:text-[#000] leading-[2.1875rem] sm:leading-[1.4375rem] text-center mx-auto">
            Copyright © 2023 Inc. Todos os direitos reservados. READY TO GO
            EDUCATION CNPJ: 37.643.030/0001-26
          </h1>
        </div>
      </section>
    )
}