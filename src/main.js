import './style.css'
import { getCheckoutUrl, getCookie } from '@/lib/checkoutUrl'
import { trackFunnel } from '@/lib/funnelTrack'
import pontoAmericanoImg from './assets/1.webp'
import fitaAdesivaImg from './assets/fita-adesiva.webp'
import capsulaImg from './assets/3.webp'
import resultado01Img from './assets/resultado-01.webp'
import resultado02Img from './assets/resultado-02.webp'
import resultado03Img from './assets/resultado-03.webp'
import resultado04Img from './assets/resultado-04.webp'
import resultado05Img from './assets/resultado-05.webp'
import resultado06Img from './assets/resultado-06.webp'
import resultado07Img from './assets/resultado-07.webp'
import resultado08Img from './assets/resultado-08.webp'
import resultado09Img from './assets/resultado-09.webp'
import professoraImg from './assets/anna-schossig-professora.webp'

const isSpanishPage = window.location.pathname.split('/').filter(Boolean)[0] === 'es'
const isFreeClassPage = window.location.pathname.split('/').filter(Boolean)[0] === 'aula-gratuita'
const checkoutUrl = isSpanishPage
  ? 'https://pay.hotmart.com/M106369269V'
  : 'https://pay.kiwify.com.br/UruirxE'
const freeClassCtaUrl = 'https://chat.whatsapp.com/E1ssAsnS8GmJ603ChKCJIn?mode=gi_t'
const checkoutTracking = isSpanishPage
  ? { value: 4.00, currency: 'USD' }
  : { value: 59.00, currency: 'BRL' }
const heroVideoUrl =
  'https://player-vz-db0cd809-911.tv.pandavideo.com.br/embed/?v=f3e0efda-2ee5-4d2d-885b-963e8df062ea'

document.documentElement.lang = isSpanishPage ? 'es' : 'pt-BR'
document.title = isSpanishPage
  ? 'Anna Schossig - Guía Práctica de Extensiones de Cabello'
  : 'Anna Schossig - Mega Hair'

