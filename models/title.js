module.exports = function (sequelize, DataTypes) {
    var Title = sequelize.define("Title", {

        title_name: DataTypes.STRING,
    });
    return Title;
};
