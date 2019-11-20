module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        birth_date: DataTypes.DATE,
        hire_date: DataTypes.DATE,
        gender: DataTypes.ENUM('M', 'F'),
        survey: {
            Type: DataTypes.BOOLEAN,
            Default: false
        },
        headshot: {
            type: DataTypes.TEXT,
            validation: {
                isUrl: true
            },
            email: DataTypes.STRING,
            Password: DataTypes.STRING,
            manager: DataTypes.BOOLEAN,
            active: DataTypes.BOOLEAN

        },
        mentor:  DataTypes.STRING

        
    });
    
Employee.associate = function (models) {
    Employee.belongsTo(models.Department, {
        foreignkey: {
            allowNull: false
        }
    }),
        Employee.belongsTo(models.Certificaton, {
            foreignkey: {
                allowNull: false
            }
        }),
        Employee.belongsTo(models.Address, {
            foreignkey: {
                allowNull: false
            }
        }),
        Employee.belongsTo(models.Salary, {
            foreignkey: {
                allowNull: false
            }
        }),
        Employee.belongsTo(models.Project, {
            foreignkey: {
                allowNull: false
            }
        });
};
return Employee;
};