const pageText = isSpanishPage
  ? {
      productName: 'Guía Práctica de Extensiones de Cabello 3 en 1',
      checkoutContentName: 'Guía Práctica de Extensiones de Cabello 3 en 1',
      resultAlt: [
        'Antes y después de aplicación de extensiones de cabello negro con acabado natural',
        'Antes y después de extensiones de cabello oscuro con movimiento ondulado',
        'Antes y después de extensiones de cabello rizado con volumen natural',
        'Antes y después de extensiones de cabello liso visto desde atrás con acabado alineado',
        'Antes y después de extensiones en cabello castaño largo',
        'Antes y después de extensiones de cabello negro con ondas naturales',
        'Antes y después de extensiones de cabello largo y oscuro',
        'Antes y después de extensiones de cabello rubio largo con acabado natural',
        'Antes y después de extensiones de cabello rubio con largo uniforme',
      ],
      learningModules: [
        {
          number: '01',
          title: 'Fundamentos de las Extensiones de Cabello',
          text: 'Entiende cómo funcionan las extensiones capilares, qué cuidados observar y lo que toda profesional necesita saber antes de aplicar.',
        },
        {
          number: '02',
          title: 'Preparación del Cabello y Materiales',
          text: 'Aprende cómo preparar el cabello, organizar los materiales y crear una base segura antes de iniciar cualquier aplicación.',
        },
        {
          number: '03',
          title: 'Punto Americano',
          text: 'Aprende cómo funciona la técnica, su forma de fijación, cuándo indicarla y qué cuidados tener para entregar firmeza y durabilidad.',
        },
        {
          number: '04',
          title: 'Extensiones Adhesivas',
          text: 'Conoce el método adhesivo, una técnica práctica, discreta y muy buscada por clientas que desean un acabado natural.',
        },
        {
          number: '05',
          title: 'Cápsula de Queratina',
          text: 'Mira cómo funciona la aplicación mechón por mechón y los cuidados para lograr más movimiento y naturalidad.',
        },
        {
          number: '06',
          title: 'Diferencias entre las Técnicas',
          text: 'Entiende cuándo usar cada método, los puntos fuertes de cada técnica y cómo elegir la mejor opción para cada clienta.',
        },
        {
          number: '07',
          title: 'División y Posicionamiento',
          text: 'Aprende cómo organizar los mechones, respetar la raíz y posicionar las extensiones para un resultado más bonito y cómodo.',
        },
        {
          number: '08',
          title: 'Cuidados y Mantenimiento',
          text: 'Aprende los principales cuidados después de la aplicación y cómo orientar a la clienta para mantener el resultado bonito por más tiempo.',
        },
        {
          number: '09',
          title: 'Seguridad en la Aplicación',
          text: 'Mira puntos importantes para evitar errores comunes, exceso de tensión, incomodidad y problemas en la fijación.',
        },
        {
          number: '10',
          title: 'Resultado Profesional',
          text: 'Entiende cómo buscar un acabado más natural, alineado y seguro para entregar más valor en tu atención.',
        },
      ],
      benefitItems: [
        {
          number: '01',
          title: 'Agrega un nuevo servicio a tu portafolio',
          text: 'Aprende extensiones de cabello para ofrecer una nueva opción de transformación a tus clientas.',
        },
        {
          number: '02',
          title: 'Empieza incluso desde cero',
          text: 'Un camino práctico para principiantes, peluqueras, profesionales de belleza y también para quien todavía no trabaja en el área.',
        },
        {
          number: '03',
          title: 'Ofrece un servicio más valorizado',
          text: 'Las extensiones de cabello son una atención con mayor percepción de valor y pueden aumentar tu ticket.',
        },
        {
          number: '04',
          title: 'Atiende diferentes tipos de clientas',
          text: 'Con 3 técnicas, aprendes a indicar la opción más adecuada para cada necesidad.',
        },
        {
          number: '05',
          title: 'Amplía tus posibilidades de ingresos',
          text: 'Ten un servicio que puede ofrecerse en el salón, en casa o en atenciones particulares.',
        },
        {
          number: '06',
          title: 'Sé vista como una profesional más completa',
          text: 'Cuantas más soluciones dominas, más confianza transmites a tus clientas.',
        },
      ],
      forYouItems: [
        'Eres profesional de belleza',
        'Quieres empezar con extensiones de cabello',
        'Buscas un servicio más valorizado',
        'Quieres aprender 3 técnicas en una guía práctica',
        'Necesitas un contenido práctico y directo',
      ],
      notForYouItems: [
        'No quieres estudiar ni practicar',
        'Buscas una formación presencial larga',
        'No quieres ofrecer nuevos servicios',
      ],
      hero: {
        titleIntro: 'Aprende 3 técnicas de extensiones de cabello:',
        subtitle:
          'Los mismos servicios que hoy me ayudan a aumentar mis ingresos, y que tú puedes empezar a ofrecer en tu estudio esta misma semana, incluso si eres principiante.',
        button: 'Garantizar acceso ahora',
        installments: 'Últimas plazas a un precio especial',
        fullPrice: 'con certificado',
        microcopy: 'Acceso online por 1 año con certificado',
        mediaLabel: 'Video de presentación de la guía práctica',
        videoTitle: 'Video de presentación de la guía práctica de extensiones de cabello',
        oldPrice: 'R$397,00',
        priceKicker: 'Por apenas',
        price: 'R$59',
        risk: 'Riesgo cero!',
        urgency: 'Pero necesitas actuar rápido!',
        bonuses: [
          'Curso de Punto Americano, Extensiones Adhesivas y Cápsula de Queratina',
        ],
        includes: [
          'Acceso por 1 año',
          'Certificado',
          'Lista de proveedores',
          'Material de apoyo',
        ],
        limited: 'Oferta disponible por tiempo limitado',
      },
      techniques: {
        title: 'Conoce las 3 técnicas',
        subtitle: 'Entiende las diferencias de forma práctica y visual.',
        cards: [
          {
            title: 'Punto Americano',
            text: 'Fijación firme y estructurada, ideal para quien busca seguridad y durabilidad.',
            alt: 'Aplicación de extensiones de cabello con técnica Punto Americano',
          },
          {
            title: 'Extensiones Adhesivas',
            text: 'Aplicación práctica, discreta y cómoda, con acabado natural.',
            alt: 'Aplicación de extensiones adhesivas de cabello',
          },
          {
            title: 'Cápsula de Queratina',
            text: 'Mechón por mechón, con más movimiento y naturalidad en el resultado.',
            alt: 'Aplicación de extensiones de cabello con técnica Cápsula de Queratina',
          },
        ],
        controls: 'Control del carrusel de técnicas',
        prev: 'Ver técnica anterior',
        next: 'Ver siguiente técnica',
        strip: ['Clases prácticas', 'Explicación simple', '3 técnicas en una sola guía'],
      },
      results: {
        title: 'Mira el resultado que una buena técnica entrega',
        label: 'Galería de resultados de extensiones de cabello',
      },
      learning: {
        kicker: 'Lo que vas a aprender',
        title: 'Guía práctica 3 en 1',
      },
      benefits: {
        kicker: 'Lo que cambia para ti',
        title: 'Entra en un área con alto potencial de retorno',
      },
      fit: {
        kicker: 'Para quién es',
        title: 'Esta guía práctica fue hecha para ti si...',
        positiveTitle: 'Es para ti si:',
        negativeTitle: 'No es para ti si:',
      },
      mentor: {
        kicker: 'Quién te va a enseñar',
        title: 'Anna Schossig',
        paragraphs: [
          'Especialista en extensiones de cabello y creadora de la Guía Práctica de Extensiones de Cabello 3 en 1, Anna enseña de forma práctica, clara y directa para profesionales que quieren empezar o ampliar sus servicios con más seguridad.',
          'En esta guía práctica, ella reúne las técnicas Punto Americano, Extensiones Adhesivas y Cápsula de Queratina para mostrar cómo construir una base profesional, elegir la mejor indicación y entregar un resultado más natural para la clienta.',
        ],
        alt: 'Anna Schossig, profesora de la Guía Práctica de Extensiones de Cabello 3 en 1',
        caption: 'Guía Práctica 3 en 1',
      },
      offer: {
        kicker: 'Lo que está incluido',
        title: 'Todo lo que recibes hoy',
        ribbon: 'Oferta completa',
        badge: 'Más elegido',
        label: 'Completo',
        name: 'Guía Práctica de Extensiones de Cabello 3 en 1',
        couponLabel: 'Cupón liberado',
        couponTitle: 'Ganaste un cupón de descuento',
        couponText: 'Últimas plazas a un precio especial – con certificado.',
        summaryLabel: 'Resumen',
        summaryText: 'Guía práctica online de extensiones de cabello 3 en 1 con clases prácticas, certificado y bonos liberados.',
        bonusLabel: 'Bonos liberados en el acceso',
        bonuses: [
          'App de Agenda',
          'App de Agenda Automática para que tus clientas marquen horario solas',
          'App de Control Financiero',
          'Curso de Tráfico Pago para profesionales de belleza',
        ],
        free: 'Gratis',
        total: 'Valor total:',
        price: 'Precio especial',
        priceText: 'Últimas plazas a un precio especial',
        access: 'Con certificado · 1 año de acceso',
        oldPrice: 'Precio regular',
        button: 'Garantizar acceso ahora',
        timer: 'Esta condición termina en',
      },
      certificate: {
        kicker: 'Certificado incluido',
        title: 'Comprueba tu evolución en extensiones de cabello',
        text:
          'Al concluir la Guía Práctica de Extensiones de Cabello 3 en 1, recibes un certificado para registrar tu camino de aprendizaje y reforzar tu presentación profesional.',
        items: [
          'Certificado digital de conclusión',
          'Ideal para presentar en el portafolio profesional',
          'Más confianza para divulgar tus nuevos servicios',
        ],
        mockupLabel: 'Mockup del certificado Extensiones de Cabello 3 en 1',
        small: 'Certificado de Conclusión',
        certificateText:
          'Concedido a la alumna que concluyó la guía práctica online con foco en Punto Americano, Extensiones Adhesivas y Cápsula de Queratina.',
      },
    }
  : {
      productName: 'Mega Hair 3 em 1',
      checkoutContentName: 'Mega Hair 3 em 1',
      resultAlt: [
        'Antes e depois de aplicação de mega hair em cabelo preto com acabamento natural',
        'Antes e depois de mega hair em cabelo escuro com movimento ondulado',
        'Antes e depois de mega hair cacheado com volume natural',
        'Antes e depois de mega hair liso visto de costas com acabamento alinhado',
        'Antes e depois de alongamento com mega hair em cabelo castanho longo',
        'Antes e depois de mega hair em cabelo preto com ondas naturais',
        'Antes e depois de mega hair longo em cabelo escuro',
        'Antes e depois de mega hair loiro longo com acabamento natural',
        'Antes e depois de mega hair loiro com comprimento uniforme',
      ],
      learningModules: [
        {
          number: '01',
          title: 'Fundamentos do Mega Hair',
          text: 'Entenda como funciona o alongamento capilar, quais cuidados observar e o que toda profissional precisa saber antes de aplicar.',
        },
        {
          number: '02',
          title: 'Preparação dos Fios e Materiais',
          text: 'Veja como preparar o cabelo, organizar os materiais e criar uma base segura antes de iniciar qualquer aplicação.',
        },
        {
          number: '03',
          title: 'Ponto Americano',
          text: 'Aprenda como funciona a técnica, sua forma de fixação, quando indicar e quais cuidados ter para entregar firmeza e durabilidade.',
        },
        {
          number: '04',
          title: 'Fita Adesiva',
          text: 'Conheça uma técnica prática, discreta e procurada por clientes que desejam um acabamento natural.',
        },
        {
          number: '05',
          title: 'Cápsula de Queratina',
          text: 'Veja como funciona a aplicação mecha a mecha e os cuidados para conquistar mais movimento e naturalidade.',
        },
        {
          number: '06',
          title: 'Diferenças entre as Técnicas',
          text: 'Entenda quando usar cada método, os pontos fortes de cada técnica e como escolher a melhor opção para cada cliente.',
        },
        {
          number: '07',
          title: 'Divisão e Posicionamento',
          text: 'Aprenda como organizar as mechas, respeitar a raiz e posicionar o mega hair para um resultado mais bonito e confortável.',
        },
        {
          number: '08',
          title: 'Cuidados e Manutenção',
          text: 'Aprenda os principais cuidados após a aplicação e como orientar a cliente para manter o resultado bonito por mais tempo.',
        },
        {
          number: '09',
          title: 'Segurança na Aplicação',
          text: 'Veja pontos importantes para evitar erros comuns, excesso de tensão, desconforto e problemas na fixação.',
        },
        {
          number: '10',
          title: 'Resultado Profissional',
          text: 'Entenda como buscar um acabamento mais natural, alinhado e seguro para entregar mais valor no atendimento.',
        },
      ],
      benefitItems: [
        {
          number: '01',
          title: 'Adicione um novo serviço ao seu portfólio',
          text: 'Aprenda Mega Hair para oferecer uma nova opção de transformação às suas clientes.',
        },
        {
          number: '02',
          title: 'Comece mesmo do zero',
          text: 'Um caminho prático para iniciantes, cabeleireiras, profissionais da beleza e também para quem ainda não atua na área.',
        },
        {
          number: '03',
          title: 'Ofereça um serviço mais valorizado',
          text: 'Mega Hair é um atendimento com maior percepção de valor e pode aumentar seu ticket.',
        },
        {
          number: '04',
          title: 'Atenda diferentes tipos de clientes',
          text: 'Com 3 técnicas, você aprende a indicar a opção mais adequada para cada necessidade.',
        },
        {
          number: '05',
          title: 'Amplie suas possibilidades de renda',
          text: 'Tenha um serviço que pode ser oferecido no salão, em casa ou no atendimento particular.',
        },
        {
          number: '06',
          title: 'Seja vista como uma profissional mais completa',
          text: 'Quanto mais soluções você domina, mais confiança transmite para suas clientes.',
        },
      ],
      forYouItems: [
        'É profissional da beleza',
        'Quer começar no Mega Hair',
        'Busca um serviço mais valorizado',
        'Quer aprender 3 técnicas em um treinamento',
        'Precisa de um conteúdo prático e direto',
      ],
      notForYouItems: [
        'Não quer estudar nem praticar',
        'Procura formação presencial longa',
        'Não quer oferecer novos serviços',
      ],
      hero: {
        titleIntro: 'Aprenda 3 técnicas de Mega Hair:',
        subtitle:
          'Os mesmos serviços que hoje me fazem faturar mais de R$15 mil por mês — e que você pode começar a oferecer no seu estúdio ainda essa semana, mesmo você sendo iniciante.',
        button: 'Garantir acesso completo por R$59,00',
        installments: '12x de R$ 6,10',
        fullPrice: 'ou R$ 59,00 à vista',
        microcopy: 'Acesso online por 1 ano com certificado',
        mediaLabel: 'Vídeo de apresentação do treinamento',
        videoTitle: 'Vídeo de apresentação do treinamento Mega Hair 3 em 1',
        oldPrice: 'R$397,00',
        priceKicker: 'Por apenas',
        price: 'R$59',
        risk: 'Risco zero!',
        urgency: 'Mas você precisa agir rápido!',
        bonuses: [
          'Curso de Ponto Americano, Fita Adesiva e Cápsula de Queratina',
        ],
        includes: [
          'Acesso por 1 ano',
          'Certificado',
          'Lista de fornecedores',
          'Material de apoio',
        ],
        limited: 'Oferta disponível por tempo limitado',
      },
      techniques: {
        title: 'Conheça as 3 técnicas',
        subtitle: 'Entenda as diferenças de forma prática e visual.',
        cards: [
          {
            title: 'Ponto Americano',
            text: 'Fixação firme e estruturada, ideal para quem busca segurança e durabilidade.',
            alt: 'Aplicação de Mega Hair com técnica Ponto Americano',
          },
          {
            title: 'Fita Adesiva',
            text: 'Aplicação prática, discreta e confortável, com acabamento natural.',
            alt: 'Aplicação de Mega Hair com técnica Fita Adesiva',
          },
          {
            title: 'Cápsula de Queratina',
            text: 'Mecha a mecha, com mais movimento e naturalidade no resultado.',
            alt: 'Aplicação de Mega Hair com técnica Cápsula de Queratina',
          },
        ],
        controls: 'Controle do carrossel de técnicas',
        prev: 'Ver técnica anterior',
        next: 'Ver próxima técnica',
        strip: ['Aulas práticas', 'Explicação simples', '3 técnicas em um só treinamento'],
      },
      results: {
        title: 'Veja o resultado que uma boa técnica entrega',
        label: 'Galeria de resultados de mega hair',
      },
      learning: {
        kicker: 'O que você vai aprender',
        title: 'Mega Hair 3 em 1',
      },
      benefits: {
        kicker: 'O que muda para você',
        title: 'Entre para uma área com alto potencial de retorno',
      },
      fit: {
        kicker: 'Para quem é',
        title: 'Esse treinamento foi feito para você se...',
        positiveTitle: 'É pra você se:',
        negativeTitle: 'Não é pra você se:',
      },
      mentor: {
        kicker: 'Quem vai te ensinar',
        title: 'Anna Schossig',
        paragraphs: [
          'Especialista em Mega Hair e criadora do treinamento Mega Hair 3 em 1, Anna ensina de forma prática, clara e direta para profissionais que querem começar ou ampliar seus serviços com mais segurança.',
          'Neste treinamento, ela reúne as técnicas Ponto Americano, Fita Adesiva e Cápsula de Queratina para mostrar como construir uma base profissional, escolher a melhor indicação e entregar um resultado mais natural para a cliente.',
        ],
        alt: 'Anna Schossig, professora do treinamento Mega Hair 3 em 1',
        caption: 'Mega Hair 3 em 1',
      },
      offer: {
        kicker: 'O que está incluído',
        title: 'Tudo que você recebe hoje',
        ribbon: 'Oferta completa',
        badge: 'Mais escolhido',
        label: 'Completo',
        name: 'Mega Hair 3 em 1',
        couponLabel: 'Cupom liberado',
        couponTitle: 'Você ganhou um cupom de desconto',
        couponText: 'Sua condição especial já está aplicada: 12x de R$ 6,10 ou R$ 59,00 à vista.',
        summaryLabel: 'Resumo',
        summaryText: 'Treinamento online Mega Hair 3 em 1 com aulas práticas, certificado e bônus liberados.',
        bonusLabel: 'Bônus liberados no acesso',
        bonuses: [
          'App de Agendamento',
          'App de Agendamento Automático para suas clientes marcarem horário sozinhas',
          'App de Controle Financeiro',
          'Curso de Tráfego Pago para profissionais da beleza',
        ],
        free: 'Gratuito',
        total: 'Valor total:',
        price: 'R$ 59,00',
        priceText: '12x de R$ 6,10 ou R$ 59,00 à vista',
        access: 'Pagamento único · 1 ano de acesso',
        oldPrice: 'R$ 529',
        button: 'Garantir acesso completo por R$59,00',
        timer: 'Essa condição termina em',
      },
      certificate: {
        kicker: 'Certificado incluso',
        title: 'Comprove sua evolução no Mega Hair',
        text:
          'Ao concluir o treinamento Mega Hair 3 em 1, você recebe um certificado para registrar sua jornada de aprendizado e reforçar sua apresentação profissional.',
        items: [
          'Certificado digital de conclusão',
          'Ideal para apresentar no portfólio profissional',
          'Mais confiança para divulgar seus novos serviços',
        ],
        mockupLabel: 'Mockup do certificado Mega Hair 3 em 1',
        small: 'Certificado de Conclusão',
        certificateText:
          'Concedido a aluna que concluiu o treinamento online com foco em Ponto Americano, Fita Adesiva e Cápsula de Queratina.',
      },
    }

