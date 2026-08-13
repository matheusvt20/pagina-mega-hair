import './style.css'
import { getCheckoutUrl, getCookie } from '@/lib/checkoutUrl'
import { trackFunnel } from '@/lib/funnelTrack'
import {
  capturePurchaseSession,
  initializeMetaTracking,
  resolveMetaIdentifiers,
} from '@/lib/purchaseTracking'
import pontoAmericanoImg from './assets/ponto-americano-dobra3.webp'
import fitaAdesivaImg from './assets/fita-adesiva-dobra3.webp'
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
import aluna1Img from './assets/aluna-1.jpeg'
import aluna3Img from './assets/aluna-3.jpeg'
import aluno2Img from './assets/aluno-2.jpeg'
import aluno4Img from './assets/aluno-4.jpeg'
import heroCard01Img from './assets/hero-card-01.webp'
import heroCard02Img from './assets/hero-card-02.webp'
import heroCard03Img from './assets/hero-card-03.webp'
import heroCard04Img from './assets/hero-card-04.webp'
import heroCard05Img from './assets/hero-card-05.webp'
import heroCard06Img from './assets/hero-card-06.webp'
import heroCard07Img from './assets/hero-card-07.webp'
import heroCard08Img from './assets/hero-card-08.webp'
import moduleCard01Img from './assets/module-card-01.webp'
import moduleCard02Img from './assets/module-card-02.webp'
import moduleCard03Img from './assets/module-card-03.webp'
import moduleCard04Img from './assets/module-card-04.webp'
import moduleCard05Img from './assets/module-card-05.webp'
import moduleCard06Img from './assets/module-card-06.webp'
import moduleCard07Img from './assets/module-card-07.webp'
import moduleCard08Img from './assets/module-card-08.webp'
import moduleCard09Img from './assets/module-card-09.webp'
import moduleCard10Img from './assets/module-card-10.webp'
import professionalJourneyImg from './assets/professional-journey.webp'
import studentProofCertifiedImg from './assets/prova-social-certificada.webp'
import studentProofStudentsImg from './assets/prova-social-alunas.webp'
import studentProofClassImg from './assets/prova-social-turma.webp'
import annaResultadosVideo from './assets/anna-resultados-meta.mp4'
import annaResultadosPoster from './assets/anna-resultados-meta-poster.jpg'
import freeMembersLessonVideo from './assets/aula-gratuita-mapa-decisao.mp4'

const isSpanishPage = window.location.pathname.split('/').filter(Boolean)[0] === 'es'
const isFreeClassPage = window.location.pathname.split('/').filter(Boolean)[0] === 'aula-gratuita'
const isBrazilSalesPage = window.location.pathname.split('/').filter(Boolean).length === 0
if (isBrazilSalesPage || isFreeClassPage) initializeMetaTracking()
capturePurchaseSession(
  isSpanishPage ? 'anna-es' : 'anna',
  isBrazilSalesPage || isFreeClassPage ? resolveMetaIdentifiers() : undefined,
)
const checkoutUrl = isSpanishPage
  ? 'https://pay.hotmart.com/M106369269V'
  : 'https://pay.kiwify.com.br/TR0aS19'
const essentialCheckoutUrl = isSpanishPage
  ? checkoutUrl
  : 'https://pay.kiwify.com.br/UruirxE'
const checkoutTracking = isSpanishPage
  ? { value: 4.00, currency: 'USD' }
  : { value: 197.00, currency: 'BRL' }
const essentialCheckoutTracking = isSpanishPage
  ? checkoutTracking
  : { value: 59.00, currency: 'BRL' }
