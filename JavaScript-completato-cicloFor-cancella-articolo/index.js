let articoli=document.querySelectorAll('article');
console.log(articoli);

let cancella=document.querySelector('button');

let arrayArticoli=[];

for(let i=0; i<articoli.length; i++){
    let tagArticle=articoli[i];
    arrayArticoli.push(tagArticle); // il metodo push permette di inserire (dentro l'array) degli elementi

}

console.log(arrayArticoli);

cancella.addEventListener('click',function(){
    for(let i=0; i<arrayArticoli.length; i++){
        if(i==0){
            arrayArticoli[i].classList.add('eliminaArticolo');
            arrayArticoli=arrayArticoli.slice(1) // slice 
        }
    }
    console.log(arrayArticoli);
})