const resultItems = [
  { src: resultado01Img, alt: pageText.resultAlt[0] },
  { src: resultado02Img, alt: pageText.resultAlt[1] },
  { src: resultado03Img, alt: pageText.resultAlt[2] },
  { src: resultado04Img, alt: pageText.resultAlt[3] },
  { src: resultado05Img, alt: pageText.resultAlt[4] },
  { src: resultado06Img, alt: pageText.resultAlt[5] },
  { src: resultado07Img, alt: pageText.resultAlt[6] },
  { src: resultado08Img, alt: pageText.resultAlt[7] },
  { src: resultado09Img, alt: pageText.resultAlt[8] },
]

const resultCards = resultItems
  .map(
    (item) => `
      <figure class="result-card">
        <img src="${item.src}" alt="${item.alt}" width="760" height="760" loading="lazy" />
      </figure>
    `,
  )
  .join('')

const learningModules = pageText.learningModules

const learningCards = learningModules
  .map(
    (module) => `
      <details class="learning-card">
        <summary>
          <span class="learning-number">${module.number}</span>
          <span class="learning-title">${module.title}</span>
          <span class="learning-icon" aria-hidden="true"></span>
        </summary>
        <p>${module.text}</p>
      </details>
    `,
  )
  .join('')

const benefitItems = pageText.benefitItems

