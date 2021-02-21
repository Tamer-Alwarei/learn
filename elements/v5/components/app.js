// good question _ is it Every time I call the object it Calls the Constructor
// Convert json to html https://stackoverflow.com/questions/23062537/how-to-convert-html-to-json-using-php
class TheElement{
    constructor(props){
        this.key = props.key ? props.key : "";
        this.style = {}; // only for print style on screen
        this.state = {
            elementType : props.elementType,
            htmltag : props.htmltag,
            attrs : props.attrs,
            content : props.content,
            class : props.class,
            id : props.id,
            parentId : props.parentId,
            noParent : props.noParent,
            style : props.style,
            styleKeys : [],
            template : props.template,
            belongToPage : props.belongToPage
        };
        this.loopStyle();
        this.createTheElementDom();
        // console.log(this)
    }
    showElement(){
        this.TheElementDom.style.display = 'block'; 
    }
    hideElement(){
        this.TheElementDom.style.display = 'none';  
    }
    loopStyle(){
        const _styleKeys = [];
        for (let style of Object.keys(this.state.style)) { 
            _styleKeys.push(style)
        }
        this.state.styleKeys = _styleKeys
    }
    createTheElementDom(){ // build the element
        
        if( this.state.elementType === "ee" ){
            this.TheElementDom =  document.createElement(this.state.htmltag);
            this.addEventOpenOptions()
        }

        if(this.state.elementType === "oe"){
            this.TheElementDom =  document.createElement(this.state.htmltag);
        }
        
        this.refreshElement();
    }
    refreshElement(){
        // refresh all attrs
        this.refreshAttrs()
        // refresh content
        this.refreshContent()
        // refresh style
        this.refreshStyle()
    }
    refreshAttrs(){
        // set all attrs and attr values on the element dom
        if(this.state.attrs){
            var attrs_keys = Object.keys(this.state.attrs)
            for (let attr of attrs_keys) { 
                if(attr === 'class'){
                    const class_list = this.state.attrs['class']
                    for (let j = 0; j < class_list.length; j++) {
                        const _class = class_list[j];
                        this.TheElementDom.classList.add(_class);
                    }
                }else{
                    this.TheElementDom.setAttribute( attr, this.state.attrs[attr])
                }
            }
        }
    }
    refreshStyle(){
        // set all style Properties and Values on the element dom
        var this_style_keys = Object.keys(this.state.style)
        for (let index = 0; index < this_style_keys.length; index++) {
            const option = this_style_keys[index];
            this.TheElementDom.style[option] = this.state.style[option]
            this.style[option] = this.state.style[option];
        }
    }
    refreshContent(){
        if(this.state.elementType === "ee"){
            if(this.state.content != "children"){            
                this.TheElementDom.innerHTML = this.state.content;
            }
        }
        
        if(this.state.elementType === "oe"){
            this.TheElementDom.value = this.state.content;
        }
    }
    renderElement(){
        // console.log(this.TheElementDom)
        // console.log(this)
        // console.dir(this.TheElementDom)
        
        if( this.state.elementType === "ee" ){
            if(this.state.noParent){
                return this.TheElementDom
            }else{
                const _parent = document.getElementById(this.state.parentId);
                _parent.appendChild(this.TheElementDom)
            }
        }
        
        if(this.state.elementType === "oe"){
            const _label = document.createElement('label')
            _label.innerText = this.key 
            const _form_group = document.createElement('div')
            _form_group.classList.add('form-group')
            _form_group.appendChild(_label)
            _form_group.appendChild(this.TheElementDom)
            this.TheElementDom = _form_group
            return this.TheElementDom
        }
        
    }
    addEventOpenOptions(){
        // When click on the element open the options section
        const _the_q_element = this;
        _the_q_element.TheElementDom.addEventListener("click",function(event){
            event.stopPropagation();
            // build properties for this element on the options section
            _the_q_element.buildProperties()
        });
        
    }
    get content(){
        // Get the content of the element
        return this.state.content;
    }
    set content(_new){
        // Set the new content 
        this.state.content = _new;
        this.refreshElement()
    }
    setAttrs(key,_new){
        this.state.attrs[key] = _new;
        this.refreshElement()
    }
    setStyle(key,_new){
        // Update the element style data on state 
        // Then refresh the element to apply the new style 
        this.state.style[key] = _new;
        this.refreshElement()
    }
    addEventChangeElementAttrs(_thatElement , _key){
        // if(_key === "id"){
            this.TheElementDom.addEventListener('input',function(e){ 
                _thatElement.setAttrs(_key, e.target.value )
            })
        // }
    }
    addEventChangeElementContent(_thatElement , _key){
        // Only for option element
        // Assign event input "onChange" to each option element
        // When Option element got change value, 
        // it should effect the q element 
        // The content will get change by call the option set function
        // The style option should should call the setStyle function
        
        this.TheElementDom.addEventListener('input',function(e){ 
            _thatElement[_key] = e.target.value
        })
    }
    addEventChangeElementStyle(_thatElement , _key){
        this.TheElementDom.addEventListener('input',function(e){ 
            _thatElement.setStyle(_key,e.target.value)
        })
    }
    buildExtraStyleProperties(){
        const extra_options_container = document.createElement('div')
        extra_options_container.id = "extra_options_container"
        extra_options_container.className = "bg-light p-3 mt-1"
        controles_container.appendChild(extra_options_container)
        // build all properties
        var _all_options_keys = Object.keys(this.state._all_options)
        for (let index = 0; index < _all_options_keys.length; index++) {
            let _key = _all_options_keys[index];
            if(this.state.styleKeys.indexOf(_key) === -1){
                extra_options_container.appendChild(this.addOptionBtn(_key));
            }
        }
    }
    buildAttrsProperties(){
        if(this.state.attrs['id'] != ""){
            const oneOptionAsJson = Object.assign({}, otherOption["id"]);
            oneOptionAsJson.content = this.state.attrs['id'];
            const elementOption = new TheElement(oneOptionAsJson)
            elementOption.addEventChangeElementAttrs(this,oneOptionAsJson.key);
            controles_container.appendChild(elementOption.renderElement())
        }
        if(this.state.attrs['class'] != ""){
            const oneOptionAsJson = Object.assign({}, otherOption["class"]);
            oneOptionAsJson.content = this.state.attrs['class'];
            const elementOption = new TheElement(oneOptionAsJson)
            elementOption.addEventChangeElementAttrs(this,oneOptionAsJson.key);
            controles_container.appendChild(elementOption.renderElement())
        }
        if(this.state.attrs['src'] != ""){
            const oneOptionAsJson = Object.assign({}, otherOption["src"]);
            oneOptionAsJson.content = this.state.attrs['src'];
            const elementOption = new TheElement(oneOptionAsJson)
            elementOption.addEventChangeElementAttrs(this,oneOptionAsJson.key);
            controles_container.appendChild(elementOption.renderElement())
        }
    }
    buildContentProperties(){
        if(this.state.content != ""){
            const oneOptionAsJson = Object.assign({}, otherOption["content"]);
            oneOptionAsJson.content = this.state.content;
            const elementOption = new TheElement(oneOptionAsJson)
            elementOption.addEventChangeElementContent(this,oneOptionAsJson.key);
            controles_container.appendChild(elementOption.renderElement())
        }
    }
    buildStyleProperties(){
        // build only the element active options
        for (let index = 0; index < this.state.styleKeys.length; index++) {
            let _key =  this.state.styleKeys[index]
            controles_container.appendChild(this.buildOneStyleProperty(_key,true))
            //delete this.state._all_options[_key]            
        }
    }
    buildProperties(){
        // build options
        // content 
        // style - padding margin border color
        this.state._all_options = Object.assign({}, keysOptions);
        controles_container.innerHTML = ""
        
        // build content testbox as a property
        this.buildContentProperties()
        
        // build id or other attrs
        this.buildAttrsProperties()

        // build style properties
        this.buildStyleProperties()
        
        // build extra style properties
        this.buildExtraStyleProperties()
        
    }
    buildOneStyleProperty(_key){
        // Build one property on options section
        const oneOptionAsJson = this.state._all_options[_key];
        if(this.state.style[_key]){
            console.log(_key)
            oneOptionAsJson.content = this.state.style[_key];
        }else{
            // oneOptionAsJson.content = "";
        }
        
        // Create TheElement object
        // give the element event
        // append element to cotroles container
        let just_container = document.createElement('div')
        const elementOption = new TheElement(oneOptionAsJson)
        elementOption.addEventChangeElementStyle(this,oneOptionAsJson.key);
        just_container.appendChild(elementOption.renderElement())
        
        // Create add remove buttons for this option
        // add evnets to this buttons
        // append this buttons to a new contaienr should be
        // build one time under the options container
        just_container.appendChild(this.removeOptionBtn(_key,elementOption))
        const _clear = document.createElement('div')
        _clear.className = 'clearfix'
        just_container.appendChild(_clear)
        return just_container
    }
    addOptionBtn(_key){
        const _the_q_element = this;

        const _add_btn = document.createElement("button")
        _add_btn.className = 'btn btn-secondary btn-sm'
        _add_btn.innerHTML = `add ${_key}`
        
        const container_z1 = document.createElement('div')
        container_z1.className = "mb-2"
        container_z1.appendChild(_add_btn)
        
        _add_btn.addEventListener('click',function(e){ 
            _the_q_element.addOption(_key)
            container_z1.remove()
        })
        return container_z1
    }
    removeOptionBtn(_key,_this){
        const _the_q_element = this;
        const _remove_btn = document.createElement("button")
            _remove_btn.className = 'btn btn-light btn-sm float-right'
            _remove_btn.innerHTML = `Remove ${_key}`
            _remove_btn.addEventListener('click',function(e){ 
                e.target.remove();
                _this.TheElementDom.remove();
                _the_q_element.removeOption(_key)
            })
        return _remove_btn
        
    }
    addOption(_key){
        
        // add property to element state styleKeys
        this.state.styleKeys.push(_key)
        
        // Build the property 
        controles_container.prepend( this.buildOneStyleProperty(_key,true))

        // remove property from _all_options
        delete this.state._all_options[_key]

        // console.log(this)
    }
    removeOption(_key){
        document.getElementById('extra_options_container').prepend(this.addOptionBtn(_key,false));
        // remove property from element state styleKeys
        //delete this.state.styleKeys[_key] // array
        let index = this.state.styleKeys.indexOf(_key);
        this.state.styleKeys.splice(index, 1);
        this.TheElementDom.style[_key] = "inherit"

        // remove property from element state style
        delete this.state.style[_key]
        this.refreshElement()
        // remove property from options section
        //this.removeOneProperty(_key)
        // add key to element allOptions array
        // this.state._all_options.push(_key)
    }




