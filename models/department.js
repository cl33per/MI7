module.exports = function (sequelize, DataTypes) {
    var Department = sequelize.define("Department", {
        dep_name: DataTypes.STRING,
    });
    Department.associate = function (models) {
        Department.hasMany(models.Employee, {
                foreignkey: {
                    allowNull: false
                }
            })
        };
return Department;
};

