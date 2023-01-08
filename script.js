function toggleMode(){
    const html = document.documentElement
    const img = document.querySelector('#profile img')
    html.classList.toggle('light')

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo de óculos escuros, barba e jaqueta preta com fundo gradiente roxo para azul')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
}