const benefitCards = benefitItems
  .map(
    (item) => `
      <article class="benefit-card">
        <span>${item.number}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `,
  )
  .join('')

const forYouItems = pageText.forYouItems

const notForYouItems = pageText.notForYouItems

const listItems = (items, icon) =>
  items
    .map(
      (item) => `
        <li>
          <span aria-hidden="true">${icon}</span>
          <p>${item}</p>
        </li>
      `,
    )
    .join('')

const heroOfferItems = (items) =>
  items
    .map(
      (item) => `
        <li>
          <span aria-hidden="true">✓</span>
          <p>${item}</p>
        </li>
      `,
    )
    .join('')

const renderFreeClassPage = () => {
  document.documentElement.lang = 'pt-BR'
  document.title = 'Aula Gratuita de Mega Hair - Anna Schossig'

  document.querySelector('#app').innerHTML = `
    <main class="free-class-page">
      <section class="free-hero" aria-labelledby="free-hero-title">
        <div class="free-hero-copy">
          <span class="free-kicker">Aula gratuita no Instagram</span>
          <h1 id="free-hero-title">
            Aprenda 3 técnicas de Mega Hair ao vivo comigo
          </h1>
          <p>
            Os mesmos serviços que hoje me fazem faturar mais de R$15 mil por mês e que você também pode começar a oferecer, mesmo sendo iniciante.
          </p>

          <p class="free-class-time" aria-label="Data e horário da aula gratuita">
            <span>Próxima segunda-feira</span>
            <strong>20h no Instagram</strong>
          </p>

          <a class="free-button" href="${freeClassCtaUrl}" target="_blank" rel="noopener noreferrer">
            Entre para o grupo de espera
          </a>

          <small>Ao vivo, gratuito e com foco em aplicação prática.</small>
        </div>

        <figure class="free-hero-photo">
          <img src="${professoraImg}" alt="Anna Schossig, professora de Mega Hair" width="760" height="1140" fetchpriority="high" />
          <figcaption>
            <strong>Anna Schossig</strong>
            <span>Especialista em Mega Hair</span>
          </figcaption>
        </figure>
      </section>

      <section class="free-details" aria-labelledby="free-details-title">
        <div class="free-details-copy">
          <span class="free-kicker">O que vai acontecer na aula</span>
          <h2 id="free-details-title">Uma aula direta para você entender como começar no Mega Hair com mais segurança</h2>
          <p>
            Você vai ver como funcionam as técnicas Ponto Americano, Fita Adesiva e Cápsula de Queratina, quando indicar cada uma e quais cuidados fazem diferença para entregar um resultado natural.
          </p>
        </div>

        <div class="free-details-list" aria-label="Conteúdo da aula gratuita">
          <article>
            <span>01</span>
            <h3>3 técnicas em uma aula</h3>
            <p>Entenda as diferenças entre Ponto Americano, Fita Adesiva e Cápsula de Queratina.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Indicação e acabamento</h3>
            <p>Veja o que observar para escolher a técnica certa e buscar um resultado mais natural.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Próximo passo claro</h3>
            <p>Saia sabendo como começar a estudar e praticar para oferecer esse serviço.</p>
          </article>
        </div>

        <a class="free-button free-button-secondary" href="${freeClassCtaUrl}" target="_blank" rel="noopener noreferrer">
          Entre para o grupo de espera
        </a>
      </section>
    </main>
  `

  document.querySelectorAll('.free-button').forEach((button) => {
    button.addEventListener('click', () => {
      if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'CliqueAulaGratuita', {
          content_name: 'Aula Gratuita Mega Hair',
          value: 0,
          currency: 'BRL'
        });
      }

      trackFunnel('Lead')
    })
  })
}

