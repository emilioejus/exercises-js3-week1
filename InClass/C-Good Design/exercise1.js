

/*Task. go through all of these issues and make appropriate improvements to the code.

1. Naming: the function has a bad name, myFunction() tells you nothing about
   what the function does. It's also considered bad practice to name variables
   vaguely by separating them through numbers (incomeTax1, incomeTax2, etc). If
   you find yourself doing this then you should either use an array (such as
   incomeTax[]).

2. Commenting: the function isn't documented at all. It's very difficult to
   understand what the function's purpose is and how each part of the code
   contributes to it. By writing comments, the coder communicates their
   reasoning and helps the function be human readable.

3. Layout/formatting: unnecessary spacing between the if and else statement.

4. Single responsibility: the function doesn't have a single purpose. It
   calculates national insurance and salary deductions. Maybe the national
   insurance calculation could be moved to a separate function.

5. Input variable being overwritten: the function requires gross salary (before
   deductions) and net salary (after deductions) the `salary` input variable is
   therefore copied into an `originalSalary` variable so that it can be changed.
   It would be much clearer to create a new `netSalary` variable and leave
   `salary` unmodified.

6. DRY principle: the function validates the DRY (Don't Repeat Yourself) rule.
   The line where a deduction is taken from the salary is repeated 3 times with
   different indices. This can be replaced with a `for` loop.

7. Magic numbers. The code contains a lot of magic numbers, including `17775`,
   `0.09` and `0.1`.

8. Useless parameters: the code contains a variable which isn't used. They
   should be removed because they are confusing. It is tempting when you're
   starting to code a function to add more parameters thinking that you might
   need them, but it's important to remove them if you don't end up using them.
   
   */

/*
function myFunction(salary, taxCode, incomeTax1, incomeTax2, ownsCar) {
  var totalIncomeTax = incomeTax1 + incomeTax2;
  var studentLoan = (salary - 17775) * 0.09;
  var originalSalary = salary;
  var nationalInsurance = null;

  if (taxCode === "1150L") {
    nationalInsurance = salary * 0.1;
  } else if (taxCode === "ST") {
    nationalInsurance = salary * 0.05;
  } else {
    nationalInsurance = salary * 0.08;
  }

  var deductions = [nationalInsurance, totalIncomeTax, studentLoan];

  salary = salary - deductions[0];
  salary = salary - deductions[1];
  salary = salary - deductions[2];

  return (
    "Your gross income is �" +
    originalSalary.toString() +
    " and your net income is �" +
    salary.toString() +
    "."
  );
}

console.log(myFunction(28000, "1150L", 1000, 580, false));
*/



/* la clase cal_tax_credit_salaryNeto tiene como parametros
   una entrada de salario un codigo de impuesto y un array de de impuestos*/
class cal_tax_credit_salaryNeto {

   constructor(salary, taxCode, [incomeTax1, incomeTax2]) {
     this.credit = 17775;
     this.salary = salary;
     this.taxCode = taxCode;
     this.reducer = (accumulator, currentValue)=> accumulator + currentValue;
     this.irpf = [incomeTax1, incomeTax2].reduce(this.reducer);
     // taxCode son los tipos de codigos existentes de impuestos
     this.taxCodeType = {
      tax_1150L: '1150L',
      tax_St: 'ST'
     }
     // rates son las tasas 
     this.rates = {
         rateExtra: 0.1,
         rateCompleto: 0.05,
         rateMedio : 0.08,
         rateBasic : 0.09
      }
   }
   
   // el metodo studentLoan calcula la deduciones por el credito etudiantil
   studentLoan() {
     const {salary, credit, rates} = this
     return (salary - credit) * rates.rateBasic
   } 

   // el metodo nationalInsurances calculo el tipo de impuesto, depende del TaxCode y el salary
   nationalInsurances() {
     const {salary, taxCode, taxCodeType, nationalInSurance, rates} = this;
     let national;
     if(taxCode === taxCodeType.tax_1150L){
       return national = salary * rates.rateExtra
     }else if(taxCode === taxCodeType.tax_St) {
       return national =  salary * rates.rateCompleto
     }else {
       return national = salary * rates.rateMedio
     }
   }

   // calcula el salario neto, restandole las deducciones a el salario inicial
   salaryNeto() {
     const {salary, reducer, irpf} = this;
     let deductions = [irpf, this.studentLoan(), this.nationalInsurances()].reduce(reducer);
     console.log(deductions)
     return (
      "Your gross income is �" +
      salary.toString() +
      " and your net income is �" +
      (salary - deductions) +
      ".")
   }
 }
 
let salaryAll = new cal_tax_credit_salaryNeto(28000, "1150L", [1000, 580])
console.log(salaryAll.studentLoan())
console.log(salaryAll.nationalInsurances())
console.log(salaryAll.salaryNeto())