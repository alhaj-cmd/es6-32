class Support{
    name;
   destination='Support wev dev';
   address='BD';
   constructor(name,address){
    this.name=name;
    this.address=address;

   }
    startSession(){
        console.log('start a session')
    }

}

class StudentCare {
    name;
    destination='child care';
    address='Nepal';
    constructor(name, address){
        this.name=name;
        this.address=address;
    }

    buildname (student){
        console.log(this.name ,'Build a Routine', student)
    }
}


const amit = new Support('amir khan', 'BD');
const solaiman = new Support('solaiman khan', 'india');


const sujon = new StudentCare('sarkar','sirajgonj')
console.log(sujon);
//console.log(solaiman);