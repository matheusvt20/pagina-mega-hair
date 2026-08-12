# Blueprint reutilizável — página de vendas Mega Hair

> Documento de referência do layout que está implementado em `src/main.js` e `src/style.css` em 11 de agosto de 2026. Ele descreve a versão brasileira (`/`), que é a página de vendas principal. Use-o como base para novos clientes: preserve componentes, hierarquia e comportamento; substitua os itens da seção **Conteúdo variável**.

## 1. Como o template funciona

- **Stack:** Vite + JavaScript puro + CSS único. A página é montada em `src/main.js`; o visual e os breakpoints ficam em `src/style.css`.
- **Versões:** `/` em português/Brasil; `/es` em espanhol; `/aula-gratuita` é uma landing isolada e não faz parte do blueprint de vendas abaixo.
- **Largura de trabalho:** desktop é pensado até `1280–1320px` de conteúdo. As seções usam `clamp()` para escalar com fluidez; não há uma altura fixa geral por dobra.
- **Responsividade:** pontos de mudança principais em `1100px`, `920px`, `900px`, `780px`, `760px`, `700px`, `540px`, `480px`, `420px`, `390px` e `360px`. O padrão dominante é grid em desktop e uma coluna/rolagem horizontal em mobile.
- **Acessibilidade e performance:** imagens abaixo da primeira dobra usam `loading="lazy"` e `decoding="async"`; os carrosséis têm navegação por botões/dots e respeitam `prefers-reduced-motion`.

## 2. Sistema visual fixo

| Item | Regra atual |
| --- | --- |
| Fundo principal | Preto profundo `#050505`, painéis `#0c0b0a` e variações de grafite. |
| Texto | Principal `#fff9ed`; secundário bege/cinza (`#c9c0b2` / transparências). |
| Cor de destaque | Dourado `#d9bc73`; variações `#d9bc73`, `#e2b84f`, `#e2c270` e `#bd8524`. |
| Cores de transição | Creme `#f7f4ef` e vermelho `#d9002f` / `#ee0038`. |
| Fontes | Sans: `Inter, system-ui`; display: `Didot/Bodoni/Libre Baskerville/Georgia`. |
| Botões | Cápsula (raio `999px`), dourado em CTAs principais; preto ou vermelho em CTAs contextuais. |
| Bordas | 1px, quase sempre branco/dourado com 8–30% de opacidade. |
| Raio de cards | 18–46px no desktop; 18–28px no mobile, conforme o componente. |
| Sombras | Escuras e amplas (`0 18–34px 36–90px`), sem sombras duras. |
| Espaço vertical | Seções grandes: `76–148px` de padding por lado, em geral via `clamp()`. |

### Regras que não devem ser quebradas

1. Não use uma imagem horizontal em um card vertical, ou vice-versa. O layout corta com `object-fit: cover`.
2. Mantenha títulos curtos: em especial Hero, módulos e cards de técnica. Títulos longos aumentam a dobra e desequilibram o grid.
3. Sempre duplique o conjunto de itens de esteiras infinitas. A cópia existe para a animação não “pular”.
4. Em mobile, preserve `scroll-snap` nos carrosséis em vez de comprimir cards para caberem todos na tela.
5. Ao trocar a paleta, altere variáveis/tokens e gradientes por componente; não aplique uma única cor em toda a página.

## 3. Navegação flutuante e elemento fixo

### Menu superior

- Fixo no topo (`top: 14–20px`), centralizado, `z-index: 1000`.
- Largura: `min(1180px, calc(100% - 32px))`; altura mínima: `64px`.
- Formato cápsula; padding `8px 9px 8px 20px`; blur de fundo de `18px`.
- À esquerda: símbolo, nome da especialista e nicho. À direita: CTA que rola para `#comprar`.
- O botão tem mínimo de `202px × 46px`; em telas pequenas, a regra mobile preserva a prioridade do CTA.

### WhatsApp flutuante

- Fixo no canto inferior direito: `16–32px` em desktop; `14px` até `520px`.
- Ícone circular verde (`#25d366`), `58×58px`; `54×54px` em mobile.
- Animação leve de pulso e anel a cada `2.8s`; fica parada quando o usuário prefere menos movimento.
- Link atual: número de suporte definido em `whatsappSupportUrl` no topo de `src/main.js`. Para outro cliente, troque o telefone e a mensagem pré-preenchida.

## 4. Mapa completo das dobras

Na página brasileira, a oferta é declarada mais abaixo no HTML, mas é movida por JavaScript para imediatamente depois da prova social. Esta é a ordem **real renderizada**:

