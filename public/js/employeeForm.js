$(document).ready(function () {

  $.get('/api/departments', function (data) {
    data.forEach((e) => {
      var option = $('<option>');
      option.attr('value', e.id);
      option.html(e.dep_name);
      $('#department').append(option);
    });
  });

  $.get('/api/position', function (data) {
    data.forEach((e) => {
      var option = $('<option>');
      option.attr('value', e.id);
      option.html(e.pos_name);
      $('#position').append(option);
    });
  });

  $.get('/api/title', function (data) {
    data.forEach((e) => {
      var option = $('<option>');
      option.attr('value', e.id);
      option.html(e.title_name);
      $('#title').append(option);
    });
  });

  $.get('/api/project', function (data) {
    data.forEach((e) => {
      var option = $('<option>');
      option.attr('value', e.project_name);
      option.html(e.project_name);
      $('#project').append(option);
    });
  });

  $('#submit').on('click', function (event) {
    var q1 = $('#q1').val();
    var q2 = $('#q2').val();
    var q3 = $('#q3').val();
    var q4 = $('#q4').val();
    var q5 = $('#q5').val();
    var score = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5);
    
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
      project: $('#project').val(),
      TitleId: $('#title').val(),
      PositionId: $('#position').val(),
      active: $('#active').val(),
      survey_score: score,
    }

   

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