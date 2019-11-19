module.exports = function (sequelize, DataTypes) {
    var Department = sequelize.define("Department", {
        dep_name: DataTypes.STRING,
    });

    Department.associate = function (modules) {
        Department.hasMany(modules.Employee, {
            foreignkey: {
                allowNull: false
            }
        });
    };
    return Department;
};
