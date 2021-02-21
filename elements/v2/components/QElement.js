class QElement extends TheElement{
    constructor(state,ss){
       super(state)
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
        
        this.TheElementDom.addEventListener("click",function(){
            // _this.buildItemControles();
            console.log('click')
            var e1 = new TheElement(oneElementData[0]);
            controles_container.appendChild(e1.renderElement())
        });

    }
}