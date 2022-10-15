var countx=0;
var county=0;

window.addEventListener("keydown",function(dets){
   if(dets.keyCode === 40)
   {
       if(county<document.body.getBoundingClientRect().bottom-20-100)
       {
        county+=20;
        document.querySelector("img").style.top=`${county}px`;
       }
      
   }
  else if(dets.keyCode === 38)
  {
    if(county>0)
    {
    county-=20;
    document.querySelector("img").style.top=`${county}px`;
  }
}
  else if(dets.keyCode === 37)
  {
      if(countx>0)
      {
        countx-=20;
        document.querySelector("img").style.left=`${countx}px`;
      }
   
  }
  else if(dets.keyCode === 39)
  {
    
    
      if(countx<document.body.getBoundingClientRect().right-20-100)
      {
        countx+=20;
        document.querySelector("img").style.left=`${countx}px`;
      }
   
  }
});