const whatsappSupportMessage = 'Olá, preciso de ajuda sobre o curso de Mega Hair.'
const whatsappSupportUrl = `https://wa.me/5521990481222?text=${encodeURIComponent(whatsappSupportMessage)}`

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
        essentialButton: 'Comprar ahora — haz clic aquí',
        button: 'Comprar ahora — haz clic aquí',
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
        installments: '12x de R$ 6,10',
        fullPrice: 'ou R$ 59,00 à vista',
        paymentTitle: 'Não é mensalidade.',
        paymentNote: 'Pague uma única vez e receba 3 cursos.',
        microcopy: 'Acesso online por 1 ano com certificado',
        mediaLabel:
          'Anna Schossig com demonstrações profissionais de técnicas de Mega Hair',
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
            title: 'Microcápsula de Queratina',
            text: 'Mecha a mecha, com mais movimento e naturalidade no resultado.',
            alt: 'Aplicação de Mega Hair com técnica Microcápsula de Queratina',
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
        title: 'Escolha a melhor oferta para você',
        headline: 'Inscreva-se agora e ganhe:',
        essentialTitle: 'Oferta essencial',
        completeTitle: 'Oferta completa',
        completeSubtitle: '(melhor negócio)',
        bestSeller: 'Mais vendido',
        stars: '★★★★★',
        ribbon: 'Oferta completa',
        badge: 'Mais escolhido',
        label: 'Completo',
        name: 'Mega Hair 3 em 1',
        visualAlt: 'Materiais do treinamento Mega Hair 3 em 1',
        couponLabel: 'Cupom liberado',
        couponTitle: 'Você ganhou um cupom de desconto',
        couponText: 'Sua condição especial já está aplicada: 12x de R$ 20,37 ou R$ 197,00 à vista.',
        summaryLabel: 'Resumo',
        summaryText: 'Treinamento online Mega Hair 3 em 1 com aulas práticas, certificado e bônus liberados.',
        bonusLabel: 'Bônus liberados no acesso',
        bonuses: [
          'Curso de Acabamento Perfeito',
          'Curso de Tráfego Pago',
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
        essentialPrice: '12x de R$ 6,10',
        essentialCashPrice: 'ou R$ 59,00 à vista',
        essentialAccess: '',
        price: '12x de R$ 20,37',
        priceText: 'ou R$ 197,00 à vista',
        access: 'Pagamento único · 1 ano de acesso',
        oldPrice: 'R$ 529',
        essentialButton: 'Comprar agora — clique aqui',
        button: 'Comprar agora — clique aqui',
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
          { included: true, text: 'Bônus 2: Curso de Tráfego Pago' },
          { included: true, text: 'Bônus 3: IA para Profissionais de Mega Hair' },
          { included: true, text: 'Bônus 4: Pack de Prompts Prontos' },
          { included: true, text: 'Bônus 5: Lista de Fornecedores Confiáveis' },
          { included: true, text: 'Bônus 6: Mentoria em Grupo' },
          { included: true, text: 'Bônus 7: Grupo de Alunas' },
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
      resultsNote:
        'Os resultados dependem da prática, dos materiais e da avaliação correta de cada cliente.',
      ctas: [
        {
          kicker: 'Seu próximo passo',
          title: 'Aprenda as 3 técnicas em um único treinamento',
          text: 'Comece pela base, entenda quando indicar cada técnica e avance com mais segurança nas aplicações.',
          button: 'Ver opções de acesso',
          position: 'resultados',
        },
        {
          kicker: 'Se identificou?',
          title: 'Comece agora, mesmo que você ainda seja iniciante',
          text: 'Tenha aulas práticas, material de apoio e certificado para organizar seu aprendizado passo a passo.',
          button: 'Quero conhecer as ofertas',
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
            question: 'Qual é a diferença entre as duas ofertas?',
            answer:
              'A oferta essencial inclui as 3 técnicas, certificado e acesso por 1 ano. A oferta completa acrescenta acesso vitalício e materiais para acabamento, captação de clientes, vendas e gestão.',
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
        text: 'Escolha sua opção de acesso e comece a estudar as 3 técnicas.',
        button: 'Ver opções de acesso',
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

const moduleShowcaseItems = [
  { src: moduleCard01Img, alt: 'Módulo de Ponto Americano' },
  { src: moduleCard02Img, alt: 'Módulo de Fita Adesiva' },
  { src: moduleCard03Img, alt: 'Módulo de Microcápsula de Queratina' },
  { src: moduleCard04Img, alt: 'Módulo de Acabamento Perfeito' },
  { src: moduleCard05Img, alt: 'Módulo de Tráfego Pago' },
  { src: moduleCard06Img, alt: 'Módulo Guia de Cuidados e Manutenção' },
  { src: moduleCard07Img, alt: 'Módulo Clientes com Anúncios para Mega Hair' },
  { src: moduleCard08Img, alt: 'Módulo Guia para Cobrar Certo e Lucrar Mais' },
  { src: moduleCard09Img, alt: 'Módulo IA para Profissionais de Mega Hair' },
  { src: moduleCard10Img, alt: 'Módulo Scripts Prontos para Fechar Clientes no WhatsApp' },
]

const moduleShowcaseSet = (items, duplicate = false) => `
  <div class="module-showcase-set"${duplicate ? ' aria-hidden="true"' : ''}>
    ${items
      .map(
        (item) => `
          <figure class="module-showcase-card">
            <img src="${item.src}" alt="${duplicate ? '' : item.alt}" width="960" height="540" loading="lazy" decoding="async" />
          </figure>
        `,
      )
      .join('')}
  </div>
`

const firstModuleShowcaseRow = moduleShowcaseItems.slice(0, 5)
const secondModuleShowcaseRow = moduleShowcaseItems.slice(5)

const learningSectionMarkup = isSpanishPage
  ? `
    <section class="learning-section" data-lansar-section="conteudo" aria-labelledby="learning-title">
      <div class="learning-header">
        <span class="learning-kicker">${pageText.learning.kicker}</span>
        <h2 id="learning-title">${pageText.learning.title}</h2>
      </div>

      <div class="learning-grid">
        ${learningCards}
      </div>
    </section>
  `
  : `
    <section class="module-showcase" id="modulos" data-lansar-section="conteudo" aria-labelledby="module-showcase-title">
      <div class="module-showcase-header">
        <span>MÓDULOS</span>
        <h2 id="module-showcase-title">
          Uma formação completa, <em>da técnica à conquista de clientes.</em>
        </h2>
        <p>
          Você aprende as três principais técnicas de Mega Hair e também os pilares que transformam conhecimento em trabalho: acabamento, cuidados, precificação, anúncios, inteligência artificial e atendimento.
        </p>
      </div>

      <div class="module-showcase-marquee" aria-label="Primeira fileira de módulos">
        <div class="module-showcase-track">
          ${moduleShowcaseSet(firstModuleShowcaseRow)}
          ${moduleShowcaseSet(firstModuleShowcaseRow, true)}
        </div>
      </div>

      <div class="module-showcase-marquee module-showcase-marquee--reverse" aria-label="Segunda fileira de módulos">
        <div class="module-showcase-track">
          ${moduleShowcaseSet(secondModuleShowcaseRow)}
          ${moduleShowcaseSet(secondModuleShowcaseRow, true)}
        </div>
      </div>
    </section>
  `

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

const professionalJourneySectionMarkup = isSpanishPage
  ? conversionCta(conversionText.ctas[1])
  : `
    <section class="professional-journey" data-lansar-section="caminho-profissional" aria-labelledby="professional-journey-title">
      <div class="professional-journey-shell">
        <div class="professional-journey-heading">
          <span>SEU CAMINHO PROFISSIONAL</span>
          <h2 id="professional-journey-title">
            Não existe atalho para se tornar profissional, mas existe um <em>caminho mais seguro.</em>
          </h2>
        </div>

        <div class="professional-journey-content">
          <figure class="professional-journey-visual">
            <img src="${professionalJourneyImg}" alt="Mulher caminhando em direção a uma meta profissional" width="900" height="900" loading="lazy" decoding="async" />
          </figure>

          <div class="professional-journey-copy">
            <h3>Começar com direção muda tudo.</h3>
            <p>
              Você não precisa aprender sozinha, testar sem segurança ou depender de uma única técnica para atender suas clientes.
            </p>
            <p>
              A formação organiza Ponto Americano, Fita Adesiva e Microcápsula de Queratina em um caminho prático — da avaliação ao acabamento — para você entender qual solução indicar em cada atendimento.
            </p>
            <p>
              Além da técnica, você encontra conteúdos para cuidar do resultado, cobrar com mais clareza, divulgar seu trabalho e conduzir conversas com possíveis clientes.
            </p>
            <a class="professional-journey-cta js-scroll-offer" href="#comprar" data-cta-position="caminho-profissional">
              <span>QUERO COMEÇAR COM MAIS SEGURANÇA</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `

const studentProofSectionMarkup = isSpanishPage
  ? ''
  : `
    <section class="student-proof" id="depoimentos" data-lansar-section="depoimentos-alunas" aria-labelledby="student-proof-title">
      <div class="student-proof-shell">
        <header class="student-proof-header">
          <span>ALUNAS REAIS · CONQUISTAS REAIS</span>
          <h2 id="student-proof-title">O próximo certificado pode ter o seu nome.</h2>
          <p>
            Registros de mulheres que decidiram aprender, praticar e transformar o Mega Hair em uma nova possibilidade profissional.
          </p>
        </header>

        <div class="student-proof-grid">
          <figure class="student-proof-card student-proof-card-certificate">
            <img src="${studentProofCertifiedImg}" alt="Aluna certificada ao lado de Anna Schossig" width="940" height="1670" loading="lazy" decoding="async" />
          </figure>

          <figure class="student-proof-card student-proof-card-students">
            <img src="${studentProofStudentsImg}" alt="Anna Schossig com alunas segurando seus certificados" width="1000" height="1778" loading="lazy" decoding="async" />
          </figure>

          <figure class="student-proof-card student-proof-card-class">
            <img src="${studentProofClassImg}" alt="Turma de alunas formadas com Anna Schossig" width="940" height="1670" loading="lazy" decoding="async" />
          </figure>
        </div>

        <div class="student-proof-footer">
          <p><strong>Você também pode começar.</strong> O primeiro passo é escolher aprender com direção.</p>
          <a class="student-proof-cta js-scroll-offer" href="#comprar" data-cta-position="depoimentos-alunas">
            <span>QUERO SER A PRÓXIMA ALUNA</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
          </a>
        </div>
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

const whatsappSupportButton = () => `
  <a
    class="whatsapp-support"
    href="${whatsappSupportUrl}"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp sobre o curso de Mega Hair"
  >
    <span class="whatsapp-support-icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" role="img">
        <path d="M16.03 3.2A12.74 12.74 0 0 0 5.2 22.64L3.5 28.8l6.3-1.65A12.75 12.75 0 1 0 16.03 3.2Zm0 22.96a10.2 10.2 0 0 1-5.2-1.42l-.37-.22-3.74.98 1-3.64-.24-.38a10.2 10.2 0 1 1 8.55 4.68Zm5.6-7.64c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.16-.2.3-.79 1-1 1.2-.18.2-.36.23-.67.08-.3-.16-1.3-.48-2.47-1.53a9.27 9.27 0 0 1-1.7-2.12c-.18-.3-.02-.47.14-.62.14-.14.3-.36.46-.54.15-.18.2-.3.3-.51.1-.2.05-.39-.02-.54-.08-.15-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.3-1.08 1.05-1.08 2.57s1.1 2.98 1.26 3.19c.15.2 2.18 3.33 5.28 4.67.74.32 1.31.5 1.76.65.74.23 1.42.2 1.95.12.6-.09 1.82-.75 2.08-1.47.25-.72.25-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
      </svg>
    </span>
  </a>
`

const heroLearningCards = [
  heroCard01Img,
  heroCard04Img,
  heroCard07Img,
  heroCard02Img,
  heroCard05Img,
  heroCard08Img,
  heroCard03Img,
  heroCard06Img,
  heroCard04Img,
]

const heroLearningSet = (cards, duplicate = false) => `
  <div class="hero-learning-set"${duplicate ? ' aria-hidden="true"' : ''}>
    ${cards
      .map(
        (image) => `
          <article class="hero-learning-card hero-learning-card--artwork">
            <img src="${image}" alt="" width="512" height="768" ${duplicate ? 'loading="lazy"' : ''} />
          </article>
        `,
      )
      .join('')}
  </div>
`

const firstHeroCardColumn = heroLearningCards.slice(0, 3)
const secondHeroCardColumn = heroLearningCards.slice(3, 6)
const thirdHeroCardColumn = heroLearningCards.slice(6)

const renderFreeClassPage = () => {
  document.documentElement.lang = 'pt-BR'
  document.title = 'Aula Gratuita | Mega Hair 3 em 1 - Anna Schossig'

  document.querySelector('#app').innerHTML = `
    <main class="free-members-page">
      <header class="free-members-topbar">
        <a class="free-members-brand" href="/" aria-label="Página inicial Mega Hair 3 em 1">
          <span class="free-members-brand-mark" aria-hidden="true">AS</span>
          <span>
            <strong>Anna Schossig</strong>
            <small>Mega Hair 3 em 1</small>
          </span>
        </a>
        <div class="free-members-status"><span aria-hidden="true">●</span> Aula demonstrativa</div>
      </header>

      <section class="free-members-layout" aria-label="Área de membros demonstrativa">
        <aside class="free-members-sidebar" aria-label="Conteúdo do treinamento">
          <div class="free-members-course">
            <span>CURSO ONLINE</span>
            <strong>Mega Hair<br />3 em 1</strong>
            <div class="free-members-progress" aria-label="Progresso do curso: 1 de 10 aulas liberada"><i></i></div>
            <small>1 de 10 aulas liberada</small>
          </div>

          <nav class="free-members-module-list" aria-label="Módulos da formação">
            <button class="free-members-lesson is-active" type="button" data-free-lesson="Aula demonstrativa: mapa de decisão das técnicas">
              <span class="free-members-lesson-icon" aria-hidden="true">▶</span>
              <span><small>AULA LIBERADA</small>Mapa de decisão das técnicas</span>
              <time>Grátis</time>
            </button>
            <button class="free-members-lesson is-locked" type="button" data-open-unlock>
              <span class="free-members-lock" aria-hidden="true">⌁</span>
              <span><small>MÓDULO 01</small>Fundamentos do Mega Hair</span>
              <b aria-label="Conteúdo bloqueado">🔒</b>
            </button>
            <button class="free-members-lesson is-locked" type="button" data-open-unlock>
              <span class="free-members-lock" aria-hidden="true">⌁</span>
              <span><small>MÓDULO 02</small>Preparação e materiais</span>
              <b aria-label="Conteúdo bloqueado">🔒</b>
            </button>
            <button class="free-members-lesson is-locked" type="button" data-open-unlock>
              <span class="free-members-lock" aria-hidden="true">⌁</span>
              <span><small>MÓDULO 03</small>Ponto Americano na prática</span>
              <b aria-label="Conteúdo bloqueado">🔒</b>
            </button>
            <button class="free-members-lesson is-locked" type="button" data-open-unlock>
              <span class="free-members-lock" aria-hidden="true">⌁</span>
              <span><small>MÓDULO 04</small>Fita Adesiva na prática</span>
              <b aria-label="Conteúdo bloqueado">🔒</b>
            </button>
            <button class="free-members-lesson is-locked" type="button" data-open-unlock>
              <span class="free-members-lock" aria-hidden="true">⌁</span>
              <span><small>MÓDULO 05</small>Microcápsula de Queratina</span>
              <b aria-label="Conteúdo bloqueado">🔒</b>
            </button>
          </nav>

          <button class="free-members-sidebar-cta" type="button" data-open-unlock>
            <span>✦</span> Desbloquear formação
          </button>
        </aside>

        <section class="free-members-content" aria-labelledby="free-members-title">
          <div class="free-members-breadcrumb"><span>Início</span><i>›</i><span>Aula demonstrativa</span></div>
          <div class="free-members-title-row">
            <div>
              <span class="free-members-kicker">AULA 01 · LIBERADA PARA VOCÊ</span>
              <h1 id="free-members-title">Mapa de decisão: quando usar Ponto, Fita ou Microcápsula</h1>
            </div>
            <span class="free-members-free-badge">GRATUITA</span>
          </div>

          <div class="free-members-player-shell">
            <video class="free-members-player" preload="metadata" playsinline controls width="608" height="1080" aria-label="Aula demonstrativa: mapa de decisão entre Ponto Americano, Fita Adesiva e Microcápsula">
              <source src="${freeMembersLessonVideo}" type="video/mp4" />
            </video>
            <div class="free-members-player-copy" aria-hidden="true">
              <span>ÁREA DE MEMBROS</span>
              <strong>Mapa de decisão das técnicas</strong>
            </div>
          </div>

          <div class="free-members-intro">
            <div>
              <span>VOCÊ ESTÁ NA AULA DEMONSTRATIVA</span>
              <h2>Veja como as técnicas podem abrir novas possibilidades para o seu atendimento.</h2>
              <p>Nesta aula, Anna apresenta o caminho que você vai aprofundar dentro da formação completa: avaliação, indicação e aplicação das três técnicas mais procuradas de Mega Hair.</p>
            </div>
            <button class="free-members-unlock-inline" type="button" data-open-unlock>Quero desbloquear as próximas aulas <span aria-hidden="true">→</span></button>
          </div>

          <section class="free-members-next" aria-labelledby="free-members-next-title">
            <div class="free-members-section-heading">
              <div>
                <span>PRÓXIMAS AULAS</span>
                <h2 id="free-members-next-title">Seu caminho dentro da formação</h2>
              </div>
              <button type="button" data-open-unlock>Ver tudo <span aria-hidden="true">→</span></button>
            </div>
            <div class="free-members-preview-grid">
              <button class="free-members-preview-card" type="button" data-open-unlock>
                <img src="${moduleCard01Img}" alt="Prévia do módulo Fundamentos do Mega Hair" width="1600" height="900" loading="lazy" />
                <span class="free-members-preview-lock" aria-hidden="true">🔒</span>
                <strong>Fundamentos do Mega Hair</strong>
                <small>Módulo 01 · Bloqueado</small>
              </button>
              <button class="free-members-preview-card" type="button" data-open-unlock>
                <img src="${moduleCard04Img}" alt="Prévia do módulo Ponto Americano" width="1600" height="900" loading="lazy" />
                <span class="free-members-preview-lock" aria-hidden="true">🔒</span>
                <strong>Ponto Americano na prática</strong>
                <small>Módulo 03 · Bloqueado</small>
              </button>
              <button class="free-members-preview-card" type="button" data-open-unlock>
                <img src="${moduleCard08Img}" alt="Prévia do módulo Fita Adesiva" width="1600" height="900" loading="lazy" />
                <span class="free-members-preview-lock" aria-hidden="true">🔒</span>
                <strong>Fita Adesiva na prática</strong>
                <small>Módulo 04 · Bloqueado</small>
              </button>
            </div>
          </section>
        </section>
      </section>

      <section class="free-members-bottom-cta" aria-labelledby="free-members-bottom-title">
        <span>QUER CONTINUAR APRENDENDO?</span>
        <h2 id="free-members-bottom-title">Escolha como quer liberar a sua formação.</h2>
        <p>Você já começou. Agora, escolha a oferta que faz mais sentido para o seu momento e tenha acesso às próximas aulas.</p>
        <button type="button" data-open-unlock>Ver opções de acesso <span aria-hidden="true">→</span></button>
      </section>
    </main>

    <div class="free-members-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="free-members-modal-title">
      <div class="free-members-modal-backdrop" data-close-unlock></div>
      <div class="free-members-modal-card">
        <button class="free-members-modal-close" type="button" aria-label="Fechar opções de acesso" data-close-unlock>×</button>
        <span class="free-members-modal-kicker">CONTEÚDO BLOQUEADO</span>
        <h2 id="free-members-modal-title">Escolha como quer desbloquear sua formação.</h2>
        <p>As próximas aulas, materiais e técnicas estão prontas para você. Escolha uma das opções abaixo para liberar seu acesso.</p>
        <div class="free-members-plan-grid">
          <article class="free-members-plan">
            <span>OFERTA ESSENCIAL</span>
            <h3>Comece pelas 3 técnicas</h3>
            <ul>
              <li>✓ Ponto Americano</li>
              <li>✓ Fita Adesiva</li>
              <li>✓ Microcápsula de Queratina</li>
              <li>✓ 1 ano de acesso + certificado</li>
            </ul>
            <strong>12x de R$ 6,10</strong>
            <small>ou R$ 59,00 à vista</small>
            <a href="${essentialCheckoutUrl}" data-lansar-event="checkout-essencial" data-checkout-value="${essentialCheckoutTracking.value}" data-checkout-currency="${essentialCheckoutTracking.currency}">Escolher essencial</a>
          </article>
          <article class="free-members-plan is-featured">
            <span>OFERTA COMPLETA · MAIS ESCOLHIDA</span>
            <h3>Acesse tudo e os bônus</h3>
            <ul>
              <li>✓ As 3 técnicas completas</li>
              <li>✓ Acesso vitalício + certificado</li>
              <li>✓ 7 bônus, incluindo Tráfego Pago</li>
              <li>✓ Bônus extras de vendas e gestão</li>
            </ul>
            <strong>12x de R$ 20,37</strong>
            <small>ou R$ 197,00 à vista</small>
            <a href="${checkoutUrl}" data-lansar-event="checkout-completo" data-checkout-value="${checkoutTracking.value}" data-checkout-currency="${checkoutTracking.currency}">Quero acesso completo</a>
          </article>
        </div>
        <small class="free-members-modal-trust">Pagamento seguro · 7 dias de garantia · acesso após o pagamento</small>
      </div>
    </div>
    ${whatsappSupportButton()}
  `

  const unlockModal = document.querySelector('.free-members-modal')
  const openUnlockModal = () => {
    unlockModal?.classList.add('is-open')
    unlockModal?.setAttribute('aria-hidden', 'false')
    document.body.classList.add('has-free-members-modal')
    trackFunnel('ViewContent')
  }
  const closeUnlockModal = () => {
    unlockModal?.classList.remove('is-open')
    unlockModal?.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('has-free-members-modal')
  }

  document.querySelectorAll('[data-open-unlock]').forEach((button) => button.addEventListener('click', openUnlockModal))
  document.querySelectorAll('[data-close-unlock]').forEach((button) => button.addEventListener('click', closeUnlockModal))
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeUnlockModal()
  })
  document.querySelectorAll('.free-members-modal a[data-lansar-event]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      trackFunnel('InitiateCheckout')

      const targetUrl = button.getAttribute('href') || checkoutUrl
      try {
        const identifiers = resolveMetaIdentifiers()
        const enrichedUrl = new URL(targetUrl)
        if (identifiers.fbp) enrichedUrl.searchParams.set('src', identifiers.fbp)
        if (identifiers.fbc) enrichedUrl.searchParams.set('sck', identifiers.fbc)
        window.location.href = enrichedUrl.toString()
      } catch {
        window.location.href = targetUrl
      }
    })
  })
}

if (isFreeClassPage) {
  renderFreeClassPage()
} else {
document.querySelector('#app').innerHTML = `
  <nav class="floating-student-menu" aria-label="Acesso rápido à oferta">
    <div class="floating-student-menu__brand" aria-label="Anna Schossig Mega Hair">
      <span class="floating-student-menu__mark" aria-hidden="true">
        <svg viewBox="0 0 32 40" focusable="false">
          <path d="M19.5 2.5C11.2 7.9 8.9 15.6 12.4 23.8c2.5 5.8 1.8 10.2-2.2 13.7" />
          <path d="M23.8 5.8c-6 5.1-7.4 11.2-4.2 18.4 2 4.5 1.4 8.2-1.8 11.1" />
          <path d="M27.2 10.4c-3.7 4.2-4.4 8.9-2 14.2 1.3 3 1 5.8-.9 8.3" />
        </svg>
      </span>
      <span class="floating-student-menu__brand-copy">
        <strong>Anna Schossig</strong>
        <small>Mega Hair</small>
      </span>
    </div>
    <a
      class="floating-student-menu__button js-scroll-offer"
      href="#comprar"
      data-cta-position="menu-fixo"
    >
      ${isSpanishPage ? 'QUIERO SER ALUMNA' : 'QUERO SER ALUNO'}
    </a>
  </nav>

  <main class="page-shell">
    <section class="hero-section" data-lansar-section="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title">
          <span class="hero-title-line">${isSpanishPage ? 'Domina' : 'Domine'}</span>
          <span class="hero-title-line">${isSpanishPage ? 'Extensiones' : 'Mega Hair'}</span>
        </h1>

        <p class="hero-subtitle">
          ${isSpanishPage
            ? 'Aprende Punto Americano, Extensiones Adhesivas y Cápsula de Queratina para empezar a ofrecer un servicio valorizado, incluso si eres principiante.'
            : 'Aprenda Ponto Americano, Fita Adesiva e Cápsula de Queratina — os mesmos serviços que hoje me fazem faturar mais de R$15 mil por mês e que você pode começar a oferecer mesmo sendo iniciante.'}
        </p>

        <div class="hero-proof-pill">
          <div class="hero-proof-images" aria-hidden="true">
            <img src="${aluna1Img}" alt="" width="64" height="64" />
            <img src="${aluna3Img}" alt="" width="64" height="64" />
            <img src="${aluno2Img}" alt="" width="64" height="64" />
            <img src="${aluno4Img}" alt="" width="64" height="64" />
          </div>
          <strong>${isSpanishPage ? '+ de mil' : '+ de 1 mil'}</strong>
          <span>${isSpanishPage ? 'alumnas ya aprendieron extensiones de cabello con Anna Schossig.' : 'alunas já aprenderam Mega Hair com Anna Schossig.'}</span>
        </div>

        <p class="hero-closing-line">
          <strong>${isSpanishPage ? 'Llegó tu momento' : 'Chegou a sua hora'}</strong>
          ${isSpanishPage ? ' de empezar con extensiones de cabello con más seguridad.' : ' de começar no Mega Hair com mais segurança.'}
        </p>
      </div>

      <div class="hero-learning-wall" aria-label="${isSpanishPage ? 'Contenidos incluidos en la formación' : 'Conteúdos incluídos no treinamento'}">
        <div class="hero-learning-rail hero-learning-rail--one">
          <div class="hero-learning-track">
            ${heroLearningSet(firstHeroCardColumn)}
            ${heroLearningSet(firstHeroCardColumn, true)}
          </div>
        </div>
        <div class="hero-learning-rail hero-learning-rail--two">
          <div class="hero-learning-track">
            ${heroLearningSet(secondHeroCardColumn)}
            ${heroLearningSet(secondHeroCardColumn, true)}
          </div>
        </div>
        <div class="hero-learning-rail hero-learning-rail--three">
          <div class="hero-learning-track">
            ${heroLearningSet(thirdHeroCardColumn)}
            ${heroLearningSet(thirdHeroCardColumn, true)}
          </div>
        </div>
      </div>

    </section>

    <section
      class="hero-ticker"
      aria-label="${isSpanishPage ? 'Domina las tres técnicas más buscadas de extensiones de cabello' : 'Domine as três técnicas mais procuradas de Mega Hair'}"
    >
      <div class="hero-ticker__track">
        ${[false, true].map((duplicate) => `
          <div class="hero-ticker__set"${duplicate ? ' aria-hidden="true"' : ''}>
            ${Array.from({ length: 4 }, () => `
              <strong>${isSpanishPage ? 'Domina las 3 técnicas más buscadas' : 'Domine as 3 técnicas mais procuradas'}</strong>
              <span aria-hidden="true">✦</span>
            `).join('')}
          </div>
        `).join('')}
      </div>
    </section>

    <section class="story-video-section" id="apresentacao" aria-labelledby="story-video-title">
      <div class="story-video-header">
        <h2 id="story-video-title">
          ${isSpanishPage ? 'Mira el video y descubre cómo' : 'Assista ao vídeo e veja como'}
          <em>${isSpanishPage ? '3 técnicas de extensiones' : '3 técnicas de Mega Hair'}</em>
          ${isSpanishPage ? 'pueden transformar tus ingresos.' : 'podem transformar sua renda.'}
        </h2>
      </div>

      <div class="story-video-stage" style="--story-video-poster: url('${annaResultadosPoster}')">
        <video
          class="story-video-player"
          poster="${annaResultadosPoster}"
          preload="metadata"
          playsinline
          controls
          width="720"
          height="1280"
          aria-label="${isSpanishPage ? 'Video de Anna sobre la formación profesional en extensiones de cabello' : 'Vídeo de Anna sobre a formação profissional em Mega Hair'}"
        >
          <source src="${annaResultadosVideo}" type="video/mp4" />
        </video>
        <button class="story-video-play" type="button" aria-label="${isSpanishPage ? 'Reproducir video' : 'Reproduzir vídeo'}">
          <span aria-hidden="true"></span>
        </button>
        <button class="story-video-sound" type="button" aria-label="${isSpanishPage ? 'Activar sonido del video' : 'Ativar som do vídeo'}">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 9v6h4l5 4V5L9 9H5Z" />
            <path d="M17 9.5c.8.7 1.2 1.5 1.2 2.5s-.4 1.8-1.2 2.5" />
          </svg>
          <span>${isSpanishPage ? 'ACTIVAR SONIDO' : 'ATIVAR SOM'}</span>
        </button>
      </div>

      <a class="story-video-cta js-scroll-offer" href="#comprar" data-cta-position="video">
        <span>${isSpanishPage ? 'LIBERAR ACCESO' : 'LIBERAR ACESSO'}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h13M13 6l6 6-6 6" />
        </svg>
      </a>
    </section>

    <section class="techniques-section" id="metodo" data-lansar-section="tecnicas" aria-labelledby="techniques-title">
      <div class="techniques-header">
        <div class="section-ornament" aria-hidden="true">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>
        <h2 id="techniques-title">
          ${isSpanishPage ? 'Un método,' : 'Um método,'}
          <em>${isSpanishPage ? 'tres técnicas' : 'três técnicas'}</em>
          ${isSpanishPage ? 'y más posibilidades de atender y facturar' : 'e mais possibilidades de atender e faturar'}
        </h2>
      </div>

      <div class="technique-carousel-shell">
        <div class="technique-grid">
          <article class="technique-card">
            <div class="technique-image">
              <img src="${pontoAmericanoImg}" alt="${pageText.techniques.cards[0].alt}" width="1000" height="1508" loading="lazy" decoding="async" fetchpriority="low" />
              <span>01</span>
            </div>
            <div class="technique-content">
              <small>${isSpanishPage ? 'TÉCNICA 01' : 'TÉCNICA 01'}</small>
              <h3>${pageText.techniques.cards[0].title}</h3>
              <p>${pageText.techniques.cards[0].text}</p>
            </div>
          </article>

          <article class="technique-card">
            <div class="technique-image">
              <img src="${fitaAdesivaImg}" alt="${pageText.techniques.cards[1].alt}" width="1200" height="900" loading="lazy" decoding="async" fetchpriority="low" />
              <span>02</span>
            </div>
            <div class="technique-content">
              <small>${isSpanishPage ? 'TÉCNICA 02' : 'TÉCNICA 02'}</small>
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
              <small>${isSpanishPage ? 'TÉCNICA 03' : 'TÉCNICA 03'}</small>
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
      </div>

      <div class="method-conclusion">
        <h3>${isSpanishPage
          ? 'Tu diferencial no es conocer una técnica. Es saber cuál usar en cada clienta.'
          : 'Seu diferencial não é conhecer uma técnica. É saber qual usar em cada cliente.'}</h3>
        <p>${isSpanishPage
          ? 'Cada cabello, rutina y objetivo necesita una solución diferente. Por eso, el Método de las 3 Técnicas reúne opciones complementarias para que puedas evaluar, indicar y ejecutar el procedimiento más adecuado.'
          : 'Cada cabelo, rotina e objetivo pede uma solução diferente. Por isso, o Método das 3 Técnicas reúne opções complementares para você avaliar, indicar e executar o procedimento mais adequado.'}</p>
        <p>${isSpanishPage
          ? 'En lugar de depender de un solo servicio, amplías tus posibilidades de atención y te conviertes en una profesional más completa.'
          : 'Em vez de depender de um único serviço, você amplia suas possibilidades de atendimento e se torna uma profissional mais completa.'}</p>
        <a class="story-video-cta js-scroll-offer" href="#comprar" data-cta-position="metodo-3-tecnicas">
          <span>${isSpanishPage ? 'LIBERAR ACCESO' : 'LIBERAR ACESSO'}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13M13 6l6 6-6 6" />
          </svg>
        </a>
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
        ${conversionText.resultsSubtitle ? `<p>${conversionText.resultsSubtitle}</p>` : ''}
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

    <section class="challenge-section" id="desafios" data-lansar-section="desafios" aria-labelledby="challenge-title">
      <div class="challenge-heading">
        <h2 id="challenge-title">
          ${isSpanishPage
            ? '¿Cuál es el principal desafío que te impide <em>empezar hoy?</em>'
            : 'Qual é o principal desafio que impede você de <em>começar hoje?</em>'}
        </h2>
      </div>

      <div class="challenge-map">
        <div class="challenge-grid">
          <article class="challenge-card">
            <span>01</span>
            <h3>${isSpanishPage
              ? '¿Quieres empezar, pero todavía te sientes insegura por ser principiante?'
              : 'Quer começar, mas ainda se sente insegura por ser iniciante?'}</h3>
            <p>${isSpanishPage
              ? 'Sigue un camino práctico para aprender la base y avanzar con más confianza.'
              : 'Siga um caminho prático para aprender a base e avançar com mais confiança.'}</p>
          </article>

          <article class="challenge-card">
            <span>02</span>
            <h3>${isSpanishPage
              ? '¿Tus ingresos están ajustados y buscas un servicio más valorado?'
              : 'Sua renda está apertada e você procura um serviço mais valorizado?'}</h3>
            <p>${isSpanishPage
              ? 'Aprende tres técnicas que amplían tus posibilidades de atención.'
              : 'Aprenda três técnicas que ampliam suas possibilidades de atendimento.'}</p>
          </article>

          <article class="challenge-card">
            <span>03</span>
            <h3>${isSpanishPage
              ? '¿Ya trabajas en belleza, pero te falta un nicho con más posibilidades?'
              : 'Já trabalha com beleza, mas sente que falta um nicho com mais possibilidades?'}</h3>
            <p>${isSpanishPage
              ? 'Incluye Mega Hair en tu portafolio y ofrece más soluciones a tus clientas.'
              : 'Inclua Mega Hair no seu portfólio e ofereça mais soluções às suas clientes.'}</p>
          </article>
        </div>

        <div class="challenge-connectors" aria-hidden="true">
          <i></i><i></i><i></i><span></span><b></b>
        </div>
      </div>

      <div class="challenge-bridge">
        <h3>${isSpanishPage
          ? '¿PRINCIPIANTE? ¿INSEGURA? ¿BUSCANDO MEJORES INGRESOS?'
          : 'INICIANTE? INSEGURA? BUSCANDO UMA RENDA MELHOR?'}</h3>
        <p>${isSpanishPage
          ? 'No necesitas empezar sabiéndolo todo. Necesitas un camino claro para aprender, practicar y conquistar la seguridad para atender.'
          : 'Você não precisa começar sabendo tudo. Precisa de um caminho claro para aprender, praticar e conquistar segurança para atender.'}</p>
      </div>

      <div class="challenge-paths" aria-label="${isSpanishPage ? 'Caminos posibles con la formación' : 'Caminhos possíveis com a formação'}">
        <button class="challenge-arrow challenge-arrow--prev" type="button" aria-label="${isSpanishPage ? 'Ver tarjeta anterior' : 'Ver card anterior'}" data-challenge-prev>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>

        <div class="challenge-path-viewport">
          <div class="challenge-path-track">
            <article class="challenge-path-card">
              <img src="${heroCard05Img}" alt="${isSpanishPage ? 'Cómo evaluar el cabello de la clienta' : 'Como avaliar o cabelo da cliente'}" width="1024" height="1536" loading="lazy" decoding="async" />
            </article>
            <article class="challenge-path-card">
              <img src="${heroCard01Img}" alt="${isSpanishPage ? 'Técnica de punto americano' : 'Técnica de Ponto Americano'}" width="1024" height="1536" loading="lazy" decoding="async" />
            </article>
            <article class="challenge-path-card">
              <img src="${heroCard02Img}" alt="${isSpanishPage ? 'Técnica de cinta adhesiva' : 'Técnica de Fita Adesiva'}" width="1024" height="1536" loading="lazy" decoding="async" />
            </article>
            <article class="challenge-path-card">
              <img src="${heroCard03Img}" alt="${isSpanishPage ? 'Técnica de microcápsula de queratina' : 'Técnica de Microcápsula de Queratina'}" width="1024" height="1536" loading="lazy" decoding="async" />
            </article>
            <article class="challenge-path-card">
              <img src="${heroCard04Img}" alt="${isSpanishPage ? 'Acabado perfecto de Mega Hair' : 'Acabamento perfeito de Mega Hair'}" width="1024" height="1536" loading="lazy" decoding="async" />
            </article>
          </div>
        </div>

        <button class="challenge-arrow challenge-arrow--next" type="button" aria-label="${isSpanishPage ? 'Ver próxima tarjeta' : 'Ver próximo card'}" data-challenge-next>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div class="challenge-dots" aria-hidden="true">
        <span class="is-active"></span><span></span><span></span><span></span><span></span>
      </div>
    </section>

    ${learningSectionMarkup}

    ${isSpanishPage ? `
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
    ` : ''}

    ${professionalJourneySectionMarkup}

    ${studentProofSectionMarkup}

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

        <div class="offer-comparison">
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

            <p class="offer-warning">${isSpanishPage ? 'Elige la opción que mejor se ajusta a tu momento.' : 'Escolha a opção que faz mais sentido para o seu momento.'}</p>
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
  ${whatsappSupportButton()}
`

if (!isSpanishPage) {
  const studentProofSection = document.querySelector('.student-proof')
  const offerSection = document.querySelector('.offer-section')

  if (studentProofSection && offerSection) {
    studentProofSection.insertAdjacentElement('afterend', offerSection)
  }
}

const sendInitiateCheckout = async (identifiers, tracking = checkoutTracking) => {
  const fbp = identifiers?.fbp ?? getCookie('_fbp')
  const fbc = identifiers?.fbc ?? getCookie('_fbc')
  const externalId = fbp ? await sha256(fbp).catch(() => '') : ''
  const payload = JSON.stringify({
    client: isSpanishPage ? 'anna-es' : 'anna',
    eventName: 'InitiateCheckout',
    eventId: `InitiateCheckout.${Date.now()}.${Math.random().toString(36).slice(2)}`,
    ...(isBrazilSalesPage ? { eventSourceUrl: window.location.href } : {}),
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
    ...(externalId ? { external_id: externalId } : {}),
    eventData: {
      content_name: pageText.checkoutContentName,
      value: tracking.value,
      currency: tracking.currency,
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

    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CliqueOferta', {
        content_name: pageText.checkoutContentName,
        value: eventValue,
        currency: eventCurrency
      });
    }

    if (isBrazilSalesPage) {
      const identifiers = resolveMetaIdentifiers()
      trackFunnel('InitiateCheckout')

      await Promise.race([
        sendInitiateCheckout(identifiers, tracking).catch(() => {}),
        new Promise((resolve) => window.setTimeout(resolve, 180)),
      ])

      window.location.href = getCheckoutUrl(targetUrl, identifiers)
      return
    }

    trackFunnel('InitiateCheckout')
    await Promise.race([
      sendInitiateCheckout(undefined, tracking).catch(() => {}),
      new Promise((resolve) => window.setTimeout(resolve, 180)),
    ])
    window.location.href = getCheckoutUrl(targetUrl)
  });
});

const storyVideo = document.querySelector('.story-video-player')
const storyVideoStage = document.querySelector('.story-video-stage')
const storyVideoPlay = document.querySelector('.story-video-play')
const storyVideoSound = document.querySelector('.story-video-sound')

if (storyVideo && storyVideoStage && storyVideoPlay && storyVideoSound) {
  let storyVideoIsVisible = false

  storyVideoPlay.addEventListener('click', () => {
    storyVideo.muted = false
    storyVideo.defaultMuted = false
    storyVideoStage.classList.remove('needs-sound')
    storyVideo.play().catch(() => {})
  })

  storyVideoSound.addEventListener('click', () => {
    storyVideo.muted = false
    storyVideo.defaultMuted = false
    storyVideo.volume = 1
    storyVideoStage.classList.remove('needs-sound')
    storyVideo.play().catch(() => {})
  })

  storyVideo.addEventListener('play', () => {
    storyVideoStage.classList.add('is-playing')
  })

  storyVideo.addEventListener('volumechange', () => {
    if (!storyVideo.muted && storyVideo.volume > 0) {
      storyVideoStage.classList.remove('needs-sound')
    }
  })

  const revealStoryVideoPlay = () => {
    storyVideoStage.classList.remove('is-playing')
  }

  storyVideo.addEventListener('pause', revealStoryVideoPlay)
  storyVideo.addEventListener('ended', revealStoryVideoPlay)

  if ('IntersectionObserver' in window) {
    const storyVideoObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
        storyVideoIsVisible = true
        storyVideo.muted = false
        storyVideo.defaultMuted = false

        storyVideo.play().then(() => {
          storyVideoStage.classList.remove('needs-sound')
        }).catch(() => {
          if (!storyVideoIsVisible) return

          storyVideo.muted = true
          storyVideo.defaultMuted = true
          storyVideo.play().then(() => {
            storyVideoStage.classList.add('needs-sound')
          }).catch(() => {})
        })
        return
      }

      storyVideoIsVisible = false
      if (!storyVideo.paused) {
        storyVideo.pause()
      }
    }, { threshold: [0, 0.45, 0.7] })

    storyVideoObserver.observe(storyVideoStage)
  }
}

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
const techniqueMedia = window.matchMedia('(min-width: 0px)')
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

const challengeTrack = document.querySelector('.challenge-path-track')
const challengePrev = document.querySelector('[data-challenge-prev]')
const challengeNext = document.querySelector('[data-challenge-next]')
const challengeDots = [...document.querySelectorAll('.challenge-dots span')]
let challengeScrollFrame

const updateChallengePosition = () => {
  if (!challengeTrack || !challengeDots.length) return

  const maxScroll = Math.max(0, challengeTrack.scrollWidth - challengeTrack.clientWidth)
  const progress = maxScroll ? challengeTrack.scrollLeft / maxScroll : 0
  const activeIndex = Math.round(progress * (challengeDots.length - 1))

  challengeDots.forEach((dot, index) => {
    dot.classList.toggle('is-active', index === activeIndex)
  })
}

const moveChallengeCarousel = (direction) => {
  if (!challengeTrack) return

  const firstCard = challengeTrack.querySelector('.challenge-path-card')
  const styles = window.getComputedStyle(challengeTrack)
  const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0
  const cardStep = (firstCard?.getBoundingClientRect().width || challengeTrack.clientWidth * 0.72) + gap

  challengeTrack.scrollBy({
    left: direction * cardStep,
    behavior: reduceMotion.matches ? 'auto' : 'smooth',
  })
}

challengePrev?.addEventListener('click', () => moveChallengeCarousel(-1))
challengeNext?.addEventListener('click', () => moveChallengeCarousel(1))

challengeTrack?.addEventListener('scroll', () => {
  window.cancelAnimationFrame(challengeScrollFrame)
  challengeScrollFrame = window.requestAnimationFrame(updateChallengePosition)
}, { passive: true })

window.addEventListener('resize', updateChallengePosition)
updateChallengePosition()
}
