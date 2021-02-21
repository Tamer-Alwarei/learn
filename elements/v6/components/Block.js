class Block {
    constructor(){
        
    }

    inputBlock(_ele){
        // should give random id
        const _outer = document.createElement('div')
        const _template = 
        `<div class="form-group">
            <label for="">${_ele.key}</label>
        </div>`
        _outer.innerHTML = _template;
        const _forms = _outer.getElementsByTagName('div')
        _forms[0].appendChild(_ele.exportElement())
        return _outer;
    }
}