1. Menu flutuante
2. Hero + mural de cards
3. Faixa dourada animada
4. Vídeo de apresentação
5. Método / três técnicas
6. Resultados (esteira de aplicações)
7. Desafios + carrossel de caminhos/módulos
8. Conteúdo da formação (duas esteiras)
9. Caminho profissional
10. Prova social
11. Oferta comparativa (movida para esta posição em PT-BR)
12. Mentora
13. Garantia
14. Certificado
15. FAQ
16. CTA final
17. WhatsApp flutuante

### Dobra 1 — Hero editorial com mural de conteúdo

**Objetivo:** posicionar a promessa, prova social imediata e percepção de volume de conteúdo.

- Fundo preto com gradiente lateral e halo dourado discreto.
- Desktop: grid de duas colunas (`0.95fr / 1.05fr`), colunas mínimas de `360px` e `580px`, gap de `34–84px`; padding superior `122px`, lateral calculada a partir de `1280px`, inferior `48px`; mínimo de `100svh`.
- Texto à esquerda com largura máxima de `650px` e padding superior de `56–76px`.
- Título Didot/Bodoni, dourado, `4.4–6.35rem`, entrelinha `0.88`, tracking `-0.045em`; duas linhas explícitas.
- Subtítulo: máximo `575px`, `1.04–1.28rem`, entrelinha `1.48`, margem superior `34–48px`.
- Pílula de prova: até `610px`, mínimo de `72px`; grid avatar + número + texto; quatro avatares circulares `46×46px` sobrepostos em `12px`. Número em `1.18–1.55rem`.
- À direita, mural de três colunas: largura máxima `560px`; altura `calc(100svh + 80px)`, mínimo `720px`, máximo `1060px`; máscara vertical suaviza entrada e saída.
- Cards do mural: proporção `2:3`; raios `14–20px`; gap `10–15px`; borda interna; imagem em cover. Cada coluna percorre verticalmente em loop entre `58s` e `66s`, em direções alternadas. Pausa no hover.
- O mural deve receber **9 cards verticais** distribuídos em três colunas, com uma cópia do conjunto para permitir loop perfeito.

**Mobile (`≤700px`):** o mural passa para o topo absoluto (`height: 540px`) e o texto começa após `425px`, centralizado. A seção tem mínimo de `820px`; o hero usa `16px` de lateral. O título reduz para `3.05–4.2rem`; a pílula fica em largura cheia, até `480px`. A máscara do mural termina antes do conteúdo para preservar legibilidade.

### Dobra 2 — Faixa dourada / ticker

- Faixa full width em gradiente dourado, borda superior e inferior translúcida.
- Conteúdo em linha contínua, duplicado; rolagem horizontal automática em `34s`, pausa no hover.
- Tipografia display `1.06–1.48rem`; separador `✦`; padding vertical `18–25px`; espaço entre grupos `22–42px`.
- Troque somente a frase repetida. Não retire a duplicação da trilha.

### Dobra 3 — Vídeo de venda

- Fundo preto; padding vertical `76–126px`, lateral `24px`; halo dourado central no topo.
- Cabeçalho central com largura máxima de `900px`; título `2.25–3.75rem` e palavra-chave em serif itálico.
- Palco: largura máxima `900px`, mínimo de `650px` em desktop, padding `24px`, raio `26–40px`. O poster desfocado preenche o fundo e o vídeo vertical fica centralizado.
- Vídeo: proporção original `720×1280`; altura limitada a `min(68svh, 590px)` em desktop, mantendo largura automática. Play circular `74px`; botão de áudio aparece apenas quando necessário.
- CTA dourado abaixo: máximo de `340px`, altura mínima `62px`, margem superior `34px`.
- Em mobile: seção `62px 15px 78px`; palco até `380px`, sem altura mínima, padding `8px`; vídeo ocupa 100% da largura; play `60px`; CTA máximo `310px` e mínimo `58px`.

### Dobra 4 — Método: três técnicas

**Objetivo:** apresentar os pilares do produto e fechar com uma conclusão de método.

- Fundo creme; cabeçalho ornamental e título central.
- Desktop: três cards lado a lado. Cada card combina fotografia e conteúdo; os arquivos atuais são Ponto Americano, Fita Adesiva e Cápsula de Queratina.
- O componente é carrossel por scroll horizontal: em desktop amplo aparecem os três; abaixo de `1260px` funciona por slide. As setas avançam a largura do card + gap; dots refletem o índice aproximado.
- Mobile: trilha `overflow-x: auto`, `scroll-snap-type: x mandatory`; cada card recebe largura própria para manter a leitura. Setas e dots continuam visíveis.
- Conclusão final em bloco textual com CTA dourado reutilizando a classe do CTA do vídeo.

