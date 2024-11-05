const inputElement = document.getElementById("input-el");

function resizeText(input) {
    let fontSize = parseInt(window.getComputedStyle(input).fontSize);

    while (input.scrollWidth > input.offsetWidth) { //decrease text size when overflowing
        fontSize--;
        input.style.fontSize = fontSize + 'px';
    }

    while (input.scrollWidth < input.offsetWidth && fontSize < 50) { //increase text size when deleting text up to original text size
        fontSize++;
        input.style.fontSize = fontSize + 'px';
      }
}

inputElement.addEventListener("input", () => resizeText(inputElement)); //checks if text is overflowing