module.exports = function (sequelize, DataTypes) {
    var Position = sequelize.define("Position", {
        pos_name: DataTypes.STRING,
    });
    return Position;
};
