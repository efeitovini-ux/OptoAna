# Prompts de mídia · Opto.AnaClaudia

Prompts prontos para gerar as fotos (Gemini) e os vídeos (Google Flow · Veo 3)
do site. **Um prompt por asset.** Copie o bloco inteiro e cole, sem editar.

**Paleta do projeto** (só para referência sua, **não cole os códigos no
prompt**): navy `#18304F` · azul `#1B87AB` · teal `#4E9898` · azul claro
`#A8C8D8` · névoa `#F2F6F8`

> Os geradores leem código de cor como algo para desenhar e colocam uma
> cartela de cores com texto na imagem. Por isso os prompts descrevem as cores
> em palavras.

---

## Antes de gerar, leia isto

**Direção comum a tudo:** casa brasileira real, de classe média. Sala, mesa
de jantar, poltrona, luz de janela. Luz natural suave, tons claros e
arejados, sensação de calma e cuidado.

**Proibido em toda mídia:**
- jaleco, fundo branco de estúdio, ambiente clínico ou hospitalar, sala de espera
- equipamento grande de mesa (só itens portáteis: armação de prova, caixa de lentes de prova, régua, oclusor)
- logotipo de qualquer marca, texto, letras ou números dentro da imagem
- banco de imagem genérico, sorriso posado para a câmera

**A optometrista nunca aparece de rosto.** A única pessoa que pode
representar a Ana Cláudia no site é ela mesma, na foto real
(`ana-claudia-retrato.webp`). Nas imagens geradas, a profissional aparece de
costas, de perfil fora de foco ou só pelas mãos. Quem aparece de frente é
sempre o cliente.

**Depois de gerar:**
- Fotos: converta para **WebP qualidade 80** (squoosh.app resolve) e salve em
  `public/img/` com o nome exato indicado. O placeholder do site some sozinho.
- O card de link (`og-ana-claudia.jpg`) é a única exceção: **JPG**, 1200 × 630.
- Vídeos: veja a seção de vídeo, no fim.

---

# FOTOS · Gemini

> **No Gemini:** antes de enviar, abra **Proporção** e escolha a indicada em
> cada prompt (só existem 1:1, 9:16, 3:4, 4:3 e 16:9, e o site já usa essas
> medidas). **Não escolha nenhum estilo** da galeria (Retrato suave,
> Cinematográfico etc.): eles mudam a luz e a cor. Use o modelo **Pro**.
> Se a imagem vier com algum texto, letra ou logo, descarte e gere de novo.
> Não tente apagar depois.

## 1 · Hero: o exame acontecendo na sala

**3:4** · `hero-exame-casa.webp` · primeira coisa que aparece no site

```
Fotografia editorial, proporção vertical 3:4, de um exame de vista acontecendo
dentro de uma casa brasileira. Uma senhora de cerca de 70 anos, cabelos
grisalhos curtos, blusa de tricô clara, está sentada numa poltrona da sala de
estar, olhando em frente através de uma armação de prova de optometria, com
expressão tranquila e atenta. Uma profissional aparece em primeiro plano, de
costas e fora de foco, só o ombro e a mão segurando a armação diante do rosto
da senhora. A profissional veste roupa comum, sem jaleco.

O ambiente é claramente uma casa: sofá ao fundo, um quadro na parede, um
abajur, uma planta, cortina leve. Luz natural suave entrando por uma janela à
esquerda, sem sombras duras. Foco nítido no rosto da senhora e na armação de
prova; fundo da sala levemente desfocado.

Paleta clara e arejada: branco, madeira clara e azuis suaves, tudo bem claro,
com azul acinzentado bem suave nos detalhes. Estilo de fotografia documental, lente 50mm, f/2, cores
naturais, pele real com textura. Deixe espaço livre na parte de cima do
quadro.

Não inclua nenhum texto, letra, número, logotipo ou marca d'água na imagem.
Não mostre cartela de cores, amostras de cor ou qualquer elemento gráfico:
só a fotografia.
Nada de ambiente clínico, jaleco ou equipamento grande de mesa.
```

## 2 · A maleta de armações aberta na mesa

**4:3** · `maleta-armacoes.webp` · seção "A maleta"

