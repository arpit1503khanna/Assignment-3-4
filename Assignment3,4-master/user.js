"use strict";
exports.__esModule = true;
exports.DATA = exports.users = void 0;
var crud_1 = require("./crud");
var Role;
(function (Role) {
    Role[Role["SUPERADMIN"] = 0] = "SUPERADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUBSCRIBER"] = 2] = "SUBSCRIBER";
})(Role || (Role = {}));
;
exports.users = [];
exports.DATA = [
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
];
exports.users = new crud_1.Crud(); //creating object of crud with generic type of user
exports.DATA.forEach(function (e) { exports.users.create(e); }); //pushing objects of user type in array
