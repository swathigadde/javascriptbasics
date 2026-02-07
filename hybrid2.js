class school{
    wel(){
    console.log("Welcome to school")
}
}
const ob = {
    stat() {
    console.log("Hello Students")
    }
}
class childschool extends school{
    wel2(){
        console.log("Sit in 1st Grade")
    }
}
Object.assign(childschool.prototype,ob)
const ob1= new childschool()
ob1.stat()
ob1.wel()
ob1.wel2()



