// function msg(){
     // alert("hello sachin");
     // var v=prompt("who are you");
     // if(v=="sachin"){
     //      document.write("right");
     // } else document.write("wrong");
     // open("C:\Users\Sachin\Downloads\EVSCERTI.pdf");
     // alert("wecome on the page this is the give no the problem "),400000; 
          // setTimeout(() => {
          //     alert("vm fkvmfd") 
          // }, 9000);
          // document.writeln(" this is the width of the screen "+screen.width+" hight is scren of the window "+screen.height);
          // emp={id:400,name:"sachin",salary:40000}
          // document.write(emp.id+" "+emp.name+" ",emp.salary);
          // instance constructor 
          // function emp(id,name,salary){
          //      this.id=id;
          //      this.name=name;
          //      this.salary=salary;
          // }
           
          // e=new emp(102,"sacon",4949);

          // document.write(e.id,+" "+e.name+" "+e.salary);
          // function getcube(){
          //      // var number=document.getElementById("number").value;
          //      // document.write(number*number*number);
          //      var allgender=document.getElementsByName("gender").value;
          //      alert("total p tags "+allgender.length);
          // }
// }
function validateform(){
     var name=document.myform.name.value;
     var password=document.myform.name.value;
     if(name==null||name==""){
          alert("Name can't be blank ");
          return false;
     }else if(password.length<6){
          alert("password must be 6 characters long ");
          return false;
     }
}
