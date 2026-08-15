import './legacy-style.css'
import { getCheckoutUrl, getCookie } from '@/lib/checkoutUrl'
import { trackFunnel } from '@/lib/funnelTrack'
import {
  capturePurchaseSession,
  initializeMetaTracking,
  resolveMetaIdentifiers,
  resolveMetaIdentifiersAfterFbp,
} from '@/lib/purchaseTracking'
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
import megaHairOfferImg from './assets/mega-hair-offer.webp'
import heroTechCompositeImg from './assets/hero-tech-composite.webp'
import heroTechCompositeMobileImg from './assets/hero-tech-composite-mobile.webp'

const pathSegments = window.location.pathname.split('/').filter(Boolean)
const isSpanishPage = pathSegments[0] === 'es'
const isFreeClassPage = pathSegments[0] === 'aula-gratuita'
const isBrazilSalesPage = pathSegments.length === 0 || pathSegments[0] === 'v2'
if (isBrazilSalesPage) initializeMetaTracking()
const initialMetaIdentifiers = isBrazilSalesPage ? resolveMetaIdentifiers() : undefined
const metaIdentifiersReady = isBrazilSalesPage
  ? resolveMetaIdentifiersAfterFbp()
  : Promise.resolve(undefined)
capturePurchaseSession(
  isSpanishPage ? 'anna-es' : 'anna',
  initialMetaIdentifiers,
)
const checkoutUrl = isSpanishPage
  ? 'https://pay.hotmart.com/M106369269V'
  : 'https://pay.kiwify.com.br/KXitA3M'
const essentialCheckoutUrl = checkoutUrl
const freeClassCtaUrl = 'https://chat.whatsapp.com/E1ssAsnS8GmJ603ChKCJIn?mode=gi_t'
const checkoutTracking = isSpanishPage
  ? { value: 4.00, currency: 'USD' }
  : { value: 97.00, currency: 'BRL' }
