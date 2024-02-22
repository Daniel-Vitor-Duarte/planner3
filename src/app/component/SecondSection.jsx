"use client";
import Image from "next/image";
import leandro11 from "@/leando1-1.png";
import leandro12 from "@/leandro1-2.png";
import leandro13 from "@/leandro1-3.png";
import leandro14 from "@/leandro1-4.png";
import leandro11r from "@/leandro1-1-round.png";
import leandro12r from "@/leandro1-2-round.png";
import leandro13r from "@/leandro1-3-round.png";
import YouTube from 'react-youtube';

function SecondSection(){
    return(
        <section className="flex min-h-screen flex-col items-center overflow-x-hidden w-full">
          <section className="max-w-[65.625rem] sm:max-w-[22.5rem] w-full h-[111.6875rem] lg:bg-[#E7E7E7] mt-[22.62rem] sm:mt-  [19.9rem] rounded-[0.625rem] mm:w-full mm:max-w-[58rem] mm:h-[123rem]">
            <div className="flex flex-col justify-center items-center -mt-[17.31rem] w-full ">
            <YouTube id="video"
            videoId="sQjWjgFnCpo"/>
              {/* <Image
                src={leandroProd}
                alt=""
                className="max-w-[47.60275rem] w-full max-h-[28.76981rem] h-auto sm:max-w-[22.512rem] sm:h-auto"
              />
              <Image
                src={play}
                alt=""
                className="absolute border-black sm:max-w-[3.33644rem]"
              /> */}
            </div>
            <div className="flex flex-col items-center">
              <a
                className="flex flex-col items-center w-full  "
                href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
              >
                <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.44rem] sm:max-w-[22.5rem] leading-[1.75rem]">
                  Acesse o aplicativo
                </button>
              </a>
            </div>

            <div className="max-w-[52.25rem] w-full h-[9.5rem] border border-[#D4D4D4] rounded-[0.375rem] text-[2.8125rem] text-[#545353] font-bold mt-[4.75rem] -ml-[4.63rem] tracking-[0.05625rem] items-center flex justify-center leading-[2.86731rem] pl-[3rem] bg-[#E7E7E7] sm:hidden mm:pl-6 mm:-ml-[2rem]">
              <h1>{'Leandro Ladeira, o "improdutivo" que realiza muito.'}</h1>
            </div>

            <div className="absolute -ml-[7.69rem] sm:hidden w-[12.1875rem] mm:w-[11.1875rem] mt-[2.94rem] mm:-ml-[2rem] ">
              <Image src={leandro11} alt="" className="h-[24.25rem] w-[12.1875rem] mm:h-[22.25rem] mm:w-[11.1875rem]" />
              <Image src={leandro12} alt="" className="h-[16.625rem] w-[12.1875rem] mm:h-[14.625rem] mm:w-[11.1875rem]" />
              <Image src={leandro13} alt="" className="h-[16.5625rem] w-[12.1875rem] mm:h-[14.625rem] mm:w-[11.1875rem]" />
              <Image src={leandro14} alt="" className="h-[16.625rem] w-[12.1875rem] mm:h-[14.625rem] mm:w-[11.1875rem] mm:rounded-b-[0.75rem]" />
            </div>

            <section className="mt-[2.94rem] flex sm:flex sm:flex-col sm:mx-auto sm:bg-[#E3E3E3] sm:mt-[9.11rem] sm:pb-2 sm:rounded-[0.375rem]">
              <div className="lg-phone flex lg:hidden max-w-[22.5rem] w-full h-[11.0625rem] ">
                <div className="-mt-[5rem]">
                  <Image
                    src={leandro11r}
                    alt=""
                    className="max-w-[9.44781rem] w-full max-h-[9.5rem] h-full z-20  absolute"
                  />
                  <Image
                    src={leandro12r}
                    alt=""
                    className="max-w-[9.44781rem] w-full max-h-[9.5rem] h-full z-10 absolute ml-[6.5rem]"
                  />
                  <Image
                    src={leandro13r}
                    alt=""
                    className="max-w-[9.44781rem] w-full max-h-[9.5rem] h-full absolute ml-[13.1rem]"
                  />
                </div>
              </div>

              <div className="max-w-[20.8125rem] w-full mx-auto lg:hidden">
                <div className="max-w-[10.375rem] h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden -mt-[5rem] "></div>
                <div className="max-w-[20.8125rem] w-full text-[1.25rem]  text-[#545353] font-bold mx-auto tracking-[0.025rem] items-center flex justify-center leading-[1.60563rem] lg:hidden mt-[.19rem] ">
                  <h1>
                    Leandro Ladeira, o &quot;improdutivo&quot; que realiza muito.
                  </h1>
                </div>
              </div>

              <div className=" text-[#545353] text-[1.25rem] sm:text-[1rem] lg:max-w-[52.125rem] sm:max-w-[20rem] mx-auto leading-[1.75rem] mm:max-w-[45rem] mm:ml-[10.5rem]">
                <p className="">
                  Apesar de um histórico escolar com notas baixas e tendência à
                  procrastinação, e de uma aparente desorganização, cheguei
                  relativamente longe no mundo dos negócios.
                </p>
                <p className="mt-7 sm:mt-6">
                  Para ser sincero, os primeiros 10 anos da minha carreira foram de
                  muito trabalho e pouco sucesso. Tive uma pequena agência,
                  trabalhava de domingo a domingo, a retirada mensal era mixuruca, o
                  sentimento de realização e reconhecimento profissional era zero.
                </p>
                <p className="mt-7 sm:mt-6">
                  Em 2013, as coisas começaram a mudar. De lá pra cá, foram mais de{" "}
                  <strong>
                    200 milhões faturados, milhões de inscritos nas redes sociais,
                    prêmios, sucesso
                  </strong>{" "}
                  e o reconhecimento de estar entre os{" "}
                  <strong>maiores do Brasil</strong> na minha área.
                </p>
                <p className="mt-7 sm:mt-6">
                  Só para ter uma ideia, em 2023 eu fiz{" "}
                  <strong>18 eventos próprios</strong> – mentorias, imersões de
                  marketing e até algumas apresentações de stand-up comedy, que é um
                  hobby meu.
                </p>
                <p className="mt-7 sm:mt-6">
                  Publiquei mais de <strong>100 vídeos</strong> nas redes sociais,
                  gravei mais de 500 anúncios, ganhei mais de{" "}
                  <strong>700 mil seguidores</strong>, fiz mais de{" "}
                  <strong>100 lives</strong>, fui convidado e palestrei em 8 grandes
                  eventos do meu segmento – marketing – entre eles, o{" "}
                  <strong>FIRE Festival</strong>, <strong>RD Summit</strong> e{" "}
                  <strong>Mundo Paralelo</strong>, os maiores eventos do mercado de
                  marketing digital do Brasil. Minha empresa bateu a marca de 30 mil
                  clientes.
                </p>
                <p className="mt-7 sm:mt-6">
                  Ainda tive tempo de ter vida pessoal, fiz ao todo 6 viagens de
                  lazer, com amigos e família: <strong>três internacionais</strong>,
                  três aqui no <strong>Brasil</strong>. Fui fazer kitesurf em Fiji,
                  levei a família para conhecer a Espanha e levei meu filho para
                  passar o Natal com o Mickey na Disney. No Brasil, fui para a
                  Chapada dos Veadeiros, que é meu lugar preferido do mundo, conheci
                  algumas praias no nordeste, Bonito e até passei frio em Campos do
                  Jordão. E para provar que produtividade pouca é bobagem, o ano
                  teve toda essa programação, e eu ainda tive tempo para fazer o{" "}
                  <strong>segundo filho</strong>.
                </p>
                <p className="mt-7 sm:mt-6">
                  Como alguém taxado como <strong>esquecido</strong>,{" "}
                  <strong>improdutivo</strong> e <strong>sem rotinas</strong>{" "}
                  milimetricamente elaboradas pode ter realizado tanto?
                </p>
                <p className="mt-7 sm:mt-6">
                  São muitos eventos, muita produção e, principalmente,{" "}
                  <strong>muito resultado efetivo</strong> para alguém com esse
                  perfil &quot;desleixado&quot;. Nem eu acredito que fiz tudo isso
                  em <strong>12 meses</strong>.
                </p>
                <p className="mt-7 sm:mt-6">
                  O segredo não é trabalhar muito. A maioria das pessoas não
                  progride na vida porque trabalha pouco; na verdade, a maioria
                  trabalha muito, mas de maneira desordenada.
                </p>
                <p className="mt-7 sm:mt-6 ">
                  O segredo é saber o <strong>que fazer</strong>,{" "}
                  <strong>o que não fazer</strong>, em que ordem fazer e,
                  principalmente, <strong>fazer bem feito</strong>. Para fazer bem
                  feito, não tem jeito, você precisa de concentração. Continue
                  lendo, você vai entender.
                </p>
              </div>
            </section>
            </section>

            <section className=" w-full lg:hidden sm:mt-[39.9rem]">
            <div className="flex flex-col items-center">
              <a
                className="flex flex-col items-center w-full  "
                href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
              >
                <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[9rem] sm:max-w-[22.5rem] leading-[1.75rem]">
                  Acesse o aplicativo
                </button>
              </a>
            </div>
          </section>
      </section>
    );
}

export default SecondSection