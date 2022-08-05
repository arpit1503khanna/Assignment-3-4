import { Crud } from "./crud";

enum Role { SUPERADMIN, ADMIN, SUBSCRIBER };
export let users: any = [];
export const DATA = [
    {
        "id": "1",
        "firstName": "Arpit",
        "middleName": "",
        "lastName": "Khanna",
        "email": "arpit15khanna@gmail.com",
        "phoneNumber": "99999999",
        "role": Role.SUBSCRIBER,
        "address": "4133"
    },
    {
        "id": "2",
        "firstName": "Jai",
        "middleName": "",
        "lastName": "Sharma",
        "email": "xyz@sourcefuse.com",
        "phoneNumber": "900900090",
        "role": Role.ADMIN,
        "address": "8A"
    },
    {
        "id": "3",
        "firstName": "Harry",
        "middleName": "Singh",
        "lastName": "Chahal",
        "email": "abc@abc.com",
        "phoneNumber": "809090809",
        "role": Role.SUBSCRIBER,
        "address": "Mohali"
    },
    {
        "id": "4",
        "firstName": "Palak",
        "middleName": "",
        "lastName": "Bansal",
        "email": "abc@abc.com",
        "phoneNumber": "809079809",
        "role": Role.SUPERADMIN,
        "address": "Zirakpur"
    },
    {
        "id": "5",
        "firstName": "Rahaul",
        "middleName": "Kumar",
        "lastName": "",
        "email": "xyz@abc.com",
        "phoneNumber": "909090456",
        "role": Role.ADMIN,
        "address": "Lucknow"
    }
]

interface User {

    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: Role;
    address: string;

}

users = new Crud<User>(); //creating object of crud with generic type of user
DATA.forEach(function (e: User) { users.create(e) }) //pushing objects of user type in array