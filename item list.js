
// let tittlea=document.getElementById('tittles');
// tittlea.sty
// tittlea.style.cssText='font-size:20;color:green;font-weight:bold;';
// ;



// var headerTittle=document.getElementById('main-header');
// headerTittle.style.border='5px solid black';
// headerTittle.style.font="bold green 16px"
// headerTittle.innerText="Main part"
// var list=document.getElementsByClassName('list-group-item');

// list[1].textContent="new era";
// list[0].cssText="font-weight:bold;"
// var element=document.getElementById('list-group-Item3');
// element.style.background="green";
// var item=document.getElementById("items")
//  var li=item.getElementsByTagName('li');
//  for(var i=0;i<li.length;i++)
//  { li[i].style.cssText='font-weight:bold; color: blue';

//  }

//  var item3=document.getElementById("list-group-Item3");
//   item3.style.display='none';
//   var item3=document.getElementById("list-group-Item2");
//   item3.style.background='green';
var next = document.querySelector('#list2');
var nextElementSibling = next.nextElementSibling;
 
    nextElementSibling.style.color = "#09791B";
    var nextSibling=next.nextSibling;
     nextSibling.textContent="This is content of nextSibling";
   
  var prev=document.querySelector('#mainOL');
   var prevElementSibling=prev.previousElementSibling;
    prevElementSibling.style.background="pink";
   
    var previous=document.querySelector('#list3');
    var prevSibling=previous.previousElementSibling;
    prevSibling.style.background="#33F3FF"
var head=document.querySelector('header');
 head.style.background="blue";
 var element=document.querySelectorAll('input[type=submit]');
 for(var i=0;i<element.length;i++)
 {
    element[i].style.color="red";
 } 
 var input=document.querySelector('form');
  var lastElementChild=input.lastElementChild;
 lastElementChild.style.borderColor="#77FF33";
//  var contain=document.querySelector('.container');
//    lastChild=contain.lastChild;
//     lastChild.style.color="pink";
  
    var create=document.createElement('div');
     create.setAttribute('id','newID');
     document.body.appendChild(create)
     var textNode=document.createTextNode("This is the text node created");
     create.appendChild(textNode);
     create.style.cssText="color:red";
   //    create.append(textNode);
      // var parentElement=document.getElementById('.learn');
      //  parentElement.appendChild(create);
    
 var firstchild=document.querySelector('.list-group-item:first-child');
  firstchild.style.color="grey";
 
 var item=document.querySelector('.list-group-item:last-child')
 item.style.color="yellow";
 var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
 for(var i=0;i<odd.length;i++)
 {
 odd[i].style.background='red';
 }
 var even=document.querySelectorAll('.list-group-item:nth-child(even)');
 for(var i=0;i<even.length;i++)
 {
 even[i].style.background='green';
 }
 