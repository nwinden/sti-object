var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person ("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);


var employees = [atticus, jem, boo, scout];

/**
*creates a person object to represent an employee at STI
*@param name: name of the employee
*@param employeeNumber: the employee number
*@param salary: the employees salary
*@param rating: the current employee rating
**/

function Person (name, employeeNumber, salary, rating) {
  this.name = name,
  this.employeeNumber= employeeNumber,
  this.salary=salary,
  this.rating=rating
}

/**
*function that accesses the individual employee information to derive the total compensation they should recieve based on thier bonus.
* @param employee : the array of employees that we get our data from to find the bonus.
**/

function findBonus(employee) {

  var array = [];
  var rating = employee.rating;
  var bonusPercent = 0;
  var sal = parseInt(employee.salary);
  var bonusAmount = 0;

  array[0] = employee.name;

  switch (rating) {
    case 3:
      bonusPercent = .04;
      break;
    case 4:
      bonusPercent = .06;
      break;
    case 5:
      bonusPercent = .1;
      break;
    default:
      bonusPercent = 0;
      break;
    }

    if(employee.employeeNumber.length == 4){
      bonusPercent += .05;
    }

    if(sal > 65000){
      bonusPercent -= .01;
    }

    if(bonusPercent > .13) {
      bonusPercent = .13;
    }

    array[1] = bonusPercent;

    bonusAmount = sal * bonusPercent;

    array[2] = sal + bonusAmount;

    array[3] = Math.round(bonusAmount);

    return array;
}

/**
*loops through an array of employees and prints out the relevant bonus information for each employee on a website.
**/

for (var i = 0; i<employees.length; i++){

  var face = findBonus(employees[i]);
  document.write("<ul><li>Name: " + face[0] + "</li><li>Bonus percentage: " + (face[1] * 100) + "%</li><li>Total compensation: $" + face[2] + "</li><li>Rounded bonus: $" + face[3] + "</li></ul>");
}
