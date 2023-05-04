var screen1 = "";
var screen2 = "";
var operation = "";
var number = 0;

var history = document.getElementById("history");

//פונקציית לחיצה על ספרות
function click_number(number) {
    screen1 = screen1 + number;
    document.getElementById("cursor").innerHTML = screen1;
    document.getElementById("result").innerHTML = screen2;
};

//פונקציית נקודה עשרונית
function click_point() {
    screen1 = screen1 + '.';
    document.getElementById("cursor").innerHTML = screen1;
    document.getElementById("result").innerHTML = screen2;
};

//פונקציית איפוס צג תוצאה
function clear_screen() {
    screen1 = "";
    screen2 = "";
    operation = "";
    document.getElementById("cursor").innerHTML = screen1;
    document.getElementById("result").innerHTML = screen2;
};

//פונקציית +
function click_plus() {
    
        switch (operation) {
            case "":
                screen2 = screen1;
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "+":
                screen2 = parseFloat(screen2) + parseFloat(screen1);
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "-":
                screen2 = parseFloat(screen2) - parseFloat(screen1);
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "*":
                screen2 = parseFloat(screen2) * parseFloat(screen1);
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "/":
                screen1 = parseFloat(screen2) / parseFloat(screen1);
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "^2":
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "√":
                screen2 = Math.sqrt(screen1);
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "cos":
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "sin":
                screen1 = "";
                operation = '+';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "=":
                if (screen1 != "") {
                    screen2 = screen1;
                    screen1 = "";
                    operation = '+';
                    document.getElementById("cursor").innerHTML = screen1;
                    document.getElementById("result").innerHTML = screen2;
                }
                else {
                    operation = '+';
                    document.getElementById("cursor").innerHTML = screen1;
                    document.getElementById("result").innerHTML = screen2;
                    break;
                }
        }   
};

//פונקציית -
function click_minus() {
   
        switch (operation) {
            case "":
                screen2 = screen1;
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "+":
                screen2 = parseFloat(screen2) + parseFloat(screen1);
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "-":
                screen2 = parseFloat(screen2) - parseFloat(screen1);
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "*":
                screen2 = parseFloat(screen2) * parseFloat(screen1);
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "/":
                screen2 = parseFloat(screen2) / parseFloat(screen1);
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "^2":
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "√":
                screen2 = Math.sqrt(screen1);
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "cos":
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "sin":
                screen1 = "";
                operation = '-';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "=":
                if (screen1 != "") {
                    screen2 = screen1;
                    screen1 = "";
                    operation = '-';
                    document.getElementById("cursor").innerHTML = screen1;
                    document.getElementById("result").innerHTML = screen2;
                }
                else {
                    operation = '-';
                    document.getElementById("cursor").innerHTML = screen1;
                    document.getElementById("result").innerHTML = screen2;
                    break;
                }
        }
};

//פונקציית *
function click_kefel() {
   
        switch (operation) {
            case "":
                screen2 = screen1;
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "+":
                screen2 = parseFloat(screen2) + parseFloat(screen1);
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "-":
                screen2 = parseFloat(screen2) - parseFloat(screen1);
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "*":
                screen2 = parseFloat(screen2) * parseFloat(screen1);
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "/":
                screen2 = parseFloat(screen2) / parseFloat(screen1);
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "^2":
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "√":
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "cos":
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "sin":
                screen1 = "";
                operation = '*';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "=":
                if (screen1 != "") {
                    screen2 = screen1;
                    screen1 = "";
                    operation = '*';
                    document.getElementById("cursor").innerHTML = screen1;
                    document.getElementById("result").innerHTML = screen2;
                }
                else {
                    operation = '*';
                    document.getElementById("cursor").innerHTML = screen1;
                    document.getElementById("result").innerHTML = screen2;
                    break;
                }
        }
};

//פונקציית /
function click_hiluk() {
  
        switch (operation) {
            case "":
                screen2 = screen1;
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "+":
                screen2 = parseFloat(screen2) + parseFloat(screen1);
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "-":
                screen2 = parseFloat(screen2) - parseFloat(screen1);
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "*":
                screen2 = parseFloat(screen2) * parseFloat(screen1);
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "/":
                screen2 = parseFloat(screen2) / parseFloat(screen1);
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "^2":
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "√":
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "cos":
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "sin":
                screen1 = "";
                operation = '/';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            case "=":
                if (screen1 != "") {
                    screen2 = screen1;
                    screen1 = "";
                    operation = '/';
                    document.getElementById("cursor").innerHTML = screen1;
                    document.getElementById("result").innerHTML = screen2;
                }
                else {
                    operation = '/';
                    document.getElementById("cursor").innerHTML = screen1;
                    document.getElementById("result").innerHTML = screen2;
                    break;
                }
        }
};

