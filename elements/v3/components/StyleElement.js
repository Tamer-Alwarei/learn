class StyleElement extends TheElement{
    constructor(state,ss){
        console.log(state)
        super(state.state)
        this.buildStyle();
    }
    buildStyle(){
        const style = this.state.style;
        for (let key in style){
            if(style.hasOwnProperty(key)){
              console.log(`${key} : ${style[key]}`)
              this.switchStyle(key,style[key]);
            }
         }
    }
    switchStyle(key,value){
        const _that = this;
        switch (key) {
            case "color":
                const elementContent = new OptionElement(
                    {
                        htmltag : "input",
                        content : value,
                        style : {
                            color : "purple",
                            margin : "20px auto"
                        }
                    })

                const _el = elementContent.renderElement();
                _el.addEventListener("input",function(e){
                    console.log('cllllick')
                    console.log(_that)
                    _that.state.style.color = e.target.value;
                })
                controles_container.appendChild(_el)
                break;
            case "padding":
            
                break;
            default:
                break;
        }
    }
}