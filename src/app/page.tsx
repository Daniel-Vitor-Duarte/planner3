"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import logoP3 from "../../public/logo.png";
import leandroProd from "../../public/produtividade-img.png";
import play from "../../public/play_circle.png";
import line1 from "../../public/line-title.svg";
import leandro11 from "../../public/leando1-1.png";
import leandro12 from "../../public/leandro1-2.png";
import leandro13 from "../../public/leandro1-3.png";
import leandro14 from "../../public/leandro1-4.png";
import leandro11r from "../../public/leandro1-1-round.png";
import leandro12r from "../../public/leandro1-2-round.png";
import leandro13r from "../../public/leandro1-3-round.png";
import urgente from "../../public/urgente.svg";
import importate from "../../public/importante.svg";
import delega from "../../public/delegavel.svg";
import plannerBar from "../../public/planner-bar.png";
import excesso from "../../public/excesso.svg";
import medo from "../../public/medo.svg";
import economizar from "../../public/economizar.svg";
import acoes from "../../public/truck.png";
import compromissos from "../../public/book.png";
import user from "../../public/user.png";
import grafico from "../../public/grafico.png";
import graficoCel from "../../public/grafico-celular.png";
import desenho from "../../public/procrastinacao.png";
import desenhoCel from "../../public/desenho-cel.png";
import escolhas from "../../public/escolhas.svg";
import calendario from "../../public/calendarioP3.png";
import dispositivos from "../../public/dispositivos.png";
import check from "../../public/check.png";
import Accordion from "../app/component/accordion";
import ReactPlayer from "react-player";
import phone from "../../public/phone-frame.png";
import videoFull from "../../public/video-component-2-full-screen.mp4";
import videoPhone from "../../public/video-component-2-phone.mp4";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden  font-Inter">
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
        <div className="text-[#545353] flex flex-col justify-center items-center mt-[6.5rem] text-[1.25rem] sm:text-[1rem]">
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
          <div className="leading-[1.875rem] tracking-tight mt-[2.87rem] max-w-[62.5rem] sm:max-w-[20.375rem] w-full flex flex-col justify-center items-center ">
            <p>
              No vídeo abaixo, você vai assistir uma aula de 12 minutos, talvez
              os 12 minutos mais bem investidos da semana, talvez da sua vida.
            </p>
            <p className="mt-[1rem]">
              Você vai aprender a usar as técnicas de organização de tarefas das
              pessoas e empresas mais produtivas do mundo.
            </p>
          </div>
        </div>
        <div className="mt-[1.94rem] max-w-[50.0625rem] sm:max-w-[20.375rem] text-center text-[1rem] font-bold">
          <h1>
            &quot;A maioria das pessoas não progride na vida porque trabalha
            pouco, na verdade, <br className="sm:hidden" /> a maioria trabalha
            muito, mas de maneira desordenada&quot;.
          </h1>
        </div>
      </section>
      <section className="max-w-[65.625rem] sm:max-w-[22.5rem] w-full h-[105.7rem] lg:bg-[#E7E7E7] mt-[22.62rem] ">
        <div className="flex flex-col justify-center items-center -mt-[17.31rem]">
          <Image
            src={leandroProd}
            alt=""
            className="max-w-[47.60275rem] w-full max-h-[28.76981rem] h-auto sm:max-w-[22.512rem] sm:h-auto"
          />
          <Image
            src={play}
            alt=""
            className="absolute border-black sm:max-w-[3.33644rem]"
          />
        </div>
        <div className="flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[2.37rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>

        <div className="max-w-[52.25rem] w-full h-[9.5rem] border border-[#D4D4D4] rounded-[0.375rem] text-[2.8125rem] text-[#545353] font-bold mt-[4.75rem] -ml-[4.63rem] tracking-[0.05625rem] items-center flex justify-center leading-[2.86731rem] pl-[3rem] bg-[#E7E7E7] sm:hidden">
          <h1>{'Leandro Ladeira, o "improdutivo" que realiza muito.'}</h1>
        </div>

        <div className="absolute -ml-[7.69rem] sm:hidden w-[11.1875rem] mt-[2.94rem]">
          <Image src={leandro11} alt="" className=" " />
          <Image src={leandro12} alt="" className=" " />
          <Image src={leandro13} alt="" className=" " />
          <Image src={leandro14} alt="" className="" />
        </div>

        <section className="mt-[2.94rem] flex sm:flex sm:flex-col sm:mx-auto sm:bg-[#E3E3E3] sm:mt-[8.11rem] ">
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
            <div className="max-w-[20.8125rem] w-full text-[1.25rem]  text-[#545353] font-bold mx-auto tracking-[0.025rem] items-center flex justify-center leading-[1.60563rem] lg:hidden mt-[.19rem]">
              <h1>
                Leandro Ladeira, o &quot;improdutivo&quot; que realiza muito.
              </h1>
            </div>
          </div>

          <div className=" text-[#545353] text-[1.25rem] sm:text-[1rem] lg:max-w-[52.125rem] sm:max-w-[20rem] mx-auto leading-[1.75rem]">
            <p className="">
              Apesar de um histórico escolar com notas baixas e tendência à
              procrastinação, e de uma aparente desorganização, cheguei
              relativamente longe no mundo dos negócios.
            </p>
            <p className="mt-4">
              Para ser sincero, os primeiros 10 anos da minha carreira foram de
              muito trabalho e pouco sucesso. Tive uma pequena agência,
              trabalhava de domingo a domingo, a retirada mensal era mixuruca, o
              sentimento de realização e reconhecimento profissional era zero.
            </p>
            <p className="mt-4">
              Em 2013, as coisas começaram a mudar. De lá pra cá, foram mais de{" "}
              <strong>
                200 milhões faturados, milhões de inscritos nas redes sociais,
                prêmios, sucesso
              </strong>{" "}
              e o reconhecimento de estar entre os{" "}
              <strong>maiores do Brasil</strong> na minha área.
            </p>
            <p className="mt-4">
              Só para ter uma ideia, em 2023 eu fiz{" "}
              <strong>18 eventos próprios</strong> – mentorias, imersões de
              marketing e até algumas apresentações de stand-up comedy, que é um
              hobby meu.
            </p>
            <p className="mt-4">
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
            <p className="mt-4">
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
            <p className="mt-4">
              Como alguém taxado como <strong>esquecido</strong>,{" "}
              <strong>improdutivo</strong> e <strong>sem rotinas</strong>{" "}
              milimetricamente elaboradas pode ter realizado tanto?
            </p>
            <p className="mt-4">
              São muitos eventos, muita produção e, principalmente,{" "}
              <strong>muito resultado efetivo</strong> para alguém com esse
              perfil &quot;desleixado&quot;. Nem eu acredito que fiz tudo isso
              em <strong>12 meses</strong>.
            </p>
            <p className="mt-4">
              O segredo não é trabalhar muito. A maioria das pessoas não
              progride na vida porque trabalha pouco; na verdade, a maioria
              trabalha muito, mas de maneira desordenada.
            </p>
            <p className="mt-4">
              O segredo é saber o <strong>que fazer</strong>,{" "}
              <strong>o que não fazer</strong>, em que ordem fazer e,
              principalmente, <strong>fazer bem feito</strong>. Para fazer bem
              feito, não tem jeito, você precisa de concentração. Continue
              lendo, você vai entender.
            </p>
          </div>
        </section>
      </section>

      <section className=" w-full lg:hidden mt-[46rem]">
        <div className="flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[2.37rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[52.162rem] sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[7.88rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem]">
          Backlog: Entender isso pode mudar sua vida
        </h1>
        <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
        <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem]">
          <p className="mt-[3.19rem] sm:mt-[1.25rem]">
            <span className="font-semibold">Backlog</span>, palavra simples, com
            uma explicação lógica ainda mais simples. Backlog, nada mais é do
            que listar tarefas, demandas, projetos, compromissos e ideias, e
            depois priorizar a energia, alocando esforços de maneira
            estruturada.
          </p>
          <p className="mt-4">
            Ao final, o objetivo é fazer menos, mas produzir mais. A{" "}
            <span className="font-semibold italic">
              Harvard Business Review
            </span>{" "}
            publicou artigos que discutem a importância de priorizar tarefas e
            projetos com base em sua relevância e valor, que é um conceito
            fundamental por trás do uso de Backlogs.
          </p>
          <p className="mt-4">
            As maiores empresas de consultoria em gestão, como a McKinsey &
            Company e a Deloitte, recomendam a adoção de práticas ágeis e a
            utilização de Backlogs como uma maneira eficaz de melhorar o
            desempenho dos negócios.
          </p>
          <p className="mt-4">
            Eu conheci o termo por acaso, minha esposa trabalhava no Google, eu
            ouvi uma conversa dela com alguns amigos, eles falaram que usavam as
            metodologias ágeis e falaram a palavra Scrum.
          </p>
          <p className="mt-4">
            Eu anotei os termos, li e pesquisei. A princípio, fiquei frustrado.
            Criar uma lista de tarefas? Sério, esse é o segredo da produtividade
            das maiores empresas do mundo?
          </p>
          <p className="mt-4">
            Claro que não, o segredo está em coletar tudo, organizar e
            estruturar uma forma inteligente, para que você foque,
            estrategicamente, no que impulsiona seu crescimento, ao mesmo tempo
            que você não deixar o que já construiu cair.
          </p>
          <p className="mt-4">
            O backlog é a lente de aumento que amplia o foco na estrada para o
            sucesso.
          </p>
        </div>
      </section>

      <section className=" w-full lg:hidden ">
        <div className="flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[2.37rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[52.162rem] sm:max-w-[22.8125rem] mx-auto text-[#545353] mt-[7.88rem] sm:mt-[4.11rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] tracking-[0.05625rem] lg:-ml-[8.38rem] sm:tracking-[0.025rem] sm:leading-[1.6rem] sm:max-w-[20.4375rem] sm:mx-auto">
          Backlog na prática: usando a lógica do P3
        </h1>
        <div className="text-[1.25rem] sm:text-[1rem] leading-[1.75rem]">
          <div className="sm:max-w-[20.4375rem] sm:mx-auto">
            <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
            <p className="mt-[3.19rem] sm:mt-[1.25rem]">
              Na vida real, todo dia, você tem que fazer coisas, realizar
              tarefas, projetos e compromissos. A partir de agora, antes de
              fazer qualquer demanda, você vai anotar no backlog.
            </p>
            <p className="mt-4">
              Teve uma ideia de vídeo, coloca no backlog; alguém te mandou um
              e-mail pedindo um relatório, coloca no backlog: criar relatório.
              Vai ter uma reunião com o contador, coloca no backlog.
            </p>
            <p className="mt-4">
              No início, seu backlog vai ficar grande, com o passar do tempo, ao
              implementar essa lógica, você vai ver que ele vai diminuir de
              tamanho. Primeiro, porque vai conseguir realizar vários projetos
              que estavam parados pegando poeira, segundo, porque vai ficar mais
              claro quais demandas ficam esquecidas, exatamente porque não
              tinham uma real utilidade prática, elas simplesmente ocupavam seu
              tempo, sem te trazer muita eficiência em relação às suas
              realizações.
            </p>
            <p className="mt-4">
              Seu backlog nunca vai zerar, se zerar, você está fazendo errado.
              Todo dia você tem que alimentar seu backlog com demandas que te
              ajudem a realizar seus objetivos.
            </p>
            <p className="mt-4">
              O jeito errado de pensar em backlog é fazer uma lista de tarefas
              sem critérios. Com o <strong>Planner 3</strong>, quando você
              cadastra uma demanda, ela tem que responder a critérios e é aqui
              que a mágica começa a acontecer.
            </p>
            <p className="mt-4">
              <strong>Você organiza tudo em 3 categorias:</strong>
            </p>
            <p className="mt-4">
              <strong>Urgente, Importante e Delegável,</strong> essa organização
              te mantém produtivo porque:
            </p>
          </div>
          <div className="sm:bg-[#FFF] sm:w-[22.8125rem] sm:h-[54.625rem] sm:rounded-[1.25rem] sm:mt-[1.88rem]">
            <div className="sm:max-w-[18.375rem] sm:flex sm:flex-col sm:gap-[2.56rem] sm:text-[1rem] sm:mx-auto ">
              <div className="flex items-start gap-[1.06rem] lg:mt-[2.19rem] sm:mt-[2rem] h-[7.5625rem] border-b-[#959595] border-b sm:h-[10.9375rem]">
                <Image src={urgente} alt="" className="sm:hidden" />
                <p className="">
                  {" "}
                  <strong>Urgente:</strong> diminui a ansiedade, já que você tem
                  clareza do que é <strong>inadiável</strong>, tem que fazer e
                  tem que ser <strong>agora</strong>. Não tem discussão, é fazer
                  ou as consequências serão <strong>grandes</strong>.
                </p>
              </div>
              <div className="flex items-start gap-[1.06rem] lg:mt-[2.19rem] h-[7.5625rem] border-b-[#959595] border-b sm:h-[13.75rem]">
                <Image src={importate} alt="" className="sm:hidden" />
                <p className="">
                  <strong>Importante:</strong> Traz clareza do que é adiável,
                  mas é <strong>importantíssimo</strong> para que você cumpra
                  seus objetivos. Logo, tem que ser feito, e com a maior
                  concentração possível – o maior salto de{" "}
                  <strong>produtividade</strong> da sua vida{" "}
                  <strong>está aqui</strong>.
                </p>
              </div>
              <div className="flex items-start gap-[1.06rem] lg:mt-[2.19rem] h-[7.5625rem]  sm:h-[19.0625rem]">
                <Image src={delega} alt="" className="sm:hidden" />
                <p className="">
                  {" "}
                  <strong>Delegável:</strong> Por último, e não menos
                  importante, o <strong>P3</strong> te incentiva a delegar com{" "}
                  <strong>qualidade</strong>. Cada atividade de delegação vira
                  um compromisso, que certamente exige muito menos do seu tempo
                  e esforço. O <strong>P3</strong> não te deixa delegar de
                  maneira “desleixada”, cada atividade delegada vira um
                  compromisso, <strong>nada se perde</strong>. No coração de
                  toda grande conquista, você encontrará um backlog{" "}
                  <strong>bem organizado</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className='mt-[5.88rem] sm:hidden max-w-[73.125rem] w-full'>
        <h1 className='text-[2.8125rem] text-[#545353] font-bold leading-[2.86731rem] tracking-[0.05625rem] ml-[5.56rem]'>Veja como tudo isso funciona na prática:</h1>
        <div className='mx-auto'>
        <Image src={plannerBar} alt='' className='mt-[1.5rem] mb-[.56rem]' />
        </div>
        <div>
          <ReactPlayer
          className='gif'
          loop
          playing
          width='73rem'
          height=''
          url='video-component-2-full-screen.mp4'/>
          <div className='z-10  flex justify-center -mt-[35.5rem] -mr-[calc(100%-7rem)] '>
          <ReactPlayer
          className='gif2'
          loop
          playing
          width='100%'
          height='100%'
          url="video-component-2-phone.mp4"/>
          <Image src={phone} alt='' className='mx-auto relative min-w-[17.67644rem] ' />
          </div>
        </div>
      </section>


      <section className=" w-full">
        <div className="flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[4.14rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[52.162rem] mx-auto text-[#545353] mt-[7.88rem] sm:mt-[4.11rem] sm:max-w-[20.4375rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold lg:max-w-[40.125rem] sm:max-w-full leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem]">
          Como organizar o dia com ultra eficiência
        </h1>
        <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
        <div className="text-[1.25rem] sm:text-[1rem] leading-[1.75rem]">
          <p className="mt-[3.19rem] sm:mt-[1.25rem]">
            Agora que você tem um backlog organizado, você precisa organizar seu
            dia. Com o <strong>P3</strong>, você faz isso com{" "}
            <strong>poucos cliques</strong> e de maneira{" "}
            <strong>inteligente</strong>.
          </p>
          <p className="mt-4">
            O dia será organizado com uma estrutura que o obriga a trabalhar de
            um jeito que seus projetos nunca parem, e que tudo esteja muito
            alinhado com suas metas e objetivos.
          </p>
          <p className="mt-4">
            O dia sempre será dividido em:{" "}
            <strong>compromissos, ações e vida pessoal</strong>.
          </p>
          <div className="sm:max-w-[21.375rem] sm:rounded-[.75rem] sm:bg-[#fff] sm:h-[31.4rem]">
            <p className="mt-4 sm:text-center sm:text-[#FFF] sm:bg-[#F7D300] sm:h-[3.3125rem] sm:rounded-t-[.75rem] sm:items-center sm:flex sm:justify-center sm:gap-[.5rem] font-semibold">
              <Image src={compromissos} alt="" className="lg:hidden" />
              <mark className="bg-[#F7D300] lg:px-3 sm:text-[#fff]">
                Compromissos:
              </mark>
            </p>
            <div className="sm:max-w-[19.25rem] sm:mx-auto sm:px-[.2rem]">
              <p className="mt-4">
                Compromissos são demandas que vão tomar seu tempo, que precisam
                ser feitas, mas que não necessariamente envolvem uma ação
                prática. Normalmente são reuniões, aulas, eventos, encontros.
              </p>
              <p className="mt-4">
                Compromissos não necessariamente alavancam sua vida, na verdade,
                na maioria das vezes, até atrasam o avanço, mas são necessários
                para a manutenção do que foi criado anteriormente. Quem entender
                essa lógica, já estará na frente de 99% da população.
              </p>
            </div>
          </div>
          <div className="sm:max-w-[21.375rem] sm:rounded-[.75rem] sm:bg-[#fff] ">
            <p className="mt-4 sm:text-center sm:text-[#FFF] sm:bg-[#F7D300] sm:h-[3.3125rem] sm:rounded-t-[.75rem] sm:items-center sm:flex sm:justify-center sm:gap-[.5rem] font-semibold">
              <Image src={acoes} alt="" className="lg:hidden" />
              <mark className="bg-[#F7D300] lg:px-3 sm:text-[#fff]">
                Ações:
              </mark>
            </p>
            <div className="sm:max-w-[19.25rem] sm:mx-auto sm:px-[.2rem]">
              <p className="mt-4 sm:mt-2">
                Ações são as atividades práticas que te levam aos seus
                objetivos. Se você quer ser aprovado num concurso, a ação
                prática é estudar 12h por dia. Se você quer vender um produto, a
                ação é escrever e gravar anúncios para internet. Se você quer se
                tornar um palestrante, as ações práticas são: escrever, revisar
                e treinar sua palestra. O maior salto da produtividade está
                aqui. Aqui está a alavanca do seu crescimento.
              </p>
              <p className="mt-4">
                A maioria das pessoas realiza porque evitam fazer o que tem que
                ser feito. Por que as pessoas fazem isso?
              </p>
              <p className="mt-4">
                <strong>Três motivos:</strong>
              </p>
              <div className="flex items-start gap-[1.06rem] mt-[2.19rem] sm:mt-[1.56rem] h-[4.5625rem]  sm:h-[7rem] border-b-[#959595] border-b ">
                <Image src={excesso} alt="" className="sm:hidden" />
                <p className="">
                  {" "}
                  <strong>Excesso de compromissos no dia</strong>, é assim que
                  você fica sempre ocupado, mas nunca eficiente;
                </p>
              </div>
              <div className="flex items-start gap-[1.06rem] mt-[2.19rem] sm:mt-[1.56rem] h-[3.5625rem] sm:h-[7rem] border-b-[#959595] border-b">
                <Image src={medo} alt="" className="sm:hidden" />
                <p className="">
                  <strong>Medo de falhar ou da responsabilidade</strong>, é
                  assim que você fica paralisado;
                </p>
              </div>
              <div className="flex items-start gap-[1.06rem] mt-[2.19rem] sm:mt-[1.56rem] h-[7.5625rem] ">
                <Image src={economizar} alt="" className="sm:hidden" />
                <p className="">
                  <strong>Cérebro querendo economizar energia</strong>, é assim
                  que você procrastina, perde para a preguiça, perde
                  consistência e acabativa.
                </p>
              </div>
            </div>
            <p className="mt-3 sm:mt-2 sm:hidden">
              <strong>O Planner 3</strong> é muito eficiente porque ele expõe de
              maneira visual seu excesso de compromissos, seu medo de ações
              desafiadoras, e ele não permite que você fuja dos compromissos e
              ações do dia.
            </p>
          </div>
          <div className="sm:max-w-[21.375rem] sm:rounded-[.75rem] sm:bg-[#fff] sm:h-[27rem]">
            <p className="mt-4 sm:text-center sm:text-[#FFF] sm:bg-[#F7D300] sm:h-[3.3125rem] sm:rounded-t-[.75rem] sm:items-center sm:flex sm:justify-center sm:gap-[.5rem] font-semibold">
              <Image src={user} alt="" className="lg:hidden" />
              <mark className="bg-[#F7D300] lg:px-3 sm:text-[#fff]">
                Pessoal:
              </mark>
            </p>
            <div className="sm:max-w-[19.25rem] sm:mx-auto sm:px-[.2rem]">
              <p className="mt-4">
                Muitas pessoas relegam a vida pessoal, mas isso tem um preço e
                uma hora a conta chega. Quando a vida cobra esse preço, você
                paga muito mais em dinheiro e muito mais em tempo.
              </p>
              <p className="mt-4">
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
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[4.14rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[52.162rem] sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[7.88rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem]">
          Consistência sem congruência: perigo!
        </h1>
        <div className="max-w-[10.375rem] w-full h-[0.1875rem] bg-[#F7D300] rounded-r-[0.3125rem] lg:hidden mt-[.5rem]"></div>
        <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem]">
          <p className="mt-[3.19rem] sm:mt-[1.25rem]">
            Consistência sem congruência é trabalhar muito nas atividades
            erradas, sem foco.
          </p>
          <p className="mt-4">
            Congruência sem consistência é trabalhar nas atividades certas, mas
            com pouca energia.
          </p>
          <p className="mt-4">
            Se você quer levantar o muro não pode ir empilhando tijolos de
            maneira aleatória, você tem que alocar os tijolos de maneira
            congruente.
          </p>
          <p className="mt-4">
            O <strong>P3</strong> te ajuda nisso, todo dia você sabe e tem a
            certeza que está levantando seu muro.
          </p>
        </div>
      </section>
      <section>
        <Image
          src={grafico}
          alt=""
          className="sm:hidden max-w-[70.25rem] mx-auto mt-[5.87rem] "
        />
        <Image
          src={graficoCel}
          alt=""
          className="lg:hidden max-w-[21.9rem] mx-auto mt-[5.87rem] "
        />
        <Image
          src={desenho}
          alt=""
          className="sm:hidden max-w-[70.25rem] mx-auto mt-[3.87rem] "
        />
        <Image
          src={desenhoCel}
          alt=""
          className="lg:hidden max-w-[21.9rem] mx-auto mt-[.57rem] "
        />
        <Image
          src={escolhas}
          alt=""
          className=" max-w-[35.51894rem] sm:max-w-[19.96844rem] mx-auto mt-[1.87rem] "
        />
      </section>

      <section className=" w-full">
        <div className="flex flex-col items-center">
          <a
            className="flex flex-col items-center w-full  "
            href="https://pay.hotmart.com/B79805172S?off=jqkm1app&checkoutMode=10&bid=1703596018359"
          >
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[4.14rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[52.162rem] sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[7.88rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem]">
          Por que não usar sistemas complexos?
        </h1>

        <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem]">
          <p className="mt-[3.19rem] sm:mt-[1.25rem]">
            Existem várias ferramentas e plataformas complexas e sofisticadas
            para gerenciamento de tarefas, por que o usar <strong>P3</strong>?
          </p>
          <p className="mt-4">
            Porque ele não é complexo, nem sofisticado, é simples. Excesso de
            funções, tabelas, sistemas, indicadores para organizar o dia
            atrapalham mais que ajudam. Tudo o que você tem que fazer é simples,
            não complique sua própria vida.
          </p>
          <p className="mt-4">
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
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[4.14rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="max-w-[65.625rem] sm:max-w-[22.5rem] w-full lg:h-[138.7rem] lg:bg-[#E7E7E7] mt-[6.05rem] ">
        <div className="max-w-[30.4rem] w-full lg:h-[9.5rem] lg:border border-[#D4D4D4] rounded-[0.375rem] text-[2.8125rem] sm:text-[1.25rem] text-[#545353] font-bold lg:-mt-[1.56rem] lg:-ml-[4.63rem]  tracking-[0.05625rem] sm:tracking-[0.025rem] items-center flex justify-center leading-[2.86731rem] sm:leading-[1.6rem] lg:pl-[3rem] sm:pr-[3rem]  lg:bg-[#E7E7E7] ">
          <h1>Acompanhe seu progresso</h1>
        </div>
        <Image
          src={calendario}
          alt=""
          className="sm:max-w-[22.7255rem] max-w-[70.25rem] mx-auto sm:mt-[1.25rem] mt-[5.87rem] "
        />
        <div className=" text-[#545353] text-[1.25rem] sm:text-[1rem] lg:max-w-[56.875rem] sm:max-w-[20rem] mx-auto leading-[1.75rem] mt-[3.33rem] sm:mt-[1.25rem]">
          <p className="">Olhe para o calendário a cima:</p>
          <p className="mt-4">
            As bolinhas verdes representam dias ganhos. O dia só é ganho quando
            você consegue concluir todas as atividades que você mesmo se propôs
            a fazer. A ideia é que sejam poucas atividades, no máximo três em
            cada categoria, estrategicamente pensadas de acordo com seus
            objetivos. É trabalhar pouco, mas todo dia, com congruência.
          </p>
          <p className="mt-4">
            As bolinhas amarelas representam alerta. Isso acontece quando você
            listou suas atividades do dia, mas não conseguiu concluir tudo ou
            quando fez muitas alterações de tarefas no dia; isso demonstra falta
            de foco e inabilidade na hora de decidir o que fazer. Alerta.
          </p>
          <p className="mt-4">
            As bolinhas vermelhas representam o dia perdido. O dia é perdido
            quando você não abre o P3, quando nem chegou a listar suas tarefas.
            O dia é perdido, seja porque você não planejou, não trabalhou ou
            trabalhou no &quot;modo aleatório&quot;. Cuidado.
          </p>
          <p className="mt-4">
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
              <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[4.14rem] sm:max-w-[22.5rem] leading-[1.75rem]">
                Acesse o aplicativo
              </button>
            </a>
          </div>
        </section>

        <div className="sm:max-w-[24.5625rem] w-full mx-auto">
          <div className="max-w-[44.59rem] sm:max-w-[20.5625rem] w-full lg:h-[9.5rem] lg:border border-[#D4D4D4] rounded-[0.375rem] text-[2.8125rem] sm:text-[1.25rem] text-[#545353] font-bold lg:mt-[1.87rem] lg:-ml-[4.63rem]  tracking-[0.05625rem] sm:tracking-[0.025rem] items-center flex justify-center leading-[2.86731rem] sm:leading-[1.6rem] lg:pl-[3rem] sm:pr-[3rem]  lg:bg-[#E7E7E7] sm:mt-[4.11rem] sm:mx-auto">
            <h1>P3 funciona em todos os dispositivos</h1>
          </div>
          <div className="max-w-[65.625rem] mx-auto ">
            <h2 className="mt-[2.5rem] ml-[3.94rem] sm:hidden">
              Dá só uma olhada:
            </h2>
            <Image
              src={dispositivos}
              alt=""
              className=" max-w-[65.625rem] w-full mx-auto -z-10 lg:-mt-[7.31rem]"
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
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.83rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[56.162rem] sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[20.5rem] sm:mt-[4.17rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem]">
          Bônus ao assinar o aplicativo você ganha...
        </h1>

        <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem]">
          <p className="mt-[3.19rem] sm:mt-[1.25rem]">
            Ao comprar o <strong>P3</strong> você recebe de bônus um acervo de
            materiais que vai te ajudar num caminho de mais produtividade e
            foco.
          </p>
          <div className="font-semibold border border-[#CECDCD] rounded-[0.4375rem] h-[11.76rem] sm:h-[19.1rem] flex flex-col justify-center items-center mt-[3.25rem]">
            <div className="max-w-[50.3rem] sm:max-w-[19.8rem] w-full ">
              <div className="flex gap-2 border-b border-[#D2D2D2] h-[3.6rem] sm:h-[7.56rem] items-center">
                <Image src={check} alt="" className="h-[1.5rem] " />
                <p>
                  Aula mestra: As práticas de produtividade mais aceitas do
                  mundo
                </p>
              </div>
              <div className="flex gap-2 border-b border-[#D2D2D2] h-[3.6rem] items-center sm:h-[7.56rem]">
                <Image src={check} alt="" className="h-[1.5rem]" />
                <p>
                  Indicações de livros, palestras e cursos para desenvolvimento
                  pessoal
                </p>
              </div>
              <div className="flex gap-2  h-[3.6rem] items-center sm:h-[4.56rem]">
                <Image src={check} alt="" className="h-[1.5rem]" />
                <p>Playlists de concentração</p>
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
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.83rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col max-w-[56.162rem] sm:max-w-[20.8125rem] mx-auto text-[#545353] mt-[6.25rem] sm:mt-[4.17rem]">
        <h1 className="text-[2.8125rem] sm:text-[1.25rem] font-bold max-w-[40.125rem] leading-[2.86731rem] sm:leading-[1.6rem] sm:tracking-[0.025rem] tracking-[0.05625rem] lg:-ml-[8.38rem]">
          Embasamento científico
        </h1>

        <div className="text-[1.25rem] sm:text-[1rem]  leading-[1.75rem]">
          <p className="mt-[3.19rem] sm:mt-[1.25rem]">
            A lógica de alocação de atividades diárias do <strong>P3</strong>,
            foi desenvolvida baseada em diversos estudos científicos e teorias
            sobre produtividade e alta performance..
          </p>
        </div>
        <Accordion />
      </section>
      <section className=" w-full">
        <div className=" flex flex-col items-center">
          <a className="flex flex-col items-center w-full  " href="">
            <button className="max-w-[30.38rem] w-full h-[4.25rem] bg-[#F7D300] rounded-[.75rem] mt-[4.73rem] text-[1.25rem] sm:text-[1.125rem] font-extrabold sm:mt-[3.83rem] sm:max-w-[22.5rem] leading-[1.75rem]">
              Acesse o aplicativo
            </button>
          </a>
        </div>
      </section>

      <section className="w-full ">
        <div className="w-[98%] sm:w-[92%] mx-auto h-[0.0625rem] bg-[#C2C0C0] mt-[8rem]"></div>

        <div className=" w-full h-[4.75rem] flex flex-col justify-center">
          <h1 className="copyright sm:max-w-[19.1875rem] text-[0.9375rem] sm:text-[0.875rem] text-[#7C7C7C] leading-[2.1875rem] text-center mx-auto">
            Copyright © 2023 Inc. Todos os direitos reservados. READY TO GO
            EDUCATION CNPJ: 37.643.030/0001-26
          </h1>
        </div>
      </section>
    </main>
  );
}
