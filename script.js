/****************Menu******************** */

((d)=>{
      const $btnMenu= d.querySelector('.menu-btn');
      $menu= d.querySelector('.menu');

      $btnMenu.addEventListener('click', (e)=>{
            $btnMenu.firstElementChild.classList.toggle('none');
            $btnMenu.lastElementChild.classList.toggle('none');
            $menu.classList.toggle('is-active');
      });
      d.addEventListener('click', (e)=>{
            if(!e.target.matches('.menu a')) return false;
            $btnMenu.firstElementChild.classList.remove('none');
            $btnMenu.lastElementChild.classList.add('none');
            $menu.classList.remove('is-active');
            
      })
})(document);

/***************ContactForm**********************/

((d) => {
  const $form = d.querySelector('.contact-form'),
        $loader = d.querySelector('.contact-form-loader'),
        $response = d.querySelector('.contact-form-response'),
        $submitBtn = $form.querySelector('button[type="submit"]');

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    $loader.classList.remove('none');
    $submitBtn.disabled = true;

    // ✅ URL correcta (AJAX)
    fetch('https://formsubmit.co/ajax/el/yasufe', {
      method: 'POST',
      body: new FormData(e.target),
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
      console.log(json);
      $response.querySelector('h3').innerHTML = "¡Mensaje enviado correctamente!";
      location.hash = '#gracias';
      $form.reset();
    })
    .catch(err => {
      console.error(err);
      $response.querySelector('h3').innerHTML = `❌ Error al enviar el mensaje.`;
    })
    .finally(() => {
      $loader.classList.add('none');
      $submitBtn.disabled = false;
      setTimeout(() => {
        location.hash = '#close';
      }, 3000);
    });
  });
})(document);