const essentialCheckoutTracking = checkoutTracking
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
        onlineBadge: 'Curso 100% online',
        titleIntro: 'Aprende 3 técnicas de extensiones de cabello:',
        subtitle:
          'Los mismos servicios que hoy me ayudan a aumentar mis ingresos, y que tú puedes empezar a ofrecer en tu estudio esta misma semana, incluso si eres principiante.',
        button: 'Garantizar acceso ahora',
        installments: 'Últimas plazas a un precio especial',
        fullPrice: 'con certificado',
        microcopy: 'Acceso online por 1 año con certificado',
        mediaLabel:
          'Anna Schossig con demostraciones profesionales de técnicas de extensiones de cabello',
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
        title: 'Elige la mejor oferta para ti',
        headline: 'Elige la mejor oferta para ti',
        essentialTitle: 'Oferta esencial',
        completeTitle: 'Oferta completa',
        completeSubtitle: '(mejor opción)',
        bestSeller: 'Más vendido',
        stars: '★★★★★',
        ribbon: 'Oferta completa',
        badge: 'Más elegido',
        label: 'Completo',
        name: 'Guía Práctica de Extensiones de Cabello 3 en 1',
        visualAlt: 'Material del entrenamiento de extensiones de cabello 3 en 1',
        couponLabel: 'Cupón liberado',
        couponTitle: 'Ganaste un cupón de descuento',
        couponText: 'Últimas plazas a un precio especial – con certificado.',
        summaryLabel: 'Resumen',
        summaryText: 'Guía práctica online de extensiones de cabello 3 en 1 con clases prácticas, certificado y bonos liberados.',
        bonusLabel: 'Bonos liberados en el acceso',
        bonuses: [
          'Curso de Acabado Perfecto',
          'IA para Profesionales de Extensiones de Cabello',
          'Pack de Prompts Listos',
          'Lista de Proveedores Confiables',
          'Mentoría en Grupo',
          'Grupo de Alumnas',
          'Guía para Cobrar Correcto y Ganar Más',
          'App de Gestión y Agenda',
          'Clientes con Anuncios para Extensiones de Cabello',
          'Kit de Contratos y Documentos',
          'Scripts Listos para Cerrar Clientas en WhatsApp',
          'Calendario de Contenido para Instagram',
        ],
        free: 'Gratis',
        total: 'Valor total:',
        today: 'Pago único · no es una suscripción',
        essentialPayment: 'Pago único · no es una suscripción',
        essentialPrice: 'Precio especial',
        essentialCashPrice: '',
        essentialAccess: 'Pagas una sola vez · 1 año de acceso',
        price: 'Precio especial',
        priceText: 'Últimas plazas a un precio especial',
        access: 'Con certificado · 1 año de acceso',
        oldPrice: 'Precio regular',
        essentialButton: 'Quiero esta opción',
        button: 'Garantizar acceso ahora',
        warning: 'Aprovecha ahora: no encontrarás esta condición después.',
        timer: 'Esta condición termina en',
        essentialFeatures: [
          { included: true, text: 'Guía Práctica de Extensiones de Cabello 3 en 1' },
          { included: true, text: 'Acceso al contenido por 1 año' },
          { included: true, text: 'Garantía por 7 días' },
          { included: true, text: 'Certificado de conclusión' },
          { included: false, text: 'Bono 1: Curso de Acabado Perfecto' },
          { included: false, text: 'Bono 2: IA para Profesionales de Extensiones de Cabello' },
          { included: false, text: 'Bono 3: Pack de Prompts Listos' },
          { included: false, text: 'Bono 4: Lista de Proveedores Confiables' },
          { included: false, text: 'Bono 5: Mentoría en Grupo' },
          { included: false, text: 'Bono 6: Grupo de Alumnas' },
          { included: false, text: 'Bono extra: Guía para Cobrar Correcto y Ganar Más' },
          { included: false, text: 'Bono extra: App gratuito de gestión para agendas, marcaciones automáticas y control financiero' },
          { included: false, text: 'Bono extra: Clientes con Anuncios para Extensiones de Cabello' },
          { included: false, text: 'Bono extra: Kit de Contratos y Documentos' },
          { included: false, text: 'Bono extra: Scripts Listos para Cerrar Clientas en WhatsApp' },
          { included: false, text: 'Bono extra: Calendario de Contenido para Instagram' },
        ],
        completeFeatures: [
          { included: true, text: 'Guía Práctica de Extensiones de Cabello 3 en 1' },
          { included: true, text: 'Acceso vitalicio' },
          { included: true, text: 'Garantía por 7 días' },
          { included: true, text: 'Certificado de conclusión' },
          { included: true, text: 'Bono 1: Curso de Acabado Perfecto' },
          { included: true, text: 'Bono 2: IA para Profesionales de Extensiones de Cabello' },
          { included: true, text: 'Bono 3: Pack de Prompts Listos' },
          { included: true, text: 'Bono 4: Lista de Proveedores Confiables' },
          { included: true, text: 'Bono 5: Mentoría en Grupo' },
          { included: true, text: 'Bono 6: Grupo de Alumnas' },
          { included: true, extra: true, text: 'Bono extra: Guía para Cobrar Correcto y Ganar Más' },
          {
            included: true,
            extra: true,
            text: 'Bono extra: App gratuito de gestión para agendas, marcaciones automáticas y control financiero',
          },
          { included: true, extra: true, text: 'Bono extra: Clientes con Anuncios para Extensiones de Cabello' },
          { included: true, extra: true, text: 'Bono extra: Kit de Contratos y Documentos' },
          { included: true, extra: true, text: 'Bono extra: Scripts Listos para Cerrar Clientas en WhatsApp' },
          { included: true, extra: true, text: 'Bono extra: Calendario de Contenido para Instagram' },
        ],
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
        onlineBadge: 'Curso 100% online',
        titleIntro: 'Aprenda 3 técnicas de Mega Hair:',
        subtitle:
          'Os mesmos serviços que hoje me fazem faturar mais de R$15 mil por mês — e que você pode começar a oferecer no seu estúdio ainda essa semana, mesmo você sendo iniciante.',
        button: 'EU QUERO APRENDER!',
        installments: '12x de R$ 10,03',
        fullPrice: 'ou R$ 97,00 à vista',
        paymentTitle: 'Não é mensalidade.',
        paymentNote: 'Pague uma única vez e receba 3 cursos.',
        microcopy: 'Acesso online por 1 ano com certificado',
        mediaLabel:
          'Anna Schossig com demonstrações profissionais de técnicas de Mega Hair',
        oldPrice: 'R$397,00',
        priceKicker: 'Por apenas',
        price: 'R$97',
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
        title: 'Garanta sua oferta',
        headline: 'Inscreva-se agora e ganhe:',
        essentialTitle: 'Oferta essencial',
        completeTitle: 'Mega Hair 3 em 1',
        completeSubtitle: '(acesso completo)',
        bestSeller: 'Oferta especial',
        stars: '★★★★★',
        ribbon: 'Oferta completa',
        badge: 'Oferta especial',
        label: 'Completo',
        name: 'Mega Hair 3 em 1',
        visualAlt: 'Materiais do treinamento Mega Hair 3 em 1',
        couponLabel: 'Cupom liberado',
        couponTitle: 'Você ganhou um cupom de desconto',
        couponText: 'Sua condição especial já está aplicada: 12x de R$ 10,03 ou R$ 97,00 à vista.',
        summaryLabel: 'Resumo',
        summaryText: 'Treinamento online Mega Hair 3 em 1 com aulas práticas, certificado e bônus liberados.',
        bonusLabel: 'Bônus liberados no acesso',
        bonuses: [
          'Curso de Acabamento Perfeito',
          'IA para Profissionais de Mega Hair',
          'Pack de Prompts Prontos',
          'Lista de Fornecedores Confiáveis',
          'Mentoria em Grupo',
          'Grupo de Alunas',
          'Guia para Cobrar Certo e Lucrar Mais',
          'App de Gestão e Agendamento',
          'Clientes com Anúncios para Mega Hair',
          'Kit de Contratos e Documentos',
          'Scripts Prontos para Fechar Clientes no WhatsApp',
          'Calendário de Conteúdo para Instagram',
        ],
        free: 'Gratuito',
        total: 'Valor total:',
        today: '',
        essentialPayment: '',
        essentialPrice: '12x de R$ 10,03',
        essentialCashPrice: 'ou R$ 97,00 à vista',
        essentialAccess: '',
        price: '12x de R$ 10,03',
        priceText: 'ou R$ 97,00 à vista',
        access: 'Pagamento único · 1 ano de acesso',
        oldPrice: 'R$ 529',
        essentialButton: 'Quero essa opção',
        button: 'Garantir acesso completo por R$97,00',
        warning: 'Aproveite agora: você não vai encontrar essa condição depois.',
        timer: 'Essa condição termina em',
        essentialFeatures: [
          { included: true, text: 'Curso de Ponto Americano' },
          { included: true, text: 'Curso de Fita Adesiva' },
          { included: true, text: 'Curso de Microcápsula de Queratina' },
          { included: true, text: 'Acesso ao conteúdo por 1 ano' },
          { included: true, text: 'Garantia por 7 dias' },
          { included: true, text: 'Certificado de conclusão' },
          { included: true, text: 'Lista de Fornecedores Confiáveis' },
        ],
        completeFeatures: [
          { included: true, text: 'Curso de Ponto Americano' },
          { included: true, text: 'Curso de Fita Adesiva' },
          { included: true, text: 'Curso de Microcápsula de Queratina' },
          { included: true, text: 'Acesso vitalício' },
          { included: true, text: 'Garantia por 7 dias' },
          { included: true, text: 'Certificado de conclusão' },
          { included: true, text: 'Bônus 1: Curso de Acabamento Perfeito' },
          { included: true, text: 'Bônus 2: IA para Profissionais de Mega Hair' },
          { included: true, text: 'Bônus 3: Pack de Prompts Prontos' },
          { included: true, text: 'Bônus 4: Lista de Fornecedores Confiáveis' },
          { included: true, text: 'Bônus 5: Mentoria em Grupo' },
          { included: true, text: 'Bônus 6: Grupo de Alunas' },
          { included: true, extra: true, text: 'Bônus extra: Guia para Cobrar Certo e Lucrar Mais' },
          {
            included: true,
            extra: true,
            text: 'Bônus extra: App gratuito de gestão para agendamentos, marcações automáticas e controle financeiro',
          },
          { included: true, extra: true, text: 'Bônus extra: Clientes com Anúncios para Mega Hair' },
          { included: true, extra: true, text: 'Bônus extra: Kit de Contratos e Documentos' },
          { included: true, extra: true, text: 'Bônus extra: Scripts Prontos para Fechar Clientes no WhatsApp' },
          { included: true, extra: true, text: 'Bônus extra: Calendário de Conteúdo para Instagram' },
          { included: true, extra: true, text: 'Bônus extra: Guia de cuidados e manutenção' },
        ],
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