if (isFreeClassPage) {
  renderFreeClassPage()
} else {
document.querySelector('#app').innerHTML = `
  <main class="page-shell">
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title">
          <span>${pageText.hero.titleIntro}</span>
          <span class="hero-techniques">
            <strong>${pageText.techniques.cards[0].title}</strong>, <strong>${pageText.techniques.cards[1].title}</strong> ${isSpanishPage ? 'y' : 'e'} <strong>${pageText.techniques.cards[2].title}</strong>
          </span>
        </h1>

        <p class="hero-subtitle">
          ${pageText.hero.subtitle}
        </p>
      </div>

      <div class="hero-media-wrap" aria-label="${pageText.hero.mediaLabel}">
        <div class="hero-video-card">
          <iframe
            id="panda-f3e0efda-2ee5-4d2d-885b-963e8df062ea"
            class="hero-video"
            src="${heroVideoUrl}"
            title="${pageText.hero.videoTitle}"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
            width="720"
            height="360"
            fetchpriority="high"
          ></iframe>
        </div>
      </div>

      <div class="hero-cta hero-offer">
        <div class="hero-offer-price">
          <p class="hero-old-price">De <span>${pageText.hero.oldPrice}</span></p>
          <p class="hero-price-kicker">${pageText.hero.priceKicker}</p>
          <strong>${pageText.hero.price}</strong>
          <p class="hero-risk">${pageText.hero.risk}</p>
          <p class="hero-urgency">${pageText.hero.urgency}</p>
        </div>

        <ul class="hero-offer-list">
          ${heroOfferItems([...pageText.hero.bonuses, ...pageText.hero.includes])}
        </ul>

        <a class="hero-button" href="${checkoutUrl}">
          ${pageText.hero.button}
        </a>
        <p class="hero-microcopy">${pageText.hero.limited}</p>
      </div>

    </section>

    <section class="techniques-section" aria-labelledby="techniques-title">
      <div class="techniques-header">
        <div class="section-ornament" aria-hidden="true">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>
        <h2 id="techniques-title">${pageText.techniques.title}</h2>
        <p>${pageText.techniques.subtitle}</p>
      </div>

      <div class="technique-grid">
        <article class="technique-card">
          <div class="technique-image">
            <img src="${pontoAmericanoImg}" alt="${pageText.techniques.cards[0].alt}" width="900" height="650" loading="lazy" />
            <span>01</span>
          </div>
          <div class="technique-content">
            <h3>${pageText.techniques.cards[0].title}</h3>
            <p>${pageText.techniques.cards[0].text}</p>
          </div>
        </article>

        <article class="technique-card">
          <div class="technique-image">
            <img src="${fitaAdesivaImg}" alt="${pageText.techniques.cards[1].alt}" width="900" height="650" loading="lazy" />
            <span>02</span>
          </div>
          <div class="technique-content">
            <h3>${pageText.techniques.cards[1].title}</h3>
            <p>${pageText.techniques.cards[1].text}</p>
          </div>
        </article>

        <article class="technique-card">
          <div class="technique-image">
            <img src="${capsulaImg}" alt="${pageText.techniques.cards[2].alt}" width="900" height="650" loading="lazy" />
            <span>03</span>
          </div>
          <div class="technique-content">
            <h3>${pageText.techniques.cards[2].title}</h3>
            <p>${pageText.techniques.cards[2].text}</p>
          </div>
        </article>
      </div>

      <div class="technique-carousel-controls" aria-label="${pageText.techniques.controls}">
        <button class="technique-arrow" type="button" data-technique-prev aria-label="${pageText.techniques.prev}">‹</button>
        <div class="technique-dots" aria-hidden="true">
          <span class="is-active"></span>
          <span></span>
          <span></span>
        </div>
        <button class="technique-arrow" type="button" data-technique-next aria-label="${pageText.techniques.next}">›</button>
      </div>

      <div class="technique-strip" aria-label="${isSpanishPage ? 'Beneficios de la sección' : 'Benefícios da seção'}">
        <span>${pageText.techniques.strip[0]}</span>
        <b aria-hidden="true"></b>
        <span>${pageText.techniques.strip[1]}</span>
        <b aria-hidden="true"></b>
        <span>${pageText.techniques.strip[2]}</span>
      </div>
    </section>

    <section class="results-section" aria-labelledby="results-title">
      <div class="results-header">
        <div class="section-ornament" aria-hidden="true">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>
        <h2 id="results-title">${pageText.results.title}</h2>
      </div>

      <div class="results-marquee" aria-label="${pageText.results.label}">
        <div class="results-track">
          <div class="results-set">
            ${resultCards}
          </div>
          <div class="results-set" aria-hidden="true">
            ${resultCards}
          </div>
        </div>
      </div>
    </section>

    <section class="learning-section" aria-labelledby="learning-title">
      <div class="learning-header">
        <span class="learning-kicker">${pageText.learning.kicker}</span>
        <h2 id="learning-title">${pageText.learning.title}</h2>
      </div>

      <div class="learning-grid">
        ${learningCards}
      </div>
    </section>

    <section class="benefits-section" aria-labelledby="benefits-title">
      <div class="benefits-header">
        <span class="benefits-kicker">${pageText.benefits.kicker}</span>
        <h2 id="benefits-title">${pageText.benefits.title}</h2>
      </div>

      <div class="benefits-grid">
        ${benefitCards}
      </div>
    </section>

    <section class="fit-section" aria-labelledby="fit-title">
      <div class="fit-header">
        <span class="fit-kicker">${pageText.fit.kicker}</span>
        <h2 id="fit-title">${pageText.fit.title}</h2>
      </div>

      <div class="fit-grid">
        <article class="fit-card fit-card-positive">
          <h3>${pageText.fit.positiveTitle}</h3>
          <ul>
            ${listItems(forYouItems, '✓')}
          </ul>
        </article>

        <article class="fit-card fit-card-muted">
          <h3>${pageText.fit.negativeTitle}</h3>
          <ul>
            ${listItems(notForYouItems, '×')}
          </ul>
        </article>
      </div>
    </section>

    <section class="mentor-section" aria-labelledby="mentor-title">
      <div class="mentor-content">
        <div class="mentor-copy">
          <span class="mentor-kicker">${pageText.mentor.kicker}</span>
          <h2 id="mentor-title">${pageText.mentor.title}</h2>
          <p>
            ${pageText.mentor.paragraphs[0]}
          </p>
          <p>
            ${pageText.mentor.paragraphs[1]}
          </p>
        </div>

        <figure class="mentor-card">
          <img src="${professoraImg}" alt="${pageText.mentor.alt}" width="760" height="1140" loading="lazy" />
          <figcaption>
            <strong>${pageText.mentor.title}</strong>
            <span>${pageText.mentor.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="offer-section" id="comprar" aria-labelledby="offer-title">
      <div class="offer-shell">
        <div class="offer-header">
          <h2 id="offer-title">${pageText.offer.title}</h2>
        </div>

        <article class="offer-card">
          <div class="offer-ribbon">${pageText.offer.ribbon}</div>
          <div class="offer-badge">${pageText.offer.badge}</div>

          <div class="offer-name">
            <span>${pageText.offer.label}</span>
            <h3>${pageText.offer.name}</h3>
          </div>

          <div class="offer-coupon">
            <span>${pageText.offer.couponLabel}</span>
            <strong>${pageText.offer.couponTitle}</strong>
            <p>${pageText.offer.couponText}</p>
          </div>

          <div class="offer-summary">
            <span>${pageText.offer.summaryLabel}</span>
            <p>${pageText.offer.summaryText}</p>

            <div class="offer-divider"></div>

            <span>${pageText.offer.bonusLabel}</span>
            <ul>
              <li><b aria-hidden="true">+</b><p>${pageText.offer.bonuses[0]}</p><em>${pageText.offer.free}</em></li>
              <li><b aria-hidden="true">+</b><p>${pageText.offer.bonuses[1]}</p><em>${pageText.offer.free}</em></li>
              <li><b aria-hidden="true">+</b><p>${pageText.offer.bonuses[2]}</p><em>${pageText.offer.free}</em></li>
              <li><b aria-hidden="true">+</b><p>${pageText.offer.bonuses[3]}</p><em>${pageText.offer.free}</em></li>
            </ul>
          </div>

          <div class="offer-price">
            <div>
              <span>${pageText.offer.total}</span>
              <strong>${pageText.offer.price}</strong>
              <p>${pageText.offer.priceText}</p>
              <small>${pageText.offer.access}</small>
            </div>
            <del>${pageText.offer.oldPrice}</del>
          </div>

          <a class="offer-button" href="${checkoutUrl}">${pageText.offer.button}</a>

          <div class="offer-timer">
            <span>${pageText.offer.timer}</span>
            <strong>30:00</strong>
          </div>
        </article>
      </div>
    </section>

    <section class="certificate-section" aria-labelledby="certificate-title">
      <div class="certificate-content">
        <div class="certificate-copy">
          <span class="certificate-kicker">${pageText.certificate.kicker}</span>
          <h2 id="certificate-title">${pageText.certificate.title}</h2>
          <p>
            ${pageText.certificate.text}
          </p>
          <ul>
            <li>${pageText.certificate.items[0]}</li>
            <li>${pageText.certificate.items[1]}</li>
            <li>${pageText.certificate.items[2]}</li>
          </ul>
        </div>

        <div class="certificate-mockup" aria-label="${pageText.certificate.mockupLabel}">
          <div class="certificate-paper">
            <span class="certificate-seal">AS</span>
            <small>${pageText.certificate.small}</small>
            <strong>${pageText.learning.title}</strong>
            <p>${pageText.certificate.certificateText}</p>
            <div class="certificate-line"></div>
            <em>${pageText.mentor.title}</em>
          </div>
        </div>
      </div>
    </section>
  </main>
`

const sendInitiateCheckout = async () => {
  const fbp = getCookie('_fbp')
  const fbc = getCookie('_fbc')
  const externalId = fbp ? await sha256(fbp).catch(() => '') : ''
  const payload = JSON.stringify({
    client: isSpanishPage ? 'anna-es' : 'anna',
    eventName: 'InitiateCheckout',
    eventId: `InitiateCheckout.${Date.now()}.${Math.random().toString(36).slice(2)}`,
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
    ...(externalId ? { external_id: externalId } : {}),
    eventData: {
      content_name: pageText.checkoutContentName,
      value: checkoutTracking.value,
      currency: checkoutTracking.currency,
    },
  })

  return sendMetaEvent(payload)
}

const sha256 = async (value) => {
  if (typeof crypto === 'undefined' || !crypto.subtle) return ''

  const data = new TextEncoder().encode(value)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

const sendMetaEvent = (payload) => {
  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: 'application/json' })
    navigator.sendBeacon('/api/meta-event', blob)
    return
  }

  fetch('/api/meta-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {})
}

