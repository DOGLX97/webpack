import css from './css/index.css';
import sass from './css/common.scss';
// import $ from 'jquery';
let oDiv=document.createElement("div");
oDiv.innerHTML='hello world123！';
document.body.appendChild(oDiv);
let a=5;
let foo=(x,y)=>x+y;
let b=10;
// $('#div4').html('test jquery');

let json=require('../author.json');
$('#json').html(`作者是${json.name},年龄是${json.age}`);
