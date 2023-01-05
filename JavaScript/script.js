const bola = Array.from(document.querySelectorAll('#product'));

bola.forEach(el => {
  el.addEventListener('click',function(){
    this.classList.toggle('w-akhir');
    this.classList.toggle('w-awal');
    this.classList.toggle('rounded-full');
    this.classList.toggle('rounded-lg');
    Array.from(this.children).forEach(e => {
      e.classList.toggle('scale-awal')
      e.classList.toggle('scale-akhir')
      setTimeout(() => {
        e.classList.toggle('hidden')
      }, 600);
    })
  });
});