const redirectToCheckout = async (baseUrl) => {
  await sendInitiateCheckout().catch(() => {})
  window.location.href = getCheckoutUrl(baseUrl)
}

document.querySelectorAll('.hero-button').forEach((button) => {
  button.addEventListener('click', function(event) {
    event.preventDefault()

    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CliqueHero', {
        content_name: pageText.checkoutContentName,
        value: checkoutTracking.value,
        currency: checkoutTracking.currency
      });
    }

    window.setTimeout(() => {
      trackFunnel('InitiateCheckout')
      sendInitiateCheckout().catch(() => {})
      window.location.href = getCheckoutUrl(checkoutUrl)
    }, 300)
  });
});

document.querySelectorAll('.offer-button').forEach((button) => {
  button.addEventListener('click', function(event) {
    event.preventDefault()

    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CliqueOferta', {
        content_name: pageText.checkoutContentName,
        value: checkoutTracking.value,
        currency: checkoutTracking.currency
      });
    }

    window.setTimeout(() => {
      trackFunnel('InitiateCheckout')
      sendInitiateCheckout().catch(() => {})
      window.location.href = getCheckoutUrl(checkoutUrl)
    }, 300)
  });
});

const offerTimer = document.querySelector('.offer-timer strong')
let offerTimeLeft = 30 * 60

