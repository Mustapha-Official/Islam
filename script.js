function navOpen() {
  const navigation = document.querySelector('.nav-links');
navigation.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active')
    });
});