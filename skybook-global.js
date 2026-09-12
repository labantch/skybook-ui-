(function () {
  const fileName = decodeURIComponent(window.location.pathname.split('/').pop()).toLowerCase();
  const flowSteps = [
    ['Flights', 'Flights process 1.html'],
    ['Seats', 'Seats process 2.html'],
    ['Passenger Details', 'Passenger Deitales process 3.html'],
    ['Confirm & Pay', 'Confirm&Pay process 4.html']
  ];
  const flowIndex = fileName.includes('flights process') ? 0 : fileName.includes('seats process') ? 1 : fileName.includes('passenger deitales') ? 2 : fileName.includes('confirm&pay') ? 3 : -1;
  const isAuthPage = fileName.includes('login & sign up');
  const loggedIn = !isAuthPage && localStorage.getItem('skybook-authenticated') === 'true';
  const activeNav = fileName.includes('my bookings') ? 'bookings' : fileName.includes('profile') ? 'profile' : fileName.includes('about') ? 'about' : fileName.includes('flights process') || fileName === 'home.html' ? 'flights' : '';
  const link = (label, target, key) => '<a href="' + target + '" data-skybook-nav="' + key + '"' + (activeNav === key ? ' class="skybook-active" aria-current="page"' : '') + '>' + label + '</a>';
  const account = loggedIn
    ? '<a class="skybook-profile" href="Profile.html" aria-label="Open profile"><span class="skybook-avatar">JM</span><span><span class="skybook-profile-name">John Mohamed</span></span><span aria-hidden="true">⌄</span></a>'
    : '<a class="skybook-login" href="Login & sign up.html?mode=login">Log In</a><a class="skybook-signup" href="Login & sign up.html?mode=signup">Sign Up</a>';
  const header = document.createElement('header');
  header.id = 'skybook-global-header';
  header.innerHTML = '<div class="skybook-header-inner"><a class="skybook-brand" href="HOME.html" aria-label="SkyBook home"><svg class="skybook-brand-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M5 24 31 8 20 28 15 22 5 24Z" fill="#0B192C"></path><path d="m15 22 16-14-13 8-3 6Z" fill="#C5A880"></path></svg><span class="skybook-wordmark"><span class="skybook-name">SKY<span>BOOK</span></span><span class="skybook-tagline">Luxury Airways</span></span></a><button class="skybook-menu" type="button" aria-label="Toggle navigation">☰</button><nav class="skybook-nav" aria-label="Primary navigation">' + link('Flights', 'HOME.html', 'flights') + link('My Bookings', 'My Bookings.html', 'bookings') + link('About', 'About.html', 'about') + link('Profile', 'Profile.html', 'profile') + '</nav><div class="skybook-account">' + account + '</div></div>';
  document.body.insertBefore(header, document.body.firstChild);
  header.querySelector('.skybook-menu').addEventListener('click', function () { header.classList.toggle('skybook-open'); });
  if (flowIndex >= 0) {
    const progress = document.createElement('nav');
    progress.id = 'skybook-booking-progress';
    progress.setAttribute('aria-label', 'Booking progress');
    progress.innerHTML = '<div class="skybook-progress-inner">' + flowSteps.map(function (step, index) {
      return (index ? '<span class="skybook-separator" aria-hidden="true">›</span>' : '') + '<a class="skybook-step' + (index === flowIndex ? ' skybook-current' : '') + '" href="' + step[1] + '"><span class="skybook-step-number">' + (index + 1) + '</span><span>' + step[0].toUpperCase() + '</span></a>';
    }).join('') + '</div>';
    header.insertAdjacentElement('afterend', progress);
  }
})();
