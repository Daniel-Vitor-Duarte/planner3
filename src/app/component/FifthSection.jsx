"use client";
import Image from "next/image";
import calendario from "@/calendarioP3.png";
import calendarioCel from "@/calendarioP3-cel.png";
import dispositivos from "@/dispositivos.png";
import check from "@/check.png";
import Accordion from "../../app/component/accordion";

export default function FifthSection() {
  return (
    <section>
      <section className="max-w-[65.625rem] sm:max-w-[22.5rem] w-full lg:h-[133.375rem] lg:bg-[#E7E7E7] mt-[4.94rem] sm:mt-[3.44rem]">
        <div className="max-w-[30.4rem] w-full lg:h-[9.5rem] lg:border border-[#D4D4D4] rounded-[0.375rem] text-[2.8125rem] sm:text-[1.25rem] text-[#545353] font-bold lg:-mt-[1.56rem] lg:-ml-[4.63rem]  tracking-[0.05625rem] sm:tracking-[0.025rem] items-center flex justify-center leading-[2.86731rem] sm:leading-[1.6rem] lg:pl-[3rem] sm:pr-[3rem]  lg:bg-[#E7E7E7] mm:ml-4 mm:pl-6">
          <h1>Acompanhe seu processo</h1>
        </div>
        <Image
          src={calendario}
          alt=""
          className="sm:hidden max-w-[70.25rem] mx-auto sm:mt-[1.25rem] mt-[4rem]"
        />
        <Image
          src={calendarioCel}
          alt=""
          className="max-w-[22.7255rem] mx-auto mt-[1.25rem]  lg:hidden"
        />
        <div className=" text-[#545353] text-[1.25rem] sm:text-[1rem] lg:max-w-[56.875rem] sm:max-w-[20rem] mx-auto leading-[1.75rem] mt-[1.07rem] sm:mt-[1.25rem]">
          <p className="">Olhe para o calendário a cima:</p>
          <p className="mt-7 sm:mt-6">
            As bolinhas verdes representam dias ganhos. O dia só é ganho quando
            você consegue concluir todas as atividades que você mesmo se propôs
            a fazer. A ideia é que sejam poucas atividades, no máximo três em
            cada categoria, estrategicamente pensadas de acordo com seus
            objetivos. É trabalhar pouco, mas todo dia, com congruência.
          </p>
          <p className="mt-7 sm:mt-6">
            As bolinhas amarelas representam alerta. Isso acontece quando você
            listou suas atividades do dia, mas não conseguiu concluir tudo ou
            quando fez muitas alterações de tarefas no dia; isso demonstra falta
            de foco e inabilidade na hora de decidir o que fazer. Alerta.
          </p>
          <p className="mt-7 sm:mt-6">
            As bolinhas vermelhas representam o dia perdido. O dia é perdido
            quando você não abre o P3, quando nem chegou a listar suas tarefas.
            O dia é perdido, seja porque você não planejou, não trabalhou ou
            trabalhou no &quot;modo aleatório&quot;. Cuidado.
          </p>
          <p className="mt-7 sm:mt-6">
            Essa é uma maneira visual de ver suas chances de sucesso. Se seu
            calendário estiver majoritariamente verde, eu arriscaria dizer que
            vai bater todas as suas metas e objetivos; se seu calendário estiver
            muito amarelo, eu apostaria que vai passar longe das metas; se
            estiver mais vermelho, aposto que sua vida está desestabilizada.
          </p>
        </div>

        <section className=" w-full">
          <div className="flex flex-col items-center">
            <a
              className="flex flex-col items-center w-full  "
              href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
            >
              <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[2.88rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.44rem] sm:max-w-[22.5rem] leading-[1.75rem]">
                Acesse o aplicativo
              </button>
            </a>
          </div>
        </section>

        <div className="sm:max-w-[24.5625rem] w-full mx-auto">
          <div className="max-w-[44.59rem] sm:max-w-[20.5625rem] w-full lg:h-[9.5rem] lg:border border-[#D4D4D4] rounded-[0.375rem] text-[2.8125rem] sm:text-[1.25rem] text-[#545353] font-bold lg:mt-[2.94rem] lg:-ml-[4.63rem]  tracking-[0.05625rem] sm:tracking-[0.025rem] lg:items-center flex sm:flex-col justify-center leading-[2.86731rem] sm:leading-[1.6rem] lg:pl-[3rem] sm:pr-[3rem]  lg:bg-[#E7E7E7] sm:mt-[3.44rem] sm:mx-auto mm:ml-4 mm:pl-6">
            <h1>P3 funciona em todos os dispositivos</h1>
            <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
          </div>
          <div className="max-w-[65.625rem] mx-auto ">
            <h2 className=" mt-[2.69rem] ml-[3.94rem] sm:hidden">
              Dá só uma olhada:
            </h2>
            <Image
              src={dispositivos}
              alt=""
              className=" max-w-[65.625rem] w-full mx-auto -z-10 lg:-mt-[8.81rem]"
            />
          </div>
        </div>
      </section>

      <section className=" w-full">
        <div className="lg:hidden flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[1.75rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[56.162rem] sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[20.5rem] sm:mt-[3.44rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem] mm:-ml-[1.2rem]">
          Bônus ao assinar o aplicativo você ganha...
        </h1>
        <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
        <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem]">
          <p className="mt-[2.94rem] sm:mt-[1.25rem]">
            Ao comprar o <strong>P3</strong> você recebe de bônus um acervo de
            materiais que vai te ajudar num caminho de mais produtividade e
            foco.
          </p>
          <div className="font-semibold border border-[#CECDCD] rounded-[0.4375rem] py-[1rem] flex flex-col justify-center items-center mt-[2.94rem] ">
            <div className="max-w-[50.3rem] sm:max-w-[19.8rem] w-full ">
              <div className="flex gap-2 border-b border-[#D2D2D2] h-[3.6rem] sm:h-[7.56rem] items-center">
                <div className="flex sm:items-start gap-2">
                  <Image src={check} alt="" className="h-[1.5rem] " />
                  <p>
                    Aula mestra: As práticas de produtividade mais aceitas do
                    mundo
                  </p>
                </div>
              </div>
              <div className="flex gap-2 border-b border-[#D2D2D2] h-[3.6rem] items-center sm:h-[7.56rem]">
                <div className="flex sm:items-start gap-2">
                  <Image src={check} alt="" className="h-[1.5rem]" />
                  <p>
                    Indicações de livros, palestras e cursos para
                    desenvolvimento pessoal
                  </p>
                </div>
              </div>
              <div className="flex gap-2  h-[3.6rem] items-center sm:h-[4.56rem]">
                <Image src={check} alt="" className="h-[1.5rem]" />
                <p>Playlists de concentração</p>
              </div>
              <div className="flex gap-2  h-[3.6rem] items-center sm:h-[4.56rem]">
                <Image src={check} alt="" className="h-[1.5rem]" />
                <p>365 dias de acesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full">
        <div className=" flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[2.94rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.83rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[56.162rem] w-full sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[2.94rem] sm:mt-[4.17rem] ">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem] mm:-ml-[1.2rem]">
          Embasamento científico
        </h1>

        <div className="flex flex-col items-center">
          <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem] w-full">
            <p className="mt-[2.94rem] sm:mt-[1.25rem] mb-[2.44rem]">
              A lógica de alocação de atividades diárias do <strong>P3</strong>,
              foi desenvolvida baseada em diversos estudos científicos e teorias
              sobre produtividade e alta performance..
            </p>
          </div>
          <div className="w-[52rem] sm:max-w-[21rem]">
            <Accordion />
          </div>
        </div>
      </section>
      <section className=" w-full">
        <div className=" flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[2.94rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[4.69rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>
    </section>
  );
}
