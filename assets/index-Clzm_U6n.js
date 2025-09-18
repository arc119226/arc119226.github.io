(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const k={snowflake:{type:"snowflake",colors:["#ffffff","#e6f3ff","#cce7ff","#b3d9ff","#f0f8ff"],behavior:{movement:"float",gravity:30,drag:.95,turbulence:.3},physics:{velocity:{min:20,max:60},acceleration:{x:0,y:30},mass:.5,elasticity:.1},visual:{size:{min:1,max:3},opacity:{start:.6,end:.1},scale:{start:.8,end:.2},rotation:{enabled:!0,speed:.02},glow:{enabled:!1,intensity:0}},animation:{lifespan:{min:800,max:1200},fadeIn:100,fadeOut:400,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:30,max:60},delay:{min:0,max:50},spread:{angle:Math.PI*.2,radius:40},burst:!1}},fire:{type:"fire",colors:["#dda0dd","#e6b8ea","#d8bfd8","#9932cc","#ba55d3"],behavior:{movement:"rise",gravity:-100,drag:.92,turbulence:.8},physics:{velocity:{min:80,max:200},acceleration:{x:0,y:-150},mass:.3,elasticity:0},visual:{size:{min:5,max:12},opacity:{start:.9,end:0},scale:{start:.5,end:1.6},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:1.2}},animation:{lifespan:{min:800,max:1500},fadeIn:50,fadeOut:600,pulsing:{enabled:!0,frequency:.1}},spawning:{count:{min:140,max:170},delay:{min:0,max:150},spread:{angle:Math.PI*.4,radius:40},burst:!0}},lightning:{type:"lightning",colors:["#ffff00","#ffffff","#00ffff","#87ceeb","#e0ffff"],behavior:{movement:"chain",gravity:0,drag:.99,turbulence:1.5},physics:{velocity:{min:300,max:600},acceleration:{x:0,y:0},mass:.1,elasticity:0},visual:{size:{min:8,max:16},opacity:{start:1,end:0},scale:{start:1,end:1},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:2}},animation:{lifespan:{min:100,max:300},fadeIn:0,fadeOut:150,pulsing:{enabled:!0,frequency:.5}},spawning:{count:{min:180,max:210},delay:{min:0,max:50},spread:{angle:Math.PI*2,radius:0},burst:!0}},blackhole:{type:"blackhole",colors:["#000000","#4b0082","#9400d3","#8b00ff","#1a1a1a"],behavior:{movement:"implode",gravity:800,drag:1.02,turbulence:.1},physics:{velocity:{min:100,max:300},acceleration:{x:0,y:0},mass:1,elasticity:0},visual:{size:{min:12,max:20},opacity:{start:.8,end:1},scale:{start:1.5,end:.1},rotation:{enabled:!0,speed:.15},glow:{enabled:!0,intensity:2.5}},animation:{lifespan:{min:1500,max:2500},fadeIn:100,fadeOut:500,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:220,max:300},delay:{min:0,max:300},spread:{angle:Math.PI*2,radius:120},burst:!1}},explosion:{type:"explosion",colors:["#87ceeb","#add8e6","#b0e0e6","#87cefa","#00bfff"],behavior:{movement:"explode",gravity:50,drag:.88,turbulence:.6},physics:{velocity:{min:150,max:300},acceleration:{x:0,y:100},mass:.8,elasticity:.3},visual:{size:{min:3,max:8},opacity:{start:.9,end:0},scale:{start:.3,end:1.2},rotation:{enabled:!0,speed:.1},glow:{enabled:!0,intensity:1}},animation:{lifespan:{min:500,max:1e3},fadeIn:20,fadeOut:300,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:110,max:130},delay:{min:0,max:30},spread:{angle:Math.PI*2,radius:0},burst:!0}},magic:{type:"magic",colors:["#90ee90","#98fb98","#b4ffb4","#7fff00","#adff2f"],behavior:{movement:"float",gravity:-20,drag:.98,turbulence:.4},physics:{velocity:{min:30,max:120},acceleration:{x:0,y:-50},mass:.2,elasticity:.8},visual:{size:{min:2,max:5},opacity:{start:.7,end:.1},scale:{start:.6,end:1},rotation:{enabled:!0,speed:.05},glow:{enabled:!0,intensity:.6}},animation:{lifespan:{min:1e3,max:1500},fadeIn:200,fadeOut:400,pulsing:{enabled:!0,frequency:.08}},spawning:{count:{min:70,max:100},delay:{min:0,max:100},spread:{angle:Math.PI*.4,radius:50},burst:!1}},storm:{type:"storm",colors:["#708090","#778899","#b0c4de","#87ceeb","#4682b4"],behavior:{movement:"spiral",gravity:20,drag:.96,turbulence:1.2},physics:{velocity:{min:150,max:350},acceleration:{x:0,y:50},mass:.6,elasticity:.2},visual:{size:{min:2,max:8},opacity:{start:.7,end:.2},scale:{start:1,end:.5},rotation:{enabled:!0,speed:.12},glow:{enabled:!1,intensity:0}},animation:{lifespan:{min:1200,max:2e3},fadeIn:150,fadeOut:500,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:60,max:120},delay:{min:0,max:100},spread:{angle:Math.PI*2,radius:100},burst:!1}},supernova:{type:"supernova",colors:["#ff8c00","#ffa500","#ff7f00","#ff6347","#ff4500"],behavior:{movement:"explode",gravity:-50,drag:.85,turbulence:1.8},physics:{velocity:{min:200,max:400},acceleration:{x:0,y:-100},mass:.4,elasticity:.1},visual:{size:{min:4,max:9},opacity:{start:1,end:0},scale:{start:.4,end:1.3},rotation:{enabled:!0,speed:.2},glow:{enabled:!0,intensity:2.2}},animation:{lifespan:{min:1e3,max:1800},fadeIn:50,fadeOut:800,pulsing:{enabled:!0,frequency:.15}},spawning:{count:{min:120,max:150},delay:{min:0,max:80},spread:{angle:Math.PI*2,radius:0},burst:!0}},cosmic_burst:{type:"cosmic_burst",colors:["#ffd700","#ffef94","#fff68f","#ffffe0","#fffacd"],behavior:{movement:"explode",gravity:-80,drag:.88,turbulence:2.5},physics:{velocity:{min:300,max:600},acceleration:{x:0,y:-200},mass:.2,elasticity:0},visual:{size:{min:5,max:10},opacity:{start:1,end:0},scale:{start:.2,end:1.4},rotation:{enabled:!0,speed:.25},glow:{enabled:!0,intensity:3}},animation:{lifespan:{min:1500,max:2800},fadeIn:100,fadeOut:1e3,pulsing:{enabled:!0,frequency:.2}},spawning:{count:{min:130,max:160},delay:{min:0,max:200},spread:{angle:Math.PI*2,radius:30},burst:!0}},green_lotus:{type:"green_lotus",colors:["#b4ffb4","#90ee90","#98fb98","#adff2f","#c8ffc8"],behavior:{movement:"float",gravity:-10,drag:.96,turbulence:.2},physics:{velocity:{min:40,max:80},acceleration:{x:0,y:-30},mass:.3,elasticity:.5},visual:{size:{min:2,max:4},opacity:{start:.8,end:.1},scale:{start:.6,end:1.2},rotation:{enabled:!0,speed:.03},glow:{enabled:!0,intensity:.8}},animation:{lifespan:{min:1e3,max:1500},fadeIn:200,fadeOut:500,pulsing:{enabled:!0,frequency:.05}},spawning:{count:{min:60,max:90},delay:{min:0,max:80},spread:{angle:Math.PI*.3,radius:40},burst:!1}},unlimited_blade_works:{type:"unlimited_blade_works",colors:["#c0c0c0","#d3d3d3","#dcdcdc","#e0e0e0","#f0f0f0"],behavior:{movement:"fall",gravity:800,drag:.99,turbulence:.1},physics:{velocity:{min:300,max:500},acceleration:{x:0,y:800},mass:.8,elasticity:0},visual:{size:{min:1,max:2},opacity:{start:.7,end:.2},scale:{start:.5,end:.7},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:.4}},animation:{lifespan:{min:800,max:1200},fadeIn:150,fadeOut:200,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:20,max:40},delay:{min:0,max:60},spread:{angle:Math.PI*.2,radius:30},burst:!1}},divine_thunder:{type:"divine_thunder",colors:["#c8a0ff","#b480ff","#dda0dd","#9932cc","#ba55d3"],behavior:{movement:"chain",gravity:0,drag:.98,turbulence:2},physics:{velocity:{min:400,max:800},acceleration:{x:0,y:0},mass:.1,elasticity:0},visual:{size:{min:6,max:12},opacity:{start:1,end:0},scale:{start:1,end:1.2},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:2.5}},animation:{lifespan:{min:1500,max:2e3},fadeIn:120,fadeOut:250,pulsing:{enabled:!0,frequency:.3}},spawning:{count:{min:120,max:160},delay:{min:0,max:100},spread:{angle:Math.PI*2,radius:80},burst:!0}},nine_finale:{type:"nine_finale",colors:["#ff8c40","#ff5028","#ffb870","#ff6030","#ffa060"],behavior:{movement:"explode",gravity:.8,drag:.95,turbulence:1.5},physics:{velocity:{min:600,max:1e3},acceleration:{x:0,y:500},mass:.3,elasticity:.1},visual:{size:{min:8,max:16},opacity:{start:1,end:0},scale:{start:.8,end:1.4},rotation:{enabled:!0,speed:2},glow:{enabled:!0,intensity:3}},animation:{lifespan:{min:1600,max:2200},fadeIn:100,fadeOut:300,pulsing:{enabled:!0,frequency:.5}},spawning:{count:{min:180,max:210},delay:{min:0,max:120},spread:{angle:Math.PI*2,radius:100},burst:!0}}};function D(f){switch(f){case"SSS":return"cosmic_burst";case"SS":return"nine_finale";case"S":return"divine_thunder";case"A":return"explosion";case"B":return"green_lotus";case"C":return"unlimited_blade_works";default:return"snowflake"}}function w(f,e,a=.5){const t=k[f],i=k[e];return{type:f,colors:[...t.colors,...i.colors],behavior:{movement:a>.5?t.behavior.movement:i.behavior.movement,gravity:t.behavior.gravity*a+i.behavior.gravity*(1-a),drag:t.behavior.drag*a+i.behavior.drag*(1-a),turbulence:t.behavior.turbulence*a+i.behavior.turbulence*(1-a)},physics:{velocity:{min:Math.min(t.physics.velocity.min,i.physics.velocity.min),max:Math.max(t.physics.velocity.max,i.physics.velocity.max)},acceleration:{x:t.physics.acceleration.x*a+i.physics.acceleration.x*(1-a),y:t.physics.acceleration.y*a+i.physics.acceleration.y*(1-a)},mass:t.physics.mass*a+i.physics.mass*(1-a),elasticity:t.physics.elasticity*a+i.physics.elasticity*(1-a)},visual:{size:{min:Math.min(t.visual.size.min,i.visual.size.min),max:Math.max(t.visual.size.max,i.visual.size.max)},opacity:{start:Math.max(t.visual.opacity.start,i.visual.opacity.start),end:Math.min(t.visual.opacity.end,i.visual.opacity.end)},scale:{start:t.visual.scale.start*a+i.visual.scale.start*(1-a),end:t.visual.scale.end*a+i.visual.scale.end*(1-a)},rotation:{enabled:t.visual.rotation.enabled||i.visual.rotation.enabled,speed:t.visual.rotation.speed*a+i.visual.rotation.speed*(1-a)},glow:{enabled:t.visual.glow.enabled||i.visual.glow.enabled,intensity:Math.max(t.visual.glow.intensity,i.visual.glow.intensity)}},animation:{lifespan:{min:Math.min(t.animation.lifespan.min,i.animation.lifespan.min),max:Math.max(t.animation.lifespan.max,i.animation.lifespan.max)},fadeIn:Math.max(t.animation.fadeIn,i.animation.fadeIn),fadeOut:Math.max(t.animation.fadeOut,i.animation.fadeOut),pulsing:{enabled:t.animation.pulsing.enabled||i.animation.pulsing.enabled,frequency:t.animation.pulsing.frequency*a+i.animation.pulsing.frequency*(1-a)}},spawning:{count:{min:Math.max(t.spawning.count.min,i.spawning.count.min),max:Math.max(t.spawning.count.max,i.spawning.count.max)},delay:{min:Math.min(t.spawning.delay.min,i.spawning.delay.min),max:Math.max(t.spawning.delay.max,i.spawning.delay.max)},spread:{angle:Math.max(t.spawning.spread.angle,i.spawning.spread.angle),radius:Math.max(t.spawning.spread.radius,i.spawning.spread.radius)},burst:t.spawning.burst||i.spawning.burst}}}class H{x;y;angle;scale;life;maxLife;velocity;rotation;acceleration;dead=!1;time=0;constructor(e){this.x=e.x,this.y=e.y,this.angle=e.angle,this.scale=e.scale,this.life=e.life,this.maxLife=e.life,this.velocity=e.velocity,this.rotation=e.rotation,this.acceleration=e.acceleration}update(e){if(this.time+=e,this.time>this.life){this.dead=!0;return}this.x+=Math.cos(this.angle)*this.velocity*e,this.y+=Math.sin(this.angle)*this.velocity*e,this.acceleration+=this.rotation*e}draw(e){const a=1-this.time/this.life;e.save(),e.globalAlpha=a*.9,e.translate(this.x,this.y),e.rotate(this.acceleration),e.scale(this.scale,this.scale),this.drawPetal(e),e.restore()}drawPetal(e){const a=e.createLinearGradient(0,0,80,55);a.addColorStop(0,"rgba(180,255,220,0.9)"),a.addColorStop(1,"rgba(120,220,180,0.1)"),e.fillStyle=a,e.beginPath(),e.moveTo(12,25),e.bezierCurveTo(32,8,58,12,65,25),e.bezierCurveTo(58,38,32,42,12,25),e.closePath(),e.fill()}}class P{x;y;angle;dead=!1;time=0;maxTime=.5;speed=600;constructor(e){this.x=e.x,this.y=e.y,this.angle=e.angle}update(e){if(this.time+=e,this.time>this.maxTime){this.dead=!0;return}this.x+=Math.cos(this.angle)*this.speed*e,this.y+=Math.sin(this.angle)*this.speed*e}draw(e){e.save(),e.translate(this.x,this.y),e.rotate(this.angle),this.drawBeam(e),e.restore()}drawBeam(e){const a=e.createLinearGradient(0,0,160,0);a.addColorStop(0,"rgba(200,255,230,0)"),a.addColorStop(.3,"rgba(200,255,230,0.8)"),a.addColorStop(.8,"rgba(200,255,230,0.8)"),a.addColorStop(1,"rgba(200,255,230,0)"),e.fillStyle=a,e.fillRect(-80,-6,160,12)}}class R{x;y;dead=!1;time=0;phase=0;petals=[];swords=[];targetPositions;constructor(e,a,t=[]){this.x=e,this.y=a,this.targetPositions=t}update(e){switch(this.time+=e,this.phase){case 0:this.time>.5&&(this.createPetals(),this.phase=1,this.time=0);break;case 1:this.time>.4&&(this.createSwordBeams(),this.phase=2,this.time=0);break;case 2:this.time>1.5&&(this.dead=!0);break}this.petals.forEach(a=>a.update(e)),this.petals=this.petals.filter(a=>!a.dead),this.swords.forEach(a=>a.update(e)),this.swords=this.swords.filter(a=>!a.dead)}draw(e){this.drawAura(e),this.phase===0&&this.drawLotusFlower(e),this.petals.forEach(a=>a.draw(e)),this.swords.forEach(a=>a.draw(e))}drawAura(e){let a=1;this.phase===0?a=Math.min(1,this.time/.5):this.phase===2&&(a=Math.max(0,1-this.time/1.5)),e.save(),e.globalAlpha=a;const t=e.createRadialGradient(this.x,this.y,0,this.x,this.y,130);t.addColorStop(0,"rgba(180,255,220,0.8)"),t.addColorStop(1,"rgba(180,255,220,0)"),e.fillStyle=t,e.beginPath(),e.arc(this.x,this.y,130,0,Math.PI*2),e.fill(),e.restore()}drawLotusFlower(e){for(let t=0;t<8;t++){const i=t*Math.PI*2/8+this.time*1.5;e.save(),e.translate(this.x,this.y),e.rotate(i);const s=e.createLinearGradient(0,0,80,55);s.addColorStop(0,"rgba(180,255,220,0.9)"),s.addColorStop(1,"rgba(120,220,180,0.1)"),e.fillStyle=s,e.beginPath(),e.moveTo(12,25),e.bezierCurveTo(32,8,58,12,65,25),e.bezierCurveTo(58,38,32,42,12,25),e.closePath(),e.fill(),e.restore()}}createPetals(){for(let e=0;e<12;e++){const a=e*Math.PI*2/12;this.petals.push(new H({x:this.x,y:this.y,angle:a,scale:.8+Math.random()*.5,life:1+Math.random()*.5,velocity:40+Math.random()*40,rotation:-2+Math.random()*4,acceleration:-.5+Math.random()}))}}createSwordBeams(){if(this.targetPositions.length>0)this.targetPositions.forEach(e=>{const a=Math.atan2(e.y-this.y,e.x-this.x),t=-.1+Math.random()*.2;this.swords.push(new P({x:this.x,y:this.y,angle:a+t,targetPosition:e}))});else for(let e=0;e<12;e++){const a=e*Math.PI*2/12+(-.1+Math.random()*.2);this.swords.push(new P({x:this.x,y:this.y,angle:a}))}}}class q{x;y;time=0;constructor(e,a){this.x=e,this.y=a}update(e){this.time+=e}draw(e,a){const i=Math.min(window.innerWidth,window.innerHeight)*.14,s=this.time*.3;e.save(),e.translate(this.x,this.y-window.innerHeight*.02),e.globalAlpha=a*.5,this.drawSimplifiedRing(e,i,s),this.drawSimplifiedBalance(e,i,this.time),e.restore()}drawSimplifiedRing(e,a,t){e.save(),e.rotate(-t*.5);const i=e.createRadialGradient(0,0,a*.65,0,0,a);i.addColorStop(0,"rgba(240,240,240,0.8)"),i.addColorStop(.3,"rgba(200,200,200,0.9)"),i.addColorStop(.7,"rgba(160,160,160,0.8)"),i.addColorStop(1,"rgba(100,100,100,0.6)"),e.fillStyle=i,e.beginPath(),e.arc(0,0,a,0,Math.PI*2),e.arc(0,0,a*.65,0,Math.PI*2,!0),e.closePath(),e.fill();const s=e.createRadialGradient(0,0,a*.55,0,0,a*.75);s.addColorStop(0,"rgba(220,220,220,0.7)"),s.addColorStop(1,"rgba(140,140,140,0.5)"),e.fillStyle=s,e.beginPath(),e.arc(0,0,a*.75,0,Math.PI*2),e.arc(0,0,a*.55,0,Math.PI*2,!0),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=4;for(let n=0;n<24;n++){const o=n*Math.PI*2/24;e.beginPath(),e.moveTo(Math.cos(o)*a*.65,Math.sin(o)*a*.65),e.lineTo(Math.cos(o)*a*.98,Math.sin(o)*a*.98),e.stroke(),e.lineWidth=6,e.strokeStyle="rgba(255,255,255,0.9)",e.beginPath(),e.moveTo(Math.cos(o)*a*.92,Math.sin(o)*a*.92),e.lineTo(Math.cos(o)*a*.98,Math.sin(o)*a*.98),e.stroke(),e.lineWidth=4,e.strokeStyle="rgba(255,255,255,0.8)"}e.strokeStyle="rgba(220,220,220,0.7)",e.lineWidth=2;for(let n=0;n<48;n++){const o=n*Math.PI*2/48;e.beginPath(),e.moveTo(Math.cos(o)*a*.55,Math.sin(o)*a*.55),e.lineTo(Math.cos(o)*a*.72,Math.sin(o)*a*.72),e.stroke(),n%8===0&&(e.lineWidth=3,e.strokeStyle="rgba(240,240,240,0.8)",e.beginPath(),e.moveTo(Math.cos(o)*a*.52,Math.sin(o)*a*.52),e.lineTo(Math.cos(o)*a*.75,Math.sin(o)*a*.75),e.stroke(),e.lineWidth=2,e.strokeStyle="rgba(220,220,220,0.7)")}for(let n=0;n<3;n++){const o=a*(.45-n*.08),r=36-n*8;e.strokeStyle=`rgba(200,200,200,${.6-n*.1})`,e.lineWidth=2-n*.3;for(let l=0;l<r;l++){const c=l*Math.PI*2/r;e.beginPath(),e.moveTo(Math.cos(c)*o*.85,Math.sin(c)*o*.85),e.lineTo(Math.cos(c)*o*1.1,Math.sin(c)*o*1.1),e.stroke()}}e.restore()}drawSimplifiedBalance(e,a,t){e.save(),e.rotate(Math.sin(t*4)*.2);const i=e.createRadialGradient(0,0,a*.12,0,0,a*.32);i.addColorStop(0,"rgba(255,255,255,0.9)"),i.addColorStop(.3,"rgba(240,240,240,0.8)"),i.addColorStop(.7,"rgba(180,180,180,0.7)"),i.addColorStop(1,"rgba(120,120,120,0.5)"),e.fillStyle=i,e.beginPath(),e.arc(0,0,a*.32,0,Math.PI*2),e.arc(0,0,a*.12,0,Math.PI*2,!0),e.closePath(),e.fill();const s=e.createRadialGradient(0,0,a*.08,0,0,a*.18);s.addColorStop(0,"rgba(255,255,255,1.0)"),s.addColorStop(.5,"rgba(200,200,200,0.9)"),s.addColorStop(1,"rgba(150,150,150,0.7)"),e.fillStyle=s,e.beginPath(),e.arc(0,0,a*.18,0,Math.PI*2),e.arc(0,0,a*.08,0,Math.PI*2,!0),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=2;for(let o=0;o<12;o++){const r=o*Math.PI*2/12;e.beginPath(),e.moveTo(Math.cos(r)*a*.08,Math.sin(r)*a*.08),e.lineTo(Math.cos(r)*a*.3,Math.sin(r)*a*.3),e.stroke(),o%3===0&&(e.lineWidth=3,e.strokeStyle="rgba(255,255,255,0.95)",e.beginPath(),e.moveTo(Math.cos(r)*a*.08,Math.sin(r)*a*.08),e.lineTo(Math.cos(r)*a*.32,Math.sin(r)*a*.32),e.stroke(),e.lineWidth=2,e.strokeStyle="rgba(255,255,255,0.8)")}for(let o=0;o<4;o++){const r=o*Math.PI*2/4,l=Math.cos(r)*a*.28,c=Math.sin(r)*a*.28;e.fillStyle="rgba(255,255,255,0.9)",e.beginPath(),e.arc(l,c,a*.03,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(200,200,200,0.8)",e.lineWidth=1,e.stroke()}const n=e.createRadialGradient(0,0,0,0,0,a*.05);n.addColorStop(0,"rgba(255,255,255,1.0)"),n.addColorStop(.7,"rgba(220,220,220,0.9)"),n.addColorStop(1,"rgba(180,180,180,0.7)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,a*.05,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,0.8)",e.beginPath(),e.arc(-a*.01,-a*.01,a*.02,0,Math.PI*2),e.fill(),e.restore()}}class O{x;y;dead=!1;time=0;duration=2;tourbillon;constructor(e,a,t=[]){this.x=e,this.y=a,this.tourbillon=new q(e,a)}update(e){if(this.time+=e,this.time>this.duration){this.dead=!0;return}this.tourbillon.update(e)}draw(e){if(this.dead)return;let a=1;this.time<.3?a=this.time/.3:this.time>this.duration-.4&&(a=(this.duration-this.time)/.4),this.tourbillon.draw(e,a)}}const x={bolt:"rgba(180,140,255,0.95)",haze:"rgba(160,120,255,0.25)",spark:"rgba(220,200,255,0.9)",ring:"rgba(210,190,255,0.65)",blade:"rgba(190,160,255,0.9)"};class G{x;y;vx;vy;time=0;life;dead=!1;constructor(e){this.x=e.x,this.y=e.y,this.vx=e.vx,this.vy=e.vy,this.life=e.life}update(e){if(this.time+=e,this.time>this.life){this.dead=!0;return}this.vy+=900*e,this.x+=this.vx*e,this.y+=this.vy*e}draw(e,a){if(this.dead)return;const t=1-this.time/this.life;e.save(),e.globalCompositeOperation="lighter",e.globalAlpha=a*t,e.strokeStyle=x.spark,e.lineWidth=2,e.beginPath(),e.moveTo(this.x-2,this.y),e.lineTo(this.x+2,this.y),e.moveTo(this.x,this.y-2),e.lineTo(this.x,this.y+2),e.stroke(),e.restore()}}class F{x;y;time=0;duration=1;dead=!1;maxRadius=180;constructor(e,a){this.x=e,this.y=a}update(e){this.time+=e*2.2,this.time>=this.duration*1.1&&(this.dead=!0)}draw(e,a){if(this.dead||this.time<=0)return;const t=Math.min(1,this.time/this.duration),i=20+t*this.maxRadius;e.save(),e.globalCompositeOperation="lighter",e.globalAlpha=a*(1-t),e.strokeStyle=x.ring,e.lineWidth=3+6*(1-t),e.beginPath(),e.arc(this.x,this.y,i,0,Math.PI*2),e.stroke(),e.restore()}}class T{static generateBolt(e,a,t=5,i=48,s=.35){const n=[{x:e.x,y:e.y},{x:a.x,y:a.y}];for(let r=0;r<t;r++){for(let l=n.length-1;l>0;l--){const c=n[l-1],d=n[l];if(!c||!d)continue;const m=(c.x+d.x)/2,u=(c.y+d.y)/2,g=d.x-c.x,b=d.y-c.y,v=Math.hypot(g,b)||1,M=-b/v,C=g/v,I=(Math.random()*2-1)*i;n.splice(l,0,{x:m+M*I,y:u+C*I})}i*=.55}const o=[];for(let r=2;r<n.length-2;r++)if(Math.random()<s){const l=n[r],c=n[r+1];if(!l||!c)continue;const d=c.x-l.x,m=c.y-l.y,u=Math.hypot(d,m)||1,g={x:l.x+d/u*(40+Math.random()*50),y:l.y+m/u*(40+Math.random()*50)};o.push(this.generateBolt(l,g,3,i*.6,.15))}return{points:n,branches:o}}static drawBolt(e,a,t=3){e.save(),e.globalCompositeOperation="lighter",e.lineJoin="round",e.lineCap="round",e.strokeStyle=x.haze,e.lineWidth=t*4,this.pathBolt(e,a),e.stroke(),e.strokeStyle=x.bolt,e.lineWidth=t,this.pathBolt(e,a),e.stroke(),e.strokeStyle="rgba(255,255,255,0.9)",e.lineWidth=Math.max(1,t*.5),this.pathBolt(e,a),e.stroke();for(const i of a.branches)this.drawBolt(e,i,t*.7);e.restore()}static pathBolt(e,a){const t=a.points;if(t.length<2)return;e.beginPath();const i=t[0];i&&e.moveTo(i.x,i.y);for(let s=1;s<t.length;s++){const n=t[s];n&&e.lineTo(n.x,n.y)}}}class _{x;y;targetY;currentY;width=14;arrived=!1;alpha=1;constructor(e,a){this.x=e,this.targetY=a,this.y=a,this.currentY=-160}update(e){this.currentY+=(this.targetY-this.currentY)*Math.min(1,e*16),Math.abs(this.currentY-this.targetY)<6&&(this.arrived=!0)}draw(e,a){const t=a*this.alpha,i=Math.min(this.currentY,this.targetY-window.innerHeight*.35),s=this.targetY+10;e.save(),e.globalCompositeOperation="lighter",e.globalAlpha=t*.6;const n=e.createLinearGradient(this.x,i,this.x,s);if(n.addColorStop(0,"rgba(170,120,255,0)"),n.addColorStop(.1,"rgba(170,120,255,0.25)"),n.addColorStop(.9,"rgba(170,120,255,0.25)"),n.addColorStop(1,"rgba(170,120,255,0)"),e.fillStyle=n,e.fillRect(this.x-28,i,56,s-i),e.globalAlpha=t,e.fillStyle=x.blade,e.fillRect(this.x-this.width/2,i,this.width,s-i),e.globalAlpha=t,e.fillStyle="rgba(255,255,255,0.95)",e.fillRect(this.x-1,i+6,2,s-i-12),this.arrived){e.globalAlpha=t;const o=e.createRadialGradient(this.x,s-6,0,this.x,s-6,22);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.beginPath(),e.arc(this.x,s-6,22,0,Math.PI*2),e.fill()}e.restore()}}class W{x;y;dead=!1;time=0;duration=2;targetPositions;thunderBlades=[];lightningBolts=[];sparks=[];shockwaves=[];screenShake=0;thunderStarted=!1;constructor(e,a,t=[]){this.x=e,this.y=a,this.targetPositions=t,this.initializeBlades()}initializeBlades(){this.targetPositions.length>0?this.targetPositions.forEach(e=>{this.thunderBlades.push(new _(e.x,e.y))}):this.thunderBlades.push(new _(this.x,this.y))}update(e){if(this.time+=e,this.time>this.duration){this.dead=!0;return}let a=!1;this.thunderBlades.forEach(t=>{t.update(e),t.arrived&&(a=!0)}),a&&!this.thunderStarted&&(this.startThunderEffect(),this.thunderStarted=!0),this.thunderStarted&&this.generateLightning(),this.screenShake>0&&(this.screenShake=Math.max(0,this.screenShake-e*24)),this.sparks.forEach(t=>t.update(e)),this.sparks=this.sparks.filter(t=>!t.dead),this.shockwaves.forEach(t=>t.update(e)),this.shockwaves=this.shockwaves.filter(t=>!t.dead),this.lightningBolts.length>12&&this.lightningBolts.splice(0,this.lightningBolts.length-12)}startThunderEffect(){this.screenShake=6,this.thunderBlades.forEach(e=>{this.spawnSparks(e.x,e.y,20),this.shockwaves.push(new F(e.x,e.y))})}generateLightning(){const e=2+(Math.random()<.5?1:2);for(let a=0;a<e;a++){const t=this.thunderBlades[Math.floor(Math.random()*this.thunderBlades.length)];if(!t)continue;const i=t.x+(Math.random()-.5)*window.innerWidth*.5,s=-80+Math.random()*window.innerHeight*.1,n=T.generateBolt({x:i,y:s},{x:t.x,y:t.y},5,32+Math.random()*32,.35);this.lightningBolts.push(n)}}spawnSparks(e,a,t){for(let i=0;i<t;i++)this.sparks.push(new G({x:e,y:a,vx:-220+Math.random()*440,vy:-180+Math.random()*160,life:.15+Math.random()*.2}))}draw(e){if(this.dead)return;let a=1;const t=.12,i=.25;if(this.time<t?a=this.time/t:this.time>this.duration-i&&(a=(this.duration-this.time)/i),e.save(),this.screenShake>0){const s=(Math.random()-.5)*this.screenShake,n=(Math.random()-.5)*this.screenShake;e.translate(s,n)}this.thunderBlades.forEach(s=>s.draw(e,a)),this.lightningBolts.forEach(s=>{T.drawBolt(e,s,2.6)}),this.shockwaves.forEach(s=>s.draw(e,a)),this.sparks.forEach(s=>s.draw(e,a)),e.restore()}}class Y{x;y;targetPositions;meteors=[];sparks=[];rings=[];targetIndicators=[];duration=1.8;currentTime=0;isComplete=!1;screenShake=0;meteorHead;constructor(e,a,t=[]){this.x=e,this.y=a,this.targetPositions=t.length>0?t:[{x:e,y:a}],this.meteorHead=this.createMeteorSprite(),this.initializeTargetIndicators(),this.initializeMeteors()}initializeTargetIndicators(){for(const e of this.targetPositions)this.targetIndicators.push({x:e.x,y:e.y,life:.6,maxLife:.6})}createMeteorSprite(){const e=document.createElement("canvas");e.width=96,e.height=96;const a=e.getContext("2d"),t=a.createRadialGradient(48,48,0,48,48,42);return t.addColorStop(0,"rgba(255,240,210,1)"),t.addColorStop(.35,"rgba(255,180,140,1)"),t.addColorStop(1,"rgba(255,80,40,0.55)"),a.fillStyle=t,a.beginPath(),a.arc(48,48,42,0,Math.PI*2),a.fill(),e}initializeMeteors(){for(let e=0;e<this.targetPositions.length;e++){const a=this.targetPositions[e];if(!a)continue;const t=Math.random()<.3?2:Math.random()<.7?3:4;for(let i=0;i<t;i++){const s=Math.random()*Math.PI*2,n=400+Math.random()*300,o=a.x+Math.cos(s)*n,r=a.y+Math.sin(s)*n-200,l=a.x-o,c=a.y-r,d=Math.sqrt(l*l+c*c)||1,m=250+Math.random()*150,u=800+Math.random()*200,g=m*.3,b=c/d*u-g;this.meteors.push({x:o,y:r,vx:l/d*u,vy:b,rotation:Math.atan2(c,l),gravity:m,life:1.8,currentLife:0,trail:[],scale:1.2+Math.random()*.6,targetX:a.x,targetY:a.y,assignedTarget:a})}}}spawnExplosion(e,a){const t=40+Math.random()*20;for(let i=0;i<t;i++)this.sparks.push({x:e,y:a,vx:(Math.random()-.5)*2200,vy:(Math.random()-.5)*1800-200,life:.18+Math.random()*.17,currentLife:0});this.rings.push({x:e,y:a,radius:0,maxRadius:280,life:.45,currentLife:0}),this.screenShake=Math.min(15,this.screenShake+6.5)}update(e){if(this.currentTime+=e,this.currentTime>=this.duration){this.isComplete=!0;return}this.screenShake=Math.max(0,this.screenShake-e*18),this.updateMeteors(e),this.updateSparks(e),this.updateRings(e),this.updateTargetIndicators(e)}updateMeteors(e){for(let a=this.meteors.length-1;a>=0;a--){const t=this.meteors[a];if(!t)continue;if(t.currentLife+=e,t.vy+=t.gravity*e,Math.sqrt((t.targetX-t.x)**2+(t.targetY-t.y)**2)>20&&t.currentLife<t.life*.8){const o=t.targetX-t.x,r=t.targetY-t.y,l=Math.sqrt(o*o+r*r)||1,c=o/l*600,d=r/l*600;t.vx=t.vx*(1-.1)+c*.1,t.vy=t.vy*(1-.1)+d*.1,t.rotation=Math.atan2(t.vy,t.vx)}t.x+=t.vx*e,t.y+=t.vy*e,t.trail.push({x:t.x,y:t.y}),t.trail.length>10&&t.trail.shift(),(Math.sqrt((t.x-t.assignedTarget.x)**2+(t.y-t.assignedTarget.y)**2)<20||t.currentLife>t.life)&&(this.spawnExplosion(t.x,t.y),this.meteors.splice(a,1))}}updateSparks(e){for(let a=this.sparks.length-1;a>=0;a--){const t=this.sparks[a];if(t){if(t.currentLife+=e,t.currentLife>t.life){this.sparks.splice(a,1);continue}t.vy+=1400*e,t.x+=t.vx*e,t.y+=t.vy*e}}}updateRings(e){for(let a=this.rings.length-1;a>=0;a--){const t=this.rings[a];if(t){if(t.currentLife+=e*2.2,t.currentLife>=t.life){this.rings.splice(a,1);continue}t.radius=24+t.currentLife/t.life*t.maxRadius}}}updateTargetIndicators(e){for(let a=this.targetIndicators.length-1;a>=0;a--){const t=this.targetIndicators[a];t&&(t.life-=e,t.life<=0&&this.targetIndicators.splice(a,1))}}render(e){if(this.isComplete)return;const a=this.currentTime/this.duration,t=Math.min(1,a/.12),i=Math.min(1,(this.duration-this.currentTime)/.25),s=Math.min(t,i);if(e.save(),this.screenShake>0){const n=(Math.random()-.5)*this.screenShake*2,o=(Math.random()-.5)*this.screenShake*2;e.translate(n,o)}this.renderTargetIndicators(e,s),this.renderMeteors(e,s),this.renderRings(e,s),this.renderSparks(e,s),e.restore()}renderMeteors(e,a){e.save(),e.globalCompositeOperation="lighter";for(const t of this.meteors)this.renderMeteorTrail(e,t,a),this.renderMeteorHead(e,t,a);e.restore()}renderMeteorTrail(e,a,t){if(!(a.trail.length<2))for(let i=0;i<a.trail.length-1;i++){const s=a.trail[i],n=a.trail[i+1];if(!s||!n)continue;const o=i/(a.trail.length-1),r=35*(1-o);e.globalAlpha=t*.35*(1-o),e.strokeStyle="rgba(255,90,50,0.35)",e.lineWidth=r,e.lineCap="round",e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(n.x,n.y),e.stroke()}}renderMeteorHead(e,a,t){e.save(),e.globalAlpha=t,e.translate(a.x,a.y),e.rotate(a.rotation),e.scale(a.scale,a.scale),e.drawImage(this.meteorHead,-48,-48,96,96),e.restore()}renderSparks(e,a){e.save(),e.globalCompositeOperation="lighter";for(const t of this.sparks){const i=1-t.currentLife/t.life;e.globalAlpha=a*i,e.strokeStyle="rgba(255,210,160,0.95)",e.lineWidth=2,e.beginPath(),e.moveTo(t.x-2,t.y),e.lineTo(t.x+2,t.y),e.moveTo(t.x,t.y-2),e.lineTo(t.x,t.y+2),e.stroke()}e.restore()}renderRings(e,a){e.save(),e.globalCompositeOperation="lighter";for(const t of this.rings){const i=1-t.currentLife/t.life;e.globalAlpha=a*i,e.strokeStyle="rgba(255,140,90,0.7)",e.lineWidth=3+7*i,e.beginPath(),e.arc(t.x,t.y,t.radius,0,Math.PI*2),e.stroke()}e.restore()}getScreenShake(){return this.screenShake}renderTargetIndicators(e,a){e.save(),e.globalCompositeOperation="lighter";for(const t of this.targetIndicators){const i=t.life/t.maxLife,s=.5+.5*Math.sin(this.currentTime*15);e.globalAlpha=a*i*s,e.strokeStyle="rgba(255,100,50,0.8)",e.lineWidth=2;const n=15+(1-i)*10;e.beginPath(),e.moveTo(t.x-n,t.y),e.lineTo(t.x+n,t.y),e.moveTo(t.x,t.y-n),e.lineTo(t.x,t.y+n),e.stroke(),e.beginPath(),e.arc(t.x,t.y,n*.7,0,Math.PI*2),e.stroke()}e.restore()}isFinished(){return this.isComplete}}class N{x;y;targetPositions;iceSpears=[];iceShards=[];shockRings=[];duration=1.5;currentTime=0;isComplete=!1;screenShake=0;frostCoreTime=0;iceSpearSprite;dead=!1;constructor(e,a,t=[]){this.x=e,this.y=a,this.targetPositions=t.length>0?t:[{x:e,y:a}],this.iceSpearSprite=this.createIceSpearSprite(),this.initializeIceSpears()}createIceSpearSprite(){const e=document.createElement("canvas");e.width=26,e.height=140;const a=e.getContext("2d"),t=a.createLinearGradient(0,0,0,140);return t.addColorStop(0,"rgba(190,230,255,0.00)"),t.addColorStop(.1,"rgba(190,230,255,0.20)"),t.addColorStop(.9,"rgba(190,230,255,0.20)"),t.addColorStop(1,"rgba(190,230,255,0.00)"),a.fillStyle=t,a.fillRect(0,0,26,140),a.fillStyle="rgba(190,230,255,0.95)",a.beginPath(),a.moveTo(13,0),a.lineTo(20,100),a.lineTo(13,140),a.lineTo(6,100),a.closePath(),a.fill(),a.fillStyle="rgba(255,255,255,0.95)",a.fillRect(12,12,2,112),e}initializeIceSpears(){for(const e of this.targetPositions){const a=Math.random()<.4?2:3;for(let t=0;t<a;t++){const i=Math.random()*Math.PI*2,s=350+Math.random()*200,n=e.x+Math.cos(i)*s,o=e.y+Math.sin(i)*s-150,r=e.x-n,l=e.y-o,c=Math.sqrt(r*r+l*l)||1,d=900+Math.random()*400;this.iceSpears.push({x:n,y:o,vx:r/c*d,vy:l/c*d,rotation:Math.atan2(l,r)+Math.PI/2,life:.45+Math.random()*.45,currentLife:0,trail:[],scale:.8+Math.random()*.4,targetX:e.x,targetY:e.y})}}}spawnIceShards(e,a,t=22){for(let i=0;i<t;i++){const s=Math.random()*Math.PI*2,n=300+Math.random()*600;this.iceShards.push({x:e,y:a,vx:Math.cos(s)*n,vy:Math.sin(s)*n,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*16,life:.18+Math.random()*.2,currentLife:0})}}addShockRing(e,a){this.shockRings.push({x:e,y:a,radius:0,maxRadius:200,life:.45,currentLife:0})}update(e){if(this.currentTime+=e,this.currentTime>=this.duration){this.isComplete=!0,this.dead=!0;return}if(this.screenShake=Math.max(0,this.screenShake-e*16),this.frostCoreTime+=e*3,this.currentTime/this.duration<.6&&Math.random()<18*e&&Math.random()<.5){const t=Math.random()<.5?2:3,i=this.targetPositions[Math.floor(Math.random()*this.targetPositions.length)];if(i)for(let s=0;s<t;s++){const n=Math.random()*Math.PI*2,o=300+Math.random()*250,r=i.x+Math.cos(n)*o,l=i.y+Math.sin(n)*o-100,c=i.x-r,d=i.y-l,m=Math.sqrt(c*c+d*d)||1,u=900+Math.random()*400;this.iceSpears.push({x:r,y:l,vx:c/m*u,vy:d/m*u,rotation:Math.atan2(d,c)+Math.PI/2,life:.45+Math.random()*.45,currentLife:0,trail:[],scale:.8+Math.random()*.4,targetX:i.x,targetY:i.y})}}this.updateIceSpears(e),this.updateIceShards(e),this.updateShockRings(e)}updateIceSpears(e){for(let a=this.iceSpears.length-1;a>=0;a--){const t=this.iceSpears[a];if(!t)continue;t.currentLife+=e,t.x+=t.vx*e,t.y+=t.vy*e,t.trail.push({x:t.x,y:t.y}),t.trail.length>12&&t.trail.shift();const i=Math.sqrt((t.x-t.targetX)**2+(t.y-t.targetY)**2);(t.currentLife>t.life||i<25)&&(this.spawnIceShards(t.x,t.y,28),this.addShockRing(t.x,t.y),this.screenShake=Math.min(8,this.screenShake+2.5),this.iceSpears.splice(a,1))}}updateIceShards(e){for(let a=this.iceShards.length-1;a>=0;a--){const t=this.iceShards[a];if(t){if(t.currentLife+=e,t.currentLife>t.life){this.iceShards.splice(a,1);continue}t.vy+=900*e,t.x+=t.vx*e,t.y+=t.vy*e,t.rotation+=t.rotationSpeed*e}}}updateShockRings(e){for(let a=this.shockRings.length-1;a>=0;a--){const t=this.shockRings[a];if(t){if(t.currentLife+=e*2.2,t.currentLife>=t.life){this.shockRings.splice(a,1);continue}t.radius=18+t.currentLife/t.life*t.maxRadius}}}draw(e){if(this.isComplete)return;const a=this.currentTime/this.duration,t=Math.min(1,a/.12),i=Math.min(1,(this.duration-this.currentTime)/.25),s=Math.min(t,i);if(e.save(),this.screenShake>0){const n=(Math.random()-.5)*this.screenShake*2,o=(Math.random()-.5)*this.screenShake*2;e.translate(n,o)}this.drawFrostCore(e,s),this.drawIceSpears(e,s),this.drawShockRings(e,s),this.drawIceShards(e,s),e.restore()}drawFrostCore(e,a){e.save(),e.globalCompositeOperation="lighter";const t=140+40*Math.sin(this.frostCoreTime*6),i=e.createRadialGradient(this.x,this.y,0,this.x,this.y,t);i.addColorStop(0,`rgba(220,240,255,${.5*a})`),i.addColorStop(1,"rgba(220,240,255,0)"),e.fillStyle=i,e.beginPath(),e.arc(this.x,this.y,t,0,Math.PI*2),e.fill(),e.restore()}drawIceSpears(e,a){for(const t of this.iceSpears){e.save(),e.globalCompositeOperation="lighter";for(let s=0;s<t.trail.length-1;s++){const n=t.trail[s],o=t.trail[s+1];if(!n||!o)continue;const r=s/(t.trail.length-1),l=18*(1-r);e.globalAlpha=a*.35*(1-r),e.strokeStyle="rgba(150,210,255,0.40)",e.lineCap="round",e.lineWidth=l,e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(o.x,o.y),e.stroke()}e.globalAlpha=a,e.translate(t.x,t.y),e.rotate(t.rotation);const i=t.scale*(.8+Math.min(.7,t.currentLife*1.1));e.scale(i,i),e.drawImage(this.iceSpearSprite,-13,-20),e.restore()}}drawIceShards(e,a){e.save(),e.globalCompositeOperation="lighter";for(const t of this.iceShards){const i=1-t.currentLife/t.life;e.globalAlpha=a*i,e.save(),e.translate(t.x,t.y),e.rotate(t.rotation),e.strokeStyle="rgba(210,240,255,0.95)",e.lineWidth=2,e.beginPath(),e.moveTo(-3,0),e.lineTo(3,0),e.moveTo(0,-3),e.lineTo(0,3),e.stroke(),e.restore()}e.restore()}drawShockRings(e,a){e.save(),e.globalCompositeOperation="lighter";for(const t of this.shockRings){const i=1-t.currentLife/t.life;e.globalAlpha=a*i,e.strokeStyle="rgba(180,220,255,0.70)",e.lineWidth=2+6*i,e.beginPath(),e.arc(t.x,t.y,t.radius,0,Math.PI*2),e.stroke()}e.restore()}}class j{pos;vel;target;tail;alive;life;maxLife;tailLength;config;constructor(e,a,t,i){this.pos={x:e,y:a},this.vel={x:0,y:-6},this.target=t,this.tail=[],this.tailLength=20,this.alive=!0,this.life=2,this.maxLife=2,this.config=i}update(){if(this.alive){if(this.life-=.016,this.life<=0){this.alive=!1;return}if(this.target){const e=this.target.x-this.pos.x,a=this.target.y-this.pos.y,t=Math.hypot(e,a);if(t>5){this.vel.x+=e/t*.4,this.vel.y+=a/t*.4;const i=Math.hypot(this.vel.x,this.vel.y);i>this.config.speed&&(this.vel.x*=this.config.speed/i,this.vel.y*=this.config.speed/i)}else this.life=Math.min(this.life,.3)}this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.tail.push({x:this.pos.x,y:this.pos.y}),this.tail.length>this.tailLength&&this.tail.shift()}}draw(e){if(!this.alive||this.tail.length<2)return;const a=this.life/this.maxLife;e.save(),e.globalCompositeOperation="lighter";for(let i=1;i<this.tail.length;i++){const s=this.tail[i-1],n=this.tail[i];if(!s||!n)continue;const o=i/this.tail.length*a*.6;e.strokeStyle=this.config.trailColor.replace("1)",`${o})`),e.lineWidth=2+i/3,e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(n.x,n.y),e.stroke()}e.restore();const t=Math.atan2(this.vel.y,this.vel.x);e.save(),e.translate(this.pos.x,this.pos.y),e.rotate(t),e.shadowColor=this.config.color,e.shadowBlur=this.config.glowIntensity*a,e.globalAlpha=a,e.fillStyle=this.config.color,e.fillRect(-this.config.size,-2,this.config.size,4),e.fillStyle=this.config.color,e.beginPath(),e.moveTo(0,0),e.lineTo(this.config.size*.3,-3),e.lineTo(this.config.size*.3,3),e.closePath(),e.fill(),e.restore()}}class X{canvas;ctx;particles=[];swords=[];greenLotusEffects=[];ubwEffects=[];divineThunderEffects=[];nineFinaleEffects=[];iceSpearEffects=[];animationId=null;lastTime=0;enabled=!0;constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="particle-canvas",this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.left="0",this.canvas.style.pointerEvents="none",this.canvas.style.zIndex="100";const e=this.canvas.getContext("2d");if(!e)throw new Error("Could not get canvas context");this.ctx=e}initialize(e){const a=e.getBoundingClientRect();this.canvas.width=a.width,this.canvas.height=a.height,e.style.position="relative",e.appendChild(this.canvas),this.enabled&&this.startAnimation()}setEnabled(e){this.enabled=e,e?this.animationId||this.startAnimation():(this.stopAnimation(),this.clearParticles())}stopAnimation(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}clearParticles(){this.particles=[],this.swords=[],this.greenLotusEffects=[],this.ubwEffects=[],this.divineThunderEffects=[],this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}startAnimation(){const e=a=>{const t=a-this.lastTime;this.lastTime=a,this.update(t/1e3),this.render(),this.animationId=requestAnimationFrame(e)};this.animationId=requestAnimationFrame(e)}update(e){for(let a=this.particles.length-1;a>=0;a--){const t=this.particles[a];t&&(t.x+=t.vx*e,t.y+=t.vy*e,t.life-=e,t.alpha=Math.max(0,t.life/t.maxLife),t.type==="spark"&&(t.vy+=200*e),t.life<=0&&this.particles.splice(a,1))}for(let a=this.swords.length-1;a>=0;a--){const t=this.swords[a];t&&(t.update(),t.alive||this.swords.splice(a,1))}for(let a=this.greenLotusEffects.length-1;a>=0;a--){const t=this.greenLotusEffects[a];t&&(t.update(e),t.dead&&this.greenLotusEffects.splice(a,1))}for(let a=this.ubwEffects.length-1;a>=0;a--){const t=this.ubwEffects[a];t&&(t.update(e),t.dead&&this.ubwEffects.splice(a,1))}for(let a=this.divineThunderEffects.length-1;a>=0;a--){const t=this.divineThunderEffects[a];t&&(t.update(e),t.dead&&this.divineThunderEffects.splice(a,1))}for(let a=this.nineFinaleEffects.length-1;a>=0;a--){const t=this.nineFinaleEffects[a];t&&(t.update(e),t.isFinished()&&this.nineFinaleEffects.splice(a,1))}for(let a=this.iceSpearEffects.length-1;a>=0;a--){const t=this.iceSpearEffects[a];t&&(t.update(e),t.dead&&this.iceSpearEffects.splice(a,1))}}render(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const e of this.particles)this.ctx.save(),this.ctx.globalAlpha=e.alpha,e.type==="circle"?this.drawCircle(e):e.type==="star"?this.drawStar(e):e.type==="spark"?this.drawSpark(e):e.type==="text"&&this.drawText(e),this.ctx.restore();for(const e of this.swords)e.draw(this.ctx);for(const e of this.greenLotusEffects)e.draw(this.ctx);for(const e of this.ubwEffects)e.draw(this.ctx);for(const e of this.divineThunderEffects)e.draw(this.ctx);for(const e of this.nineFinaleEffects)e.render(this.ctx);for(const e of this.iceSpearEffects)e.draw(this.ctx)}drawCircle(e){this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.shadowBlur=10,this.ctx.shadowColor=e.color,this.ctx.fill()}drawStar(e){const t=e.size,i=e.size*.5;this.ctx.beginPath(),this.ctx.translate(e.x,e.y);for(let s=0;s<5*2;s++){const n=s%2===0?t:i,o=s*Math.PI/5,r=Math.cos(o)*n,l=Math.sin(o)*n;s===0?this.ctx.moveTo(r,l):this.ctx.lineTo(r,l)}this.ctx.closePath(),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.translate(-e.x,-e.y)}drawSpark(e){this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(e.x-e.vx*.1,e.y-e.vy*.1),this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.size,this.ctx.lineCap="round",this.ctx.stroke()}drawText(e){!e.text||!e.fontSize||(this.ctx.font=`bold ${e.fontSize}px Arial, sans-serif`,this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillStyle=e.color,this.ctx.shadowBlur=15,this.ctx.shadowColor=e.color,this.ctx.strokeStyle="rgba(0, 0, 0, 0.8)",this.ctx.lineWidth=3,this.ctx.strokeText(e.text,e.x,e.y),this.ctx.fillText(e.text,e.x,e.y))}calculateGrade(e,a,t){const i=a===0||a===7||a===56||a===63,s=Math.floor(a/8),n=a%8,o=s===0||s===7||n===0||n===7;let r=e*10;return i?r+=60:o&&(r+=20),t?.massive&&(r+=40),t?.chain&&(r+=30),t?.comeback&&(r+=25),t?.domination&&(r+=20),t?.firstMove&&(r-=10),r>=100||e>=15?"SSS":r>=70||e>=10?"SS":r>=50||e>=7?"S":r>=30||e>=5?"A":r>=15||e>=3?"B":"C"}triggerMoveEffect(e,a,t,i,s,n){if(this.enabled){if(this.createFloatingGradeText(e,a,t),t==="SSS"){setTimeout(()=>this.createSSSEffect(e,a,i,s,n),0);return}this.createPresetEffect(e,a,t,i,s,n),t==="S"&&i>=7&&setTimeout(()=>this.createSEffect(e,a,i,s,n),100)}}createPresetEffect(e,a,t,i,s,n){const o=D(t),r=k[o];if(!r)return;if(t==="B"&&o==="green_lotus"){this.createGreenLotusEffect(e,a,n||[]);return}if(t==="C"&&o==="unlimited_blade_works"){this.createUnlimitedBladeWorksEffect(e,a,n||[]);return}if(t==="S"&&o==="divine_thunder"){this.createDivineThunderEffect(e,a,n||[]);return}if(t==="SS"&&o==="nine_finale"){this.createNineFinaleEffect(e,a,n||[]);return}if(t==="A"){this.createIceSpearEffect(e,a,n||[]);return}const l=this.calculateFlipDirections(e,a,n),c=Math.min(1+(i-1)*.1,2),d=Math.floor((r.spawning.count.min+Math.random()*(r.spawning.count.max-r.spawning.count.min))*c);for(let m=0;m<d;m++)setTimeout(()=>{this.createPresetParticle(e,a,r,m,d,l)},Math.random()*(r.spawning.delay.max-r.spawning.delay.min)+r.spawning.delay.min);s?.corner&&t!=="C"&&this.addCornerEnhancement(e,a,r,l),s?.massive&&i>=8&&this.addMassiveEnhancement(e,a,r,l)}calculateFlipDirections(e,a,t){return!t||t.length===0?Array.from({length:8},(i,s)=>({angle:s/8*Math.PI*2,distance:100})):t.map(i=>{const s=i.x-e,n=i.y-a,o=Math.sqrt(s*s+n*n);return{angle:Math.atan2(n,s),distance:Math.max(o,50)}})}createSwords(e,a,t,i,s,n=0){if(this.swords.length>=60)return;const r=Math.min(s,60-this.swords.length);for(let l=0;l<r;l++)setTimeout(()=>{let c=null;if(t.length>0)c=t[l%t.length]||t[0]||null;else{const v=l/r*Math.PI*2,M=200+Math.random()*300;c={x:e+Math.cos(v)*M,y:a+Math.sin(v)*M}}const d=30,m=Math.random()*Math.PI*2,u=e+Math.cos(m)*d,g=a+Math.sin(m)*d,b=new j(u,g,c,i);this.swords.push(b)},n+l*30)}createPresetParticle(e,a,t,i,s,n){const o=t.colors,r=o[Math.floor(Math.random()*o.length)]||o[0]||"#ffffff";let l,c;if(n&&n.length>0){const M=Math.floor(i/s*n.length),C=n[M]||n[0];if(C){const I=C.angle,A=t.spawning.spread.angle||Math.PI/6;l=I+(Math.random()-.5)*A}else l=Math.random()*Math.PI*2;c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min)}else switch(t.behavior.movement){case"explode":l=i/s*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"float":l=Math.random()*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"rise":l=Math.PI*1.5+(Math.random()-.5)*t.spawning.spread.angle,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"chain":l=Math.random()*Math.PI*2,c=t.physics.velocity.max;break;case"implode":l=Math.random()*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;default:l=Math.random()*Math.PI*2,c=100}const d=t.spawning.spread.radius,m=Math.random()*t.spawning.spread.angle-t.spawning.spread.angle/2,u=e+Math.cos(m)*Math.random()*d,g=a+Math.sin(m)*Math.random()*d,b=t.visual.size.min+Math.random()*(t.visual.size.max-t.visual.size.min),v=(t.animation.lifespan.min+Math.random()*(t.animation.lifespan.max-t.animation.lifespan.min))/1e3;this.particles.push({x:u,y:g,vx:Math.cos(l)*c,vy:Math.sin(l)*c,life:v,maxLife:v,size:b,color:r,alpha:t.visual.opacity.start,type:t.type==="snowflake"?"circle":t.type==="lightning"?"spark":"circle"})}addCornerEnhancement(e,a,t,i){for(let s=0;s<12;s++){let n;if(i&&i.length>0){const o=Math.floor(s/12*i.length),r=i[o]||i[0];r?n=r.angle+(Math.random()-.5)*(Math.PI/4):n=s/12*Math.PI*2}else n=s/12*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(n)*80,vy:Math.sin(n)*80,life:1,maxLife:1,size:3,color:"#ffd700",alpha:.8,type:"circle"})}}addMassiveEnhancement(e,a,t,i){for(let s=0;s<3;s++)setTimeout(()=>{for(let n=0;n<20;n++){let o;if(i&&i.length>0){const r=Math.floor(n/20*i.length),l=i[r]||i[0];l?o=l.angle+(Math.random()-.5)*(Math.PI/3):o=n/20*Math.PI*2}else o=n/20*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(o)*(150+s*50),vy:Math.sin(o)*(150+s*50),life:.8,maxLife:.8,size:2,color:"#ffffff",alpha:.6-s*.2,type:"circle"})}},s*100)}createSSSEffect(e,a,t,i,s){const n={color:"#ffed4a",trailColor:"rgba(255, 237, 74, 1)",size:90,speed:5,glowIntensity:100},o=s||[],r=Math.min(35,Math.max(25,Math.floor(t*2.5)));this.createSwords(e,a,o,n,Math.floor(r*.6),0),setTimeout(()=>{this.createSwords(e,a,o,n,Math.floor(r*.4),0)},100),i?.corner&&setTimeout(()=>{this.createSwords(e,a,o,n,3,0)},500),i?.comeback&&setTimeout(()=>{this.createSwords(e,a,o,n,2,0)},600)}createSSEffect(e,a,t,i,s){const n={color:"#ff1100",trailColor:"rgba(255, 17, 0, 1)",size:70,speed:6,glowIntensity:90},o=s||[],r=Math.min(20,Math.max(15,Math.floor(t*1.5)));this.createSwords(e,a,o,n,r,0),i?.massive&&setTimeout(()=>{this.createSwords(e,a,o,n,2,0)},400)}createSEffect(e,a,t,i,s){const n=["#dda0dd","#e6b8ea","#d8bfd8","#9932cc","#ba55d3","#9370db","#8a2be2","#9966cc","#c8a2c8"],o=this.calculateFlipDirections(e,a,s);for(let r=0;r<5;r++)setTimeout(()=>{for(let l=0;l<40;l++){let c;if(o.length>0&&Math.random()<.65){const u=Math.floor(l/40*o.length),g=o[u]||o[0];g?c=g.angle+(Math.random()-.5)*(Math.PI/2.5):c=l/40*Math.PI*2}else c=l/40*Math.PI*2;const d=300+r*80,m=Math.sin(l*.5)*20;this.particles.push({x:e,y:a,vx:Math.cos(c)*d+m,vy:Math.sin(c)*d+m,life:1.5,maxLife:1.5,size:Math.random()*5+3,color:n[r%n.length]??"#9932cc",alpha:1,type:"circle"})}},r*80);for(let r=0;r<80;r++){const l=r/8*Math.PI,c=r*4;setTimeout(()=>{this.particles.push({x:e+Math.cos(l)*c*.3,y:a+Math.sin(l)*c*.3,vx:Math.cos(l+Math.PI/2)*150,vy:Math.sin(l+Math.PI/2)*150,life:2,maxLife:2,size:Math.random()*4+2,color:n[r%n.length]??"#9932cc",alpha:1,type:"circle"})},r*15)}for(let r=0;r<100+t*15;r++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*40,y:a+Math.random()*20,vx:(Math.random()-.5)*400,vy:-Math.random()*500-200,life:2.5,maxLife:2.5,size:Math.random()*4+2,color:n[Math.floor(Math.random()*n.length)]??"#8a2be2",alpha:1,type:Math.random()>.3?"spark":"circle"})},Math.random()*300);for(let r=0;r<3;r++)setTimeout(()=>{for(let l=0;l<Math.PI*2;l+=.1)this.particles.push({x:e,y:a,vx:Math.cos(l)*(400+r*100),vy:Math.sin(l)*(400+r*100),life:.8,maxLife:.8,size:1,color:"#ffffff",alpha:.8,type:"circle"})},r*200);for(let r=0;r<50;r++){let l;if(o.length>0&&Math.random()<.7){const c=Math.floor(r/50*o.length),d=o[c]||o[0];d?l=d.angle+(Math.random()-.5)*(Math.PI/3):l=r/50*Math.PI*2}else l=r/50*Math.PI*2;setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(l)*500,vy:Math.sin(l)*500,life:1.2,maxLife:1.2,size:Math.random()*6+2,color:"#9932cc",alpha:1,type:"circle"})},r*20)}}createAEffectWithSwords(e,a,t,i,s){const n={color:"#00bfff",trailColor:"rgba(0, 191, 255, 1)",size:45,speed:8,glowIntensity:80},o=s||[],r=Math.min(12,Math.max(8,Math.floor(t*1.2)));this.createSwords(e,a,o,n,r,0),i?.massive,i?.corner}createAEffect(e,a,t,i){const s=["#87ceeb","#87cefa","#00bfff","#1e90ff","#6495ed","#4682b4","#add8e6","#b0e0e6","#afeeee"],n=this.calculateFlipDirections(e,a,i);if(n.length>0)for(const o of n)for(let r=0;r<3;r++)for(let l=0;l<20;l++)setTimeout(()=>{const c=(Math.random()-.5)*(Math.PI/4),d=o.angle+c,m=250+r*50;this.particles.push({x:e,y:a,vx:Math.cos(d)*m,vy:Math.sin(d)*m,life:1+r*.2,maxLife:1+r*.2,size:Math.random()*4+2,color:s[r%s.length]??"#87ceeb",alpha:1,type:"circle"})},l*20+r*150);else{const o=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];for(const[r,l]of o)for(let c=0;c<3;c++)for(let d=0;d<15;d++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:r*(250+c*50),vy:l*(250+c*50),life:1+c*.2,maxLife:1+c*.2,size:Math.random()*4+2,color:s[c%s.length]??"#87ceeb",alpha:1,type:"circle"})},d*25+c*200)}for(let o=0;o<4;o++)setTimeout(()=>{for(let r=0;r<30;r++){let l;if(n.length>0&&Math.random()<.4){const d=Math.floor(r/30*n.length),m=n[d]||n[0];m?l=m.angle+(Math.random()-.5)*(Math.PI/3):l=r/30*Math.PI*2}else l=r/30*Math.PI*2;const c=180+o*60;this.particles.push({x:e,y:a,vx:Math.cos(l)*c,vy:Math.sin(l)*c,life:1.2,maxLife:1.2,size:Math.random()*3+2,color:s[o%s.length]??"#87ceeb",alpha:1,type:"circle"})}},o*150);for(let o=0;o<60+t*8;o++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*30,y:a+Math.random()*15,vx:(Math.random()-.5)*300,vy:-Math.random()*350-150,life:1.8,maxLife:1.8,size:Math.random()*3+1,color:s[Math.floor(Math.random()*s.length)]??"#4169e1",alpha:1,type:"spark"})},Math.random()*400);for(let o=0;o<25;o++){const r=Math.random()*Math.PI*2,l=Math.random()*100+50;this.particles.push({x:e+Math.cos(r)*l,y:a+Math.sin(r)*l,vx:Math.cos(r)*100,vy:Math.sin(r)*100,life:.8,maxLife:.8,size:Math.random()*3+1,color:"#87ceeb",alpha:1,type:"circle"})}}createBEffect(e,a,t){const i=["#90ee90","#98fb98","#00ff7f","#00fa9a","#7cfc00","#7fff00","#adff2f","#9aff9a","#b4ffb4"];for(let s=0;s<2;s++)setTimeout(()=>{for(let n=0;n<25;n++){const o=n/25*Math.PI*2,r=120+s*40;this.particles.push({x:e,y:a,vx:Math.cos(o)*r,vy:Math.sin(o)*r,life:1,maxLife:1,size:Math.random()*2+2,color:i[s%i.length]??"#90ee90",alpha:1,type:"circle"})}},s*100);for(let s=0;s<20+t*5;s++){const n=Math.random()*Math.PI*2,o=Math.random()*150+80;setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(n)*o,vy:Math.sin(n)*o,life:1.2,maxLife:1.2,size:Math.random()*2+1,color:i[Math.floor(Math.random()*i.length)]??"#00ff7f",alpha:1,type:"spark"})},Math.random()*200)}for(let s=0;s<8;s++){const n=s/8*Math.PI*2;for(let o=0;o<5;o++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(n)*(150+o*30),vy:Math.sin(n)*(150+o*30),life:.8,maxLife:.8,size:2,color:"#90ee90",alpha:1,type:"circle"})},o*50)}}createGreenLotusEffect(e,a,t){const i=t.map(n=>({x:n.x,y:n.y})),s=new R(e,a,i);this.greenLotusEffects.push(s)}createUnlimitedBladeWorksEffect(e,a,t){const i=t.map(n=>({x:n.x,y:n.y})),s=new O(e,a,i);this.ubwEffects.push(s)}createDivineThunderEffect(e,a,t){const i=t.map(n=>({x:n.x,y:n.y})),s=new W(e,a,i);this.divineThunderEffects.push(s)}createNineFinaleEffect(e,a,t){const i=t.map(n=>({x:n.x,y:n.y})),s=new Y(e,a,i);this.nineFinaleEffects.push(s)}createIceSpearEffect(e,a,t){const i=t.map(n=>({x:n.x,y:n.y})),s=new N(e,a,i);this.iceSpearEffects.push(s)}createCEffect(e,a){const t=["#d3d3d3","#c0c0c0","#dcdcdc","#f5f5f5","#e0e0e0","#f8f8f8","#b8b8b8","#a9a9a9","#d8d8d8","#e6e6e6"];for(let i=0;i<12;i++){const s=i/12*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(s)*80,vy:Math.sin(s)*80,life:.8,maxLife:.8,size:Math.random()*1.5+1,color:t[i%t.length]??"#d3d3d3",alpha:.8,type:"circle"})}for(let i=0;i<6;i++){const s=Math.random()*Math.PI*2,n=Math.random()*60+40;this.particles.push({x:e,y:a,vx:Math.cos(s)*n,vy:Math.sin(s)*n,life:.6,maxLife:.6,size:1,color:"#d3d3d3",alpha:.7,type:"spark"})}}createFlipEffect(e,a,t,i){const s=t==="#000000";let n,o;if(i)switch(i){case"SSS":n=["#ffd700","#ffef94","#fff68f","#ffffe0","#fffacd"],o=3;break;case"SS":n=["#ff8c00","#ffa500","#ff7f00","#ff6347","#ff4500"],o=2.5;break;case"S":n=["#dda0dd","#e6b8ea","#d8bfd8","#e0b0ff","#dbb2ff"],o=2;break;case"A":n=["#87ceeb","#add8e6","#b0e0e6","#afeeee","#e0ffff"],o=1.5;break;case"B":n=["#90ee90","#98fb98","#b4ffb4","#c8ffc8","#a8e6a8"],o=1.2;break;case"C":n=["#d3d3d3","#c0c0c0","#e0e0e0","#f5f5f5","#b8b8b8"],o=1;break;default:n=s?["#666666","#888888","#555555"]:["#f0f0f0","#e8e8e8","#f5f5f5"],o=.8}else n=s?["#666666","#888888","#555555"]:["#f0f0f0","#e8e8e8","#f5f5f5"],o=.8;const r=n[0]??"#ffffff",l=n,c=Math.floor(15*o);for(let m=0;m<c;m++){const u=m/c*Math.PI*2,g=(Math.random()*60+60)*o;this.particles.push({x:e,y:a,vx:Math.cos(u)*g,vy:Math.sin(u)*g,life:.6*o,maxLife:.6*o,size:(Math.random()*1.5+1)*o,color:m%3===0?r:l[m%l.length]??r,alpha:.9,type:m%2===0?"spark":"circle"})}const d=Math.floor(2+o);for(let m=0;m<d;m++)setTimeout(()=>{const u=Math.floor(12+o*4);for(let g=0;g<u;g++){const b=g/u*Math.PI*2,v=(80+m*30)*o;this.particles.push({x:e,y:a,vx:Math.cos(b)*v,vy:Math.sin(b)*v,life:.6+m*.2,maxLife:.6+m*.2,size:m===0?2:1,color:r,alpha:.7-m*.2,type:"circle"})}},m*80);for(let m=0;m<15;m++){const u=Math.random()*Math.PI*2,g=Math.random()*60+40;setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*20,y:a+(Math.random()-.5)*20,vx:Math.cos(u)*g,vy:Math.sin(u)*g,life:.7,maxLife:.7,size:Math.random()*1.5+1,color:l[Math.floor(Math.random()*l.length)]??"#d3d3d3",alpha:.8,type:"spark"})},Math.random()*200)}for(let m=0;m<8;m++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*30,y:a+(Math.random()-.5)*30,vx:(Math.random()-.5)*30,vy:-Math.random()*40-20,life:1.2,maxLife:1.2,size:Math.random()*1+.5,color:r,alpha:.6,type:"circle"})},Math.random()*300);setTimeout(()=>{for(let m=0;m<Math.PI*2;m+=.2)this.particles.push({x:e,y:a,vx:Math.cos(m)*150,vy:Math.sin(m)*150,life:.4,maxLife:.4,size:1.5,color:s?"#333333":"#f9f9f9",alpha:.5,type:"circle"})},100)}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles=[],this.canvas.remove()}getParticleCount(){return this.particles.length}createCornerExplosion(e,a){const t=["#ffd700","#ffdf00","#ffa500"];for(let i=0;i<4;i++){const s=i/4*Math.PI*2;for(let n=0;n<20;n++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(s)*300+(Math.random()-.5)*100,vy:Math.sin(s)*300+(Math.random()-.5)*100,life:1.5,maxLife:1.5,size:Math.random()*3+2,color:t[n%t.length]??"#ffd700",alpha:1,type:"circle"})},n*30+i*200)}}createComebackEffect(e,a){const t=["#ff4500","#ff6347","#ffa500","#ff1493"];for(let i=0;i<80;i++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*60,y:a+Math.random()*30,vx:(Math.random()-.5)*200,vy:-Math.random()*400-200,life:2,maxLife:2,size:Math.random()*4+2,color:t[Math.floor(Math.random()*t.length)]??"#ff6347",alpha:.9,type:"spark"})},Math.random()*600)}createMassiveEffect(e,a){const t=["#0080ff","#00bfff","#87ceeb","#b0e0e6"];for(let i=0;i<6;i++)setTimeout(()=>{for(let s=0;s<40;s++){const n=s/40*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(n)*(200+i*50),vy:Math.sin(n)*(200+i*50),life:1+i*.2,maxLife:1+i*.2,size:Math.random()*3+1,color:t[i%t.length]??"#0080ff",alpha:.8,type:"circle"})}},i*150)}createDominationEffect(e,a){const t=["#9932cc","#8b00ff","#ffd700","#daa520"];for(let i=0;i<12;i++){const s=i/12*Math.PI*2;setTimeout(()=>{this.particles.push({x:e+Math.cos(s)*50,y:a+Math.sin(s)*50,vx:Math.cos(s)*150,vy:Math.sin(s)*150,life:1.8,maxLife:1.8,size:Math.random()*4+3,color:t[i%t.length]??"#9932cc",alpha:1,type:"circle"})},i*80)}}createChainEffect(e,a){if(!this.enabled)return;const t=["#ffff00","#ffffff","#00ffff"];for(let i=0;i<8;i++){const s=i/8*Math.PI*2;for(let n=0;n<10;n++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(s)*(100+n*20)+(Math.random()-.5)*60,vy:Math.sin(s)*(100+n*20)+(Math.random()-.5)*60,life:.4,maxLife:.4,size:2,color:t[n%t.length]??"#ffff00",alpha:1,type:"spark"})},n*20+i*50)}}createFloatingGradeText(e,a,t){if(!this.enabled)return;const s={C:{color:"#d3d3d3",fontSize:24},B:{color:"#90ee90",fontSize:28},A:{color:"#87ceeb",fontSize:42},S:{color:"#9932cc",fontSize:48},SS:{color:"#ff8c00",fontSize:56},SSS:{color:"#ffd700",fontSize:64}}[t];s&&(this.ctx&&this.canvas?(this.particles.push({x:e,y:a,vx:0,vy:-80,life:2,maxLife:2,size:s.fontSize,color:s.color,alpha:1,type:"text",text:t,fontSize:s.fontSize}),t==="SSS"?setTimeout(()=>{this.particles.push({x:e,y:a-10,vx:0,vy:-60,life:2.5,maxLife:2.5,size:72,color:"#ffa500",alpha:.7,type:"text",text:t,fontSize:72})},100):t==="SS"?setTimeout(()=>{this.particles.push({x:e,y:a-8,vx:0,vy:-65,life:2.2,maxLife:2.2,size:64,color:"#ff4500",alpha:.6,type:"text",text:t,fontSize:64})},80):t==="S"?setTimeout(()=>{this.particles.push({x:e,y:a-6,vx:0,vy:-70,life:2,maxLife:2,size:54,color:"#ba55d3",alpha:.5,type:"text",text:t,fontSize:54})},60):t==="A"&&setTimeout(()=>{this.particles.push({x:e,y:a-5,vx:0,vy:-75,life:1.8,maxLife:1.8,size:48,color:"#4169e1",alpha:.4,type:"text",text:t,fontSize:48})},40)):this.createCSSFloatingText(e,a,t))}createCSSFloatingText(e,a,t){const i=this.canvas.parentElement;if(!i)return;const s=document.createElement("div");s.className=`floating-grade-text grade-${t.toLowerCase()}`,s.textContent=t,s.style.left=`${e}px`,s.style.top=`${a}px`,s.style.transform="translate(-50%, -50%)",i.appendChild(s),setTimeout(()=>{s.parentNode&&s.parentNode.removeChild(s)},2e3)}}const V={"loading.title":"Loading Super Reversi...","loading.details":"Initializing game engine and AI systems","app.title":"🎮 Super Reversi","game.black":"Black","game.white":"White","game.current":"Current","game.currentTurn":"Current Turn:","game.mode":"Mode","game.pvp":"Player vs Player","game.pvai":"Player vs AI","game.back":"← Back to Menu","game.blackWins":"Black Wins!","game.whiteWins":"White Wins!","game.tie":"It's a Tie!","game.gameOverTitle":"Game Over!","game.totalMoves":"Total moves","game.playAgain":"Play Again","game.mainMenu":"Main Menu","menu.chooseMode":"🎯 Choose Game Mode","menu.pvp":"Player vs Player","menu.pvc":"Player vs Computer","menu.settings":"Settings","menu.help":"How to Play","menu.back":"← Back to Menu","menu.selectDifficulty":"🤖 Select AI Difficulty","menu.easy":"Easy","menu.medium":"Medium","menu.hard":"Hard","menu.easyDesc":"Easy: AI makes random valid moves","menu.mediumDesc":"Medium: AI tries to maximize flips","menu.hardDesc":"Hard: AI uses advanced strategy","menu.startGame":"Start Game","settings.title":"⚙️ Settings","settings.language":"Language","settings.visual":"Visual Settings","settings.showValid":"Show valid moves","settings.showLast":"Highlight last move","settings.showMobility":"Show mobility","settings.animations":"Enable animations","settings.game":"Game Settings","settings.autoPass":"Auto-pass when no moves","settings.confirm":"Confirm moves (vs Computer)","settings.save":"Save Settings","settings.saved":"Settings saved!","help.title":"❓ How to Play Reversi","help.objectiveTitle":"🎯 Objective","help.objectiveText":"Have the most pieces when the game ends.","help.rulesTitle":"📋 Rules","help.rules1":"Black moves first","help.rules2":"Capture pieces between yours","help.rules3":"Can capture in 8 directions","help.rules4":"Must capture at least 1 piece","help.rules5":"Pass if no valid moves","help.rules6":"Game ends when no moves left","help.strategyTitle":"💡 Strategy","help.strategy1":"<strong>Corners:</strong> Can't be flipped!","help.strategy2":"<strong>Edges:</strong> Harder to flip","help.strategy3":"<strong>Mobility:</strong> Limit opponent moves","help.strategy4":"<strong>Patience:</strong> Less can be more","help.controlsTitle":"🎮 Controls","help.controls1":"Click highlighted cells to move","help.controls2":"Green = valid moves","help.controls3":"Gold = last move","messages.quitConfirm":"Are you sure you want to quit the current game?","messages.moveConfirm":"Confirm this move?","messages.invalidMove":"Invalid move","difficulty.easy":"Easy","difficulty.medium":"Medium","difficulty.hard":"Hard","combo.counter":"${count} Combo!","combo.double":"Twin Strike!","combo.triple":"Triple Tempest!","combo.quadruple":"Quadra Blaze!","combo.quintuple":"Penta Storm!","combo.sextuple":"Hexa Fury!","combo.septuple":"Hepta Cataclysm!","special.corner_joseki":"Corner Joseki!","special.great_reversal":"Great Reversal!","special.total_domination":"Total Domination!","special.desperate_kill":"Desperate Kill!","special.perfect_endgame":"Perfect Endgame!","special.edge_control":"Edge Control!","special.chain_reaction":"Chain Reaction!","special.time_control":"Time Control!","special.green_lotus":"Green Lotus Sword Song!","special.blade_echo":"Blade Echo!","special.divine_thunder":"Divine Thunder Strike!","special.corner_joseki.subtitle":"Corner Joseki","special.great_reversal.subtitle":"Great Reversal","special.total_domination.subtitle":"Total Domination","special.desperate_kill.subtitle":"Desperate Kill","special.perfect_endgame.subtitle":"Perfect Endgame","special.edge_control.subtitle":"Edge Control","special.chain_reaction.subtitle":"Chain Reaction","special.time_control.subtitle":"Time Control","special.green_lotus.subtitle":"Green Lotus Sword Song","special.blade_echo.subtitle":"Blade Echo","special.divine_thunder.subtitle":"Divine Thunder Strike","special.nine_finale":"Nine Finale Destruction!","special.nine_finale.subtitle":"Nine Finale Destruction","special.ice_spear_abyss":"Ice Spear Abyss!","special.ice_spear_abyss.subtitle":"Ice Spear Abyss","modal.ok":"OK","modal.cancel":"Cancel","modal.confirm":"Confirm","modal.yes":"Yes","modal.no":"No","modal.info":"Information","modal.warning":"Warning","modal.error":"Error","modal.success":"Success","modal.confirm.title":"Confirm","modal.settingsComing":"Settings feature coming soon!","modal.testClick":"You clicked position ${position}","modal.appWorking":"Application is working!","modal.moveConfirm.title":"Confirm Move","modal.quitConfirm.title":"Quit Game","modal.settingsSaved.title":"Settings Saved"},U={"loading.title":"正在載入超級黑白棋...","loading.details":"正在初始化遊戲引擎與人工智慧系統","app.title":"🎮 超級黑白棋","game.black":"黑棋","game.white":"白棋","game.current":"現在","game.currentTurn":"目前回合：","game.mode":"模式","game.pvp":"玩家對戰","game.pvai":"玩家對電腦","game.back":"← 返回選單","game.blackWins":"黑棋勝利！","game.whiteWins":"白棋勝利！","game.tie":"平手！","game.gameOverTitle":"遊戲結束！","game.totalMoves":"總步數","game.playAgain":"再玩一次","game.mainMenu":"回主選單","menu.chooseMode":"🎯 選擇遊戲模式","menu.pvp":"玩家對玩家","menu.pvc":"玩家對電腦","menu.settings":"設定","menu.help":"玩法說明","menu.back":"← 返回選單","menu.selectDifficulty":"🤖 選擇AI難度","menu.easy":"簡單","menu.medium":"中等","menu.hard":"困難","menu.easyDesc":"簡單：AI隨機下合法棋","menu.mediumDesc":"中等：AI試著最大化翻子","menu.hardDesc":"困難：AI使用進階策略","menu.startGame":"開始遊戲","settings.title":"⚙️ 設定","settings.language":"語言","settings.visual":"視覺設定","settings.showValid":"顯示可下位置","settings.showLast":"標示上一手","settings.showMobility":"顯示行動力","settings.animations":"啟用動畫","settings.game":"遊戲設定","settings.autoPass":"無棋可下自動跳過","settings.confirm":"與電腦對戰時確認落子","settings.save":"保存設定","settings.saved":"設定已保存！","help.title":"❓ 如何遊玩黑白棋","help.objectiveTitle":"🎯 目標","help.objectiveText":"遊戲結束時棋子數最多者獲勝。","help.rulesTitle":"📋 規則","help.rules1":"黑棋先行","help.rules2":"夾住對方棋子以翻轉","help.rules3":"可向八個方向翻棋","help.rules4":"至少翻一子才能落子","help.rules5":"無棋可下時須跳過","help.rules6":"雙方皆無棋可下時遊戲結束","help.strategyTitle":"💡 策略","help.strategy1":"<strong>角落：</strong> 不會被翻轉！","help.strategy2":"<strong>邊緣：</strong> 較不易被翻","help.strategy3":"<strong>行動力：</strong> 限制對手落子","help.strategy4":"<strong>耐心：</strong> 有時少卻是多","help.controlsTitle":"🎮 操作","help.controls1":"點擊高亮格子落子","help.controls2":"綠色 = 可下位置","help.controls3":"金色 = 上一步","messages.quitConfirm":"確定要結束目前的遊戲嗎？","messages.moveConfirm":"確定這一步嗎？","messages.invalidMove":"無效的落子","difficulty.easy":"簡單","difficulty.medium":"中等","difficulty.hard":"困難","combo.counter":"${count} 連擊！","combo.double":"雙星爆擊！","combo.triple":"三連風暴！","combo.quadruple":"四極炎舞！","combo.quintuple":"五芒雷鳴！","combo.sextuple":"六道狂怒！","combo.septuple":"七星毀滅！","special.corner_joseki":"角部定式！","special.great_reversal":"大翻盤！","special.total_domination":"完全壓制！","special.desperate_kill":"絕地反殺！","special.perfect_endgame":"完美收官！","special.edge_control":"邊線掌控！","special.chain_reaction":"連鎖反應！","special.time_control":"時間掌控！","special.green_lotus":"青蓮劍歌！","special.blade_echo":"劍刃迴響！","special.divine_thunder":"神劍御雷！","special.corner_joseki.subtitle":"角部定式","special.great_reversal.subtitle":"大翻盤","special.total_domination.subtitle":"完全壓制","special.desperate_kill.subtitle":"絕地反殺","special.perfect_endgame.subtitle":"完美收官","special.edge_control.subtitle":"邊線掌控","special.chain_reaction.subtitle":"連鎖反應","special.time_control.subtitle":"時間掌控","special.green_lotus.subtitle":"青蓮劍歌","special.blade_echo.subtitle":"劍刃迴響","special.divine_thunder.subtitle":"神劍御雷","special.nine_finale":"九俱焚滅！","special.nine_finale.subtitle":"九俱焚滅","special.ice_spear_abyss":"滅劍羅淵！","special.ice_spear_abyss.subtitle":"滅劍羅淵","modal.ok":"確定","modal.cancel":"取消","modal.confirm":"確認","modal.yes":"是","modal.no":"否","modal.info":"資訊","modal.warning":"警告","modal.error":"錯誤","modal.success":"成功","modal.confirm.title":"確認","modal.settingsComing":"設定功能即將推出！","modal.testClick":"你點擊了位置 ${position}","modal.appWorking":"應用程式運作正常！","modal.moveConfirm.title":"確認移動","modal.quitConfirm.title":"退出遊戲","modal.settingsSaved.title":"設定已儲存"},J={"loading.title":"正在加载超级黑白棋...","loading.details":"正在初始化游戏引擎和人工智能系统","app.title":"🎮 超级黑白棋","game.black":"黑棋","game.white":"白棋","game.current":"当前","game.currentTurn":"当前回合：","game.mode":"模式","game.pvp":"玩家对战","game.pvai":"玩家对电脑","game.back":"← 返回菜单","game.blackWins":"黑棋胜利！","game.whiteWins":"白棋胜利！","game.tie":"平局！","game.gameOverTitle":"游戏结束！","game.totalMoves":"总步数","game.playAgain":"再玩一次","game.mainMenu":"回主菜单","menu.chooseMode":"🎯 选择游戏模式","menu.pvp":"玩家对玩家","menu.pvc":"玩家对电脑","menu.settings":"设置","menu.help":"玩法说明","menu.back":"← 返回菜单","menu.selectDifficulty":"🤖 选择AI难度","menu.easy":"简单","menu.medium":"中等","menu.hard":"困难","menu.easyDesc":"简单：AI随机下合法棋","menu.mediumDesc":"中等：AI尝试最大化翻子","menu.hardDesc":"困难：AI使用高级策略","menu.startGame":"开始游戏","settings.title":"⚙️ 设置","settings.language":"语言","settings.visual":"视觉设置","settings.showValid":"显示可下位置","settings.showLast":"标记上一步","settings.showMobility":"显示行动力","settings.animations":"启用动画","settings.game":"游戏设置","settings.autoPass":"无棋可下自动跳过","settings.confirm":"与电脑对战时确认落子","settings.save":"保存设置","settings.saved":"设置已保存！","help.title":"❓ 如何玩黑白棋","help.objectiveTitle":"🎯 目标","help.objectiveText":"游戏结束时棋子数最多者获胜。","help.rulesTitle":"📋 规则","help.rules1":"黑棋先行","help.rules2":"夹住对方棋子以翻转","help.rules3":"可向八个方向翻棋","help.rules4":"至少翻一子才能落子","help.rules5":"无棋可下时须跳过","help.rules6":"双方均无棋可下时游戏结束","help.strategyTitle":"💡 策略","help.strategy1":"<strong>角落：</strong> 不会被翻转！","help.strategy2":"<strong>边缘：</strong> 较不易被翻","help.strategy3":"<strong>行动力：</strong> 限制对手落子","help.strategy4":"<strong>耐心：</strong> 有时少却是多","help.controlsTitle":"🎮 操作","help.controls1":"点击高亮格子落子","help.controls2":"绿色 = 可下位置","help.controls3":"金色 = 上一步","messages.quitConfirm":"确定要结束当前的游戏吗？","messages.moveConfirm":"确认这一步吗？","messages.invalidMove":"无效的落子","difficulty.easy":"简单","difficulty.medium":"中等","difficulty.hard":"困难","combo.counter":"${count} 连击！","combo.double":"双星爆击！","combo.triple":"三连风暴！","combo.quadruple":"四极炎舞！","combo.quintuple":"五芒雷鸣！","combo.sextuple":"六道狂怒！","combo.septuple":"七星毁灭！","special.corner_joseki":"角部定式！","special.great_reversal":"大翻盘！","special.total_domination":"完全压制！","special.desperate_kill":"绝地反杀！","special.perfect_endgame":"完美收官！","special.edge_control":"边线掌控！","special.chain_reaction":"连锁反应！","special.time_control":"时间掌控！","special.green_lotus":"青莲剑歌！","special.blade_echo":"剑刃回响！","special.divine_thunder":"神剑御雷！","special.corner_joseki.subtitle":"角部定式","special.great_reversal.subtitle":"大翻盘","special.total_domination.subtitle":"完全压制","special.desperate_kill.subtitle":"绝地反杀","special.perfect_endgame.subtitle":"完美收官","special.edge_control.subtitle":"边线掌控","special.chain_reaction.subtitle":"连锁反应","special.time_control.subtitle":"时间掌控","special.green_lotus.subtitle":"青莲剑歌","special.blade_echo.subtitle":"剑刃回响","special.divine_thunder.subtitle":"神剑御雷","special.nine_finale":"九俱焚灭！","special.nine_finale.subtitle":"九俱焚灭","special.ice_spear_abyss":"灭剑罗渊！","special.ice_spear_abyss.subtitle":"灭剑罗渊","modal.ok":"确定","modal.cancel":"取消","modal.confirm":"确认","modal.yes":"是","modal.no":"否","modal.info":"信息","modal.warning":"警告","modal.error":"错误","modal.success":"成功","modal.confirm.title":"确认","modal.settingsComing":"设置功能即将推出！","modal.testClick":"你点击了位置 ${position}","modal.appWorking":"应用程序运行正常！","modal.moveConfirm.title":"确认移动","modal.quitConfirm.title":"退出游戏","modal.settingsSaved.title":"设置已保存"};let z="en";const $={en:V,"zh-Hant":U,"zh-Hans":J};function h(f,e){let t=$[z][f]??f;return e&&(t=t.replace(/\$\{(\w+)\}/g,(i,s)=>Object.prototype.hasOwnProperty.call(e,s)?String(e[s]):"")),t}function L(f){f in $&&(z=f,typeof document<"u"&&(document.documentElement.lang=f))}function B(f=document){f.querySelectorAll("[data-i18n]").forEach(a=>{const t=a.dataset.i18n;a.textContent=h(t)})}const K={none:{effectType:"snowflake",intensity:1,duration:500},double:{effectType:"magic",intensity:1.5,duration:800,soundEffect:"combo_double"},triple:{effectType:"fire",intensity:2,duration:1200,soundEffect:"combo_triple",screenShake:!0},quadruple:{effectType:"explosion",intensity:2.5,duration:1500,soundEffect:"combo_quadruple",screenShake:!0},quintuple:{effectType:"lightning",intensity:3,duration:1800,soundEffect:"combo_quintuple",screenShake:!0,slowMotion:!1},sextuple:{effectType:"storm",intensity:4,duration:2200,soundEffect:"combo_sextuple",screenShake:!0,slowMotion:!0},septuple:{effectType:"blackhole",intensity:5,duration:2500,soundEffect:"combo_septuple",screenShake:!0,slowMotion:!0}};class Q{_state;_eventHandlers=[];_history=[];constructor(){this._state=this.createInitialState()}createInitialState(){return{count:0,player:null,multiplier:1,startTime:0,isActive:!1,maxCombo:0,type:"none"}}get state(){return Object.freeze({...this._state})}get history(){return Object.freeze([...this._history])}processMove(e,a,t){return a?this.endCombo():this._state.player===e?this.continueCombo(t):this.startCombo(e,t)}startCombo(e,a){this._state.isActive&&this.endCombo(),this._state={count:2,player:e,multiplier:1.2,startTime:Date.now(),isActive:!0,maxCombo:Math.max(this._state.maxCombo,2),type:"double"};const t={type:"combo_started",player:e,comboCount:this._state.count,comboType:this._state.type,effect:this.getComboEffect(),timestamp:Date.now()};return this._emitEvent(t),this._history.push(t),t}continueCombo(e){if(!this._state.isActive||!this._state.player)throw new Error("Cannot continue combo: no active combo");this._state.count++,this._state.multiplier=Math.min(1+this._state.count*.2,3),this._state.maxCombo=Math.max(this._state.maxCombo,this._state.count),this._state.type=this.determineComboType(this._state.count);const a={type:"combo_continued",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,effect:this.getComboEffect(),timestamp:Date.now()};return this._emitEvent(a),this._history.push(a),a}endCombo(){if(!this._state.isActive||!this._state.player)return null;const e={type:"combo_ended",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,timestamp:Date.now()};return this._state=this.createInitialState(),this._state.maxCombo=this.state.maxCombo,this._emitEvent(e),this._history.push(e),e}breakCombo(e="manual"){if(!this._state.isActive||!this._state.player)return null;const a={type:"combo_broken",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,timestamp:Date.now()};return this._state=this.createInitialState(),this._state.maxCombo=this.state.maxCombo,this._emitEvent(a),this._history.push(a),a}determineComboType(e){return e>=7?"septuple":e>=6?"sextuple":e>=5?"quintuple":e>=4?"quadruple":e>=3?"triple":e>=2?"double":"none"}getComboEffect(){const e=K[this._state.type],a=Math.min(this._state.count*.1,1);return{...e,intensity:e.intensity+a,duration:e.duration+this._state.count*50}}getStats(){const e=this._history.filter(s=>s.type==="combo_ended"||s.type==="combo_broken"),a=e.length,t=a>0?e.reduce((s,n)=>s+n.comboCount,0)/a:0,i={none:0,double:0,triple:0,quadruple:0,quintuple:0,sextuple:0,septuple:0};return e.forEach(s=>{i[s.comboType]++}),{currentCombo:this._state.count,maxCombo:this._state.maxCombo,totalCombos:a,averageComboLength:t,comboTypeDistribution:i}}getSuggestedEffect(e){switch(e){case"septuple":return"blackhole";case"sextuple":return"storm";case"quintuple":return"lightning";case"quadruple":return"explosion";case"triple":return"fire";case"double":return"magic";default:return"snowflake"}}shouldPlaySpecialSound(e){return!["none","double"].includes(e)}shouldTriggerScreenShake(e){return["quintuple","sextuple","septuple"].includes(e)}shouldTriggerSlowMotion(e){return e==="septuple"}reset(){this._state=this.createInitialState(),this._history=[]}addEventListener(e){this._eventHandlers.push(e)}removeEventListener(e){const a=this._eventHandlers.indexOf(e);a!==-1&&this._eventHandlers.splice(a,1)}_emitEvent(e){this._eventHandlers.forEach(a=>{try{a(e)}catch{}})}getComboDisplayText(){if(!this._state.isActive)return"";const e=`combo.${this._state.type}`,a=h(e);return a===e?`${this._state.count} combo!`:a}getComboDisplayColor(){return{none:"#ffffff",double:"#90ee90",triple:"#ffa500",quadruple:"#ff6347",quintuple:"#ff1493",sextuple:"#9932cc",septuple:"#ffd700"}[this._state.type]||"#ffffff"}}const Z={corner_joseki:{positionType:"corner",minFlipCount:3,timing:"early"},great_reversal:{minFlipCount:6},total_domination:{scoreDifference:{min:15,max:999},minFlipCount:4},desperate_kill:{scoreDifference:{min:-15,max:-1},minFlipCount:4},perfect_endgame:{scoreDifference:{min:20,max:999},special:"near_endgame"},edge_control:{positionType:"edge",minFlipCount:5},chain_reaction:{minFlipCount:8,special:"multiple_directions"},time_control:{minFlipCount:10,special:"ultra_rare"}};w("explosion","magic",.7),h("special.corner_joseki"),h("special.corner_joseki.subtitle"),w("storm","lightning",.6),h("special.great_reversal"),h("special.great_reversal.subtitle"),w("blackhole","magic",.8),h("special.total_domination"),h("special.total_domination.subtitle"),w("fire","explosion",.8),h("special.desperate_kill"),h("special.desperate_kill.subtitle"),{...k.blackhole},h("special.perfect_endgame"),h("special.perfect_endgame.subtitle"),w("lightning","storm",.5),h("special.edge_control"),h("special.edge_control.subtitle"),w("lightning","explosion",.7),h("special.chain_reaction"),h("special.chain_reaction.subtitle"),{...k.blackhole},h("special.time_control"),h("special.time_control.subtitle");class ee{static detectSpecialMove(e,a,t,i,s,n){const o=[],r=a.length,l=t-i;for(const[c,d]of Object.entries(Z))this.checkCondition(c,d,e,r,l,s,n,a)&&o.push(c);return o}static checkCondition(e,a,t,i,s,n,o,r){if(a.minFlipCount&&i<a.minFlipCount)return!1;if(a.scoreDifference){const{min:l,max:c}=a.scoreDifference;if(s<l||s>c)return!1}return!(a.positionType&&!this.checkPositionType(t,a.positionType)||a.timing&&!this.checkTiming(a.timing,n,o)||a.special&&!this.checkSpecialCondition(e,a.special,{position:t,flipCount:i,scoreDiff:s,moveNumber:n,totalMoves:o,flippedPositions:r}))}static checkPositionType(e,a){const t=Math.floor(e/8),i=e%8;switch(a){case"corner":return(t===0||t===7)&&(i===0||i===7);case"edge":return t===0||t===7||i===0||i===7;case"center":return t>=2&&t<=5&&i>=2&&i<=5;default:return!1}}static checkTiming(e,a,t){const i=a/Math.max(t,60);switch(e){case"early":return i<.3;case"mid":return i>=.3&&i<=.7;case"late":return i>.7;default:return!0}}static checkSpecialCondition(e,a,t){switch(a){case"near_endgame":return t.moveNumber>Math.max(t.totalMoves*.8,40);case"multiple_directions":return this.checkMultipleDirections(t.position,t.flippedPositions);case"ultra_rare":return t.flipCount>=15&&Math.abs(t.scoreDiff)>10;default:return!0}}static checkMultipleDirections(e,a){const t=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],i=Math.floor(e/8),s=e%8;let n=0;for(const[o,r]of t){if(o===void 0||r===void 0)continue;let l=!1,c=i+o,d=s+r;for(;c>=0&&c<8&&d>=0&&d<8;){const m=c*8+d;if(a.includes(m)){l=!0;break}c+=o,d+=r}l&&n++}return n>=3}}const S=0,p=1,y=2,E=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];class te{container=null;currentScreen="menu";gameState=null;isProcessingMove=!1;aiThinking=!1;particleSystem;comboSystem;uiManager=null;modalService=null;comboDisplay=null;specialMoveDisplay=null;constructor(){this.particleSystem=new X,this.comboSystem=new Q,this.comboSystem.addEventListener(e=>{this.handleComboEvent(e)})}async initialize(e){this.container=e;const a=this.getSettings(),t=a.language||"en";L(t),B(),this.setupUI(),this.particleSystem.initialize(e),this.particleSystem.setEnabled(a.animations),this.showMenu()}setupUI(){if(!this.container)return;this.container.innerHTML=`
      <div class="super-reversi-app">
        <div class="game-header" id="game-header">
          <button class="header-back-btn" id="header-back-btn" style="display: none;">⬅️</button>
          <h1 data-i18n="app.title">${h("app.title")}</h1>
          <div class="header-right">
            <button class="settings-btn" id="header-settings-btn">⚙️</button>
          </div>
        </div>

        <!-- Shared Health Bar System -->
        <div class="shared-health-bar-container" id="shared-health-bar-container" style="display: none;">
          <!-- Left Player Section (Black) -->
          <div class="player-section left">
            <div class="player-info">
              <div class="player-icon">⚫</div>
              <div class="player-name">${h("game.black")}</div>
            </div>
            <div class="piece-count" id="black-count">2</div>
          </div>

          <!-- Shared Health Bar -->
          <div class="shared-health-bar">
            <div class="health-fill-black" id="black-fill"></div>
            <div class="health-fill-white" id="white-fill"></div>
            <div class="vs-divider" id="vs-divider">
              <span class="vs-text">VS</span>
              <div class="turn-indicator" id="turn-indicator-shared">
                <span id="current-turn-shared">${h("game.black")}</span>
              </div>
            </div>
          </div>

          <!-- Right Player Section (White) -->
          <div class="player-section right">
            <div class="piece-count" id="white-count">2</div>
            <div class="player-info">
              <div class="player-name">${h("game.white")}</div>
              <div class="player-icon">⚪</div>
            </div>
          </div>

          <!-- Damage Numbers Container -->
          <div class="damage-numbers" id="damage-numbers"></div>
        </div>
        <!-- 戰鬥UI覆蓋層 -->
        <div class="battle-overlay" id="battle-overlay">
          <div id="combo-display" class="combo-display hidden">
            <div class="combo-count"></div>
            <div class="combo-text"></div>
            <div class="combo-multiplier"></div>
          </div>
          <div id="special-move-display" class="special-move-display hidden">
            <div class="special-move-title"></div>
            <div class="special-move-subtitle"></div>
          </div>
        </div>

        <div id="screen-container" class="screen-container">
          <!-- Screens render here -->
        </div>

        <!-- Simple Modal -->
        <div id="simple-modal" class="modal-backdrop" style="display: none;">
          <div class="dialog modal">
            <div class="dialog-content">
              <h3 class="dialog-title" id="modal-title" data-i18n="modal.confirm.title">${h("modal.confirm.title")}</h3>
              <p class="dialog-message" id="modal-message" data-i18n="messages.quitConfirm">${h("messages.quitConfirm")}</p>
              <div class="dialog-buttons">
                <button class="dialog-btn primary" id="modal-confirm" data-i18n="modal.confirm">${h("modal.confirm")}</button>
                <button class="dialog-btn secondary" id="modal-cancel" data-i18n="modal.cancel">${h("modal.cancel")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.comboDisplay=this.container.querySelector("#combo-display"),this.specialMoveDisplay=this.container.querySelector("#special-move-display");const e=document.getElementById("header-back-btn");e&&e.addEventListener("click",()=>{this.currentScreen==="game"?this.showSimpleConfirm(h("messages.quitConfirm"),h("modal.quitConfirm.title")).then(a=>{a&&this.showMenu()}):this.showMenu()}),this.addStyles(),this.setupHeaderEvents()}setupHeaderEvents(){document.getElementById("header-settings-btn")?.addEventListener("click",()=>{this.showSettings()}),document.getElementById("header-back-btn")?.addEventListener("click",()=>{this.handleBackButton()})}handleBackButton(){switch(this.currentScreen){case"settings":case"help":this.showMenu();break;case"difficulty":this.showMenu();break;case"game":this.gameState&&!this.gameState.isGameOver?confirm(h("messages.leaveGame"))&&this.showMenu():this.showMenu();break;default:this.showMenu();break}}handleComboEvent(e){if((e.type==="combo_started"||e.type==="combo_continued")&&(this.showComboUI(e.comboCount,e.player,e.comboType),this.showMessage(`🔥 ${e.comboCount} 連擊！`),this.container)){const a=this.container.getBoundingClientRect(),t=a.width/2,i=a.height/2;this.particleSystem.createChainEffect(t,i)}}showComboUI(e,a,t){if(!this.comboDisplay)return;const i=this.comboDisplay.querySelector(".combo-count"),s=this.comboDisplay.querySelector(".combo-text"),n=this.comboDisplay.querySelector(".combo-multiplier");i&&(i.textContent=e.toString()),s&&(s.textContent=h("combo.counter",{count:e})),n&&(n.style.display="none");const r={2:"#90ee90",3:"#ffa500",4:"#ff6347",5:"#ff1493",6:"#9932cc",7:"#ffd700"}[Math.min(e,7)]||"#ffd700";this.comboDisplay.style.background=`linear-gradient(135deg, ${r}, ${r}aa)`,this.comboDisplay.classList.remove("hidden"),this.comboDisplay.classList.add("combo-animation"),setTimeout(()=>{this.comboDisplay?.classList.add("hidden"),this.comboDisplay?.classList.remove("combo-animation")},3e3)}detectSpecialMoves(e,a,t,i){const s=ee.detectSpecialMove(e,a,t,i,this.gameState?.moveHistory.length||0,60);s.length>0&&s.forEach((n,o)=>{setTimeout(()=>{const r=h(`special.${n}`);this.showSpecialMoveUI(r,n),this.showMessage(`⚡ ${r}`)},o*1e3)})}showSpecialMoveUI(e,a){if(!this.specialMoveDisplay)return;const t=this.specialMoveDisplay.querySelector(".special-move-title"),i=this.specialMoveDisplay.querySelector(".special-move-subtitle");if(t&&(t.textContent=e),i){const o=h(`special.${a}.subtitle`);i.textContent=o}const n={corner_master:"#ffd700",mega_flip:"#ff4500",phoenix_rise:"#ff69b4",domination:"#9932cc",time_warp:"#8b00ff"}[a]||"#ffd700";t&&(t.style.color=n,t.style.textShadow=`
        0 0 20px ${n}88,
        0 0 40px ${n}66,
        0 4px 8px rgba(0, 0, 0, 0.8)
      `),this.specialMoveDisplay.classList.remove("hidden"),this.specialMoveDisplay.classList.add("special-move-animation"),setTimeout(()=>{this.specialMoveDisplay?.classList.add("hidden"),this.specialMoveDisplay?.classList.remove("special-move-animation")},2500)}refreshUI(){switch(this.currentScreen){case"menu":this.showMenu();break;case"settings":this.showSettings();break;case"help":this.showHelp();break;case"game":this.showGameScreen(),this.updateDisplay();break}}addStyles(){const e=document.createElement("style");e.textContent=`
      body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
      }
      
      #app {
        width: 100%;
        min-height: 100vh;
        height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      }
      
      #game-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      
      .super-reversi-app {
        width: 100%;
        height: 100%;
        max-width: 75rem;
        max-height: 56.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        font-family: 'Segoe UI', Arial, sans-serif;
        box-sizing: border-box;
      }
      
      .game-header {
        width: 100%;
        max-width: 50rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem;
        background: rgba(42, 42, 42, 0.9);
        border-radius: 0.75rem;
        margin-bottom: 1.25rem;
        box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,0.3);
        position: relative;
      }

      .header-back-btn {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background: rgba(102, 102, 102, 0.9);
        border: none;
        border-radius: 50%;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 10;
      }

      .header-back-btn:hover {
        background: rgba(119, 119, 119, 0.9);
        transform: translateY(-50%) scale(1.1);
      }
      
      .game-header h1 {
        color: #00ff7f;
        margin: 0;
        font-size: 1.75rem;
        text-shadow: 0 0 0.625rem rgba(0,255,127,0.5);
      }
      
      /* Shared Health Bar System */
      .shared-health-bar-container {
        width: 100%;
        max-width: 50rem;
        padding: 1rem 1.25rem;
        background: rgba(42, 42, 42, 0.9);
        border-radius: 0.75rem;
        margin-bottom: 1rem;
        box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        position: relative;
      }

      .player-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        min-width: 5rem;
      }

      .player-section.left {
        align-items: flex-start;
      }

      .player-section.right {
        align-items: flex-end;
      }

      .player-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        font-weight: bold;
      }

      .player-section.right .player-info {
        flex-direction: row-reverse;
      }

      .player-name {
        font-size: 0.875rem;
        text-shadow: 0 0 0.5rem rgba(255,255,255,0.3);
      }

      .player-icon {
        font-size: 1.125rem;
        filter: drop-shadow(0 0 0.5rem rgba(255,255,255,0.3));
      }

      .piece-count {
        font-size: 1.125rem;
        font-weight: bold;
        color: white;
        text-shadow: 0 0 0.5rem rgba(255,255,255,0.5);
        padding: 0.25rem 0.5rem;
        background: rgba(0,0,0,0.3);
        border-radius: 0.375rem;
        min-width: 2rem;
        text-align: center;
      }

      /* Shared Health Bar */
      .shared-health-bar {
        position: relative;
        flex: 1;
        height: 32px;
        background: rgba(0,0,0,0.6);
        border-radius: 16px;
        border: 2px solid rgba(255,255,255,0.3);
        overflow: hidden;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
      }

      .health-fill-black {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 50%;
        background: linear-gradient(90deg, #ff4444 0%, #cc0000 100%);
        box-shadow: 0 0 0.5rem rgba(255,68,68,0.6);
        transition: width 0.5s ease, box-shadow 0.3s ease;
        border-radius: 14px 0 0 14px;
      }

      .health-fill-white {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 50%;
        background: linear-gradient(270deg, #4488ff 0%, #0044cc 100%);
        box-shadow: 0 0 0.5rem rgba(68,136,255,0.6);
        transition: width 0.5s ease, box-shadow 0.3s ease;
        border-radius: 0 14px 14px 0;
      }

      /* VS Divider */
      .vs-divider {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.125rem;
        z-index: 10;
        transition: left 0.5s ease;
        background: rgba(42, 42, 42, 0.9);
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        border: 1px solid rgba(255,255,255,0.2);
      }

      .vs-text {
        color: #ffd700;
        font-size: 0.75rem;
        font-weight: bold;
        text-shadow: 0 0 0.5rem rgba(255,215,0,0.5);
        line-height: 1;
      }

      .turn-indicator {
        font-size: 0.625rem;
        color: #ccc;
        text-align: center;
        line-height: 1;
      }

      .turn-indicator span {
        color: #ffd700;
        font-weight: bold;
      }

      /* Damage Numbers Animation */
      .damage-numbers {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
      }

      .damage-number {
        position: absolute;
        font-weight: bold;
        font-size: 1.25rem;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        animation: damageFloat 1s ease-out forwards;
        pointer-events: none;
      }

      .damage-number.positive {
        color: #00ff7f;
      }

      .damage-number.negative {
        color: #ff4444;
      }

      @keyframes damageFloat {
        0% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        50% {
          opacity: 1;
          transform: translateY(-20px) scale(1.2);
        }
        100% {
          opacity: 0;
          transform: translateY(-40px) scale(0.8);
        }
      }

      /* Special Effects */
      .health-bar.critical {
        animation: criticalFlash 0.5s ease-in-out infinite alternate;
      }

      @keyframes criticalFlash {
        0% {
          box-shadow: 0 0 0.75rem rgba(255,68,68,0.3), inset 0 2px 4px rgba(0,0,0,0.3);
        }
        100% {
          box-shadow: 0 0 1.5rem rgba(255,68,68,0.8), inset 0 2px 4px rgba(0,0,0,0.3);
        }
      }

      .health-bar.shake {
        animation: healthShake 0.3s ease-in-out;
      }

      @keyframes healthShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-3px); }
        75% { transform: translateX(3px); }
      }

      /* Special Effects for Shared Health Bar */
      .health-fill-black.critical {
        animation: criticalPulse 1s ease-in-out infinite alternate;
      }

      .health-fill-white.critical {
        animation: criticalPulse 1s ease-in-out infinite alternate;
      }

      @keyframes criticalPulse {
        0% { opacity: 0.8; }
        100% { opacity: 1; }
      }

      .health-fill-black.dominant {
        box-shadow: 0 0 1rem rgba(255,68,68,0.8);
      }

      .health-fill-white.dominant {
        box-shadow: 0 0 1rem rgba(68,136,255,0.8);
      }

      .shared-health-bar.shake {
        animation: healthShake 0.3s ease-in-out;
      }

      .shared-health-bar.balanced {
        box-shadow: 0 0 0.5rem rgba(255,215,0,0.6);
        animation: balancedBreathing 2s ease-in-out infinite alternate;
      }

      .shared-health-bar.dramatic-shift {
        animation: dramaticShift 0.5s ease-in-out;
      }

      .health-fill-black.pulsing,
      .health-fill-white.pulsing {
        animation: dominantPulse 1s ease-in-out infinite alternate;
      }

      @keyframes balancedBreathing {
        0% { box-shadow: 0 0 0.5rem rgba(255,215,0,0.6); }
        100% { box-shadow: 0 0 1rem rgba(255,215,0,0.8); }
      }

      @keyframes dramaticShift {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
      }

      @keyframes dominantPulse {
        0% { opacity: 0.9; }
        100% { opacity: 1; }
      }

      /* Responsive Design for Shared Health Bar */
      @media (max-width: 768px) {
        .shared-health-bar-container {
          transform: scale(0.85);
          transform-origin: center top;
          margin: 0 auto 0.5rem;
          z-index: 100;
        }
      }

      @media (max-width: 480px) {
        .shared-health-bar-container {
          transform: scale(0.7);
          transform-origin: center top;
          margin: 0 auto 0.25rem;
          z-index: 100;
        }
      }

      @media (min-width: 1200px) {
        .shared-health-bar {
          height: 36px;
        }

        .player-name {
          font-size: 1rem;
        }

        .piece-count {
          font-size: 1.25rem;
        }

        .vs-text {
          font-size: 0.875rem;
        }

        .turn-indicator {
          font-size: 0.75rem;
        }
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .language-select {
        display: block;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        border: 1px solid #666;
        background: #333;
        color: white;
      }

      .screen-container {
        width: 100%;
        max-width: min(90vw, 56.25rem);
        height: auto;
        flex: 1;
        background: rgba(26, 26, 26, 0.95);
        border-radius: 0.75rem;
        padding: 1rem;
        box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.4);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
      
      .menu-screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
        padding: 2.5rem;
        animation: fadeIn 0.5s ease;
        height: 100%;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(1.25rem); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .menu-title {
        font-size: 2.25rem;
        color: #00ff7f;
        margin-bottom: 1.25rem;
        text-align: center;
        text-shadow: 0 0 1.25rem rgba(0,255,127,0.5);
      }
      
      .menu-button {
        display: block;
        width: 15.625rem;
        margin: 1rem auto;
        padding: 1.125rem 1.875rem;
        font-size: 1.125rem;
        font-weight: bold;
        background: linear-gradient(135deg, #00ff7f, #00cc65);
        color: #1a1a1a;
        border: none;
        border-radius: 0.625rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0.25rem 0.75rem rgba(0,255,127,0.3);
      }
      
      .menu-button:hover {
        transform: translateY(-0.125rem);
        box-shadow: 0 0.375rem 1.25rem rgba(0,255,127,0.5);
      }
      
      .menu-button:active {
        transform: translateY(0);
      }
      
      .difficulty-selector {
        display: flex;
        gap: 0.625rem;
        margin: 1.25rem 0;
      }
      
      .difficulty-button {
        padding: 0.625rem 1.25rem;
        background: #444;
        color: white;
        border: 0.125rem solid transparent;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: all 0.3s;
      }
      
      .difficulty-button.active {
        background: #00ff7f;
        color: #1a1a1a;
        border-color: #00ff7f;
      }
      
      .game-board {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        gap: 0.125rem;
        background: #1a3d1a;
        padding: 0.625rem;
        border-radius: 0.75rem;
        margin: 0.625rem auto;
        box-shadow: inset 0 0 1.25rem rgba(0,0,0,0.5);
        flex-shrink: 0;
      }
      
      @media (max-height: 43.75rem) {
        .game-board {
          width: min(21.875rem, 60vh);
          height: min(21.875rem, 60vh);
        }
      }
      
      .board-cell {
        background: #2d4a2d;
        border: 0.0625rem solid #1a3d1a;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
      }
      
      .board-cell:hover {
        background: #3a5a3a;
      }
      
      .board-cell.valid-move {
        background: #4a6a4a;
        box-shadow: inset 0 0 0.625rem rgba(0,255,127,0.3);
      }
      
      .board-cell.valid-move::after {
        content: '•';
        color: rgba(0,255,127,0.5);
        font-size: 1.5rem;
        position: absolute;
      }
      
      .board-cell.last-move {
        box-shadow: inset 0 0 0.9375rem rgba(255,215,0,0.5);
      }

      .mobility-indicator {
        position: absolute;
        top: 0.125rem;
        right: 0.125rem;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        font-size: 0.55rem;
        font-weight: bold;
        padding: 0.125rem 0.2rem;
        border-radius: 0.25rem;
        min-width: 1.2rem;
        text-align: center;
        z-index: 10;
        border: 0.125rem solid;
        font-family: 'Courier New', monospace;
      }

      .mobility-indicator.mobility-positive {
        border-color: #00ff7f;
        background: rgba(0, 0, 0, 0.85);
        color: #00ff7f;
        box-shadow: 0 0 0.3rem rgba(0, 255, 127, 0.5);
      }

      .mobility-indicator.mobility-negative {
        border-color: #ff4444;
        background: rgba(0, 0, 0, 0.85);
        color: #ff4444;
        box-shadow: 0 0 0.3rem rgba(255, 68, 68, 0.5);
      }

      .mobility-indicator.mobility-neutral {
        border-color: #ffaa00;
        background: rgba(0, 0, 0, 0.85);
        color: #ffaa00;
        box-shadow: 0 0 0.3rem rgba(255, 170, 0, 0.5);
      }
      
      .piece {
        width: 85%;
        height: 85%;
        border-radius: 50%;
        transition: all 0.3s ease;
        box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.4);
      }
      
      .piece-black {
        background: radial-gradient(circle at 30% 30%, #444, #000);
        border: 0.125rem solid #222;
      }
      
      .piece-white {
        background: radial-gradient(circle at 30% 30%, #fff, #ddd);
        border: 0.125rem solid #ccc;
      }
      
      @keyframes flipPiece {
        0% { transform: rotateY(0deg) scale(1); }
        50% { transform: rotateY(90deg) scale(0.8); }
        100% { transform: rotateY(180deg) scale(1); }
      }
      
      .piece.flipping {
        animation: flipPiece 0.5s ease-in-out;
      }
      
      @keyframes placePiece {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        100% { transform: scale(1) rotate(360deg); opacity: 1; }
      }
      
      .piece.placing {
        animation: placePiece 0.4s ease-out;
      }
      
      .game-screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 0.625rem;
      }
      
      .game-controls {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 1.25rem;
      }
      
      .back-button {
        padding: 0.75rem 1.5rem;
        background: #666;
        color: white;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.3s, transform 0.3s;
        white-space: nowrap; /* Prevent text wrap */
      }
      
      .back-button:hover {
        background: #777;
        transform: translateX(-0.3125rem);
      }
      
      .game-info {
        text-align: center;
        color: #ccc;
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.3125rem;
        flex-shrink: 0;
      }

      .game-info-compact {
        text-align: center;
        color: #ccc;
        font-size: 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      
      #ai-status {
        height: 1.25rem;
        font-size: 0.875rem;
      }
      
      .game-over-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(42, 42, 42, 0.98);
        padding: 2.5rem;
        border-radius: 1.25rem;
        text-align: center;
        box-shadow: 0 0.625rem 2.5rem rgba(0,0,0,0.5);
        z-index: 1000;
        animation: modalAppear 0.3s ease;
      }
      
      @keyframes modalAppear {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      }
      
      .game-over-title {
        font-size: 2rem;
        color: #00ff7f;
        margin-bottom: 1.25rem;
      }
      
      .final-scores {
        font-size: 1.5rem;
        color: white;
        margin: 1.25rem 0;
      }
      
      .modal-buttons {
        display: flex;
        gap: 1.25rem;
        justify-content: center;
        margin-top: 1.875rem;
      }
      
      .ai-thinking {
        display: inline-block;
        color: #ffd700;
        font-style: italic;
        animation: pulse 1s infinite;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      
      .settings-screen {
        color: white;
        flex: 1;
        overflow-y: auto;
        padding-right: 0.625rem;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }
      
      .settings-group {
        margin: 1.5625rem 0;
        text-align: center;
      }
      
      .settings-group h3 {
        color: #00ff7f;
        margin-bottom: 0.9375rem;
      }

      .settings-group label {
        display: block;
        text-align: center;
        margin: 0.5rem 0;
        font-size: 1.25rem;
      }
      
      .settings-screen label {
        display: block;
        margin: 0.625rem 0;
        font-size: 1rem;
        cursor: pointer;
      }
      
      .settings-screen input[type="checkbox"] {
        margin-right: 0.625rem;
        cursor: pointer;
      }
      
      .help-screen {
        color: #ccc;
        line-height: 1.6;
        flex: 1;
        overflow-y: auto; /* Allow scrolling if content is too long */
        padding-right: 0.625rem;
        padding-left: 1rem;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }
      
      .help-screen h2 {
        color: #00ff7f;
        margin-bottom: 0.9375rem;
        font-size: 1.5rem;
      }
      
      .help-screen h3 {
        color: #ffd700;
        margin-top: 0.9375rem;
        margin-bottom: 0.5rem;
        font-size: 1.125rem;
      }
      
      .help-screen ul {
        display: block;
        text-align: left;
        margin: 0 0 0.625rem;
        padding-left: 1.5rem;
      }
      
      .help-screen li {
        margin: 0.3125rem 0;
        font-size: 0.875rem;
      }
      
      .help-screen p {
        margin: 0.5rem 0;
        font-size: 0.875rem;
      }
      
      /* Custom scrollbar for help screen */
      .help-screen::-webkit-scrollbar {
        width: 0.5rem;
      }
      
      .help-screen::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 0.25rem;
      }
      
      .help-screen::-webkit-scrollbar-thumb {
        background: rgba(0, 255, 127, 0.5);
        border-radius: 0.25rem;
      }
      
      .help-screen::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 255, 127, 0.7);
      }

      /* ========== 戰鬥UI樣式 ========== */

      .battle-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        font-family: 'Orbitron', 'Arial', sans-serif;
      }

      .combo-display {
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px 40px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        gap: 20px;
        background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
        box-shadow: 0 0 60px rgba(255, 107, 107, 0.9), 0 10px 40px rgba(0, 0, 0, 0.7);
        transition: all 0.3s ease;
      }

      .combo-display.hidden {
        display: none;
      }

      .combo-display.combo-animation {
        animation: combo-bounce 0.6s ease;
      }

      .combo-count {
        font-size: 72px;
        font-weight: bold;
        color: #fff;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px currentColor;
      }

      .combo-text {
        font-size: 32px;
        color: #fff;
        font-weight: bold;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px currentColor;
      }

      .combo-multiplier {
        font-size: 28px;
        color: #ffeb3b;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.3);
        padding: 8px 16px;
        border-radius: 20px;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px currentColor;
      }

      .special-move-display {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 10000;
      }

      .special-move-display.hidden {
        display: none;
      }

      .special-move-display.special-move-animation {
        animation: special-move-intro 1.2s ease;
      }

      .special-move-title {
        font-size: 64px;
        font-weight: bold;
        color: #ffd700;
        text-shadow:
          0 0 20px rgba(255, 215, 0, 0.8),
          0 0 40px rgba(255, 215, 0, 0.6),
          0 4px 8px rgba(0, 0, 0, 0.8);
        margin-bottom: 10px;
        letter-spacing: 2px;
        animation: special-title-glow 2s ease-in-out infinite alternate;
      }

      .special-move-subtitle {
        font-size: 28px;
        color: #ffffff;
        text-shadow:
          0 0 15px rgba(255, 255, 255, 0.8),
          0 4px 8px rgba(0, 0, 0, 0.8);
        letter-spacing: 1px;
        opacity: 0.9;
      }

      /* 戰鬥動畫定義 */
      @keyframes combo-bounce {
        0% {
          transform: translateX(-50%) scale(0.8);
          opacity: 0;
        }
        50% {
          transform: translateX(-50%) scale(1.1);
        }
        100% {
          transform: translateX(-50%) scale(1);
          opacity: 1;
        }
      }

      @keyframes special-move-intro {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }

      @keyframes special-title-glow {
        0% {
          text-shadow:
            0 0 20px rgba(255, 215, 0, 0.8),
            0 0 40px rgba(255, 215, 0, 0.6),
            0 4px 8px rgba(0, 0, 0, 0.8);
        }
        100% {
          text-shadow:
            0 0 30px rgba(255, 215, 0, 1.0),
            0 0 60px rgba(255, 215, 0, 0.8),
            0 4px 8px rgba(0, 0, 0, 0.8);
        }
      }

      /* 手機版響應式設計 */
      @media (max-width: 768px) {
        .super-reversi-app {
          padding: 0 !important;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .screen-container {
          max-width: 100% !important;
          padding: 0.5rem !important;
          margin-top: 0.5rem !important;
        }

        .game-board {
          width: calc(100vw - 1rem) !important;
          height: calc(100vw - 1rem) !important;
          max-height: calc(100vh - 14rem) !important;
          padding: 2px !important;
          margin: 0.5rem auto 0 auto !important;
        }

        .header-back-btn {
          width: 35px !important;
          height: 35px !important;
          font-size: 18px !important;
        }
      }

      @media (max-width: 480px) {
        .screen-container {
          padding: 0.25rem !important;
          margin-top: 0.25rem !important;
        }

        .game-board {
          width: calc(100vw - 0.5rem) !important;
          height: calc(100vw - 0.5rem) !important;
          max-height: calc(100vh - 12rem) !important;
          margin: 0.5rem auto 0 auto !important;
        }

        .header-back-btn {
          width: 30px !important;
          height: 30px !important;
          font-size: 16px !important;
        }
      }
    `,document.head.appendChild(e)}showMenu(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="menu";const a=document.getElementById("game-header"),t=document.getElementById("header-back-btn"),i=document.getElementById("shared-health-bar-container");a&&(a.style.display="flex"),t&&(t.style.display="none"),i&&(i.style.display="none");const s=document.getElementById("black-score"),n=document.getElementById("white-score"),o=document.getElementById("current-turn");s&&(s.textContent=""),n&&(n.textContent=""),o&&(o.textContent=""),this.gameState=null,e.innerHTML=`
      <div class="menu-screen">
        <h2 class="menu-title">${h("menu.chooseMode")}</h2>
        <button class="menu-button" id="pvp-btn">👥 ${h("menu.pvp")}</button>
        <button class="menu-button" id="pvc-btn">🤖 ${h("menu.pvc")}</button>
        <button class="menu-button" id="menu-settings-btn">⚙️ ${h("menu.settings")}</button>
        <button class="menu-button" id="help-btn">❓ ${h("menu.help")}</button>
      </div>
    `,document.getElementById("pvp-btn")?.addEventListener("click",()=>{this.startNewGame("pvp")}),document.getElementById("pvc-btn")?.addEventListener("click",()=>{this.showAIDifficultyMenu()}),document.getElementById("menu-settings-btn")?.addEventListener("click",()=>{this.showSettings()}),document.getElementById("help-btn")?.addEventListener("click",()=>{this.showHelp()})}showAIDifficultyMenu(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="difficulty";const a=document.getElementById("header-back-btn");a&&(a.style.display="flex"),e.innerHTML=`
      <div class="menu-screen">
        <h2 class="menu-title">${h("menu.selectDifficulty")}</h2>
        <div class="difficulty-selector">
          <button class="difficulty-button active" data-diff="easy">${h("menu.easy")}</button>
          <button class="difficulty-button" data-diff="medium">${h("menu.medium")}</button>
          <button class="difficulty-button" data-diff="hard">${h("menu.hard")}</button>
        </div>
        <p style="color: #ccc; text-align: center; margin: 1.25rem 0;">
          <span id="diff-desc">${h("menu.easyDesc")}</span>
        </p>
        <button class="menu-button" id="start-ai-btn">${h("menu.startGame")}</button>
      </div>
    `;let t="easy";const i=document.querySelectorAll(".difficulty-button"),s=document.getElementById("diff-desc"),n={easy:h("menu.easyDesc"),medium:h("menu.mediumDesc"),hard:h("menu.hardDesc")};i.forEach(o=>{o.addEventListener("click",()=>{i.forEach(r=>r.classList.remove("active")),o.classList.add("active"),t=o.getAttribute("data-diff"),s&&(s.textContent=n[t])})}),document.getElementById("start-ai-btn")?.addEventListener("click",()=>{this.startNewGame("pvc",t)})}showSettings(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="settings";const a=document.getElementById("header-back-btn");a&&(a.style.display="flex"),e.innerHTML=`
      <div class="settings-screen">
        <h2 style="color: #00ff7f; margin-bottom: 1.25rem;">${h("settings.title")}</h2>

        <div class="settings-group">
          <h3>${h("settings.language")}</h3>
          <select id="language-select" class="language-select">
            <option value="en">English</option>
            <option value="zh-Hant">繁體中文</option>
            <option value="zh-Hans">简体中文</option>
          </select>
        </div>

        <div class="settings-group">
          <h3>${h("settings.visual")}</h3>
          <label>
            <input type="checkbox" id="show-valid" checked> ${h("settings.showValid")}
          </label>
          <label>
            <input type="checkbox" id="show-last" checked> ${h("settings.showLast")}
          </label>
          <label>
            <input type="checkbox" id="show-mobility"> ${h("settings.showMobility")}
          </label>
          <label>
            <input type="checkbox" id="animations" checked> ${h("settings.animations")}
          </label>
        </div>

        <div class="settings-group">
          <h3>${h("settings.game")}</h3>
          <label>
            <input type="checkbox" id="auto-pass" checked> ${h("settings.autoPass")}
          </label>
          <label>
            <input type="checkbox" id="confirm-moves"> ${h("settings.confirm")}
          </label>
        </div>

        <button class="menu-button" id="save-settings" style="margin-top: 1.25rem;">
          ${h("settings.save")}
        </button>
      </div>
    `;const t=this.getSettings();document.getElementById("language-select").value=t.language||"en",document.getElementById("show-valid").checked=t.showValid,document.getElementById("show-last").checked=t.showLast,document.getElementById("show-mobility").checked=t.showMobility,document.getElementById("animations").checked=t.animations,document.getElementById("auto-pass").checked=t.autoPass,document.getElementById("confirm-moves").checked=t.confirmMoves,document.getElementById("save-settings")?.addEventListener("click",()=>{const i=document.getElementById("language-select").value,s={language:i,showValid:document.getElementById("show-valid")?.checked,showLast:document.getElementById("show-last")?.checked,showMobility:document.getElementById("show-mobility")?.checked,animations:document.getElementById("animations")?.checked,autoPass:document.getElementById("auto-pass")?.checked,confirmMoves:document.getElementById("confirm-moves")?.checked};localStorage.setItem("reversi-settings",JSON.stringify(s)),localStorage.setItem("language",i),L(i),B(),this.particleSystem.setEnabled(s.animations),this.modalService&&this.modalService.showSuccess(h("settings.saved"),h("modal.settingsSaved.title")),this.refreshUI()})}showHelp(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="help";const a=document.getElementById("header-back-btn");a&&(a.style.display="flex"),e.innerHTML=`
      <div class="help-screen">
        <h2>${h("help.title")}</h2>

        <h3>${h("help.objectiveTitle")}</h3>
        <p>${h("help.objectiveText")}</p>

        <h3>${h("help.rulesTitle")}</h3>
        <ul>
          <li>${h("help.rules1")}</li>
          <li>${h("help.rules2")}</li>
          <li>${h("help.rules3")}</li>
          <li>${h("help.rules4")}</li>
          <li>${h("help.rules5")}</li>
          <li>${h("help.rules6")}</li>
        </ul>

        <h3>${h("help.strategyTitle")}</h3>
        <ul>
          <li>${h("help.strategy1")}</li>
          <li>${h("help.strategy2")}</li>
          <li>${h("help.strategy3")}</li>
          <li>${h("help.strategy4")}</li>
        </ul>

        <h3>${h("help.controlsTitle")}</h3>
        <ul>
          <li>${h("help.controls1")}</li>
          <li>${h("help.controls2")}</li>
          <li>${h("help.controls3")}</li>
        </ul>
      </div>
    `}startNewGame(e,a="easy"){this.gameState={board:this.createInitialBoard(),currentPlayer:p,blackScore:2,whiteScore:2,gameMode:e,isGameOver:!1,validMoves:new Set,moveHistory:[],aiDifficulty:a},this.updateValidMoves(),this.showGameScreen(),this.updateDisplay()}createInitialBoard(){const e=new Array(64).fill(S);return e[27]=y,e[28]=p,e[35]=p,e[36]=y,e}showGameScreen(){const e=document.getElementById("screen-container");if(!e||!this.gameState)return;this.currentScreen="game";const a=document.getElementById("game-header"),t=document.getElementById("header-back-btn"),i=document.getElementById("shared-health-bar-container");a&&(a.style.display="flex"),t&&(t.style.display="flex"),i&&(i.style.display="flex");const s=this.gameState.gameMode==="pvp"?h("game.pvp"):`${h("game.pvai")} (${h("difficulty."+this.gameState.aiDifficulty)})`;e.innerHTML=`
      <div class="game-screen">
        <div class="game-info-compact">
          <div>${h("game.mode")}: ${s}</div>
          <div id="ai-status"></div>
        </div>
        <div class="game-board" id="game-board"></div>
        <div id="game-over-modal" style="display: none;"></div>
      </div>
    `,this.createBoardCells()}createBoardCells(){const e=document.getElementById("game-board");if(!(!e||!this.gameState)){e.innerHTML="";for(let a=0;a<64;a++){const t=document.createElement("div");t.className="board-cell",t.dataset.position=a.toString(),t.addEventListener("click",()=>{!this.isProcessingMove&&!this.aiThinking&&this.handleCellClick(a)}),e.appendChild(t)}this.renderBoard()}}renderBoard(){if(!this.gameState)return;const e=this.getSettings(),a=new Map;if(e.showMobility&&this.gameState.validMoves.size>0)for(const t of this.gameState.validMoves){const i=this.calculateMoveMobility(t,this.gameState.currentPlayer);a.set(t,i)}for(let t=0;t<64;t++){const i=document.querySelector(`[data-position="${t}"]`);if(i){if(i.className="board-cell",i.innerHTML="",this.gameState.board[t]!==S){const s=document.createElement("div");s.className=`piece ${this.gameState.board[t]===p?"piece-black":"piece-white"}`,i.appendChild(s)}if(e.showValid&&this.gameState.validMoves.has(t)&&(i.classList.add("valid-move"),e.showMobility&&a.has(t))){const s=a.get(t),n=document.createElement("div");n.className="mobility-indicator";const o=s.player-s.opponent;n.textContent=o>0?`+${o}`:`${o}`,o>0?n.classList.add("mobility-positive"):o<0?n.classList.add("mobility-negative"):n.classList.add("mobility-neutral"),i.appendChild(n)}if(e.showLast&&this.gameState.moveHistory.length>0){const s=this.gameState.moveHistory[this.gameState.moveHistory.length-1];s&&s.position===t&&i.classList.add("last-move")}}}}getSettings(){const e=localStorage.getItem("reversi-settings");return e?JSON.parse(e):{language:localStorage.getItem("language")||"en",showValid:!0,showLast:!0,showMobility:!1,animations:!0,autoPass:!0,confirmMoves:!1}}async handleCellClick(e){if(!this.gameState||this.gameState.isGameOver||!this.gameState.validMoves.has(e))return;const a=this.getSettings();this.gameState.gameMode==="pvc"&&this.gameState.currentPlayer===p&&a.confirmMoves&&!await this.showSimpleConfirm(h("messages.moveConfirm"),h("modal.moveConfirm.title"))||this.makeMove(e)}makeMove(e){if(!this.gameState)return;this.isProcessingMove=!0;const a=this.getSettings(),t=this.getFlippedPieces(e,this.gameState.currentPlayer),i={corner:e===0||e===7||e===56||e===63,edge:this.isEdgePosition(e),massive:t.length>=10,chain:this.isChainMove(t),comeback:this.isComebackMove(),domination:this.isDominationMove()},s=this.particleSystem.calculateGrade(t.length,e,i),n=document.querySelector(`[data-position="${e}"]`);if(n){const o=n.getBoundingClientRect(),r=this.container.getBoundingClientRect(),l=o.left+o.width/2-r.left,c=o.top+o.height/2-r.top,d=t.map(m=>{const u=document.querySelector(`[data-position="${m}"]`);if(u){const g=u.getBoundingClientRect();return{x:g.left+g.width/2-r.left,y:g.top+g.height/2-r.top}}return{x:l,y:c}});a.animations&&(this.particleSystem.triggerMoveEffect(l,c,s,t.length,i,d),i.chain&&this.particleSystem.createChainEffect(l,c),this.showGradeIndicator(s,l,c))}if(this.gameState.moveHistory.push({position:e,player:this.gameState.currentPlayer,flipped:t}),this.triggerScreenShake(s),this.gameState.board[e]=this.gameState.currentPlayer,n){const o=document.createElement("div");o.className=`piece ${this.gameState.currentPlayer===p?"piece-black":"piece-white"} placing`,n.innerHTML="",n.appendChild(o)}a.animations?setTimeout(()=>{this.flipPiecesWithEffects(t,s);const o=t.length*80+300;setTimeout(()=>{this.afterMove()},o)},200):(this.flipPiecesWithEffects(t,s),this.afterMove())}showGradeIndicator(e,a,t){const i=document.createElement("div");switch(i.style.position="absolute",i.style.left=`${a}px`,i.style.top=`${t-50}px`,i.style.transform="translateX(-50%)",i.style.fontSize="3rem",i.style.fontWeight="bold",i.style.zIndex="200",i.style.pointerEvents="none",i.style.animation="gradePopup 1s ease-out forwards",e){case"SSS":i.textContent="SSS",i.style.color="#ff0080",i.style.textShadow="0 0 1.875rem #ff0080, 0 0 3.75rem #ff69b4",i.style.fontSize="3.5rem",i.style.animation="gradePopup 2s ease-out forwards, rainbow 2s infinite";break;case"SS":i.textContent="SS",i.style.color="#9932cc",i.style.textShadow="0 0 1.5625rem #9932cc, 0 0 3.125rem #8b00ff",i.style.fontSize="3.25rem",i.style.animation="gradePopup 1.5s ease-out forwards, glow 1.5s infinite";break;case"S":i.textContent="S",i.style.color="#ff69b4",i.style.textShadow="0 0 1.25rem #ff69b4",i.style.fontSize="3rem";break;case"A":i.textContent="A",i.style.color="#ffd700",i.style.textShadow="0 0 1.25rem #ffd700";break;case"B":i.textContent="B",i.style.color="#00ff7f",i.style.textShadow="0 0 0.9375rem #00ff7f";break;case"C":i.textContent="C",i.style.color="#888888",i.style.textShadow="0 0 0.625rem #888888";break}if(!document.getElementById("grade-animation-style")){const s=document.createElement("style");s.id="grade-animation-style",s.textContent=`
        @keyframes gradePopup {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(0) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) translateY(-1.25rem) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-2.5rem) scale(1);
          }
        }
        
        @keyframes rainbow {
          0% { color: #ff0000; }
          16% { color: #ff8000; }
          32% { color: #ffff00; }
          48% { color: #00ff00; }
          64% { color: #0080ff; }
          80% { color: #8000ff; }
          100% { color: #ff0080; }
        }
        
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 1.5625rem #9932cc, 0 0 3.125rem #8b00ff;
          }
          50% { 
            text-shadow: 0 0 2.5rem #9932cc, 0 0 5rem #8b00ff, 0 0 7.5rem #ff00ff;
          }
        }
      `,document.head.appendChild(s)}this.container?.appendChild(i),setTimeout(()=>{i.remove()},1e3)}flipPiecesWithEffects(e,a){if(!this.gameState)return;this.getSettings().animations?e.forEach((i,s)=>{setTimeout(()=>{this.gameState.board[i]=this.gameState.currentPlayer;const n=document.querySelector(`[data-position="${i}"]`);if(n){const o=n.getBoundingClientRect(),r=this.container.getBoundingClientRect(),l=o.left+o.width/2-r.left,c=o.top+o.height/2-r.top,d=this.gameState.currentPlayer===p?"#000000":"#ffffff";this.particleSystem.createFlipEffect(l,c,d,a);const m=n.querySelector(".piece");m&&(m.classList.add("flipping"),setTimeout(()=>{m.className=`piece ${this.gameState.currentPlayer===p?"piece-black":"piece-white"}`},250))}},s*80)}):e.forEach(i=>{this.gameState.board[i]=this.gameState.currentPlayer;const s=document.querySelector(`[data-position="${i}"]`);if(s){const n=s.querySelector(".piece");n&&(n.className=`piece ${this.gameState.currentPlayer===p?"piece-black":"piece-white"}`)}})}flipPieces(e){if(!this.gameState)return;const a=this.getSettings();e.forEach(t=>{this.gameState.board[t]=this.gameState.currentPlayer;const i=document.querySelector(`[data-position="${t}"]`);if(i){const s=i.querySelector(".piece");s&&a.animations?(s.classList.add("flipping"),setTimeout(()=>{s.className=`piece ${this.gameState.currentPlayer===p?"piece-black":"piece-white"}`},250)):s&&(s.className=`piece ${this.gameState.currentPlayer===p?"piece-black":"piece-white"}`)}})}afterMove(){if(!this.gameState)return;this.updateScores(),this.gameState.currentPlayer=this.gameState.currentPlayer===p?y:p,this.updateValidMoves();const e=this.gameState.currentPlayer===p?y:p,a=this.gameState.validMoves.size>0,t=this.gameState.moveHistory[this.gameState.moveHistory.length-1];t&&(this.comboSystem.processMove(e===p?1:2,a,t.flipped.length),this.detectSpecialMoves(t.position,t.flipped,e===p?this.gameState.blackScore:this.gameState.whiteScore,e===p?this.gameState.whiteScore:this.gameState.blackScore)),this.checkGameStatus()||(this.updateDisplay(),this.gameState.gameMode==="pvc"&&this.gameState.currentPlayer===y&&this.makeAIMove()),this.isProcessingMove=!1}updateValidMoves(){if(this.gameState){this.gameState.validMoves.clear();for(let e=0;e<64;e++)this.gameState.board[e]===S&&this.isValidMove(e,this.gameState.currentPlayer)&&this.gameState.validMoves.add(e)}}isValidMove(e,a){if(!this.gameState||this.gameState.board[e]!==S)return!1;for(const[t,i]of E)if(this.checkDirection(e,a,t||0,i||0).length>0)return!0;return!1}checkDirection(e,a,t,i){if(!this.gameState)return[];const s=[],n=Math.floor(e/8),o=e%8,r=a===p?y:p;let l=n+i,c=o+t;for(;l>=0&&l<8&&c>=0&&c<8;){const d=l*8+c;if(this.gameState.board[d]===S)return[];if(this.gameState.board[d]===r)s.push(d);else return s.length>0?s:[];l+=i,c+=t}return[]}getFlippedPieces(e,a){const t=[];for(const[i,s]of E){const n=this.checkDirection(e,a,i,s);t.push(...n)}return t}calculateMoveMobility(e,a){if(!this.gameState)return{player:0,opponent:0};const t=[...this.gameState.board],i=this.getFlippedPieces(e,a);t[e]=a;for(const r of i)t[r]=a;const s=a===p?y:p;let n=0;for(let r=0;r<64;r++)t[r]===S&&this.isValidMoveOnBoard(r,s,t)&&n++;let o=0;for(let r=0;r<64;r++)t[r]===S&&this.isValidMoveOnBoard(r,a,t)&&o++;return{player:o,opponent:n}}isValidMoveOnBoard(e,a,t){if(t[e]!==S)return!1;for(const[i,s]of E)if(this.checkDirectionOnBoard(e,a,i||0,s||0,t).length>0)return!0;return!1}checkDirectionOnBoard(e,a,t,i,s){const n=[],o=Math.floor(e/8),r=e%8,l=a===p?y:p;let c=o+i,d=r+t;for(;c>=0&&c<8&&d>=0&&d<8;){const m=c*8+d;if(s[m]===S)return[];if(s[m]===l)n.push(m);else return n.length>0?n:[];c+=i,d+=t}return[]}updateScores(){if(!this.gameState)return;const e=this.gameState.blackScore,a=this.gameState.whiteScore;let t=0,i=0;for(const s of this.gameState.board)s===p?t++:s===y&&i++;this.gameState.blackScore=t,this.gameState.whiteScore=i,e!==t&&this.animateSharedHealthChange("black",e,t),a!==i&&this.animateSharedHealthChange("white",a,i)}checkGameStatus(){if(!this.gameState)return!1;if(this.gameState.validMoves.size===0){if(this.gameState.currentPlayer=this.gameState.currentPlayer===p?y:p,this.updateValidMoves(),this.gameState.validMoves.size===0)return this.gameOver(),!0;if(this.getSettings().autoPass){const a=this.gameState.currentPlayer===p?"Black":"White";this.showMessage(`No valid moves - passing to ${a}`)}}return!1}gameOver(){if(!this.gameState)return;this.gameState.isGameOver=!0;let e,a;this.gameState.blackScore>this.gameState.whiteScore?(e=h("game.blackWins"),a="#000"):this.gameState.whiteScore>this.gameState.blackScore?(e=h("game.whiteWins"),a="#fff"):(e=h("game.tie"),a="#ffd700");const t=document.getElementById("game-over-modal");t&&(t.style.display="block",t.className="game-over-modal",t.innerHTML=`
        <h2 class="game-over-title">🏆 ${h("game.gameOverTitle")}</h2>
        <div class="final-scores">
          <p style="font-size: 2.25rem; color: ${a}; margin: 1.25rem 0;">
            ${e}
          </p>
          <p>⚫ ${h("game.black")}: ${this.gameState.blackScore}</p>
          <p>⚪ ${h("game.white")}: ${this.gameState.whiteScore}</p>
          <p style="margin-top: 1.25rem; font-size: 1.125rem;">
            ${h("game.totalMoves")}: ${this.gameState.moveHistory.length}
          </p>
        </div>
        <div class="modal-buttons">
          <button class="menu-button" id="play-again">${h("game.playAgain")}</button>
          <button class="menu-button" id="main-menu">${h("game.mainMenu")}</button>
        </div>
      `,document.getElementById("play-again")?.addEventListener("click",()=>{t.style.display="none",this.startNewGame(this.gameState.gameMode,this.gameState.aiDifficulty)}),document.getElementById("main-menu")?.addEventListener("click",()=>{t.style.display="none",this.showMenu()}))}animateSharedHealthChange(e,a,t){const i=t-a,s=document.querySelector(".shared-health-bar");Math.abs(i)>=5&&s&&(s.classList.add("shake"),setTimeout(()=>s.classList.remove("shake"),300)),i!==0&&this.showSharedDamageNumber(e,i)}showSharedDamageNumber(e,a){const t=document.getElementById("damage-numbers"),i=document.querySelector(`.player-section.${e==="black"?"left":"right"}`);if(!t||!i)return;const s=document.createElement("div");s.className=`damage-number ${a>0?"positive":"negative"}`,s.textContent=a>0?`+${a}`:a.toString();const n=i.getBoundingClientRect(),o=t.getBoundingClientRect();s.style.left=`${n.left-o.left+n.width/2}px`,s.style.top=`${n.top-o.top-10}px`,s.style.transform="translateX(-50%)",t.appendChild(s),setTimeout(()=>{s.parentNode&&s.parentNode.removeChild(s)},1e3)}showDamageNumber(e,a){this.showSharedDamageNumber(e,a)}updateSharedHealthBar(){if(!this.gameState)return;const e=document.getElementById("black-fill"),a=document.getElementById("white-fill"),t=document.getElementById("black-count"),i=document.getElementById("white-count"),s=document.getElementById("current-turn-shared");if(!e||!a||!t||!i||!s)return;const n=this.gameState.blackScore+this.gameState.whiteScore,o=n>0?this.gameState.blackScore/n*100:50,r=n>0?this.gameState.whiteScore/n*100:50;e.style.width=`${o}%`,a.style.width=`${r}%`,t.textContent=this.gameState.blackScore.toString(),i.textContent=this.gameState.whiteScore.toString();const l=this.gameState.currentPlayer===p?h("game.black"):h("game.white");s.innerHTML=`<span>${l}</span>`;const c=e,d=a;o<15?c.classList.add("critical"):c.classList.remove("critical"),r<15?d.classList.add("critical"):d.classList.remove("critical"),o>75?(c.classList.add("dominant"),d.classList.remove("dominant")):r>75?(d.classList.add("dominant"),c.classList.remove("dominant")):(c.classList.remove("dominant"),d.classList.remove("dominant")),this.updateVSDividerPosition(o),this.triggerSpecialHealthEffects(o,r)}updateVSDividerPosition(e){const a=document.getElementById("vs-divider");a&&(a.style.left=`${e}%`)}triggerSpecialHealthEffects(e,a){const t=document.querySelector(".shared-health-bar"),i=document.getElementById("black-fill"),s=document.getElementById("white-fill");if(!t||!i||!s)return;t.classList.remove("balanced","dramatic-shift"),i.classList.remove("pulsing"),s.classList.remove("pulsing"),e>=45&&e<=55&&t.classList.add("balanced"),Math.abs(e-50)>35&&(t.classList.add("dramatic-shift"),e>65?i.classList.add("pulsing"):a>65&&s.classList.add("pulsing"),setTimeout(()=>{t.classList.remove("dramatic-shift")},1500))}updateDisplay(){if(!this.gameState)return;this.updateSharedHealthBar();const e=document.getElementById("black-score"),a=document.getElementById("white-score"),t=document.getElementById("current-turn");if(e&&(e.textContent=`⚫ ${h("game.black")}: ${this.gameState.blackScore}`),a&&(a.textContent=`⚪ ${h("game.white")}: ${this.gameState.whiteScore}`),t){const s=this.gameState.currentPlayer===p?h("game.black"):h("game.white");t.innerHTML=`${h("game.current")}: <span style="color: ${this.gameState.currentPlayer===p?"#000":"#fff"};">${s}</span>`}const i=document.getElementById("turn-indicator");if(i){const s=this.gameState.currentPlayer===p?"#000":"#fff",n=this.gameState.currentPlayer===p?h("game.black"):h("game.white");i.innerHTML=`${h("game.currentTurn")} <span style="color: ${s}; font-weight: bold;">${n}</span>`}this.renderBoard()}showMessage(e){const a=document.getElementById("ai-status");a&&(a.textContent=e,setTimeout(()=>{a.textContent=""},2e3))}triggerScreenShake(e){if(!this.container||!this.getSettings().animations)return;let t=0,i=0;switch(e){case"SSS":t=8,i=600;break;case"SS":t=7,i=550;break;case"S":t=12,i=800;break;case"A":t=6,i=500;break;case"B":t=3,i=300;break;case"C":return}const s=this.container.querySelector(".super-reversi-app");if(s){if(s.style.animation=`shake ${i}ms ease-in-out`,!document.getElementById("shake-animation")){const n=document.createElement("style");n.id="shake-animation",n.textContent=`
          @keyframes shake {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            10% { transform: translate(-${t}px, -${t/2}px) rotate(-1deg); }
            20% { transform: translate(${t}px, -${t}px) rotate(1deg); }
            30% { transform: translate(-${t}px, ${t/2}px) rotate(0deg); }
            40% { transform: translate(${t}px, ${t}px) rotate(1deg); }
            50% { transform: translate(-${t/2}px, -${t}px) rotate(-1deg); }
            60% { transform: translate(${t/2}px, ${t}px) rotate(0deg); }
            70% { transform: translate(-${t/2}px, ${t/2}px) rotate(-1deg); }
            80% { transform: translate(${t/2}px, -${t/2}px) rotate(1deg); }
            90% { transform: translate(-${t/4}px, ${t/4}px) rotate(0deg); }
          }
        `,document.head.appendChild(n)}setTimeout(()=>{s.style.animation=""},i)}}makeAIMove(){if(!this.gameState||this.gameState.validMoves.size===0)return;this.aiThinking=!0;const e=document.getElementById("ai-status");e&&(e.innerHTML='<span class="ai-thinking">AI is thinking...</span>'),setTimeout(()=>{const a=this.selectAIMove();a!==-1&&this.makeMove(a),e&&(e.textContent=""),this.aiThinking=!1},800)}selectAIMove(){if(!this.gameState)return-1;const e=Array.from(this.gameState.validMoves);if(e.length===0)return-1;switch(this.gameState.aiDifficulty){case"easy":return this.selectRandomMove(e);case"medium":return this.selectGreedyMove(e);case"hard":return this.selectStrategicMove(e);default:return e[0]??0}}selectRandomMove(e){return e[Math.floor(Math.random()*e.length)]??0}selectGreedyMove(e){if(!this.gameState)return e[0]??0;let a=e[0]??0,t=0;for(const i of e){const s=this.getFlippedPieces(i,y).length;s>t&&(t=s,a=i)}return a}selectStrategicMove(e){if(!this.gameState)return e[0]??0;const a=[120,-20,20,5,5,20,-20,120,-20,-40,-5,-5,-5,-5,-40,-20,20,-5,15,3,3,15,-5,20,5,-5,3,3,3,3,-5,5,5,-5,3,3,3,3,-5,5,20,-5,15,3,3,15,-5,20,-20,-40,-5,-5,-5,-5,-40,-20,120,-20,20,5,5,20,-20,120];let t=e[0]??0,i=-1e3;for(const s of e){const n=this.getFlippedPieces(s,y).length,r=(a[s]??0)+n*10;r>i&&(i=r,t=s)}return t}isEdgePosition(e){const a=Math.floor(e/8),t=e%8;return(a===0||a===7||t===0||t===7)&&!(e===0||e===7||e===56||e===63)}isChainMove(e){return!this.gameState||this.gameState.moveHistory.length===0?!1:this.gameState.moveHistory[this.gameState.moveHistory.length-1]?.flipped?.length>=3&&e.length>=3}isComebackMove(){return this.gameState?(this.gameState.currentPlayer===p?this.gameState.blackScore-this.gameState.whiteScore:this.gameState.whiteScore-this.gameState.blackScore)<=-5:!1}isDominationMove(){return this.gameState?(this.gameState.currentPlayer===p?this.gameState.blackScore-this.gameState.whiteScore:this.gameState.whiteScore-this.gameState.blackScore)>=10:!1}showSimpleConfirm(e,a){return new Promise(t=>{const i=document.getElementById("simple-modal"),s=document.getElementById("modal-title"),n=document.getElementById("modal-message"),o=document.getElementById("modal-confirm"),r=document.getElementById("modal-cancel");if(!i||!s||!n||!o||!r){t(confirm(e));return}s.textContent=a||h("modal.confirm.title"),n.textContent=e,o.textContent=h("modal.confirm"),r.textContent=h("modal.cancel"),i.style.display="flex";const l=()=>{i.style.display="none",o.removeEventListener("click",l),r.removeEventListener("click",c),t(!0)},c=()=>{i.style.display="none",o.removeEventListener("click",l),r.removeEventListener("click",c),t(!1)};o.addEventListener("click",l),r.addEventListener("click",c),i.addEventListener("click",d=>{d.target===i&&c()})})}}document.addEventListener("DOMContentLoaded",async()=>{const f=document.getElementById("game-container");if(f)try{const e=new te;await e.initialize(f),window.superReversiGame=e}catch(e){f.innerHTML=`
        <div style="padding: 1.25rem; color: red;">
          <h2>Error Loading Game</h2>
          <p>${e}</p>
        </div>
      `}});
//# sourceMappingURL=index-Clzm_U6n.js.map
