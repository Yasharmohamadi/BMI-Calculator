const $ = document;
const cmInput = $.querySelector('.cm_input');
const kgInput = $.querySelector('.kg_input');
const cmNumber = $.querySelector('.cm_num');
const kgNumber = $.querySelector('.kg_num');
const container = $.querySelector('.container');
const resultNumberBMI = $.querySelector('.result_bmi');
const resultTitleBMI = $.querySelector('.result_title');

function cmInputHandler(event) {
    cmNumber.value = event.target.value;
    calculateBMI();
};

function kgInputHandler(event) {
    kgNumber.value = event.target.value;
    calculateBMI();
};

function cmNumberHandler(event) {
    cmInput.value = event.target.value;
    calculateBMI();
};

function kgNumberHandler(event) {
    kgInput.value = event.target.value;
    calculateBMI();
};

function calculateBMI() {
    let cmHeight = cmNumber.value;
    let kgWeight = kgNumber.value;
    let BMI = (kgWeight / (Math.pow(cmHeight/100, 2))).toFixed(1);
    resultNumberBMI.innerHTML = BMI;

    if (BMI < 18.5) {
        container.style.boxShadow = '0 0 20px rgba(133, 142, 3, 0.388)';
        resultNumberBMI.style.color = '#ffc44d';
        resultTitleBMI.innerHTML = 'Under-weight';
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        container.style.boxShadow = '0 0 20px rgba(0, 156, 42, 0.2)';
        resultNumberBMI.style.color = '#0be881'
        resultTitleBMI.innerHTML = 'Normal';
    } else if (BMI >= 24.9) {
        container.style.boxShadow = '0 0 20px rgba(231, 12, 12, 0.2)';
        resultNumberBMI.style.color = '#ff5e4d'
        resultTitleBMI.innerHTML = 'Over-weight';
    };
};

cmInput.addEventListener('input', cmInputHandler);
kgInput.addEventListener('input', kgInputHandler);
cmNumber.addEventListener('keyup', cmNumberHandler);
kgNumber.addEventListener('keyup', kgNumberHandler);