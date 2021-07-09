const burgerIcon = document.querySelector('#burger')
const navbarMenu = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', function() {
    navbarMenu.classList.toggle('is-active')
})

const tabs = document.querySelectorAll('.tabs li')
const tabContentBoxes = document.querySelectorAll('#tab-content > div')

tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        tabs.forEach(function(tab) {
            tab.classList.remove('is-active')
        })
        tab.classList.add('is-active')

        const target = tab.dataset.target
        tabContentBoxes.forEach(function(box) {
            if(box.getAttribute('id') == target) {
                box.classList.remove('is-hidden')
            } else {
                box.classList.add('is-hidden')
            }
        })
    })
})

const signupButton = document.querySelector('#sign-up')
const modalBackground = document.querySelector('.modal-background')
const modal = document.querySelector('.modal')

signupButton.addEventListener('click', function() {
    modal.classList.add('is-active')
})

modalBackground.addEventListener('click', function() {
    modal.classList.remove('is-active')
})