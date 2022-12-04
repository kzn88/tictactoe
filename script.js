
const massiv = [];

for (i=1;i<=9;i++) {
massiv.push(document.querySelector('.block'+i));}


let x=true;
let y=false;


// if (document.querySelector('.winner').innerHTML==='') 

for (let key in massiv) {massiv[key].addEventListener('click',function(){
    if (document.querySelector('.winner').innerHTML==='') {



    if (massiv[key].innerHTML==='') {
        if (x===true) {
    massiv[key].innerHTML='x';
    x=false;    
}
        else {massiv[key].innerHTML='0';
    x=true;
    }}
    else {alert('Занято!')}
    

    if ((document.querySelector('.block1').innerHTML==='x')&&(document.querySelector('.block2').innerHTML==='x')&&(document.querySelector('.block3').innerHTML==='x'))
    { document.querySelector('.block1').style.animationName='win';
    document.querySelector('.button').style.animationName='jump';
    document.querySelector('.block2').style.animationName='win';
    document.querySelector('.block3').style.animationName='win';
        document.querySelector('.winner').innerHTML='Победили крестики!';y=true}
    if ((document.querySelector('.block4').innerHTML==='x')&&(document.querySelector('.block5').innerHTML==='x')&&(document.querySelector('.block6').innerHTML==='x'))
    {document.querySelector('.block4').style.animationName='win';
    document.querySelector('.button').style.animationName='jump';
    document.querySelector('.block5').style.animationName='win';
    document.querySelector('.block6').style.animationName='win';
        document.querySelector('.winner').innerHTML='Победили крестики!';y=true}
    if ((document.querySelector('.block7').innerHTML==='x')&&(document.querySelector('.block8').innerHTML==='x')&&(document.querySelector('.block9').innerHTML==='x'))
    {document.querySelector('.block7').style.animationName='win';
    document.querySelector('.button').style.animationName='jump';
    document.querySelector('.block8').style.animationName='win';
    document.querySelector('.block9').style.animationName='win';
        document.querySelector('.winner').innerHTML='Победили крестики!';y=true}
    if ((document.querySelector('.block1').innerHTML==='x')&&(document.querySelector('.block4').innerHTML==='x')&&(document.querySelector('.block7').innerHTML==='x'))
    {document.querySelector('.block1').style.animationName='win';
    document.querySelector('.button').style.animationName='jump';
    document.querySelector('.block4').style.animationName='win';
    document.querySelector('.block7').style.animationName='win';
        document.querySelector('.winner').innerHTML='Победили крестики!';y=true}
    if ((document.querySelector('.block2').innerHTML==='x')&&(document.querySelector('.block5').innerHTML==='x')&&(document.querySelector('.block8').innerHTML==='x'))
    {document.querySelector('.block2').style.animationName='win';
    document.querySelector('.button').style.animationName='jump';
    document.querySelector('.block5').style.animationName='win';
    document.querySelector('.block8').style.animationName='win';
        document.querySelector('.winner').innerHTML='Победили крестики!';y=true}
    if ((document.querySelector('.block3').innerHTML==='x')&&(document.querySelector('.block6').innerHTML==='x')&&(document.querySelector('.block9').innerHTML==='x'))
    {document.querySelector('.block3').style.animationName='win';
    document.querySelector('.button').style.animationName='jump';
    document.querySelector('.block6').style.animationName='win';
    document.querySelector('.block9').style.animationName='win';
        document.querySelector('.winner').innerHTML='Победили крестики!';y=true}
    if ((document.querySelector('.block1').innerHTML==='x')&&(document.querySelector('.block5').innerHTML==='x')&&(document.querySelector('.block9').innerHTML==='x'))
    {document.querySelector('.block1').style.animationName='win';
    document.querySelector('.button').style.animationName='jump';
    document.querySelector('.block5').style.animationName='win';
    document.querySelector('.block9').style.animationName='win';
        document.querySelector('.winner').innerHTML='Победили крестики!';y=true}
    if ((document.querySelector('.block3').innerHTML==='x')&&(document.querySelector('.block5').innerHTML==='x')&&(document.querySelector('.block7').innerHTML==='x'))
    {document.querySelector('.block3').style.animationName='win';
    document.querySelector('.button').style.animationName='jump';
    document.querySelector('.block5').style.animationName='win';
    document.querySelector('.block7').style.animationName='win';
        document.querySelector('.winner').innerHTML='Победили крестики!';y=true}

        if ((document.querySelector('.block1').innerHTML==='0')&&(document.querySelector('.block2').innerHTML==='0')&&(document.querySelector('.block3').innerHTML==='0'))
        { document.querySelector('.block1').style.animationName='win';
        document.querySelector('.block2').style.animationName='win';
        document.querySelector('.button').style.animationName='jump';
        document.querySelector('.block3').style.animationName='win';
            document.querySelector('.winner').innerHTML='Победили нолики!';y=true}
        if ((document.querySelector('.block4').innerHTML==='0')&&(document.querySelector('.block5').innerHTML==='0')&&(document.querySelector('.block6').innerHTML==='0'))
        {document.querySelector('.block4').style.animationName='win';
        document.querySelector('.button').style.animationName='jump';
        document.querySelector('.block5').style.animationName='win';
        document.querySelector('.block6').style.animationName='win';
            document.querySelector('.winner').innerHTML='Победили нолики!';y=true}
        if ((document.querySelector('.block7').innerHTML==='0')&&(document.querySelector('.block8').innerHTML==='0')&&(document.querySelector('.block9').innerHTML==='0'))
        {document.querySelector('.block7').style.animationName='win';
        document.querySelector('.button').style.animationName='jump';
        document.querySelector('.block8').style.animationName='win';
        document.querySelector('.block9').style.animationName='win';
            document.querySelector('.winner').innerHTML='Победили нолики!';y=true}
        if ((document.querySelector('.block1').innerHTML==='0')&&(document.querySelector('.block4').innerHTML==='0')&&(document.querySelector('.block7').innerHTML==='0'))
        {document.querySelector('.block1').style.animationName='win';
        document.querySelector('.button').style.animationName='jump';
        document.querySelector('.block4').style.animationName='win';
        document.querySelector('.block7').style.animationName='win';
            document.querySelector('.winner').innerHTML='Победили нолики!';y=true}
        if ((document.querySelector('.block2').innerHTML==='0')&&(document.querySelector('.block5').innerHTML==='0')&&(document.querySelector('.block8').innerHTML==='0'))
        {document.querySelector('.block2').style.animationName='win';
        document.querySelector('.button').style.animationName='jump';
        document.querySelector('.block5').style.animationName='win';
        document.querySelector('.block8').style.animationName='win';
            document.querySelector('.winner').innerHTML='Победили нолики!';y=true}
        if ((document.querySelector('.block3').innerHTML==='0')&&(document.querySelector('.block6').innerHTML==='0')&&(document.querySelector('.block9').innerHTML==='0'))
        {document.querySelector('.block3').style.animationName='win';
        document.querySelector('.button').style.animationName='jump';
        document.querySelector('.block6').style.animationName='win';
        document.querySelector('.block9').style.animationName='win';
            document.querySelector('.winner').innerHTML='Победили нолики!';y=true}
        if ((document.querySelector('.block1').innerHTML==='0')&&(document.querySelector('.block5').innerHTML==='0')&&(document.querySelector('.block9').innerHTML==='0'))
        {document.querySelector('.block1').style.animationName='win';
        document.querySelector('.button').style.animationName='jump';
        document.querySelector('.block5').style.animationName='win';
        document.querySelector('.block9').style.animationName='win';
            document.querySelector('.winner').innerHTML='Победили нолики!';y=true}
        if ((document.querySelector('.block3').innerHTML==='0')&&(document.querySelector('.block5').innerHTML==='0')&&(document.querySelector('.block7').innerHTML==='0'))
        {document.querySelector('.block3').style.animationName='win';
        document.querySelector('.button').style.animationName='jump';
        document.querySelector('.block5').style.animationName='win';
        document.querySelector('.block7').style.animationName='win';
            document.querySelector('.winner').innerHTML='Победили нолики!';y=true}
        if (
            // y!=true &&
            document.querySelector('.block1').innerHTML!=''&&
            document.querySelector('.block2').innerHTML!=''&&
            document.querySelector('.block3').innerHTML!=''&&
            document.querySelector('.block4').innerHTML!=''&&
            document.querySelector('.block5').innerHTML!=''&&
            document.querySelector('.block6').innerHTML!=''&&
            document.querySelector('.block7').innerHTML!=''&&
            document.querySelector('.block8').innerHTML!=''&&
            document.querySelector('.block9').innerHTML!=''&&
            document.querySelector('.winner').innerHTML===''
            ) 
            {document.querySelector('.winner').innerHTML='Ничья!';
            document.querySelector('.button').style.animationName='jump';
        }
        
    
}
else {alert('Игра закончена!');
document.querySelector('.button').style.animationName='jump';}
})}


// document.querySelector('.button').addEventListener('click',function(){
//     location.reload()})
document.querySelector('.button').addEventListener('click',function(){
    for (let z in massiv) {massiv[z].innerHTML=''}
    document.querySelector('.winner').innerHTML='';
    document.querySelector('.block1').style.animationName='';
    document.querySelector('.block2').style.animationName='';
    document.querySelector('.block3').style.animationName='';
    document.querySelector('.block4').style.animationName='';
    document.querySelector('.block5').style.animationName='';
    document.querySelector('.block6').style.animationName='';
    document.querySelector('.block7').style.animationName='';
    document.querySelector('.block8').style.animationName='';
    document.querySelector('.block9').style.animationName='';
    document.querySelector('.button').style.animationName=''
})
 
