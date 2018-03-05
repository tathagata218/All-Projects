$(function(){

$('#file').change(function(){
    let testfile = $('#file')["0"].files['0'].name;
    $('#displayfiles').html(testfile);
});


$('#submitBtn').click(function(){

    let fileData = {fileData : 'This will be the file data'};
    let testfile = $('#file')["0"].files['0'];
    console.log(testfile);
  $.post('/fileData', fileData,()=>{
      console.log('Yes it works');
  });
    
    });



})