```
Fotografia vista de cima, levemente inclinada, proporção horizontal 4:3, de
uma maleta de armações de óculos aberta sobre uma mesa de jantar de madeira
clara, dentro de uma casa. Dentro da maleta, cerca de vinte armações
organizadas em fileiras ordenadas, em acetato tartaruga, acetato preto, metal
dourado e metal prateado, sem nenhuma marca visível nas hastes.

Sobre a mesa, ao lado da maleta: uma toalha de linho clara dobrada, uma xícara
de café com pires e um pequeno espelho de mesa redondo. Luz natural suave de
uma janela à esquerda, criando reflexos delicados nas lentes de demonstração.

Composição organizada e calma, como um estojo de precisão aberto. Paleta clara
com madeira, branco e azuis suaves, tudo bem claro,
com azul acinzentado bem suave nos detalhes. Lente 35mm,
f/5.6, tudo em foco nas armações. Fotografia realista, sem aparência de
produto de catálogo.

Não inclua nenhum texto, letra, número, logotipo ou marca em nenhuma armação,
na maleta ou no fundo. Não mostre cartela de cores, amostras de cor ou qualquer
elemento gráfico: só a fotografia.
```

## 3 · Card de link do WhatsApp (Open Graph)

**16:9 → recortar para 1200 × 630** · `og-ana-claudia.jpg` (JPG, não WebP)

> É a imagem que aparece quando alguém manda o link do site no WhatsApp.
> O lado esquerdo precisa ficar vazio.

```
Fotografia horizontal 16:9 de uma maleta de armações de óculos aberta sobre
uma mesa de madeira clara dentro de uma casa, ocupando apenas o terço direito
do quadro. Os dois terços da esquerda são um fundo claro, liso e desfocado (uma
parede clara com luz de janela), sem nenhum objeto, como espaço vazio.

Luz natural suave vindo da direita. Paleta clara e arejada em branco, madeira e
azul muito suave, tudo bem claro,
com azul acinzentado bem suave nos detalhes. Lente 35mm, f/2.8. Fotografia
realista e calma.

Não inclua nenhum texto, letra, número, logotipo ou marca d'água na imagem.
Não mostre cartela de cores, amostras de cor ou qualquer elemento gráfico:
só a fotografia.
```

Depois de gerar, recorte em 1200 × 630 mantendo a maleta à direita.

## 4 · Retrato da Ana Cláudia: não gerar

`ana-claudia-retrato.webp` · **3:4** · seção "Quem é a Ana Cláudia"

Esta foto precisa ser **real**. É o rosto dela que cria confiança, e uma
imagem gerada no lugar seria enganosa.

Se ela não tiver uma boa, peça uma nova assim: celular na **vertical** (a câmera
já tira em 3:4, sem recorte), perto
de uma janela, sem flash, fundo de sala (não parede branca), sem jaleco,
sorriso natural, enquadramento da cintura para cima. Converta para WebP e
salve com o nome acima.

---

### Fotos extras (opcionais, o site ainda não usa)

Gere só se for usar no Instagram ou se quiser que eu inclua no site depois.

## 5 · Criança à vontade em casa

**4:3** · `crianca-exame.webp`

```
Fotografia documental horizontal 4:3 de uma menina de cerca de seis anos
sentada à mesa da sala de casa, sorrindo, olhando através de uma armação de
prova de optometria colorida. Uma mão adulta, sem jaleco, segura a armação com
delicadeza ao lado do rosto dela; a pessoa adulta não aparece. A criança está
confortável, no próprio ambiente.

Ao fundo, desfocada, a sala de uma casa comum com janela iluminada e alguns
brinquedos. Luz natural quente e suave. Paleta clara e alegre: branco, madeira
e azul suave, tudo bem claro,
com azul acinzentado bem suave nos detalhes. Lente 50mm, f/2, foco nos olhos da
criança.

Não inclua nenhum texto, letra, número, logotipo ou marca d'água na imagem.
Não mostre cartela de cores, amostras de cor ou qualquer elemento gráfico:
só a fotografia.
Nada de ambiente clínico.
```

## 6 · O óculos pronto sendo ajustado

**4:3** · `entrega-oculos.webp`

```
Fotografia em close, horizontal 4:3, das mãos de uma profissional ajustando a
haste de um óculos novo no rosto de um senhor idoso, dentro de casa. O rosto
dele aparece parcialmente, de perfil, em foco suave; as mãos e o óculos ocupam
o centro do quadro e estão nítidos. A profissional não aparece, só as mãos e o
punho de uma blusa comum, sem jaleco.

Ao fundo, desfocada, a sala de uma casa com luz de janela. Gesto delicado e
cuidadoso. Luz natural quente e suave. Paleta clara: tons de pele, branco e
azul suave, tudo bem claro,
com azul acinzentado bem suave nos detalhes. Lente 85mm, f/2.

Não inclua nenhum texto, letra, número, logotipo ou marca d'água na imagem.
Não mostre cartela de cores, amostras de cor ou qualquer elemento gráfico:
só a fotografia.
```

