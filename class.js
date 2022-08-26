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
const amit = new Support('amir khan', 'BD');
const solaiman = new Support('solaiman khan', 'india');
console.log(amit);
console.log(solaiman);