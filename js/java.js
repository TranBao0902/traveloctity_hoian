const navMenu = document.getElementById('nav-menu'),
navTogglre = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


//Menu show
navTogglre.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
});

//Menu Hidden
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
})

//Search
const search =document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close')

//Search Show
searchBtn.addEventListener('click',()=>{
    search.classList.add('show-search')
})
//Search Hidden
searchClose.addEventListener('click',()=>{
    search.classList.remove('show-search')
})
