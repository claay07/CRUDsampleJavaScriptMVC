var firstName;
var lastName;
var email;
var country;

var arrUserInfo = [
    firstName + " " + lastName,
    email,
    country
];

const userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    country: country,

    /* getters and setters for FirstName */
    get getFirstName(){
        return this.firstName;
    },
    set setFirstName(newFirstName){
        this.firstName = newFirstName;
    },

    /* getters and setters for LastName */
    get getFirstName(){
        return this.firstName;
    },
    set setFirstName(newFirstName){
        this.firstName = newFirstName;
    },

    /* getters and setters for email */
    get getFirstName(){
        return this.firstName;
    },
    set setFirstName(newFirstName){
        this.firstName = newFirstName;
    },

    /* getters and setters for country */
    get getFirstName(){
        return this.firstName;
    },
    set setFirstName(newFirstName){
        this.firstName = newFirstName;
    }
};
