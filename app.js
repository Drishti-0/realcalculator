let textval=document.getElementById("textval");
function display(val){
    textval.value=textval.value+val;
}
function clr(){
    textval.value="";
}
function calculate(){
    let x=textval.value;
    try{
        var y = eval(x);
        if(Number.isInteger(y))
        textval.value=y;
        else
           textval.value=y.toFixed(2);
    }catch(err){
        alert(err.message);
    }
}