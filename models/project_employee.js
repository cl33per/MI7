module.exports = function (sequelize, DataTypes) {
    var ProjectToemployee = sequelize.define("ProjectToemployee", {});
    ProjectToemployee.associate = function (models) {
        ProjectToemployee.belongsTo(models.Project, {
                foreignkey: {
                    allowNull: false
                }
            }),
            ProjectToemployee.belongsTo(models.Employee, {
                foreignkey: {
                    allowNull: false
                }
            });
    };
    return ProjectToemployee;
};