const conversionText = isSpanishPage
  ? {
      resultsSubtitle:
        'Observa aplicaciones y acabados para visualizar el estándar de resultado trabajado en las clases.',
      resultsNote:
        'Los resultados dependen de la práctica, los materiales y la correcta evaluación de cada clienta.',
      ctas: [
        {
          kicker: 'Tu próximo paso',
          title: 'Aprende las 3 técnicas en un solo entrenamiento',
          text: 'Empieza por la base, entiende cuándo indicar cada técnica y avanza con más seguridad en tus aplicaciones.',
          button: 'Ver opciones de acceso',
          position: 'resultados',
        },
        {
          kicker: '¿Te identificas?',
          title: 'Empieza ahora, incluso si todavía eres principiante',
          text: 'Accede a clases prácticas, material de apoyo y certificado para organizar tu aprendizaje paso a paso.',
          button: 'Quiero conocer las ofertas',
          position: 'perfil',
        },
      ],
      method: {
        label: 'Método de enseñanza',
        items: [
          'Explicación directa y visual',
          '3 técnicas en una ruta organizada',
          'Indicación, aplicación y cuidados',
        ],
      },
      guarantee: {
        kicker: 'Compra protegida',
        title: 'Tienes 7 días para conocer el entrenamiento',
        text:
          'Después de inscribirte, puedes acceder al contenido y evaluar la propuesta con calma. Si entiendes que no es para ti, puedes solicitar el reembolso dentro del plazo de garantía.',
        items: ['Acceso liberado después del pago', '7 días de garantía', 'Pago procesado en un entorno seguro'],
        button: 'Elegir mi acceso',
      },
      faq: {
        kicker: 'Preguntas frecuentes',
        title: 'Aclara tus dudas antes de inscribirte',
        items: [
          {
            question: '¿Es adecuado para quien nunca ha trabajado con extensiones?',
            answer:
              'Sí. El contenido comienza por los fundamentos, la preparación y los materiales antes de avanzar a las técnicas. Como en toda formación práctica, será necesario estudiar y practicar.',
          },
          {
            question: '¿Qué técnicas se enseñan?',
            answer:
              'Punto Americano, Extensiones Adhesivas y Cápsula de Queratina, además de preparación, posicionamiento, seguridad, cuidados y mantenimiento.',
          },
          {
            question: '¿Puedo ver las clases desde el celular?',
            answer:
              'Sí. El acceso es online y puedes estudiar desde el celular, tableta u ordenador con conexión a internet.',
          },
          {
            question: '¿Cuándo recibo el acceso?',
            answer:
              'El acceso se libera después de la confirmación del pago y se envía al correo utilizado en la compra.',
          },
          {
            question: '¿Cuál es la diferencia entre las dos ofertas?',
            answer:
              'La oferta esencial incluye las 3 técnicas, certificado y acceso por 1 año. La oferta completa añade acceso vitalicio y materiales para acabado, captación de clientes, ventas y gestión.',
          },
          {
            question: '¿Cómo funciona la garantía?',
            answer:
              'Tienes 7 días después de la compra para conocer el entrenamiento. Dentro de ese plazo, puedes solicitar el reembolso por los canales de soporte de la plataforma de pago.',
          },
        ],
      },
      offerTrust: ['Acceso después del pago', '7 días de garantía', 'Pago seguro'],
      finalCta: {
        kicker: 'Lista para empezar',
        title: 'Da el próximo paso en extensiones de cabello',
        text: 'Elige tu opción de acceso y empieza a estudiar las 3 técnicas.',
        button: 'Ver opciones de acceso',
      },
    }
  : {
      resultsSubtitle:
        'Veja aplicações e acabamentos para visualizar o padrão de resultado trabalhado nas aulas.',
      resultsNote:
        'Os resultados dependem da prática, dos materiais e da avaliação correta de cada cliente.',
      ctas: [
        {
          kicker: 'Seu próximo passo',
          title: 'Aprenda as 3 técnicas em um único treinamento',
          text: 'Comece pela base, entenda quando indicar cada técnica e avance com mais segurança nas aplicações.',
          button: 'Garantir meu acesso',
          position: 'resultados',
        },
        {
          kicker: 'Se identificou?',
          title: 'Comece agora, mesmo que você ainda seja iniciante',
          text: 'Tenha aulas práticas, material de apoio e certificado para organizar seu aprendizado passo a passo.',
          button: 'Quero garantir minha oferta',
          position: 'perfil',
        },
      ],
      method: {
        label: 'Como a Anna ensina',
        items: [
          'Explicação direta e visual',
          '3 técnicas em uma trilha organizada',
          'Indicação, aplicação e cuidados',
        ],
      },
      guarantee: {
        kicker: 'Compra protegida',
        title: 'Você tem 7 dias para conhecer o treinamento',
        text:
          'Depois da inscrição, você pode acessar o conteúdo e avaliar a proposta com calma. Se entender que o treinamento não é para você, poderá solicitar o reembolso dentro do prazo de garantia.',
        items: ['Acesso liberado após o pagamento', '7 dias de garantia', 'Pagamento processado em ambiente seguro'],
        button: 'Escolher meu acesso',
      },
      faq: {
        kicker: 'Perguntas frequentes',
        title: 'Tire suas dúvidas antes de se inscrever',
        items: [
          {
            question: 'É indicado para quem nunca trabalhou com Mega Hair?',
            answer:
              'Sim. O conteúdo começa pelos fundamentos, preparação e materiais antes de avançar para as técnicas. Como em toda formação prática, será necessário estudar e praticar.',
          },
          {
            question: 'Quais técnicas são ensinadas?',
            answer:
              'Ponto Americano, Fita Adesiva e Microcápsula de Queratina, além de preparação, posicionamento, segurança, cuidados e manutenção.',
          },
          {
            question: 'Consigo assistir às aulas pelo celular?',
            answer:
              'Sim. O acesso é online e você pode estudar pelo celular, tablet ou computador conectado à internet.',
          },
          {
            question: 'Quando recebo o acesso?',
            answer:
              'O acesso é liberado após a confirmação do pagamento e enviado para o e-mail informado na compra.',
          },
          {
            question: 'O que está incluído na oferta?',
            answer:
              'A oferta inclui as 3 técnicas, acesso vitalício, certificado e os materiais complementares para acabamento, captação de clientes, vendas e gestão.',
          },
          {
            question: 'Como funciona a garantia?',
            answer:
              'Você tem 7 dias após a compra para conhecer o treinamento. Dentro desse prazo, pode solicitar o reembolso pelos canais de suporte da plataforma de pagamento.',
          },
          {
            question: 'Preciso comprar materiais para acompanhar?',
            answer:
              'Você pode começar estudando a parte teórica com o que já tem. Para praticar as aplicações, precisará dos materiais correspondentes à técnica escolhida.',
          },
          {
            question: 'O certificado é enviado como?',
            answer:
              'Após concluir o treinamento, o certificado digital fica disponível para registrar sua formação e complementar seu portfólio profissional.',
          },
        ],
      },
      offerTrust: ['Acesso após o pagamento', '7 dias de garantia', 'Pagamento seguro'],
      finalCta: {
        kicker: 'Pronta para começar',
        title: 'Dê o próximo passo no Mega Hair',
        text: 'Garanta seu acesso e comece a estudar as 3 técnicas.',
        button: 'Garantir meu acesso',
      },
    }

