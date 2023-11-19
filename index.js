const btn = document.querySelector('.mob-nav-icon')

btn.addEventListener('click', function(e){
  console.log(e.target)
  
  let li = document.querySelector('.main-nav')
  li.classList.toggle('mob-active')
  
  
})