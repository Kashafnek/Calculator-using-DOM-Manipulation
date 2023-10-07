function simplecalculator() {
    var first = document.getElementById("no1").value;
    var second = document.getElementById("no2").value;
    var Operator = document.getElementById("Operator").value;

    if (Operator == "Average") {
        var Result = (parseInt(first) + parseInt(second)) / 2;
    }

    else if (Operator == "-") {
        var Result = parseInt(first) - parseInt(second);
    }

    else if (Operator == "Percentage") {
        var Result = (parseInt(first) / parseInt(second)) * 100;
    }

    else if (Operator == "Power") {
        var Result = parseInt(first) ** parseInt(second);
    }

      else if (Operator == "Exponential") {
        var Result = parseInt(first) ** parseInt(second);
    }

    else if (Operator == "*") {
        var Result = parseInt(first) * parseInt(second);
    }

    else if (Operator == "/") {
        var Result = parseInt(first) / parseInt(second);
    }

    else if (Operator == "+") {
        var Result = parseInt(first) + parseInt(second);
    }

    document.getElementById("Answer").value = Result
}
