/* ========================================
   JL Elétrica e Hidráulica · Voltagem Bold
   ======================================== */

(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Animações de entrada do hero ---------- */
  const onLoad = () => {
    $('#heroHeadline')?.classList.add('in');
    $('#heroBadge')?.classList.add('in');
    $('#heroMedia')?.classList.add('in');
  };
  if (document.readyState === 'complete') onLoad();
  else window.addEventListener('load', onLoad);

  /* ---------- Navbar scroll ---------- */
  const navbar = $('#navbar');
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  const navToggle = $('#navToggle');
  const navLinks = $('#navLinks');
  navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });
  $$('#navLinks a').forEach(a => {
    a.addEventListener('click', () => navLinks?.classList.remove('open'));
  });

  /* ---------- IntersectionObserver: zig-zag cards ---------- */
  const ioRows = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = (i % 3) * 150;
        setTimeout(() => entry.target.classList.add('in'), delay);
        ioRows.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  $$('.zig-row').forEach(el => ioRows.observe(el));

  /* ---------- Counters animados ---------- */
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 2000;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(easeOut(progress) * target);
      el.textContent = value.toLocaleString('pt-BR');
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('pt-BR');
    };
    requestAnimationFrame(step);
  };

  const counterBlock = $('#counters');
  if (counterBlock) {
    const ioCounters = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$('.counter-num', entry.target).forEach(animateCounter);
          ioCounters.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    ioCounters.observe(counterBlock);
  }

  /* ---------- Formulário com validação real ---------- */
  const form = $('#leadForm');
  const note = $('#formNote');

  const maskPhone = (v) => {
    v = v.replace(/\D/g, '').slice(0, 11);
    if (v.length <= 10) {
      return v.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, a, b, c) => {
        let s = '';
        if (a) s += `(${a}`;
        if (a.length === 2) s += ') ';
        if (b) s += b;
        if (c) s += `-${c}`;
        return s;
      });
    }
    return v.replace(/^(\d{2})(\d{1})(\d{4})(\d{4}).*/, '($1) $2 $3-$4');
  };

  const phoneInput = form?.querySelector('input[name="telefone"]');
  phoneInput?.addEventListener('input', (e) => {
    e.target.value = maskPhone(e.target.value);
  });

  const setNote = (msg, type) => {
    if (!note) return;
    note.textContent = msg;
    note.classList.remove('ok', 'err');
    if (type) note.classList.add(type);
  };

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = (data.get('nome') || '').toString().trim();
    const tel = (data.get('telefone') || '').toString().trim();
    const servico = (data.get('servico') || '').toString().trim();
    const msg = (data.get('mensagem') || '').toString().trim();

    if (nome.length < 2) return setNote('Conta seu nome pra gente saber como te chamar.', 'err');
    const telDigits = tel.replace(/\D/g, '');
    if (telDigits.length < 10) return setNote('Coloca um WhatsApp válido com DDD.', 'err');
    if (!servico) return setNote('Escolhe o tipo de serviço.', 'err');

    const texto =
      `Olá, sou ${nome}.\n` +
      `Preciso de: ${servico}.\n` +
      (msg ? `Detalhes: ${msg}\n` : '') +
      `Meu contato: ${tel}`;

    const url = `https://wa.me/5531975718568?text=${encodeURIComponent(texto)}`;
    setNote('Te redirecionando pro WhatsApp da JL...', 'ok');
    setTimeout(() => { window.open(url, '_blank', 'noopener'); }, 400);
  });

  /* ---------- Smooth scroll para âncoras ---------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- Ano dinâmico no rodapé (se houver elemento) ---------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
