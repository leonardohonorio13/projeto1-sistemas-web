// Formulário de envio com mensagem de sucesso
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
});

// Configurar carrossel para alternar automaticamente
var myCarousel = document.querySelector('#carouselExample');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    ride: 'carousel'
});
