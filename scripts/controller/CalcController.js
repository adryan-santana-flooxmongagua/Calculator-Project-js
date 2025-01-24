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

        this._operation = [];

    }

    clearEntry(){

        this._operation.pop();

    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    setLastOperation(value){

        this._operation[this._operation.length - 1] = value;

    }

    isOperation(value){

         return (['+','-','*','%','/'].indexOf(value) > - 1);

    }

    pushOperation(value){

        this._operation.push(value);

        if(this._operation.length > 3){

            this.calc();

        }

    }

    calc(){

        let last = this._operation.pop();

        let result = eval(this._operation.join(""));

        this._operation = [result, last];

        this.setLastNumberToDisplay();

    }

    setLastNumberToDisplay(){

        let lastNumber;

        for(let i = this._operation.length - 1; i >= 0; i--){

            if(!this.isOperation(this._operation[i])){
                lastNumber = this._operation[i];
                break;
            }

        }

        this.displayCalc = lastNumber;

    }

    addOperation(value){



        if(isNaN(this.getLastOperation())){

            if(this.isOperation(value)){

                this.setLastOperation(value);

            }else if(isNaN(value)){
                
                console.log('outra coisa', value);

            }else{
            
                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }

        }else{

            if(this.isOperation(value)){

                this.pushOperation(value);

            }else{

                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));

                //att display
                this.setLastNumberToDisplay();

            }
            
        }



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
            this.addOperation('+');
            break;
        
        case 'subtracao':
            this.addOperation('-');
            break;
        
        case 'divisao':
            this.addOperation('/');
            break;
        
        case 'multiplicacao':
            this.addOperation('*');
            break;
        
        case 'porcento':
            this.addOperation('%');
            break;
        
        case 'igual':

            break;

        case 'ponto':
            this.addOperation('.');
        break;

        case '0':
        case '1':
        case '2':    
        case '3':    
        case '4':    
        case '5':    
        case '6':    
        case '7':    
        case '8':    
        case '9':    

            this.addOperation(parseInt(value));

        break;
        

        default:
      //      this.setError();
        break;
      

        }
    }

    initButtonsEvents(){

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        // document.querySelector"All" para selecionar todos os elementos igual que está no paramentro
    

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag ", e =>{

               let textBtn = btn.className.baseVal.replace("btn-","");
    
               this.execBtn(textBtn);
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

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