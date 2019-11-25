var dict = {};
var dict1 = {};
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
            color: '#4e73df',
            line: {
                width: .5
            }
        }
    };

    var data = [trace1];
    var layout = {
        title: 'Employees in each Department',
        font: {
            size: 14
        },
        family: 'Comic Sans Serif',
        xaxis: {
            title: ' ',
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
    var getData1 = function () {
        return $.ajax({
            url: "api/sample_data1",
            type: "GET"
        });
    };
    employees = getData1().then(function (data) {
        for (i = 0; i < data.length; i++) {
            empId = data[i].id;
            deptId = data[i].Title.title_name;
            if (deptId in dict1) {
                dict1[deptId] += 1
            } else {
                dict1[deptId] = 1
            }
        };
        var data = [{
            values: Object.values(dict1),
            labels: Object.keys(dict1),
            type: 'pie'
        }];
        var layout = {
            height: 500,
            width: 500
        };
        Plotly.newPlot('myDiv2', data, layout, {
            responsive: true
        });
    });
});

