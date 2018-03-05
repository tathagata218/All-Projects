$(function(){

$('#file').change(function(){
    let testfile = $('#file')["0"].files['0'].name;
    $('#displayfiles').html(testfile);
});


$('#submitBtn').click(function(){

    let testfile = $('#file')["0"];
    
  $.post('/fileData', testfile,()=>{
      console.log('Data Has been sent');
  });
    
    });



})