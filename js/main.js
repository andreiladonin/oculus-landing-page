const tabItem = document.querySelectorAll('.tabs__btn-item')
const tabItemContent = document.querySelectorAll('.tabs__content-item ')

tabItem.forEach((el)=> {
    el.addEventListener('click', e => {
        const tabTarget = e.currentTarget
        const button = tabTarget.dataset.button
    
        tabItem.forEach ((item)=> {
            item.classList.remove('tabs__btn-item--active')
        })

        tabItemContent.forEach ((item)=> {
            item.classList.remove('tabs__content-item--active')
        })

        tabTarget.classList.add('tabs__btn-item--active')

        document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
    
    })
})

const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active')
})