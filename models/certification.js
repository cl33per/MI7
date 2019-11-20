module.exports = function (sequelize, DataTypes) {
    var Certificaton = sequelize.define("Certificaton", {
        skill_name: DataTypes.TEXT,
    });
    return Certificaton;
};
