const displayArea = document.getElementById('display');

function appendToDisplay(input) {
    displayArea.value += input;
};

function clearDisplay() {
    displayArea.value = '';
};

function calculate() {
    try{    
        displayArea.value = eval(displayArea.value);
    }
    catch(error) {
        displayArea.value = "Error";
    }
};
