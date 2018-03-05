$(function(){

$('#submitBtn').click(function(){
    let fileData = 'This will be the file data';

  $.post('/fileData', fileData);
    
    });



})