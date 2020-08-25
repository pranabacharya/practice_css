class UI {
    showAlert(message,className){
        this.removeAlert();
        const div = document.createElement('div');
        div.className = `text-center ${className}` ;
        div.append(message);

        var primary = document.querySelector('#parentNode');
        var secondary = document.querySelector('.output');

        primary.insertBefore(div,secondary);

        setTimeout(() => this.removeAlert(),5000) ;

    }

    removeAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    clearField(input){
        setTimeout(() => {
            input.value = '' ;
        }, 5000);
    }

}