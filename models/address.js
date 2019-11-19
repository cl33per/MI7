module.exports = function (sequelize, DataTypes) {
    var Address = sequelize.define("Address", {
        address_one: DataTypes.STRING,
        address_two:DataTypes.STRING,
        zipcode: DataTypes.INTEGER,
        city: DataTypes.STRING,
        state:DataTypes.STRING,
    });
    return Address;
};
