var ress = []
function addNum(bt){
    var vals =document.getElementById(bt).id;
    console.log(vals);
    ress.push(vals),
    document.getElementById("res").value = ress.join('');

  
}
function calcula(){
    if (ress.join("").includes("/0")){
        document.getElementById("res").value='Error';
        ress=[];
    }
    else {
        try{var resultado = eval(ress.join(""))
        document.getElementById("res").value=resultado;
        ress=[resultado]}
        catch(exception_var){
            document.getElementById("res").value="Error";
            ress=[0]
        }
        
        
    }
    

}
function clearCal(){
    document.getElementById("res").value=0;
    ress=[];
}
