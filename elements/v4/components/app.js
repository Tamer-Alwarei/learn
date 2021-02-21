class TheElement{
    constructor(props){
        console.log(props)
        this.style = {};
        this.state = {
            elementType : props.elementType,
            htmltag : props.htmltag,
            className : props.className,
            
            content : props.content,
            
            style : {
                width : (props.style.width != undefined ? props.style.width : ""),
                color : (props.style.color != undefined ? props.style.color : ""),
                margin : (props.style.margin != undefined ? props.style.margin : ""),
                padding : (props.style.padding != undefined ? props.style.padding : ""),
            }
            
        };
        this.createTheElementDom();
        console.log(this)
    }

    createTheElementDom(){ // build the element
        // const domEl = 
        this.TheElementDom =  document.createElement(this.state.htmltag);
        
        this.refreshElement();
        
        // check if its Q or O
        if( this.state.elementType === "q" ){
            this.addEventOpenOptions()
            myElements.push(this.state) // give each element local id
        }else if(this.state.elementType === "o"){
            
        }
    }
    
    renderElement(){
        // console.log(this.TheElementDom)
        // console.log(this)
        // console.dir(this.TheElementDom)
        return this.TheElementDom
    }
    addEventOpenOptions(){
        const _that = this;
        _that.TheElementDom.addEventListener("click",function(){
            _that.buildProperties()
            
        });
        
    }
    refreshElement(){
        // refresh content
        // refresh style
        if(this.state.elementType === "q"){
            this.TheElementDom.innerHTML = this.state.content;
            
        }else if(this.state.elementType === "o"){
            this.TheElementDom.value = this.state.content;
        }
        var this_style_keys = Object.keys(this.state.style)
        for (let index = 0; index < this_style_keys.length; index++) {
            const option = this_style_keys[index];
            this.TheElementDom.style[option] = this.state.style[option]
            this.style[option] = this.state.style[option];
        }
    }
    get content(){
        return this.state.content;
    }
    set content(_new){
        this.state.content = _new;
        this.refreshElement()
    }
    
    setStyle(key,_new){
        // switch(key){
        //     case "width" : this.state.style.width = _new;
        //     break;
        //     case "padding" : this.state.style.padding = _new;
        //         // if( _new != 0 && _new != undefined && _new != null){ // It depends on the default style framework
        //         //     this.state.style.padding = _new;
        //         //     this.style.padding = _new;
        //         // }else{
        //         //     delete this.style["padding"];
        //         // }
        //     break;
        //     case "margin" : this.state.style.margin = _new;
        //     break;
        //     case "color" : this.state.style.color = _new; 
        //     break;
        //     default: 
        // }
        this.state.style[key] = _new;
        this.refreshElement()
        
    }
    
    addEventChangeElement(_thatElement , _key){
        if(_key === "content"){
            this.TheElementDom.addEventListener('input',function(e){ 
                _thatElement[_key] = e.target.value
            })
        }else{
            this.TheElementDom.addEventListener('input',function(e){ 
                _thatElement.setStyle(_key,e.target.value)
            })
        }
    }
    buildProperties(){
        // build options
        // content 
        // style - padding margin border color
        const _that = this;
        controles_container.innerHTML = ""

        for (let index = 0; index < keysOptions.length; index++) {
            
            const optionAsJson = keysOptions[index];

            if(optionAsJson.optionType === "style"){
                optionAsJson.content = _that.state.style[optionAsJson.key];

            }else if(optionAsJson.optionType === "content"){
                optionAsJson.content = _that.state.content;
            }

            const elementOption = new TheElement(optionAsJson)
            elementOption.addEventChangeElement(_that,optionAsJson.key);
            controles_container.appendChild(elementOption.renderElement())
        }
    }

    buildStyleText(){ // not used yet
        const style = this.style;
        for (let key in style){
            if(style.hasOwnProperty(key)){
              console.log(`${key} : ${style[key]}`)
            }
         }
    }
    printStyle(){
        // check if property has value or not
        var element_style_css = "";
        element_style_css += this.state.htmltag+"#"+this.state.idName+" {\n";
        var this_style_keys = Object.keys(this.style)
        for (let index = 0; index < this_style_keys.length; index++) {
            element_style_css +=  "  " + this_style_keys[index] + " : " + this.style[this_style_keys[index]] +"\n";
        }
        element_style_css = element_style_css + "}"
        
        var element =  document.getElementById('pre');
        if (typeof(element) != 'undefined' && element != null)
        {
            var element_code =  document.getElementById('code');
            element_code.textContent = element_style_css;
        // Exists.
        }else{
            const element_style = document.createElement('pre');
            element_style.setAttribute("id", "pre");
            
            const element_style_code = document.createElement('code') 
            element_style_code.classList.add('language-css');
            element_style_code.setAttribute("id", "code");
            
            element_style.appendChild(element_style_code);
            controles_container.appendChild(element_style)
            element_style_code.textContent = element_style_css;
        }
        
        console.log(this.style)
        Prism.highlightAll()
    }
}

// store data in localstorage
const myElements = [];
function saveData(){
    localStorage.setItem("app", JSON.stringify(myElements));
}
function getData(){
    console.log(JSON.parse(localStorage.getItem('app')))
}


// app
const main_container = document.getElementById("main");
const controles_container = document.getElementById("controles");

// Build all elements one time
for (let index = 0; index < QElements.length; index++) {
    const element = new TheElement( QElements[index]);
    main_container.appendChild(element.renderElement())// I can also send where this element should be build
}
