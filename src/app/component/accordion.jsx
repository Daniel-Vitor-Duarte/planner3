import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item text-[1.25rem] w-full bg-[#E7E7E7] min-h-[2.75rem] rounded-[0.5rem] mt-2 pl-4 pt-2 ">     
        <div className="accordion-header flex gap-2 items-center " onClick={toggleAccordion}>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronRight} className='fa-xs'/>
          <div className="w-[0.125rem] h-[1.4375rem] bg-[#C6C6C6] "></div>
          <h2 className='font-semibold text-[1.25rem] text-[#545353] leading-[1.75rem] sm:tracking-tight sm:text-[1rem]'>{title}</h2>
        </div>
      {isOpen && <div className="accordion-content max-w-[45rem] sm:max-w-[16.125rem] mx-auto sm:text-[1rem] mt-[.81rem] whitespace-pre-line pb-4">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

// Example usage
const accordionItems = [
  { title: 'Lei de Parkinson e Foco', content: 'Como você já deve saber, o P3 só te dá 3 opções de organização para o seu dia e para o Backlog. Isso tem uma ligação com a Lei de Parkinson, a teoria afirma que o trabalho se expande para preencher o tempo que você programou para concluir aquela tarefa. Quando há muitas listas de tarefas, a tendência é passar o tempo de maneira improdutiva em vez de por energia no caminho para alcançar um objetivo.\nFoco é ignorar o que não é prioridade. Logo, com apenas 3 áreas, a chance é que você se dedique e se desenvolva mais nelas (trabalho, compromissos e vida pessoal).' },
  { title: 'Estudo de Glória Mark (UC Irvine)', content: 'O filtro "ações" no Planner 3 significa uma tarefa de alta concentração de pelo menos uma hora de foco total. Como a professora Gloria Mark da Universidade da Califórnia mostrou que, em média, as pessoas trocam de tarefa a cada três minutos e cinco segundos. Isso é um lembrete para você, quando adicionar uma ação no aplicativo, use a playlist de concentração (um dos bônus) e trabalhe com foco em uma única coisa. Faça isso por uma semana, um mês e um ano e veja a diferença' },
  { title: 'Trabalho Focado de Cal Newport', content: 'O autor explora a ideia do "trabalho focado" em seu livro, argumentando que o foco intenso em tarefas desafiadoras e significativas leva a um aumento de desempenho profissional. Na prática, os compromissos, ações e atividades pessoais precisam ter um grau de desafio para que você se sinta estimulado a fazê-las. Caso contrário, você se sentirá entediado e irá procrastinar. Cal baseou o conhecimento aplicado no livro em estudos sobre comportamento humano, psicologia, bem como pesquisas feitas com participantes' },
  { title: 'Teoria do Flow', content: 'O psicólogo Mihály Csikszentmihályi introduziu o conceito de "Flow", um estado de total imersão em uma atividade. Quando as pessoas entram no estado de Flow, é como se elas esquecessem do mundo à sua volta, porque todo o foco, tempo e energia vão para uma única atividade. Essa é a importância de fazer no máximo 3 atividades importantes por dia, como o método Planner 3 recomenda.' },
  { title: 'A metodologia GTD', content: 'Desenvolvida por David Allen, GTD ou Getting Things Done é uma abordagem amplamente reconhecida para a gestão da produtividade e tempo. Ela se concentra em ajudar as pessoas a organizar suas tarefas, projetos e compromissos de forma eficiente. O método GTD é simples e dividido em coletar, processar, organizar, revisar e executar. O primeiro passo é adicionar o que precisa ser feito no backlog, a segunda é colocar na categoria certa dentro do aplicativo e as outras etapas se resumem a entender qual dos itens no backlog te aproximam mais das suas metas, porque são elas que você deve priorizar.' },
];

const App = () => {
  return (
    <div>
      
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;
