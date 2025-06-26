document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer')
    if (footer) {
        footer.innerHTML = `
            <a href="https://www.instagram.com/ferguimac/" target="_blank"><i class="fa fa-instagram" style="font-size:24px"></i></a>
        `
    }
})