module.exports = function (sequelize, DataTypes) {
    var Title = sequelize.define("Title", {
        role_name: DataTypes.STRING,
    });
    return Title;
};
