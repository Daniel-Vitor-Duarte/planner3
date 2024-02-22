"use client";
import Image from "next/image";
import compromissos from "@/book.png";
import acoes from "@/truck.png";
import excesso from "@/excesso.svg";
import medo from "@/medo.svg";
import economizar from "@/economizar.svg";
import user from "@/user.png";
import grafico from "@/grafico.png";
import graficoCel from "@/grafico-celular.png";
import desenho from "@/procrastinacao.png";
import desenhoCel from "@/desenho-cel.png";
import escolhas from "@/escolhas.svg";

function FourthSection(){
    return(
        <section>
            <section className="flex flex-col max-w-[52.162rem] mx-auto text-[#545353] mt-[2.94rem] sm:mt-[3.44rem] sm:max-w-[20.4375rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold lg:max-w-[40.125rem] sm:max-w-full leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem] mm:-ml-[2rem]">
          Como organizar o dia com ultra eficiência
        </h1>
        <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
        <div className="text-[1.25rem] sm:text-[1rem] leading-[1.75rem]">
          <p className="mt-[2.94rem] sm:mt-[1.25rem]">
            Agora que você tem um backlog organizado, você precisa organizar seu
            dia. Com o <strong>P3</strong>, você faz isso com{" "}
            <strong>poucos cliques</strong> e de maneira{" "}
            <strong>inteligente</strong>.
          </p>
          <p className="mt-7 sm:mt-6">
            O dia será organizado com uma estrutura que o obriga a trabalhar de
            um jeito que seus projetos nunca parem, e que tudo esteja muito
            alinhado com suas metas e objetivos.
          </p>
          <p className="mt-7 sm:mt-6">
            O dia sempre será dividido em:{" "}
            <strong>compromissos, ações e vida pessoal</strong>.
          </p>
          <div className="sm:max-w-[21.375rem] sm:rounded-[.75rem] sm:bg-[#fff] sm:h-[31.4rem] ">
            <p className="mt-7 sm:mt-[3.44rem] sm:text-center sm:text-[#FFF] sm:bg-[#F7D300] sm:h-[3.3125rem] sm:rounded-t-[.75rem] sm:items-center sm:flex sm:justify-center sm:gap-[.5rem] font-semibold">
              <Image src={compromissos} alt="" className="lg:hidden" />
              <mark className="bg-[#F7D300] lg:px-3 sm:text-[#fff]">
                Compromissos:
              </mark>
            </p>
            <div className="sm:max-w-[19.25rem] sm:mx-auto sm:px-[.2rem]">
              <p className="mt-7 sm:mt-[1.33rem]">
                Compromissos são demandas que vão tomar seu tempo, que precisam
                ser feitas, mas que não necessariamente envolvem uma ação
                prática. Normalmente são reuniões, aulas, eventos, encontros.
              </p>
              <p className="mt-7 sm:mt-6">
                Compromissos não necessariamente alavancam sua vida, na verdade,
                na maioria das vezes, até atrasam o avanço, mas são necessários
                para a manutenção do que foi criado anteriormente. Quem entender
                essa lógica, já estará na frente de 99% da população.
              </p>
            </div>
          </div>
          <div className="sm:max-w-[21.375rem] sm:rounded-[.75rem] sm:h-[61.5rem] sm:bg-[#fff] ">
            <p className="mt-7 sm:mt-[3.44rem] sm:text-center sm:text-[#FFF] sm:bg-[#F7D300] sm:h-[3.3125rem] sm:rounded-t-[.75rem] sm:items-center sm:flex sm:justify-center sm:gap-[.5rem] font-semibold">
              <Image src={acoes} alt="" className="lg:hidden" />
              <mark className="bg-[#F7D300] lg:px-3 sm:text-[#fff]">
                Ações:
              </mark>
            </p>
            <div className="sm:max-w-[19.25rem] sm:mx-auto sm:px-[.2rem]">
              <p className="mt-7 sm:mt-[.5rem]">
                Ações são as atividades práticas que te levam aos seus
                objetivos. Se você quer ser aprovado num concurso, a ação
                prática é estudar 12h por dia. Se você quer vender um produto, a
                ação é escrever e gravar anúncios para internet. Se você quer se
                tornar um palestrante, as ações práticas são: escrever, revisar
                e treinar sua palestra. O maior salto da produtividade está
                aqui. Aqui está a alavanca do seu crescimento.
              </p>
              <p className="mt-7 sm:mt-6">
                A maioria das pessoas realiza porque evitam fazer o que tem que
                ser feito. Por que as pessoas fazem isso?
              </p>
              <p className="mt-7 sm:mt-6">
                <strong>Três motivos:</strong>
              </p>
              <div className="flex items-start gap-[1.06rem] mt-[2.56rem] sm:mt-[1.56rem] h-[4.9625rem]  sm:h-[7rem] border-b-[#959595] border-b ">
                <Image src={excesso} alt="" className="sm:hidden" />
                <p className="">
                  {" "}
                  <strong>Excesso de compromissos no dia</strong>, é assim que
                  você fica sempre ocupado, mas nunca eficiente;
                </p>
              </div>
              <div className="flex items-start gap-[1.06rem] mt-[2.56rem] sm:mt-[1.56rem] h-[3.9625rem] sm:h-[7rem] border-b-[#959595] border-b">
                <Image src={medo} alt="" className="sm:hidden" />
                <p className="">
                  <strong>Medo de falhar ou da responsabilidade</strong>, é
                  assim que você fica paralisado;
                </p>
              </div>
              <div className="flex items-start gap-[1.06rem] mt-[2.56rem] sm:mt-[1.56rem] h-[6.3625rem] ">
                <Image src={economizar} alt="" className="sm:hidden" />
                <p className="">
                  <strong>Cérebro querendo economizar energia</strong>, é assim
                  que você procrastina, perde para a preguiça, perde
                  consistência e acabativa.
                </p>
              </div>
            </div>
            <p className=" sm:mt-2 sm:hidden">
              <strong>O Planner 3</strong> é muito eficiente porque ele expõe de
              maneira visual seu excesso de compromissos, seu medo de ações
              desafiadoras, e ele não permite que você fuja dos compromissos e
              ações do dia.
            </p>
          </div>
          <div className="sm:max-w-[21.375rem] sm:rounded-[.75rem] sm:bg-[#fff] sm:h-[27.7rem]">
            <p className="mt-7 sm:mt-[3.44rem] sm:text-center sm:text-[#FFF] sm:bg-[#F7D300] sm:h-[3.3125rem] sm:rounded-t-[.75rem] sm:items-center sm:flex sm:justify-center sm:gap-[.5rem] font-semibold">
              <Image src={user} alt="" className="lg:hidden" />
              <mark className="bg-[#F7D300] lg:px-3 sm:text-[#fff]">
                Pessoal:
              </mark>
            </p>
            <div className="sm:max-w-[19.25rem] sm:mx-auto sm:px-[.2rem]">
              <p className="mt-7 sm:mt-[.75rem]">
                Muitas pessoas relegam a vida pessoal, mas isso tem um preço e
                uma hora a conta chega. Quando a vida cobra esse preço, você
                paga muito mais em dinheiro e muito mais em tempo.
              </p>
              <p className="mt-7 sm:mt-6">
                Vinte minutos de leitura por dia, exercícios esporádicos, tempo
                com filhos e família, almoçar com amigos de longa data...
                Experimente colocar três ações de cuidado com pessoal por dia e
                veja a qualidade da sua vida mudar drasticamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full">
        <div className="flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[2.94rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.44rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[52.162rem] sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[2.94rem] sm:mt-[3.44rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem] mm:-ml-[2rem]">
          Consistência sem congruência: perigo!
        </h1>
        <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
        <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem]">
          <p className="mt-[2.94rem] sm:mt-[1.25rem]">
            Consistência sem congruência é trabalhar muito nas atividades
            erradas, sem foco.
          </p>
          <p className="mt-7">
            Congruência sem consistência é trabalhar nas atividades certas, mas
            com pouca energia.
          </p>
          <p className="mt-7">
            Se você quer levantar o muro não pode ir empilhando tijolos de
            maneira aleatória, você tem que alocar os tijolos de maneira
            congruente.
          </p>
          <p className="mt-7">
            O <strong>P3</strong> te ajuda nisso, todo dia você sabe e tem a
            certeza que está levantando seu muro.
          </p>
        </div>
      </section>
      <section>
        <Image
          src={grafico}
          alt=""
          className="sm:hidden max-w-[70.25rem] mm:max-w-[60rem] mx-auto mt-[2.94rem] "
        />
        <Image
          src={graficoCel}
          alt=""
          className="lg:hidden max-w-[21.9rem] mx-auto mt-[.81rem] "
        />
        <div className=" lg:w-[105%] lg:-ml-4 bg-[#A5A4A4] h-[0.0625rem] mt-[2.94rem] sm:mt-[.81rem]"></div>
        <Image
          src={desenho}
          alt=""
          className="sm:hidden max-w-[70.25rem] mm:max-w-[60rem] mx-auto "
        />
        <Image
          src={desenhoCel}
          alt=""
          className="lg:hidden max-w-[21.9rem] mx-auto mt-[.57rem] "
        />
        <Image
          src={escolhas}
          alt=""
          className=" max-w-[35.51894rem] sm:max-w-[19.96844rem] mm:max-w-[31rem] mx-auto mt-[1.87rem] "
        />
        
      </section>

      <section className=" w-full">
        <div className="flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[2.94rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.44rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[52.162rem] sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[2.94rem] sm:mt-[3.44rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem] mm:-ml-[2rem]">
          Por que não usar sistemas complexos?
        </h1>
        <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
        <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem]">
          <p className="mt-[2.94rem] sm:mt-[1.25rem]">
            Existem várias ferramentas e plataformas complexas e sofisticadas
            para gerenciamento de tarefas, por que o usar <strong>P3</strong>?
          </p>
          <p className="mt-7">
            Porque ele não é complexo, nem sofisticado, é simples. Excesso de
            funções, tabelas, sistemas, indicadores para organizar o dia
            atrapalham mais que ajudam. Tudo o que você tem que fazer é simples,
            não complique sua própria vida.
          </p>
          <p className="mt-7">
            O <strong>P3</strong> não é uma ferramenta para te ajudar a
            organizar projetos, gerenciar times ou administrar recursos de uma
            empresa, o <strong>P3</strong> é um gerenciador da sua produtividade
            pessoal, que te ajuda, todo dia, a focar no que é mais importante
            para se fazer, hoje!
          </p>
        </div>
      </section>

      <section className=" w-full lg:hidden">
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
      </section>
        </section>
    );
}

export default FourthSection