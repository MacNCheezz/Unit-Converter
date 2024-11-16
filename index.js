const inputElement = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const checkbox = document.getElementById("checkbox");
const cont = document.getElementById("container");
const cells = document.querySelectorAll(".cell");
const paragraphs = document.querySelectorAll("p");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");

para1.innerText = `0 meters is 0 feet | 0 feet is 0 meters`;
document.getElementById("len-el").appendChild(para1);
para2.innerText = `0 liters is 0 gallons | 0 gallons is 0 liters`;
document.getElementById("vol-el").appendChild(para2);
para3.innerText = `0 kilos is 0 pounds | 0 pounds is 0 kilos`;
document.getElementById("mass-el").appendChild(para3);

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
inputElement.addEventListener("input", () => resizeText(inputElement)); //checks if text is overflowing and adjusts

inputBtn.addEventListener("click", function() {
    let num = inputElement.value.trim(); // Remove extra spaces
    
    // Input Validation
    if (num === "" || isNaN(num) || parseFloat(num) < 0) {
        alert("Please enter a valid positive number");
        return;
    } else {
        //length calc
        let feet = (num / 0.3048).toFixed(3);
        let meter = (num * 0.3048).toFixed(3);
        para1.innerText = `${num} meters is ${feet} feet | ${num} feet is ${meter} meters`;
        //volume calc
        let gallon = (num / 3.785411784).toFixed(3);
        let liter = (num * 3.785411784).toFixed(3);
        para2.innerText = `${num} liters is ${gallon} gallons | ${num} gallons is ${liter} liters`;
        //mass calc
        let pound = (num / 0.45359237).toFixed(3);
        let kilo = (num * 0.45359237).toFixed(3);
        para3.innerText = `${num} kilos is ${pound} pounds | ${num} pounds is ${kilo} kilos`;
    }
});

checkbox.addEventListener("change", () => {
    container.classList.toggle("dark-mode");
    const isDarkMode = container.classList.contains("dark-mode"); //boolean to check dark mode
    cells.forEach(cell => cell.classList.toggle("dark-mode2")); //
    [para1, para2, para3].forEach(para => { //dynamically changing text to dark mode for all of the paragraphs
        if (isDarkMode) {
            para.style.color = "#ffffff";
        } else {
            para.style.color = "#000000";
        }
    });

    document.querySelectorAll("h2").forEach(h2 => {
        h2.style.color = isDarkMode ? "#CCC1FF" : "#5A537B"; // adjust h2 color based on mode
    });
});