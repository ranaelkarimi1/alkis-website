// ALKIS V1 — interactions minimales
(function(){
  var toggle=document.querySelector('.nav-toggle');
  var menu=document.getElementById('nav-menu');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var open=menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',open?'true':'false');
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }
})();
