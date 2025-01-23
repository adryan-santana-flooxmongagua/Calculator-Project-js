// dentro de uma classe você sempre encontrará um conjuntos de atributos e métodos
class CalcController {
    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime();

        let interval = setInterval(() => {

             this.setDisplayDateTime();

        }, 1000);

      //  setTimeout(()=>{

     //       clearInterval(interval);

    //  },10000);  para definir quando ele deve parar de rodar o setTimeout

    }


    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this.locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);

    }



    addEventListenerAll(element, events,fn){

        events.split(' ').forEach(event =>{

            element.addEventListener(event,fn, false); 
        });

    }

    clearAll(){

        this,this._operation = [];

    }

    clearEntry(){

        this._operation.pop();

    }

    addOperation(value){

        this._operation.push(value);

    }

    setError(){
        
        this.displayCalc = "Error";

    }

    execBtn(value){

        switch (value){

        case 'ac':
            this.clearAll();
            break;
        case 'ce':
            this.clearEntry();
            break;
        case 'soma':
             
            break;
        
        case 'subtracao':
             
            break;
        
        case 'divisao':
             
            break;
        
        case 'multiplicacao':
             
            break;
        
        case 'porcento':
             
            break;
        
        case 'igual':
             
            break;

        case 0:
        case 1:
        case 2:    
        case 3:    
        case 4:    
        case 5:    
        case 6:    
        case 7:    
        case 8:    
        case 9:    
            this.addOperation(parseInt(value));
        break;
        
        default:
            this.setError();
        break;

        }
    }

    initButtonsEvents(){

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        // document.querySelector"All" para selecionar todos os elementos igual que está no paramentro
    

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e =>{

               let textBtn = btn.className.baseVal.replace("btn-","");
    
               this.execBtn();
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer"

            });

        })

    }


    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }
    

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}

// this._currentDate; seria para deixar o atributo "privado" o "_" serve para isso 
// esse get e set foram feito para poder privar realmente as informações digamos assim