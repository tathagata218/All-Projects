$(function(){

$('#submitBtn').click(function(){
    let fileData = 'This will be the file data';

    $.ajax({
        method : "POST",
        url : "/fileData",
        data : fileData
    }).done(()=>{
        console.log('Message has been sent');
    });
    
    });



})