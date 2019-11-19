module.exports = function (sequelize, DataTypes) {
    var Salary = sequelize.define("Salary", {
        salary: DataTypes.DECIMAL(13,4),
        from_date:DataTypes.DATE,
        to_date:DataTypes.DATE
    });
    return Salary;
};
