
var large=$('.large');
var btn1=$('.c1');
var btn2=$('.c2');
var buttons=$('.buttoncircle');
var colors=["#7fbeeb","#96a3e3","#e87ddd","#fa7b57"];

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

btn1.click(function(){
    var num=getRandomArbitrary(0,3);
    var selectedColor=colors[num];
    btn1.css("backgroundColor", `${selectedColor}`);
    btn2.css("backgroundColor", `${selectedColor}`);
    large.css("backgroundColor", `${selectedColor}`);
     gsap.to("#container", {rotation: 60, duration: 1});
});

btn2.click(function(){
    var num=getRandomArbitrary(0,3);
    var selectedColor=colors[num];
    btn2.css("backgroundColor", `${selectedColor}`);
    btn1.css("backgroundColor", `${selectedColor}`);
    large.css("backgroundColor", `${selectedColor}`);
     gsap.to("#container", {rotation: -60, duration: 1});
})






