
var getData = function(){

    return $.ajax({
        url: "api/sample_data",
        type: "GET"

    });
    };
    var dict ={};

   
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



        var getData1 = function(){

            return $.ajax({
                url: "api/sample_data1",
                type: "GET"
        
            });
            };
            var dict1 ={};
        
           
            employees = getData1().then(function(data){
                for (i = 0; i < data.length; i++) {
                empId = data[i].id;
                deptId = data[i].Title.title_name;
                if ( deptId in dict1){
                dict1[deptId] += 1
                }
                else{
                dict1[deptId] = 1
                }
                };
                

                var data = [{
                    values: Object.values(dict1),
                    labels: Object.keys(dict1),
                    type: 'pie'
                  }];
                  
                  var layout = {
                    height: 600,
                    width: 700
                  };
                
                
                
            
                
                
                
                Plotly.newPlot('myDiv2', data, layout, {responsive: true});
                
                });
        
            console.log(dict1);