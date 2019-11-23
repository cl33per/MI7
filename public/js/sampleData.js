//get references to page

// var getEmployees = function() {
//     return $.ajax({
//         url: "api/employees",
//         type: "GET"
//     });
//     };
//     var dict = {};

var getData = function(){

    return $.ajax({
        url: "api/sample_data",
        type: "GET"

    });
    };
    var dict ={};

    // console.log(data);
    // getEmployees();
    // console.log(getEmployees);
    
    employees = getData().then(function(data){
        for (i = 0; i < data.length; i++) {
        empId = data[i].id;
        deptId = data[i].Department.dep_name;
        if ( deptId in dict){
        dict[deptId] += 1
        }
        else{
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
        
        var data = [ trace1 ];
        var layout = {
        title: 'Employees in each Department',
        font: {size: 18},
        family: 'Comic Sans Serif',
        xaxis:{
            title: 'Departments',
            color: 'blue'
        },
        yaxis:{
            title: 'Employees ',
            color: 'red'
        }
    
        };
        
        
        Plotly.newPlot('myDiv', data, layout, {responsive: true});
        
        });
        console.log(dict);

    // employees = getEmployees().then(function(data){
    // for (i = 0; i < data.length; i++) {
    // empId = data[i].id;
    // deptId = data[i].DepartmentId;
    // if ( deptId in dict){
    // dict[deptId] += 1
    // }
    // else{
    // dict[deptId] = 1
    // }
    // };
    
    // var trace1 = {
    // type: 'bar',
    // // x: [1, 2, 3, 4],
    // // y: [5, 10, 2, 8],
    // x: Object.keys(dict),
    // y: Object.values(dict),
    // marker: {
    // color: '#C8A2C8',
    // line: {
    // width: 2.5
    // }
    // }
    // };
    
    // var data = [ trace1 ];
    // var layout = {
    // title: 'Employees in each Department',
    // font: {size: 18},
    // family: 'Comic Sans Serif',
    // xaxis:{
    //     title: 'Departments',
    //     color: 'blue'
    // },
    // yaxis:{
    //     title: 'Employees ',
    //     color: 'red'
    // }

    // };
    
    
    // Plotly.newPlot('myDiv', data, layout, {responsive: true});
    
    // });
    // console.log(dict);
    