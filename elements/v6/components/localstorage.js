//////////////////////////////
// store data in localstorage
const myElements = [];
function saveData(){
    localStorage.setItem("app", JSON.stringify(myElements));
}
function getData(){
    console.log(JSON.parse(localStorage.getItem('app')))
}