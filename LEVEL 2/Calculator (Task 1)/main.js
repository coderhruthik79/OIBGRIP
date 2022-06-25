let exp_string="";
let char_obj = {};
let cnt = 0;
const id = [];
function clr(){
    document.getElementById("io").value = "";
    exp_string = "";
    char_obj = {};
    cnt = 0;
}
function del(){
    const _del_element = exp_string[exp_string.length - 1];
    document.getElementById("io").value = exp_string.substring(0,exp_string.length-1);
    exp_string = document.getElementById("io").value;
    char_obj.hasOwnProperty(_del_element) && char_obj[_del_element].length > 1?char_obj[_del_element].pop():delete char_obj[_del_element];
    cnt--;
}
function display(_param){
    document.getElementById("io").value += _param;
    exp_string += _param;
    char_obj.hasOwnProperty(_param)?char_obj[_param].push(cnt++):char_obj[_param]=[cnt++];
}
function solve_sqrt(str){
    let res="";
    let x = str.replaceAll("√","Math.sqrt(");
    for(var i of char_obj['√']){
        for(var j = i + 1;j < x.length; ++j){
    if(/[+-/%*]/g.test(x[j])){
        res += x.slice(0,i+1) + x.slice(i + 1,j) + ")" + x.slice(j);
        break;
    }
    else if(/[0-9]/.test(x[x.length-1])){
        res = x + ")";
        break;
    }
}
continue;
    }
    //console.log(res);
    return res;
}
function solve(){
    let y = "";
    if(/√\d+/g.test(exp_string)){
        y = eval(solve_sqrt(exp_string));
    }else{
        y = eval(exp_string);
    }
    document.getElementById("io").value = y;
}
function isFloat(num){
    return (num - Math.round(num) > 0);
}
$(document).ready(function(){
    $('.btn-eq').click(function(){
        const end = Number(eval(exp_string));
        console.log(end);
        anime({
        targets : '.ios',
        value:[0,end],
        round:(isFloat(end))?2:1,
        speed:'fast',
        color:'blue',
        })
    });
    $('.btn-eq').click(function(){
        $('.btn-eq[value]').css("color:blue;");
    });
})