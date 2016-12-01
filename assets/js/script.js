$(document).ready(function (e) {
  $("#form").on('submit',(function(e) {
    e.preventDefault();
    $.ajax({
          url: 'http://localhost:8888/tinderbox/tinderbox/ajaxupload',
      type: "POST",
      data:  new FormData(this),
      contentType: false,
          cache: false,
      processData:false,
      beforeSend : function()
      {
        //$("#preview").fadeOut();
        $("#err").fadeOut();
      },
      success: function(data)
        {
        if(data=='invalid')
        {
          // invalid file format.
          $("#err").html("Invalid File !").fadeIn();
        }
        else
        {
          // view uploaded file.
          $("#preview").html(data).fadeIn();
          $("#form")[0].reset();  
        }
        },
        error: function(e) 
        {
        $("#err").html(e).fadeIn();
        }           
     });
  }));
});
