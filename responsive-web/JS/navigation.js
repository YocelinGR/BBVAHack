const connectBtn = document.getElementById('connect-btn');

connectBtn.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../responsive-web/first-view.html');
})