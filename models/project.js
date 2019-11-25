module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        project_name: DataTypes.STRING,
        start_date:DataTypes.DATE,
        end_date:DataTypes.DATE,
        time_hours: DataTypes.INTEGER
    });

    return Project;
};
