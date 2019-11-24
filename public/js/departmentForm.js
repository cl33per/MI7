// Get references to page elements
var $departmentText = $("#department-text");
var $departmentDescription = $("#department-description");
var $submitBtn = $("#submit");
var $departmentList = $("#department-list");
var API = {
  saveDepartment: function (department) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/departments",
      data: JSON.stringify(department)
    });
  },
  getDepartments: function () {
    return $.ajax({
      url: "api/departments",
      type: "GET"
    });
  },
  deleteDepartment: function (id) {
    return $.ajax({
      url: "api/departments/" + id,
      type: "DELETE"
    });
  }
};

var refreshDepartments = function () {
  API.getDepartments().then(function (data) {
    var $departments = data.map(function (department) {
      var $a = $("<a>").text(department.text).attr("href", "/department/" + department.id);
      var $li = $("<li>").attr({
        class: "list-group-item",
        "data-id": department.id
      }).append($a);
      // var $button = $("<button>").addClass("btn btn-danger float-right delete").text("ｘ");
      // $li.append($button);
      return $li;
    });

    $departmentList.empty();
    $departmentList.append($departments);
  });
};

var handleFormSubmit = function (event) {
  event.preventDefault();
  var department = {
    text: $departmentText.val().trim(),
    description: $departmentDescription.val().trim()
  };
  if (!(department.text && department.description)) {
    alert("You must enter an department text and description!");
    return;
  }
  API.saveDepartment(department).then(function () {
    refreshDepartments();
  });
  $departmentText.val("");
  $departmentDescription.val("");
};

var handleDeleteBtnClick = function () {
  var idToDelete = $(this).parent().attr("data-id");
  API.deleteDepartment(idToDelete).then(function () {
    refreshDepartments();
  });
};

$submitBtn.on("click", handleFormSubmit);
$departmentList.on("click", ".delete", handleDeleteBtnClick);