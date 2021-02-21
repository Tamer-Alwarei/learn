class GiveStyle{
    constructor(props){
        this.state = {
            color : props.color,
            margin : props.margin
        }
    }

    color(){
        return this.state.color;
    }

    elePadding(element){      
        if( this.padding != 0 && this.padding != undefined && this.padding != null){
            element.style.padding = this.padding;
            this.style.padding = this.padding;
        }else{
            delete this.style["padding"];
        }
    }
    
    addStyle(myElement){
        this.elePadding(myElement);
        myElement.style.textAlign = this.textalign;
    }
}