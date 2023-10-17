window.onload = function () {

    var btn = document.getElementById("btn");
    var output = document.getElementById("output");


    btn.onclick = function () {
        var number = Math.floor(Math.random() * 100) + 1;
        output.innertText = number;
        
    };

};

