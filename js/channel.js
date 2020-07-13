document.getElementById("time").innerHTML = Date();


function submit() {
    var name1 = document.getElementById("name1st").value;
    var name2 = document.getElementById("name2nd").value;
    var fullname = name1 + " " + name2;

    if (name1 == "" || name2 == "") {
        alert("Name cannot be Blank");
    } else if (!isNaN(name1) || !isNaN(name2)) {
        alert("Name cannot be number")
    } else {
        document.getElementById("show_name").innerHTML = ("Welcome " + fullname);
    }
}
function reset() {
    document.getElementById("name1st").value = "";
    document.getElementById("name2nd").value = "";
    document.getElementById("show_name").innerHTML = "";
}