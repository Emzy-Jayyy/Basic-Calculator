let calculation = localStorage.getItem('calculation');
// console.log(localStorage.getItem('calculation'));

if (calculation === null) {
    calculation = '';
}
function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    localStorage.setItem('calculation', calculation);
    document.querySelector('.calculation-display').innerHTML = `${calculation}`;
}
