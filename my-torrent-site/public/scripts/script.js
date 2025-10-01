

  /* --- Category Icon Mapping --- */
  const categoryIcons = {
    movie: 'fa-film',
    tv: 'fa-tv',
    application: 'fa-window-restore',
    game: 'fa-gamepad',
    music: 'fa-music',
    anime: 'fa-dragon',
    documentary: 'fa-file-video',
    book: 'fa-book',
    other: 'fa-file'
  };

  document.querySelectorAll('[data-category]').forEach(item => {
    const category = item.dataset.category;
    const iconClass = categoryIcons[category] || 'fa-file';
    const iconElement = item.querySelector('.type-column i');
    if (iconElement) {
      iconElement.className = `fas ${iconClass}`;
    }
  });

  /* --- Theme Toggle --- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      this.textContent = document.body.classList.contains('dark-theme')
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
    });
  }

  /* --- Mobile Menu Toggle --- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.querySelector('body');

  if (menuToggle && mobileMenu && body) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileMenu.classList.toggle('active');
    });

    body.addEventListener('click', function(e) {
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
      }
    });

    mobileMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }

