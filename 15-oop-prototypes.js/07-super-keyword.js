class Engineer{
    constructor(fullname, major){
        
        this.fullname = fullname;
        this.major = major;
    }
    build() {
        console.log('Engineer builds!')
    }
}


class SoftwareEngineer extends Engineer{
    constructor(fullname, major, companyName){
        super(fullname, major);
        this.companyName = companyName;
    }

}