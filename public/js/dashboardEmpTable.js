// Get references to page elements
var $employeeText = $("#employee-text");
var $employeeDescription = $("#employee-description");
var $submitBtn = $("#submit");
var $employeeList = $("#employee-list");

// The API object contains methods for each kind of request we'll make
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

// refreshEmployees gets new employees from the db and repopulates the list
var refreshEmployees = function() {
  API.getEmployees().then(function(data) {
    var $employees = data.map(function(employee) {
      var $a = $("<a>")
        .text(employee.text)
        .attr("href", "/employee/" + employee.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": employee.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $employeeList.empty();
    $employeeList.append($employees);
  });
};

// handleFormSubmit is called whenever we submit a new employee
// Save the new employee to the db and refresh the list
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

// handleDeleteBtnClick is called when an employee's delete button is clicked
// Remove the employee from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteEmployee(idToDelete).then(function() {
    refreshEmployees();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$employeeList.on("click", ".delete", handleDeleteBtnClick);
