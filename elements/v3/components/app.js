const main_container = document.getElementById("main");
const controles_container = document.getElementById("controles");


// var e2 = new QElement(oneElementData[1]);
// main_container.appendChild(e2.renderElement())// I can also send where this element should be build
// e2.printOnConsole();


// var e3 = new QElement(oneElementData[2]);
// main_container.appendChild(e3.renderElement())// I can also send where this element should be build
// e3.printOnConsole();

// Build all elements one time
for (let index = 0; index < oneElementData.length; index++) {
    const element = new QElement( oneElementData[index]);
    main_container.appendChild(element.renderElement())// I can also send where this element should be build
    element.printOnConsole();
}
