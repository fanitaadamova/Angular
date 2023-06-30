//let isEven: boolean = false;
//let num: number = 5;
//let str: string = '';

type User = {
    name: string;
    age: number;
};

const peshoUser = {
    name: "Pesho",
    age: 21,
} as User;

interface AnotherUser {
    firstName: string;
    id: number;
    getUserName: () => string;
}

//Може да си направим class
class AnotherUserClass implements AnotherUser {
    firstName: string;
    id: number;

    getUserName() {
        return this.firstName
    }

}

const anotherUserList = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Mitko', id: 2 },
    { firstName: 'Maria', id: 3 }
] as AnotherUser[];

anotherUserList.forEach((id, firstName) => {
    console.log(`${id} - ${firstName}`);

});