    // this function is just to show the css text 
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
const main_container = document.getElementById("main-inner");
const controles_container = document.getElementById("controles-inner");
let allElementsObject = [];
// Build all elements one time
for (let index = 0; index < QElements.length; index++) {
    const _this_ele = QElements[index]
    const element = new TheElement( _this_ele);
    allElementsObject.push(element)

    if(typeof _this_ele.children != "undefined" && _this_ele.children != null && _this_ele.children.length != null && _this_ele.children.length > 0)
    {
        _el(element,_this_ele)
        
        for(let index = 0; index < _this_ele.children.length; index++)
        {
            const _this_ele2 = _this_ele.children[index]
            const element2 = new TheElement( _this_ele2);
            _el(element2,_this_ele2)
            
            if(typeof _this_ele2.children != "undefined" && _this_ele2.children != null && _this_ele2.children.length != null && _this_ele2.children.length > 0)
            {
                for(let index = 0; index < _this_ele2.children.length; index++)
                {
                    const _this_ele3 = _this_ele2.children[index]
                    const element3 = new TheElement( _this_ele3);
                    _el(element3,_this_ele3)
                }
            }
        }
    }else{
        _el(element,_this_ele)
    }
}
console.log(allElementsObject)
function _el(element,_this_ele){
    if(_this_ele.noParent){
        main_container.appendChild(element.renderElement())// I can also send where this element should be build
    }else{
        element.renderElement()
    }
}
showHidePageElements('queue')
function showHidePageElements(_page){
    for (let index = 0; index < allElementsObject.length; index++) {
        const element = allElementsObject[index];
        if(element.state.belongToPage === _page || element.state.belongToPage === 'all'){
            element.showElement()
        }else{
            element.hideElement()
        }
    }
}
const _pages = ['before','queue','after','error'];
for (let index = 0; index < _pages.length; index++) {
    const element = _pages[index];
    const page_btn = document.getElementById(element+'-page-btn')
    page_btn.addEventListener('click',function(){
        showHidePageElements(element)
    })
}
