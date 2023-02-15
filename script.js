//SLIDES BACKGROUNDS

let time = 7000,
    currentImageIndex = 0
images = document
    .querySelectorAll("#slide img")
max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("f1")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0;


    images[currentImageIndex]
        .classList.add("f1")
}

function start() {
    setInterval(() => {
        nextImage()

    }, time)
}

window.addEventListener("load", start)


//function para o input altura

function formatarNumeroA() {

    const input = document.getElementById('alt');

    let numero = input.value;

    if (numero > 999) {

        // limita o número a 4 dígitos

        numero = 999;

        input.value = numero;
    }

    // divide por 100 e arredonda para 2 dígitos decimais

    numero = (numero / 100).toFixed(2);

    // atualiza o valor do input com o número formatado

    input.value = numero;

};


//function para o input peso

function formatarNumeroP() {

    const input = document.getElementById('pes');

    let numero = input.value;

    if (numero > 999) {

        // limita o número a 4 dígitos

        numero = 999;

        input.value = numero;
    }

    // atualiza o valor do input com o número formatado

    input.value = numero;

};

//Calculo do IMC

function consultar() {

    //setas

    const arrow1 = document.getElementById('arrow1');

    const arrow2 = document.getElementById('arrow2');

    const arrow3 = document.getElementById('arrow3');

    const arrow4 = document.getElementById('arrow4');

    const arrow5 = document.getElementById('arrow5');

    //boxs

    const box = document.getElementById('boxres');

    const box1 = document.getElementById('peso1');

    const box2 = document.getElementById('peso2');

    const box3 = document.getElementById('peso3');

    const box4 = document.getElementById('peso4');

    const box5 = document.getElementById('peso5');

    //functions

    const alt = document.getElementById('alt').value;

    const peso = document.getElementById('pes').value;

    const imc = peso / (alt * alt);

    if (imc < 18.5) {

        console.log("Abaixo do peso");

        arrow1.style.display = 'block';

        arrow2.style.display = 'none';

        arrow3.style.display = 'none';

        arrow4.style.display = 'none';

        arrow5.style.display = 'none';

        ////////////////////////////////

        box.style.display = 'block';

        box1.style.display = 'block';

        box2.style.display = 'none';

        box3.style.display = 'none';

        box4.style.display = 'none';

        box5.style.display = 'none';

    } else if (imc >= 18.5 && imc <= 24.9) {

        console.log("Peso normal");

        arrow1.style.display = 'none';

        arrow2.style.display = 'block';

        arrow3.style.display = 'none';

        arrow4.style.display = 'none';

        arrow5.style.display = 'none';

        ////////////////////////////////

        box.style.display = 'block';

        box1.style.display = 'none';

        box2.style.display = 'block';

        box3.style.display = 'none';

        box4.style.display = 'none';

        box5.style.display = 'none';

    } else if (imc >= 25.0 && imc <= 29.9) {

        console.log("Sobrepeso / Obesidade grau 1");

        arrow1.style.display = 'none';

        arrow2.style.display = 'none';

        arrow3.style.display = 'block';

        arrow4.style.display = 'none';

        arrow5.style.display = 'none';

        ////////////////////////////////

        box.style.display = 'block';

        box1.style.display = 'none';

        box2.style.display = 'none';

        box3.style.display = 'block';

        box4.style.display = 'none';

        box5.style.display = 'none';

    } else if (imc >= 30.0 && imc <= 39.9) {

        console.log("Obesidade grau 2");

        arrow1.style.display = 'none';

        arrow2.style.display = 'none';

        arrow3.style.display = 'none';

        arrow4.style.display = 'block';

        arrow5.style.display = 'none';


        ////////////////////////////////

        box.style.display = 'block';

        box1.style.display = 'none';

        box2.style.display = 'none';

        box3.style.display = 'none';

        box4.style.display = 'block';

        box5.style.display = 'none';

    } else if (imc >= 40.0) {

        console.log("Obesidade grau 3");

        arrow1.style.display = 'none';

        arrow2.style.display = 'none';

        arrow3.style.display = 'none';

        arrow4.style.display = 'none';

        arrow5.style.display = 'block';

        ////////////////////////////////

        box.style.display = 'block';

        box1.style.display = 'none';

        box2.style.display = 'none';

        box3.style.display = 'none';

        box4.style.display = 'none';

        box5.style.display = 'block';
    }

};

//Calculo do IMC se Enter pressionado

document.addEventListener('keyup', function (event) {

    if (event.key === 'Enter') {

        consultar();

    }

});