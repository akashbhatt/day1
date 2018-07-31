var ofs={};
//debugger;
ofs.add= function(){
    var result = $('#name');
    console.log('test', result[0]);
}
ofs.add(1,true);
document.body.appendChild(document.createElement('input'));
var newelem = $('<input>');
document.body.appendChild(newelem[0]);
function search()
{
    console.log("testing..");
}
function count(){
    console.log($('#name').val().length);
    $('#counter').text($('#name').val().length);
}