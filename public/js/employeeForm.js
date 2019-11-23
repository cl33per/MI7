$(document).ready(function(){
//====department option tags added====//
  $.get('/api/departments',function(data){
        data.forEach((e) => {
          var option =  $('<option>');
          option.attr('value',e.dep_name);
          option.html(e.dep_name);
          $('#department').append(option);
      });
  });
  //====position option tags added====//
  $.get('/api/position',function(data){
        data.forEach((e) => {
          var option =  $('<option>');
          option.attr('value',e.pos_name);
          option.html(e.pos_name);
          $('#position').append(option);
      });
  });
//====title option tags added ===//
  $.get('/api/title',function(data){
        data.forEach((e) => {
          var option =  $('<option>');
          option.attr('value',e.title_name);
          option.html(e.title_name);
          $('#title').append(option);
      });
  });
//=====project option tags added ===//
  $.get('/api/project',function(data){
        data.forEach((e) => {
          var option =  $('<option>');
          option.attr('value',e.project_name);
          option.html(e.project_name);
          $('#project').append(option);
      });
  });


//post form //
var newEmployee = {
   firstName: $('#inputFirstName4').val().trim(),
   lastName: $('#inputLastName4').val().trim(),
   birthDate: $('#inputBirthDate4').val(),
   hireDate: $('#inputHireDate4').val(),
   gender: $('#inputGender4').val().trim().toUpperCase(),
   email: $('#inputEmail4').val().trim(),
   education: $('#education').val(),
   salary: $('#inputSalary').val(),
   department: $('#departmet').val(),
   project: $('#project').val(),
   title: $('#title').val(),
   position: $('#position').val()
}
$('#submit').on('click', function (event){
    event.preventDefault();
    
     
    $.ajax({
      method: "POST",
      url: "/api/employee",
      data: newEmployee,
      
    }).then(function (data) {
        console.log(data);
      });
});



  


});