### Dobra 5 — Resultados

- Fundo escuro com ornamento e cabeçalho central. Atualmente o subtítulo foi removido; resta apenas título e nota legal abaixo da esteira.
- Carrossel automático de resultados em duas cópias iguais de 9 imagens quadradas. É uma marquee contínua; pausa no hover.
- Cards: quadrados, imagem `object-fit: cover`, borda e sobreposição leve. Use fotos finais reais e padronizadas.
- A nota de resultado é um texto separado (`.results-note`) e deve sempre refletir o nicho/risco do cliente.

### Dobra 6 — Desafios e caminhos

- Fundo preto, padding desktop aproximadamente `92–138px`; cabeçalho central forte.
- Primeira parte: três cards de dores em grid de 3 colunas. Linhas/conectores gráficos unem os cards a uma ponte textual central.
- Em mobile, os três cards passam para uma coluna e os conectores laterais são ocultados; fica apenas a conexão vertical central de `82px`.
- A ponte tem título grande e um parágrafo em caixa translúcida até `790px`, raio `28px`.
- Segunda parte: carrossel de **5 cards verticais** de módulos/caminhos. Desktop: viewport com setas laterais `52×52px`, gap `18px`, e cada card usa `calc((100% - 72px) / 5)`. Até `900px`, mostra 3 cards. Mobile mostra 1 cartão parcial (`min(72vw, 285px)`), gap `13px`, scroll-snap e setas flutuantes `45×45px`.
- Cards têm aspect ratio `0.73`, raio `24px` (`22px` mobile), imagem vertical em cover e badge “MÓDULO” no canto superior direito. Os dots passam de `6px` para `24px` quando ativos.

### Dobra 7 — Conteúdo da formação

- Fundo creme com halo dourado no topo; padding `92–148px` em cima e `76–122px` embaixo.
- Cabeçalho: máximo `1040px`; título de `2.7–5.7rem`, linha complementar em serif dourado; parágrafo até `820px`.
- Duas esteiras horizontais de cards de módulos em sentido oposto. Cada esteira contém os mesmos itens divididos em conjuntos e duplicados.
- Cards: proporção `16:9`, largura de `310–430px`, raio `18–25px`, gap `14–22px`. Animações: `52s` e `58s`; pausa no hover.
- Mobile: cards até `min(84vw, 340px)`, gap `12px`, animações de `44s` e `48s`. Com redução de movimento, as esteiras viram rolagem horizontal manual.

### Dobra 8 — Caminho profissional

- Seção aspiracional de transição, vermelho vibrante em gradiente, com círculos decorativos.
- Largura de conteúdo `1320px`; padding `92–138px`/`86–126px`.
- Cabeçalho central até `1040px`; título `2.75–5.25rem`.
- Conteúdo em duas colunas (`0.92fr / 1.08fr`): imagem quadrada à esquerda, texto à direita. Gap `42–92px`.
- Imagem com aspect ratio `1:1`, raio `28–46px`, borda clara e sombra colorida.
- CTA preto, mínimo `58px`, em cápsula. Em mobile (`≤780px`), vira uma coluna, padding `76px 18px 82px` e CTA ocupa toda a largura com mínimo de `60px`.

### Dobra 9 — Prova social

- Fundo creme texturizado, borda interna de `20px` desktop / `10px` mobile; conteúdo máximo `1280px`.
- Título serif `2.65–5.1rem`, selo em pílula e texto centralizado.
- Desktop: 3 fotos em colunas, gap `16–30px`; a segunda desce `24–48px` para criar ritmo editorial. Fotos em aspecto `0.76` e raios `24–36px`.
- Mobile: carrossel horizontal com `scroll-snap`; card tem `min(82vw, 330px)` e aspecto `0.74`. A segunda foto perde o deslocamento.
- Rodapé de prova: caixa de até `780px`, texto e CTA vermelho. Em mobile fica empilhada e o botão usa largura total.

### Dobra 10 — Oferta comparativa

**Posição final em PT-BR:** imediatamente após a prova social. É a dobra comercial primária e possui o ID `#comprar`.

