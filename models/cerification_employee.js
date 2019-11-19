module.exports = function (sequelize, DataTypes) {
    var CertificatonToemployee = sequelize.define("CertificatonToemployee", {
        date:DataTypes.DATE
    });

    CertificatonToemployee.associate = function (models) {
        CertificatonToemployee.belongsTo(models.Certificaton, {
                foreignkey: {
                    allowNull: false
                }
            }),
            CertificatonToemployee.belongsTo(models.Employee, {
                    foreignkey: {
                        allowNull: false
                    }
                });
    };
    return CertificatonToemployee;
};