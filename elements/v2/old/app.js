class TElement {
    constructor(props){
        this.state = {
            style : props.style,
            color : props.color,
            isHeddin : props.hidden,
            class : props.class,
            content : props.content
        }
        console.log(props)
        console.log(this)
    }

    render(){
        return `<div class="container"><h4 class="${this.state.class}">${this.state.content}</h4></div>`
    }

    setContent(newContent){
        this.state.content = newContent;
        this.update();
    }
    setColor(color){
        this.state.color = color;
        this.update();
    }
    update() {
        const _ele = document.createElement('div');
        _ele.appendChild(this.render())
        console.log(_ele)
        document.querySelector('body').innerHTML = _ele
    }

}

var elementData = {
    style: '',
    isHeddin: false,
    class: 'title text-center my-3',
    content: 'This is a dynamic element'
}

var tElement1 = new TElement(elementData)
tElement1.update();


class StyleOptionsSection{
    constructor(props){
        console.log(props)
    }
    render(){
        let _this = this;
        // empty the options section
        document.getElementById('controles').innerHTML = "";
        // build each option 
        const option_input_content = document.createElement('input')
        option_input_content.setAttribute("type", "text")
        option_input_content.classList.add('form-control');
        option_input_content.value = _this.content
        option_input_content.addEventListener('input',function(e){
            _this.content = e.target.value
            _this.textcontent(_this.domElement)
        });
        controles_container.appendChild(option_input_content)
    }

}

class StyleOptions{
    constructor(props){
        this.color = props.color;
    }
    color(){

    }
}