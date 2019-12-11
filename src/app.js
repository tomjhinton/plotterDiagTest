import 'bulma'
import './style.scss'

const canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
let  x =  0
let y = 0
ctx.lineWidth = 0.002
for(let i = 0;i<150; i++){

  ctx.moveTo(x, y)
  ctx.lineTo(i*2 , x+15)
  ctx.lineTo(i*4 , x+15)
  ctx.lineWidth = 0.012
  ctx.lineTo(i*9 , x+145)
  ctx.lineWidth = 0.02
  ctx.lineTo(i*89 , x-45)
  ctx.lineTo(x, x-45)

  ctx.stroke()
  x+=10
  y+= 5
}

const canvas2 = document.getElementById('canvas2')
var ctx2 = canvas2.getContext('2d')
function drawLine(p0, p1, ) {
				ctx2.beginPath();
				ctx2.moveTo(p0.x, p0.y);
				ctx2.lineTo(p1.x, p1.y);
				ctx2.strokeStyle = 'rgba(200,200,200,0.4)'
				ctx2.lineWidth = 0.4;
				ctx2.stroke();
			}
			function drawTriangle(p0, p1, p2) {
				drawLine(p0, p1)
				drawLine(p1, p2)
				drawLine(p2, p0)
			}
			function drawFract(p0, p1, p2, limit){
				if(limit > 0){
					const pA = {
							x: p0.x + (p1.x - p0.x)/2,
							y: p0.y - (p0.y - p1.y)/2
						},
						pB = {
							x: p1.x + (p2.x - p1.x)/2,
							y: p1.y - (p1.y - p2.y)/2
						},
						pC = {
							x: p0.x + (p2.x - p0.x)/2,
							y: p0.y
						};
					drawFract(p0, pA, pC, limit-1);
					drawFract(pA, p1, pB, limit-1);
					drawFract(pC, pB, p2, limit-1);
				}
				else{
					drawTriangle(p0,p1,p2);
				}
			}
      ctx2.lineWidth = 0.02
			drawFract({x: 0, y:400},{x:200, y:0},  {x:400, y:400}, 7)
let a = 0
      setInterval(function () {
      //  drawFract({x: a, y:400},{x:a+200, y:0},  {x:a+400, y:400}, 7)
          drawFract({x: a, y:400},{x:a+200, y:a},  {x:a+400, y:400}, 3)
        a+=10

      }, 100);

const canvas3 = document.getElementById('canvas3')
var ctx3 = canvas3.getContext('2d')
ctx3.moveTo(0, 0)
ctx3.lineTo(200, 100)
ctx3.stroke()

const canvas4 = document.getElementById('canvas4')
var ctx4 = canvas4.getContext('2d')
ctx4.moveTo(0, 0)
ctx4.lineTo(200, 100)
ctx4.stroke()
