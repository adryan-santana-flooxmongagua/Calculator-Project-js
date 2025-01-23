// dentro de uma classe você sempre encontrará um conjuntos de atributos e métodos
class CalcController {
    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4566";
        dateEl.innerHTML ="16/02/2007";
        timeEl.innerHTML = "04:00";

    }

    get displayCalc(){

        return this._displayCalc;

    }

    set displayCalc(valor){

        this._displayCalc = valor;

    }

    get currentDate(){

        return this._currentDate;

    }

    set currentDate(valor){

        this._currentDate = valor;

    }

}

// this._currentDate; seria para deixar o atributo "privado" o "_" serve para isso 
// esse get e set foram feito para poder privar realmente as informações digamos assim