const completeOfferFeatures = pageText.offer.completeFeatures

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
        <img src="${item.src}" alt="${item.alt}" width="760" height="760" loading="lazy" decoding="async" fetchpriority="low" />
        <figcaption>${isSpanishPage ? 'Antes y después · Resultado de aplicación' : 'Antes e depois · Resultado de aplicação'}</figcaption>
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

const offerFeatureGroupLabels = isSpanishPage
  ? {
      training: 'Formación incluida',
      bonus: 'Bonos incluidos',
      extra: 'Bonos extra incluidos',
    }
  : {
      training: 'Formação incluída',
      bonus: 'Bônus inclusos',
      extra: 'Bônus extra inclusos',
    }

const getOfferFeatureGroup = (item) => {
  if (item.extra) return 'extra'
  if (/^(Bônus|Bono)\b/.test(item.text)) return 'bonus'
  return 'training'
}

const offerFeatureItems = (items, { grouped = false } = {}) => {
  let currentGroup = ''

  return items
    .map((item) => {
      const group = getOfferFeatureGroup(item)
      const groupHeading =
        grouped && group !== currentGroup
          ? `<li class="offer-feature-group offer-feature-group-${group}">${offerFeatureGroupLabels[group]}</li>`
          : ''

      currentGroup = group

      return `
        ${groupHeading}
        <li class="${item.included ? 'is-included' : 'is-excluded'}${group === 'bonus' ? ' is-bonus' : ''}${item.extra ? ' is-extra' : ''}">
          <span aria-hidden="true">${item.included ? '✓' : '×'}</span>
          <p>
            ${item.text}
            ${item.detail ? `<small>${item.detail}</small>` : ''}
          </p>
        </li>
      `
    })
    .join('')
}

