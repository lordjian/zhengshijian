
function achange(){
    var saveEdit=$("#saveEdit");
    saveEdit.hide();
    var Editform=$("#Edit-form");
    Editform.show();
}
function savedata(){
    var saveEdit=$("#saveEdit");
    var Editform=$("#Edit-form");
    var input1=$("#input-1");
    var input2=$("#input-2");
    var input3=$("#input-3");
    var input4=$("#input-4");
    input1data=input1.val();
    input2data=input2.val();
    input3data=input3.val();
    input4data=input4.val();
    var input11=$("#input-11");
    var input22=$("#input-22");
    var input33=$("#input-33");
    var input44=$("#input-44");
    input11.html(input1data);
    input22.html(input2data);
    input33.html(input3data);
    input44.html(input4data);
    saveEdit.show();
    Editform.hide();
}
function canceldata(){
    var saveEdit=$("#saveEdit");
    var Editform=$("#Edit-form");
    saveEdit.show();
    Editform.hide();
}