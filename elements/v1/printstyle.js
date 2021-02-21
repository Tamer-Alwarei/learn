function printStyle(){
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