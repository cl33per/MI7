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

  


});