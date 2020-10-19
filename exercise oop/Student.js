class Student {


    constructor(Id , Name , Email , mobile_number ) {
        this.Id  = Id ;
        this.Name = Name;
        this.Email = Email;
        this.mobile_number = mobile_number;}
        name(){
            return 'name is'+this.name;
           }
        mobile(){
            return 'mobile is'+this.mobile;
           }
        
  }

  let Student = new Student{'sara','sara@orange.com','123443',0777777777}
  
  console.log(Student.name());
  console.log(Student.mobile());
  
