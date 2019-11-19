module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        project_name: DataTypes.STRING,
        // NEED FUCNTION IN D3 LIBARY TO FIGURE OUT MATH OR JUST ADD TOTAL HOURS...
        start_date:DataTypes.DATE,
        end_date:DataTypes.DATE,
        time_hours: DataTypes.INTEGER
    });

    return Project;
};
