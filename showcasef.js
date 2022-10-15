var arr=[
    {new:"DESIGN",name:"Rayul Curie",image:"https://images.unsplash.com/flagged/photo-1555744918-8c36af49cf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=454&q=80",time:"09:00-11:00",fr:"8",bc:".07",color:"red"},
    {new:"CREATE",name:"Oleg Ivanov",image:"https://images.unsplash.com/photo-1541519481457-763224276691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",time:"07:00-09:00",fr:"9",bc:".09",color:"orange"},
    {new:"CONTENT",name:"Nicole Geri",image:"https://images.unsplash.com/photo-1615364359289-77d67dcddfb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",time:"06:00-10:00",fr:"7",bc:".08",color:"yellow"},
    {new:"CONTENT",fr:"9",bc:".09"}
    
];
var clutter="";
for(var i=0;i<3;i++)
{
    clutter+=` <div class="day">
    <img src=${arr[i].image} alt="">
   
    <h3> <span>${arr[i].time}</span><br>${arr[i].name}</h3>
</div>`;

}
document.querySelector("#days").innerHTML=clutter;

var clutter1="";
for(var i=0;i<3;i++)
{
    clutter1+=`<div id="circle">
    <div id="round">
        <p><span>${arr[i].fr}</span>${arr[i].bc}</p>
    </div>
    <h3>${arr[i].new}</h3>
</div>`;

}
document.querySelector("#circle").innerHTML=clutter1;