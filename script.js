// script.js

$(document).ready(function () {
  // Smooth scroll ke section
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $('html, body').stop().animate({ scrollTop: target.offset().top - 50 }, 800);
    }
  });

  // Efek animasi saat scroll muncul
  $(window).on('scroll', function () {
    $('.produk-card, .card, .boost-left img').each(function () {
      const top_of_element = $(this).offset().top;
      const bottom_of_screen = $(window).scrollTop() + $(window).height();

      if (bottom_of_screen > top_of_element + 100) {
        $(this).addClass('visible');
      }
    });
  });

  // Efek klik tombol pesan sekarang
  $('.btn-primary').on('click', function () {
    $(this).text('Memproses...');
    setTimeout(() => {
      alert('Terima kasih! Kami akan segera menghubungi Anda.');
      $(this).text('Pesan Sekarang');
    }, 1500);
  });
});
