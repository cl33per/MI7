module.exports = function (sequelize, DataTypes) {
    var SkillToemployee = sequelize.define("SkillToemployee", {
        date: DataTypes.DATE
    });

    SkillToemployee.associate = function (models) {
        SkillToemployee.belongsTo(models.Skill, {
            foreignkey: {
                allowNull: false
            }
        }),
            SkillToemployee.belongsTo(models.Employee, {
                foreignkey: {
                    allowNull: false
                }
            });
    };
    return SkillToemployee;
};