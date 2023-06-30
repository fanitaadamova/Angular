//let isEven: boolean = false;
//let num: number = 5;
//let str: string = '';
var peshoUser = {
    name: "Pesho",
    age: 21,
};
//Може да си направим class
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    AnotherUserClass.prototype.getUserName = function () {
        return this.firstName;
    };
    return AnotherUserClass;
}());
var anotherUserList = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Mitko', id: 2 },
    { firstName: 'Maria', id: 3 }
];
anotherUserList.forEach(function (id, firstName) {
    console.log("".concat(id, " - ").concat(firstName));
});
