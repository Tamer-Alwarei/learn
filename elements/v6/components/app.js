const d_QElements = all_data.components;
const dom_main_container = document.getElementById("main-inner");
const dom_controles_container = document.getElementById("controles-inner");
const dom_components_inner = document.getElementById('components-inner');
const dom_top_controles_nav = document.getElementById('top-controles-nav')
let o_a_allElementsObject = [];

// build component for html, like input group

// for each element, one choice options panel editing or manula css editing
// element number with its parent
// conditions for some elements like <img can have a src attr
// rule for each option, like the font-weight to be a select list
// apply css versions, when use select this css or that.

// good question _ is it Every time I call the object it Calls the Constructor
// Convert json to html https://stackoverflow.com/questions/23062537/how-to-convert-html-to-json-using-php



///////////////////////////////
// app //////////////////////////

// Build all elements one time
for (let index = 0; index < d_QElements.length; index++) {
    const d_this_ele = d_QElements[index]
    const o_element = new TheElement( d_this_ele);
    o_a_allElementsObject.push(o_element)
    renderElement(o_element,d_this_ele)
}

function renderElement(o_element,d_this_ele){
    // dom_main_container.appendChild(o_element.exportElement())
    if(d_this_ele.noParent){
        dom_main_container.appendChild(o_element.exportElement())// I can also send where this element should be build
    }else{
        const _parent = document.getElementById(o_element.state.parentId);
        _parent.appendChild(o_element.exportElement())
    }
}

// Build page btn
// Give the page btn eventlistener
// append page btn to top controles nav
for (let index = 0; index < d_pages.length; index++) {
    const element = d_pages[index];
    const dom_btn = document.createElement('button');
    dom_btn.className = "btn btn-light mr-2"
    dom_btn.innerText = element
    dom_btn.addEventListener('click',function(){
        showHidePageElements(element)
    })
    dom_top_controles_nav.appendChild(dom_btn)
}

showHidePageElements('queue')
function showHidePageElements(_page){
    for (let index = 0; index < o_a_allElementsObject.length; index++) {
        const element = o_a_allElementsObject[index];
        if(element.state.belongToPage === _page || element.state.belongToPage === 'all'){
            element.showElement()
        }else{
            element.hideElement()
        }
    }
}

// build components section
for (let index = 0; index < o_a_allElementsObject.length; index++) {
    const element = o_a_allElementsObject[index];
    const _e = document.createElement('div')
    _e.innerHTML = '<div></div>'
    const _e_span = _e.getElementsByTagName('div')[0]
    _e_span.appendChild(element.renderElementPointer())
    dom_components_inner.appendChild(_e_span)
}




