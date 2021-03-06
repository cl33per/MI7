module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        gender: DataTypes.ENUM('M', 'F'),
        salary: DataTypes.DECIMAL(13, 4),
        birth_date: DataTypes.DATE,
        hire_date: DataTypes.DATE,
        education: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: {
                name: 'users_email',
                msg: 'A user with this email already exists.',
            },
            // allowNull: false,
            // validate: {
            //     notEmpty: true,
            //     isEmail: true,
            // },
        },
        survey_score: DataTypes.INTEGER
    });

    Employee.associate = function (models) {
        Employee.belongsTo(models.Department, {
                foreignkey: {
                    allowNull: false
                }
            }),
            Employee.belongsTo(models.Title, {
                foreignkey: {
                    allowNull: false
                }
            }),
            Employee.belongsTo(models.Position, {
                foreignkey: {
                    allowNull: false
                }
            });;
    };
    return Employee;
};