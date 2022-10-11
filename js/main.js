let arr = [
    {name: 'Dima', age: 20},
    {name: 'Kolya', age: 10},
    {name: 'Ivan', age: 40},
    {name: 'Petya', age: 30},
];


console.log('Удаляем юзера: ', dellUser(arr, 'Ivan'));
console.log('Середний возраст юзеров: ', getAverageAge(arr)); 
console.log('Юзеры в базе: ', arr);


//1. Функция удаления елемента из массива объектов по ключу.

function dellUser(userArr, userName) {
    let user = userArr.findIndex(function(item) {
        return item.name == userName;
    });
    return userArr.splice(user, 1);
}


//2. Функция которая принимает массив объектов со свойством age и возвращает средний возраст.

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


