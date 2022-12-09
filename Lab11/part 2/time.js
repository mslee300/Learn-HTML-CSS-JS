var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var seconds = 1000;
var minutes = seconds * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;


window.addEventListener("resize", function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  c.clearRect(0,0,innerWidth, innerHeight);
  resize();
});

function clockHand(innerRad, outerRad, base, id, limit, color){
  this.anchorX = innerWidth/2;
  this.anchorY = innerHeight/2; 
  this.angle = -Math.PI;
  this.innerRadius = innerRad;
  this.outerRadius = outerRad;
  this.startX;
  this.startY;
  this.endX;
  this.endY;
  this.base = base;
  this.value;
  this.limit = limit;
  this.id = id;
  this.color = "rgb("+ Math.round(Math.random() * 255) +","+ Math.round(Math.random() * 255) +","+ Math.round(Math.random() * 255) +")";
  
  this.draw = function(){
    console.log("draw");
    this.angle = -Math.PI;
    while(this.angle > -Math.PI - (Math.PI * 2 / this.limit) * this.value){
      this.startX = this.anchorX + this.innerRadius * Math.sin(this.angle);
      this.startY = this.anchorY + this.innerRadius * Math.cos(this.angle);
      this.endX = this.anchorX + this.outerRadius * Math.sin(this.angle);
      this.endY = this.anchorY + this.outerRadius * Math.cos(this.angle);
      c.beginPath();
      c.moveTo(this.startX, this.startY);
      c.lineTo(this.endX, this.endY);
      c.strokeStyle = this.color;
      c.stroke();
      this.angle -= this.base;
    }
  }
  
  this.update = function(){
    switch(this.id){
      case "ms":
        this.value = timeMilliseconds;
        break;
      case "s":
        this.value = timeSeconds;
        break;
      case "m":
        this.value = timeMinutes;
        break;
      case "h":
        this.value = timeHours;
        break;
      case "d":
        this.value = timeDays;
        break; 
      case "mo":
        this.value = timeMonth;
        break;
    }
    /*if(this.angle <= Math.PI * -3){
      this.angle = -Math.PI;
      c.save();
      c.beginPath();
      c.moveTo(this.anchorX + this.innerRadius, this.anchorY);
      c.arcTo(this.anchorX + this.innerRadius, this.anchorY + this.innerRadius, this.anchorX, this.anchorY + this.innerRadius, this.innerRadius);
      c.arcTo(this.anchorX - this.innerRadius, this.anchorY + this.innerRadius, this.anchorX - this.innerRadius, this.anchorY, this.innerRadius);
      c.arcTo(this.anchorX - this.innerRadius, this.anchorY - this.innerRadius, this.anchorX, this.anchorY - this.innerRadius, this.innerRadius);
      c.arcTo(this.anchorX + this.innerRadius, this.anchorY - this.innerRadius, this.anchorX + this.innerRadius, this.anchorY, this.innerRadius);
      c.lineTo(this.anchorX + this.outerRadius, this.anchorY);
      c.arcTo(this.anchorX + this.outerRadius, this.anchorY - this.outerRadius, this.anchorX, this.anchorY - this.outerRadius, this.outerRadius);
      c.arcTo(this.anchorX - this.outerRadius, this.anchorY - this.outerRadius, this.anchorX - this.outerRadius, this.anchorY, this.outerRadius);
      c.arcTo(this.anchorX - this.outerRadius, this.anchorY + this.outerRadius, this.anchorX, this.anchorY + this.outerRadius, this.outerRadius);
      c.arcTo(this.anchorX + this.outerRadius, this.anchorY + this.outerRadius, this.anchorX + this.outerRadius, this.anchorY, this.outerRadius);
      c.closePath();
      c.clip();
      c.clearRect(0,0,innerWidth,innerHeight);
      c.restore();     
    }*/
    this.draw();
  }
}

var radBase = innerWidth / 2 / 21;
var fullRadian = Math.PI * 2;

