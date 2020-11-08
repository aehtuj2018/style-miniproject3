const { request } = require('express');
const express=require('express');
const app =express();

app.use(express.json());

const Employees=[{ID:101,Name:'Star Bucks',Department:'Sales',Salary:30000},
{ID:110,Name:'Tim Horton',Department:'Purchasing',Salary:19000},
{ID:110,Name:'Second Cup',Department:'Human Resource',Salary:19000}];

//get 

app.get('/',(req, res)=>{
    res.send(Employees);
});

//put 
app.put('/update',(req,res)=>{

    const requestID=request.params.ID;
 
    let employee=Employees.filter(employee=>{
        return employee.ID==requestID;

    })[0];

    const index = employee.indexOf(employee);
    const keys=object.keys(request.body);
    keys.forEach(key=>{
        employee[key]=request.body[key];
    });
    

});

//delete 

app.delete('/delete',(req,res)=>{

    const requestID=request.params.ID;
 
    let employee=Employees.filter(employee=>{
        return employee.ID==requestID;

    })[0];

    const index = employee.indexOf(employee);

    contacts.splice(index,1);
    
})



//console message: display server running 
app.listen(3050, function(){

    console.log('server running on port 3050');
});