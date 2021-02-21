class ElementProperties{
    constructor(props){
        this.completeElementObj = props;
        console.log(props)
        this.build();
    }
    build(){
        // build options
        // content 
        // style - padding margin border color
        
        const elementContent = new OptionElement(
            {
                htmltag : "input",
                content : this.completeElementObj.content,
                style : {
                    color : "purple",
                    margin : "20px auto"
                }
            })
        controles_container.appendChild(elementContent.renderElement())
        
        const e1 = new StyleElement(this.completeElementObj)
    }
}