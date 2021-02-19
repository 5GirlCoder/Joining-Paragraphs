function GetPara1()
{
    var Input = [];
    for (var i = 1; i <= 6; i++)
    {
        Input.push(document.getElementById("I" + i).value);
    }
    Input.join(" - ")
    document.getElementById("ShowPara1").innerHTML=Input.join(" - ");
}

function GetPara2()
{
    var Input2 = [];
    for (var y = 1; y <= 6; y++)
    {
        Input2.push(document.getElementById("PI" + y).value);
    }
    Input2.join(" ")
    document.getElementById("ShowPara2").innerHTML=Input2.join(" ");
}