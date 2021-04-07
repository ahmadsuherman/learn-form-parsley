$(document).ready(function(){  
 $('#form-parsley').parsley();
 $('#validate_form').on('submit', function(event){
  event.preventDefault();
  if($('#validate_form').parsley().isValid())
  {
   $.ajax({
    url:"#",
    method:"POST",
    data:$(this).serialize(),
    beforeSend:function(){
     $('#submit').attr('disabled','disabled');
     $('#submit').val('Proses...');
    },
    success:function(data)
    {
     $('#validate_form')[0].reset();
     $('#validate_form').parsley().reset();
     $('#submit').attr('disabled',false);
     $('#submit').val('Submit');
     swal("Data berhasil ditambahkan", {
        button: false,
        icon: "success",
        timer: 1000
     });
    },
    error:function(data)
    {
      console.log("ahmad");
    }

   });
  }
 });
});  

$('.btn-refresh').click(function(e) {
  e.preventDefault();
  $('.preloader').fadeIn();
  location.reload();
})