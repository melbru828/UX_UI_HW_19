$("#row4,.left_side_container,.mobileCase,.webCase,#row3,#row2").css("transition");
var arr = ["#FFBD40","#FEA6B7","#B2C71D","#93A8FD","#82E3DF"];
function changeColor(){
   $("#row4,.left_side_container,.mobileCase,.webCase,#row3,#row2").css({
        backgroundColor : arr[parseInt(Math.random() * 5)]
      }); 
      
}
changeColor();
setInterval(changeColor,1000)



