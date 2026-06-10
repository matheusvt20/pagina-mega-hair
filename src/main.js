import './style.css'
import { getCheckoutUrl, getCookie } from '@/lib/checkoutUrl'
import pontoAmericanoImg from './assets/1.webp'
import fitaAdesivaImg from './assets/2.webp'
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

const resultItems = [
  { src: resultado01Img, alt: 'Antes e depois de aplicação de mega hair em cabelo preto com acabamento natural' },
  { src: resultado02Img, alt: 'Antes e depois de mega hair em cabelo escuro com movimento ondulado' },
  { src: resultado03Img, alt: 'Antes e depois de mega hair cacheado com volume natural' },
  { src: resultado04Img, alt: 'Antes e depois de mega hair liso visto de costas com acabamento alinhado' },
  { src: resultado05Img, alt: 'Antes e depois de alongamento com mega hair em cabelo castanho longo' },
  { src: resultado06Img, alt: 'Antes e depois de mega hair em cabelo preto com ondas naturais' },
  { src: resultado07Img, alt: 'Antes e depois de mega hair longo em cabelo escuro' },
  { src: resultado08Img, alt: 'Antes e depois de mega hair loiro longo com acabamento natural' },
  { src: resultado09Img, alt: 'Antes e depois de mega hair loiro com comprimento uniforme' },
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

const learningModules = [
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
]

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

const benefitItems = [
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
]

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

const forYouItems = [
  'É profissional da beleza',
  'Quer começar no Mega Hair',
  'Busca um serviço mais valorizado',
  'Quer aprender 3 técnicas em um treinamento',
  'Precisa de um conteúdo prático e direto',
]

const notForYouItems = [
  'Não quer estudar nem praticar',
  'Procura formação presencial longa',
  'Não quer oferecer novos serviços',
]

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

document.querySelector('#app').innerHTML = `
  <main class="page-shell">
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title">
          <span>Aprenda 3 técnicas de Mega Hair:</span>
          <span class="hero-techniques">
            <strong>Ponto Americano</strong>, <strong>Fita Adesiva</strong> e <strong>Cápsula de Queratina</strong>
          </span>
        </h1>

        <p class="hero-subtitle">
          Os mesmos serviços que hoje me fazem faturar mais de R$15 mil por mês — e que você pode começar a oferecer no seu estúdio ainda essa semana, mesmo você sendo iniciante.
        </p>

        <div class="hero-cta">
          <a class="hero-button" href="https://pay.kiwify.com.br/UruirxE">
            Garantir acesso completo por R$59,00
          </a>
          <div class="hero-price">
            <span>12x de R$ 6,10</span>
            <strong>ou R$ 59,00 à vista</strong>
          </div>
          <p class="hero-microcopy"><span aria-hidden="true">✓</span> Acesso online por 1 ano com certificado</p>
        </div>

      </div>

      <div class="hero-media-wrap" aria-label="Imagens das técnicas de Mega Hair do treinamento">
        <figure class="hero-card">
          <div class="hero-slide hero-slide-1">
            <img src="${pontoAmericanoImg}" alt="Aplicação de Mega Hair com técnica Ponto Americano" />
            <figcaption>Ponto Americano</figcaption>
          </div>
          <div class="hero-slide hero-slide-2">
            <img src="${fitaAdesivaImg}" alt="Aplicação de Mega Hair com técnica Fita Adesiva" />
            <figcaption>Fita Adesiva</figcaption>
          </div>
          <div class="hero-slide hero-slide-3">
            <img src="${capsulaImg}" alt="Aplicação de Mega Hair com técnica Cápsula de Queratina" />
            <figcaption>Cápsula de Queratina</figcaption>
          </div>
        </figure>
      </div>

    </section>

    <section class="techniques-section" aria-labelledby="techniques-title">
      <div class="techniques-header">
        <div class="section-ornament" aria-hidden="true">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>
        <h2 id="techniques-title">Conheça as 3 técnicas</h2>
        <p>Entenda as diferenças de forma prática e visual.</p>
      </div>

      <div class="technique-grid">
        <article class="technique-card">
          <div class="technique-image">
            <img src="${pontoAmericanoImg}" alt="Aplicação de Mega Hair com técnica Ponto Americano" width="900" height="650" loading="lazy" />
            <span>01</span>
          </div>
          <div class="technique-content">
            <h3>Ponto Americano</h3>
            <p>Fixação firme e estruturada, ideal para quem busca segurança e durabilidade.</p>
          </div>
        </article>

        <article class="technique-card">
          <div class="technique-image">
            <img src="${fitaAdesivaImg}" alt="Aplicação de Mega Hair com técnica Fita Adesiva" width="900" height="650" loading="lazy" />
            <span>02</span>
          </div>
          <div class="technique-content">
            <h3>Fita Adesiva</h3>
            <p>Aplicação prática, discreta e confortável, com acabamento natural.</p>
          </div>
        </article>

        <article class="technique-card">
          <div class="technique-image">
            <img src="${capsulaImg}" alt="Aplicação de Mega Hair com técnica Cápsula de Queratina" width="900" height="650" loading="lazy" />
            <span>03</span>
          </div>
          <div class="technique-content">
            <h3>Cápsula de Queratina</h3>
            <p>Mecha a mecha, com mais movimento e naturalidade no resultado.</p>
          </div>
        </article>
      </div>

      <div class="technique-carousel-controls" aria-label="Controle do carrossel de técnicas">
        <button class="technique-arrow" type="button" data-technique-prev aria-label="Ver técnica anterior">‹</button>
        <div class="technique-dots" aria-hidden="true">
          <span class="is-active"></span>
          <span></span>
          <span></span>
        </div>
        <button class="technique-arrow" type="button" data-technique-next aria-label="Ver próxima técnica">›</button>
      </div>

      <div class="technique-strip" aria-label="Benefícios da seção">
        <span>Aulas práticas</span>
        <b aria-hidden="true"></b>
        <span>Explicação simples</span>
        <b aria-hidden="true"></b>
        <span>3 técnicas em um só treinamento</span>
      </div>
    </section>

    <section class="results-section" aria-labelledby="results-title">
      <div class="results-header">
        <div class="section-ornament" aria-hidden="true">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>
        <h2 id="results-title">Veja o resultado que uma boa técnica entrega</h2>
      </div>

      <div class="results-marquee" aria-label="Galeria de resultados de mega hair">
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
        <span class="learning-kicker">O que você vai aprender</span>
        <h2 id="learning-title">Mega Hair 3 em 1</h2>
      </div>

      <div class="learning-grid">
        ${learningCards}
      </div>
    </section>

    <section class="benefits-section" aria-labelledby="benefits-title">
      <div class="benefits-header">
        <span class="benefits-kicker">O que muda para você</span>
        <h2 id="benefits-title">Entre para uma área com alto potencial de retorno</h2>
      </div>

      <div class="benefits-grid">
        ${benefitCards}
      </div>
    </section>

    <section class="fit-section" aria-labelledby="fit-title">
      <div class="fit-header">
        <span class="fit-kicker">Para quem é</span>
        <h2 id="fit-title">Esse treinamento foi feito para você se...</h2>
      </div>

      <div class="fit-grid">
        <article class="fit-card fit-card-positive">
          <h3>É pra você se:</h3>
          <ul>
            ${listItems(forYouItems, '✓')}
          </ul>
        </article>

        <article class="fit-card fit-card-muted">
          <h3>Não é pra você se:</h3>
          <ul>
            ${listItems(notForYouItems, '×')}
          </ul>
        </article>
      </div>
    </section>

    <section class="mentor-section" aria-labelledby="mentor-title">
      <div class="mentor-content">
        <div class="mentor-copy">
          <span class="mentor-kicker">Quem vai te ensinar</span>
          <h2 id="mentor-title">Anna Schossig</h2>
          <p>
            Especialista em Mega Hair e criadora do treinamento Mega Hair 3 em 1,
            Anna ensina de forma prática, clara e direta para profissionais que querem
            começar ou ampliar seus serviços com mais segurança.
          </p>
          <p>
            Neste treinamento, ela reúne as técnicas Ponto Americano, Fita Adesiva e
            Cápsula de Queratina para mostrar como construir uma base profissional,
            escolher a melhor indicação e entregar um resultado mais natural para a cliente.
          </p>
        </div>

        <figure class="mentor-card">
          <img src="${professoraImg}" alt="Anna Schossig, professora do treinamento Mega Hair 3 em 1" width="760" height="1140" loading="lazy" />
          <figcaption>
            <strong>Anna Schossig</strong>
            <span>Mega Hair 3 em 1</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="offer-section" id="comprar" aria-labelledby="offer-title">
      <div class="offer-shell">
        <div class="offer-header">
          <span class="offer-kicker">O que está incluído</span>
          <h2 id="offer-title">Tudo que você recebe hoje</h2>
        </div>

        <article class="offer-card">
          <div class="offer-ribbon">Oferta completa</div>
          <div class="offer-badge">Mais escolhido</div>

          <div class="offer-name">
            <span>Completo</span>
            <h3>Mega Hair 3 em 1</h3>
          </div>

          <div class="offer-coupon">
            <span>Cupom liberado</span>
            <strong>Você ganhou um cupom de desconto</strong>
            <p>Sua condição especial já está aplicada: 12x de R$ 6,10 ou R$ 59,00 à vista.</p>
          </div>

          <div class="offer-summary">
            <span>Resumo</span>
            <p>Treinamento online Mega Hair 3 em 1 com aulas práticas, certificado e bônus liberados.</p>

            <div class="offer-divider"></div>

            <span>Bônus liberados no acesso</span>
            <ul>
              <li><b aria-hidden="true">+</b><p>App de Agendamento</p><em>Gratuito</em></li>
              <li><b aria-hidden="true">+</b><p>App de Agendamento Automático para suas clientes marcarem horário sozinhas</p><em>Gratuito</em></li>
              <li><b aria-hidden="true">+</b><p>App de Controle Financeiro</p><em>Gratuito</em></li>
              <li><b aria-hidden="true">+</b><p>Curso de Tráfego Pago para profissionais da beleza</p><em>Gratuito</em></li>
            </ul>
          </div>

          <div class="offer-price">
            <div>
              <span>Valor total:</span>
              <strong>R$ 59,00</strong>
              <p>12x de R$ 6,10 ou R$ 59,00 à vista</p>
              <small>Pagamento único · 1 ano de acesso</small>
            </div>
            <del>R$ 529</del>
          </div>

          <a class="offer-button" href="https://pay.kiwify.com.br/UruirxE">Garantir acesso completo por R$59,00</a>

          <div class="offer-timer">
            <span>Essa condição termina em</span>
            <strong>30:00</strong>
          </div>
        </article>
      </div>
    </section>

    <section class="certificate-section" aria-labelledby="certificate-title">
      <div class="certificate-content">
        <div class="certificate-copy">
          <span class="certificate-kicker">Certificado incluso</span>
          <h2 id="certificate-title">Comprove sua evolução no Mega Hair</h2>
          <p>
            Ao concluir o treinamento Mega Hair 3 em 1, você recebe um certificado para
            registrar sua jornada de aprendizado e reforçar sua apresentação profissional.
          </p>
          <ul>
            <li>Certificado digital de conclusão</li>
            <li>Ideal para apresentar no portfólio profissional</li>
            <li>Mais confiança para divulgar seus novos serviços</li>
          </ul>
        </div>

        <div class="certificate-mockup" aria-label="Mockup do certificado Mega Hair 3 em 1">
          <div class="certificate-paper">
            <span class="certificate-seal">AS</span>
            <small>Certificado de Conclusão</small>
            <strong>Mega Hair 3 em 1</strong>
            <p>Concedido a aluna que concluiu o treinamento online com foco em Ponto Americano, Fita Adesiva e Cápsula de Queratina.</p>
            <div class="certificate-line"></div>
            <em>Anna Schossig</em>
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
    eventName: 'InitiateCheckout',
    eventId: `InitiateCheckout.${Date.now()}.${Math.random().toString(36).slice(2)}`,
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
    ...(externalId ? { external_id: externalId } : {}),
    eventData: {},
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
        content_name: 'Mega Hair 3 em 1',
        value: 59.00,
        currency: 'BRL'
      });
    }

    window.setTimeout(() => {
      redirectToCheckout('https://pay.kiwify.com.br/UruirxE')
    }, 300)
  });
});

document.querySelectorAll('.offer-button').forEach((button) => {
  button.addEventListener('click', function(event) {
    event.preventDefault()

    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CliqueOferta', {
        content_name: 'Mega Hair 3 em 1',
        value: 59.00,
        currency: 'BRL'
      });
    }

    window.setTimeout(() => {
      redirectToCheckout('https://pay.kiwify.com.br/UruirxE')
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
