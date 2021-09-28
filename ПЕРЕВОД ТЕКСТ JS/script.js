 'use strict';
    let ru = {
'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i','й':'i',
'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',' ':' ','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9'
};
    let en = {
'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
'е': 'e', 'е': 'ё', 'j': 'ж', 'z': 'з', 'i': 'и',
'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'o',
'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у',
'f': 'ф', 'h': 'x', 'c': 'ц', 'ch': 'ч', 'sh': 'ш',
'shch': 'щ', 'y': 'ы', 'e': 'э', 'yu': 'ю', 'ya': 'я', 'w':'ви', 'q':'ки',
' ': ' ','-':'-','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9'
};

let rus = document.querySelector('#rus');
let lat = document.querySelector('#lat');
let perKrl = document.querySelector('#perKrl');
let perLat = document.querySelector('#perLat');
rus.addEventListener('blur',function(event){
    if(this.value!=''){
        let target = event.target;
        target.nextElementSibling.classList.add('cl1');
        target.classList.remove('cl2');
    }
    let result = [];
    let str = String(this.value);
    let arr = str.split('');
    for(let i of arr){
        if(ru[i] != undefined || ru[i.toUpperCase()] == undefined){
            result.push(ru[i.toLowerCase()]);
        }
    }
    lat.value = result.join('')
});
lat.addEventListener('blur',function(event){
    if(this.value != ''){
        let target = event.target;
        target.previousElementSibling.classList.add('cl2');
        target.classList.remove('cl1');
    }
    let result = [];
    let str = String(this.value);
    let arr = str.split('');
    for(let i of arr){
        if(en[i] != undefined || en[i.toUpperCase()] == undefined){
            result.push(en[i.toLowerCase()]);
        }
    }
    rus.value = result.join('');
}) 