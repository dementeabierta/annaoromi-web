// =============================================================================
// Anna Oromi — Sistema de traducción ES / EN
// =============================================================================

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Diccionario de traducciones
  // ---------------------------------------------------------------------------
  var t = {

    // ── NAVEGACIÓN & FOOTER (comunes a todas las páginas) ───────────────────
    'nav.home':           { es: 'Inicio',   en: 'Home' },
    'nav.about':          { es: 'Sobre mí', en: 'About' },
    'nav.contact':        { es: 'Contacto', en: 'Contact' },
    'nav.toggle.aria':    { es: 'Abrir menú', en: 'Open menu' },
    'nav.logo.aria':      { es: 'Anna Oromi — Inicio', en: 'Anna Oromi — Home' },

    'footer.tagline':     { es: 'Psicóloga · Escritora<br>Palma de Mallorca',
                            en: 'Psychologist · Writer<br>Palma de Mallorca' },
    'footer.nav.label':   { es: 'Navegación del pie', en: 'Footer navigation' },
    'footer.copyright':   { es: '© 2025 Anna Oromi. Todos los derechos reservados.',
                            en: '© 2025 Anna Oromi. All rights reserved.' },
    'footer.made':        { es: 'Hecho con curiosidad y cuidado.',
                            en: 'Made with curiosity and care.' },

    // ── INDEX ────────────────────────────────────────────────────────────────
    'index.hero.label':   { es: 'Psicóloga · Escritora',
                            en: 'Psychologist · Writer' },
    'index.hero.quote':   { es: '«Cada rostro es una historia en movimiento;<br>la psicoterapia ayuda a unir sus fragmentos.»',
                            en: '«Every face is a story in motion;<br>psychotherapy helps to weave its fragments together.»' },
    'index.hero.discover':{ es: 'Descúbreme',   en: 'Discover me' },
    'index.hero.talk':    { es: 'Hablemos',      en: "Let's talk" },

    'index.about.label':  { es: 'Sobre mí',      en: 'About me' },
    'index.about.h2':     { es: 'Ciencia con imaginación.',
                            en: 'Science with imagination.' },
    'index.about.lead':   { es: 'Soy psicóloga con interés en el colectivo de personas mayores: envejecimiento activo, proyectos intergeneracionales y los factores que hacen posible envejecer con plenitud. Creo que el autoconocimiento es la herramienta más valiosa que tenemos, y la psicoterapia, el camino más honesto para desarrollarla.',
                            en: 'I am a psychologist focused on the elderly: active ageing, intergenerational projects, and the factors that make it possible to grow old with fulfilment. I believe self-knowledge is the most valuable tool we have, and psychotherapy the most honest path to develop it.' },
    'index.about.p':      { es: 'Vivo en Palma de Mallorca y me muevo entre el rigor académico y la imaginación creativa. Soy también escritora, masajista holística y creadora del oráculo <em>Luz o Cruz</em>. Todo forma parte de un mismo hilo: acompañar a las personas en el arte de reconocerse a sí mismas.',
                            en: 'I live in Palma de Mallorca, moving between academic rigour and creative imagination. I am also a writer, holistic massage therapist and creator of the oracle <em>Luz o Cruz</em>. Everything is part of the same thread: accompanying people in the art of knowing themselves.' },
    'index.about.btn':    { es: 'Conocerme mejor →', en: 'Get to know me →' },

    'index.pullquote1':   { es: '«Envejecer no es perder el futuro.<br>Es aprender a habitar el presente<br>con toda la sabiduría del pasado.»',
                            en: '«Ageing is not losing the future.<br>It is learning to inhabit the present<br>with all the wisdom of the past.»' },
    'index.pullquote1.cite': { es: '— Anna Oromi', en: '— Anna Oromi' },

    'index.mundos.label': { es: 'Mis mapas',  en: 'My maps' },
    'index.mundos.h2':    { es: 'Cada camino lleva al mismo lugar',
                            en: 'Every path leads to the same place' },
    'index.mundos.p':     { es: 'Exploro la salud humana desde varios ángulos.',
                            en: 'I explore human health from multiple angles.' },

    'index.card.escritura.h3':   { es: 'Escritura y Edición', en: 'Writing & Editing' },
    'index.card.escritura.p':    { es: 'Autora biográfica, editora y correctora. Las palabras son el mapa del territorio interior.',
                                   en: 'Biographical author, editor and proofreader. Words are the map of inner territory.' },
    'index.card.escritura.link': { es: 'Explorar →', en: 'Explore →' },

    'index.card.almasaje.h3':    { es: 'Almasaje', en: 'Almasaje' },
    'index.card.almasaje.p':     { es: 'Sesiones que combinan masaje californiano, reflexología tailandesa y arteterapia. El cuerpo como primer hogar; el tacto, su idioma.',
                                   en: 'Sessions combining Californian massage, Thai reflexology and art therapy. The body as first home; touch, its language.' },
    'index.card.almasaje.link':  { es: 'Explorar →', en: 'Explore →' },

    'index.card.oraculo.h3':     { es: 'Luz o Cruz', en: 'Luz o Cruz' },
    'index.card.oraculo.p':      { es: 'Un oráculo de exploración interior nacido de la sabiduría de una monja centenaria. Para cuando las preguntas pesan más que las respuestas.',
                                   en: 'An inner exploration oracle born from the wisdom of a centenarian nun. For when questions weigh more than answers.' },
    'index.card.oraculo.link':   { es: 'Explorar →', en: 'Explore →' },

    'index.card.reduccion.h3':   { es: 'Reducción de Riesgos', en: 'Harm Reduction' },
    'index.card.reduccion.p':    { es: 'Diseño educativo y voluntariado para colectivos de salud en espacios de ocio nocturno. Arte y comunidad al servicio de la prevención y promoción de la salud.',
                                   en: 'Educational design and volunteering for health groups in nightlife spaces. Art and community in service of health prevention and promotion.' },
    'index.card.reduccion.link': { es: 'Voluntariado activo', en: 'Active volunteering' },

    'index.esp.label':    { es: 'Especialización', en: 'Specialisation' },
    'index.esp.h2':       { es: 'Aprender a envejecer<br>es el proyecto de toda una vida.',
                            en: 'Learning to age<br>is a lifelong project.' },
    'index.esp.lead':     { es: 'Mi trabajo tiene un foco claro: el colectivo de personas mayores. Creo que la forma en que envejecemos depende, en gran medida, de cómo nos relacionamos con nosotros mismos, con las generaciones que nos rodean y con el tiempo que aún tenemos por delante.',
                            en: 'My work has a clear focus: the elderly. I believe the way we age depends, to a great extent, on how we relate to ourselves, to the generations around us, and to the time we still have ahead.' },
    'index.esp.p':        { es: 'Los <strong>proyectos intergeneracionales</strong>, los factores del <strong>envejecimiento saludable</strong> y la promoción del <strong>envejecimiento activo</strong> son la base de mi práctica. Y el <strong>autoconocimiento</strong> es el hilo que lo conecta todo: somos nosotros mismos quienes nos acompañaremos en todas las etapas de la vida.',
                            en: '<strong>Intergenerational projects</strong>, factors of <strong>healthy ageing</strong> and the promotion of <strong>active ageing</strong> are the foundation of my practice. And <strong>self-knowledge</strong> is the thread that connects everything: we ourselves are the ones who will accompany us through all stages of life.' },
    'index.tag.mayores':          { es: 'Personas mayores',   en: 'Elderly people' },
    'index.tag.activo':           { es: 'Envejecimiento activo', en: 'Active ageing' },
    'index.tag.intergeneracional':{ es: 'Intergeneracional',  en: 'Intergenerational' },
    'index.tag.autoconocimiento': { es: 'Autoconocimiento',   en: 'Self-knowledge' },
    'index.tag.psicoterapia':     { es: 'Psicoterapia',       en: 'Psychotherapy' },
    'index.tag.creatividad':      { es: 'Creatividad',        en: 'Creativity' },
    'index.esp.btn':      { es: 'Contactar →', en: 'Contact →' },

    'index.cta.label':    { es: '¿Empezamos?', en: "Shall we start?" },
    'index.cta.h2':       { es: 'Todo comienza con una pregunta.',
                            en: 'Everything begins with a question.' },
    'index.cta.lead':     { es: 'Sea cual sea el camino que buscas —psicológico, corporal, literario o simbólico— aquí hay un espacio para explorar. La primera conversación siempre es la más reveladora.',
                            en: 'Whatever path you seek —psychological, bodily, literary or symbolic— there is a space here to explore. The first conversation is always the most revealing.' },
    'index.cta.btn':      { es: 'Escribirme →', en: 'Write to me →' },

    // ── SOBRE MÍ ─────────────────────────────────────────────────────────────
    'sobremi.page.label': { es: 'Sobre mí', en: 'About me' },
    'sobremi.page.h1':    { es: 'El mapa de un alma<br>con muchos caminos',
                            en: 'The map of a soul<br>with many paths' },
    'sobremi.page.lead':  { es: 'Psicóloga para la prevención y promoción de la salud, con herramientas como la terapia Gestalt y el arte.',
                            en: 'Psychologist for health prevention and promotion, using tools such as Gestalt therapy and art.' },

    'sobremi.bio.label':  { es: 'Visión', en: 'Vision' },
    'sobremi.bio.h2':     { es: 'Ciencia que mira<br>con ternura', en: 'Science that looks<br>with tenderness' },
    'sobremi.bio.lead':   { es: 'Estoy cursando el Máster en Psicología General Sanitaria con foco en el colectivo de personas mayores y hábitos para el envejecimiento activo (pro-aging).',
                            en: 'I am studying a Master\'s in General Health Psychology with a focus on the elderly and habits for active ageing (pro-ageing).' },
    'sobremi.bio.p1':     { es: 'Mi trabajo nace de una convicción: aprender a envejecer es una de las tareas más importantes de la vida, y comienza mucho antes de llegar a mayor. El <strong>autoconocimiento</strong> es la herramienta para habitar el envejecimiento con plenitud.',
                            en: 'My work is born from a conviction: learning to age is one of the most important tasks in life, and it begins long before we grow old. <strong>Self-knowledge</strong> is the tool for inhabiting ageing with fulfilment.' },
    'sobremi.bio.p2':     { es: 'Somos nosotros mismos quienes nos acompañaremos en todas las etapas de la vida. Por eso la psicoterapia, combinada con la creatividad, no es solo un espacio para resolver problemas: es un camino para <strong>madurar</strong> y construir el propio recorrido vital con más conciencia y libertad.',
                            en: 'We ourselves are the ones who will accompany us through all stages of life. That is why psychotherapy, combined with creativity, is not just a space to solve problems: it is a path to <strong>grow</strong> and build one\'s own life journey with greater awareness and freedom.' },
    'sobremi.tag.master': { es: 'Máster en Psicología General Sanitaria', en: 'Master\'s in Health Psychology' },
    'sobremi.tag.mayores':{ es: 'Personas mayores',   en: 'Elderly people' },
    'sobremi.tag.activo': { es: 'Envejecimiento activo', en: 'Active ageing' },
    'sobremi.tag.auto':   { es: 'Autoconocimiento',   en: 'Self-knowledge' },
    'sobremi.tag.psi':    { es: 'Psicoterapia y creatividad', en: 'Psychotherapy & creativity' },

    'sobremi.pullquote':  { es: '«El cerebro humano evolucionó para la cooperación,<br>el cuidado y el aprendizaje compartido.»',
                            en: '«The human brain evolved for cooperation,<br>care and shared learning.»' },

    'sobremi.ctx.label':  { es: 'El contexto', en: 'The context' },
    'sobremi.ctx.h2':     { es: 'Palma de Mallorca,<br>entre el mar y la raíz',
                            en: 'Palma de Mallorca,<br>between the sea and the roots' },
    'sobremi.ctx.p1':     { es: 'Vivo en Palma de Mallorca: trabajo con personas mayores, y desde aquí ofrezco también sesiones online.',
                            en: 'I live in Palma de Mallorca: I work with the elderly, and from here I also offer online sessions.' },
    'sobremi.ctx.p2':     { es: 'Atender en español, catalán, inglés y alemán me permite acompañar a personas de culturas y trayectorias muy distintas, con una mirada intercultural.',
                            en: 'Working in Spanish, Catalan, English and German allows me to accompany people from very different cultures and backgrounds, with an intercultural perspective.' },
    'sobremi.ctx.p3':     { es: 'Creo que los mejores terapeutas son quienes también han aprendido a perderse —y a encontrarse— en territorios desconocidos.',
                            en: 'I believe the best therapists are those who have also learned to get lost —and to find themselves— in unknown territories.' },

    'sobremi.fil.label':  { es: 'La filosofía', en: 'The philosophy' },
    'sobremi.fil.h2':     { es: 'La curiosidad como método', en: 'Curiosity as a method' },
    'sobremi.fil.p1':     { es: 'Alicia no cayó por el agujero por accidente. Cayó porque algo la llamó desde dentro. Esa es, para mí, la metáfora perfecta del trabajo psicológico: no se trata de corregir errores, sino de seguir la curiosidad hasta sus últimas consecuencias.',
                            en: 'Alice did not fall down the hole by accident. She fell because something called to her from within. That is, for me, the perfect metaphor for psychological work: it is not about correcting mistakes, but about following curiosity to its ultimate consequences.' },
    'sobremi.fil.p2':     { es: 'Mi enfoque es integrador. Combino herramientas de la psicología clínica con sensibilidad hacia el cuerpo, la creatividad y lo simbólico. Porque el ser humano no cabe en una sola disciplina.',
                            en: 'My approach is integrative. I combine clinical psychology tools with sensitivity towards the body, creativity and the symbolic. Because the human being does not fit within a single discipline.' },
    'sobremi.fil.p3':     { es: 'Trabajo con la convicción de que <strong>conocerse a una misma es el mayor acto de valentía</strong> —y también el más transformador.',
                            en: 'I work with the conviction that <strong>knowing oneself is the greatest act of courage</strong> —and also the most transformative.' },

    'sobremi.facetas.label': { es: 'Mis facetas', en: 'My facets' },
    'sobremi.facetas.h2':    { es: 'Más allá de la consulta', en: 'Beyond the clinic' },
    'sobremi.facetas.desc':  { es: 'La psicología es mi hogar. Pero tengo otros mundos que también me hablan —y que me enseñan a ser mejor terapeuta.',
                               en: 'Psychology is my home. But I have other worlds that speak to me —and that teach me to be a better therapist.' },
    'sobremi.box1.h4':    { es: '✍️ Escritora y editora', en: '✍️ Writer and editor' },
    'sobremi.box1.p':     { es: 'Autora biográfica, correctora y prologuista. La escritura es el primer espacio donde aprendí a escuchar las historias de otros.',
                            en: 'Biographical author, proofreader and preface writer. Writing is the first space where I learned to listen to others\' stories.' },
    'sobremi.box1.link':  { es: 'Ver mis obras →', en: 'See my works →' },
    'sobremi.box2.h4':    { es: '🌿 Masajista holística', en: '🌿 Holistic massage therapist' },
    'sobremi.box2.p':     { es: 'Sesiones Almasaje que combinan masaje californiano, reflexología y arteterapia. El cuerpo sabe cosas que la mente tarda años en procesar.',
                            en: 'Almasaje sessions combining Californian massage, reflexology and art therapy. The body knows things the mind takes years to process.' },
    'sobremi.box2.link':  { es: 'Sobre Almasaje →', en: 'About Almasaje →' },
    'sobremi.box3.h4':    { es: '🃏 Creadora de oráculos', en: '🃏 Oracle creator' },
    'sobremi.box3.p':     { es: '<em>Luz o Cruz</em>: un sistema de cartas para la exploración interior, inspirado en la sabiduría de mi tía-abuela monja que vivió 103 años.',
                            en: '<em>Luz o Cruz</em>: a card system for inner exploration, inspired by the wisdom of my great-aunt, a nun who lived 103 years.' },
    'sobremi.box3.link':  { es: 'Conocer el oráculo →', en: 'Discover the oracle →' },

    'sobremi.cta.label':  { es: '¿Conectamos?', en: 'Shall we connect?' },
    'sobremi.cta.h2':     { es: 'Si algo de todo esto resuena contigo,<br>me alegra que hayas llegado hasta aquí.',
                            en: 'If any of this resonates with you,<br>I am glad you made it here.' },
    'sobremi.cta.lead':   { es: 'No importa desde qué puerta entres —la psicología, el cuerpo, las palabras o las cartas—. Todas llevan al mismo lugar.',
                            en: 'It does not matter which door you enter through —psychology, the body, words or cards—. They all lead to the same place.' },
    'sobremi.cta.btn':    { es: 'Escribirme →', en: 'Write to me →' },

    // ── CONTACTO ─────────────────────────────────────────────────────────────
    'contacto.page.label':{ es: 'Contacto', en: 'Contact' },
    'contacto.page.h1':   { es: 'Todo empieza<br>con una pregunta', en: 'Everything starts<br>with a question' },
    'contacto.page.lead': { es: 'No importa desde qué puerta entres. Escríbeme y veremos juntas qué camino tiene más sentido para ti.',
                            en: 'It does not matter which door you enter through. Write to me and we will see together which path makes most sense for you.' },

    'contacto.info.label':{ es: 'Información', en: 'Information' },
    'contacto.info.h2':   { es: 'Estoy aquí', en: 'I am here' },
    'contacto.info.lead': { es: 'Puedes escribirme sobre cualquiera de mis áreas de trabajo: psicología, escritura, Almasaje, el oráculo o cualquier otro proyecto.',
                            en: 'You can write to me about any of my areas of work: psychology, writing, Almasaje, the oracle or any other project.' },
    'contacto.info.p':    { es: 'Respondo a todos los mensajes con atención. Si tienes dudas sobre si lo que necesitas encaja con lo que ofrezco, escríbelas tal cual: la honestidad siempre es el mejor punto de partida.',
                            en: 'I respond to all messages attentively. If you are unsure whether what you need fits with what I offer, write it as it is: honesty is always the best starting point.' },

    'contacto.loc.h4':    { es: 'Ubicación', en: 'Location' },
    'contacto.loc.p':     { es: 'Palma de Mallorca<br>Sesiones presenciales (Mallorca) y online',
                            en: 'Palma de Mallorca<br>In-person sessions (Mallorca) and online' },
    'contacto.lang.h4':   { es: 'Idiomas', en: 'Languages' },
    'contacto.lang.p':    { es: 'Español · Catalán · Inglés · Alemán',
                            en: 'Spanish · Catalan · English · German' },
    'contacto.ig.h4':     { es: 'Instagram', en: 'Instagram' },
    'contacto.tiempo.h4': { es: 'Tiempo de respuesta', en: 'Response time' },
    'contacto.tiempo.p':  { es: 'Habitualmente en 48 horas laborables.',
                            en: 'Usually within 48 working hours.' },

    'contacto.quien.h4':  { es: 'Para quienes se hacen preguntas', en: 'For those asking questions' },
    'contacto.quien.desc':{ es: 'Mi trabajo puede ser útil si...', en: 'My work may be useful if...' },
    'contacto.li1':       { es: 'Estás atravesando una transición vital importante (jubilación, pérdida, cambio de país, envejecimiento propio o de alguien cercano).',
                            en: 'You are going through an important life transition (retirement, loss, moving country, your own ageing or that of someone close to you).' },
    'contacto.li2':       { es: 'Sientes que la relación con la tecnología —tuya o de alguien que quieres— está afectando al bienestar emocional.',
                            en: 'You feel that your relationship with technology —or that of someone you love— is affecting emotional wellbeing.' },
    'contacto.li3':       { es: 'Quieres acompañar a una persona mayor de forma más consciente y no sabes por dónde empezar.',
                            en: 'You want to accompany an elderly person more consciously and do not know where to start.' },
    'contacto.li4':       { es: 'Simplemente necesitas un espacio seguro donde poder pensar en voz alta, sin que nadie te juzgue ni te dé respuestas antes de haberlas encontrado tú.',
                            en: 'You simply need a safe space to think out loud, without anyone judging you or giving you answers before you have found them yourself.' },

    'form.success':       { es: '✓ Mensaje enviado. Te responderé en breve. Gracias por escribirme.',
                            en: '✓ Message sent. I will reply shortly. Thank you for writing.' },
    'form.error':         { es: 'Ha ocurrido un error. Por favor, inténtalo de nuevo o escríbeme directamente por Instagram.',
                            en: 'An error occurred. Please try again or write to me directly on Instagram.' },
    'form.nombre.label':  { es: 'Nombre', en: 'Name' },
    'form.nombre.placeholder': { es: 'Tu nombre', en: 'Your name' },
    'form.email.placeholder':  { es: 'tu@email.com', en: 'your@email.com' },
    'form.motivo.label':  { es: '¿Por qué me escribes?', en: 'Why are you writing?' },
    'form.motivo.default':{ es: 'Elige una opción (opcional)', en: 'Choose an option (optional)' },
    'form.motivo.psi':    { es: 'Consulta de psicología', en: 'Psychology consultation' },
    'form.motivo.alm':    { es: 'Reservar sesión Almasaje', en: 'Book an Almasaje session' },
    'form.motivo.esc':    { es: 'Proyecto editorial', en: 'Editorial project' },
    'form.motivo.ora':    { es: 'Oráculo Luz o Cruz', en: 'Luz o Cruz oracle' },
    'form.motivo.otro':   { es: 'Otro', en: 'Other' },
    'form.mensaje.label': { es: 'Tu mensaje', en: 'Your message' },
    'form.mensaje.placeholder': { es: 'Cuéntame qué te trae por aquí. No hay manera equivocada de empezar.',
                                  en: 'Tell me what brings you here. There is no wrong way to start.' },
    'form.submit':        { es: 'Enviar mensaje →', en: 'Send message →' },
    'form.privacy':       { es: 'Tus datos se usan exclusivamente para responder a tu mensaje y nunca se ceden a terceros.',
                            en: 'Your data is used solely to reply to your message and is never shared with third parties.' },

    'contacto.pullquote': { es: '«¿Quién eres tú?»', en: '«Who are you?»' },
    'contacto.pullquote.cite': { es: '— La oruga, a Alicia.<br>La pregunta más breve contiene el viaje más largo. Si estás lista para comenzarlo, aquí estoy.',
                                 en: '— The Caterpillar, to Alice.<br>The shortest question contains the longest journey. If you are ready to begin, I am here.' },

    // ── ESCRITURA ────────────────────────────────────────────────────────────
    'escritura.page.label':{ es: 'Escritura y Edición', en: 'Writing & Editing' },
    'escritura.page.h1':   { es: 'Las palabras son<br>el primer mapa', en: 'Words are<br>the first map' },
    'escritura.page.lead': { es: 'Escribir una historia es encontrarla. Editar una historia es ayudar a quien la tiene a que la reconozca como suya.',
                             en: 'Writing a story is finding it. Editing a story is helping the one who holds it to recognise it as their own.' },

    'escritura.about.label':{ es: 'Mi trabajo con las palabras', en: 'My work with words' },
    'escritura.about.h2':   { es: 'Escribir es un acto<br>de arqueología interior',
                              en: 'Writing is an act<br>of inner archaeology' },
    'escritura.about.lead': { es: 'Antes de ser psicóloga, era escritora. O quizás ambas cosas surgieron del mismo lugar: la convicción de que contar una vida —bien contada— tiene poder transformador.',
                              en: 'Before being a psychologist, I was a writer. Or perhaps both things arose from the same place: the conviction that telling a life —told well— has transformative power.' },
    'escritura.about.p':    { es: 'He trabajado como autora biográfica, como editora de poesía, como prologuista y como correctora de textos en castellano, catalán y alemán. Cada proyecto es diferente, pero todos parten del mismo principio: respetar la voz de quien escribe mientras se la ayuda a brillar con más claridad.',
                              en: 'I have worked as a biographical author, poetry editor, preface writer and proofreader in Spanish, Catalan and German. Each project is different, but all start from the same principle: respecting the voice of the writer while helping it shine with greater clarity.' },

    'escritura.obras.label':{ es: 'Obras', en: 'Works' },
    'escritura.obras.h2':   { es: 'Los libros que han pasado<br>por mis manos',
                              en: 'The books that have passed<br>through my hands' },

    'libro1.role':  { es: 'Autora', en: 'Author' },
    'libro1.h3':    { es: 'Biografía de una monja centenaria', en: 'Biography of a centenarian nun' },
    'libro1.meta1': { es: '220 páginas', en: '220 pages' },
    'libro1.meta2': { es: 'Castellano', en: 'Spanish' },
    'libro1.meta3': { es: 'Autopublicado · Diseño AlfaBooks', en: 'Self-published · AlfaBooks design' },
    'libro1.p':     { es: 'Relatos y análisis de la vida de una monja sabia y longeva, dotada de una mente extraordinariamente amorosa. Una exploración biográfica con perspectiva terapéutica, que recoge la memoria de una mujer que habitó 103 años con plena conciencia. La historia que está en el origen de todo: este libro es también la semilla del oráculo <em>Luz o Cruz</em>.',
                     en: 'Stories and analysis of the life of a wise and long-lived nun, gifted with an extraordinarily loving mind. A biographical exploration with a therapeutic perspective, collecting the memory of a woman who lived 103 years with full awareness. The story that is at the origin of everything: this book is also the seed of the oracle <em>Luz o Cruz</em>.' },
    'libro1.tag1':  { es: 'Biografía', en: 'Biography' },
    'libro1.tag2':  { es: 'Envejecimiento', en: 'Ageing' },
    'libro1.tag3':  { es: 'Memoria', en: 'Memory' },
    'libro1.tag4':  { es: 'Vida contemplativa', en: 'Contemplative life' },

    'libro2.role':  { es: 'Prólogo y edición', en: 'Preface and editing' },
    'libro2.h3':    { es: 'Poemario de Aguedo Fernández', en: 'Poetry collection by Aguedo Fernández' },
    'libro2.meta1': { es: '230 páginas', en: '230 pages' },
    'libro2.meta2': { es: 'Catalán · Castellano', en: 'Catalan · Spanish' },
    'libro2.p':     { es: 'Recopilación de dos décadas de poesía de Aguedo Fernández. Me ocupé del prólogo literario y de la edición con AlfaBooks del volumen: un trabajo de escucha y de cuidado hacia una voz poética que merecía ser recogida con rigor y ternura.',
                     en: 'A compilation of two decades of poetry by Aguedo Fernández. I was responsible for the literary preface and the editing with AlfaBooks: a work of listening and care towards a poetic voice that deserved to be gathered with rigour and tenderness.' },
    'libro2.tag1':  { es: 'Poesía', en: 'Poetry' },
    'libro2.tag2':  { es: 'Edición', en: 'Editing' },
    'libro2.tag3':  { es: 'Prólogo', en: 'Preface' },
    'libro2.tag4':  { es: 'Bilingüe', en: 'Bilingual' },
    'libro2.pdf':   { es: '📄 Leer muestra (PDF · 20 págs.)', en: '📄 Read sample (PDF · 20 pp.)' },

    'libro3.role':  { es: 'Correctora de traducción', en: 'Translation proofreader' },
    'libro3.h3':    { es: 'Manual para artistas de gira', en: 'Manual for touring artists' },
    'libro3.meta1': { es: '612 páginas', en: '612 pages' },
    'libro3.meta2': { es: 'Castellano', en: 'Spanish' },
    'libro3.meta3': { es: 'Liburuak · Bilbao', en: 'Liburuak · Bilbao' },
    'libro3.p':     { es: 'Guía de salud y bienestar para músicos y artistas en gira, escrita originalmente por Tamsin Embleton. Realicé la corrección completa de la traducción al castellano para la editorial Liburuak. Un texto en la intersección perfecta entre mis dos mundos: la psicología del bienestar y la escritura al servicio de quien cuida a otros.',
                     en: 'Health and wellbeing guide for musicians and touring artists, originally written by Tamsin Embleton. I carried out the full proofreading of the Spanish translation for Liburuak. A text at the perfect intersection of my two worlds: wellbeing psychology and writing in service of those who care for others.' },
    'libro3.tag1':  { es: 'Corrección', en: 'Proofreading' },
    'libro3.tag2':  { es: 'Salud', en: 'Health' },
    'libro3.tag3':  { es: 'Bienestar', en: 'Wellbeing' },
    'libro3.tag4':  { es: 'Traducción', en: 'Translation' },

    'libro4.role':  { es: 'Editora', en: 'Editor' },
    'libro4.h3':    { es: 'Entrevista biográfica (alemán)', en: 'Biographical interview (German)' },
    'libro4.meta1': { es: '36 páginas', en: '36 pages' },
    'libro4.meta2': { es: 'Alemán', en: 'German' },
    'libro4.p':     { es: 'El testimonio de una mujer obligada a desarrollar una carrera artística que no eligió —y la personalidad extrovertida que construyó como mecanismo de adaptación. Edité este texto en alemán prestando especial atención a la coherencia narrativa y al respeto por la voz de la protagonista.',
                     en: 'The testimony of a woman forced to develop an artistic career she did not choose —and the extroverted personality she built as an adaptation mechanism. I edited this German text paying special attention to narrative coherence and respect for the protagonist\'s voice.' },
    'libro4.tag1':  { es: 'Alemán', en: 'German' },
    'libro4.tag2':  { es: 'Biografía', en: 'Biography' },
    'libro4.tag3':  { es: 'Identidad', en: 'Identity' },
    'libro4.tag4':  { es: 'Edición', en: 'Editing' },
    'libro4.link':  { es: '📄 Leer muestra (Google Drive)', en: '📄 Read sample (Google Drive)' },

    'escritura.pullquote':      { es: '«Una historia bien contada<br>no solo describe lo que pasó.<br>Revela quién eres ahora.»',
                                  en: '«A well-told story<br>does not only describe what happened.<br>It reveals who you are now.»' },
    'escritura.pullquote.cite': { es: '— Anna Oromi', en: '— Anna Oromi' },

    'servicios.label':  { es: 'Servicios', en: 'Services' },
    'servicios.h2':     { es: '¿Tienes un texto que necesita cuidado?', en: 'Do you have a text that needs care?' },
    'servicios.desc':   { es: 'Trabajo con proyectos que merecen atención y respeto. Estos son los servicios que ofrezco.',
                          en: 'I work with projects that deserve attention and respect. These are the services I offer.' },
    'servicio1.h3':     { es: 'Escritura biográfica', en: 'Biographical writing' },
    'servicio1.p':      { es: 'Acompaño el proceso de escribir una memoria, una autobiografía o la historia de alguien querido. Entrevista, estructura, redacción y edición final.',
                          en: 'I accompany the process of writing a memoir, autobiography or the story of a loved one. Interview, structure, drafting and final editing.' },
    'servicio2.h3':     { es: 'Edición y corrección', en: 'Editing and proofreading' },
    'servicio2.p':      { es: 'Corrección ortotipográfica y estilística de textos en castellano, catalán y alemán. Respeto escrupuloso por la voz del autor.',
                          en: 'Typographical and stylistic proofreading of texts in Spanish, Catalan and German. Scrupulous respect for the author\'s voice.' },
    'servicio3.h3':     { es: 'Prólogos literarios', en: 'Literary prefaces' },
    'servicio3.p':      { es: 'Escritura de prólogos que sitúan la obra en su contexto y dan al lector las herramientas para adentrarse en ella con más profundidad.',
                          en: 'Writing prefaces that place the work in its context and give the reader the tools to engage with it more deeply.' },
    'servicios.btn':    { es: 'Hablar sobre tu proyecto →', en: 'Talk about your project →' },

    // ── ALMASAJE ─────────────────────────────────────────────────────────────
    'almasaje.page.label':{ es: 'Almasaje', en: 'Almasaje' },
    'almasaje.page.h1':   { es: 'El cuerpo sabe<br>lo que la mente olvida',
                            en: 'The body knows<br>what the mind forgets' },
    'almasaje.page.lead': { es: 'Sesiones que combinan masaje californiano, reflexología tailandesa y arteterapia. Una experiencia de presencia, escucha y conexión profunda entre el cuerpo y el alma.',
                            en: 'Sessions combining Californian massage, Thai reflexology and art therapy. An experience of presence, listening and deep connection between body and soul.' },

    'almasaje.que.label': { es: '¿Qué es Almasaje?', en: 'What is Almasaje?' },
    'almasaje.que.h2':    { es: 'Un masaje del alma,<br>tanto como del cuerpo',
                            en: 'A massage of the soul,<br>as much as of the body' },
    'almasaje.que.lead':  { es: '<em>Almasaje</em> nació de la convicción de que el cuerpo no es solo carne y músculo: es el lugar donde vivimos, donde guardamos lo que no sabemos decir, donde el tiempo deja sus marcas más honestas.',
                            en: '<em>Almasaje</em> was born from the conviction that the body is not just flesh and muscle: it is the place where we live, where we store what we cannot say, where time leaves its most honest marks.' },
    'almasaje.que.p1':    { es: 'Cada sesión es diferente porque cada cuerpo llega con su propia historia. Mi trabajo consiste en escuchar esa historia a través del tacto, y responder con presencia, sensibilidad y técnica.',
                            en: 'Each session is different because each body arrives with its own story. My work consists of listening to that story through touch, and responding with presence, sensitivity and technique.' },
    'almasaje.que.p2':    { es: 'No es solo un masaje relajante, aunque la relajación casi siempre aparece. Es una invitación a habitar el propio cuerpo de una manera más consciente y compasiva.',
                            en: 'It is not just a relaxing massage, although relaxation almost always emerges. It is an invitation to inhabit one\'s own body in a more conscious and compassionate way.' },

    'almasaje.elem.label':{ es: 'Los elementos', en: 'The elements' },
    'almasaje.elem.h2':   { es: 'Tres lenguajes,<br>una misma conversación',
                            en: 'Three languages,<br>one same conversation' },
    'californiano.h3':    { es: 'Masaje californiano', en: 'Californian massage' },
    'californiano.p':     { es: 'Originado en el Instituto Esalen (California), este masaje trabaja con movimientos largos, fluidos y envolventes que abarcan el cuerpo como un todo. Profundamente relajante, ayuda a soltar tensiones físicas y emocionales acumuladas.',
                            en: 'Originating at the Esalen Institute (California), this massage works with long, fluid and enveloping movements that encompass the body as a whole. Deeply relaxing, it helps to release accumulated physical and emotional tension.' },
    'reflexologia.h3':    { es: 'Reflexología tailandesa', en: 'Thai reflexology' },
    'reflexologia.p':     { es: 'Trabajo con los puntos reflejos de los pies que corresponden a distintos órganos y sistemas del cuerpo. Una forma de activar la energía vital desde los cimientos, estimular la circulación y equilibrar el sistema nervioso.',
                            en: 'I work with the reflex points on the feet corresponding to different organs and systems of the body. A way of activating vital energy from the foundations, stimulating circulation and balancing the nervous system.' },
    'arteterapia.h3':     { es: 'Arteterapia', en: 'Art therapy' },
    'arteterapia.p':      { es: 'En algunas sesiones, la experiencia corporal se integra con un pequeño ejercicio creativo: dibujar, colorear, escribir una imagen. Una forma de hacer visible lo que el cuerpo ha procesado y que la mente todavía no sabe nombrar.',
                            en: 'In some sessions, the bodily experience is integrated with a small creative exercise: drawing, colouring, writing an image. A way of making visible what the body has processed and the mind does not yet know how to name.' },

    'almasaje.pullquote': { es: '«El tacto es el idioma más antiguo.<br>El primero que aprendemos<br>y el último que olvidamos.»',
                            en: '«Touch is the oldest language.<br>The first we learn<br>and the last we forget.»' },
    'almasaje.pullquote.cite': { es: '— Anna Oromi', en: '— Anna Oromi' },

    'almasaje.esperar.label':{ es: '¿Qué esperar?', en: 'What to expect?' },
    'almasaje.esperar.h2':   { es: 'Una hora para<br>volver a casa', en: 'An hour to<br>come back home' },
    'almasaje.esperar.p1':   { es: 'Cada sesión Almasaje comienza con una breve conversación: ¿cómo llegas hoy? ¿Qué necesita tu cuerpo? No hay respuesta incorrecta.',
                               en: 'Each Almasaje session begins with a brief conversation: how are you arriving today? What does your body need? There is no wrong answer.' },
    'almasaje.esperar.p2':   { es: 'A continuación, la sesión se desarrolla en un espacio íntimo, tranquilo y seguro. La combinación de técnicas se adapta en tiempo real a lo que va surgiendo —porque el cuerpo siempre sabe qué necesita, si le damos espacio para decirlo.',
                               en: 'The session then unfolds in an intimate, calm and safe space. The combination of techniques adapts in real time to what emerges —because the body always knows what it needs, if we give it space to say so.' },
    'almasaje.esperar.p3':   { es: 'Al final, hay tiempo para el silencio, para integrar, para volver al mundo desde un lugar más sereno.',
                               en: 'At the end, there is time for silence, to integrate, to return to the world from a calmer place.' },
    'almasaje.esperar.p4':   { es: 'Las sesiones se realizan en <strong>Palma de Mallorca</strong>, en un espacio privado. Para reservar o preguntar, <a href="contacto.html" style="color: var(--sage); text-decoration: underline;">escríbeme directamente</a>.',
                               en: 'Sessions take place in <strong>Palma de Mallorca</strong>, in a private space. To book or enquire, <a href="contacto.html" style="color: var(--sage); text-decoration: underline;">write to me directly</a>.' },
    'paso1.h4':  { es: 'Bienvenida y escucha', en: 'Welcome and listening' },
    'paso1.p':   { es: 'Breve conversación para entender qué trae cada cuerpo ese día. Sin prisa, sin protocolo.',
                   en: 'Brief conversation to understand what each body brings that day. No rush, no protocol.' },
    'paso2.h4':  { es: 'La sesión', en: 'The session' },
    'paso2.p':   { es: 'Combinación de técnicas adaptada al momento. Presencia total. Espacio seguro.',
                   en: 'Combination of techniques adapted to the moment. Full presence. Safe space.' },
    'paso3.h4':  { es: 'Integración creativa (opcional)', en: 'Creative integration (optional)' },
    'paso3.p':   { es: 'Un pequeño ejercicio de arteterapia para anclar la experiencia corporal en un lenguaje propio.',
                   en: 'A small art therapy exercise to anchor the bodily experience in a personal language.' },
    'paso4.h4':  { es: 'Cierre y silencio', en: 'Closing and silence' },
    'paso4.p':   { es: 'Tiempo para integrar antes de volver al exterior. El cuerpo necesita su propio tiempo de aterrizaje.',
                   en: 'Time to integrate before returning to the outside. The body needs its own landing time.' },

    'almasaje.galeria.label':{ es: 'Imágenes', en: 'Images' },
    'almasaje.galeria.h2':   { es: 'Espacios y momentos', en: 'Spaces and moments' },
    'almasaje.voces.label':  { es: 'Voces', en: 'Voices' },
    'almasaje.voces.h2':     { es: 'Lo que dicen quienes han venido', en: 'What those who have come say' },

    'almasaje.cta.label':{ es: 'Reservar', en: 'Book' },
    'almasaje.cta.h2':   { es: '¿Lista para una sesión?', en: 'Ready for a session?' },
    'almasaje.cta.lead': { es: 'Las sesiones se realizan en Palma de Mallorca. Escríbeme para consultar disponibilidad, tarifas y cualquier pregunta que tengas.',
                           en: 'Sessions take place in Palma de Mallorca. Write to me to check availability, rates and any questions you may have.' },
    'almasaje.cta.btn':  { es: 'Reservar sesión →', en: 'Book a session →' },

    // ── ORÁCULO ──────────────────────────────────────────────────────────────
    'oraculo.page.label':{ es: 'Luz o Cruz', en: 'Luz o Cruz' },
    'oraculo.page.h1':   { es: 'La voz de<br>un alma ardiente', en: 'The voice of<br>a burning soul' },
    'oraculo.page.lead': { es: 'Un sistema de cartas para la exploración interior. Nacido de la sabiduría de una monja que vivió 103 años mirando hacia dentro.',
                           en: 'A card system for inner exploration. Born from the wisdom of a nun who spent 103 years looking inward.' },

    'oraculo.origen.label':{ es: 'El origen', en: 'The origin' },
    'oraculo.origen.h2':   { es: 'Una monja de 103 años<br>y el peso del tiempo',
                             en: 'A 103-year-old nun<br>and the weight of time' },
    'oraculo.origen.lead': { es: 'Hay personas cuya sola presencia parece contener siglos. Mi tía-abuela fue una de ellas.',
                             en: 'There are people whose mere presence seems to contain centuries. My great-aunt was one of them.' },
    'oraculo.origen.p1':   { es: 'Monja durante 85 de sus 103 años, vivió con una intensidad silenciosa que pocos alcanzan. En su mirada había algo que yo, como psicóloga y como sobrina, no podía dejar que se perdiera: una sabiduría sobre el sufrimiento, la conciencia y la transformación interior que solo da el tiempo bien vivido.',
                             en: 'A nun for 85 of her 103 years, she lived with a quiet intensity that few achieve. In her gaze there was something that I, as a psychologist and as a niece, could not let be lost: a wisdom about suffering, awareness and inner transformation that only comes from time well lived.' },
    'oraculo.origen.p2':   { es: '<em>Luz o Cruz</em> es mi forma de preservar esa herencia. Un sistema oracular construido a partir de sus palabras, sus silencios y su particular forma de entender que detrás de toda cruz hay siempre una posibilidad de luz.',
                             en: '<em>Luz o Cruz</em> is my way of preserving that heritage. An oracular system built from her words, her silences and her particular way of understanding that behind every cross there is always a possibility of light.' },
    'oraculo.origen.img.caption': { es: '«¿Qué cruz estás cargando hoy?»', en: '«What cross are you carrying today?»' },

    'oraculo.pullquote':  { es: '«Detrás de todo sufrimiento<br>hay una pregunta que aún<br>no nos hemos atrevido a formular.»',
                            en: '«Behind all suffering<br>there is a question we have not yet<br>dared to ask.»' },
    'oraculo.pullquote.cite': { es: '— Inspirado en la sabiduría de la monja', en: '— Inspired by the nun\'s wisdom' },

    'oraculo.sistema.label':{ es: 'El sistema', en: 'The system' },
    'oraculo.sistema.h2':   { es: 'La mecánica de la revelación', en: 'The mechanics of revelation' },
    'oraculo.sistema.desc': { es: 'Cada carta contiene tres elementos que trabajan juntos para iluminar lo que ya está dentro de ti.',
                              en: 'Each card contains three elements that work together to illuminate what is already inside you.' },
    'la.cruz.h4':    { es: 'La Cruz', en: 'The Cross' },
    'la.cruz.p':     { es: 'Describe una forma universal de sufrimiento humano, extraída del inconsciente colectivo. No tu dolor particular, sino el arquetipo que hay detrás. Verlo desde fuera, con nombre propio, ya es una forma de empezar a comprenderlo.',
                       en: 'Describes a universal form of human suffering, drawn from the collective unconscious. Not your particular pain, but the archetype behind it. Seeing it from the outside, with its own name, is already a way of beginning to understand it.' },
    'la.luz.h4':     { es: 'La Luz', en: 'The Light' },
    'la.luz.p':      { es: 'Una frase de medicina simbólica: palabras que no resuelven el dolor, sino que ofrecen una nueva forma de relacionarse con él. Como un espejo que muestra otro ángulo de lo mismo.',
                       en: 'A phrase of symbolic medicine: words that do not resolve the pain, but offer a new way of relating to it. Like a mirror that shows another angle of the same thing.' },
    'la.conciencia.h4': { es: 'La Conciencia', en: 'The Awareness' },
    'la.conciencia.p':  { es: 'La toma de conciencia necesaria para que algo pueda cambiar. No una solución, sino una invitación a ver con más claridad qué patrón de comportamiento o pensamiento está en juego.',
                          en: 'The awareness necessary for something to be able to change. Not a solution, but an invitation to see more clearly what pattern of behaviour or thought is at play.' },

    'oraculo.proceso.lead': { es: 'El proceso comienza con una pregunta simple: <strong>«¿Qué cruz estoy cargando hoy?»</strong>',
                              en: 'The process begins with a simple question: <strong>«What cross am I carrying today?»</strong>' },
    'oraculo.proceso.p':    { es: 'Tras unos momentos de atención al propio malestar —sea cual sea su forma—, se selecciona una carta. El sistema funciona como un espejo: no dice lo que deberías hacer, sino lo que ya sabes y no te has atrevido a ver.',
                              en: 'After a few moments of attending to one\'s own discomfort —whatever form it takes—, a card is selected. The system works like a mirror: it does not say what you should do, but what you already know and have not dared to see.' },

    'oraculo.cartas.label':{ es: 'Las cartas', en: 'The cards' },
    'oraculo.cartas.h2':   { es: 'Una muestra del mazo', en: 'A sample of the deck' },
    'oraculo.cartas.desc': { es: 'Cada carta es un mundo propio. Estas son algunas de las que componen <em>Luz o Cruz</em>.',
                             en: 'Each card is a world of its own. These are some of the ones that make up <em>Luz o Cruz</em>.' },

    'oraculo.quien.label': { es: '¿Para quién?', en: 'For whom?' },
    'oraculo.quien.h2':    { es: 'Para cuando las palabras<br>no alcanzan', en: 'For when words<br>are not enough' },
    'oraculo.quien.lead':  { es: '<em>Luz o Cruz</em> no es una herramienta de adivinación. Es una herramienta de introspección.',
                             en: '<em>Luz o Cruz</em> is not a divination tool. It is a tool for introspection.' },
    'oraculo.quien.p1':    { es: 'Puede ser útil como complemento a un proceso terapéutico, como práctica personal de reflexión, o simplemente como un ritual cotidiano de escucha interior. No requiere ninguna creencia previa, solo la disposición a mirarse con honestidad.',
                             en: 'It can be useful as a complement to a therapeutic process, as a personal reflection practice, or simply as a daily ritual of inner listening. It requires no prior belief, only the willingness to look at oneself honestly.' },
    'oraculo.quien.p2':    { es: 'También puede ser un regalo profundo para alguien que está atravesando un momento de búsqueda, de pérdida o de transformación.',
                             en: 'It can also be a profound gift for someone going through a moment of searching, loss or transformation.' },
    'oraculo.tag1':        { es: 'Introspección',            en: 'Introspection' },
    'oraculo.tag2':        { es: 'Autoconocimiento',         en: 'Self-knowledge' },
    'oraculo.tag3':        { es: 'Herramienta terapéutica',  en: 'Therapeutic tool' },
    'oraculo.tag4':        { es: 'Práctica personal',        en: 'Personal practice' },
    'oraculo.tag5':        { es: 'Regalo',                   en: 'Gift' },

    'oraculo.cta.label':   { es: 'Adquirir el oráculo', en: 'Get the oracle' },
    'oraculo.cta.h2':      { es: 'Las cartas, en tus manos', en: 'The cards, in your hands' },
    'oraculo.cta.lead':    { es: 'El mazo de <em>Luz o Cruz</em> está disponible en formato físico bajo pedido. Si quieres saber más —sobre el oráculo, su proceso creativo, o cómo adquirirlo—, escríbeme.',
                             en: 'The <em>Luz o Cruz</em> deck is available in physical format on request. If you want to know more —about the oracle, its creative process, or how to get it—, write to me.' },
    'oraculo.cta.btn':     { es: 'Preguntar por el oráculo →', en: 'Ask about the oracle →' }
  };

  // ---------------------------------------------------------------------------
  // Función principal: aplicar traducciones al DOM
  // ---------------------------------------------------------------------------
  function applyLang(lang) {
    // Actualiza html[lang]
    document.documentElement.lang = lang;

    // Textos normales / HTML
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] && t[key][lang] !== undefined) {
        el.innerHTML = t[key][lang];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] && t[key][lang] !== undefined) {
        el.placeholder = t[key][lang];
      }
    });

    // Aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (t[key] && t[key][lang] !== undefined) {
        el.setAttribute('aria-label', t[key][lang]);
      }
    });

    // Actualizar estado visual de los botones
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
    });

    // Guardar preferencia
    try { localStorage.setItem('ao-lang', lang); } catch (e) {}
  }

  // ---------------------------------------------------------------------------
  // Inicialización
  // ---------------------------------------------------------------------------
  function init() {
    var savedLang = 'es';
    try { savedLang = localStorage.getItem('ao-lang') || 'es'; } catch (e) {}
    if (savedLang !== 'es' && savedLang !== 'en') savedLang = 'es';

    applyLang(savedLang);

    // Click en botones EN / ES
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang');
      if (lang) applyLang(lang);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
