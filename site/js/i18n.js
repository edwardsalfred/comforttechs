/* ======================================================================
   Comfort Techs i18n (EN / ES)
   Loaded before main.js so DOM strings are correct on first paint.
   ====================================================================== */
(function () {
  'use strict';

  const I18N = {
    /* page meta */
    'page.title': {
      en: 'Comfort Techs | Your HVAC Lifesaver in San Antonio | AC, Heating, 24/7',
      es: 'Comfort Techs | Tu salvavidas HVAC en San Antonio | A/C, Calefacción, 24/7'
    },
    'page.desc': {
      en: "Comfort Techs is San Antonio's family-owned, NATE-certified HVAC company. Free same-day estimates, 24/7 emergency service, $89/month financing. Amana Newcomer of the Year 2024 & 2025.",
      es: 'Comfort Techs es la compañía HVAC familiar de San Antonio, certificada por NATE. Estimados gratis el mismo día, servicio de emergencia 24/7, financiamiento desde $89/mes. Amana Newcomer of the Year 2024 y 2025.'
    },

    /* nav */
    'nav.services':  { en: 'Services',     es: 'Servicios' },
    'nav.why':       { en: 'Why us',       es: 'Por qué nosotros' },
    'nav.specials':  { en: 'Specials',     es: 'Promociones' },
    'nav.team':      { en: 'Team',         es: 'Equipo' },
    'nav.area':      { en: 'Service area', es: 'Área de servicio' },
    'nav.book':      { en: 'Book service', es: 'Solicitar servicio' },

    /* hero */
    'hero.eyebrow':   { en: 'San Antonio · Family-owned · 24/7',
                        es: 'San Antonio · Empresa familiar · 24/7' },
    'hero.h1':        { en: 'Your HVAC <span class="accent">lifesaver</span><span class="serif">when Texas turns up the heat.</span>',
                        es: 'Tu <span class="accent">salvavidas</span> de aire<span class="serif">cuando Texas sube el calor.</span>' },
    'hero.sub':       { en: "Free same-day estimates. Honest upfront pricing. NATE-certified bilingual technicians on call around the clock. Comfort doesn't wait for business hours.",
                        es: 'Estimados gratis el mismo día. Precios honestos por adelantado. Técnicos bilingües certificados por NATE disponibles a toda hora. La comodidad no espera horario de oficina.' },
    'hero.cta.call':  { en: 'Call (210) 201-0771', es: 'Llama (210) 201-0771' },
    'hero.cta.req':   { en: 'Request service', es: 'Solicitar servicio' },
    'hero.meta.free': { en: 'Free estimate', es: 'Estimado gratis' },
    'hero.meta.tags': { en: '· Same-day · Bilingual', es: '· Mismo día · Bilingüe' },
    'hero.trust.amana': { en: '<b>Amana Newcomer of the Year</b> · 2024 & 2025',
                          es: '<b>Amana Newcomer of the Year</b> · 2024 y 2025' },
    'hero.trust.nate':  { en: '<b>NATE-certified</b> · TACCA · Daikin Comfort Pro',
                          es: '<b>Certificados por NATE</b> · TACCA · Daikin Comfort Pro' },
    'hero.trust.years': { en: '<b><span data-count="70">0</span>+ years</b> combined technician experience',
                          es: '<b><span data-count="70">0</span>+ años</b> de experiencia técnica combinada' },
    'hero.overlay.role': { en: 'Owner · TDLR-licensed since 2006',
                           es: 'Dueño · Licencia TDLR desde 2006' },
    'hero.float.title':  { en: '24/7 Dispatch', es: 'Despacho 24/7' },
    'hero.float.sub':    { en: 'Avg. response · 47 min', es: 'Respuesta prom. · 47 min' },

    /* marquee */
    'marq.amana24':  { en: '<b>Amana</b> Newcomer of the Year 2024',
                       es: '<b>Amana</b> Newcomer of the Year 2024' },
    'marq.amana25':  { en: '<b>Amana</b> Newcomer of the Year 2025',
                       es: '<b>Amana</b> Newcomer of the Year 2025' },
    'marq.nate':     { en: 'NATE-certified Technicians', es: 'Técnicos certificados por NATE' },
    'marq.tacca':    { en: 'TACCA Certified',            es: 'Certificación TACCA' },
    'marq.daikin':   { en: 'Daikin Comfort Pro',         es: 'Daikin Comfort Pro' },
    'marq.warranty': { en: '<b>12-Year</b> Parts &amp; Labor Warranty',
                       es: 'Garantía de <b>12 años</b> en piezas y mano de obra' },
    'marq.tdlr':     { en: 'TDLR-Licensed since 2006', es: 'Licencia TDLR desde 2006' },
    'marq.bilingual':{ en: 'Bilingual · English &amp; Spanish', es: 'Bilingüe · Inglés y Español' },

    /* services */
    'svc.eyebrow': { en: 'What we do', es: 'Lo que hacemos' },
    'svc.h2':      { en: 'Whole-home <span class="serif">comfort, end to end.</span>',
                     es: 'Comodidad total <span class="serif">de principio a fin.</span>' },
    'svc.sub':     { en: 'From a 2 a.m. compressor failure to a top-to-bottom Daikin install, our techs handle every system in your home, plus a few you didn\'t know we did.',
                     es: 'Desde una falla de compresor a las 2 a.m. hasta una instalación Daikin completa, nuestros técnicos atienden todo sistema en tu casa, además de algunos que no sabías que hacíamos.' },

    'svc.1.t':  { en: 'AC Services', es: 'Servicios de A/C' },
    'svc.1.d':  { en: 'Install, repair, maintenance, and tune-ups for every cooling system.',
                  es: 'Instalación, reparación, mantenimiento y afinación para cualquier sistema de enfriamiento.' },
    'svc.2.t':  { en: 'Heating &amp; Furnace', es: 'Calefacción' },
    'svc.2.d':  { en: 'Heat pumps, furnaces, tune-ups built for Texas cold snaps.',
                  es: 'Bombas de calor, calentadores y afinaciones listos para los fríos de Texas.' },
    'svc.3.t':  { en: 'Air Quality', es: 'Calidad del aire' },
    'svc.3.d':  { en: 'Filtration, purifiers, dehumidifiers, humidifiers. Breathe easier.',
                  es: 'Filtración, purificadores, deshumidificadores, humidificadores. Respira mejor.' },
    'svc.4.t':  { en: '24/7 Emergency', es: 'Emergencia 24/7' },
    'svc.4.d':  { en: "Fast bilingual dispatch when comfort can't wait. Day, night, weekend.",
                  es: 'Despacho bilingüe rápido cuando la comodidad no puede esperar. Día, noche, fines de semana.' },
    'svc.5.t':  { en: 'Ventilation &amp; Ductwork', es: 'Ventilación y ductos' },
    'svc.5.d':  { en: 'Air duct cleaning, custom ductwork, and balanced airflow installs.',
                  es: 'Limpieza de ductos, ductos a medida y balanceo de flujo de aire.' },
    'svc.6.t':  { en: 'Smart Thermostats', es: 'Termostatos inteligentes' },
    'svc.6.d':  { en: 'Install and repair for Nest, ecobee, and Daikin smart controls.',
                  es: 'Instalación y reparación de Nest, ecobee y controles inteligentes Daikin.' },
    'svc.7.t':  { en: 'Insulation', es: 'Aislamiento' },
    'svc.7.d':  { en: 'Attic, blown-in, fiberglass, garage, soundproofing. Install or replace.',
                  es: 'Ático, soplado, fibra de vidrio, garaje, insonorización. Instalación o reemplazo.' },
    'svc.8.t':  { en: 'Water Heaters', es: 'Calentadores de agua' },
    'svc.8.d':  { en: 'Tankless and traditional install &amp; repair. Free unit with HVAC swap.',
                  es: 'Instalación y reparación de calentadores sin tanque y tradicionales. Unidad gratis con cambio de HVAC.' },
    'svc.9.t':  { en: 'HVAC Testing', es: 'Pruebas HVAC' },
    'svc.9.d':  { en: 'Carbon monoxide, system evaluation, test &amp; balance diagnostics.',
                  es: 'Monóxido de carbono, evaluación de sistema y diagnóstico de balanceo.' },
    'svc.10.t': { en: 'Mini-Splits', es: 'Mini-splits' },
    'svc.10.d': { en: 'Ductless install, repair, and zoning for any room or addition.',
                  es: 'Instalación sin ductos, reparación y zonificación para cualquier cuarto o ampliación.' },
    'svc.11.t': { en: 'Refrigeration', es: 'Refrigeración' },
    'svc.11.d': { en: 'Home and light commercial refrigeration install and repair.',
                  es: 'Instalación y reparación de refrigeración residencial y comercial ligera.' },
    'svc.12.t': { en: 'Seasonal Maintenance', es: 'Mantenimiento por temporada' },
    'svc.12.d': { en: 'Spring &amp; winter tune-up plans that head off the breakdown.',
                  es: 'Planes de afinación de primavera e invierno que previenen las averías.' },

    /* why */
    'why.eyebrow': { en: 'Why Comfort Techs', es: 'Por qué Comfort Techs' },
    'why.h2':      { en: 'Four reasons San Antonio <span class="serif">keeps calling us back.</span>',
                     es: 'Cuatro razones por las que San Antonio <span class="serif">nos sigue llamando.</span>' },
    'why.1.t':     { en: 'Family-owned, Latino-owned', es: 'Empresa familiar, propietarios latinos' },
    'why.1.d':     { en: 'Built and run in San Antonio since 2017. Bilingual, neighborhood-rooted, accountable.',
                     es: 'Construida y operada en San Antonio desde 2017. Bilingüe, arraigada en el barrio, responsable.' },
    'why.2.t':     { en: '<span data-count="70">0</span>+ years combined', es: '<span data-count="70">0</span>+ años combinados' },
    'why.2.d':     { en: 'Every tech who sets foot in your home is NATE-certified and seasoned by Texas summers.',
                     es: 'Cada técnico que pisa tu casa está certificado por NATE y curtido por los veranos de Texas.' },
    'why.3.t':     { en: 'Honest upfront pricing', es: 'Precios honestos por adelantado' },
    'why.3.d':     { en: 'No mystery service fees. Free same-day estimates. 0% interest financing if you want it.',
                     es: 'Sin cargos sorpresa. Estimados gratis el mismo día. Financiamiento al 0% si lo necesitas.' },
    'why.4.t':     { en: '24/7. Genuinely.', es: '24/7. De verdad.' },
    'why.4.d':     { en: 'Real bilingual humans answer at 3 a.m. on Christmas. Emergency service is a promise, not a webpage.',
                     es: 'Personas bilingües reales contestan a las 3 a.m. en Navidad. El servicio de emergencia es una promesa, no una página web.' },

    /* specials */
    'sp.eyebrow':   { en: 'Current offers', es: 'Promociones actuales' },
    'sp.h2':        { en: 'Real numbers. <span class="serif">Real comfort.</span>',
                      es: 'Cifras reales. <span class="serif">Comodidad real.</span>' },
    'sp.sub':       { en: "Mention the offer when you book. Restrictions apply. We'll walk you through them on the phone.",
                      es: 'Menciona la promoción al agendar. Aplican restricciones. Te las explicamos por teléfono.' },

    'sp.f.label':   { en: 'Flagship offer', es: 'Promoción estrella' },
    'sp.f.unit':    { en: 'complete system', es: 'sistema completo' },
    'sp.f.t':       { en: 'New AC system installed.', es: 'Sistema A/C nuevo, instalado.' },
    'sp.f.d':       { en: 'Full system replacement with installation, included warranty, and zero hidden fees. Built for the Texas grid.',
                      es: 'Reemplazo completo con instalación, garantía incluida y cero cargos ocultos. Hecho para la red de Texas.' },
    'sp.f.cta':     { en: 'Claim this offer →', es: 'Reclamar esta promoción →' },

    'sp.1.label':   { en: 'Financing', es: 'Financiamiento' },
    'sp.1.unit':    { en: '/month', es: '/mes' },
    'sp.1.t':       { en: 'New AC &amp; heating systems', es: 'Sistemas nuevos de A/C y calefacción' },
    'sp.1.d':       { en: '0% interest financing on qualified installs. Replace tonight, pay over time.',
                      es: 'Financiamiento al 0% en instalaciones calificadas. Reemplaza hoy, paga con el tiempo.' },
    'sp.1.terms':   { en: 'Not combinable with other offers. Restrictions apply.',
                      es: 'No combinable con otras promociones. Aplican restricciones.' },

    'sp.2.label':   { en: 'Tune-up', es: 'Afinación' },
    'sp.2.unit':    { en: 'full service', es: 'servicio completo' },
    'sp.2.t':       { en: 'High-performance AC tune-up', es: 'Afinación de alto rendimiento' },
    'sp.2.d':       { en: 'Full system inspection and adjustment to extend life, lower bills, prevent breakdowns.',
                      es: 'Inspección y ajuste completo para alargar vida, bajar recibos y prevenir averías.' },

    'sp.3.label':   { en: 'Free with install', es: 'Gratis con instalación' },
    'sp.3.price':   { en: 'Free', es: 'Gratis' },
    'sp.3.unit':    { en: 'water heater', es: 'calentador de agua' },
    'sp.3.t':       { en: 'With qualified HVAC replacement', es: 'Con reemplazo HVAC calificado' },
    'sp.3.d':       { en: 'Get a complimentary water heater when you replace your full HVAC system with us.',
                      es: 'Llévate un calentador de agua gratis al reemplazar tu sistema HVAC completo con nosotros.' },

    'sp.4.label':   { en: 'Free with install', es: 'Gratis con instalación' },
    'sp.4.price':   { en: 'Free', es: 'Gratis' },
    'sp.4.unit':    { en: 'duct cleaning', es: 'limpieza de ductos' },
    'sp.4.t':       { en: 'With any HVAC system replacement', es: 'Con cualquier reemplazo de sistema HVAC' },
    'sp.4.d':       { en: 'Healthier air, more efficient airflow. Included on every full system install.',
                      es: 'Aire más sano, mejor flujo. Incluido en cada instalación de sistema completo.' },

    /* founder */
    'fdr.badge.unit':  { en: 'years HVAC', es: 'años en HVAC' },
    'fdr.eyebrow':     { en: 'From the founder', es: 'Del fundador' },
    'fdr.h2':          { en: 'Meet Isidro Ramirez.', es: 'Conoce a Isidro Ramirez.' },
    'fdr.quote':       { en: 'My fingerprints are on every job we do. That\'s the only way to make sure honest, transparent service walks through every customer\'s door."',
                         es: 'Mis huellas están en cada trabajo que hacemos. Es la única forma de asegurar que el servicio honesto y transparente llegue a la puerta de cada cliente."' },
    'fdr.bio':         { en: "Isidro founded Comfort Techs in 2017 with one principle: do the work the way you'd do it for family. He brings 20+ years of HVAC experience and has been TDLR-licensed since 2006. When he isn't running the business he's with family or watching the Spurs.",
                         es: 'Isidro fundó Comfort Techs en 2017 con un principio: hacer el trabajo como lo harías para tu familia. Trae más de 20 años de experiencia en HVAC y tiene licencia TDLR desde 2006. Cuando no está al frente del negocio, está con su familia o viendo a los Spurs.' },
    'fdr.meta.foundedL': { en: 'Founded',     es: 'Fundada' },
    'fdr.meta.foundedV': { en: '2017 · San Antonio, TX', es: '2017 · San Antonio, TX' },
    'fdr.meta.licL':     { en: 'Licensed',    es: 'Licenciado' },
    'fdr.meta.licV':     { en: 'TDLR since 2006', es: 'TDLR desde 2006' },
    'fdr.meta.recL':     { en: 'Recognition', es: 'Reconocimiento' },
    'fdr.meta.recV':     { en: 'Amana Newcomer of the Year, 2024 &amp; 2025',
                           es: 'Amana Newcomer of the Year, 2024 y 2025' },

    /* team */
    'tm.eyebrow':       { en: 'The crew', es: 'El equipo' },
    'tm.h2':            { en: 'The faces <span class="serif">behind your comfort.</span>',
                          es: 'Las caras <span class="serif">detrás de tu comodidad.</span>' },
    'tm.sub':           { en: "You'll see these names on the work order. Every tech is NATE-certified, background-checked, and bilingual.",
                          es: 'Verás estos nombres en la orden de servicio. Cada técnico está certificado por NATE, con verificación de antecedentes y es bilingüe.' },
    'tm.role.owner':    { en: 'Owner &amp; Founder', es: 'Dueño y Fundador' },
    'tm.role.office':   { en: 'Office Manager',      es: 'Gerente de oficina' },
    'tm.role.sales':    { en: 'General Sales Manager', es: 'Gerente general de ventas' },
    'tm.role.install':  { en: 'Installation Tech',   es: 'Técnico de instalación' },
    'tm.role.installSp':{ en: 'Installation Specialist', es: 'Especialista en instalación' },
    'tm.role.care':     { en: 'Customer Care',       es: 'Atención al cliente' },

    /* area */
    'ar.eyebrow': { en: 'Where we work', es: 'Dónde trabajamos' },
    'ar.h2':      { en: 'Serving every corner <span class="serif">of greater San Antonio.</span>',
                    es: 'Atendiendo cada rincón <span class="serif">del gran San Antonio.</span>' },
    'ar.sub':     { en: "From Stone Oak to Boerne, Schertz to New Braunfels. If you're within reach of the Alamo, we can be at your door same-day.",
                    es: 'Desde Stone Oak hasta Boerne, de Schertz a New Braunfels. Si estás cerca del Álamo, llegamos a tu puerta el mismo día.' },
    'ar.cta':     { en: 'Check my address', es: 'Verificar mi dirección' },

    /* testimonials */
    'ts.eyebrow': { en: 'Real San Antonio voices', es: 'Voces reales de San Antonio' },
    'ts.h2':      { en: 'Comfort, <span class="serif">on the record.</span>',
                    es: 'Comodidad, <span class="serif">en testimonio.</span>' },
    'ts.sub':     { en: "Hundreds of five-star reviews across Google and Yelp. Here's a sample of what neighbors say.",
                    es: 'Cientos de reseñas de cinco estrellas en Google y Yelp. Esto es lo que dicen los vecinos.' },
    'ts.1.q':     { en: 'Came out same day, found a leak our last guy missed. Honest, fast, and explained everything. Bilingual was huge for my dad.',
                    es: 'Vinieron el mismo día y encontraron una fuga que el técnico anterior pasó por alto. Honestos, rápidos y explicaron todo. Que fueran bilingües fue clave para mi papá.' },
    'ts.1.from':  { en: 'Stone Oak · Google', es: 'Stone Oak · Google' },
    'ts.2.q':     { en: 'Replaced my whole system the next day at the $89/month price. Crew was respectful, clean, and walked me through every step.',
                    es: 'Reemplazaron todo mi sistema al día siguiente al precio de $89/mes. El equipo fue respetuoso, limpio y me explicó cada paso.' },
    'ts.2.from':  { en: 'Schertz · Yelp', es: 'Schertz · Yelp' },
    'ts.3.q':     { en: 'Called at 11 p.m. on a Sunday. Tech was at our door by midnight. Saved us from a brutal Monday morning. Real 24/7.',
                    es: 'Llamé a las 11 p.m. un domingo. El técnico estaba en mi puerta antes de medianoche. Nos salvaron de un lunes brutal. 24/7 de verdad.' },
    'ts.3.from':  { en: 'Alamo Heights · Google', es: 'Alamo Heights · Google' },
    'ts.btn.google': { en: 'Read Google reviews →', es: 'Ver reseñas en Google →' },
    'ts.btn.yelp':   { en: 'Read Yelp reviews →',   es: 'Ver reseñas en Yelp →' },

    /* final CTA */
    'fn.eyebrow':   { en: '24/7 emergency · same-day estimates',
                      es: 'Emergencia 24/7 · estimados el mismo día' },
    'fn.h2':        { en: 'Comfort starts <span class="accent serif">with a phone call.</span>',
                      es: 'La comodidad empieza <span class="accent serif">con una llamada.</span>' },
    'fn.sub':       { en: "Tell us what's broken, what's loud, what's leaking, or just that the house is too hot. We'll have a tech on the way.",
                      es: 'Dinos qué se descompuso, qué hace ruido, qué gotea, o simplemente que la casa está muy caliente. Mandamos un técnico de inmediato.' },
    'fn.cta.call':  { en: 'Call (210) 201-0771', es: 'Llama (210) 201-0771' },
    'fn.cta.text':  { en: 'Text us →',           es: 'Escríbenos →' },
    'fn.meta.address': { en: 'Address', es: 'Dirección' },
    'fn.meta.hours':   { en: 'Hours',   es: 'Horario' },
    'fn.meta.hoursV':  { en: '24/7. Every day, every season.', es: '24/7. Todos los días, toda temporada.' },
    'fn.meta.lang':    { en: 'Languages', es: 'Idiomas' },
    'fn.meta.langV':   { en: 'English &amp; Spanish', es: 'Inglés y Español' },

    /* form */
    'form.title':   { en: 'Request service', es: 'Solicitar servicio' },
    'form.sub':     { en: 'We typically reply in under 30 minutes during business hours.',
                      es: 'Normalmente respondemos en menos de 30 minutos en horario laboral.' },
    'form.fn':      { en: 'First name', es: 'Nombre' },
    'form.ln':      { en: 'Last name',  es: 'Apellido' },
    'form.ph':      { en: 'Phone',      es: 'Teléfono' },
    'form.em':      { en: 'Email',      es: 'Correo electrónico' },
    'form.sv':      { en: 'What do you need?', es: '¿Qué necesitas?' },
    'form.ms':      { en: 'Notes (optional)',  es: 'Notas (opcional)' },
    'form.notes.ph':{ en: 'Address, system age, what\'s happening...',
                      es: 'Dirección, antigüedad del sistema, qué está pasando...' },
    'form.submit':  { en: 'Request service', es: 'Solicitar servicio' },
    'form.legal':   { en: 'By submitting you agree to be contacted by Comfort Techs about your request.',
                      es: 'Al enviar aceptas que Comfort Techs te contacte sobre tu solicitud.' },

    'form.opt.1':   { en: 'AC repair or service',     es: 'Reparación o servicio de A/C' },
    'form.opt.2':   { en: 'New AC / heating install', es: 'Instalación nueva de A/C o calefacción' },
    'form.opt.3':   { en: 'Heating issue',            es: 'Problema de calefacción' },
    'form.opt.4':   { en: 'Air quality / duct work',  es: 'Calidad del aire / ductos' },
    'form.opt.5':   { en: 'Water heater',             es: 'Calentador de agua' },
    'form.opt.6':   { en: '24/7 emergency',           es: 'Emergencia 24/7' },
    'form.opt.7':   { en: 'Other',                    es: 'Otro' },

    /* footer */
    'ft.brand.desc': { en: 'Family-owned, NATE-certified HVAC for San Antonio and the Hill Country. Comfort, on call, around the clock.',
                       es: 'HVAC familiar y certificado por NATE para San Antonio y el Hill Country. Comodidad, a tu disposición, las 24 horas.' },
    'ft.h.svc':      { en: 'Services', es: 'Servicios' },
    'ft.h.co':       { en: 'Company',  es: 'Empresa' },
    'ft.h.contact':  { en: 'Contact',  es: 'Contacto' },
    'ft.li.why':     { en: 'Why Comfort Techs', es: 'Por qué Comfort Techs' },
    'ft.li.team':    { en: 'Our team',          es: 'Nuestro equipo' },
    'ft.li.area':    { en: 'Service area',      es: 'Área de servicio' },
    'ft.li.specials':{ en: 'Specials',          es: 'Promociones' },
    'ft.li.req':     { en: 'Request service',   es: 'Solicitar servicio' },
    'ft.li.text':    { en: 'Text us',           es: 'Escríbenos' },
    'ft.li.emer':    { en: '24/7 emergency',    es: 'Emergencia 24/7' },
    'ft.copy':       { en: '© <span id="year">2026</span> Comfort Techs Air Conditioning &amp; Heating · TDLR-licensed · TACCA · NATE',
                       es: '© <span id="year">2026</span> Comfort Techs Air Conditioning &amp; Heating · Licencia TDLR · TACCA · NATE' },

    /* mobile sticky */
    'm.call': { en: 'Call now',     es: 'Llamar ahora' },
    'm.book': { en: 'Book service', es: 'Solicitar' }
  };

  let firstApply = true;

  function applyLang(lang) {
    if (!I18N || !['en','es'].includes(lang)) lang = 'en';
    document.documentElement.lang = lang;
    window.__i18n_lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const entry = I18N[el.dataset.i18n];
      if (!entry) return;
      const value = entry[lang];
      if (typeof value === 'string') el.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const entry = I18N[el.dataset.i18nPlaceholder];
      if (!entry) return;
      const v = entry[lang];
      if (typeof v === 'string') el.placeholder = v;
    });
    document.querySelectorAll('[data-i18n-meta]').forEach(el => {
      const entry = I18N[el.dataset.i18nMeta];
      if (!entry) return;
      const v = entry[lang];
      if (typeof v === 'string') el.setAttribute('content', v);
    });

    /* keep year span fresh after innerHTML rewrites */
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    /* button state */
    document.querySelectorAll('.lang-btn').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    try { localStorage.setItem('ct.lang', lang); } catch (_) {}

    /* let main.js know to re-attach observers on (now-replaced) data-count nodes */
    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang, first: firstApply } }));
    firstApply = false;
  }

  function pickInitialLang() {
    try {
      const stored = localStorage.getItem('ct.lang');
      if (stored === 'en' || stored === 'es') return stored;
    } catch (_) {}
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  }

  /* expose for main.js + button handlers */
  window.CT_I18N = { apply: applyLang, dict: I18N };

  /* run once DOM is parsed */
  function init() {
    applyLang(pickInitialLang());
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