---

# VÍDEOS · Google Flow (Veo 3)

> **Como usar no Flow:** modelo **Veo 3**, modo *Text to Video* (ou *Frames to
> Video* usando a foto aprovada como primeiro quadro, o que deixa o vídeo
> igual à foto do site). Cada geração tem 8 segundos. Os prompts estão em
> inglês porque o Veo segue a câmera e a luz com mais precisão nessa língua.
>
> **Sobre o site:** os vídeos entram **sem som**, em loop, sempre com uma foto
> no lugar para quem pediu menos movimento no celular. Hoje o site usa só
> fotos. Quando os vídeos estiverem prontos, me avise que eu crio o espaço
> com botão de pausa.
>
> **Óculos nunca entra nem sai do rosto em cena.** O Veo deforma a armação
> nesse movimento. Em todos os prompts o óculos já começa no lugar e fica
> parado. Se mesmo assim a armação "derreter", use *Frames to Video* com uma
> foto do Gemini como primeiro quadro.
>
> **Depois de gerar:** baixe em 1080p e salve em `public/video/` com o nome
> indicado. A conversão para MP4/WebM leve eu faço na hora de colocar no site.

## V1 · Hero em movimento: o foco chegando

**9:16** (o site recorta para 3:4) · `hero-exame-casa.mp4`

O mesmo gesto do site: a imagem começa desfocada e ganha nitidez.

```
Vertical 9:16, 8 seconds, photorealistic documentary style.

Inside a bright Brazilian middle-class living room. An elderly woman around 70,
short grey hair, light knitted cardigan, sits in an armchair looking straight
ahead through an optometry trial frame, calm and attentive. In the foreground,
out of focus and seen from behind, a woman in everyday clothes (no lab coat)
gently holds the trial frame in front of her face; her face is never visible.
The trial frame is already in place from the first frame and stays perfectly
still and rigid the whole time; it is never moved, put on or taken off.

Camera: locked-off tripod shot, no camera movement. The shot starts softly out
of focus and slowly racks into sharp focus on the elderly woman's eyes over
the first 3 seconds, then holds still. She blinks naturally and gives a small,
relaxed smile at the end.

Lighting: soft natural daylight from a window on the left, no harsh shadows.
Background: sofa, framed picture, lamp, plant, sheer curtain, softly blurred.
Colors: airy and light. White walls, pale natural wood, soft misty-blue accents.
50mm lens, shallow depth of field, natural skin texture.

Audio: quiet room ambience only, no music, no speech.

Pure live-action footage only. No color swatches, no palette cards, no
graphics, overlays, captions, text, letters, numbers, logos or watermarks. No clinical setting,
no lab coat, no large tabletop medical equipment.
```

## V2 · A maleta se abrindo na mesa

**16:9** · `maleta-armacoes.mp4`

```
Horizontal 16:9, 8 seconds, photorealistic.

Top-down view, slightly angled, of a closed optician's frame display case on a
light wood dining table inside a home, next to a folded linen napkin and a cup
of coffee. The case is slim and flat, covered in dark brown leather, like a
large jewelry case. It is not a metal briefcase or a tool case.
Two hands in everyday clothing sleeves (no lab coat) slowly lift the lid,
revealing a light fabric-lined interior with around twenty eyeglass frames
neatly arranged in rows: tortoiseshell acetate, black acetate, gold and silver
metal. No brand markings on any frame.

Camera: very slow push-in from above, smooth and steady. After the case opens,
the hands withdraw and the shot rests on the organised frames while window
light catches gentle reflections on the demo lenses.

Lighting: soft natural daylight from a window on the left.
Colors: airy and light. White walls, pale natural wood, soft misty-blue accents.
35mm lens, everything in focus on the frames.

Audio: soft click of the case latch and quiet room ambience, no music, no speech.

Pure live-action footage only. No color swatches, no palette cards, no
graphics, overlays, captions, text, letters, numbers, logos or watermarks.
```

## V3 · Escolhendo a armação diante do espelho

**9:16** · `escolha-espelho.mp4`

A frase da maleta em imagem: "na sua sala, com a sua luz, diante do seu espelho".