//פונקציית ^2
function click_ribua() {

    switch (operation) {
        case "":
            screen2 = parseFloat(screen1) * parseFloat(screen1);
            operation = '^2';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "+":
            screen1 = parseFloat(screen1) * parseFloat(screen1);
            operation = '+';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "-":
            screen1 = parseFloat(screen1) * parseFloat(screen1);
            operation = '-';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "*":
            screen1 = parseFloat(screen1) * parseFloat(screen1);
            operation = '*';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "/":
            screen1 = parseFloat(screen1) * parseFloat(screen1);;
            operation = '/';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "^2":
            screen1 = screen2;
            screen2 = parseFloat(screen2) * parseFloat(screen2);
            operation = '^2';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "√":
            screen1 = Math.sqrt(screen1);
            operation = '√';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "cos":
            screen1 = Math.cos(screen1);
            operation = 'cos';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "sin":
            screen1 = Math.sin(screen1);
            operation = 'sin';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "=":
            if (screen1 != "") {
                screen2 = screen1;
                operation = '^2';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            else {
                screen2 = screen2 * screen2;
                operation = '^2';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            }
    }
};

//פונקציית שורש
function click_shoresh() {

    switch (operation) {
        case "":
            screen2 = Math.sqrt(screen1);
            operation = '√';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "+":
            screen1 = Math.sqrt(screen1);
            operation = '+';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "-":
            screen1 = Math.sqrt(screen1);
            operation = '-';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "*":
            screen1 = Math.sqrt(screen1);
            operation = '*';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "/":
            screen1 = Math.sqrt(screen1);
            operation = '/';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "^2":
            screen1 = Math.sqrt(screen1);
            operation = '^2';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "√":
            screen1 = screen2;
            screen2 = Math.sqrt(screen2);
            operation = '√';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "cos":
            screen1 = Math.sqrt(screen1);
            operation = 'cos';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "sin":
            screen1 = screen2;
            screen2 = Math.sin(screen2);
            operation = 'sin';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "=":
            if (screen1 != "") {
                screen2 = Math.sqrt(screen1);
                screen1 = "";
                operation = '√';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            else {
                screen2 = Math.sqrt(screen2);
                operation = '√';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            }
    }
};

//פונקציית קוסינוס
function click_cos() {

    switch (operation) {
        case "":
            screen2 = Math.cos(screen1);
            operation = 'cos';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "+":
            screen1 = Math.cos(screen1);
            operation = '+';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "-":
            screen1 = Math.cos(screen1);
            operation = '-';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "*":
            screen1 = Math.cos(screen1);
            operation = '*';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "/":
            screen1 = Math.cos(screen1);
            operation = '/';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "^2":
            screen1 = Math.cos(screen1);
            operation = '^2';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "√":
            screen1 = Math.cos(screen1);
            operation = '√';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "cos":
            screen1 = screen2;
            screen2 = Math.cos(screen2);
            operation = 'cos';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "sin":
            screen1 = Math.cos(screen1);
            operation = 'sin';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "=":
            if (screen1 != "") {
                screen2 = screen1;
                screen1 = "";
                operation = 'cos';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            else {
                screen2 = Math.cos(screen2);
                operation = 'cos';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            }
    }
};

//פונקציית סינוס
function click_sin() {

    switch (operation) {
        case "":
            screen2 = Math.sin(screen1);
            operation = 'sin';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "+":
            screen1 = Math.sin(screen1);
            operation = '+';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "-":
            screen1 = Math.sin(screen1);
            operation = '-';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "*":
            screen1 = Math.sin(screen1);
            operation = '*';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "/":
            screen1 = Math.sin(screen1);
            operation = '/';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "^2":
            screen1 = Math.sin(screen1);
            operation = '^2';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "√":
            screen1 = Math.sin(screen1);
            operation = '√';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "cos":
            screen1 = Math.sin(screen1);
            operation = 'cos';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "sin":
            screen2 = Math.sin(screen2);
            screen1 = "";
            operation = 'sin';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "=":
            if (screen1 != "") {
                screen2 = screen1;
                screen1 = "";
                operation = 'sin';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            else {
                screen2 = Math.sin(screen2);
                operation = 'sin';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
                break;
            }
    }
};

//פונקציית =
function click_shave() {

    switch (operation) {
        case "":
            screen2 = screen1;
            screen1 = "";
            operation = '=';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "+":
            var li = document.createElement("li");
            li.textContent = parseFloat(screen2) + "+" + parseFloat(screen1) + "=" + (parseFloat(screen2) + parseFloat(screen1));
            document.getElementById("history").appendChild(li);
            screen2 = parseFloat(screen2) + parseFloat(screen1);
            screen1 = "";
            operation = '=';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "-":
            var li = document.createElement("li");
            li.textContent = parseFloat(screen2) + "-" + parseFloat(screen1) + "=" + (parseFloat(screen2) - parseFloat(screen1));
            document.getElementById("history").appendChild(li);
            screen2 = parseFloat(screen2) - parseFloat(screen1);
            screen1 = "";
            operation = '=';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "*":
            var li = document.createElement("li");
            li.textContent = parseFloat(screen2) + "*" + parseFloat(screen1) + "=" + (parseFloat(screen2) * parseFloat(screen1));
            document.getElementById("history").appendChild(li);
            screen2 = parseFloat(screen2) * parseFloat(screen1);
            screen1 = "";
            operation = '=';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "/":
            var li = document.createElement("li");
            li.textContent = parseFloat(screen2) + "/" + parseFloat(screen1) + "=" + (parseFloat(screen2) / parseFloat(screen1));
            document.getElementById("history").appendChild(li);
            screen2 = parseFloat(screen2) / parseFloat(screen1);
            screen1 = "";
            operation = '=';
            document.getElementById("cursor").innerHTML = screen1;
            document.getElementById("result").innerHTML = screen2;
            break;
        case "^2":
            if (screen1 != "") {
                var li = document.createElement("li");
                li.textContent = screen1 + "^2" + "=" + (screen1 * screen1);
                document.getElementById("history").appendChild(li);
                screen2 = screen1 * screen1;
                screen1 = "";
                operation = '=';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            else {
                var li = document.createElement("li");
                li.textContent = Math.sqrt(screen2) + "^2" + "=" + screen2;
                document.getElementById("history").appendChild(li);
                operation = '=';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            break;
        case "√":
            if (screen1 != "") {
                var li = document.createElement("li");
                li.textContent = "√" + parseFloat(screen1) + "=" + Math.sqrt(screen1);
                document.getElementById("history").appendChild(li);
                screen2 = Math.sqrt(screen1);
                screen1 = "";
                operation = '=';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            else {
                var li = document.createElement("li");
                li.textContent = "√" + (parseFloat(screen2) * parseFloat(screen2)) + "=" + screen2;
                document.getElementById("history").appendChild(li);
                operation = '=';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            break;
        case "cos":
            if (screen1 != "") {
                var li = document.createElement("li");
                li.textContent = "cos" + parseFloat(screen1) + "=" + Math.cos(screen1);
                document.getElementById("history").appendChild(li);
                screen2 = Math.cos(screen2);
                screen1 = "";
                operation = '=';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            else {
                var li = document.createElement("li");
                li.textContent = "cos" + parseFloat(screen2) + "=" + Math.cos(screen2);
                document.getElementById("history").appendChild(li);
                screen2 = Math.cos(screen2);
                operation = '=';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            break;
        case "sin":
            if (screen1 != "") {
                var li = document.createElement("li");
                li.textContent = "sin" + parseFloat(screen1) + "=" + Math.sin(screen1);
                document.getElementById("history").appendChild(li);
                screen2 = Math.sin(screen1);
                screen1 = "";
                operation = '=';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            else {
                var li = document.createElement("li");
                li.textContent = "sin" + parseFloat(screen2) + "=" + Math.sin(screen2);
                document.getElementById("history").appendChild(li);
                screen2 = Math.sin(screen2);
                operation = '=';
                document.getElementById("cursor").innerHTML = screen1;
                document.getElementById("result").innerHTML = screen2;
            }
            break;
    }

};

//פונקציית איפוס היסטוריה
function reload() {
    location.reload();
}


