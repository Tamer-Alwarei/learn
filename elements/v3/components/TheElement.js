class TheElement{
    constructor(props){
        // debugger
        console.log(props)
        this.state = {
            content : props.content,
            style : {
                color : (props.style.color != undefined ? props.style.color : ""),
                margin : props.style.margin
            },
            htmltag : props.htmltag,
            className : props.className
        };
        this.createTheElementDom();
    }

    createTheElementDom(){ // update the element with the new options
        const domEl = document.createElement(this.state.htmltag);
        if(this.state.htmltag === 'input'){
            domEl.value = this.state.content;
        }else{
            
            domEl.innerHTML = this.state.content;
            domEl.style.color = new GiveStyle(this.state.style).color()
        }
        

        this.TheElementDom =  domEl;
        this.state.TheElementDom =  domEl;
        console.log(this.TheElementDom)
        // debugger;
    }
    get content(){
        return this.state.content;
    }
    set content(newContent){
        this.state.content = newContent;
    }

    refreshContent(){
        console.log(this.state.content)
        return this.state.content;
    }
    rebuildDom(ttt){
        this.TheElementDom = ttt
    }
    renderElement(){
        // console.log(this.TheElementDom)
        // console.log(this)
        // console.dir(this.TheElementDom)
        return this.TheElementDom
    }



}