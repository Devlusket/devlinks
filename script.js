function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


    const img = document.querySelector(".profile_picture img")
    if(html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar lucas laranja.png")
    }
    else {
        img.setAttribute("src", "./assets/avatar lucas.png")
    }


    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // }
    // else {
    //     html.classList.add('light')
    // }
}