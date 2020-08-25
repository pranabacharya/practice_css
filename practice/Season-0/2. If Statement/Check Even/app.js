const ui = new UI;

const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output = document.getElementById('output');

submit.addEventListener('click', () => {
    var value = input.value;
    if (value == '' || isNaN(value)) {
        ui.showAlert('Enter a Valid Number', 'alert alert-info');
    } else {
        if (value % 2 === 0) {
            ui.showAlert(`The Number ${value} is EVEN !!`, 'alert alert-primary');
            ui.clearField(input);
        } else {
            ui.showAlert(`The Number ${value} is ODD !!`, 'alert alert-danger');
            ui.clearField(input);
        }
    }
    // console.warn(input.value = '');
});