const ELEM1 = document.querySelector(".elem1");
const ELEM2 = document.querySelector(".elem2");
const ANS = document.querySelector(".get_here");
const CTA = document.querySelector(".cta button");
const ACTION = document.querySelector(".align");

CTA.classList.remove("hide");
ACTION.classList.add("hide");

function reveal() {
    CTA.classList.toggle("hide");
    ACTION.classList.toggle("hide");
}
// CTA.onclick = reveal ;
CTA.addEventListener("click",reveal,false);

let newTag1 = document.createElement("label");
newTag1.setAttribute("for","fnumber");
newTag1.innerHTML = "Enter First Number <br>";
ELEM1.append(newTag1);
console.log(newTag1);

let newInput1 = document.createElement("input");
newInput1.setAttribute("type","text");
newInput1.setAttribute("pattern","[0-9]{10}");
newInput1.setAttribute("title","Enter only digts [0-9]");
ELEM1.append(newInput1);

let newTag2 = document.createElement("label");
newTag2.setAttribute("label","snumber");
newTag2.innerHTML = "Enter Second Number <br>";
ELEM2.append(newTag2);

let newInput2 = document.createElement("input");
newInput2.setAttribute("type","text");
newInput2.setAttribute("pattern","[0-9]{10}");
newInput2.setAttribute("title","Enter only digts [0-9]");
ELEM2.append(newInput2);

let getAns = document.createElement("button");
getAns.setAttribute("onclick","answer() ");
getAns.innerHTML = "SUBMIT";
getAns.style = "padding:8px;background-color:yellow;border:2px solid black;font-weight:bold";
ANS.append(getAns);

let reset_doc = document.createElement("button");
reset_doc.setAttribute("onclick","reset() ");
reset_doc.innerHTML = "RESET";
reset_doc.style = "padding:8px;background-color:yellow;border:2px solid black;font-weight:bold" ;
ANS.append(reset_doc);



function answer() {
    var sum1 = newInput1.value ;
    var sum2 = newInput2.value ;
    var ans = parseFloat(sum1) + parseFloat(sum2);
    alert("The answer is : "+ans);
}
function reset() {
    newInput1.value = "" ;
    newInput2.value = "" ;
}

function Change() {
    
}