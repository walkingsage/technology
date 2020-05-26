"use strict"

const typeZakaza = document.getElementById('typezakaza'),
labelTovar = document.querySelector('.labeltovar'),
typeTovara = document.getElementById('typetovara'),
labelUsluga = document.querySelector('.labelusluga'),
typeUsluga = document.getElementById('typeusluga'),
labelForma = document.querySelector('.labelforma'),
formaOtvet = document.getElementById('formaotvet'),
labelFile = document.querySelector('.labelfile'),
labelHeaters = document.querySelector('.labelheaters'),
typeHeaters = document.getElementById('typeheaters'),
labelRing = document.querySelector('.labelring'),
labelFlat = document.querySelector('.labelflat'),
labelNichromtape = document.querySelector('.labelnichromtape'),
labelOther = document.querySelector('.labelother'),
labelKolvo = document.querySelector('.labelkolvo'),
photoTovara = document.querySelector('.phototovara');

function hideElem(elem){
    elem.style.display = 'none';
}

function showElem(elem){
    elem.style.display = 'grid';
}



typeZakaza.addEventListener('change',function(){
    if (typeZakaza.value == 'tovar'){
        showElem(labelTovar);
        hideElem(labelUsluga);
    }
    else if (typeZakaza.value == 'usluga'){
        showElem(labelUsluga);
        photoTovara.setAttribute('src','../image/phototovara.png');
        hideElem(labelTovar);     
        hideElem(labelKolvo);
        hideElem(labelNichromtape);
        hideElem(labelHeaters);
        hideElem(labelFlat);
        hideElem(labelRing);
    }
    else{
        hideElem(labelTovar);
        hideElem(labelUsluga);     
        hideElem(labelKolvo);
        hideElem(labelNichromtape);
        hideElem(labelHeaters);
        hideElem(labelFlat);
        hideElem(labelRing);
    }
});

typeTovara.addEventListener('change',function(){
    switch(typeTovara.value) {
    case 'heaters':
        showElem(labelHeaters);
        showElem(labelKolvo);
        hideElem(labelNichromtape);
        break;
    case 'nichtometape':
        photoTovara.setAttribute('src','../image/nichrome.png');
        showElem(labelNichromtape);
        showElem(labelKolvo);
        hideElem(labelHeaters);
        hideElem(labelFlat);
        hideElem(labelRing);
        break;
    case 'glass':
        photoTovara.setAttribute('src','../image/glass.png');
        showElem(labelKolvo);
        hideElem(labelNichromtape);
        hideElem(labelHeaters);
        hideElem(labelFlat);
        hideElem(labelRing);
        break;
    case 'dubel':
        photoTovara.setAttribute('src','../image/dubel.jpg');
        showElem(labelKolvo);
        hideElem(labelNichromtape);
        hideElem(labelHeaters);
        hideElem(labelFlat);
        hideElem(labelRing);
        break;
    case 'cap':
        photoTovara.setAttribute('src','../image/kryshka.jpg');
        showElem(labelKolvo);
        hideElem(labelNichromtape);
        hideElem(labelHeaters);
        hideElem(labelFlat);
        hideElem(labelRing);
        break;
    default:
        hideElem(labelKolvo);
        hideElem(labelNichromtape);
        hideElem(labelHeaters);
        hideElem(labelFlat);
        hideElem(labelRing);
    }
});

typeHeaters.addEventListener('change',function(){
    if (typeHeaters.value == 'ring'){
        photoTovara.setAttribute('src','../image/ring.jpg');
        showElem(labelRing);
        hideElem(labelFlat);
    }
    else if(typeHeaters.value == 'flat'){
        photoTovara.setAttribute('src','../image/flat.jpeg');
        showElem(labelFlat);
        hideElem(labelRing);
    }
    else{
        hideElem(labelFlat);
        hideElem(labelRing);
    }
});

typeUsluga.addEventListener('change',function(){
    switch(typeUsluga.value){
        case 'plasticmolding':
            showElem(labelForma);
            hideElem(labelFile);
            break;
        case 'molds':
            showElem(labelFile);
            hideElem(labelForma);
            break;
        case 'injectionmold':
            showElem(labelFile);
            hideElem(labelForma);
            break;
        case 'injection':
            showElem(labelForma);
            hideElem(labelFile);
            break;
    }
});

formaOtvet.addEventListener('change',function(){
    if(formaOtvet.value=='no'){
        showElem(labelFile);
    }
    else{
        hideElem(labelFile);
    }
})