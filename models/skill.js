module.exports = function (sequelize, DataTypes) {
    var Skills = sequelize.define("Skill", {
        skill_name: DataTypes.STRING,
    });
    return Skills;
};
