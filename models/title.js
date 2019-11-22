module.exports = function (sequelize, DataTypes) {
    var Title = sequelize.define("Title", {
        tile_name: DataTypes.STRING,
    });
    return Title;
};
