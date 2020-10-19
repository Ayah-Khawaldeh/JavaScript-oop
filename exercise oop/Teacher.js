
class Teacher extends Student {
    constructor(Salary ,subjects , Id , Name , Email , mobile_number) {
    super(Id , Name , Email , mobile_number);
        this.Salary= Salary;
        this.subjects=subjects;
      }
   
    Salary(){
            return 'Salary is'+this.Salary;
           }

    subjects(){
            return  Array .from(this.subjects.split(","));
           }
        
 

  let Teacher = new Teacher{'800','[English, Arabic, Math, science]',96432,'Sadi','Sadi@orange.com',0777788888}

  console.log(Teacher.Salary());
  console.log(Teacher.subjects());