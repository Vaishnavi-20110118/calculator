sum=0;
str="";
function by_add(){
    data = parseInt(document.getElementById("num").value);
    sum+=data;
    if(str.length==0){
        str+=data;
    }
    else{
        str += ("+"+data);
    }
    document.getElementById("para1").value=sum;
}
function by_sub(){
    data = parseInt(document.getElementById("num").value);
    sum-=data;
    if(str.length==0){
        str+=data;
    }
    else{
        str += ("-"+data);
    }
    document.getElementById("para1").value=sum;
}
function by_mul(){
    data = parseInt(document.getElementById("num").value);
    sum*=data;
    if(str.length==0){
        str+=data;
    }
    else{
        str += ("*"+data);
    }
    document.getElementById("para1").value=sum;
}
function by_div(){
    data = parseInt(document.getElementById("num").value);
    sum/=data;
    if(str.length==0){
        str+=data;
    }
    else{
        str += ("/"+data);
    }
    document.getElementById("para1").value=sum;
}
function by_tot(){
    document.getElementById("para2").value=str;
}