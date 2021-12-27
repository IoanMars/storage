const btn = document.getElementById('btn');
const input1 = document.getElementsByClassName('input_1');
const input2 = document.getElementsByClassName('input_2');
const input3 = document.getElementsByClassName('input_3');
const input4 = document.getElementsByClassName('input_4');
const users = [];

function setItem(key, value) {
    let user =
    {
    firstName: input1.value,
    lastName: input2.value,
    number: input3.value,
    email: input4.value
    };
    const p = document.getElementsByTagName('p');
    key = {firstName, lastName, number, email};
    value = input4.value; input3.value; input2.value; input1.value;

    btn.onclick = () => {
        if (value) {
            users.push(user);
            window.location = '../home/home.html';
        } else {
            p.innerText = 'please enter data';
        };

        return user;
    };
}

localStorage.setItem('key', 'value');
