(function(){
var t=document.querySelector('.menu-toggle'),n=document.getElementById('primary-nav');
if(!t||!n)return;
function setOpen(o){n.classList.toggle('open',o);t.setAttribute('aria-expanded',o?'true':'false');t.setAttribute('aria-label',o?'Close menu':'Open menu');t.innerHTML=o?'&times;':'&#9776;';}
t.addEventListener('click',function(){setOpen(!n.classList.contains('open'));});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false);}});
n.addEventListener('click',function(e){if(e.target.closest('a')){setOpen(false);}});
window.addEventListener('resize',function(){if(window.innerWidth>900){setOpen(false);}});
})();
