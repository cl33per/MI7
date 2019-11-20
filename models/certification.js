module.exports = function (sequelize, DataTypes) {
    var Certificaton = sequelize.define("Certificaton", {
        cert_name: DataTypes.TEXT,
    });
    return Certificaton;
};
