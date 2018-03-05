$(function(){

$('#file').change(function(){
    let testfile = $('#file')["0"].files['0'].name;
    $('#displayfiles').html(testfile);
});


$('#submitBtn').click(function(){

    let testfile = $('#file')["0"].files;
    let testObject = {
      fileInfo : $('#file')["0"],
      fileData : $('#file')["0"].files,
      fileSpecsData : $('#file')["0"].files['0'],

    }
    console.log(testObject);
    
  $.ajax({
    method : "POST",  
    URL:'/fileData',
    data : testfile,
    contentType : 'multipart/form-data'  
  }).done(()=>{
    console.log('Data Has been sent');
  })
    
    });



})