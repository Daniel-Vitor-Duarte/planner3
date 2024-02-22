"use client";
import Image from "next/image";
import logoP3 from "@/logo.png";

function FirstSection(){
    return(
        <section>
            <section className="flex w-screen h-[4.88rem]">
            <div className="bg-[#F7D300] w-[1.1rem] h-[4.88rem]"></div>
            <div className="w-full bg-[#545454] pt-[1.44rem] pb-[1.26rem] flex justify-center sm:items-center">
            <Image
                src={logoP3}
                alt=""
                className="mr-[40%] sm:w-[9.22381rem] sm:h-[1.96569rem]"
            />
            </div>
            </section>

            <section className="flex flex-col justify-center items-center">
                <div className="text-[#545353] flex flex-col justify-center items-center mt-[6.5rem] sm:mt-[2.44rem] text-[1.25rem] sm:text-[1rem]">
                <div className="flex items-center">
                    <h1 className="text-[2.8125rem] sm:text-[1.5625rem] max-w-[50.0625rem] sm:max-w-[20.375rem] w-full text-center font-bold leading-[2.84063rem] sm:leading-[1.82031rem] tracking-[0.05625rem]">
                    O sistema de{" "}
                    <span className="underline decoration-[#F7D300]">
                        produtividade
                    </span>{" "}
                    mais{" "}
                    <span className="underline decoration-[#F7D300]">
                        aceito do mundo
                    </span>
                    </h1>
                </div>
                <div className="leading-[1.875rem] tracking-tight mt-[2.87rem] sm:mt-[1.25rem] max-w-[58.5rem] sm:max-w-[18.375rem] w-full flex flex-col justify-center items-center sm:mx-auto text-center">
                    <p>
                    No vídeo abaixo, você vai assistir uma aula de 13 minutos, talvez
                    os 13 minutos mais bem investidos da semana, talvez da sua vida.
                    </p>
                    <p className="mt-[1rem] sm:mt-6">
                    Você vai aprender a usar as técnicas de organização de tarefas das
                    pessoas e empresas mais produtivas do mundo.
                    </p>
                </div>
                </div>
                <div className="mt-[1.94rem] sm:mt-[2.25rem] max-w-[50.0625rem] sm:max-w-[20.375rem] text-center text-[1rem] font-bold text-[#545353]">
                <h1>
                    &quot;A maioria das pessoas não progride na vida porque trabalha
                    pouco, na verdade, <br className="sm:hidden" /> a maioria trabalha
                    muito, mas de maneira desordenada&quot;.
                </h1>
                </div>
            </section>
        </section>
    );
}

export default FirstSection