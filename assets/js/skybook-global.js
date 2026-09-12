(function () {
  const fileName = decodeURIComponent(window.location.pathname.split('/').pop()).toLowerCase();
  const flowSteps = [
    ['Flights', 'flights.html'],
    ['Seats', 'seats.html'],
    ['Passenger Details', 'passenger-details.html'],
    ['Confirm & Pay', 'confirm-payment.html']
  ];
  const flowIndex = fileName.includes('flights process') ? 0 : fileName.includes('seats process') ? 1 : fileName.includes('passenger deitales') ? 2 : fileName.includes('confirm&pay') ? 3 : -1;
  const isAuthPage = fileName.includes('account');
  const rawName = (localStorage.getItem('skybook-user-name') || '').trim();
  const hasRealName = rawName.length > 0 && rawName.toLowerCase() !== 'guest';
  const loggedIn = !isAuthPage && localStorage.getItem('skybook-authenticated') === 'true' && hasRealName;
  // Stale auth without a real user → clear and treat as logged out
  if (!isAuthPage && localStorage.getItem('skybook-authenticated') === 'true' && !hasRealName) {
    localStorage.removeItem('skybook-authenticated');
    localStorage.removeItem('skybook-role');
    localStorage.removeItem('skybook-user-name');
    localStorage.removeItem('skybook-user-initials');
  }
  const userName = rawName;
  const userInitials = localStorage.getItem('skybook-user-initials') || (userName.split(' ').map(function (p) { return p[0] || ''; }).join('').slice(0, 2).toUpperCase() || 'SB');
  const activeNav = fileName.includes('my-bookings') || fileName.includes('my bookings') ? 'bookings' : fileName.includes('profile') ? 'profile' : fileName.includes('about') ? 'about' : (fileName.includes('flights') || fileName === 'index.html' || fileName === '') ? 'flights' : '';
  const link = (label, target, key) => '<a href="' + target + '" data-skybook-nav="' + key + '"' + (activeNav === key ? ' class="skybook-active" aria-current="page"' : '') + '>' + label + '</a>';
  const account = loggedIn
    ? '<a class="skybook-profile" href="profile.html" aria-label="Open profile"><span class="skybook-avatar">' + userInitials + '</span><span><span class="skybook-profile-name">' + userName + '</span></span><span aria-hidden="true">⌄</span></a>'
    : '<a class="skybook-login" href="account.html?mode=login">Log In</a><a class="skybook-signup" href="account.html?mode=signup">Sign Up</a>';
  const header = document.createElement('header');
  header.id = 'skybook-global-header';
  const profileHref = loggedIn ? 'profile.html' : 'account.html?mode=login';
  header.innerHTML = '<div class="skybook-header-inner"><a class="skybook-brand" href="index.html" aria-label="SkyBook home"><svg class="skybook-brand-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M5 24 31 8 20 28 15 22 5 24Z" fill="#0B192C"></path><path d="m15 22 16-14-13 8-3 6Z" fill="#C5A880"></path></svg><span class="skybook-wordmark"><span class="skybook-name">SKY<span>BOOK</span></span><span class="skybook-tagline">Luxury Airways</span></span></a><button class="skybook-menu" type="button" aria-label="Toggle navigation">☰</button><nav class="skybook-nav" aria-label="Primary navigation">' + link('Flights', 'index.html', 'flights') + link('My Bookings', 'my-bookings.html', 'bookings') + link('About', 'about.html', 'about') + link('Profile', profileHref, 'profile') + '</nav><div class="skybook-account">' + account + '</div></div>';
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
