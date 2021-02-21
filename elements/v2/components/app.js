const main_container = document.getElementById("main");
const controles_container = document.getElementById("controles");


var e2 = new QElement(oneElementData[1]);
main_container.appendChild(e2.renderElement())// I can also send where this element should be build
e2.printOnConsole();


var e3 = new QElement(oneElementData[2]);
main_container.appendChild(e3.renderElement())// I can also send where this element should be build
e3.printOnConsole();