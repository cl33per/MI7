module.exports = function (sequelize, DataTypes) {
    var Department = sequelize.define("Department", {
        dep_name: DataTypes.STRING,
    });
return Department;
};