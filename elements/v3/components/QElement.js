class QElement extends TheElement{
    constructor(state,ss){
       super(state)
       this.elementObj = state;
       console.log(this.state)
       console.log(this.TheElementDom)
       console.dir(this.TheElementDom)
       this.addEvent();
    }

    get newthings(){
        console.log('this is just test for QElement inheritance')
    }
    set newthings(_things){

    }

    printOnConsole(){
        console.log('this is just test for QElement inheritance')
    }

    addEvent(){
        const _that = this;
        this.TheElementDom.addEventListener("click",function(){
            // build Properties 
            // Send the element with it - Im not sure what to send if
            // i have to sned the object or the dom object or the htmlDom ???
            // Send what options - like content padding border
            // console.log(_that)
            const properties = new ElementProperties(_that);
            
        });

    }
}