- Fundo escuro; shell central; título “Escolha a melhor oferta para você”.
- Grid de duas ofertas em desktop: plano essencial e completo. Em telas até `900px`, empilha; até `540px`, reduz paddings e tamanhos, sem esconder benefícios.
- Card essencial: versão neutra; nome, preço, acesso, lista de itens e CTA mutado.
- Card completo: destaque de “Mais vendido”, estrelas, produto visual horizontal, grupos de lista, preço e CTA dourado.
- Visual do produto: asset em `1000×750`, com `object-fit: contain`, sem cortar conteúdo do mockup.
- A lista se divide automaticamente por prefixo: conteúdo/formação, “Bônus” e “Bônus extra”. Cabeçalhos de grupo têm cores próprias; checks são verdes/dourados; itens excluídos aparecem com `×` e texto apagado.
- Bônus atuais devem preservar a enumeração: 1 Acabamento Perfeito; 2 Tráfego Pago; 3 IA; 4 Pack de Prompts; 5 Fornecedores; 6 Mentoria; 7 Grupo de Alunas. Itens posteriores são “Bônus extra”.
- Trust bar fica logo abaixo do CTA do plano completo. O aviso é texto informativo, não outro botão.

### Dobra 11 — Mentora

- Fundo escuro com iluminação discreta; layout de duas colunas: texto/método e retrato.
- Foto original em `760×1140`; card vertical com caption sobreposto.
- Em mobile, preserve imagem de boa resolução e reordene em uma coluna apenas quando o espaço não sustentar o texto.

### Dobra 12 — Garantia

- Card central com selo circular “7 dias”, texto, lista de segurança e CTA para `#comprar`.
- Deve sempre apresentar o prazo real de garantia da plataforma. Não reaproveite “7 dias” se o produto novo tiver outra política.

### Dobra 13 — Certificado

- Conteúdo de duas colunas: texto + mockup em CSS. Não depende de imagem do certificado.
- O mockup usa papel, selo, linhas e assinatura construídos no CSS; troque nome do curso, texto de emissão e nome da especialista em `pageText.certificate`.

### Dobra 14 — FAQ

- Fundo escuro e largura de leitura limitada. Itens são `<details>`/`<summary>`, portanto abrem sem biblioteca.
- Ícone de “+” vira “−” no estado aberto. Mantenha perguntas objetivas: acesso, nível, materiais, garantia, certificado e diferença entre planos.

### Dobra 15 — CTA final

- Bloco de encerramento central com título, explicação curta, CTA que rola para a oferta e microtexto de confiança.
- Serve como última recuperação de intenção antes de o usuário sair da página. Não direcione a outro link: use `#comprar`.

## 5. Carrosséis, esteiras e comportamento

| Componente | Itens | Desktop | Mobile | Movimento |
| --- | ---: | --- | --- | --- |
| Mural do hero | 9 verticais / 3 colunas | 3 trilhas verticais até 560px de largura | mural atrás do texto, 540px de altura | automático, 58–66s, pausa no hover |
| Ticker | frase repetida | faixa única full width | igual | automático, 34s, pausa no hover |
| Técnicas | 3 | grid/scroll com setas | swipe por card + dots | manual, scroll suave |
| Resultados | 9 quadrados, duplicados | marquee full width | marquee full width | automático; pausa no hover |
| Caminhos | 5 verticais | 5 cards visíveis; 3 abaixo de 900px | 1 card + próximo parcial | swipe/setas/dots |
| Módulos | 10 horizontais em 2 faixas | cards 310–430px | cards até 340px | automático, 52/58s; manual com redução de movimento |
| Prova social | 3 verticais | 3 colunas | swipe, 82vw por card | manual com snap |

### Padrão de implementação para novos carrosséis

1. Use uma viewport com `overflow: hidden` para desktop ou `overflow-x: auto` para mobile.
2. No mobile, use `scroll-snap-type: x mandatory`, `scroll-snap-align: start/center` e esconda a barra visual.
3. Para loops automáticos, renderize dois conjuntos idênticos e desloque a trilha até `translateX(-50%)`.
4. Pause a animação em `:hover` e remova-a em `prefers-reduced-motion: reduce`.
5. Nunca use autoplay de vídeo/áudio com som. O vídeo atual só inicia mediante ação do usuário.

## 6. Conteúdo variável por novo cliente

