module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        birth_date: DataTypes.DATE,
        hire_date: DataTypes.DATE,
        gender: DataTypes.ENUM('M', 'F'),
        headeshot: {
            type: DataTypes.TEXT,
            validation: {
                isUrl: true
            },
        },
        email: {
             type: DataTypes.STRING,
             unique: {
                 name: 'users_email',
                 msg: 'A user with this email already exists.',
                },
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
                },
            Password: DataTypes.STRING,
            active: DataTypes.BOOLEAN

        }
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
            });
    };
    return Employee;
};