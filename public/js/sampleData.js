var dict = {};
var getData = function () {

    return $.ajax({
        url: "api/sample_data",
        type: "GET"

    });
};

employees = getData().then(function (data) {
    for (i = 0; i < data.length; i++) {
        empId = data[i].id;
        deptId = data[i].Department.dep_name;
        if (deptId in dict) {
            dict[deptId] += 1
        } else {
            dict[deptId] = 1
        }
    };

    var trace1 = {
        type: 'bar',

        x: Object.keys(dict),
        y: Object.values(dict),
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
    };

    var data = [trace1];
    var layout = {
        title: 'Employees in each Department',
        font: {
            size: 18
        },
        family: 'Comic Sans Serif',
        xaxis: {
            title: 'Departments',
            color: 'blue'
        },
        yaxis: {
            title: 'Employees ',
            color: 'red'
        }

    };

    Plotly.newPlot('myDiv', data, layout, {
        responsive: true
    });
});