class Human {
  constructor(name,age){
    this.name =name;
    this.age =age;
    this.legs=2;
    this.hands=2;
    this.nose=1;
  }
}

const man = new Human("henry",16)

console.log(man)


class Professional extends Human{
  constructor(name,age,profession,experience){
    super(name,age)
    this.profession=profession;
    this.experience=experience;
  }
 }

 const meProfessional= new Professional("Henry",30,"IT Professional",10)
 const mymateProfessional =new Professional ("Joan",23,"Lawyer",2)

 console.log(meProfessional,mymateProfessional)
 
class ITProfessional extends Professional {
  constructor(name,age,profession,experience,itArea,level){
    super(name,age,profession,experience)
    this.itArea=itArea;
    this.level=level;
  }
}

const myItProfessionalHuman = new ITProfessional("henry",35,"IT Professional",10,"SD",1)

console.log(myItProfessionalHuman)