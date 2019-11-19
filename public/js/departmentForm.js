// Get references to page elements
var $departmentText = $("#department-text");
var $departmentDescription = $("#department-description");
var $submitBtn = $("#submit");
var $departmentList = $("#department-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveDepartment: function(department) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/departments",
      data: JSON.stringify(department)
    });
  },
  getDepartments: function() {
    return $.ajax({
      url: "api/departments",
      type: "GET"
    });
  },
  deleteDepartment: function(id) {
    return $.ajax({
      url: "api/departments/" + id,
      type: "DELETE"
    });
  }
};

// refreshDepartments gets new departments from the db and repopulates the list
var refreshDepartments = function() {
  API.getDepartments().then(function(data) {
    var $departments = data.map(function(department) {
      var $a = $("<a>")
        .text(department.text)
        .attr("href", "/department/" + department.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": department.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $departmentList.empty();
    $departmentList.append($departments);
  });
};

// handleFormSubmit is called whenever we submit a new department
// Save the new department to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var department = {
    text: $departmentText.val().trim(),
    description: $departmentDescription.val().trim()
  };

  if (!(department.text && department.description)) {
    alert("You must enter an department text and description!");
    return;
  }

  API.saveDepartment(department).then(function() {
    refreshDepartments();
  });

  $departmentText.val("");
  $departmentDescription.val("");
};

// handleDeleteBtnClick is called when an department's delete button is clicked
// Remove the department from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteDepartment(idToDelete).then(function() {
    refreshDepartments();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$departmentList.on("click", ".delete", handleDeleteBtnClick);