```
Vertical 9:16, 8 seconds, photorealistic live-action documentary footage.

Subject: a Brazilian woman in her late 40s, shoulder-length dark hair, natural
look, light linen blouse. She is wearing tortoiseshell eyeglass frames and is
the only focus of the shot.

Action: she stands in her living room facing a round wall mirror and tries on
the glasses. Over the 8 seconds she turns her head slowly to the left, then to
the right, studying the frames in the mirror, and ends with a small, satisfied
smile. We see her face both over her shoulder and in the mirror reflection.

Setting: an ordinary, lived-in Brazilian home. Round mirror on a white wall,
a low wooden sideboard below it with a small plant and a few eyeglass frames
resting on a folded cloth. Light curtains, books, a sofa softly blurred behind.

Camera: medium shot from slightly behind her shoulder, slow gentle push-in
toward the mirror, steady, no shake.

Lighting: warm, soft late-afternoon daylight from a side window.
Colors: airy and light. White walls, pale natural wood, soft misty-blue accents.
50mm lens, shallow depth of field, natural skin texture.

Audio: quiet room ambience only, no music, no speech.

Pure live-action footage only. No color swatches, no palette cards, no
graphics, overlays, captions, text, letters, numbers, logos or watermarks.
No shop counter, no store setting, no metal case.
```

## V4 · A entrega do óculos pronto

**16:9** · `entrega-oculos.mp4`

O óculos **já começa no rosto**. O Veo deforma a armação quando mostra o
óculos sendo colocado, então a cena é o momento depois da entrega: ele
enxergando bem, em casa.

**Para sair mais estável**, use *Frames to Video*. Primeiro gere no Gemini a
foto de partida (prompt logo abaixo, 16:9) e use como primeiro quadro.

Foto de partida (Gemini, **16:9**):

```
Fotografia documental horizontal 16:9 de um senhor de cerca de 75 anos,
cabelos brancos, camisa de botão clara, sentado no sofá da sala de casa,
usando um óculos novo de armação fina de metal prateado, já bem ajustado no
rosto. Ele segura um jornal dobrado no colo e olha para a frente, tranquilo.
Ninguém mais aparece no quadro, nenhuma mão perto do rosto dele.

Ao fundo, desfocada, a sala de uma casa brasileira comum com janela
iluminada, cortina leve e uma planta. Luz natural quente e suave vinda da
janela. Paleta clara: branco, madeira clara e azul acinzentado bem suave.
Lente 85mm, f/2, foco nítido nos olhos e no óculos.

Não inclua nenhum texto, letra, número, logotipo ou marca d'água na imagem.
Não mostre cartela de cores, amostras de cor ou qualquer elemento gráfico:
só a fotografia. Nada de ambiente clínico.
```

Prompt do vídeo (Flow · Veo 3):

```
Horizontal 16:9, 8 seconds, photorealistic live-action documentary footage.

Subject: an elderly Brazilian man around 75, white hair, light button-up
shirt, sitting on the sofa in his living room. He is already wearing new
thin silver metal eyeglasses from the very first frame to the last. The
glasses stay on his face the entire time and never move: nobody touches
them, he does not touch them, they are never put on or taken off.

Action: he unfolds a newspaper on his lap, looks down and reads for a
moment, then looks up toward the window, blinks, and gives a small, genuine
smile, as if seeing clearly again. Slow, calm, natural movements only.

Camera: locked-off tripod shot at eye level, medium close-up, with a very
slight slow push-in. Steady, no shake.

Lighting: warm, soft natural daylight from a window on the left.
Background: softly blurred Brazilian living room, sheer curtain, a plant.
Colors: airy and light. White walls, pale natural wood, soft misty-blue accents.
85mm lens, shallow depth of field, natural skin texture.

Audio: quiet room ambience and soft paper rustle, no music, no speech.

Pure live-action footage only. No color swatches, no palette cards, no
graphics, overlays, captions, text, letters, numbers, logos or watermarks.
No clinical setting, no lab coat, no hands near his face.
```

---

## Ordem de produção

1. **Retrato real da Ana Cláudia** (é o que cria confiança e só depende dela)
2. **Foto 1 · Hero**
3. **Foto 2 · Maleta**
4. **Foto 3 · Card do WhatsApp**
5. Vídeos V1 e V2, se for usar vídeo no site
6. O resto, conforme der

## Checklist antes de colocar no site

- [ ] Nenhum texto, letra, número ou logo dentro da imagem ou do vídeo
- [ ] A profissional nunca aparece de rosto nas mídias geradas
- [ ] Nada de jaleco, fundo branco ou ambiente clínico
- [ ] Mãos e dedos sem deformação (ponto fraco de IA, confira com zoom)
- [ ] Armações sem marca visível
- [ ] Nome do arquivo exatamente como indicado

---

*Documento preparado pela Agência Prumo para handoff de desenvolvimento.*