var moHand = new clockHand(radBase * 14, radBase * 21, Math.random() / 300 + fullRadian / 1200, "mo", 12, "#af3255");
var dHand = new clockHand(radBase * 12, radBase * 14, Math.random() / 250 + fullRadian / 1200, "d", 31, "#ff3352");
var hHand = new clockHand(radBase * 7, radBase * 12, Math.random() / 200 + fullRadian / 1200, "h", 24, "#2355a5");
var mHand = new clockHand(radBase * 4, radBase * 7, Math.random() / 150 + fullRadian / 1200, "m", 60, "#c644f3");
var sHand = new clockHand(radBase * 3, radBase * 4, Math.random() / 100 + fullRadian / 1200, "s", 60, "#4425ff");
var msHand = new clockHand(radBase * 0, radBase * 3, Math.random() / 50 + fullRadian / 1200, "ms", 1000, "#ff42aa");

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  upDate();
  msHand.update();
  sHand.update();
  mHand.update();
  hHand.update();
  dHand.update();
  moHand.update();
}

var d = new Date();

var timeMonth = d.getMonth();
var timeDays = d.getDate();
var timeHours = d.getHours();
var timeMinutes = d.getMinutes();
var timeSeconds = d.getSeconds();
var timeMilliseconds = d.getMilliseconds();

function upDate(){
  d = new Date();
  
  timeYear = d.getFullYear();
  timeMonth = d.getMonth();
  timeDays = d.getDate();
  timeHours = d.getHours();
  timeMinutes = d.getMinutes();
  timeSeconds = d.getSeconds();
  timeMilliseconds = d.getMilliseconds();
  
  document.getElementById("seconds").innerHTML = timeSeconds;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("days").innerHTML = timeDays;
  
  switch(timeMonth){
    case 0: document.getElementById("months").innerHTML = "January"; break;
    case 1: document.getElementById("months").innerHTML = "February"; break;
    case 2: document.getElementById("months").innerHTML = "March"; break;
    case 3: document.getElementById("months").innerHTML = "April"; break;
    case 4: document.getElementById("months").innerHTML = "May"; break;
    case 5: document.getElementById("months").innerHTML = "June"; break;
    case 6: document.getElementById("months").innerHTML = "July"; break;
    case 7: document.getElementById("months").innerHTML = "August"; break;
    case 8: document.getElementById("months").innerHTML = "September"; break;
    case 9: document.getElementById("months").innerHTML = "October"; break;
    case 10: document.getElementById("months").innerHTML = "November"; break;
    case 11: document.getElementById("months").innerHTML = "December"; break;
  }
  
  document.getElementById("year").innerHTML = timeYear;
  
}

function resize(){
  c.clearRect(0,0,innerWidth,innerHeight);
  init();
  
  document.getElementById("seconds").style.right = (innerWidth / 2 + sHand.innerRadius + (sHand.outerRadius - sHand.innerRadius) / 2)+"px";
  document.getElementById("minutes").style.right = (innerWidth / 2 + mHand.innerRadius + (mHand.outerRadius - mHand.innerRadius) / 2)+"px";
  document.getElementById("hours").style.right = (innerWidth / 2 + hHand.innerRadius + (hHand.outerRadius - hHand.innerRadius) / 2)+"px";
  document.getElementById("days").style.right = (innerWidth / 2 + dHand.innerRadius + (dHand.outerRadius - dHand.innerRadius) / 2)+"px";
  document.getElementById("months").style.right = (innerWidth / 2 + moHand.innerRadius + (moHand.outerRadius - moHand.innerRadius) / 2)+"px";
  document.getElementById("separator1").style.right = (innerWidth / 2 + mHand.innerRadius)+"px";
  document.getElementById("separator2").style.right = (innerWidth / 2 + hHand.innerRadius)+"px";
  
  
}

function init(){
  radBase = innerWidth / 2 / 21;
  
  moHand = new clockHand(radBase * 14, radBase * 21, Math.random() / 300 + fullRadian / 1200, "mo", 12, "#af3255");
dHand = new clockHand(radBase * 12, radBase * 14, Math.random() / 250 + fullRadian / 1200, "d", 31, "#ff3352");
hHand = new clockHand(radBase * 7, radBase * 12, Math.random() / 200 + fullRadian / 1200, "h", 24, "#2355a5");
  mHand = new clockHand(radBase * 4, radBase * 7, Math.random() / 150 + fullRadian / 1200, "m", 60, "#c644f3");
 sHand = new clockHand(radBase * 3, radBase * 4, Math.random() / 100 + fullRadian / 1200, "s", 60, "#4425ff");
msHand = new clockHand(radBase * 0, radBase * 3, Math.random() / 50 + fullRadian / 1200, "ms", 1000, "#ff42aa");
  }

resize();
animate();