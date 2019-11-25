// Get references to page elements
var $employeeText = $("#employee-text");
var $employeeDescription = $("#employee-description");
var $submitBtn = $("#submit");
var $employeeList = $("#employee-list");
var API = {
  saveEmployee: function(employee) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/employees",
      data: JSON.stringify(employee)
    });
  },
  getEmployees: function() {
    return $.ajax({
      url: "api/employees",
      type: "GET"
    });
  },
  deleteEmployee: function(id) {
    return $.ajax({
      url: "api/employees/" + id,
      type: "DELETE"
    });
  }
};
var refreshEmployees = function() {
  API.getEmployees().then(function(data) {
    var $employees = data.map(function(employee) {
      var $a = $("<a>").text(employee.text).attr("href", "/employee/" + employee.id);
      var $li = $("<li>").attr({
          class: "list-group-item",
          "data-id": employee.id
        }).append($a);
      // var $button = $("<button>").addClass("btn btn-danger float-right delete").text("ｘ");
      // $li.append($button);
      return $li;
    });
    $employeeList.empty();
    $employeeList.append($employees);
  });
};

var handleFormSubmit = function(event) {
  event.preventDefault();
  var employee = {
    text: $employeeText.val().trim(),
    description: $employeeDescription.val().trim()
  };
  if (!(employee.text && employee.description)) {
    alert("You must enter an employee text and description!");
    return;
  }
  API.saveEmployee(employee).then(function() {
    refreshEmployees();
  });
  $employeeText.val("");
  $employeeDescription.val("");
};
var handleDeleteBtnClick = function() {
  var idToDelete = $(this).parent().attr("data-id");
  API.deleteEmployee(idToDelete).then(function() {
    refreshEmployees();
  });
};

$submitBtn.on("click", handleFormSubmit);
$employeeList.on("click", ".delete", handleDeleteBtnClick);