const renderOfferTimer = () => {
  if (!offerTimer) return

  const minutes = String(Math.floor(offerTimeLeft / 60)).padStart(2, '0')
  const seconds = String(offerTimeLeft % 60).padStart(2, '0')
  offerTimer.textContent = `${minutes}:${seconds}`
}

renderOfferTimer()

if (offerTimer) {
  window.setInterval(() => {
    offerTimeLeft = Math.max(offerTimeLeft - 1, 0)
    renderOfferTimer()
  }, 1000)
}

const techniqueCarousel = document.querySelector('.technique-grid')
const techniqueCards = [...document.querySelectorAll('.technique-card')]
const techniqueDots = [...document.querySelectorAll('.technique-dots span')]
const techniquePrev = document.querySelector('[data-technique-prev]')
const techniqueNext = document.querySelector('[data-technique-next]')
const techniqueMedia = window.matchMedia('(max-width: 1100px)')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
let techniqueIndex = 0
let techniqueAutoTimer

const setTechniqueIndex = (nextIndex) => {
  if (!techniqueCarousel || !techniqueCards.length) return

  techniqueIndex = (nextIndex + techniqueCards.length) % techniqueCards.length
  techniqueCarousel.scrollTo({
    left: techniqueCards[techniqueIndex].offsetLeft - techniqueCarousel.offsetLeft,
    behavior: reduceMotion.matches ? 'auto' : 'smooth',
  })

  techniqueDots.forEach((dot, index) => {
    dot.classList.toggle('is-active', index === techniqueIndex)
  })
}

const startTechniqueAuto = () => {
  window.clearInterval(techniqueAutoTimer)
  if (!techniqueMedia.matches || reduceMotion.matches) return
  techniqueAutoTimer = window.setInterval(() => setTechniqueIndex(techniqueIndex + 1), 6000)
}

techniquePrev?.addEventListener('click', () => {
  setTechniqueIndex(techniqueIndex - 1)
  startTechniqueAuto()
})

techniqueNext?.addEventListener('click', () => {
  setTechniqueIndex(techniqueIndex + 1)
  startTechniqueAuto()
})

techniqueCarousel?.addEventListener('scroll', () => {
  if (!techniqueMedia.matches) return
  const nextIndex = Math.round(techniqueCarousel.scrollLeft / techniqueCarousel.clientWidth)
  if (nextIndex !== techniqueIndex && techniqueCards[nextIndex]) {
    techniqueIndex = nextIndex
    techniqueDots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === techniqueIndex)
    })
  }
})

techniqueMedia.addEventListener('change', startTechniqueAuto)
reduceMotion.addEventListener('change', startTechniqueAuto)
startTechniqueAuto()
}
