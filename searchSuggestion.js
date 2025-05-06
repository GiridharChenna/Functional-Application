// ----------- SEARCHING CITIES -------------------

let inputBox = document.getElementById("input-box")
let resultBox = document.querySelector(".result-box")

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = cities.filter((city) => {
            return city.toLowerCase().includes(input.toLowerCase())
        })
        display(result);
        
        if(result.length == 0){
            resultBox.innerHTML = "";
        }
    }   

    if(result.length === 0){
        resultBox.innerHTML = '';
    }
}

function display(cities){
    const content = cities.map((city) =>{
        return "<li onclick = selectInput(this)>"+ city +"</li>";
    });
    resultBox.innerHTML = "<ul>"+ content.join('') +"</ul>"
}

function selectInput(city){
    inputBox.value = city.innerHTML;
    resultBox.innerHTML ='';
}