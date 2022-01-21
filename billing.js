function sum(){
    /* Restaurant Prices */ 
    var num1 = parseInt(document.getElementById("drinks").value);
    var num2 = parseInt(document.getElementById("fries").value);
    var num3 = parseInt(document.getElementById("lunch").value);
    var num4 = parseInt(document.getElementById("burger").value);
    var num5 = parseInt(document.getElementById("pizza").value);
    var num6 = parseInt(document.getElementById("cheese-burger").value);
    /* Tax & Service charges */ 
    var num7 = parseInt(document.getElementById("serv-charges").value);
    var num8 = parseInt(document.getElementById("tax").value);

    var subtotal = num1 + num2 + num3 + num4 + num5 + num6;
    var tax = subtotal * 0.10;
    var total = subtotal + tax;

    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("tax").innerHTML = tax;
    document.getElementById("total").innerHTML = total;

}