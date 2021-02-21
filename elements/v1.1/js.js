class QueueElement{
    
    constructor( _ele ){
        this.domElement = document.createElement(_ele.htmltag);
        this.htmltag = _ele.htmltag;
        this.content = _ele.content;
        this.idName = _ele.idName;
        this.className = _ele.className;
        this.content = _ele.content;
        this.display = _ele.display;
        this.width =  "auto";//_ele.width;
        this.height = _ele.height;
        this.fontSize = _ele.fontSize;
        this.textalign = "center";//_ele.textAlign;
        this.margin = (_ele.margin != undefined ? _ele.margin : ""); // 10px; 10px 15px; 5px 5px 10px; 5px 15px 0px 10px;
        this.padding = (_ele.padding != undefined ? _ele.padding : ""); // 10px; 10px 15px; 5px 5px 10px; 5px 15px 0px 10px;
        this.border = (_ele.border != undefined ? _ele.border : "");
        this.display = _ele.display;
        this.color = (_ele.color != undefined ? _ele.color : "");
        this.style = {};
        this.borderRadius = _ele.borderRadius 
        this.buildItem();
        console.dir((this.domElement))
        console.log(this.domElement);
        console.log(this)
    }
    
    buildItem(){ 
        let _this = this;
        this.domElement.classList.add(this.className);
        this.domElement.id = this.idName
        this.textcontent(this.domElement);
        this.addStyle(this.domElement);
        this.domElement.addEventListener("click",function(){
            _this.buildItemControles();
        });
        main_container.appendChild(this.domElement);
        // return this.domElement;
    }
    textcontent(element){
        element.textContent = this.content;
    }
    elePadding(element){      
        if( this.padding != 0 && this.padding != undefined && this.padding != null){
            element.style.padding = this.padding;
            this.style.padding = this.padding;
        }else{
            delete this.style["padding"];
        }
    }
    eleMargin(element){      
        if( this.margin != 0 && this.margin != undefined && this.margin != null){
            element.style.margin = this.margin;
            this.style.margin = this.margin;
        }else{
            delete this.style["margin"];
        }
    }
    eleFontsize(element){      
        if( this.fontSize != 0 && this.fontSize != undefined && this.fontSize != null){
            element.style.fontSize = this.fontSize;
            this.style.fontSize = this.fontSize;
        }else{
            delete this.style["fontSize"];
        }
    }
    eleBorder(element){
        // this.style.border = this.border;        
        if( this.border != 0 && this.border != undefined && this.border != null){
            element.style.border = this.border;
            this.style.border = this.border;
        }else{
            delete this.style["border"];
        }
    }
    eleColor(element){
        // this.style.color = this.color;        
        if( this.color != 0 && this.color != undefined && this.color != null){
            element.style.color = this.color;
            this.style.color = this.color;
        }else{
            delete this.style["color"];
        }
    }
    
    addStyle(myElement){
        this.elePadding(myElement);
        this.eleMargin(myElement);
        this.eleBorder(myElement);
        this.eleColor(myElement);
        this.eleFontsize(myElement);
        myElement.style.width = this.width;
        myElement.style.textAlign = this.textalign;
        myElement.style.display = this.display;
        myElement.style.borderRadius = this.borderRadius
    }
    buildItemControles(){
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
        
        const option_input_fontSize = document.createElement('input');
        option_input_fontSize.setAttribute("type", "text")
        option_input_fontSize.classList.add('form-control');
        option_input_fontSize.value = _this.fontSize
        option_input_fontSize.addEventListener('input',function(e){
            _this.fontSize = e.target.value
            _this.eleFontsize(_this.domElement)
            _this.printStyle()
        });
        controles_container.appendChild(option_input_fontSize)
        
        const option_input_padding = document.createElement('input');
        option_input_padding.setAttribute("type", "text")
        option_input_padding.classList.add('form-control');
        option_input_padding.value = _this.padding
        option_input_padding.addEventListener('input',function(e){
            _this.padding = e.target.value
            _this.elePadding(_this.domElement)
            _this.printStyle()
        });

        const option_input_margin = document.createElement('input');
        option_input_margin.setAttribute("type", "text")
        option_input_margin.classList.add('form-control');
        option_input_margin.value = _this.margin
        option_input_margin.addEventListener('input',function(e){
            _this.margin = e.target.value
            _this.eleMargin(_this.domElement)
            _this.printStyle()
        });
        const padding_margin_container = paddingMarginTemplate(option_input_padding,option_input_margin)
        controles_container.appendChild(padding_margin_container)
        
        const option_input_border = document.createElement('input');
        option_input_border.setAttribute("type", "text")
        option_input_border.classList.add('form-control');
        option_input_border.value = _this.border
        option_input_border.addEventListener('input',function(e){
            _this.border = e.target.value
            _this.eleBorder(_this.domElement)
            _this.printStyle()
        });
        controles_container.appendChild(option_input_border)

        const option_input_color = document.createElement('input');
        option_input_color.setAttribute("type", "text")
        option_input_color.classList.add('form-control');
        option_input_color.value = _this.color
        option_input_color.addEventListener('input',function(e){
            _this.color = e.target.value
            _this.eleColor(_this.domElement)
            _this.printStyle()
        });
        controles_container.appendChild(option_input_color)
        
        // show class and id
        const option_label_class = document.createElement('button');
        option_label_class.classList.add('btn','btn-secondary','mr-2','mb-2')
        option_label_class.setAttribute('disabled','disabled')
        option_label_class.textContent = "class: "+_this.className;
        controles_container.prepend(option_label_class)

        const option_label_id = document.createElement('button');
        option_label_id.classList.add('btn','btn-secondary','mr-2','mb-2')
        option_label_id.setAttribute('disabled','disabled')
        option_label_id.textContent = "id: "+_this.idName;
        controles_container.prepend(option_label_id)

        this.printStyle()
        
    }
    printStyle(){
        // check if property has value or not
        var element_style_css = "";
        element_style_css += this.htmltag+"#"+this.idName+" {\n";
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

let listOfQueueElements = [
    {
        htmltag : "h1",
        className : ['header', 'ss'],
        idName : "headerid",
        content : "You are in a Queue",
        fontSize : "34px",
        // margin : "30px auto",
        margin : "30px 10px 15px",
        padding : "10px",
        border : "1px solid #ccc",
        color : "#333",
        borderRadius: "4px"
    },
    {
        htmltag : "span",
        className : ["main"],
        idName : "mainid",
        content : "Just a new content",
        fontSize : "12px",
        margin : "10px auto",
        // padding : "5",
        border : "0px solid green",
        display : "inline-block",
        borderRadius: "4px"
    },
    {
        htmltag : "h3",
        className : ["con"],
        idName : "conid",
        content : "Some other text from json",
        margin : "10px auto",
        padding : "5",
        border : "1px solid #f1f1f1",
        borderRadius: "4px"
    }
];

const main_container = document.getElementById("main");
const controles_container = document.getElementById("controles");

// Build all elements one time
for (let index = 0; index < listOfQueueElements.length; index++) {
    const element = new QueueElement( listOfQueueElements[index]);
    // main_container.appendChild(element.buildItem());
}


// When click on any element show controles to the right section