| Grupo | Onde trocar | O que preparar |
| --- | --- | --- |
| Identidade, título e copy | `pageText` e `conversionText` em `src/main.js` | Nome, promessa, idioma, números aprovados, tom de voz. |
| Checkout | `checkoutUrl`, `essentialCheckoutUrl` | URLs por plano e valores de tracking. |
| WhatsApp | `whatsappSupportMessage` e `whatsappSupportUrl` | Telefone com DDI/DDD e mensagem de suporte. |
| Hero mural | imports + `heroLearningCards` | 9 artes verticais em 2:3. Recomendado: 1024×1536px ou superior. |
| Vídeo | `annaResultadosVideo`/poster | MP4 vertical e poster JPG. Base: 720×1280px. |
| Técnicas | imagens e `pageText.techniques.cards` | 3 imagens de aplicação. Originais podem variar, mas use ao menos 1200px no maior lado. |
| Resultados | `resultado01…09` + `resultAlt` | 9 fotos quadradas, recomendado 1080×1080px. |
| Caminhos | `heroCard01…05` | 5 cards verticais 1024×1536px. |
| Módulos | `moduleCard01…10` | 10 artes 16:9, recomendado 1600×900px. |
| Caminho profissional | `professionalJourneyImg` | imagem quadrada de ao menos 1200×1200px. |
| Prova social | `studentProof…` | 3 imagens verticais coerentes, pelo menos 1000px de altura. |
| Mentora | `professoraImg` | retrato vertical 2:3, no mínimo 760×1140px. |
| Produto/oferta | `megaHairOfferImg` | mockup horizontal 4:3, idealmente PNG/WebP com composição limpa. |
| Oferta, bônus e FAQ | `pageText.offer`, `conversionText.faq` | Planos reais, garantia real, bullets verificáveis e perguntas reais. |

## 7. Sequência recomendada para clonar o projeto

1. Duplique o repositório e altere o nome/slug do projeto.
2. Faça uma pasta de assets com a matriz do item anterior antes de editar textos.
3. Troque a identidade visual: tokens de cor no início de `src/style.css`, gradientes setoriais e, se necessário, fontes.
4. Atualize todos os textos em `pageText` e `conversionText`; nunca deixe números, promessas ou nomes da cliente anterior.
5. Substitua imagens mantendo as proporções especificadas. Se uma imagem não tiver a proporção, recorte-a antes de colocar no projeto.
6. Configure checkout, WhatsApp, Meta Pixel/CAPI e valores de eventos para o novo cliente.
7. Revise as duas versões de idioma: se não for usar `/es`, remova ou adapte conscientemente; não deixe conteúdo híbrido.
8. Rode `npm run build` e revise em desktop, tablet e mobile antes de publicar.

## 8. Checklist visual e de conversão antes do deploy

- [ ] Hero tem título legível, mural sem cards vazios e sem texto cortado.
- [ ] Menu superior não encobre o conteúdo ao abrir em 360px de largura.
- [ ] CTA de menu, vídeo, método, caminho, garantia e final levam a `#comprar`.
- [ ] Cards horizontais/verticais usam a proporção correta e não exibem rostos/objetos cortados de modo inadequado.
- [ ] Todos os carrosséis deslizam no mobile; setas e dots respondem ao scroll.
- [ ] Esteiras infinitas não mostram salto visual; há duplicação correta dos itens.
- [ ] Oferta está depois da prova social na página em português e preços/links correspondem ao checkout.
- [ ] Bônus estão numerados sem duplicidade e a lista de “extras” está separada.
- [ ] Garantia, certificado, FAQ e microcopy são verdadeiros para o produto em questão.
- [ ] WhatsApp abre o número correto e a mensagem inicial adequada.
- [ ] Fotos têm alt text descritivo, vídeo tem poster, e animações respeitam redução de movimento.
- [ ] Build executa sem erro: `npm run build`.

## 9. Arquivos-chave do template

- [src/main.js](src/main.js) — textos, links, imports de assets, marcação das dobras, dados dos cards e interações de carrossel.
- [src/style.css](src/style.css) — tokens, layout, componentes, animações e responsividade.
- [src/lib/checkoutUrl.js](src/lib/checkoutUrl.js) — tratamento de URL de checkout.
- [src/lib/funnelTrack.js](src/lib/funnelTrack.js) — eventos de funil da navegação/CTAs.
- [src/lib/purchaseTracking.js](src/lib/purchaseTracking.js) e `functions/api/` — integração de rastreamento/pós-conversão.

## 10. Escopo deste documento

Este guia registra a estrutura e as regras atualmente implementadas; medidas expressas com `clamp()` variam intencionalmente por viewport. Se quiser transformar o blueprint em um template multi-cliente de verdade, o próximo passo é separar `pageText`, cores, assets, checkout e tracking em uma configuração por cliente — deixando `main.js` e `style.css` como componentes fixos.
