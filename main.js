window.onload = function () {

    var number;
    var message;
    var btn = document.getElementById("btn");
    var output = docment.getElementById("output");


    btn.onclick = function () {
        var number = Math.floor(Math.random() * 100) + 1;
        document.write(number);
        
    }

}
