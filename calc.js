var buttons = document.getElementsByClassName("button");
var dis = document.getElementById("display");
var his = document.getElementById("history");
var exp="";
var res = "";
for(var i=0;i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var val = this.getAttribute("data-value");
        
        if(val == "="){
            // console.log("=", exp);
            res =  eval(exp);
            if(res == "Infinity"){
                dis.innerText = "Error";
                var clear = setTimeout(function(){
                    dis.innerText = "";
                }, 500);
                res="";
                exp="";
            }else{
                dis.innerText = res;
            }
            
            exp = res;
        }else if(val == "AC"){
            dis.innerText="";
            res="";
            exp="";
        }else{
                exp += val;
                dis.innerText += val;
                // console.log("else",exp);
        }
        
    });
}