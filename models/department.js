module.exports = function (sequelize, DataTypes) {
    var Department = sequelize.define("Department", {
        dep_name: DataTypes.STRING,
    });

    Department.associate = function (modules) {
        Department.hasMany(modules.Department, {
            foreignkey: {
                allowNull: false
            }
        });
    };
    return Employee;
};
