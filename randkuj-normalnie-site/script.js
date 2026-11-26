(function () {
  document.documentElement.classList.add('js');
  const config = window.STORE_CONFIG || {};
  const modal = document.getElementById('site-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalIcon = document.getElementById('modal-icon');
  const checkoutStatus = document.getElementById('checkout-status');
  const priceNode = document.getElementById('product-price');
  const yearNode = document.getElementById('year');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const lightbox = document.getElementById('preview-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');

  if (yearNode) yearNode.textContent = new Date().getFullYear();
  if (priceNode && config.priceDisplay) priceNode.textContent = config.priceDisplay;
  if (checkoutStatus && config.checkoutUrl) checkoutStatus.textContent = 'Płatność i dostawa zostaną obsłużone przez wybraną platformę sprzedażową.';
  document.querySelectorAll('[data-legal=terms]').forEach((a) => { if (config.termsUrl) { a.href = config.termsUrl; a.target = '_blank'; a.rel = 'noopener noreferrer'; } });
  document.querySelectorAll('[data-legal=privacy]').forEach((a) => { if (config.privacyUrl) { a.href = config.privacyUrl; a.target = '_blank'; a.rel = 'noopener noreferrer'; } });
  document.querySelectorAll('[data-legal=contact]').forEach((a) => { if (config.sellerEmail && !config.sellerEmail.startsWith('[')) a.href = 'mailto:' + config.sellerEmail; });

  function openModal(title, html, icon = '♡') {
    modalTitle.textContent = title;
    modalContent.innerHTML = html;
    modalIcon.textContent = icon;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const close = modal.querySelector('.modal-close');
    if (close) close.focus();
  }
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function legalModal(kind) {
    const labels = {
      seller: ['Dane sprzedawcy', (config.sellerName && !config.sellerName.startsWith('[') ? config.sellerName + '. ' : '') + 'W tym miejscu należy umieścić pełne dane sprzedawcy: nazwę lub imię i nazwisko, adres prowadzenia działalności oraz dane wymagane przepisami. Wpisz je przed publikacją strony.'],
      terms: ['Regulamin sprzedaży', 'Dodaj adres do własnego, zatwierdzonego regulaminu sklepu. Określ m.in. sprzedawcę, cenę, sposób płatności, dostawę treści cyfrowej, procedurę reklamacji oraz zasady odstąpienia od umowy.'],
      privacy: ['Polityka prywatności', 'Dodaj adres do własnej polityki prywatności, opisującej administratora danych, cele i podstawy przetwarzania, odbiorców, okres przechowywania oraz prawa użytkowników.'],
      contact: ['Kontakt', config.sellerEmail && !config.sellerEmail.startsWith('[') ? `Adres kontaktowy: ${config.sellerEmail}` : 'Uzupełnij adres e-mail do kontaktu w pliku config.js przed publikacją strony.']
    };
    const [title, body] = labels[kind] || ['Informacja', 'Uzupełnij tę sekcję przed publikacją.'];
    const url = kind === 'terms' ? config.termsUrl : kind === 'privacy' ? config.privacyUrl : '';
    const contact = kind === 'contact' && config.sellerEmail && !config.sellerEmail.startsWith('[') ? `<a class="button button-primary modal-action" href="mailto:${encodeURIComponent(config.sellerEmail)}">Napisz e-mail</a>` : '';
    const link = url ? `<a class="button button-primary modal-action" href="${url}" target="_blank" rel="noopener">Otwórz dokument ↗</a>` : '';
    openModal(title, `<p>${body}</p>${contact}${link}`, 'i');
  }

  document.querySelectorAll('[data-buy]').forEach((button) => {
    if (config.checkoutUrl) {
      button.setAttribute('href', config.checkoutUrl);
      button.setAttribute('target', '_blank');
      button.setAttribute('rel', 'noopener noreferrer');
    } else {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        openModal('Sprzedaż nie jest jeszcze podłączona', '<p>Strona jest gotowa do prezentacji produktu, ale nie uruchamia płatności i nie symuluje zakupu.</p><p>Aby aktywować przycisk, w pliku <b>config.js</b> uzupełnij <code>checkoutUrl</code> adresem koszyka Naffy, Easycart lub innej platformy. Ustaw tam również cenę i automatyczną dostawę pełnego PDF-a po opłaceniu zamówienia.</p><p>Pełny e-book nie znajduje się w publicznych plikach tej strony.</p>', '♡');
      });
    }
  });

  document.querySelectorAll('[data-legal]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const kind = link.getAttribute('data-legal');
      if ((kind === 'terms' && config.termsUrl) || (kind === 'privacy' && config.privacyUrl)) return;
      event.preventDefault(); legalModal(kind);
    });
  });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.hidden = expanded;
      menuToggle.setAttribute('aria-label', expanded ? 'Otwórz menu' : 'Zamknij menu');
    });
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      mobileNav.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Otwórz menu');
    }));
  }

  modal.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { closeModal(); closeLightbox(); }
  });

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || 'Podgląd strony e-booka';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-preview]').forEach((button) => {
    button.addEventListener('click', () => {
      const img = button.querySelector('img');
      openLightbox(button.getAttribute('data-preview'), img ? img.alt : 'Podgląd e-booka');
    });
  });
  if (lightbox) {
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // Native FAQ accordions remain keyboard accessible without additional dependencies.
  document.querySelectorAll('.faq-list details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) document.querySelectorAll('.faq-list details').forEach((other) => { if (other !== item) other.open = false; });
    });
  });
})();
