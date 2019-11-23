$(document).ready(function(){
//====department option tags added====//
  $.get('/api/departments',function(data){
        data.forEach((e) => {
          var option =  $('<option>');
          option.attr('value',e.id);
          option.html(e.dep_name);
          $('#department').append(option);
      });
  });
  //====position option tags added====//
  $.get('/api/position',function(data){
        data.forEach((e) => {
          var option =  $('<option>');
          option.attr('value',e.id);
          option.html(e.pos_name);
          $('#position').append(option);
      });
  });
//====title option tags added ===//
  $.get('/api/title',function(data){
        data.forEach((e) => {
          var option =  $('<option>');
          option.attr('value',e.id);
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

$('#submit').on('click', function (event){

  var newEmployee = {
    first_name: $('#inputFirstName4').val().trim(),
    last_name: $('#inputLastName4').val().trim(),
    birth_date: $('#inputBirthDate4').val(),
    hire_date: $('#inputHireDate4').val(),
    gender: $('#inputGender4').val().trim().toUpperCase(),
    email: $('#inputEmail4').val().trim(),
    education: $('#inputEducation').val(),
    salary: $('#inputSalary').val(),
    DepartmentId: $('#department').val(),
    // project: $('#project').val(),
    TitleId: $('#title').val(),
    PositionId: $('#position').val(),
    active: $('#active').val(),
    survey_score: $('#score').val()
 }

    event.preventDefault();
    
    console.log(newEmployee.TitleId);
    
    
    console.log(newEmployee);
    
     
    $.ajax({
      method: "POST",
      url: "/api/employee",
      data: newEmployee,
      
    }).then(function (data) {
        console.log(data);
      });
});



  


});