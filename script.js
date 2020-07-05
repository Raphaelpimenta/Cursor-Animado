(function (){

    const link = document.querySelectorAll('nav > .hover-page');
    const cursor = document.querySelector('.cursor');

    const animacao = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e, 
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,

        movimentoX = x / width * (move * 2 ) - move,
        movimentoY = y / height * (move * 2 ) - move;

        span.style.transform = `translate(${movimentoX}px, ${movimentoY}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';

    };

    const editarCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animacao));
    link.forEach(b => b.addEventListener('mouseleave', animacao));
    window.addEventListener('mousemove', editarCursor);

})();