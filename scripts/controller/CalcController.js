// dentro de uma classe você sempre encontrará um conjuntos de atributos e métodos
class CalcController {
    constructor(){

        this._displayCalc = "0";
        this._dataAtual;

    }

    get _displayCalc(){

        return this._displayCalc;

    }

    set displayCalc(valor){

        this._displayCalc = valor;

    }

    get dataAtual(){

        return this._dataAtual;

    }

    set dataAtual(valor){

        this._dataAtual = valor;

    }

}

// this._dataAtual; seria para deixar o atributo "privado" o "_" serve para isso 
// esse get e set foram feito para poder privar realmente as informações digamos assim