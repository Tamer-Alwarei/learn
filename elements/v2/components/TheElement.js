class TheElement{
    constructor(props){
        this.state = {
            content : props.content,
            style : {
                color : props.style.color,
                margin : props.style.margin
            },
            htmltag : props.htmltag,
            className : props.className
        };
        this.createTheElementDom();
    }

    createTheElementDom(){ // update the element with the new options
        const domEl = document.createElement(this.state.htmltag);

        domEl.innerHTML = this.state.content;
        domEl.style.color = new GiveStyle(this.state.style).color()
        
        if(this.state.htmltag === 'div'){
            const newChild = document.createElement('div');
            newChild.innerHTML= `
                <div class="container py-5 border">
                    <button class="btn btn-light">submit</button>
                </div>
            `;
            domEl.appendChild(newChild)
        }

        this.TheElementDom =  domEl;
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

    renderElement(){
        // console.log(this.TheElementDom)
        // console.log(this)
        // console.dir(this.TheElementDom)
        return this.TheElementDom
    }



}