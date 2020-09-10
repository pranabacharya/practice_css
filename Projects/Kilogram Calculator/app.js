document.querySelector('#submit').addEventListener('click',(e) => {
    document.querySelector('.loading').style.display = 'inline';


    document.querySelector('.results').style.display = 'none'
    setTimeout(showResult,2000);
    e.preventDefault();
})

function showResult() {

    // const weight = document.getElementById('weight').value ;
    const price = document.getElementById('amount').value ;
    const gram = document.getElementById('gram').value ;
    
    //RESULTS
    const result = document.getElementById('result');
    const output = price * gram / 1000;
    result.value = output;

    if(price == '' || gram == '' || price == 0 || gram == 0){
        document.querySelector('.results').style.display = 'none';
        document.querySelector('.loading').style.display = 'none';
        showAlert('Enter a valid number !!');
        clearField();
    }else{
        result.value = `${gram} Gram Price is ${parseFloat(output).toFixed(2)} as 1kg Price is ${price}`;
        document.querySelector('.results').style.display = 'block';
        document.querySelector('.loading').style.display = 'none';
        clearField();
    }

    function showAlert(message){
        const div = document.createElement('div');
        div.className = 'alert text-white font-weight-bold bg-danger';
        div.append(message);

        const primary = document.querySelector('.mx-auto');
        const secondary = document.querySelector('.here');

        primary.insertBefore(div,secondary);

        setTimeout(()=> document.querySelector('.alert').remove(),2500);
    }

    function clearField(){
        document.getElementById('gram').value = '';
        document.getElementById('amount').value = '';
    }
}