const conversionCta = (cta) => `
  <section class="conversion-cta" data-lansar-section="cta-${cta.position}" aria-label="${cta.kicker}">
    <div class="conversion-cta-content">
      <span>${cta.kicker}</span>
      <h2>${cta.title}</h2>
      <p>${cta.text}</p>
      <a
        class="conversion-cta-button js-scroll-offer"
        href="#comprar"
        data-cta-position="${cta.position}"
      >${cta.button}</a>
      <small>${conversionText.offerTrust.join(' · ')}</small>
    </div>
  </section>
`

const methodItems = conversionText.method.items
  .map(
    (item) => `
      <li>
        <span aria-hidden="true">✓</span>
        <p>${item}</p>
      </li>
    `,
  )
  .join('')

const guaranteeItems = conversionText.guarantee.items
  .map(
    (item) => `
      <li>
        <span aria-hidden="true">✓</span>
        <p>${item}</p>
      </li>
    `,
  )
  .join('')

const faqItems = conversionText.faq.items
  .map(
    (item) => `
      <details class="faq-item">
        <summary>
          <span>${item.question}</span>
          <i aria-hidden="true"></i>
        </summary>
        <p>${item.answer}</p>
      </details>
    `,
  )
  .join('')

const offerTrustItems = conversionText.offerTrust
  .map((item) => `<span><b aria-hidden="true">✓</b>${item}</span>`)
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
    <section class="hero-section" data-lansar-section="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <div class="hero-online-badge">
          <span class="hero-online-badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <rect x="3" y="4" width="18" height="13" rx="2"></rect>
              <path d="M9 21h6M12 17v4"></path>
              <path class="hero-online-badge-play" d="m10 8 5 2.5-5 2.5Z"></path>
            </svg>
          </span>
          <span>${pageText.hero.onlineBadge}</span>
        </div>

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
        <div class="hero-visual-card">
          <picture>
            <source media="(max-width: 700px)" srcset="${heroTechCompositeMobileImg}" />
            <img
              class="hero-visual"
              src="${heroTechCompositeImg}"
              alt="${pageText.hero.mediaLabel}"
              width="1672"
              height="941"
              fetchpriority="high"
            />
          </picture>
        </div>
      </div>

      <div class="hero-cta hero-offer">
        <div class="hero-offer-price">
          <p class="hero-old-price">De <span>${pageText.hero.oldPrice}</span></p>
          <p class="hero-price-kicker">${pageText.hero.priceKicker}</p>
          <strong>${pageText.hero.price}</strong>
          ${!isSpanishPage ? `<span class="hero-installments-subtle">ou ${pageText.hero.installments}</span>` : ''}
          ${isSpanishPage && pageText.hero.paymentTitle ? `
            <div class="hero-payment-details">
              <p>${pageText.hero.installments}</p>
              <span>${pageText.hero.fullPrice}</span>
              <small><b>${pageText.hero.paymentTitle}</b> ${pageText.hero.paymentNote}</small>
            </div>
          ` : ''}
          ${isSpanishPage ? `
            <p class="hero-risk">${pageText.hero.risk}</p>
            <p class="hero-urgency">${pageText.hero.urgency}</p>
          ` : ''}
        </div>

        ${isSpanishPage ? `
          <ul class="hero-offer-list">
            ${heroOfferItems([...pageText.hero.bonuses, ...pageText.hero.includes])}
          </ul>
        ` : ''}

        <a
          class="hero-button${!isSpanishPage ? ' hero-button-prominent' : ''} js-scroll-offer"
          href="#comprar"
          data-cta-position="hero"
        >
          ${pageText.hero.button}
        </a>
        <p class="hero-microcopy">${pageText.hero.limited}</p>
      </div>

    </section>

    <section class="techniques-section" data-lansar-section="tecnicas" aria-labelledby="techniques-title">
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
            <img src="${pontoAmericanoImg}" alt="${pageText.techniques.cards[0].alt}" width="900" height="650" loading="lazy" decoding="async" fetchpriority="low" />
            <span>01</span>
          </div>
          <div class="technique-content">
            <h3>${pageText.techniques.cards[0].title}</h3>
            <p>${pageText.techniques.cards[0].text}</p>
          </div>
        </article>

        <article class="technique-card">
          <div class="technique-image">
            <img src="${fitaAdesivaImg}" alt="${pageText.techniques.cards[1].alt}" width="480" height="640" loading="lazy" decoding="async" fetchpriority="low" />
            <span>02</span>
          </div>
          <div class="technique-content">
            <h3>${pageText.techniques.cards[1].title}</h3>
            <p>${pageText.techniques.cards[1].text}</p>
          </div>
        </article>

        <article class="technique-card">
          <div class="technique-image">
            <img src="${capsulaImg}" alt="${pageText.techniques.cards[2].alt}" width="900" height="650" loading="lazy" decoding="async" fetchpriority="low" />
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

    <section class="results-section" data-lansar-section="resultados" aria-labelledby="results-title">
      <div class="results-header">
        <div class="section-ornament" aria-hidden="true">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>
        <h2 id="results-title">${pageText.results.title}</h2>
        <p>${conversionText.resultsSubtitle}</p>
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
      <p class="results-note">${conversionText.resultsNote}</p>
    </section>

    ${conversionCta(conversionText.ctas[0])}

    <section class="learning-section" data-lansar-section="conteudo" aria-labelledby="learning-title">
      <div class="learning-header">
        <span class="learning-kicker">${pageText.learning.kicker}</span>
        <h2 id="learning-title">${pageText.learning.title}</h2>
      </div>

      <div class="learning-grid">
        ${learningCards}
      </div>
    </section>

    <section class="benefits-section" data-lansar-section="beneficios" aria-labelledby="benefits-title">
      <div class="benefits-header">
        <span class="benefits-kicker">${pageText.benefits.kicker}</span>
        <h2 id="benefits-title">${pageText.benefits.title}</h2>
      </div>

      <div class="benefits-grid">
        ${benefitCards}
      </div>
    </section>

    <section class="fit-section" data-lansar-section="para-quem" aria-labelledby="fit-title">
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

    ${conversionCta(conversionText.ctas[1])}

    <section class="mentor-section" data-lansar-section="mentora" aria-labelledby="mentor-title">
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
          <strong class="mentor-method-label">${conversionText.method.label}</strong>
          <ul class="mentor-method-list">
            ${methodItems}
          </ul>
        </div>

        <figure class="mentor-card">
          <img src="${professoraImg}" alt="${pageText.mentor.alt}" width="760" height="1140" loading="lazy" decoding="async" fetchpriority="low" />
          <figcaption>
            <strong>${pageText.mentor.title}</strong>
            <span>${pageText.mentor.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="guarantee-section" data-lansar-section="garantia" aria-labelledby="guarantee-title">
      <div class="guarantee-card">
        <div class="guarantee-seal" aria-hidden="true">
          <strong>7</strong>
          <span>${isSpanishPage ? 'días' : 'dias'}</span>
        </div>
        <div class="guarantee-copy">
          <span class="guarantee-kicker">${conversionText.guarantee.kicker}</span>
          <h2 id="guarantee-title">${conversionText.guarantee.title}</h2>
          <p>${conversionText.guarantee.text}</p>
          <ul>${guaranteeItems}</ul>
          <a class="guarantee-button js-scroll-offer" href="#comprar" data-cta-position="garantia">
            ${conversionText.guarantee.button}
          </a>
        </div>
      </div>
    </section>

    <section class="offer-section" id="comprar" data-lansar-section="oferta" aria-labelledby="offer-title">
      <div class="offer-shell">
        <h2 id="offer-title" class="offer-title">${pageText.offer.headline}</h2>

        <div class="offer-comparison${isSpanishPage ? '' : ' is-single'}">
          ${isSpanishPage ? `
          <article class="offer-card offer-card-essential">
            <div class="offer-plan-title">${pageText.offer.essentialTitle}</div>
            ${pageText.offer.essentialPayment ? `<span class="offer-payment">${pageText.offer.essentialPayment}</span>` : ''}
            <strong class="offer-plan-price">${pageText.offer.essentialPrice}</strong>
            ${pageText.offer.essentialCashPrice ? `<p class="offer-plan-cash">${pageText.offer.essentialCashPrice}</p>` : ''}
            ${pageText.offer.essentialAccess ? `<small>${pageText.offer.essentialAccess}</small>` : ''}

            <ul class="offer-feature-list">
              ${offerFeatureItems(pageText.offer.essentialFeatures)}
            </ul>

            <a
              class="offer-button offer-button-muted"
              href="${essentialCheckoutUrl}"
              data-lansar-event="checkout-essencial"
              data-checkout-value="${essentialCheckoutTracking.value}"
              data-checkout-currency="${essentialCheckoutTracking.currency}"
            >${pageText.offer.essentialButton}</a>
          </article>
          ` : ''}

          <article class="offer-card offer-card-complete">
            <div class="offer-bestseller">${pageText.offer.bestSeller}</div>
            <div class="offer-stars" aria-label="${pageText.offer.badge}">${pageText.offer.stars}</div>
            <div class="offer-plan-title offer-plan-title-featured">${pageText.offer.completeTitle}</div>
            <strong class="offer-subtitle">${pageText.offer.completeSubtitle}</strong>

            <figure class="offer-product-visual">
              <img class="offer-product-image" src="${megaHairOfferImg}" alt="${pageText.offer.visualAlt}" width="1000" height="750" loading="lazy" decoding="async" fetchpriority="low" />
            </figure>

            <ul class="offer-feature-list">
              ${offerFeatureItems(completeOfferFeatures, { grouped: true })}
            </ul>

            <div class="offer-price">
              <del>${pageText.offer.total} ${pageText.offer.oldPrice}</del>
              ${pageText.offer.today ? `<span>${pageText.offer.today}</span>` : ''}
              <strong>${pageText.offer.price}</strong>
              <p>${pageText.offer.priceText}</p>
            </div>

            <a
              class="offer-button"
              href="${checkoutUrl}"
              data-lansar-event="checkout-completo"
              data-checkout-value="${checkoutTracking.value}"
              data-checkout-currency="${checkoutTracking.currency}"
            >${pageText.offer.button}</a>

            <div class="offer-trust" aria-label="${isSpanishPage ? 'Seguridad de la compra' : 'Segurança da compra'}">
              ${offerTrustItems}
            </div>

            <p class="offer-warning">${isSpanishPage ? 'Elige la opción que mejor se ajusta a tu momento.' : 'Oferta única com acesso completo ao treinamento e aos bônus.'}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="certificate-section" data-lansar-section="certificado" aria-labelledby="certificate-title">
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

    <section class="faq-section" data-lansar-section="faq" aria-labelledby="faq-title">
      <div class="faq-shell">
        <div class="faq-header">
          <span>${conversionText.faq.kicker}</span>
          <h2 id="faq-title">${conversionText.faq.title}</h2>
        </div>
        <div class="faq-list">
          ${faqItems}
        </div>
      </div>
    </section>

    <section class="final-cta" data-lansar-section="cta-final" aria-labelledby="final-cta-title">
      <div>
        <span>${conversionText.finalCta.kicker}</span>
        <h2 id="final-cta-title">${conversionText.finalCta.title}</h2>
        <p>${conversionText.finalCta.text}</p>
        <a class="final-cta-button js-scroll-offer" href="#comprar" data-cta-position="final">
          ${conversionText.finalCta.button}
        </a>
        <small>${conversionText.offerTrust.join(' · ')}</small>
      </div>
    </section>
  </main>
`

const enrichCheckoutLinks = (identifiers) => {
  document.querySelectorAll('.offer-button').forEach((button) => {
    const baseUrl = button.dataset.checkoutBaseUrl || button.getAttribute('href')
    if (!baseUrl) return

    button.dataset.checkoutBaseUrl = baseUrl
    button.setAttribute('href', getCheckoutUrl(baseUrl, identifiers))
  })
}

if (isBrazilSalesPage) {
  enrichCheckoutLinks(initialMetaIdentifiers)
  void metaIdentifiersReady.then((identifiers) => {
    if (!identifiers) return
    enrichCheckoutLinks(identifiers)

    if (
      identifiers.fbp !== initialMetaIdentifiers?.fbp ||
      identifiers.fbc !== initialMetaIdentifiers?.fbc
    ) {
      capturePurchaseSession('anna', identifiers)
    }
  })
}

const checkoutContentId = isSpanishPage ? 'guia-extensiones-3-em-1' : 'mega-hair-3-em-1'

const checkoutEventData = (tracking = checkoutTracking) => ({
  content_name: pageText.checkoutContentName,
  content_ids: [checkoutContentId],
  content_type: 'product',
  num_items: 1,
  value: tracking.value,
  currency: tracking.currency,
})

const createCheckoutEventId = () =>
  `InitiateCheckout.${Date.now()}.${Math.random().toString(36).slice(2)}`

const sendInitiateCheckout = async (eventId, identifiers, tracking = checkoutTracking) => {
  const fbp = identifiers?.fbp ?? getCookie('_fbp')
  const fbc = identifiers?.fbc ?? getCookie('_fbc')
  const externalId = fbp ? await sha256(fbp).catch(() => '') : ''
  const payload = JSON.stringify({
    client: isSpanishPage ? 'anna-es' : 'anna',
    eventName: 'InitiateCheckout',
    eventId,
    ...(!isSpanishPage ? { eventSourceUrl: window.location.href } : {}),
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
    ...(externalId ? { external_id: externalId } : {}),
    eventData: checkoutEventData(tracking),
  })

  return sendMetaEvent(payload)
}

const trackBrowserInitiateCheckout = (eventId, tracking = checkoutTracking) => {
  if (typeof fbq === 'undefined') return
  fbq('track', 'InitiateCheckout', checkoutEventData(tracking), { eventID: eventId })
}

const resolveCheckoutIdentifiers = async () => {
  if (!isBrazilSalesPage) return undefined
  const readyIdentifiers = await metaIdentifiersReady
  const currentIdentifiers = resolveMetaIdentifiers()
  return {
    fbp: currentIdentifiers.fbp || readyIdentifiers?.fbp || '',
    fbc: currentIdentifiers.fbc || readyIdentifiers?.fbc || '',
  }
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

document.querySelectorAll('.js-scroll-offer').forEach((button) => {
  button.addEventListener('click', function(event) {
    event.preventDefault()
    const offerSection = document.querySelector('#comprar')
    const position = button.dataset.ctaPosition || 'pagina'

    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CliqueCTA', {
        content_name: pageText.checkoutContentName,
        position,
        value: checkoutTracking.value,
        currency: checkoutTracking.currency
      });
    }

    offerSection?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  });
});

document.querySelectorAll('.offer-button').forEach((button) => {
  button.addEventListener('click', async function(event) {
    event.preventDefault()
    if (button.dataset.navigating === 'true') return

    button.dataset.navigating = 'true'
    button.classList.add('is-loading')
    button.setAttribute('aria-busy', 'true')
    button.textContent = isSpanishPage ? 'Abriendo checkout...' : 'Abrindo checkout...'

    const targetUrl = button.getAttribute('href') || checkoutUrl
    const eventValue = Number(button.dataset.checkoutValue || checkoutTracking.value)
    const eventCurrency = button.dataset.checkoutCurrency || checkoutTracking.currency
    const tracking = { value: eventValue, currency: eventCurrency }
    const eventId = createCheckoutEventId()

    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CliqueOferta', {
        content_name: pageText.checkoutContentName,
        value: eventValue,
        currency: eventCurrency
      });
    }
    trackBrowserInitiateCheckout(eventId, tracking)

    if (isBrazilSalesPage) {
      const identifiers = await resolveCheckoutIdentifiers()
      trackFunnel('InitiateCheckout')

      await Promise.race([
        sendInitiateCheckout(eventId, identifiers, tracking).catch(() => {}),
        new Promise((resolve) => window.setTimeout(resolve, 180)),
      ])

      window.location.href = getCheckoutUrl(targetUrl, identifiers)
      return
    }

    trackFunnel('InitiateCheckout')
    await Promise.race([
      sendInitiateCheckout(eventId, undefined, tracking).catch(() => {}),
      new Promise((resolve) => window.setTimeout(resolve, 180)),
    ])
    window.location.href = getCheckoutUrl(targetUrl)
  });
});

const resultsMarquee = document.querySelector('.results-marquee')

if (resultsMarquee) {
  if ('IntersectionObserver' in window) {
    const resultsObserver = new IntersectionObserver(([entry]) => {
      resultsMarquee.classList.toggle('is-visible', entry.isIntersecting)
    }, { rootMargin: '160px 0px' })

    resultsObserver.observe(resultsMarquee)
  } else {
    resultsMarquee.classList.add('is-visible')
  }
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
let techniqueInView = !('IntersectionObserver' in window)

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
  if (!techniqueInView || document.hidden || !techniqueMedia.matches || reduceMotion.matches) return
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
document.addEventListener('visibilitychange', startTechniqueAuto)

if ('IntersectionObserver' in window && techniqueCarousel) {
  const techniqueObserver = new IntersectionObserver(([entry]) => {
    techniqueInView = entry.isIntersecting
    startTechniqueAuto()
  }, { rootMargin: '160px 0px' })

  techniqueObserver.observe(techniqueCarousel)
}

startTechniqueAuto()
}
