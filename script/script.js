let input = document.querySelectorAll('input'),
    btn = document.getElementsByClassName('submit')[0],
    table = document.getElementsByTagName('table')[0],
    outData = document.getElementById('personal');


class Personal {
    constructor(name,surname,tel,adress) {
        this.name=name;
        this.surname=surname;
        this.tel=tel;
        this.adress=adress;
    }
}


// function strUp(str) {
//     if(!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }

let i=0;

btn.addEventListener('click', function(e) {
    e.preventDefault();
    let name = input[0].value,
        surname = input[1].value,
        tel = input[2].value,
        adress = input[3].value,
        newTable = table.cloneNode(true),
        personalN = [],
        btn2= newTable.getElementsByTagName('button')[0],
        input2 = newTable.querySelectorAll('input');

    newTable.classList.remove('table_input');
    newTable.classList.add('newTable');
    btn2.remove();

    if(name != '' && surname !='' && tel != '' && adress != '' ) {
        i++; 
        personalN[i] = new Personal(name,surname,tel,adress);
        newTable.prepend('id '+(Math.random()*100000).toFixed()); 
        outData.append(newTable);

        for(let n=0; n<4; n++) {
            input2[n].readOnly = true;
            input[n].value = '';
        }

    } else {
        alert('vvedite vse dannie!');
    }
});


