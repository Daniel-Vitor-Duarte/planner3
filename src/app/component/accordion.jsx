import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion className="shadow-none text-[1.25rem] max-w-[52rem] w-full bg-[#E7E7E7] rounded-[0.5rem]">
        <AccordionSummary
          sx={{
            "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(90deg)",
            },
          }}
          expandIcon={<ChevronRightIcon className="text-[#000] " />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="flex gap-2 max-w-[52rem] w-full h-[2.75rem] items-center pl-4 sm:pl-[.31rem] flex-row-reverse mt-[3.75rem]"
        >
          <div className="flex gap-2 items-center">
            <div className="w-[0.125rem] h-[1.4375rem] bg-[#C6C6C6] "></div>
            <Typography className="font-semibold text-[1.25rem] text-[#545353] leading-[1.75rem] sm:tracking-tight sm:text-[1rem]">
              Lei de Parkinson e Foco
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="max-w-[45rem] sm:max-w-[16.125rem] mx-auto sm:text-[1rem]">
            Como você já deve saber, o P3 só te dá 3 opções de organização para
            o seu dia e para o Backlog. Isso tem uma ligação com a Lei de
            Parkinson, a teoria afirma que o trabalho se expande para preencher
            o tempo que você programou para concluir aquela tarefa. Quando há
            muitas listas de tarefas, a tendência é passar o tempo de maneira
            improdutiva em vez de por energia no caminho para alcançar um
            objetivo. <br />
            Foco é ignorar o que não é prioridade. Logo, com apenas 3 áreas, a
            chance é que você se dedique e se desenvolva mais nelas (trabalho,
            compromissos e vida pessoal).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none text-[1.25rem] max-w-[52rem] w-full bg-[#E7E7E7] rounded-[0.5rem]">
        <AccordionSummary
          sx={{
            "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(90deg)",
            },
          }}
          expandIcon={<ChevronRightIcon className="text-[#000] " />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="flex gap-2 max-w-[52rem] w-full h-[2.75rem] items-center pl-4 sm:pl-[.31rem] flex-row-reverse mt-[.5rem] border-none "
        >
          <div className="flex gap-2 sm:max-w-[16.6875rem] sm:w-full  items-center">
            <div className="w-[0.125rem] h-[1.4375rem] bg-[#C6C6C6] "></div>
            <Typography className="font-semibold text-[1.25rem] text-[#545353] leading-[1.75rem] sm:tracking-tight sm:text-[1rem]">
              Estudo de Glória Mark (UC Irvine)
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="max-w-[45rem] sm:max-w-[16.125rem] mx-auto sm:text-[1rem]">
            {
              'O filtro "ações" no Planner 3 significa uma tarefa de alta concentração de pelo menos uma hora de foco total. Como a professora Gloria Mark da Universidade da Califórnia mostrou que, em média, as pessoas trocam de tarefa a cada três minutos e cinco segundos. Isso é um lembrete para você, quando adicionar uma ação no aplicativo, use a playlist de concentração (um dos bônus) e trabalhe com foco em uma única coisa. Faça isso por uma semana, um mês e um ano e veja a diferença.'
            }
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none text-[1.25rem] max-w-[52rem] w-full bg-[#E7E7E7] rounded-[0.5rem]">
        <AccordionSummary
          sx={{
            "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(90deg)",
            },
          }}
          expandIcon={<ChevronRightIcon className="text-[#000] " />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className="flex gap-2 max-w-[52rem] w-full h-[2.75rem] items-center pl-4 sm:pl-[.31rem] flex-row-reverse mt-[.5rem]"
        >
          <div className="flex gap-2 items-center">
            <div className="w-[0.125rem] h-[1.4375rem] bg-[#C6C6C6] "></div>
            <Typography className="font-semibold text-[1.25rem]  text-[#545353] leading-[1.75rem] sm:tracking-tight sm:text-[1rem]">
              Trabalho Focado de Cal Newport
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="max-w-[45rem] sm:max-w-[16.125rem] mx-auto sm:text-[1rem] border-none">
            O autor explora a ideia do &quot;trabalho focado&quot; em seu livro,
            argumentando que o foco intenso em tarefas desafiadoras e
            significativas leva a um aumento de desempenho profissional. Na
            prática, os compromissos, ações e atividades pessoais precisam ter
            um grau de desafio para que você se sinta estimulado a fazê-las.
            Caso contrário, você se sentirá entediado e irá procrastinar. Cal
            baseou o conhecimento aplicado no livro em estudos sobre
            comportamento humano, psicologia, bem como pesquisas feitas com
            participantes
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none text-[1.25rem] max-w-[52rem] w-full bg-[#E7E7E7] rounded-[0.5rem]">
        <AccordionSummary
          sx={{
            "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(90deg)",
            },
          }}
          expandIcon={<ChevronRightIcon className="text-[#000] " />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          className="flex gap-2 max-w-[52rem] w-full h-[2.75rem] items-center pl-4 sm:pl-[.31rem] flex-row-reverse mt-[.5rem]"
        >
          <div className="flex gap-2 items-center">
            <div className="w-[0.125rem] h-[1.4375rem] bg-[#C6C6C6] "></div>
            <Typography className="font-semibold text-[1.25rem] text-[#545353] leading-[1.75rem] sm:tracking-tight sm:text-[1rem]">
              Teoria do Flow
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="max-w-[45rem] sm:max-w-[16.125rem] mx-auto sm:text-[1rem]">
            O psicólogo Mihály Csikszentmihályi introduziu o conceito de
            &quot;Flow&quot;, um estado de total imersão em uma atividade.
            Quando as pessoas entram no estado de Flow, é como se elas
            esquecessem do mundo à sua volta, porque todo o foco, tempo e
            energia vão para uma única atividade. Essa é a importância de fazer
            no máximo 3 atividades importantes por dia, como o método Planner 3
            recomenda.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none text-[1.25rem] max-w-[52rem] w-full bg-[#E7E7E7] rounded-[0.5rem]">
        <AccordionSummary
          sx={{
            "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(90deg)",
            },
          }}
          expandIcon={<ChevronRightIcon className="text-[#000] " />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          className="flex gap-2 max-w-[52rem] w-full h-[2.75rem] items-center pl-4 sm:pl-[.31rem] flex-row-reverse mt-[.5rem]"
        >
          <div className="flex gap-2 items-center">
            <div className="w-[0.125rem] h-[1.4375rem] bg-[#C6C6C6] "></div>
            <Typography className="font-semibold text-[1.25rem] text-[#545353] leading-[1.75rem] sm:tracking-tight sm:text-[1rem]">
              A metodologia GTD
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="max-w-[45rem] sm:max-w-[16.125rem] mx-auto sm:text-[1rem]">
            Desenvolvida por David Allen, GTD ou Getting Things Done é uma
            abordagem amplamente reconhecida para a gestão da produtividade e
            tempo. Ela se concentra em ajudar as pessoas a organizar suas
            tarefas, projetos e compromissos de forma eficiente. O método GTD é
            simples e dividido em coletar, processar, organizar, revisar e
            executar. O primeiro passo é adicionar o que precisa ser feito no
            backlog, a segunda é colocar na categoria certa dentro do aplicativo
            e as outras etapas se resumem a entender qual dos itens no backlog
            te aproximam mais das suas metas, porque são elas que você deve
            priorizar.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
