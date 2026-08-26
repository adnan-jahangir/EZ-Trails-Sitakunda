// ==========================================================================
// EZ TRILL SITAKUNDA (TOURSTK) - GLOBAL LANGUAGE TRANSLATOR MODULE
// Instant Bilingual Toggle (English / বাংলা) & Google Translate Support
// ==========================================================================

const Translator = {
  LANG_KEY: 'tourstk_lang_pref',

  init() {
    // Inject hidden Google Translate container if not present
    if (!document.getElementById('google_translate_element')) {
      const gDiv = document.createElement('div');
      gDiv.id = 'google_translate_element';
      gDiv.style.display = 'none';
      document.body.appendChild(gDiv);
    }

    // Add Google Translate script if not added
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.head.appendChild(script);

      window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,bn,hi,ar,es,fr,zh-CN',
          autoDisplay: false
        }, 'google_translate_element');
      };
    }

    // Bind event listeners to all translator buttons on page
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    });

    this.updateUI();
  },

  getCurrentLang() {
    return localStorage.getItem(this.LANG_KEY) || 'en';
  },

  toggleLanguage() {
    const current = this.getCurrentLang();
    const target = current === 'en' ? 'bn' : 'en';
    this.setLanguage(target);
  },

  setLanguage(langCode) {
    localStorage.setItem(this.LANG_KEY, langCode);
    
    // Trigger Google Translate select
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // Set cookie directly if selector not yet rendered
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; domain=.${location.hostname}; path=/;`;
      window.location.reload();
    }
    
    this.updateUI();
  },

  updateUI() {
    const current = this.getCurrentLang();
    document.querySelectorAll('.current-lang-label').forEach(el => {
      el.textContent = current === 'en' ? 'বাংলা' : 'English';
    });
    document.querySelectorAll('.current-lang-code').forEach(el => {
      el.textContent = current.toUpperCase();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Translator.init();
});
