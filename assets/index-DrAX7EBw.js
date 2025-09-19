const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ai-config-types-DOMXaEOJ.js","assets/pixi-vendor-CLcXU_4U.js"])))=>i.map(i=>d[i]);
import{_ as de}from"./pixi-vendor-CLcXU_4U.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const G={snowflake:{type:"snowflake",colors:["#ffffff","#e6f3ff","#cce7ff","#b3d9ff","#f0f8ff"],behavior:{movement:"float",gravity:30,drag:.95,turbulence:.3},physics:{velocity:{min:20,max:60},acceleration:{x:0,y:30},mass:.5,elasticity:.1},visual:{size:{min:1,max:3},opacity:{start:.6,end:.1},scale:{start:.8,end:.2},rotation:{enabled:!0,speed:.02},glow:{enabled:!1,intensity:0}},animation:{lifespan:{min:800,max:1200},fadeIn:100,fadeOut:400,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:30,max:60},delay:{min:0,max:50},spread:{angle:Math.PI*.2,radius:40},burst:!1}},fire:{type:"fire",colors:["#dda0dd","#e6b8ea","#d8bfd8","#9932cc","#ba55d3"],behavior:{movement:"rise",gravity:-100,drag:.92,turbulence:.8},physics:{velocity:{min:80,max:200},acceleration:{x:0,y:-150},mass:.3,elasticity:0},visual:{size:{min:5,max:12},opacity:{start:.9,end:0},scale:{start:.5,end:1.6},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:1.2}},animation:{lifespan:{min:800,max:1500},fadeIn:50,fadeOut:600,pulsing:{enabled:!0,frequency:.1}},spawning:{count:{min:140,max:170},delay:{min:0,max:150},spread:{angle:Math.PI*.4,radius:40},burst:!0}},lightning:{type:"lightning",colors:["#ffff00","#ffffff","#00ffff","#87ceeb","#e0ffff"],behavior:{movement:"chain",gravity:0,drag:.99,turbulence:1.5},physics:{velocity:{min:300,max:600},acceleration:{x:0,y:0},mass:.1,elasticity:0},visual:{size:{min:8,max:16},opacity:{start:1,end:0},scale:{start:1,end:1},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:2}},animation:{lifespan:{min:100,max:300},fadeIn:0,fadeOut:150,pulsing:{enabled:!0,frequency:.5}},spawning:{count:{min:180,max:210},delay:{min:0,max:50},spread:{angle:Math.PI*2,radius:0},burst:!0}},blackhole:{type:"blackhole",colors:["#000000","#4b0082","#9400d3","#8b00ff","#1a1a1a"],behavior:{movement:"implode",gravity:800,drag:1.02,turbulence:.1},physics:{velocity:{min:100,max:300},acceleration:{x:0,y:0},mass:1,elasticity:0},visual:{size:{min:12,max:20},opacity:{start:.8,end:1},scale:{start:1.5,end:.1},rotation:{enabled:!0,speed:.15},glow:{enabled:!0,intensity:2.5}},animation:{lifespan:{min:1500,max:2500},fadeIn:100,fadeOut:500,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:220,max:300},delay:{min:0,max:300},spread:{angle:Math.PI*2,radius:120},burst:!1}},explosion:{type:"explosion",colors:["#87ceeb","#add8e6","#b0e0e6","#87cefa","#00bfff"],behavior:{movement:"explode",gravity:50,drag:.88,turbulence:.6},physics:{velocity:{min:150,max:300},acceleration:{x:0,y:100},mass:.8,elasticity:.3},visual:{size:{min:3,max:8},opacity:{start:.9,end:0},scale:{start:.3,end:1.2},rotation:{enabled:!0,speed:.1},glow:{enabled:!0,intensity:1}},animation:{lifespan:{min:500,max:1e3},fadeIn:20,fadeOut:300,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:110,max:130},delay:{min:0,max:30},spread:{angle:Math.PI*2,radius:0},burst:!0}},magic:{type:"magic",colors:["#90ee90","#98fb98","#b4ffb4","#7fff00","#adff2f"],behavior:{movement:"float",gravity:-20,drag:.98,turbulence:.4},physics:{velocity:{min:30,max:120},acceleration:{x:0,y:-50},mass:.2,elasticity:.8},visual:{size:{min:2,max:5},opacity:{start:.7,end:.1},scale:{start:.6,end:1},rotation:{enabled:!0,speed:.05},glow:{enabled:!0,intensity:.6}},animation:{lifespan:{min:1e3,max:1500},fadeIn:200,fadeOut:400,pulsing:{enabled:!0,frequency:.08}},spawning:{count:{min:70,max:100},delay:{min:0,max:100},spread:{angle:Math.PI*.4,radius:50},burst:!1}},storm:{type:"storm",colors:["#708090","#778899","#b0c4de","#87ceeb","#4682b4"],behavior:{movement:"spiral",gravity:20,drag:.96,turbulence:1.2},physics:{velocity:{min:150,max:350},acceleration:{x:0,y:50},mass:.6,elasticity:.2},visual:{size:{min:2,max:8},opacity:{start:.7,end:.2},scale:{start:1,end:.5},rotation:{enabled:!0,speed:.12},glow:{enabled:!1,intensity:0}},animation:{lifespan:{min:1200,max:2e3},fadeIn:150,fadeOut:500,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:60,max:120},delay:{min:0,max:100},spread:{angle:Math.PI*2,radius:100},burst:!1}},supernova:{type:"supernova",colors:["#ff8c00","#ffa500","#ff7f00","#ff6347","#ff4500"],behavior:{movement:"explode",gravity:-50,drag:.85,turbulence:1.8},physics:{velocity:{min:200,max:400},acceleration:{x:0,y:-100},mass:.4,elasticity:.1},visual:{size:{min:4,max:9},opacity:{start:1,end:0},scale:{start:.4,end:1.3},rotation:{enabled:!0,speed:.2},glow:{enabled:!0,intensity:2.2}},animation:{lifespan:{min:1e3,max:1800},fadeIn:50,fadeOut:800,pulsing:{enabled:!0,frequency:.15}},spawning:{count:{min:120,max:150},delay:{min:0,max:80},spread:{angle:Math.PI*2,radius:0},burst:!0}},cosmic_burst:{type:"cosmic_burst",colors:["#ffd700","#ffef94","#fff68f","#ffffe0","#fffacd"],behavior:{movement:"explode",gravity:-80,drag:.88,turbulence:2.5},physics:{velocity:{min:300,max:600},acceleration:{x:0,y:-200},mass:.2,elasticity:0},visual:{size:{min:5,max:10},opacity:{start:1,end:0},scale:{start:.2,end:1.4},rotation:{enabled:!0,speed:.25},glow:{enabled:!0,intensity:3}},animation:{lifespan:{min:1500,max:2800},fadeIn:100,fadeOut:1e3,pulsing:{enabled:!0,frequency:.2}},spawning:{count:{min:130,max:160},delay:{min:0,max:200},spread:{angle:Math.PI*2,radius:30},burst:!0}},green_lotus:{type:"green_lotus",colors:["#b4ffb4","#90ee90","#98fb98","#adff2f","#c8ffc8"],behavior:{movement:"float",gravity:-10,drag:.96,turbulence:.2},physics:{velocity:{min:40,max:80},acceleration:{x:0,y:-30},mass:.3,elasticity:.5},visual:{size:{min:2,max:4},opacity:{start:.8,end:.1},scale:{start:.6,end:1.2},rotation:{enabled:!0,speed:.03},glow:{enabled:!0,intensity:.8}},animation:{lifespan:{min:1e3,max:1500},fadeIn:200,fadeOut:500,pulsing:{enabled:!0,frequency:.05}},spawning:{count:{min:60,max:90},delay:{min:0,max:80},spread:{angle:Math.PI*.3,radius:40},burst:!1}},unlimited_blade_works:{type:"unlimited_blade_works",colors:["#c0c0c0","#d3d3d3","#dcdcdc","#e0e0e0","#f0f0f0"],behavior:{movement:"fall",gravity:800,drag:.99,turbulence:.1},physics:{velocity:{min:300,max:500},acceleration:{x:0,y:800},mass:.8,elasticity:0},visual:{size:{min:1,max:2},opacity:{start:.7,end:.2},scale:{start:.5,end:.7},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:.4}},animation:{lifespan:{min:800,max:1200},fadeIn:150,fadeOut:200,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:20,max:40},delay:{min:0,max:60},spread:{angle:Math.PI*.2,radius:30},burst:!1}},divine_thunder:{type:"divine_thunder",colors:["#c8a0ff","#b480ff","#dda0dd","#9932cc","#ba55d3"],behavior:{movement:"chain",gravity:0,drag:.98,turbulence:2},physics:{velocity:{min:400,max:800},acceleration:{x:0,y:0},mass:.1,elasticity:0},visual:{size:{min:6,max:12},opacity:{start:1,end:0},scale:{start:1,end:1.2},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:2.5}},animation:{lifespan:{min:1500,max:2e3},fadeIn:120,fadeOut:250,pulsing:{enabled:!0,frequency:.3}},spawning:{count:{min:120,max:160},delay:{min:0,max:100},spread:{angle:Math.PI*2,radius:80},burst:!0}},nine_finale:{type:"nine_finale",colors:["#ff8c40","#ff5028","#ffb870","#ff6030","#ffa060"],behavior:{movement:"explode",gravity:.8,drag:.95,turbulence:1.5},physics:{velocity:{min:600,max:1e3},acceleration:{x:0,y:500},mass:.3,elasticity:.1},visual:{size:{min:8,max:16},opacity:{start:1,end:0},scale:{start:.8,end:1.4},rotation:{enabled:!0,speed:2},glow:{enabled:!0,intensity:3}},animation:{lifespan:{min:1600,max:2200},fadeIn:100,fadeOut:300,pulsing:{enabled:!0,frequency:.5}},spawning:{count:{min:180,max:210},delay:{min:0,max:120},spread:{angle:Math.PI*2,radius:100},burst:!0}}};function me(h){switch(h){case"SSS":return"cosmic_burst";case"SS":return"nine_finale";case"S":return"divine_thunder";case"A":return"explosion";case"B":return"green_lotus";case"C":return"unlimited_blade_works";default:return"snowflake"}}function D(h,e,i=.5){const t=G[h],s=G[e];return{type:h,colors:[...t.colors,...s.colors],behavior:{movement:i>.5?t.behavior.movement:s.behavior.movement,gravity:t.behavior.gravity*i+s.behavior.gravity*(1-i),drag:t.behavior.drag*i+s.behavior.drag*(1-i),turbulence:t.behavior.turbulence*i+s.behavior.turbulence*(1-i)},physics:{velocity:{min:Math.min(t.physics.velocity.min,s.physics.velocity.min),max:Math.max(t.physics.velocity.max,s.physics.velocity.max)},acceleration:{x:t.physics.acceleration.x*i+s.physics.acceleration.x*(1-i),y:t.physics.acceleration.y*i+s.physics.acceleration.y*(1-i)},mass:t.physics.mass*i+s.physics.mass*(1-i),elasticity:t.physics.elasticity*i+s.physics.elasticity*(1-i)},visual:{size:{min:Math.min(t.visual.size.min,s.visual.size.min),max:Math.max(t.visual.size.max,s.visual.size.max)},opacity:{start:Math.max(t.visual.opacity.start,s.visual.opacity.start),end:Math.min(t.visual.opacity.end,s.visual.opacity.end)},scale:{start:t.visual.scale.start*i+s.visual.scale.start*(1-i),end:t.visual.scale.end*i+s.visual.scale.end*(1-i)},rotation:{enabled:t.visual.rotation.enabled||s.visual.rotation.enabled,speed:t.visual.rotation.speed*i+s.visual.rotation.speed*(1-i)},glow:{enabled:t.visual.glow.enabled||s.visual.glow.enabled,intensity:Math.max(t.visual.glow.intensity,s.visual.glow.intensity)}},animation:{lifespan:{min:Math.min(t.animation.lifespan.min,s.animation.lifespan.min),max:Math.max(t.animation.lifespan.max,s.animation.lifespan.max)},fadeIn:Math.max(t.animation.fadeIn,s.animation.fadeIn),fadeOut:Math.max(t.animation.fadeOut,s.animation.fadeOut),pulsing:{enabled:t.animation.pulsing.enabled||s.animation.pulsing.enabled,frequency:t.animation.pulsing.frequency*i+s.animation.pulsing.frequency*(1-i)}},spawning:{count:{min:Math.max(t.spawning.count.min,s.spawning.count.min),max:Math.max(t.spawning.count.max,s.spawning.count.max)},delay:{min:Math.min(t.spawning.delay.min,s.spawning.delay.min),max:Math.max(t.spawning.delay.max,s.spawning.delay.max)},spread:{angle:Math.max(t.spawning.spread.angle,s.spawning.spread.angle),radius:Math.max(t.spawning.spread.radius,s.spawning.spread.radius)},burst:t.spawning.burst||s.spawning.burst}}}class fe{x;y;angle;scale;life;maxLife;velocity;rotation;acceleration;dead=!1;time=0;constructor(e){this.x=e.x,this.y=e.y,this.angle=e.angle,this.scale=e.scale,this.life=e.life,this.maxLife=e.life,this.velocity=e.velocity,this.rotation=e.rotation,this.acceleration=e.acceleration}update(e){if(this.time+=e,this.time>this.life){this.dead=!0;return}this.x+=Math.cos(this.angle)*this.velocity*e,this.y+=Math.sin(this.angle)*this.velocity*e,this.acceleration+=this.rotation*e}draw(e){const i=1-this.time/this.life;e.save(),e.globalAlpha=i*.9,e.translate(this.x,this.y),e.rotate(this.acceleration),e.scale(this.scale,this.scale),this.drawPetal(e),e.restore()}drawPetal(e){const i=e.createLinearGradient(0,0,80,55);i.addColorStop(0,"rgba(180,255,220,0.9)"),i.addColorStop(1,"rgba(120,220,180,0.1)"),e.fillStyle=i,e.beginPath(),e.moveTo(12,25),e.bezierCurveTo(32,8,58,12,65,25),e.bezierCurveTo(58,38,32,42,12,25),e.closePath(),e.fill()}}class Z{x;y;angle;dead=!1;time=0;maxTime=.5;speed=600;constructor(e){this.x=e.x,this.y=e.y,this.angle=e.angle}update(e){if(this.time+=e,this.time>this.maxTime){this.dead=!0;return}this.x+=Math.cos(this.angle)*this.speed*e,this.y+=Math.sin(this.angle)*this.speed*e}draw(e){e.save(),e.translate(this.x,this.y),e.rotate(this.angle),this.drawBeam(e),e.restore()}drawBeam(e){const i=e.createLinearGradient(0,0,160,0);i.addColorStop(0,"rgba(200,255,230,0)"),i.addColorStop(.3,"rgba(200,255,230,0.8)"),i.addColorStop(.8,"rgba(200,255,230,0.8)"),i.addColorStop(1,"rgba(200,255,230,0)"),e.fillStyle=i,e.fillRect(-80,-6,160,12)}}class ue{x;y;dead=!1;time=0;phase=0;petals=[];swords=[];targetPositions;constructor(e,i,t=[]){this.x=e,this.y=i,this.targetPositions=t}update(e){switch(this.time+=e,this.phase){case 0:this.time>.5&&(this.createPetals(),this.phase=1,this.time=0);break;case 1:this.time>.4&&(this.createSwordBeams(),this.phase=2,this.time=0);break;case 2:this.time>1.5&&(this.dead=!0);break}this.petals.forEach(i=>i.update(e)),this.petals=this.petals.filter(i=>!i.dead),this.swords.forEach(i=>i.update(e)),this.swords=this.swords.filter(i=>!i.dead)}draw(e){this.drawAura(e),this.phase===0&&this.drawLotusFlower(e),this.petals.forEach(i=>i.draw(e)),this.swords.forEach(i=>i.draw(e))}drawAura(e){let i=1;this.phase===0?i=Math.min(1,this.time/.5):this.phase===2&&(i=Math.max(0,1-this.time/1.5)),e.save(),e.globalAlpha=i;const t=e.createRadialGradient(this.x,this.y,0,this.x,this.y,130);t.addColorStop(0,"rgba(180,255,220,0.8)"),t.addColorStop(1,"rgba(180,255,220,0)"),e.fillStyle=t,e.beginPath(),e.arc(this.x,this.y,130,0,Math.PI*2),e.fill(),e.restore()}drawLotusFlower(e){for(let t=0;t<8;t++){const s=t*Math.PI*2/8+this.time*1.5;e.save(),e.translate(this.x,this.y),e.rotate(s);const a=e.createLinearGradient(0,0,80,55);a.addColorStop(0,"rgba(180,255,220,0.9)"),a.addColorStop(1,"rgba(120,220,180,0.1)"),e.fillStyle=a,e.beginPath(),e.moveTo(12,25),e.bezierCurveTo(32,8,58,12,65,25),e.bezierCurveTo(58,38,32,42,12,25),e.closePath(),e.fill(),e.restore()}}createPetals(){for(let e=0;e<12;e++){const i=e*Math.PI*2/12;this.petals.push(new fe({x:this.x,y:this.y,angle:i,scale:.8+Math.random()*.5,life:1+Math.random()*.5,velocity:40+Math.random()*40,rotation:-2+Math.random()*4,acceleration:-.5+Math.random()}))}}createSwordBeams(){if(this.targetPositions.length>0)this.targetPositions.forEach(e=>{const i=Math.atan2(e.y-this.y,e.x-this.x),t=-.1+Math.random()*.2;this.swords.push(new Z({x:this.x,y:this.y,angle:i+t,targetPosition:e}))});else for(let e=0;e<12;e++){const i=e*Math.PI*2/12+(-.1+Math.random()*.2);this.swords.push(new Z({x:this.x,y:this.y,angle:i}))}}}class ge{x;y;time=0;constructor(e,i){this.x=e,this.y=i}update(e){this.time+=e}draw(e,i){const s=Math.min(window.innerWidth,window.innerHeight)*.14,a=this.time*.3;e.save(),e.translate(this.x,this.y-window.innerHeight*.02),e.globalAlpha=i*.5,this.drawSimplifiedRing(e,s,a),this.drawSimplifiedBalance(e,s,this.time),e.restore()}drawSimplifiedRing(e,i,t){e.save(),e.rotate(-t*.5);const s=e.createRadialGradient(0,0,i*.65,0,0,i);s.addColorStop(0,"rgba(240,240,240,0.8)"),s.addColorStop(.3,"rgba(200,200,200,0.9)"),s.addColorStop(.7,"rgba(160,160,160,0.8)"),s.addColorStop(1,"rgba(100,100,100,0.6)"),e.fillStyle=s,e.beginPath(),e.arc(0,0,i,0,Math.PI*2),e.arc(0,0,i*.65,0,Math.PI*2,!0),e.closePath(),e.fill();const a=e.createRadialGradient(0,0,i*.55,0,0,i*.75);a.addColorStop(0,"rgba(220,220,220,0.7)"),a.addColorStop(1,"rgba(140,140,140,0.5)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,i*.75,0,Math.PI*2),e.arc(0,0,i*.55,0,Math.PI*2,!0),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=4;for(let n=0;n<24;n++){const o=n*Math.PI*2/24;e.beginPath(),e.moveTo(Math.cos(o)*i*.65,Math.sin(o)*i*.65),e.lineTo(Math.cos(o)*i*.98,Math.sin(o)*i*.98),e.stroke(),e.lineWidth=6,e.strokeStyle="rgba(255,255,255,0.9)",e.beginPath(),e.moveTo(Math.cos(o)*i*.92,Math.sin(o)*i*.92),e.lineTo(Math.cos(o)*i*.98,Math.sin(o)*i*.98),e.stroke(),e.lineWidth=4,e.strokeStyle="rgba(255,255,255,0.8)"}e.strokeStyle="rgba(220,220,220,0.7)",e.lineWidth=2;for(let n=0;n<48;n++){const o=n*Math.PI*2/48;e.beginPath(),e.moveTo(Math.cos(o)*i*.55,Math.sin(o)*i*.55),e.lineTo(Math.cos(o)*i*.72,Math.sin(o)*i*.72),e.stroke(),n%8===0&&(e.lineWidth=3,e.strokeStyle="rgba(240,240,240,0.8)",e.beginPath(),e.moveTo(Math.cos(o)*i*.52,Math.sin(o)*i*.52),e.lineTo(Math.cos(o)*i*.75,Math.sin(o)*i*.75),e.stroke(),e.lineWidth=2,e.strokeStyle="rgba(220,220,220,0.7)")}for(let n=0;n<3;n++){const o=i*(.45-n*.08),r=36-n*8;e.strokeStyle=`rgba(200,200,200,${.6-n*.1})`,e.lineWidth=2-n*.3;for(let l=0;l<r;l++){const c=l*Math.PI*2/r;e.beginPath(),e.moveTo(Math.cos(c)*o*.85,Math.sin(c)*o*.85),e.lineTo(Math.cos(c)*o*1.1,Math.sin(c)*o*1.1),e.stroke()}}e.restore()}drawSimplifiedBalance(e,i,t){e.save(),e.rotate(Math.sin(t*4)*.2);const s=e.createRadialGradient(0,0,i*.12,0,0,i*.32);s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(.3,"rgba(240,240,240,0.8)"),s.addColorStop(.7,"rgba(180,180,180,0.7)"),s.addColorStop(1,"rgba(120,120,120,0.5)"),e.fillStyle=s,e.beginPath(),e.arc(0,0,i*.32,0,Math.PI*2),e.arc(0,0,i*.12,0,Math.PI*2,!0),e.closePath(),e.fill();const a=e.createRadialGradient(0,0,i*.08,0,0,i*.18);a.addColorStop(0,"rgba(255,255,255,1.0)"),a.addColorStop(.5,"rgba(200,200,200,0.9)"),a.addColorStop(1,"rgba(150,150,150,0.7)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,i*.18,0,Math.PI*2),e.arc(0,0,i*.08,0,Math.PI*2,!0),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=2;for(let o=0;o<12;o++){const r=o*Math.PI*2/12;e.beginPath(),e.moveTo(Math.cos(r)*i*.08,Math.sin(r)*i*.08),e.lineTo(Math.cos(r)*i*.3,Math.sin(r)*i*.3),e.stroke(),o%3===0&&(e.lineWidth=3,e.strokeStyle="rgba(255,255,255,0.95)",e.beginPath(),e.moveTo(Math.cos(r)*i*.08,Math.sin(r)*i*.08),e.lineTo(Math.cos(r)*i*.32,Math.sin(r)*i*.32),e.stroke(),e.lineWidth=2,e.strokeStyle="rgba(255,255,255,0.8)")}for(let o=0;o<4;o++){const r=o*Math.PI*2/4,l=Math.cos(r)*i*.28,c=Math.sin(r)*i*.28;e.fillStyle="rgba(255,255,255,0.9)",e.beginPath(),e.arc(l,c,i*.03,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(200,200,200,0.8)",e.lineWidth=1,e.stroke()}const n=e.createRadialGradient(0,0,0,0,0,i*.05);n.addColorStop(0,"rgba(255,255,255,1.0)"),n.addColorStop(.7,"rgba(220,220,220,0.9)"),n.addColorStop(1,"rgba(180,180,180,0.7)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,i*.05,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,0.8)",e.beginPath(),e.arc(-i*.01,-i*.01,i*.02,0,Math.PI*2),e.fill(),e.restore()}}class pe{x;y;dead=!1;time=0;duration=2;tourbillon;constructor(e,i,t=[]){this.x=e,this.y=i,this.tourbillon=new ge(e,i)}update(e){if(this.time+=e,this.time>this.duration){this.dead=!0;return}this.tourbillon.update(e)}draw(e){if(this.dead)return;let i=1;this.time<.3?i=this.time/.3:this.time>this.duration-.4&&(i=(this.duration-this.time)/.4),this.tourbillon.draw(e,i)}}const N={bolt:"rgba(180,140,255,0.95)",haze:"rgba(160,120,255,0.25)",spark:"rgba(220,200,255,0.9)",ring:"rgba(210,190,255,0.65)",blade:"rgba(190,160,255,0.9)"};class ye{x;y;vx;vy;time=0;life;dead=!1;constructor(e){this.x=e.x,this.y=e.y,this.vx=e.vx,this.vy=e.vy,this.life=e.life}update(e){if(this.time+=e,this.time>this.life){this.dead=!0;return}this.vy+=900*e,this.x+=this.vx*e,this.y+=this.vy*e}draw(e,i){if(this.dead)return;const t=1-this.time/this.life;e.save(),e.globalCompositeOperation="lighter",e.globalAlpha=i*t,e.strokeStyle=N.spark,e.lineWidth=2,e.beginPath(),e.moveTo(this.x-2,this.y),e.lineTo(this.x+2,this.y),e.moveTo(this.x,this.y-2),e.lineTo(this.x,this.y+2),e.stroke(),e.restore()}}class ve{x;y;time=0;duration=1;dead=!1;maxRadius=180;constructor(e,i){this.x=e,this.y=i}update(e){this.time+=e*2.2,this.time>=this.duration*1.1&&(this.dead=!0)}draw(e,i){if(this.dead||this.time<=0)return;const t=Math.min(1,this.time/this.duration),s=20+t*this.maxRadius;e.save(),e.globalCompositeOperation="lighter",e.globalAlpha=i*(1-t),e.strokeStyle=N.ring,e.lineWidth=3+6*(1-t),e.beginPath(),e.arc(this.x,this.y,s,0,Math.PI*2),e.stroke(),e.restore()}}class ee{static generateBolt(e,i,t=5,s=48,a=.35){const n=[{x:e.x,y:e.y},{x:i.x,y:i.y}];for(let r=0;r<t;r++){for(let l=n.length-1;l>0;l--){const c=n[l-1],d=n[l];if(!c||!d)continue;const f=(c.x+d.x)/2,p=(c.y+d.y)/2,y=d.x-c.x,S=d.y-c.y,w=Math.hypot(y,S)||1,b=-S/w,A=y/w,T=(Math.random()*2-1)*s;n.splice(l,0,{x:f+b*T,y:p+A*T})}s*=.55}const o=[];for(let r=2;r<n.length-2;r++)if(Math.random()<a){const l=n[r],c=n[r+1];if(!l||!c)continue;const d=c.x-l.x,f=c.y-l.y,p=Math.hypot(d,f)||1,y={x:l.x+d/p*(40+Math.random()*50),y:l.y+f/p*(40+Math.random()*50)};o.push(this.generateBolt(l,y,3,s*.6,.15))}return{points:n,branches:o}}static drawBolt(e,i,t=3){e.save(),e.globalCompositeOperation="lighter",e.lineJoin="round",e.lineCap="round",e.strokeStyle=N.haze,e.lineWidth=t*4,this.pathBolt(e,i),e.stroke(),e.strokeStyle=N.bolt,e.lineWidth=t,this.pathBolt(e,i),e.stroke(),e.strokeStyle="rgba(255,255,255,0.9)",e.lineWidth=Math.max(1,t*.5),this.pathBolt(e,i),e.stroke();for(const s of i.branches)this.drawBolt(e,s,t*.7);e.restore()}static pathBolt(e,i){const t=i.points;if(t.length<2)return;e.beginPath();const s=t[0];s&&e.moveTo(s.x,s.y);for(let a=1;a<t.length;a++){const n=t[a];n&&e.lineTo(n.x,n.y)}}}class te{x;y;targetY;currentY;width=14;arrived=!1;alpha=1;constructor(e,i){this.x=e,this.targetY=i,this.y=i,this.currentY=-160}update(e){this.currentY+=(this.targetY-this.currentY)*Math.min(1,e*16),Math.abs(this.currentY-this.targetY)<6&&(this.arrived=!0)}draw(e,i){const t=i*this.alpha,s=Math.min(this.currentY,this.targetY-window.innerHeight*.35),a=this.targetY+10;e.save(),e.globalCompositeOperation="lighter",e.globalAlpha=t*.6;const n=e.createLinearGradient(this.x,s,this.x,a);if(n.addColorStop(0,"rgba(170,120,255,0)"),n.addColorStop(.1,"rgba(170,120,255,0.25)"),n.addColorStop(.9,"rgba(170,120,255,0.25)"),n.addColorStop(1,"rgba(170,120,255,0)"),e.fillStyle=n,e.fillRect(this.x-28,s,56,a-s),e.globalAlpha=t,e.fillStyle=N.blade,e.fillRect(this.x-this.width/2,s,this.width,a-s),e.globalAlpha=t,e.fillStyle="rgba(255,255,255,0.95)",e.fillRect(this.x-1,s+6,2,a-s-12),this.arrived){e.globalAlpha=t;const o=e.createRadialGradient(this.x,a-6,0,this.x,a-6,22);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.beginPath(),e.arc(this.x,a-6,22,0,Math.PI*2),e.fill()}e.restore()}}class be{x;y;dead=!1;time=0;duration=2;targetPositions;thunderBlades=[];lightningBolts=[];sparks=[];shockwaves=[];screenShake=0;thunderStarted=!1;constructor(e,i,t=[]){this.x=e,this.y=i,this.targetPositions=t,this.initializeBlades()}initializeBlades(){this.targetPositions.length>0?this.targetPositions.forEach(e=>{this.thunderBlades.push(new te(e.x,e.y))}):this.thunderBlades.push(new te(this.x,this.y))}update(e){if(this.time+=e,this.time>this.duration){this.dead=!0;return}let i=!1;this.thunderBlades.forEach(t=>{t.update(e),t.arrived&&(i=!0)}),i&&!this.thunderStarted&&(this.startThunderEffect(),this.thunderStarted=!0),this.thunderStarted&&this.generateLightning(),this.screenShake>0&&(this.screenShake=Math.max(0,this.screenShake-e*24)),this.sparks.forEach(t=>t.update(e)),this.sparks=this.sparks.filter(t=>!t.dead),this.shockwaves.forEach(t=>t.update(e)),this.shockwaves=this.shockwaves.filter(t=>!t.dead),this.lightningBolts.length>12&&this.lightningBolts.splice(0,this.lightningBolts.length-12)}startThunderEffect(){this.screenShake=6,this.thunderBlades.forEach(e=>{this.spawnSparks(e.x,e.y,20),this.shockwaves.push(new ve(e.x,e.y))})}generateLightning(){const e=2+(Math.random()<.5?1:2);for(let i=0;i<e;i++){const t=this.thunderBlades[Math.floor(Math.random()*this.thunderBlades.length)];if(!t)continue;const s=t.x+(Math.random()-.5)*window.innerWidth*.5,a=-80+Math.random()*window.innerHeight*.1,n=ee.generateBolt({x:s,y:a},{x:t.x,y:t.y},5,32+Math.random()*32,.35);this.lightningBolts.push(n)}}spawnSparks(e,i,t){for(let s=0;s<t;s++)this.sparks.push(new ye({x:e,y:i,vx:-220+Math.random()*440,vy:-180+Math.random()*160,life:.15+Math.random()*.2}))}draw(e){if(this.dead)return;let i=1;const t=.12,s=.25;if(this.time<t?i=this.time/t:this.time>this.duration-s&&(i=(this.duration-this.time)/s),e.save(),this.screenShake>0){const a=(Math.random()-.5)*this.screenShake,n=(Math.random()-.5)*this.screenShake;e.translate(a,n)}this.thunderBlades.forEach(a=>a.draw(e,i)),this.lightningBolts.forEach(a=>{ee.drawBolt(e,a,2.6)}),this.shockwaves.forEach(a=>a.draw(e,i)),this.sparks.forEach(a=>a.draw(e,i)),e.restore()}}class Me{x;y;targetPositions;meteors=[];sparks=[];rings=[];targetIndicators=[];duration=1.8;currentTime=0;isComplete=!1;screenShake=0;meteorHead;constructor(e,i,t=[]){this.x=e,this.y=i,this.targetPositions=t.length>0?t:[{x:e,y:i}],this.meteorHead=this.createMeteorSprite(),this.initializeTargetIndicators(),this.initializeMeteors()}initializeTargetIndicators(){for(const e of this.targetPositions)this.targetIndicators.push({x:e.x,y:e.y,life:.6,maxLife:.6})}createMeteorSprite(){const e=document.createElement("canvas");e.width=96,e.height=96;const i=e.getContext("2d"),t=i.createRadialGradient(48,48,0,48,48,42);return t.addColorStop(0,"rgba(255,240,210,1)"),t.addColorStop(.35,"rgba(255,180,140,1)"),t.addColorStop(1,"rgba(255,80,40,0.55)"),i.fillStyle=t,i.beginPath(),i.arc(48,48,42,0,Math.PI*2),i.fill(),e}initializeMeteors(){for(let e=0;e<this.targetPositions.length;e++){const i=this.targetPositions[e];if(!i)continue;const t=Math.random()<.3?2:Math.random()<.7?3:4;for(let s=0;s<t;s++){const a=Math.random()*Math.PI*2,n=400+Math.random()*300,o=i.x+Math.cos(a)*n,r=i.y+Math.sin(a)*n-200,l=i.x-o,c=i.y-r,d=Math.sqrt(l*l+c*c)||1,f=250+Math.random()*150,p=800+Math.random()*200,y=f*.3,S=c/d*p-y;this.meteors.push({x:o,y:r,vx:l/d*p,vy:S,rotation:Math.atan2(c,l),gravity:f,life:1.8,currentLife:0,trail:[],scale:1.2+Math.random()*.6,targetX:i.x,targetY:i.y,assignedTarget:i})}}}spawnExplosion(e,i){const t=40+Math.random()*20;for(let s=0;s<t;s++)this.sparks.push({x:e,y:i,vx:(Math.random()-.5)*2200,vy:(Math.random()-.5)*1800-200,life:.18+Math.random()*.17,currentLife:0});this.rings.push({x:e,y:i,radius:0,maxRadius:280,life:.45,currentLife:0}),this.screenShake=Math.min(15,this.screenShake+6.5)}update(e){if(this.currentTime+=e,this.currentTime>=this.duration){this.isComplete=!0;return}this.screenShake=Math.max(0,this.screenShake-e*18),this.updateMeteors(e),this.updateSparks(e),this.updateRings(e),this.updateTargetIndicators(e)}updateMeteors(e){for(let i=this.meteors.length-1;i>=0;i--){const t=this.meteors[i];if(!t)continue;if(t.currentLife+=e,t.vy+=t.gravity*e,Math.sqrt((t.targetX-t.x)**2+(t.targetY-t.y)**2)>20&&t.currentLife<t.life*.8){const o=t.targetX-t.x,r=t.targetY-t.y,l=Math.sqrt(o*o+r*r)||1,c=o/l*600,d=r/l*600;t.vx=t.vx*(1-.1)+c*.1,t.vy=t.vy*(1-.1)+d*.1,t.rotation=Math.atan2(t.vy,t.vx)}t.x+=t.vx*e,t.y+=t.vy*e,t.trail.push({x:t.x,y:t.y}),t.trail.length>10&&t.trail.shift(),(Math.sqrt((t.x-t.assignedTarget.x)**2+(t.y-t.assignedTarget.y)**2)<20||t.currentLife>t.life)&&(this.spawnExplosion(t.x,t.y),this.meteors.splice(i,1))}}updateSparks(e){for(let i=this.sparks.length-1;i>=0;i--){const t=this.sparks[i];if(t){if(t.currentLife+=e,t.currentLife>t.life){this.sparks.splice(i,1);continue}t.vy+=1400*e,t.x+=t.vx*e,t.y+=t.vy*e}}}updateRings(e){for(let i=this.rings.length-1;i>=0;i--){const t=this.rings[i];if(t){if(t.currentLife+=e*2.2,t.currentLife>=t.life){this.rings.splice(i,1);continue}t.radius=24+t.currentLife/t.life*t.maxRadius}}}updateTargetIndicators(e){for(let i=this.targetIndicators.length-1;i>=0;i--){const t=this.targetIndicators[i];t&&(t.life-=e,t.life<=0&&this.targetIndicators.splice(i,1))}}render(e){if(this.isComplete)return;const i=this.currentTime/this.duration,t=Math.min(1,i/.12),s=Math.min(1,(this.duration-this.currentTime)/.25),a=Math.min(t,s);if(e.save(),this.screenShake>0){const n=(Math.random()-.5)*this.screenShake*2,o=(Math.random()-.5)*this.screenShake*2;e.translate(n,o)}this.renderTargetIndicators(e,a),this.renderMeteors(e,a),this.renderRings(e,a),this.renderSparks(e,a),e.restore()}renderMeteors(e,i){e.save(),e.globalCompositeOperation="lighter";for(const t of this.meteors)this.renderMeteorTrail(e,t,i),this.renderMeteorHead(e,t,i);e.restore()}renderMeteorTrail(e,i,t){if(!(i.trail.length<2))for(let s=0;s<i.trail.length-1;s++){const a=i.trail[s],n=i.trail[s+1];if(!a||!n)continue;const o=s/(i.trail.length-1),r=35*(1-o);e.globalAlpha=t*.35*(1-o),e.strokeStyle="rgba(255,90,50,0.35)",e.lineWidth=r,e.lineCap="round",e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(n.x,n.y),e.stroke()}}renderMeteorHead(e,i,t){e.save(),e.globalAlpha=t,e.translate(i.x,i.y),e.rotate(i.rotation),e.scale(i.scale,i.scale),e.drawImage(this.meteorHead,-48,-48,96,96),e.restore()}renderSparks(e,i){e.save(),e.globalCompositeOperation="lighter";for(const t of this.sparks){const s=1-t.currentLife/t.life;e.globalAlpha=i*s,e.strokeStyle="rgba(255,210,160,0.95)",e.lineWidth=2,e.beginPath(),e.moveTo(t.x-2,t.y),e.lineTo(t.x+2,t.y),e.moveTo(t.x,t.y-2),e.lineTo(t.x,t.y+2),e.stroke()}e.restore()}renderRings(e,i){e.save(),e.globalCompositeOperation="lighter";for(const t of this.rings){const s=1-t.currentLife/t.life;e.globalAlpha=i*s,e.strokeStyle="rgba(255,140,90,0.7)",e.lineWidth=3+7*s,e.beginPath(),e.arc(t.x,t.y,t.radius,0,Math.PI*2),e.stroke()}e.restore()}getScreenShake(){return this.screenShake}renderTargetIndicators(e,i){e.save(),e.globalCompositeOperation="lighter";for(const t of this.targetIndicators){const s=t.life/t.maxLife,a=.5+.5*Math.sin(this.currentTime*15);e.globalAlpha=i*s*a,e.strokeStyle="rgba(255,100,50,0.8)",e.lineWidth=2;const n=15+(1-s)*10;e.beginPath(),e.moveTo(t.x-n,t.y),e.lineTo(t.x+n,t.y),e.moveTo(t.x,t.y-n),e.lineTo(t.x,t.y+n),e.stroke(),e.beginPath(),e.arc(t.x,t.y,n*.7,0,Math.PI*2),e.stroke()}e.restore()}isFinished(){return this.isComplete}}class Se{x;y;targetPositions;iceSpears=[];iceShards=[];shockRings=[];duration=1.5;currentTime=0;isComplete=!1;screenShake=0;frostCoreTime=0;iceSpearSprite;dead=!1;constructor(e,i,t=[]){this.x=e,this.y=i,this.targetPositions=t.length>0?t:[{x:e,y:i}],this.iceSpearSprite=this.createIceSpearSprite(),this.initializeIceSpears()}createIceSpearSprite(){const e=document.createElement("canvas");e.width=26,e.height=140;const i=e.getContext("2d"),t=i.createLinearGradient(0,0,0,140);return t.addColorStop(0,"rgba(190,230,255,0.00)"),t.addColorStop(.1,"rgba(190,230,255,0.20)"),t.addColorStop(.9,"rgba(190,230,255,0.20)"),t.addColorStop(1,"rgba(190,230,255,0.00)"),i.fillStyle=t,i.fillRect(0,0,26,140),i.fillStyle="rgba(190,230,255,0.95)",i.beginPath(),i.moveTo(13,0),i.lineTo(20,100),i.lineTo(13,140),i.lineTo(6,100),i.closePath(),i.fill(),i.fillStyle="rgba(255,255,255,0.95)",i.fillRect(12,12,2,112),e}initializeIceSpears(){for(const e of this.targetPositions){const i=Math.random()<.4?2:3;for(let t=0;t<i;t++){const s=Math.random()*Math.PI*2,a=350+Math.random()*200,n=e.x+Math.cos(s)*a,o=e.y+Math.sin(s)*a-150,r=e.x-n,l=e.y-o,c=Math.sqrt(r*r+l*l)||1,d=900+Math.random()*400;this.iceSpears.push({x:n,y:o,vx:r/c*d,vy:l/c*d,rotation:Math.atan2(l,r)+Math.PI/2,life:.45+Math.random()*.45,currentLife:0,trail:[],scale:.8+Math.random()*.4,targetX:e.x,targetY:e.y})}}}spawnIceShards(e,i,t=22){for(let s=0;s<t;s++){const a=Math.random()*Math.PI*2,n=300+Math.random()*600;this.iceShards.push({x:e,y:i,vx:Math.cos(a)*n,vy:Math.sin(a)*n,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*16,life:.18+Math.random()*.2,currentLife:0})}}addShockRing(e,i){this.shockRings.push({x:e,y:i,radius:0,maxRadius:200,life:.45,currentLife:0})}update(e){if(this.currentTime+=e,this.currentTime>=this.duration){this.isComplete=!0,this.dead=!0;return}if(this.screenShake=Math.max(0,this.screenShake-e*16),this.frostCoreTime+=e*3,this.currentTime/this.duration<.6&&Math.random()<18*e&&Math.random()<.5){const t=Math.random()<.5?2:3,s=this.targetPositions[Math.floor(Math.random()*this.targetPositions.length)];if(s)for(let a=0;a<t;a++){const n=Math.random()*Math.PI*2,o=300+Math.random()*250,r=s.x+Math.cos(n)*o,l=s.y+Math.sin(n)*o-100,c=s.x-r,d=s.y-l,f=Math.sqrt(c*c+d*d)||1,p=900+Math.random()*400;this.iceSpears.push({x:r,y:l,vx:c/f*p,vy:d/f*p,rotation:Math.atan2(d,c)+Math.PI/2,life:.45+Math.random()*.45,currentLife:0,trail:[],scale:.8+Math.random()*.4,targetX:s.x,targetY:s.y})}}this.updateIceSpears(e),this.updateIceShards(e),this.updateShockRings(e)}updateIceSpears(e){for(let i=this.iceSpears.length-1;i>=0;i--){const t=this.iceSpears[i];if(!t)continue;t.currentLife+=e,t.x+=t.vx*e,t.y+=t.vy*e,t.trail.push({x:t.x,y:t.y}),t.trail.length>12&&t.trail.shift();const s=Math.sqrt((t.x-t.targetX)**2+(t.y-t.targetY)**2);(t.currentLife>t.life||s<25)&&(this.spawnIceShards(t.x,t.y,28),this.addShockRing(t.x,t.y),this.screenShake=Math.min(8,this.screenShake+2.5),this.iceSpears.splice(i,1))}}updateIceShards(e){for(let i=this.iceShards.length-1;i>=0;i--){const t=this.iceShards[i];if(t){if(t.currentLife+=e,t.currentLife>t.life){this.iceShards.splice(i,1);continue}t.vy+=900*e,t.x+=t.vx*e,t.y+=t.vy*e,t.rotation+=t.rotationSpeed*e}}}updateShockRings(e){for(let i=this.shockRings.length-1;i>=0;i--){const t=this.shockRings[i];if(t){if(t.currentLife+=e*2.2,t.currentLife>=t.life){this.shockRings.splice(i,1);continue}t.radius=18+t.currentLife/t.life*t.maxRadius}}}draw(e){if(this.isComplete)return;const i=this.currentTime/this.duration,t=Math.min(1,i/.12),s=Math.min(1,(this.duration-this.currentTime)/.25),a=Math.min(t,s);if(e.save(),this.screenShake>0){const n=(Math.random()-.5)*this.screenShake*2,o=(Math.random()-.5)*this.screenShake*2;e.translate(n,o)}this.drawFrostCore(e,a),this.drawIceSpears(e,a),this.drawShockRings(e,a),this.drawIceShards(e,a),e.restore()}drawFrostCore(e,i){e.save(),e.globalCompositeOperation="lighter";const t=140+40*Math.sin(this.frostCoreTime*6),s=e.createRadialGradient(this.x,this.y,0,this.x,this.y,t);s.addColorStop(0,`rgba(220,240,255,${.5*i})`),s.addColorStop(1,"rgba(220,240,255,0)"),e.fillStyle=s,e.beginPath(),e.arc(this.x,this.y,t,0,Math.PI*2),e.fill(),e.restore()}drawIceSpears(e,i){for(const t of this.iceSpears){e.save(),e.globalCompositeOperation="lighter";for(let a=0;a<t.trail.length-1;a++){const n=t.trail[a],o=t.trail[a+1];if(!n||!o)continue;const r=a/(t.trail.length-1),l=18*(1-r);e.globalAlpha=i*.35*(1-r),e.strokeStyle="rgba(150,210,255,0.40)",e.lineCap="round",e.lineWidth=l,e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(o.x,o.y),e.stroke()}e.globalAlpha=i,e.translate(t.x,t.y),e.rotate(t.rotation);const s=t.scale*(.8+Math.min(.7,t.currentLife*1.1));e.scale(s,s),e.drawImage(this.iceSpearSprite,-13,-20),e.restore()}}drawIceShards(e,i){e.save(),e.globalCompositeOperation="lighter";for(const t of this.iceShards){const s=1-t.currentLife/t.life;e.globalAlpha=i*s,e.save(),e.translate(t.x,t.y),e.rotate(t.rotation),e.strokeStyle="rgba(210,240,255,0.95)",e.lineWidth=2,e.beginPath(),e.moveTo(-3,0),e.lineTo(3,0),e.moveTo(0,-3),e.lineTo(0,3),e.stroke(),e.restore()}e.restore()}drawShockRings(e,i){e.save(),e.globalCompositeOperation="lighter";for(const t of this.shockRings){const s=1-t.currentLife/t.life;e.globalAlpha=i*s,e.strokeStyle="rgba(180,220,255,0.70)",e.lineWidth=2+6*s,e.beginPath(),e.arc(t.x,t.y,t.radius,0,Math.PI*2),e.stroke()}e.restore()}}class we{pos;vel;target;tail;alive;life;maxLife;tailLength;config;constructor(e,i,t,s){this.pos={x:e,y:i},this.vel={x:0,y:-6},this.target=t,this.tail=[],this.tailLength=20,this.alive=!0,this.life=2,this.maxLife=2,this.config=s}update(){if(this.alive){if(this.life-=.016,this.life<=0){this.alive=!1;return}if(this.target){const e=this.target.x-this.pos.x,i=this.target.y-this.pos.y,t=Math.hypot(e,i);if(t>5){this.vel.x+=e/t*.4,this.vel.y+=i/t*.4;const s=Math.hypot(this.vel.x,this.vel.y);s>this.config.speed&&(this.vel.x*=this.config.speed/s,this.vel.y*=this.config.speed/s)}else this.life=Math.min(this.life,.3)}this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.tail.push({x:this.pos.x,y:this.pos.y}),this.tail.length>this.tailLength&&this.tail.shift()}}draw(e){if(!this.alive||this.tail.length<2)return;const i=this.life/this.maxLife;e.save(),e.globalCompositeOperation="lighter";for(let s=1;s<this.tail.length;s++){const a=this.tail[s-1],n=this.tail[s];if(!a||!n)continue;const o=s/this.tail.length*i*.6;e.strokeStyle=this.config.trailColor.replace("1)",`${o})`),e.lineWidth=2+s/3,e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(n.x,n.y),e.stroke()}e.restore();const t=Math.atan2(this.vel.y,this.vel.x);e.save(),e.translate(this.pos.x,this.pos.y),e.rotate(t),e.shadowColor=this.config.color,e.shadowBlur=this.config.glowIntensity*i,e.globalAlpha=i,e.fillStyle=this.config.color,e.fillRect(-this.config.size,-2,this.config.size,4),e.fillStyle=this.config.color,e.beginPath(),e.moveTo(0,0),e.lineTo(this.config.size*.3,-3),e.lineTo(this.config.size*.3,3),e.closePath(),e.fill(),e.restore()}}class ke{canvas;ctx;particles=[];swords=[];greenLotusEffects=[];ubwEffects=[];divineThunderEffects=[];nineFinaleEffects=[];iceSpearEffects=[];animationId=null;lastTime=0;enabled=!0;constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="particle-canvas",this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.left="0",this.canvas.style.pointerEvents="none",this.canvas.style.zIndex="100";const e=this.canvas.getContext("2d");if(!e)throw new Error("Could not get canvas context");this.ctx=e}initialize(e){const i=e.getBoundingClientRect();this.canvas.width=i.width,this.canvas.height=i.height,e.style.position="relative",e.appendChild(this.canvas),this.enabled&&this.startAnimation()}setEnabled(e){this.enabled=e,e?this.animationId||this.startAnimation():(this.stopAnimation(),this.clearParticles())}stopAnimation(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}clearParticles(){this.particles=[],this.swords=[],this.greenLotusEffects=[],this.ubwEffects=[],this.divineThunderEffects=[],this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}startAnimation(){const e=i=>{const t=i-this.lastTime;this.lastTime=i,this.update(t/1e3),this.render(),this.animationId=requestAnimationFrame(e)};this.animationId=requestAnimationFrame(e)}update(e){for(let i=this.particles.length-1;i>=0;i--){const t=this.particles[i];t&&(t.x+=t.vx*e,t.y+=t.vy*e,t.life-=e,t.alpha=Math.max(0,t.life/t.maxLife),t.type==="spark"&&(t.vy+=200*e),t.life<=0&&this.particles.splice(i,1))}for(let i=this.swords.length-1;i>=0;i--){const t=this.swords[i];t&&(t.update(),t.alive||this.swords.splice(i,1))}for(let i=this.greenLotusEffects.length-1;i>=0;i--){const t=this.greenLotusEffects[i];t&&(t.update(e),t.dead&&this.greenLotusEffects.splice(i,1))}for(let i=this.ubwEffects.length-1;i>=0;i--){const t=this.ubwEffects[i];t&&(t.update(e),t.dead&&this.ubwEffects.splice(i,1))}for(let i=this.divineThunderEffects.length-1;i>=0;i--){const t=this.divineThunderEffects[i];t&&(t.update(e),t.dead&&this.divineThunderEffects.splice(i,1))}for(let i=this.nineFinaleEffects.length-1;i>=0;i--){const t=this.nineFinaleEffects[i];t&&(t.update(e),t.isFinished()&&this.nineFinaleEffects.splice(i,1))}for(let i=this.iceSpearEffects.length-1;i>=0;i--){const t=this.iceSpearEffects[i];t&&(t.update(e),t.dead&&this.iceSpearEffects.splice(i,1))}}render(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const e of this.particles)this.ctx.save(),this.ctx.globalAlpha=e.alpha,e.type==="circle"?this.drawCircle(e):e.type==="star"?this.drawStar(e):e.type==="spark"?this.drawSpark(e):e.type==="text"&&this.drawText(e),this.ctx.restore();for(const e of this.swords)e.draw(this.ctx);for(const e of this.greenLotusEffects)e.draw(this.ctx);for(const e of this.ubwEffects)e.draw(this.ctx);for(const e of this.divineThunderEffects)e.draw(this.ctx);for(const e of this.nineFinaleEffects)e.render(this.ctx);for(const e of this.iceSpearEffects)e.draw(this.ctx)}drawCircle(e){this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.shadowBlur=10,this.ctx.shadowColor=e.color,this.ctx.fill()}drawStar(e){const t=e.size,s=e.size*.5;this.ctx.beginPath(),this.ctx.translate(e.x,e.y);for(let a=0;a<5*2;a++){const n=a%2===0?t:s,o=a*Math.PI/5,r=Math.cos(o)*n,l=Math.sin(o)*n;a===0?this.ctx.moveTo(r,l):this.ctx.lineTo(r,l)}this.ctx.closePath(),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.translate(-e.x,-e.y)}drawSpark(e){this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(e.x-e.vx*.1,e.y-e.vy*.1),this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.size,this.ctx.lineCap="round",this.ctx.stroke()}drawText(e){!e.text||!e.fontSize||(this.ctx.font=`bold ${e.fontSize}px Arial, sans-serif`,this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillStyle=e.color,this.ctx.shadowBlur=15,this.ctx.shadowColor=e.color,this.ctx.strokeStyle="rgba(0, 0, 0, 0.8)",this.ctx.lineWidth=3,this.ctx.strokeText(e.text,e.x,e.y),this.ctx.fillText(e.text,e.x,e.y))}calculateGrade(e,i,t){const s=i===0||i===7||i===56||i===63,a=Math.floor(i/8),n=i%8,o=a===0||a===7||n===0||n===7;let r=e*10;return s?r+=60:o&&(r+=20),t?.massive&&(r+=40),t?.chain&&(r+=30),t?.comeback&&(r+=25),t?.domination&&(r+=20),t?.firstMove&&(r-=10),r>=100||e>=15?"SSS":r>=70||e>=10?"SS":r>=50||e>=7?"S":r>=30||e>=5?"A":r>=15||e>=3?"B":"C"}triggerMoveEffect(e,i,t,s,a,n){if(this.enabled){if(this.createFloatingGradeText(e,i,t),t==="SSS"){setTimeout(()=>this.createSSSEffect(e,i,s,a,n),0);return}this.createPresetEffect(e,i,t,s,a,n),t==="S"&&s>=7&&setTimeout(()=>this.createSEffect(e,i,s,a,n),100)}}createPresetEffect(e,i,t,s,a,n){const o=me(t),r=G[o];if(!r)return;if(t==="B"&&o==="green_lotus"){this.createGreenLotusEffect(e,i,n||[]);return}if(t==="C"&&o==="unlimited_blade_works"){this.createUnlimitedBladeWorksEffect(e,i,n||[]);return}if(t==="S"&&o==="divine_thunder"){this.createDivineThunderEffect(e,i,n||[]);return}if(t==="SS"&&o==="nine_finale"){this.createNineFinaleEffect(e,i,n||[]);return}if(t==="A"){this.createIceSpearEffect(e,i,n||[]);return}const l=this.calculateFlipDirections(e,i,n),c=Math.min(1+(s-1)*.1,2),d=Math.floor((r.spawning.count.min+Math.random()*(r.spawning.count.max-r.spawning.count.min))*c);for(let f=0;f<d;f++)setTimeout(()=>{this.createPresetParticle(e,i,r,f,d,l)},Math.random()*(r.spawning.delay.max-r.spawning.delay.min)+r.spawning.delay.min);a?.corner&&t!=="C"&&this.addCornerEnhancement(e,i,r,l),a?.massive&&s>=8&&this.addMassiveEnhancement(e,i,r,l)}calculateFlipDirections(e,i,t){return!t||t.length===0?Array.from({length:8},(s,a)=>({angle:a/8*Math.PI*2,distance:100})):t.map(s=>{const a=s.x-e,n=s.y-i,o=Math.sqrt(a*a+n*n);return{angle:Math.atan2(n,a),distance:Math.max(o,50)}})}createSwords(e,i,t,s,a,n=0){if(this.swords.length>=60)return;const r=Math.min(a,60-this.swords.length);for(let l=0;l<r;l++)setTimeout(()=>{let c=null;if(t.length>0)c=t[l%t.length]||t[0]||null;else{const w=l/r*Math.PI*2,b=200+Math.random()*300;c={x:e+Math.cos(w)*b,y:i+Math.sin(w)*b}}const d=30,f=Math.random()*Math.PI*2,p=e+Math.cos(f)*d,y=i+Math.sin(f)*d,S=new we(p,y,c,s);this.swords.push(S)},n+l*30)}createPresetParticle(e,i,t,s,a,n){const o=t.colors,r=o[Math.floor(Math.random()*o.length)]||o[0]||"#ffffff";let l,c;if(n&&n.length>0){const b=Math.floor(s/a*n.length),A=n[b]||n[0];if(A){const T=A.angle,F=t.spawning.spread.angle||Math.PI/6;l=T+(Math.random()-.5)*F}else l=Math.random()*Math.PI*2;c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min)}else switch(t.behavior.movement){case"explode":l=s/a*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"float":l=Math.random()*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"rise":l=Math.PI*1.5+(Math.random()-.5)*t.spawning.spread.angle,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"chain":l=Math.random()*Math.PI*2,c=t.physics.velocity.max;break;case"implode":l=Math.random()*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;default:l=Math.random()*Math.PI*2,c=100}const d=t.spawning.spread.radius,f=Math.random()*t.spawning.spread.angle-t.spawning.spread.angle/2,p=e+Math.cos(f)*Math.random()*d,y=i+Math.sin(f)*Math.random()*d,S=t.visual.size.min+Math.random()*(t.visual.size.max-t.visual.size.min),w=(t.animation.lifespan.min+Math.random()*(t.animation.lifespan.max-t.animation.lifespan.min))/1e3;this.particles.push({x:p,y,vx:Math.cos(l)*c,vy:Math.sin(l)*c,life:w,maxLife:w,size:S,color:r,alpha:t.visual.opacity.start,type:t.type==="snowflake"?"circle":t.type==="lightning"?"spark":"circle"})}addCornerEnhancement(e,i,t,s){for(let a=0;a<12;a++){let n;if(s&&s.length>0){const o=Math.floor(a/12*s.length),r=s[o]||s[0];r?n=r.angle+(Math.random()-.5)*(Math.PI/4):n=a/12*Math.PI*2}else n=a/12*Math.PI*2;this.particles.push({x:e,y:i,vx:Math.cos(n)*80,vy:Math.sin(n)*80,life:1,maxLife:1,size:3,color:"#ffd700",alpha:.8,type:"circle"})}}addMassiveEnhancement(e,i,t,s){for(let a=0;a<3;a++)setTimeout(()=>{for(let n=0;n<20;n++){let o;if(s&&s.length>0){const r=Math.floor(n/20*s.length),l=s[r]||s[0];l?o=l.angle+(Math.random()-.5)*(Math.PI/3):o=n/20*Math.PI*2}else o=n/20*Math.PI*2;this.particles.push({x:e,y:i,vx:Math.cos(o)*(150+a*50),vy:Math.sin(o)*(150+a*50),life:.8,maxLife:.8,size:2,color:"#ffffff",alpha:.6-a*.2,type:"circle"})}},a*100)}createSSSEffect(e,i,t,s,a){const n={color:"#ffed4a",trailColor:"rgba(255, 237, 74, 1)",size:90,speed:5,glowIntensity:100},o=a||[],r=Math.min(35,Math.max(25,Math.floor(t*2.5)));this.createSwords(e,i,o,n,Math.floor(r*.6),0),setTimeout(()=>{this.createSwords(e,i,o,n,Math.floor(r*.4),0)},100),s?.corner&&setTimeout(()=>{this.createSwords(e,i,o,n,3,0)},500),s?.comeback&&setTimeout(()=>{this.createSwords(e,i,o,n,2,0)},600)}createSSEffect(e,i,t,s,a){const n={color:"#ff1100",trailColor:"rgba(255, 17, 0, 1)",size:70,speed:6,glowIntensity:90},o=a||[],r=Math.min(20,Math.max(15,Math.floor(t*1.5)));this.createSwords(e,i,o,n,r,0),s?.massive&&setTimeout(()=>{this.createSwords(e,i,o,n,2,0)},400)}createSEffect(e,i,t,s,a){const n=["#dda0dd","#e6b8ea","#d8bfd8","#9932cc","#ba55d3","#9370db","#8a2be2","#9966cc","#c8a2c8"],o=this.calculateFlipDirections(e,i,a);for(let r=0;r<5;r++)setTimeout(()=>{for(let l=0;l<40;l++){let c;if(o.length>0&&Math.random()<.65){const p=Math.floor(l/40*o.length),y=o[p]||o[0];y?c=y.angle+(Math.random()-.5)*(Math.PI/2.5):c=l/40*Math.PI*2}else c=l/40*Math.PI*2;const d=300+r*80,f=Math.sin(l*.5)*20;this.particles.push({x:e,y:i,vx:Math.cos(c)*d+f,vy:Math.sin(c)*d+f,life:1.5,maxLife:1.5,size:Math.random()*5+3,color:n[r%n.length]??"#9932cc",alpha:1,type:"circle"})}},r*80);for(let r=0;r<80;r++){const l=r/8*Math.PI,c=r*4;setTimeout(()=>{this.particles.push({x:e+Math.cos(l)*c*.3,y:i+Math.sin(l)*c*.3,vx:Math.cos(l+Math.PI/2)*150,vy:Math.sin(l+Math.PI/2)*150,life:2,maxLife:2,size:Math.random()*4+2,color:n[r%n.length]??"#9932cc",alpha:1,type:"circle"})},r*15)}for(let r=0;r<100+t*15;r++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*40,y:i+Math.random()*20,vx:(Math.random()-.5)*400,vy:-Math.random()*500-200,life:2.5,maxLife:2.5,size:Math.random()*4+2,color:n[Math.floor(Math.random()*n.length)]??"#8a2be2",alpha:1,type:Math.random()>.3?"spark":"circle"})},Math.random()*300);for(let r=0;r<3;r++)setTimeout(()=>{for(let l=0;l<Math.PI*2;l+=.1)this.particles.push({x:e,y:i,vx:Math.cos(l)*(400+r*100),vy:Math.sin(l)*(400+r*100),life:.8,maxLife:.8,size:1,color:"#ffffff",alpha:.8,type:"circle"})},r*200);for(let r=0;r<50;r++){let l;if(o.length>0&&Math.random()<.7){const c=Math.floor(r/50*o.length),d=o[c]||o[0];d?l=d.angle+(Math.random()-.5)*(Math.PI/3):l=r/50*Math.PI*2}else l=r/50*Math.PI*2;setTimeout(()=>{this.particles.push({x:e,y:i,vx:Math.cos(l)*500,vy:Math.sin(l)*500,life:1.2,maxLife:1.2,size:Math.random()*6+2,color:"#9932cc",alpha:1,type:"circle"})},r*20)}}createAEffectWithSwords(e,i,t,s,a){const n={color:"#00bfff",trailColor:"rgba(0, 191, 255, 1)",size:45,speed:8,glowIntensity:80},o=a||[],r=Math.min(12,Math.max(8,Math.floor(t*1.2)));this.createSwords(e,i,o,n,r,0),s?.massive,s?.corner}createAEffect(e,i,t,s){const a=["#87ceeb","#87cefa","#00bfff","#1e90ff","#6495ed","#4682b4","#add8e6","#b0e0e6","#afeeee"],n=this.calculateFlipDirections(e,i,s);if(n.length>0)for(const o of n)for(let r=0;r<3;r++)for(let l=0;l<20;l++)setTimeout(()=>{const c=(Math.random()-.5)*(Math.PI/4),d=o.angle+c,f=250+r*50;this.particles.push({x:e,y:i,vx:Math.cos(d)*f,vy:Math.sin(d)*f,life:1+r*.2,maxLife:1+r*.2,size:Math.random()*4+2,color:a[r%a.length]??"#87ceeb",alpha:1,type:"circle"})},l*20+r*150);else{const o=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];for(const[r,l]of o)for(let c=0;c<3;c++)for(let d=0;d<15;d++)setTimeout(()=>{this.particles.push({x:e,y:i,vx:r*(250+c*50),vy:l*(250+c*50),life:1+c*.2,maxLife:1+c*.2,size:Math.random()*4+2,color:a[c%a.length]??"#87ceeb",alpha:1,type:"circle"})},d*25+c*200)}for(let o=0;o<4;o++)setTimeout(()=>{for(let r=0;r<30;r++){let l;if(n.length>0&&Math.random()<.4){const d=Math.floor(r/30*n.length),f=n[d]||n[0];f?l=f.angle+(Math.random()-.5)*(Math.PI/3):l=r/30*Math.PI*2}else l=r/30*Math.PI*2;const c=180+o*60;this.particles.push({x:e,y:i,vx:Math.cos(l)*c,vy:Math.sin(l)*c,life:1.2,maxLife:1.2,size:Math.random()*3+2,color:a[o%a.length]??"#87ceeb",alpha:1,type:"circle"})}},o*150);for(let o=0;o<60+t*8;o++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*30,y:i+Math.random()*15,vx:(Math.random()-.5)*300,vy:-Math.random()*350-150,life:1.8,maxLife:1.8,size:Math.random()*3+1,color:a[Math.floor(Math.random()*a.length)]??"#4169e1",alpha:1,type:"spark"})},Math.random()*400);for(let o=0;o<25;o++){const r=Math.random()*Math.PI*2,l=Math.random()*100+50;this.particles.push({x:e+Math.cos(r)*l,y:i+Math.sin(r)*l,vx:Math.cos(r)*100,vy:Math.sin(r)*100,life:.8,maxLife:.8,size:Math.random()*3+1,color:"#87ceeb",alpha:1,type:"circle"})}}createBEffect(e,i,t){const s=["#90ee90","#98fb98","#00ff7f","#00fa9a","#7cfc00","#7fff00","#adff2f","#9aff9a","#b4ffb4"];for(let a=0;a<2;a++)setTimeout(()=>{for(let n=0;n<25;n++){const o=n/25*Math.PI*2,r=120+a*40;this.particles.push({x:e,y:i,vx:Math.cos(o)*r,vy:Math.sin(o)*r,life:1,maxLife:1,size:Math.random()*2+2,color:s[a%s.length]??"#90ee90",alpha:1,type:"circle"})}},a*100);for(let a=0;a<20+t*5;a++){const n=Math.random()*Math.PI*2,o=Math.random()*150+80;setTimeout(()=>{this.particles.push({x:e,y:i,vx:Math.cos(n)*o,vy:Math.sin(n)*o,life:1.2,maxLife:1.2,size:Math.random()*2+1,color:s[Math.floor(Math.random()*s.length)]??"#00ff7f",alpha:1,type:"spark"})},Math.random()*200)}for(let a=0;a<8;a++){const n=a/8*Math.PI*2;for(let o=0;o<5;o++)setTimeout(()=>{this.particles.push({x:e,y:i,vx:Math.cos(n)*(150+o*30),vy:Math.sin(n)*(150+o*30),life:.8,maxLife:.8,size:2,color:"#90ee90",alpha:1,type:"circle"})},o*50)}}createGreenLotusEffect(e,i,t){const s=t.map(n=>({x:n.x,y:n.y})),a=new ue(e,i,s);this.greenLotusEffects.push(a)}createUnlimitedBladeWorksEffect(e,i,t){const s=t.map(n=>({x:n.x,y:n.y})),a=new pe(e,i,s);this.ubwEffects.push(a)}createDivineThunderEffect(e,i,t){const s=t.map(n=>({x:n.x,y:n.y})),a=new be(e,i,s);this.divineThunderEffects.push(a)}createNineFinaleEffect(e,i,t){const s=t.map(n=>({x:n.x,y:n.y})),a=new Me(e,i,s);this.nineFinaleEffects.push(a)}createIceSpearEffect(e,i,t){const s=t.map(n=>({x:n.x,y:n.y})),a=new Se(e,i,s);this.iceSpearEffects.push(a)}createCEffect(e,i){const t=["#d3d3d3","#c0c0c0","#dcdcdc","#f5f5f5","#e0e0e0","#f8f8f8","#b8b8b8","#a9a9a9","#d8d8d8","#e6e6e6"];for(let s=0;s<12;s++){const a=s/12*Math.PI*2;this.particles.push({x:e,y:i,vx:Math.cos(a)*80,vy:Math.sin(a)*80,life:.8,maxLife:.8,size:Math.random()*1.5+1,color:t[s%t.length]??"#d3d3d3",alpha:.8,type:"circle"})}for(let s=0;s<6;s++){const a=Math.random()*Math.PI*2,n=Math.random()*60+40;this.particles.push({x:e,y:i,vx:Math.cos(a)*n,vy:Math.sin(a)*n,life:.6,maxLife:.6,size:1,color:"#d3d3d3",alpha:.7,type:"spark"})}}createFlipEffect(e,i,t,s){const a=t==="#000000";let n,o;if(s)switch(s){case"SSS":n=["#ffd700","#ffef94","#fff68f","#ffffe0","#fffacd"],o=3;break;case"SS":n=["#ff8c00","#ffa500","#ff7f00","#ff6347","#ff4500"],o=2.5;break;case"S":n=["#dda0dd","#e6b8ea","#d8bfd8","#e0b0ff","#dbb2ff"],o=2;break;case"A":n=["#87ceeb","#add8e6","#b0e0e6","#afeeee","#e0ffff"],o=1.5;break;case"B":n=["#90ee90","#98fb98","#b4ffb4","#c8ffc8","#a8e6a8"],o=1.2;break;case"C":n=["#d3d3d3","#c0c0c0","#e0e0e0","#f5f5f5","#b8b8b8"],o=1;break;default:n=a?["#666666","#888888","#555555"]:["#f0f0f0","#e8e8e8","#f5f5f5"],o=.8}else n=a?["#666666","#888888","#555555"]:["#f0f0f0","#e8e8e8","#f5f5f5"],o=.8;const r=n[0]??"#ffffff",l=n,c=Math.floor(15*o);for(let f=0;f<c;f++){const p=f/c*Math.PI*2,y=(Math.random()*60+60)*o;this.particles.push({x:e,y:i,vx:Math.cos(p)*y,vy:Math.sin(p)*y,life:.6*o,maxLife:.6*o,size:(Math.random()*1.5+1)*o,color:f%3===0?r:l[f%l.length]??r,alpha:.9,type:f%2===0?"spark":"circle"})}const d=Math.floor(2+o);for(let f=0;f<d;f++)setTimeout(()=>{const p=Math.floor(12+o*4);for(let y=0;y<p;y++){const S=y/p*Math.PI*2,w=(80+f*30)*o;this.particles.push({x:e,y:i,vx:Math.cos(S)*w,vy:Math.sin(S)*w,life:.6+f*.2,maxLife:.6+f*.2,size:f===0?2:1,color:r,alpha:.7-f*.2,type:"circle"})}},f*80);for(let f=0;f<15;f++){const p=Math.random()*Math.PI*2,y=Math.random()*60+40;setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*20,y:i+(Math.random()-.5)*20,vx:Math.cos(p)*y,vy:Math.sin(p)*y,life:.7,maxLife:.7,size:Math.random()*1.5+1,color:l[Math.floor(Math.random()*l.length)]??"#d3d3d3",alpha:.8,type:"spark"})},Math.random()*200)}for(let f=0;f<8;f++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*30,y:i+(Math.random()-.5)*30,vx:(Math.random()-.5)*30,vy:-Math.random()*40-20,life:1.2,maxLife:1.2,size:Math.random()*1+.5,color:r,alpha:.6,type:"circle"})},Math.random()*300);setTimeout(()=>{for(let f=0;f<Math.PI*2;f+=.2)this.particles.push({x:e,y:i,vx:Math.cos(f)*150,vy:Math.sin(f)*150,life:.4,maxLife:.4,size:1.5,color:a?"#333333":"#f9f9f9",alpha:.5,type:"circle"})},100)}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles=[],this.canvas.remove()}getParticleCount(){return this.particles.length}createCornerExplosion(e,i){const t=["#ffd700","#ffdf00","#ffa500"];for(let s=0;s<4;s++){const a=s/4*Math.PI*2;for(let n=0;n<20;n++)setTimeout(()=>{this.particles.push({x:e,y:i,vx:Math.cos(a)*300+(Math.random()-.5)*100,vy:Math.sin(a)*300+(Math.random()-.5)*100,life:1.5,maxLife:1.5,size:Math.random()*3+2,color:t[n%t.length]??"#ffd700",alpha:1,type:"circle"})},n*30+s*200)}}createComebackEffect(e,i){const t=["#ff4500","#ff6347","#ffa500","#ff1493"];for(let s=0;s<80;s++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*60,y:i+Math.random()*30,vx:(Math.random()-.5)*200,vy:-Math.random()*400-200,life:2,maxLife:2,size:Math.random()*4+2,color:t[Math.floor(Math.random()*t.length)]??"#ff6347",alpha:.9,type:"spark"})},Math.random()*600)}createMassiveEffect(e,i){const t=["#0080ff","#00bfff","#87ceeb","#b0e0e6"];for(let s=0;s<6;s++)setTimeout(()=>{for(let a=0;a<40;a++){const n=a/40*Math.PI*2;this.particles.push({x:e,y:i,vx:Math.cos(n)*(200+s*50),vy:Math.sin(n)*(200+s*50),life:1+s*.2,maxLife:1+s*.2,size:Math.random()*3+1,color:t[s%t.length]??"#0080ff",alpha:.8,type:"circle"})}},s*150)}createDominationEffect(e,i){const t=["#9932cc","#8b00ff","#ffd700","#daa520"];for(let s=0;s<12;s++){const a=s/12*Math.PI*2;setTimeout(()=>{this.particles.push({x:e+Math.cos(a)*50,y:i+Math.sin(a)*50,vx:Math.cos(a)*150,vy:Math.sin(a)*150,life:1.8,maxLife:1.8,size:Math.random()*4+3,color:t[s%t.length]??"#9932cc",alpha:1,type:"circle"})},s*80)}}createChainEffect(e,i){if(!this.enabled)return;const t=["#ffff00","#ffffff","#00ffff"];for(let s=0;s<8;s++){const a=s/8*Math.PI*2;for(let n=0;n<10;n++)setTimeout(()=>{this.particles.push({x:e,y:i,vx:Math.cos(a)*(100+n*20)+(Math.random()-.5)*60,vy:Math.sin(a)*(100+n*20)+(Math.random()-.5)*60,life:.4,maxLife:.4,size:2,color:t[n%t.length]??"#ffff00",alpha:1,type:"spark"})},n*20+s*50)}}createFloatingGradeText(e,i,t){if(!this.enabled)return;const a={C:{color:"#d3d3d3",fontSize:24},B:{color:"#90ee90",fontSize:28},A:{color:"#87ceeb",fontSize:42},S:{color:"#9932cc",fontSize:48},SS:{color:"#ff8c00",fontSize:56},SSS:{color:"#ffd700",fontSize:64}}[t];a&&(this.ctx&&this.canvas?(this.particles.push({x:e,y:i,vx:0,vy:-80,life:2,maxLife:2,size:a.fontSize,color:a.color,alpha:1,type:"text",text:t,fontSize:a.fontSize}),t==="SSS"?setTimeout(()=>{this.particles.push({x:e,y:i-10,vx:0,vy:-60,life:2.5,maxLife:2.5,size:72,color:"#ffa500",alpha:.7,type:"text",text:t,fontSize:72})},100):t==="SS"?setTimeout(()=>{this.particles.push({x:e,y:i-8,vx:0,vy:-65,life:2.2,maxLife:2.2,size:64,color:"#ff4500",alpha:.6,type:"text",text:t,fontSize:64})},80):t==="S"?setTimeout(()=>{this.particles.push({x:e,y:i-6,vx:0,vy:-70,life:2,maxLife:2,size:54,color:"#ba55d3",alpha:.5,type:"text",text:t,fontSize:54})},60):t==="A"&&setTimeout(()=>{this.particles.push({x:e,y:i-5,vx:0,vy:-75,life:1.8,maxLife:1.8,size:48,color:"#4169e1",alpha:.4,type:"text",text:t,fontSize:48})},40)):this.createCSSFloatingText(e,i,t))}createCSSFloatingText(e,i,t){const s=this.canvas.parentElement;if(!s)return;const a=document.createElement("div");a.className=`floating-grade-text grade-${t.toLowerCase()}`,a.textContent=t,a.style.left=`${e}px`,a.style.top=`${i}px`,a.style.transform="translate(-50%, -50%)",s.appendChild(a),setTimeout(()=>{a.parentNode&&a.parentNode.removeChild(a)},2e3)}}const Te={"loading.title":"Loading Super Reversi...","loading.details":"Initializing game engine and AI systems","app.title":"🎮 Super Reversi","game.black":"Black","game.white":"White","game.current":"Current","game.currentTurn":"Current Turn:","game.mode":"Mode","game.pvp":"Player vs Player","game.pvai":"Player vs AI","game.back":"← Back to Menu","game.blackWins":"Black Wins!","game.whiteWins":"White Wins!","game.tie":"It's a Tie!","game.gameOverTitle":"Game Over!","game.totalMoves":"Total moves","game.playAgain":"Play Again","game.mainMenu":"Main Menu","menu.chooseMode":"🎯 Choose Game Mode","menu.pvp":"Player vs Player","menu.pvc":"Player vs Computer","menu.settings":"Settings","menu.help":"How to Play","menu.back":"← Back to Menu","menu.selectDifficulty":"🤖 Select AI Difficulty","menu.easy":"Easy","menu.medium":"Medium","menu.hard":"Hard","menu.easyDesc":"Easy: AI makes random valid moves","menu.mediumDesc":"Medium: AI tries to maximize flips","menu.hardDesc":"Hard: AI uses advanced strategy","menu.startGame":"Start Game","settings.title":"⚙️ Settings","settings.language":"Language","settings.visual":"Visual Settings","settings.showValid":"Show valid moves","settings.showLast":"Highlight last move","settings.showMobility":"Show mobility","settings.animations":"Enable animations","settings.game":"Game Settings","settings.autoPass":"Auto-pass when no moves","settings.confirm":"Confirm moves (vs Computer)","settings.save":"Save Settings","settings.saved":"Settings saved!","help.title":"❓ How to Play Reversi","help.objectiveTitle":"🎯 Objective","help.objectiveText":"Have the most pieces when the game ends.","help.rulesTitle":"📋 Rules","help.rules1":"Black moves first","help.rules2":"Capture pieces between yours","help.rules3":"Can capture in 8 directions","help.rules4":"Must capture at least 1 piece","help.rules5":"Pass if no valid moves","help.rules6":"Game ends when no moves left","help.strategyTitle":"💡 Strategy","help.strategy1":"<strong>Corners:</strong> Can't be flipped!","help.strategy2":"<strong>Edges:</strong> Harder to flip","help.strategy3":"<strong>Mobility:</strong> Limit opponent moves","help.strategy4":"<strong>Patience:</strong> Less can be more","help.controlsTitle":"🎮 Controls","help.controls1":"Click highlighted cells to move","help.controls2":"Green = valid moves","help.controls3":"Gold = last move","messages.quitConfirm":"Are you sure you want to quit the current game?","messages.moveConfirm":"Confirm this move?","messages.invalidMove":"Invalid move","difficulty.easy":"Easy","difficulty.medium":"Medium","difficulty.hard":"Hard","combo.counter":"${count} Combo!","combo.double":"Twin Strike!","combo.triple":"Triple Tempest!","combo.quadruple":"Quadra Blaze!","combo.quintuple":"Penta Storm!","combo.sextuple":"Hexa Fury!","combo.septuple":"Hepta Cataclysm!","special.corner_joseki":"Corner Joseki!","special.great_reversal":"Great Reversal!","special.total_domination":"Total Domination!","special.desperate_kill":"Desperate Kill!","special.perfect_endgame":"Perfect Endgame!","special.edge_control":"Edge Control!","special.chain_reaction":"Chain Reaction!","special.time_control":"Time Control!","special.green_lotus":"Green Lotus Sword Song!","special.blade_echo":"Blade Echo!","special.divine_thunder":"Divine Thunder Strike!","special.corner_joseki.subtitle":"Corner Joseki","special.great_reversal.subtitle":"Great Reversal","special.total_domination.subtitle":"Total Domination","special.desperate_kill.subtitle":"Desperate Kill","special.perfect_endgame.subtitle":"Perfect Endgame","special.edge_control.subtitle":"Edge Control","special.chain_reaction.subtitle":"Chain Reaction","special.time_control.subtitle":"Time Control","special.green_lotus.subtitle":"Green Lotus Sword Song","special.blade_echo.subtitle":"Blade Echo","special.divine_thunder.subtitle":"Divine Thunder Strike","special.nine_finale":"Nine Finale Destruction!","special.nine_finale.subtitle":"Nine Finale Destruction","special.ice_spear_abyss":"Ice Spear Abyss!","special.ice_spear_abyss.subtitle":"Ice Spear Abyss","modal.ok":"OK","modal.cancel":"Cancel","modal.confirm":"Confirm","modal.yes":"Yes","modal.no":"No","modal.info":"Information","modal.warning":"Warning","modal.error":"Error","modal.success":"Success","modal.confirm.title":"Confirm","modal.settingsComing":"Settings feature coming soon!","modal.testClick":"You clicked position ${position}","modal.appWorking":"Application is working!","modal.moveConfirm.title":"Confirm Move","modal.quitConfirm.title":"Quit Game","modal.settingsSaved.title":"Settings Saved"},xe={"loading.title":"正在載入超級黑白棋...","loading.details":"正在初始化遊戲引擎與人工智慧系統","app.title":"🎮 超級黑白棋","game.black":"黑棋","game.white":"白棋","game.current":"現在","game.currentTurn":"目前回合：","game.mode":"模式","game.pvp":"玩家對戰","game.pvai":"玩家對電腦","game.back":"← 返回選單","game.blackWins":"黑棋勝利！","game.whiteWins":"白棋勝利！","game.tie":"平手！","game.gameOverTitle":"遊戲結束！","game.totalMoves":"總步數","game.playAgain":"再玩一次","game.mainMenu":"回主選單","menu.chooseMode":"🎯 選擇遊戲模式","menu.pvp":"玩家對玩家","menu.pvc":"玩家對電腦","menu.settings":"設定","menu.help":"玩法說明","menu.back":"← 返回選單","menu.selectDifficulty":"🤖 選擇AI難度","menu.easy":"簡單","menu.medium":"中等","menu.hard":"困難","menu.easyDesc":"簡單：AI隨機下合法棋","menu.mediumDesc":"中等：AI試著最大化翻子","menu.hardDesc":"困難：AI使用進階策略","menu.startGame":"開始遊戲","settings.title":"⚙️ 設定","settings.language":"語言","settings.visual":"視覺設定","settings.showValid":"顯示可下位置","settings.showLast":"標示上一手","settings.showMobility":"顯示行動力","settings.animations":"啟用動畫","settings.game":"遊戲設定","settings.autoPass":"無棋可下自動跳過","settings.confirm":"與電腦對戰時確認落子","settings.save":"保存設定","settings.saved":"設定已保存！","help.title":"❓ 如何遊玩黑白棋","help.objectiveTitle":"🎯 目標","help.objectiveText":"遊戲結束時棋子數最多者獲勝。","help.rulesTitle":"📋 規則","help.rules1":"黑棋先行","help.rules2":"夾住對方棋子以翻轉","help.rules3":"可向八個方向翻棋","help.rules4":"至少翻一子才能落子","help.rules5":"無棋可下時須跳過","help.rules6":"雙方皆無棋可下時遊戲結束","help.strategyTitle":"💡 策略","help.strategy1":"<strong>角落：</strong> 不會被翻轉！","help.strategy2":"<strong>邊緣：</strong> 較不易被翻","help.strategy3":"<strong>行動力：</strong> 限制對手落子","help.strategy4":"<strong>耐心：</strong> 有時少卻是多","help.controlsTitle":"🎮 操作","help.controls1":"點擊高亮格子落子","help.controls2":"綠色 = 可下位置","help.controls3":"金色 = 上一步","messages.quitConfirm":"確定要結束目前的遊戲嗎？","messages.moveConfirm":"確定這一步嗎？","messages.invalidMove":"無效的落子","difficulty.easy":"簡單","difficulty.medium":"中等","difficulty.hard":"困難","combo.counter":"${count} 連擊！","combo.double":"雙星爆擊！","combo.triple":"三連風暴！","combo.quadruple":"四極炎舞！","combo.quintuple":"五芒雷鳴！","combo.sextuple":"六道狂怒！","combo.septuple":"七星毀滅！","special.corner_joseki":"角部定式！","special.great_reversal":"大翻盤！","special.total_domination":"完全壓制！","special.desperate_kill":"絕地反殺！","special.perfect_endgame":"完美收官！","special.edge_control":"邊線掌控！","special.chain_reaction":"連鎖反應！","special.time_control":"時間掌控！","special.green_lotus":"青蓮劍歌！","special.blade_echo":"劍刃迴響！","special.divine_thunder":"神劍御雷！","special.corner_joseki.subtitle":"角部定式","special.great_reversal.subtitle":"大翻盤","special.total_domination.subtitle":"完全壓制","special.desperate_kill.subtitle":"絕地反殺","special.perfect_endgame.subtitle":"完美收官","special.edge_control.subtitle":"邊線掌控","special.chain_reaction.subtitle":"連鎖反應","special.time_control.subtitle":"時間掌控","special.green_lotus.subtitle":"青蓮劍歌","special.blade_echo.subtitle":"劍刃迴響","special.divine_thunder.subtitle":"神劍御雷","special.nine_finale":"九俱焚滅！","special.nine_finale.subtitle":"九俱焚滅","special.ice_spear_abyss":"滅劍羅淵！","special.ice_spear_abyss.subtitle":"滅劍羅淵","modal.ok":"確定","modal.cancel":"取消","modal.confirm":"確認","modal.yes":"是","modal.no":"否","modal.info":"資訊","modal.warning":"警告","modal.error":"錯誤","modal.success":"成功","modal.confirm.title":"確認","modal.settingsComing":"設定功能即將推出！","modal.testClick":"你點擊了位置 ${position}","modal.appWorking":"應用程式運作正常！","modal.moveConfirm.title":"確認移動","modal.quitConfirm.title":"退出遊戲","modal.settingsSaved.title":"設定已儲存"},Ee={"loading.title":"正在加载超级黑白棋...","loading.details":"正在初始化游戏引擎和人工智能系统","app.title":"🎮 超级黑白棋","game.black":"黑棋","game.white":"白棋","game.current":"当前","game.currentTurn":"当前回合：","game.mode":"模式","game.pvp":"玩家对战","game.pvai":"玩家对电脑","game.back":"← 返回菜单","game.blackWins":"黑棋胜利！","game.whiteWins":"白棋胜利！","game.tie":"平局！","game.gameOverTitle":"游戏结束！","game.totalMoves":"总步数","game.playAgain":"再玩一次","game.mainMenu":"回主菜单","menu.chooseMode":"🎯 选择游戏模式","menu.pvp":"玩家对玩家","menu.pvc":"玩家对电脑","menu.settings":"设置","menu.help":"玩法说明","menu.back":"← 返回菜单","menu.selectDifficulty":"🤖 选择AI难度","menu.easy":"简单","menu.medium":"中等","menu.hard":"困难","menu.easyDesc":"简单：AI随机下合法棋","menu.mediumDesc":"中等：AI尝试最大化翻子","menu.hardDesc":"困难：AI使用高级策略","menu.startGame":"开始游戏","settings.title":"⚙️ 设置","settings.language":"语言","settings.visual":"视觉设置","settings.showValid":"显示可下位置","settings.showLast":"标记上一步","settings.showMobility":"显示行动力","settings.animations":"启用动画","settings.game":"游戏设置","settings.autoPass":"无棋可下自动跳过","settings.confirm":"与电脑对战时确认落子","settings.save":"保存设置","settings.saved":"设置已保存！","help.title":"❓ 如何玩黑白棋","help.objectiveTitle":"🎯 目标","help.objectiveText":"游戏结束时棋子数最多者获胜。","help.rulesTitle":"📋 规则","help.rules1":"黑棋先行","help.rules2":"夹住对方棋子以翻转","help.rules3":"可向八个方向翻棋","help.rules4":"至少翻一子才能落子","help.rules5":"无棋可下时须跳过","help.rules6":"双方均无棋可下时游戏结束","help.strategyTitle":"💡 策略","help.strategy1":"<strong>角落：</strong> 不会被翻转！","help.strategy2":"<strong>边缘：</strong> 较不易被翻","help.strategy3":"<strong>行动力：</strong> 限制对手落子","help.strategy4":"<strong>耐心：</strong> 有时少却是多","help.controlsTitle":"🎮 操作","help.controls1":"点击高亮格子落子","help.controls2":"绿色 = 可下位置","help.controls3":"金色 = 上一步","messages.quitConfirm":"确定要结束当前的游戏吗？","messages.moveConfirm":"确认这一步吗？","messages.invalidMove":"无效的落子","difficulty.easy":"简单","difficulty.medium":"中等","difficulty.hard":"困难","combo.counter":"${count} 连击！","combo.double":"双星爆击！","combo.triple":"三连风暴！","combo.quadruple":"四极炎舞！","combo.quintuple":"五芒雷鸣！","combo.sextuple":"六道狂怒！","combo.septuple":"七星毁灭！","special.corner_joseki":"角部定式！","special.great_reversal":"大翻盘！","special.total_domination":"完全压制！","special.desperate_kill":"绝地反杀！","special.perfect_endgame":"完美收官！","special.edge_control":"边线掌控！","special.chain_reaction":"连锁反应！","special.time_control":"时间掌控！","special.green_lotus":"青莲剑歌！","special.blade_echo":"剑刃回响！","special.divine_thunder":"神剑御雷！","special.corner_joseki.subtitle":"角部定式","special.great_reversal.subtitle":"大翻盘","special.total_domination.subtitle":"完全压制","special.desperate_kill.subtitle":"绝地反杀","special.perfect_endgame.subtitle":"完美收官","special.edge_control.subtitle":"边线掌控","special.chain_reaction.subtitle":"连锁反应","special.time_control.subtitle":"时间掌控","special.green_lotus.subtitle":"青莲剑歌","special.blade_echo.subtitle":"剑刃回响","special.divine_thunder.subtitle":"神剑御雷","special.nine_finale":"九俱焚灭！","special.nine_finale.subtitle":"九俱焚灭","special.ice_spear_abyss":"灭剑罗渊！","special.ice_spear_abyss.subtitle":"灭剑罗渊","modal.ok":"确定","modal.cancel":"取消","modal.confirm":"确认","modal.yes":"是","modal.no":"否","modal.info":"信息","modal.warning":"警告","modal.error":"错误","modal.success":"成功","modal.confirm.title":"确认","modal.settingsComing":"设置功能即将推出！","modal.testClick":"你点击了位置 ${position}","modal.appWorking":"应用程序运行正常！","modal.moveConfirm.title":"确认移动","modal.quitConfirm.title":"退出游戏","modal.settingsSaved.title":"设置已保存"};let ne="en";const oe={en:Te,"zh-Hant":xe,"zh-Hans":Ee};function m(h,e){let t=oe[ne][h]??h;return e&&(t=t.replace(/\$\{(\w+)\}/g,(s,a)=>Object.prototype.hasOwnProperty.call(e,a)?String(e[a]):"")),t}function ie(h){h in oe&&(ne=h,typeof document<"u"&&(document.documentElement.lang=h))}function se(h=document){h.querySelectorAll("[data-i18n]").forEach(i=>{const t=i.dataset.i18n;i.textContent=m(t)})}const _e={none:{effectType:"snowflake",intensity:1,duration:500},double:{effectType:"magic",intensity:1.5,duration:800,soundEffect:"combo_double"},triple:{effectType:"fire",intensity:2,duration:1200,soundEffect:"combo_triple",screenShake:!0},quadruple:{effectType:"explosion",intensity:2.5,duration:1500,soundEffect:"combo_quadruple",screenShake:!0},quintuple:{effectType:"lightning",intensity:3,duration:1800,soundEffect:"combo_quintuple",screenShake:!0,slowMotion:!1},sextuple:{effectType:"storm",intensity:4,duration:2200,soundEffect:"combo_sextuple",screenShake:!0,slowMotion:!0},septuple:{effectType:"blackhole",intensity:5,duration:2500,soundEffect:"combo_septuple",screenShake:!0,slowMotion:!0}};class Ie{_state;_eventHandlers=[];_history=[];constructor(){this._state=this.createInitialState()}createInitialState(){return{count:0,player:null,multiplier:1,startTime:0,isActive:!1,maxCombo:0,type:"none"}}get state(){return Object.freeze({...this._state})}get history(){return Object.freeze([...this._history])}processMove(e,i,t){return i?this.endCombo():this._state.player===e?this.continueCombo(t):this.startCombo(e,t)}startCombo(e,i){this._state.isActive&&this.endCombo(),this._state={count:2,player:e,multiplier:1.2,startTime:Date.now(),isActive:!0,maxCombo:Math.max(this._state.maxCombo,2),type:"double"};const t={type:"combo_started",player:e,comboCount:this._state.count,comboType:this._state.type,effect:this.getComboEffect(),timestamp:Date.now()};return this._emitEvent(t),this._history.push(t),t}continueCombo(e){if(!this._state.isActive||!this._state.player)throw new Error("Cannot continue combo: no active combo");this._state.count++,this._state.multiplier=Math.min(1+this._state.count*.2,3),this._state.maxCombo=Math.max(this._state.maxCombo,this._state.count),this._state.type=this.determineComboType(this._state.count);const i={type:"combo_continued",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,effect:this.getComboEffect(),timestamp:Date.now()};return this._emitEvent(i),this._history.push(i),i}endCombo(){if(!this._state.isActive||!this._state.player)return null;const e={type:"combo_ended",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,timestamp:Date.now()};return this._state=this.createInitialState(),this._state.maxCombo=this.state.maxCombo,this._emitEvent(e),this._history.push(e),e}breakCombo(e="manual"){if(!this._state.isActive||!this._state.player)return null;const i={type:"combo_broken",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,timestamp:Date.now()};return this._state=this.createInitialState(),this._state.maxCombo=this.state.maxCombo,this._emitEvent(i),this._history.push(i),i}determineComboType(e){return e>=7?"septuple":e>=6?"sextuple":e>=5?"quintuple":e>=4?"quadruple":e>=3?"triple":e>=2?"double":"none"}getComboEffect(){const e=_e[this._state.type],i=Math.min(this._state.count*.1,1);return{...e,intensity:e.intensity+i,duration:e.duration+this._state.count*50}}getStats(){const e=this._history.filter(a=>a.type==="combo_ended"||a.type==="combo_broken"),i=e.length,t=i>0?e.reduce((a,n)=>a+n.comboCount,0)/i:0,s={none:0,double:0,triple:0,quadruple:0,quintuple:0,sextuple:0,septuple:0};return e.forEach(a=>{s[a.comboType]++}),{currentCombo:this._state.count,maxCombo:this._state.maxCombo,totalCombos:i,averageComboLength:t,comboTypeDistribution:s}}getSuggestedEffect(e){switch(e){case"septuple":return"blackhole";case"sextuple":return"storm";case"quintuple":return"lightning";case"quadruple":return"explosion";case"triple":return"fire";case"double":return"magic";default:return"snowflake"}}shouldPlaySpecialSound(e){return!["none","double"].includes(e)}shouldTriggerScreenShake(e){return["quintuple","sextuple","septuple"].includes(e)}shouldTriggerSlowMotion(e){return e==="septuple"}reset(){this._state=this.createInitialState(),this._history=[]}addEventListener(e){this._eventHandlers.push(e)}removeEventListener(e){const i=this._eventHandlers.indexOf(e);i!==-1&&this._eventHandlers.splice(i,1)}_emitEvent(e){this._eventHandlers.forEach(i=>{try{i(e)}catch{}})}getComboDisplayText(){if(!this._state.isActive)return"";const e=`combo.${this._state.type}`,i=m(e);return i===e?`${this._state.count} combo!`:i}getComboDisplayColor(){return{none:"#ffffff",double:"#90ee90",triple:"#ffa500",quadruple:"#ff6347",quintuple:"#ff1493",sextuple:"#9932cc",septuple:"#ffd700"}[this._state.type]||"#ffffff"}}const Ce={corner_joseki:{positionType:"corner",minFlipCount:3,timing:"early"},great_reversal:{minFlipCount:6},total_domination:{scoreDifference:{min:15,max:999},minFlipCount:4},desperate_kill:{scoreDifference:{min:-15,max:-1},minFlipCount:4},perfect_endgame:{scoreDifference:{min:20,max:999},special:"near_endgame"},edge_control:{positionType:"edge",minFlipCount:5},chain_reaction:{minFlipCount:8,special:"multiple_directions"},time_control:{minFlipCount:10,special:"ultra_rare"}};D("explosion","magic",.7),m("special.corner_joseki"),m("special.corner_joseki.subtitle"),D("storm","lightning",.6),m("special.great_reversal"),m("special.great_reversal.subtitle"),D("blackhole","magic",.8),m("special.total_domination"),m("special.total_domination.subtitle"),D("fire","explosion",.8),m("special.desperate_kill"),m("special.desperate_kill.subtitle"),{...G.blackhole},m("special.perfect_endgame"),m("special.perfect_endgame.subtitle"),D("lightning","storm",.5),m("special.edge_control"),m("special.edge_control.subtitle"),D("lightning","explosion",.7),m("special.chain_reaction"),m("special.chain_reaction.subtitle"),{...G.blackhole},m("special.time_control"),m("special.time_control.subtitle");class Pe{static detectSpecialMove(e,i,t,s,a,n){const o=[],r=i.length,l=t-s;for(const[c,d]of Object.entries(Ce))this.checkCondition(c,d,e,r,l,a,n,i)&&o.push(c);return o}static checkCondition(e,i,t,s,a,n,o,r){if(i.minFlipCount&&s<i.minFlipCount)return!1;if(i.scoreDifference){const{min:l,max:c}=i.scoreDifference;if(a<l||a>c)return!1}return!(i.positionType&&!this.checkPositionType(t,i.positionType)||i.timing&&!this.checkTiming(i.timing,n,o)||i.special&&!this.checkSpecialCondition(e,i.special,{position:t,flipCount:s,scoreDiff:a,moveNumber:n,totalMoves:o,flippedPositions:r}))}static checkPositionType(e,i){const t=Math.floor(e/8),s=e%8;switch(i){case"corner":return(t===0||t===7)&&(s===0||s===7);case"edge":return t===0||t===7||s===0||s===7;case"center":return t>=2&&t<=5&&s>=2&&s<=5;default:return!1}}static checkTiming(e,i,t){const s=i/Math.max(t,60);switch(e){case"early":return s<.3;case"mid":return s>=.3&&s<=.7;case"late":return s>.7;default:return!0}}static checkSpecialCondition(e,i,t){switch(i){case"near_endgame":return t.moveNumber>Math.max(t.totalMoves*.8,40);case"multiple_directions":return this.checkMultipleDirections(t.position,t.flippedPositions);case"ultra_rare":return t.flipCount>=15&&Math.abs(t.scoreDiff)>10;default:return!0}}static checkMultipleDirections(e,i){const t=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],s=Math.floor(e/8),a=e%8;let n=0;for(const[o,r]of t){if(o===void 0||r===void 0)continue;let l=!1,c=s+o,d=a+r;for(;c>=0&&c<8&&d>=0&&d<8;){const f=c*8+d;if(i.includes(f)){l=!0;break}c+=o,d+=r}l&&n++}return n>=3}}const E=8,K=64;var g=(h=>(h[h.EMPTY=0]="EMPTY",h[h.BLACK=1]="BLACK",h[h.WHITE=2]="WHITE",h))(g||{}),re=(h=>(h.WAITING="waiting",h.IN_PROGRESS="in_progress",h.PAUSED="paused",h.GAME_OVER="game_over",h))(re||{}),M=(h=>(h.C="C",h.B="B",h.A="A",h.S="S",h.SS="SS",h.SSS="SSS",h))(M||{}),u=(h=>(h.RANDOM="v0",h.GREEDY="v1",h.MINIMAX="v2",h.ADVANCED="v3",h.MINIMAX_EASY="v2a",h.MINIMAX_HARD="v2b",h.MASTER="v3_master",h.BLITZ="v3_blitz",h.CUSTOM="custom",h))(u||{});const O={CORNER:25,EDGE:6,X_SQUARE:-10,C_SQUARE:-6,NORMAL:0},z={B:10,A:18,S:30,SS:45,SSS:60},Ae={AI_RESPONSE_TIME:{v0:100,v1:1e3,v2:3e3,v3:5e3,v2a:2e3,v2b:4e3,v3_master:1e4,v3_blitz:1500,custom:5e3}},De=h=>h>=0&&h<K,Le=h=>({row:Math.floor(h/E),col:h%E}),V=h=>[0,7,56,63].includes(h),Be=h=>{const e=Le(h);return e.row===0||e.row===7||e.col===0||e.col===7},Re=h=>[9,14,49,54].includes(h);class P{_isThinking=!1;_shouldStop=!1;_metrics={averageThinkingTime:0,movesPlayed:0,totalNodesEvaluated:0,averageDepth:0,timeoutCount:0,accuracy:0};_thinkingHistory=[];_depthHistory=[];_nodeHistory=[];async selectMove(e,i,t){const s=Date.now(),a=t||this.getDefaultTimeLimit();this._isThinking=!0,this._shouldStop=!1;try{const n=await this.selectMoveImpl(e,i,a),o=Date.now()-s;return this.updateMetrics(n,o,a),{...n,thinkingTime:o}}finally{this._isThinking=!1,this._shouldStop=!1}}getDefaultTimeLimit(){return Ae.AI_RESPONSE_TIME[this.difficulty]||1e3}shouldStop(e,i){return this._shouldStop||Date.now()-e>=i}updateMetrics(e,i,t){this._thinkingHistory.push(i),e.depth!==void 0&&this._depthHistory.push(e.depth),e.nodesEvaluated!==void 0&&this._nodeHistory.push(e.nodesEvaluated);const s=this._thinkingHistory.length,a=this._thinkingHistory.reduce((r,l)=>r+l,0),n=this._nodeHistory.reduce((r,l)=>r+l,0),o=this._depthHistory.reduce((r,l)=>r+l,0);this._metrics={averageThinkingTime:a/s,movesPlayed:s,totalNodesEvaluated:n,averageDepth:this._depthHistory.length>0?o/this._depthHistory.length:0,timeoutCount:this._metrics.timeoutCount+(i>=t?1:0),accuracy:this.estimateAccuracy()}}estimateAccuracy(){if(this._metrics.movesPlayed===0)return 0;const e=this.getDefaultTimeLimit(),i=this._metrics.averageThinkingTime,t=Math.min(i/e,1),s=this.getBaseAccuracy();return Math.min(s+t*.3,1)}getBaseAccuracy(){switch(this.difficulty){case u.RANDOM:return .1;case u.GREEDY:return .6;case u.MINIMAX:return .8;case u.ADVANCED:return .9;default:return .5}}getPerformanceMetrics(){return{...this._metrics}}resetMetrics(){this._metrics={averageThinkingTime:0,movesPlayed:0,totalNodesEvaluated:0,averageDepth:0,timeoutCount:0,accuracy:0},this._thinkingHistory=[],this._depthHistory=[],this._nodeHistory=[]}isThinking(){return this._isThinking}stopThinking(){this._shouldStop=!0}}class k{static addJitter(e,i=.1){const t=(Math.random()-.5)*2*i;return e+t}static selectWeightedRandom(e,i=1){if(e.length===0)throw new Error("No candidates to select from");if(e.length===1)return e[0];const t=e.map(o=>({...o,weight:Math.exp(o.score/i)})),s=t.reduce((o,r)=>o+r.weight,0),a=Math.random()*s;let n=0;for(const o of t)if(n+=o.weight,a<=n)return o;return t[t.length-1]}static evaluatePositionStability(e,i,t){let s=0;[0,7,56,63].includes(i)&&(s+=10);const a=Math.floor(i/8),n=i%8;(a===0||a===7||n===0||n===7)&&(s+=3);const r=this.getNeighbors(i).filter(l=>e.board[l]===t).length;return s+=r*.5,s}static getNeighbors(e){const i=[],t=Math.floor(e/8),s=e%8;for(let a=-1;a<=1;a++)for(let n=-1;n<=1;n++){if(a===0&&n===0)continue;const o=t+a,r=s+n;o>=0&&o<8&&r>=0&&r<8&&i.push(o*8+r)}return i}static getGamePhase(e){return(e.scores.black+e.scores.white)/64}static calculateMobility(e,i){return e.validMoves.size}static isDangerousPosition(e){return[1,6,8,9,14,15,48,49,54,55,57,62].includes(e)}}class Oe extends P{difficulty=u.RANDOM;name="Random AI";description="Selects random valid moves with no strategy";async selectMoveImpl(e,i,t){const s=Date.now(),a=Array.from(e.validMoves.keys());if(a.length===0)throw new Error("No valid moves available");const n=Math.random()*50;await new Promise(c=>setTimeout(c,n));const o=Math.floor(Math.random()*a.length),r=a[o],l=this.evaluateMove(e,r,i);return{position:r,confidence:.1,evaluation:l,thinkingTime:Date.now()-s,depth:0,nodesEvaluated:a.length}}evaluateMove(e,i,t){const s=e.validMoves.get(i)||[];let a=0;return[0,7,56,63].includes(i)?a+=25:this.isEdgePosition(i)?a+=6:[9,14,49,54].includes(i)&&(a-=10),a+=s.length,a+=k.addJitter(0,.5),a}isEdgePosition(e){const i=Math.floor(e/8),t=e%8;return i===0||i===7||t===0||t===7}}class ze extends P{difficulty=u.RANDOM;name="Smart Random AI";description="Random moves but avoids obviously terrible positions";async selectMoveImpl(e,i,t){const s=Date.now(),a=Array.from(e.validMoves.keys());if(a.length===0)throw new Error("No valid moves available");const n=a.filter(b=>[0,7,56,63].includes(b)),o=a.filter(b=>this.isEdgePosition(b)&&![0,7,56,63].includes(b)&&!this.isXSquare(b)),r=a.filter(b=>[9,14,49,54].includes(b)),l=a.filter(b=>!n.includes(b)&&!o.includes(b)&&!r.includes(b));let c,d;n.length>0?(c=n,d="corner"):o.length>0?(c=o,d="safe_edge"):l.length>0?(c=l,d="normal"):(c=r,d="x_square");const f=Math.random()*75;await new Promise(b=>setTimeout(b,f));const p=Math.floor(Math.random()*c.length),y=c[p],S=this.evaluateMove(e,y,i),w=this.getConfidenceForMoveType(d);return{position:y,confidence:w,evaluation:S,thinkingTime:Date.now()-s,depth:1,nodesEvaluated:a.length}}evaluateMove(e,i,t){const s=e.validMoves.get(i)||[];let a=0;return[0,7,56,63].includes(i)?a+=25:this.isEdgePosition(i)?a+=6:[9,14,49,54].includes(i)&&(a-=10),a+=s.length,a}isEdgePosition(e){const i=Math.floor(e/8),t=e%8;return i===0||i===7||t===0||t===7}isXSquare(e){return[9,14,49,54].includes(e)}getConfidenceForMoveType(e){switch(e){case"corner":return .8;case"safe_edge":return .6;case"normal":return .3;case"x_square":return .1;default:return .2}}}const W={pure(){return new Oe},smart(){return new ze}},J=h=>{if(!De(h))throw new Error(`Invalid position: ${h}`);return{row:Math.floor(h/E),col:h%E}},le=(h,e,i)=>{if(h[e]!==g.EMPTY)return{isValid:!1,flippedPositions:[],reason:"Position is already occupied"};if(e<0||e>=K)return{isValid:!1,flippedPositions:[],reason:"Position is outside the board"};const t=$e(h,e,i);return t.length===0?{isValid:!1,flippedPositions:[],reason:"Move does not flip any opponent pieces"}:{isValid:!0,flippedPositions:t}},$e=(h,e,i)=>{const t=[],s=i===g.BLACK?g.WHITE:g.BLACK,a=[{row:-1,col:0},{row:-1,col:1},{row:0,col:1},{row:1,col:1},{row:1,col:0},{row:1,col:-1},{row:0,col:-1},{row:-1,col:-1}],n=J(e);for(const o of a){const r=qe(h,n,o,i,s);t.push(...r)}return t};function qe(h,e,i,t,s){const a=[];let n=e.row+i.row,o=e.col+i.col;for(;n>=0&&n<E&&o>=0&&o<E;){const r=n*E+o,l=h[r];if(l===s)a.push(r);else return l===t?a.length>0?a:[]:[];n+=i.row,o+=i.col}return[]}const H=(h,e)=>{const i=new Map;for(let t=0;t<K;t++)if(h[t]===g.EMPTY){const s=le(h,t,e);s.isValid&&i.set(t,s.flippedPositions)}return i},He=(h,e,i,t)=>{const s=new Uint8Array(h);s[e]=i;for(const a of t)s[a]=i;return s},ce=h=>[0,7,56,63].includes(h),he=h=>{const e=J(h);return e.row===0||e.row===7||e.col===0||e.col===7},Ge=h=>[9,14,49,54].includes(h),Ne=h=>[1,6,8,15,48,55,57,62].includes(h),We=(h,e,i)=>{const t=le(h,e,i);if(!t.isValid)return{playerMobility:0,opponentMobility:0};const s=He(h,e,i,t.flippedPositions),a=i===g.BLACK?g.WHITE:g.BLACK,n=H(s,i),o=H(s,a);return{playerMobility:n.size,opponentMobility:o.size}},ae=(h,e,i)=>{let t=0;const s=J(e);if(ce(e))return 10;he(e)&&(t+=3);const a=[{row:-1,col:0},{row:-1,col:1},{row:0,col:1},{row:1,col:1},{row:1,col:0},{row:1,col:-1},{row:0,col:-1},{row:-1,col:-1}];let n=0;for(const o of a){const r=s.row+o.row,l=s.col+o.col;if(r>=0&&r<E&&l>=0&&l<E){const c=r*E+l;h[c]===i&&n++}}return t+=Math.floor(n/2),t},Ye=(h,e,i,t)=>{const s=Fe(h,e,i,t),a=Xe(s.total);return{points:s.total,grade:a,breakdown:Object.freeze(s)}},Fe=(h,e,i,t)=>{const s=Ve(e),a=t.length,n=je(h,e,i,t),o=Ue(h,e,i);let r=s+a+n;const l=Math.max(0,Math.floor(r+o));return{positionValue:s,flippedCount:a,stabilityBonus:n,mobilityFactor:o,total:l}},Ve=h=>ce(h)?O.CORNER:Ge(h)?O.X_SQUARE:Ne(h)?O.C_SQUARE:he(h)?O.EDGE:O.NORMAL,je=(h,e,i,t)=>{let s=0;const a=ae(h,e,i);s+=a;for(const n of t){const o=ae(h,n,i);s+=Math.floor(o/2)}return s},Ue=(h,e,i)=>{const t=We(h,e,i);return t.playerMobility-t.opponentMobility},Xe=h=>h>=z.SSS?M.SSS:h>=z.SS?M.SS:h>=z.S?M.S:h>=z.A?M.A:h>=z.B?M.B:M.C,Q=(h,e,i)=>{const t=[];for(const[s,a]of e.entries()){const n=Ye(h,s,i,[...a]);t.push({position:s,score:n,flippedPositions:[...a]})}return t.sort((s,a)=>a.score.points-s.score.points)},Ke=h=>{if(h.length===0)return null;let e=h[0];for(const i of h)i.score.points>e.score.points&&(e=i);return e};class Je extends P{difficulty=u.GREEDY;name="Greedy AI";description="Selects moves with highest immediate score";async selectMoveImpl(e,i,t){const s=Date.now(),a=Q(e.board,new Map(e.validMoves),i);if(a.length===0)throw new Error("No valid moves available");const o=Math.min(500+Math.random()*300,t*.8)-(Date.now()-s);o>0&&await new Promise(c=>setTimeout(c,o));const r=Ke(a);if(!r)throw new Error("Could not determine best move");const l=this.calculateConfidence(a,r);return{position:r.position,confidence:l,evaluation:r.score.points,thinkingTime:Date.now()-s,depth:1,nodesEvaluated:a.length}}calculateConfidence(e,i){if(e.length===1)return .9;let t=.3;switch(i.score.grade){case M.S:t=.95;break;case M.A:t=.8;break;case M.B:t=.6;break;case M.C:t=.3;break}const s=[...e].sort((a,n)=>n.score.points-a.score.points);if(s.length>1){const a=s[0].score.points-s[1].score.points;a>15?t+=.15:a>5?t+=.05:t-=.1}return Math.max(.1,Math.min(.95,t))}}class Qe extends P{difficulty=u.GREEDY;name="Enhanced Greedy AI";description="Greedy with additional strategic considerations";async selectMoveImpl(e,i,t){const s=Date.now(),a=Q(e.board,new Map(e.validMoves),i);if(a.length===0)throw new Error("No valid moves available");const n=a.map(y=>({...y,enhancedScore:this.calculateEnhancedScore(e,y,i)}));n.sort((y,S)=>S.enhancedScore-y.enhancedScore);const r=n[0].enhancedScore*.9,l=n.filter(y=>y.enhancedScore>=r),c=k.selectWeightedRandom(l.map(y=>({...y,score:y.enhancedScore})),2),f=Math.min(600+Math.random()*400,t*.9)-(Date.now()-s);f>0&&await new Promise(y=>setTimeout(y,f));const p=this.calculateEnhancedConfidence(l,c);return{position:c.position,confidence:p,evaluation:c.enhancedScore,thinkingTime:Date.now()-s,depth:1,nodesEvaluated:a.length}}calculateEnhancedScore(e,i,t){let s=i.score.points;const a=k.getGamePhase(e);a>.7?s+=i.flippedPositions.length*2:a<.3&&k.isDangerousPosition(i.position)&&(s-=5);const n=k.evaluatePositionStability(e,i.position,t);s+=n;const o=t===g.BLACK?g.WHITE:g.BLACK;return k.calculateMobility(e,o)<3&&(s+=2),s}calculateEnhancedConfidence(e,i){let t=.6;if(e.length===1?t=.9:e.length<=3&&(t=.8),i.score?.grade)switch(i.score.grade){case M.S:t=Math.max(t,.9);break;case M.A:t=Math.max(t,.75);break;case M.B:t=Math.max(t,.6);break}return Math.max(.2,Math.min(.95,t))}}class Ze extends P{difficulty=u.GREEDY;name="Adaptive Greedy AI";description="Greedy AI that adapts strategy to game phase and score";async selectMoveImpl(e,i,t){const s=Date.now(),a=Q(e.board,new Map(e.validMoves),i);if(a.length===0)throw new Error("No valid moves available");const n=this.determineStrategy(e,i),o=a.map(p=>({...p,strategicScore:this.calculateStrategicScore(e,p,i,n)}));o.sort((p,y)=>y.strategicScore-p.strategicScore);const r=this.getSelectionTemperature(n),l=o.slice(0,Math.min(5,o.length)),c=k.selectWeightedRandom(l.map(p=>({...p,score:p.strategicScore})),r),f=this.calculateAdaptiveThinkingTime(e,a.length,n,t)-(Date.now()-s);return f>0&&await new Promise(p=>setTimeout(p,f)),{position:c.position,confidence:this.calculateAdaptiveConfidence(n,c,l),evaluation:c.strategicScore,thinkingTime:Date.now()-s,depth:1,nodesEvaluated:a.length}}determineStrategy(e,i){const t=k.getGamePhase(e),s=i===g.BLACK?e.scores.black:e.scores.white,a=i===g.BLACK?e.scores.white:e.scores.black,n=s-a,o=e.validMoves.size;return t>.8?n>0?"endgame_ahead":"endgame_behind":t>.4?n>5?"consolidate":n<-5?"aggressive":o<3?"careful":"balanced":o>8?"opportunistic":"cautious"}calculateStrategicScore(e,i,t,s){let a=i.score.points;switch(k.getGamePhase(e),s){case"endgame_ahead":a+=i.flippedPositions.length*3;break;case"endgame_behind":a+=i.flippedPositions.length*4,(i.score.grade===M.A||i.score.grade===M.S)&&(a+=10);break;case"aggressive":(i.score.grade===M.A||i.score.grade===M.S)&&(a+=8),a+=i.flippedPositions.length*2;break;case"consolidate":[0,7,56,63].includes(i.position)&&(a+=10),k.isDangerousPosition(i.position)&&(a-=8);break;case"careful":k.isDangerousPosition(i.position)&&(a-=15),a+=k.evaluatePositionStability(e,i.position,t)*2;break;case"opportunistic":i.score.grade===M.S&&(a+=15);break;case"cautious":k.isDangerousPosition(i.position)&&(a-=10);break}return a}getSelectionTemperature(e){switch(e){case"aggressive":case"endgame_behind":return 1.5;case"careful":case"consolidate":return 3;default:return 2}}calculateAdaptiveThinkingTime(e,i,t,s){let a=400;switch(i>8&&(a+=200),i<3&&(a+=100),t){case"endgame_ahead":case"endgame_behind":a+=300;break;case"careful":a+=200;break;case"opportunistic":a-=100;break}return a+=Math.random()*200,Math.min(a,s*.9)}calculateAdaptiveConfidence(e,i,t){let s=.7;switch(e){case"consolidate":case"endgame_ahead":s=.8;break;case"aggressive":case"endgame_behind":s=.6;break;case"careful":s=.75;break}return i.score?.grade===M.S?s=Math.min(.95,s+.15):i.score?.grade===M.A&&(s=Math.min(.9,s+.1)),t.length>4&&(s-=.1),Math.max(.2,s)}}const j={standard(){return new Je},enhanced(){return new Qe},adaptive(){return new Ze}},C={POSITION_VALUE:1,MOBILITY:2,STABILITY:3,CORNER_CONTROL:5,EDGE_CONTROL:1.5,POTENTIAL_MOBILITY:1,PARITY:.5,ENDGAME_MATERIAL:10},U=[100,-20,10,5,5,10,-20,100,-20,-50,-2,-2,-2,-2,-50,-20,10,-2,16,2,2,16,-2,10,5,-2,2,1,1,2,-2,5,5,-2,2,1,1,2,-2,5,10,-2,16,2,2,16,-2,10,-20,-50,-2,-2,-2,-2,-50,-20,100,-20,10,5,5,10,-20,100],et=[4,0,3,2,2,3,0,4,0,0,1,1,1,1,0,0,3,1,2,1,1,2,1,3,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2,3,1,2,1,1,2,1,3,0,0,1,1,1,1,0,0,4,0,3,2,2,3,0,4];class Y{static evaluatePosition(e,i){const t=e.board,s=i===g.BLACK?g.WHITE:g.BLACK,a=this.evaluatePositionValue(t,i,s),n=this.evaluateMobility(e,i,s),o=this.evaluateStability(t,i,s),r=this.evaluateCornerControl(t,i,s),l=this.evaluateEdgeControl(t,i,s),c=this.evaluatePotentialMobility(t,i,s),d=this.evaluateParity(t,i,s),f=this.evaluateMaterial(t,i,s);return{totalScore:a*C.POSITION_VALUE+n*C.MOBILITY+o*C.STABILITY+r*C.CORNER_CONTROL+l*C.EDGE_CONTROL+c*C.POTENTIAL_MOBILITY+d*C.PARITY+f*C.ENDGAME_MATERIAL,breakdown:{positionValue:a,mobility:n,stability:o,cornerControl:r,edgeControl:l,potentialMobility:c,parity:d,material:f}}}static evaluatePositionValue(e,i,t){let s=0;for(let a=0;a<64;a++){const n=e[a];n===i?s+=U[a]??0:n===t&&(s-=U[a]??0)}return s}static evaluateMobility(e,i,t){const s=e.currentPlayer===i?e.validMoves.size:0,a=e.currentPlayer===t?e.validMoves.size:0;return s+a===0?0:(s-a)/(s+a)*100}static evaluateStability(e,i,t){let s=0,a=0;for(let n=0;n<64;n++){const o=e[n],r=this.calculatePieceStability(e,n);o===i?s+=r:o===t&&(a+=r)}return s-a}static calculatePieceStability(e,i){const t=e[i];if(t===g.EMPTY||t===void 0)return 0;let s=et[i]??0;if(V(i))return s+10;const a=[-9,-8,-7,-1,1,7,8,9];let n=0;for(const o of a)this.isDirectionStable(e,i,o,t)&&n++;return s+n}static isDirectionStable(e,i,t,s){const a=i+t,n=i-t;return a<0||a>=64||n<0||n>=64?!0:e[a]===s||e[n]===s}static evaluateCornerControl(e,i,t){const s=[0,7,56,63];let a=0,n=0;for(const o of s)e[o]===i?a++:e[o]===t&&n++;return(a-n)*25}static evaluateEdgeControl(e,i,t){let s=0,a=0;for(let n=0;n<64;n++)Be(n)&&!V(n)&&(e[n]===i?s++:e[n]===t&&a++);return s-a}static evaluatePotentialMobility(e,i,t){let s=0,a=0;for(let n=0;n<64;n++)if(e[n]===g.EMPTY){const o=this.isAdjacentToColor(e,n,i),r=this.isAdjacentToColor(e,n,t);o&&s++,r&&a++}return s-a}static isAdjacentToColor(e,i,t){const s=[-9,-8,-7,-1,1,7,8,9];for(const a of s){const n=i+a;if(n>=0&&n<64&&e[n]===t)return!0}return!1}static evaluateParity(e,i,t){let s=0;for(let a=0;a<64;a++)e[a]===g.EMPTY&&s++;return s%2===1?1:-1}static evaluateMaterial(e,i,t){let s=0,a=0,n=0;for(let r=0;r<64;r++){const l=e[r];l===i?s++:l===t?a++:n++}const o=n<16?2:.1;return(s-a)*o}static quickEvaluate(e,i,t,s){let a=0;return a+=U[i]??0,a+=s.length*5,V(i)&&(a+=50),Re(i)&&(a-=25),a}static getGamePhase(e){let i=0;for(let t=0;t<64;t++)e[t]===g.EMPTY&&i++;return i>40?"opening":i>16?"midgame":"endgame"}}Y.evaluatePosition;const tt=Y.quickEvaluate;Y.getGamePhase;class _{static fromGameState(e){const i=e.gameStatus===re.GAME_OVER||e.gameOver===!0||e.validMoves.size===0;return{board:new Uint8Array(e.board),currentPlayer:e.currentPlayer,validMoves:new Map(e.validMoves),scores:{...e.scores},gameOver:i,consecutivePasses:e.consecutivePasses||0}}static makeMove(e,i){const t=e.validMoves.get(i);if(!t)return null;const s=new Uint8Array(e.board);s[i]=e.currentPlayer;for(const c of t)s[c]=e.currentPlayer;const a=e.currentPlayer===g.BLACK?g.WHITE:g.BLACK,n=this.calculateScores(s),o=H(s,a);let r=0,l=!1;if(o.size===0){const c=a===g.BLACK?g.WHITE:g.BLACK,d=H(s,c);if(d.size===0)l=!0,r=2;else return r=1,{board:s,currentPlayer:c,validMoves:d,scores:n,gameOver:!1,consecutivePasses:r}}return{board:s,currentPlayer:a,validMoves:o,scores:n,gameOver:l,consecutivePasses:r}}static makePass(e){const i=e.currentPlayer===g.BLACK?g.WHITE:g.BLACK,t=H(e.board,i),s=e.consecutivePasses+1;return{board:e.board,currentPlayer:i,validMoves:t,scores:e.scores,gameOver:s>=2||t.size===0,consecutivePasses:s}}static calculateScores(e){let i=0,t=0;for(let s=0;s<e.length;s++)e[s]===g.BLACK?i++:e[s]===g.WHITE&&t++;return{black:i,white:t}}static getAllPossibleMoves(e){const i=[];for(const t of e.validMoves.keys()){const s=this.makeMove(e,t);s&&i.push({move:t,newState:s})}return i}static isEndgame(e){let i=0;for(let t=0;t<e.board.length;t++)e.board[t]===g.EMPTY&&i++;return i<=16}static isOpening(e){let i=0;for(let t=0;t<e.board.length;t++)e.board[t]!==g.EMPTY&&i++;return i<=12}static getGamePhaseRatio(e){let i=0;for(let t=0;t<e.board.length;t++)e.board[t]!==g.EMPTY&&i++;return Math.min(1,(i-4)/60)}static getStateHash(e){return`${Array.from(e.board).join("")}_${e.currentPlayer}_${e.consecutivePasses}`}static statesEqual(e,i){if(e.currentPlayer!==i.currentPlayer||e.consecutivePasses!==i.consecutivePasses)return!1;for(let t=0;t<e.board.length;t++)if(e.board[t]!==i.board[t])return!1;return!0}static copyState(e){return{board:new Uint8Array(e.board),currentPlayer:e.currentPlayer,validMoves:new Map(e.validMoves),scores:{...e.scores},gameOver:e.gameOver,consecutivePasses:e.consecutivePasses}}static getStateInfo(e){let i=0,t=0,s=0;for(let n=0;n<e.board.length;n++)switch(e.board[n]){case g.BLACK:i++;break;case g.WHITE:t++;break;case g.EMPTY:s++;break}let a;return s>40?a="opening":s>16?a="midgame":a="endgame",{pieceCount:{black:i,white:t,empty:s},gamePhase:a,mobilityCount:e.validMoves.size}}static validateState(e){try{if(e.board.length!==64||e.currentPlayer!==g.BLACK&&e.currentPlayer!==g.WHITE)return!1;const i=this.calculateScores(e.board);if(i.black!==e.scores.black||i.white!==e.scores.white)return!1;for(const[t,s]of e.validMoves.entries())if(t<0||t>=64||e.board[t]!==g.EMPTY)return!1;return!0}catch{return!1}}}_.fromGameState;_.makeMove;_.makePass;_.getAllPossibleMoves;class R extends P{difficulty=u.MINIMAX;name="Minimax AI";description="Advanced AI using minimax with alpha-beta pruning";_config;_transpositionTable=new Map;_killerMoves=[];_historyTable=new Map;_nodesEvaluated=0;_startTime=0;constructor(e={}){super(),this._config={maxDepth:6,maxTime:3e3,useIterativeDeepening:!0,useTranspositionTable:!0,useMoveOrdering:!0,aspirationWindow:50,...e};for(let i=0;i<=this._config.maxDepth;i++)this._killerMoves[i]=[]}async selectMoveImpl(e,i,t){this._startTime=Date.now(),this._nodesEvaluated=0;const s=Math.min(t,this._config.maxTime),a=Array.from(e.validMoves.keys());if(a.length===0)throw new Error("No valid moves available");if(a.length===1)return{position:a[0],confidence:1,evaluation:0,thinkingTime:Date.now()-this._startTime,depth:0,nodesEvaluated:1};let n;this._config.useIterativeDeepening?n=await this.iterativeDeepening(e,i,s):n=await this.search(e,i,this._config.maxDepth,s);const o=this.calculateConfidence(n,a.length);return{position:n.bestMove,confidence:o,evaluation:n.score,thinkingTime:n.timeElapsed,depth:n.depth,nodesEvaluated:n.nodesEvaluated}}async iterativeDeepening(e,i,t){let s={score:-1/0,bestMove:Array.from(e.validMoves.keys())[0],depth:1,nodesEvaluated:0,timeElapsed:0,terminated:!1},a=0,n=-1/0,o=1/0;for(let r=1;r<=this._config.maxDepth&&!(Date.now()-this._startTime>=t*.9);r++){this._config.aspirationWindow&&r>2&&(n=a-this._config.aspirationWindow,o=a+this._config.aspirationWindow);try{const l=await this.minimaxSearch(e,r,n,o,!0,i,t);if(l.score>-1/0&&(s={score:l.score,bestMove:l.bestMove,depth:r,nodesEvaluated:this._nodesEvaluated,timeElapsed:Date.now()-this._startTime,terminated:!1},a=l.score),this._config.aspirationWindow&&(l.score<=n||l.score>=o)){const c=await this.minimaxSearch(e,r,-1/0,1/0,!0,i,t);c.score>-1/0&&(s={score:c.score,bestMove:c.bestMove,depth:r,nodesEvaluated:this._nodesEvaluated,timeElapsed:Date.now()-this._startTime,terminated:!1})}}catch{break}if(Math.abs(s.score)>1e3)break}return s}async search(e,i,t,s){const a=await this.minimaxSearch(e,t,-1/0,1/0,!0,i,s);return{score:a.score,bestMove:a.bestMove,depth:t,nodesEvaluated:this._nodesEvaluated,timeElapsed:Date.now()-this._startTime,terminated:a.score===-1/0}}async minimaxSearch(e,i,t,s,a,n,o){if(this._nodesEvaluated++,Date.now()-this._startTime>=o)return{score:-1/0};if(this._config.useTranspositionTable){const d=this.lookupTransposition(e,i);if(d){if(d.flag==="exact")return{score:d.score,bestMove:d.bestMove};if(d.flag==="lower"&&d.score>=s)return{score:d.score,bestMove:d.bestMove};if(d.flag==="upper"&&d.score<=t)return{score:d.score,bestMove:d.bestMove}}}if(i===0||e.validMoves.size===0){const d="board"in e&&"scores"in e&&"currentPlayer"in e?e:_.fromGameState(e),f={board:d.board,currentPlayer:d.currentPlayer,validMoves:d.validMoves,scores:d.scores,gameOver:d.gameOver};return{score:Y.evaluatePosition(f,n).totalScore}}const r=this.getOrderedMoves(e,i,n);let l,c=a?-1/0:1/0;for(const d of r){const f=this.makeMove(e,d);if(!f)continue;const p=await this.minimaxSearch(f,i-1,t,s,!a,n,o);if(a?(p.score>c&&(c=p.score,l=d),t=Math.max(t,c)):(p.score<c&&(c=p.score,l=d),s=Math.min(s,c)),s<=t){this.updateKillerMoves(d,i);break}}return this._config.useTranspositionTable&&this.storeTransposition(e,i,c,l,t,s),{score:c,bestMove:l}}getOrderedMoves(e,i,t){const s=Array.from(e.validMoves.keys());if(!this._config.useMoveOrdering)return s;const a=s.map(n=>{const o=e.validMoves.get(n)||[],r=tt(e.board,n,t,[...o]);let l=0;this._killerMoves[i]&&this._killerMoves[i].includes(n)&&(l+=1e3);const c=`${n}_${t}`,d=this._historyTable.get(c)||0;return l+=d,{move:n,score:r+l}});return a.sort((n,o)=>o.score-n.score),a.map(n=>n.move)}makeMove(e,i){const t="board"in e&&"validMoves"in e&&"currentPlayer"in e?e:_.fromGameState(e);return _.makeMove(t,i)}updateKillerMoves(e,i){this._killerMoves[i]||(this._killerMoves[i]=[]);const t=this._killerMoves[i];t.includes(e)||(t.unshift(e),t.length>2&&t.pop())}lookupTransposition(e,i){const t=this.getTranspositionKey(e),s=this._transpositionTable.get(t);return s&&s.depth>=i?s:null}storeTransposition(e,i,t,s,a,n){const o=this.getTranspositionKey(e);let r;t<=a?r="upper":t>=n?r="lower":r="exact",this._transpositionTable.set(o,{depth:i,score:t,flag:r,bestMove:s,timestamp:Date.now()}),this._transpositionTable.size>1e5&&this.cleanupTranspositionTable()}getTranspositionKey(e){return`${Array.from(e.board).join("")}_${e.currentPlayer}`}cleanupTranspositionTable(){const i=Date.now()-3e5;for(const[t,s]of this._transpositionTable.entries())s.timestamp<i&&this._transpositionTable.delete(t)}calculateConfidence(e,i){let t=.7;return t+=Math.min(e.depth/10,.2),e.terminated&&(t-=.3),Math.abs(e.score)>500&&(t+=.2),i>8&&(t-=.1),Math.max(.1,Math.min(.95,t))}getConfig(){return{...this._config}}setConfig(e){this._config={...this._config,...e}}clearCaches(){this._transpositionTable.clear(),this._historyTable.clear();for(let e=0;e<=this._config.maxDepth;e++)this._killerMoves[e]=[]}}const $={basic(){return new R({maxDepth:4,maxTime:2e3,useIterativeDeepening:!0})},intermediate(){return new R({maxDepth:6,maxTime:3e3,useIterativeDeepening:!0,useTranspositionTable:!0})},advanced(){return new R({maxDepth:8,maxTime:5e3,useIterativeDeepening:!0,useTranspositionTable:!0,useMoveOrdering:!0,aspirationWindow:50})},custom(h){return new R(h)}};class it{_entries=new Map;_sequences=[];_maxDepth;constructor(e=12){this._maxDepth=e,this.initializeOpeningDatabase()}getOpeningMove(e){const i=this.generateKey(e),t=this._entries.get(i);if(!t||t.length===0)return null;const s=t.filter(n=>e.validMoves.has(n.position));return s.length===0?null:s.reduce((n,o)=>{const r=n.score*.7+n.winRate*.3;return o.score*.7+o.winRate*.3>r?o:n}).position}getOpeningMoves(e){const i=this.generateKey(e);return(this._entries.get(i)||[]).filter(s=>e.validMoves.has(s.position))}hasOpeningMove(e){const i=this.generateKey(e),t=this._entries.get(i);return t?t.some(s=>e.validMoves.has(s.position)):!1}getOpeningDepth(e){const t=e.scores.black+e.scores.white-4;return Math.min(t,this._maxDepth)}getSequence(e){return this._sequences.find(i=>i.name===e)||null}getAllSequences(){return[...this._sequences]}initializeOpeningDatabase(){this.addOpening("eeeeeeeeeeeeeeeeeeeeeeeeeeee12212100eeeeeeeeeeeeeeeeeeeeeeeeeeee",[{pos:19,score:0,freq:.3,win:.52,comment:"Tiger"},{pos:26,score:0,freq:.25,win:.51,comment:"Rabbit"},{pos:37,score:0,freq:.25,win:.51,comment:"Cat"},{pos:44,score:0,freq:.2,win:.5,comment:"Ox"}]),this.addOpening("eeeeeeeeeeeeeeeeeeee1eeeeee12111100eeeeeeeeeeeeeeeeeeeeeeeeeeee",[{pos:18,score:2,freq:.4,win:.53,comment:"Tiger main line"},{pos:20,score:0,freq:.3,win:.52,comment:"Tiger solid"},{pos:11,score:-1,freq:.2,win:.49,comment:"Tiger passive"},{pos:34,score:1,freq:.1,win:.51,comment:"Tiger counter"}]),this.addOpening("eeeeeeeeeeeeeeeeeeeeeeeeeeee11112100eeeeeeeeeeeeeeeeeeeeeeeeeeee",[{pos:18,score:1,freq:.35,win:.52,comment:"Rabbit main"},{pos:19,score:1,freq:.35,win:.52,comment:"Rabbit parallel"},{pos:25,score:0,freq:.2,win:.5,comment:"Rabbit edge"},{pos:33,score:-1,freq:.1,win:.48,comment:"Rabbit weak"}]),this.addOpening("eeeeeeeeeeeeeeeeeeeeeeeeeeee12211100eeeee1eeeeeeeeeeeeeeeeeeeeee",[{pos:45,score:2,freq:.4,win:.54,comment:"Cat main line"},{pos:43,score:1,freq:.3,win:.52,comment:"Cat solid"},{pos:29,score:0,freq:.2,win:.5,comment:"Cat transpose"},{pos:52,score:-1,freq:.1,win:.48,comment:"Cat edge"}]),this.addOpening("eeeeeeeeeeeeeeeeeeeeeeeeeeee12211100eeeeeeeeeeee1eeeeeeeeeeeeeee",[{pos:43,score:1,freq:.4,win:.52,comment:"Ox main"},{pos:45,score:1,freq:.3,win:.52,comment:"Ox symmetric"},{pos:37,score:0,freq:.2,win:.5,comment:"Ox transpose"},{pos:52,score:-1,freq:.1,win:.48,comment:"Ox passive"}]),this.addDeepSequences(),this.addNamedSequences()}addDeepSequences(){this.addOpening("eeeeeeeeeeeeeeeeee11eeeeeee11111100eeeeeeeeeeeeeeeeeeeeeeeeeeee",[{pos:10,score:3,freq:.5,win:.55,comment:"Tiger sharp"},{pos:12,score:2,freq:.3,win:.53,comment:"Tiger solid"},{pos:25,score:1,freq:.2,win:.51,comment:"Tiger positional"}]),this.addOpening("eeeeeeee11eeeeeeee11eeeeeee11111100eeeeeeeeeeeeeeeeeeeeeeeeeeee",[{pos:9,score:2,freq:.4,win:.54,comment:"Advanced tiger"},{pos:17,score:2,freq:.3,win:.53,comment:"Edge control"},{pos:24,score:1,freq:.3,win:.52,comment:"Center play"}])}addNamedSequences(){this._sequences.push({name:"Tiger Opening",description:"Aggressive opening focusing on quick development",moves:[19,18,10],evaluation:2,isMainLine:!0},{name:"Rabbit Opening",description:"Balanced opening with flexible development",moves:[26,18,19],evaluation:1,isMainLine:!0},{name:"Cat Defense",description:"Solid defensive setup",moves:[37,45,43],evaluation:1,isMainLine:!0},{name:"Ox System",description:"Conservative approach with emphasis on stability",moves:[44,43,45],evaluation:0,isMainLine:!0},{name:"Buffalo Opening",description:"Hypermodern approach delaying central confrontation",moves:[19,20,12],evaluation:1,isMainLine:!1},{name:"Snake Variation",description:"Provocative opening leading to complex positions",moves:[26,25,33],evaluation:0,isMainLine:!1})}addOpening(e,i){const t=i.map(s=>({position:s.pos,score:s.score,frequency:s.freq,winRate:s.win,depth:this.calculateDepth(e),comment:s.comment}));this._entries.set(e,t)}generateKey(e){return Array.from(e.board).map(i=>{switch(i){case g.EMPTY:return"e";case g.BLACK:return"1";case g.WHITE:return"2";default:return"e"}}).join("")}calculateDepth(e){const i=e.split("").filter(t=>t!=="e").length;return Math.max(0,i-4)}getStatistics(){const e=this._entries.size;let i=0,t=0;for(const s of this._entries.values())for(const a of s)i+=a.winRate,t++;return{totalPositions:e,maxDepth:this._maxDepth,averageWinRate:t>0?i/t:0,sequenceCount:this._sequences.length}}validateBook(){const e=[];for(const[i,t]of this._entries.entries()){const s=new Set;for(const a of t)s.has(a.position)&&e.push(`Duplicate position ${a.position} in key ${i}`),s.add(a.position),(a.frequency<0||a.frequency>1)&&e.push(`Invalid frequency for position ${a.position}: ${a.frequency}`),(a.winRate<0||a.winRate>1)&&e.push(`Invalid win rate for position ${a.position}: ${a.winRate}`)}for(const i of this._sequences){i.moves.length===0&&e.push(`Empty sequence: ${i.name}`);for(const t of i.moves)(t<0||t>=64)&&e.push(`Invalid move ${t} in sequence ${i.name}`)}return{isValid:e.length===0,errors:e}}}const st=new it;class at{_config;_transpositionTable=new Map;_nodesSearched=0;_startTime=0;_timeLimit=0;constructor(e={}){this._config={maxEmptySquares:16,useTranspositionTable:!0,useMoveOrdering:!0,maxTimeMs:3e4,enableParity:!0,...e}}async solvePosition(e,i,t){this._startTime=Date.now(),this._timeLimit=t||this._config.maxTimeMs,this._nodesSearched=0;const s=this.countEmptySquares(e.board);if(s>this._config.maxEmptySquares)throw new Error(`Position has ${s} empty squares, exceeds maximum of ${this._config.maxEmptySquares}`);const a=await this.exactSearch(e,i,s,-64,64),n=Date.now()-this._startTime;if(!a.bestMove&&a.bestMove!==0)throw new Error("No valid move found in endgame position");return{bestMove:a.bestMove,exactScore:a.score,movesToEnd:s,isWin:a.score>0,nodesSearched:this._nodesSearched,timeElapsed:n,confidence:1}}canSolve(e){return this.countEmptySquares(e.board)<=this._config.maxEmptySquares}async exactSearch(e,i,t,s,a){if(this._nodesSearched++,Date.now()-this._startTime>=this._timeLimit)throw new Error("Endgame solver timeout");if(this._config.useTranspositionTable){const l=this.lookupTransposition(e,t);if(l)return{score:l.exactScore,bestMove:l.bestMove}}if(e.gameOver||e.validMoves.size===0)return{score:this.calculateFinalScore(e,i)};const n=this.getOrderedMoves(e);let o,r=e.currentPlayer===i?-64:64;for(const l of n){const c=_.makeMove(e,l);if(!c)continue;let d=c;d.validMoves.size===0&&!d.gameOver&&(d=_.makePass(d));const f=await this.exactSearch(d,i,t-1,s,a);if(e.currentPlayer===i?(f.score>r&&(r=f.score,o=l),s=Math.max(s,r)):(f.score<r&&(r=f.score,o=l),a=Math.min(a,r)),a<=s)break}return this._config.useTranspositionTable&&this.storeTransposition(e,t,r,o,s,a),{score:r,bestMove:o}}calculateFinalScore(e,i){let t=0,s=0,a=0;for(let n=0;n<e.board.length;n++){const o=e.board[n];o===i?t++:o!==g.EMPTY?s++:a++}return a>0&&(this._config.enableParity?this.calculateParity(e,i)>0?t+=a:s+=a:e.currentPlayer===i?t+=a:s+=a),t-s}calculateParity(e,i){const t=this.countEmptySquares(e.board),s=e.currentPlayer===i?1:-1;return t%2===1?s:-s}getOrderedMoves(e){const i=Array.from(e.validMoves.keys());if(!this._config.useMoveOrdering)return i;const t=i.map(s=>{let a=0;[0,7,56,63].includes(s)&&(a+=1e3);const n=Math.floor(s/8),o=s%8;(n===0||n===7||o===0||o===7)&&(a+=100);const r=e.validMoves.get(s)?.length||0;return a+=r*10,[9,14,49,54].includes(s)&&(a-=500),{move:s,score:a}});return t.sort((s,a)=>a.score-s.score),t.map(s=>s.move)}countEmptySquares(e){let i=0;for(let t=0;t<e.length;t++)e[t]===g.EMPTY&&i++;return i}generateTranspositionKey(e){return Array.from(e.board).join("")+"_"+e.currentPlayer}lookupTransposition(e,i){const t=this.generateTranspositionKey(e),s=this._transpositionTable.get(t);return s&&s.depth>=i?s:null}storeTransposition(e,i,t,s,a,n){const o=this.generateTranspositionKey(e);let r;t<=a?r="upper":t>=n?r="lower":r="exact",this._transpositionTable.set(o,{exactScore:t,depth:i,bestMove:s,flag:r,timestamp:Date.now()}),this._transpositionTable.size>5e4&&this.cleanupTranspositionTable()}cleanupTranspositionTable(){const e=Date.now()-6e5;for(const[i,t]of this._transpositionTable.entries())t.timestamp<e&&this._transpositionTable.delete(i)}getStatistics(){const e=Date.now()-this._startTime,i=e>0?this._nodesSearched/e*1e3:0;return{transpositionEntries:this._transpositionTable.size,maxEmptySquares:this._config.maxEmptySquares,averageNodesPerSecond:i}}clearCaches(){this._transpositionTable.clear()}setConfig(e){Object.assign(this._config,e)}getConfig(){return{...this._config}}}const nt=new at;class L extends P{difficulty=u.ADVANCED;name="Advanced AI";description="Master-level AI combining opening book, minimax, and endgame solver";_config;_openingBook;_endgameSolver;_minimaxAI;_phaseStats={opening:{moves:0,totalTime:0},midgame:{moves:0,totalTime:0},endgame:{moves:0,totalTime:0}};constructor(e={}){super(),this._config={useOpeningBook:!0,openingBookDepth:12,minimaxDepth:8,minimaxTimeLimit:5e3,useIterativeDeepening:!0,useEndgameSolver:!0,endgameThreshold:16,endgameTimeLimit:3e4,adaptiveTimeManagement:!0,thinkingTimeBase:1e3,thinkingTimeMax:1e4,useMonteCarlo:!1,monteCarloSamples:1e3,useAspirationWindows:!0,...e},this._openingBook=st,this._endgameSolver=nt;const i={maxDepth:this._config.minimaxDepth,maxTime:this._config.minimaxTimeLimit,useIterativeDeepening:this._config.useIterativeDeepening,useTranspositionTable:!0,useMoveOrdering:!0,aspirationWindow:this._config.useAspirationWindows?50:void 0};this._minimaxAI=new R(i)}async selectMoveImpl(e,i,t){const s=Date.now(),a=this.detectGamePhase(e),n=this.calculateAdaptiveTimeLimit(e,t,a);let o;try{switch(a){case"opening":o=await this.handleOpening(e,i,n);break;case"midgame":o=await this.handleMidgame(e,i,n);break;case"endgame":o=await this.handleEndgame(e,i,n);break;default:o=await this.handleMidgame(e,i,n)}const r=Date.now()-s;return this._phaseStats[a].moves++,this._phaseStats[a].totalTime+=r,{...o,thinkingTime:r}}catch{return this._minimaxAI.selectMove(e,i,n)}}async handleOpening(e,i,t){if(this._config.useOpeningBook&&this._openingBook.hasOpeningMove(e)){const s=this._openingBook.getOpeningMove(e);if(s!==null){const a=200+Math.random()*300;return await new Promise(n=>setTimeout(n,a)),{position:s,confidence:.9,evaluation:0,thinkingTime:a,depth:this._openingBook.getOpeningDepth(e),nodesEvaluated:1}}}return this._minimaxAI.selectMove(e,i,t)}async handleMidgame(e,i,t){return this._minimaxAI.selectMove(e,i,t)}async handleEndgame(e,i,t){if(!this._config.useEndgameSolver)return this._minimaxAI.selectMove(e,i,t);const s=_.fromGameState(e);if(this._endgameSolver.canSolve(s))try{const o=await this._endgameSolver.solvePosition(s,i,Math.min(t,this._config.endgameTimeLimit));return{position:o.bestMove,confidence:o.confidence,evaluation:o.exactScore,thinkingTime:o.timeElapsed,depth:o.movesToEnd,nodesEvaluated:o.nodesSearched}}catch{}const a={maxDepth:this._config.minimaxDepth+2,maxTime:t,useIterativeDeepening:!0};return new R(a).selectMove(e,i,t)}detectGamePhase(e){const i=e.scores.black+e.scores.white,t=64-i;return i<=12?"opening":t<=this._config.endgameThreshold?"endgame":"midgame"}calculateAdaptiveTimeLimit(e,i,t){if(!this._config.adaptiveTimeManagement)return i;const s=e.validMoves.size,a=this.assessPositionComplexity(e);let n=1;switch(t){case"opening":n=.3;break;case"midgame":n=1;break;case"endgame":n=2;break}n*=1+a*.5,s>10?n*=1.3:s<3&&(n*=.7);const o=Math.min(this._config.thinkingTimeMax,Math.max(this._config.thinkingTimeBase*n,i*.5));return Math.min(o,i)}assessPositionComplexity(e){let i=0;i+=Math.min(e.validMoves.size/15,1);const t=Math.abs(e.scores.black-e.scores.white);i+=Math.min(t/20,.5);const a=[0,7,56,63].filter(n=>e.board[n]===g.EMPTY);return i+=a.length*.1,Math.min(i,1)}getConfig(){return{...this._config}}setConfig(e){Object.assign(this._config,e);const i={maxDepth:this._config.minimaxDepth,maxTime:this._config.minimaxTimeLimit,useIterativeDeepening:this._config.useIterativeDeepening,aspirationWindow:this._config.useAspirationWindows?50:void 0};this._minimaxAI.setConfig(i)}getPerformanceStats(){const e={moves:this._phaseStats.opening.moves,avgTime:this._phaseStats.opening.moves>0?this._phaseStats.opening.totalTime/this._phaseStats.opening.moves:0},i={moves:this._phaseStats.midgame.moves,avgTime:this._phaseStats.midgame.moves>0?this._phaseStats.midgame.totalTime/this._phaseStats.midgame.moves:0},t={moves:this._phaseStats.endgame.moves,avgTime:this._phaseStats.endgame.moves>0?this._phaseStats.endgame.totalTime/this._phaseStats.endgame.moves:0},s=e.moves+i.moves+t.moves,a=this._phaseStats.opening.totalTime+this._phaseStats.midgame.totalTime+this._phaseStats.endgame.totalTime;return{opening:e,midgame:i,endgame:t,totalMoves:s,overallAvgTime:s>0?a/s:0}}resetStats(){this._phaseStats={opening:{moves:0,totalTime:0},midgame:{moves:0,totalTime:0},endgame:{moves:0,totalTime:0}}}clearCaches(){this._minimaxAI.clearCaches(),this._endgameSolver.clearCaches()}}const q={tournament(){return this.isMobileDevice()?new L({useOpeningBook:!0,openingBookDepth:10,minimaxDepth:6,useEndgameSolver:!1,endgameThreshold:14,adaptiveTimeManagement:!0,thinkingTimeBase:1500,thinkingTimeMax:6e3}):new L({useOpeningBook:!0,openingBookDepth:12,minimaxDepth:8,useEndgameSolver:!0,endgameThreshold:16,adaptiveTimeManagement:!0,thinkingTimeBase:2e3,thinkingTimeMax:15e3})},master(){return this.isMobileDevice()?new L({useOpeningBook:!0,openingBookDepth:12,minimaxDepth:6,useEndgameSolver:!1,endgameThreshold:16,adaptiveTimeManagement:!0,thinkingTimeBase:2e3,thinkingTimeMax:8e3,useAspirationWindows:!1}):new L({useOpeningBook:!0,openingBookDepth:16,minimaxDepth:10,useEndgameSolver:!0,endgameThreshold:20,adaptiveTimeManagement:!0,thinkingTimeBase:3e3,thinkingTimeMax:3e4,useAspirationWindows:!0})},isMobileDevice(){const h=navigator.userAgent.toLowerCase(),i=["mobile","android","iphone","ipad","ipod","blackberry","windows phone"].some(a=>h.includes(a)),t=window.innerWidth<768,s="ontouchstart"in window||navigator.maxTouchPoints>0;return i||t&&s},blitz(){return new L({useOpeningBook:!0,openingBookDepth:8,minimaxDepth:6,useEndgameSolver:!0,endgameThreshold:12,adaptiveTimeManagement:!1,thinkingTimeBase:500,thinkingTimeMax:2e3})},custom(h){return new L(h)}};class ot{_strategies=new Map;_strategyRegistry=new Map;_currentThinking=null;_performanceHistory=new Map;_options;_worker=null;_pendingWorkerRequests=new Map;_customSettings=null;constructor(e={}){this._options={defaultDifficulty:u.GREEDY,enablePerformanceLogging:!0,maxConcurrentThinking:1,fallbackOnTimeout:!0,...e},this.registerDefaultStrategies()}registerDefaultStrategies(){this.registerStrategy({difficulty:u.RANDOM,name:"Pure Random",description:"Completely random move selection",factory:()=>W.pure(),isDefault:!1}),this.registerStrategy({difficulty:u.RANDOM,name:"Smart Random",description:"Random moves but avoids obviously bad positions",factory:()=>W.smart(),isDefault:!0}),this.registerStrategy({difficulty:u.GREEDY,name:"Standard Greedy",description:"Selects highest immediate score",factory:()=>j.standard(),isDefault:!1}),this.registerStrategy({difficulty:u.GREEDY,name:"Enhanced Greedy",description:"Greedy with additional heuristics",factory:()=>j.enhanced(),isDefault:!1}),this.registerStrategy({difficulty:u.GREEDY,name:"Adaptive Greedy",description:"Greedy that adapts to game situation",factory:()=>j.adaptive(),isDefault:!0}),this.registerStrategy({difficulty:u.MINIMAX,name:"Standard Minimax",description:"Minimax with alpha-beta pruning (depth 6)",factory:()=>$.intermediate(),isDefault:!0}),this.registerStrategy({difficulty:u.MINIMAX_EASY,name:"Easy Minimax",description:"Minimax with moderate depth (depth 4)",factory:()=>$.basic(),isDefault:!0}),this.registerStrategy({difficulty:u.MINIMAX_HARD,name:"Hard Minimax",description:"Minimax with deep search (depth 8)",factory:()=>$.advanced(),isDefault:!0}),this.registerStrategy({difficulty:u.ADVANCED,name:"Tournament AI",description:"Opening book + minimax + endgame solver",factory:()=>q.tournament(),isDefault:!0}),this.registerStrategy({difficulty:u.MASTER,name:"Master AI",description:"Maximum strength with deep analysis",factory:()=>q.master(),isDefault:!0}),this.registerStrategy({difficulty:u.BLITZ,name:"Blitz AI",description:"Fast advanced AI for quick games",factory:()=>q.blitz(),isDefault:!0}),this.registerStrategy({difficulty:u.CUSTOM,name:"Custom Minimax",description:"User-configurable minimax AI",factory:()=>$.custom({}),isDefault:!1}),this.registerStrategy({difficulty:u.CUSTOM,name:"Custom Advanced",description:"User-configurable advanced AI",factory:()=>q.custom({}),isDefault:!0})}registerStrategy(e){this._strategyRegistry.has(e.difficulty)||this._strategyRegistry.set(e.difficulty,[]);const i=this._strategyRegistry.get(e.difficulty);e.isDefault&&i.forEach(t=>t.isDefault=!1),i.push(e)}getStrategy(e,i){const t=`${e}_${i||"default"}`;if(!this._strategies.has(t)){const s=this._strategyRegistry.get(e);if(!s||s.length===0)throw new Error(`No strategies registered for difficulty: ${e}`);let a;if(i){const n=s.find(o=>o.name===i);if(!n)throw new Error(`Strategy '${i}' not found for difficulty: ${e}`);a=n}else{const n=s.find(o=>o.isDefault);if(!n)throw new Error(`No default strategy found for difficulty: ${e}`);a=n}this._strategies.set(t,a.factory())}return this._strategies.get(t)}async requestMove(e){if(this._currentThinking&&this._options.maxConcurrentThinking<=1)throw new Error("AI is already thinking. Wait for current move or stop thinking first.");const i=e.timeLimit||1e3;this._currentThinking={isThinking:!0,difficulty:e.difficulty,strategyName:this.getStrategyName(e.difficulty),startTime:Date.now(),timeLimit:i,player:e.player,gameState:e.gameState};try{return this.shouldUseWorker(e.difficulty)?await this.requestMoveViaWorker(e):await this.requestMoveOnMainThread(e)}catch(t){if(this._options.fallbackOnTimeout&&t instanceof Error)return this.getFallbackMove(e);throw t}finally{this._currentThinking=null}}async getFallbackMove(e){return await W.pure().selectMove(e.gameState,e.player,100)}updateCustomAIConfig(e){this._customSettings=e,this.registerStrategy({difficulty:u.CUSTOM,name:"Custom Minimax",description:"User-configurable minimax AI",factory:()=>$.custom({maxDepth:e.searchDepth,maxTime:e.thinkingTime*1e3,useIterativeDeepening:e.iterativeDeepening,useTranspositionTable:e.useTranspositionTable}),isDefault:!1}),this.registerStrategy({difficulty:u.CUSTOM,name:"Custom Advanced",description:"User-configurable advanced AI",factory:()=>q.custom({minimaxDepth:e.searchDepth,minimaxTimeLimit:e.thinkingTime*1e3,thinkingTimeBase:e.thinkingTime*1e3,thinkingTimeMax:e.thinkingTime*2e3,useOpeningBook:e.useOpeningBook,useEndgameSolver:e.useEndgameSolver,adaptiveTimeManagement:e.adaptiveTime,useIterativeDeepening:e.iterativeDeepening}),isDefault:!0}),this._strategies.delete(`${u.CUSTOM}_Custom Minimax`),this._strategies.delete(`${u.CUSTOM}_Custom Advanced`)}shouldUseWorker(e){return[u.MINIMAX_EASY,u.MINIMAX,u.MINIMAX_HARD,u.ADVANCED,u.MASTER,u.BLITZ,u.CUSTOM].includes(e)}getStrategyName(e){const i=this._strategyRegistry.get(e);return i&&i.length>0?(i.find(s=>s.isDefault)||i[0]).name:"Unknown Strategy"}async requestMoveViaWorker(e){return new Promise((i,t)=>{let s=null,a=!1;const n=()=>{s&&(clearTimeout(s),s=null)},o=c=>{a||(a=!0,n(),i(c))},r=c=>{a||(a=!0,n(),t(c))};if(!this._worker)try{this._worker=new Worker(new URL("/assets/ai-worker-CWqBa3j1.js",import.meta.url),{type:"module"}),this._worker.addEventListener("message",c=>{this.handleWorkerMessage(c,o,r)}),this._worker.addEventListener("error",c=>{this.requestMoveWithChunking(e).then(o).catch(r)})}catch{this.requestMoveWithChunking(e).then(o).catch(r);return}const l=Date.now().toString()+"_"+Math.random().toString(36).substr(2,9);this._pendingWorkerRequests.set(l,{resolve:o,reject:r});try{this._worker.postMessage({type:"CALCULATE_MOVE",payload:{id:l,gameState:e.gameState,player:e.player,difficulty:e.difficulty,timeLimit:e.timeLimit||1e3,customConfig:this.getCustomConfig(e.difficulty)}});const c=Math.max((e.timeLimit||1e3)*2,5e3);s=window.setTimeout(()=>{this._pendingWorkerRequests.has(l)&&(this._pendingWorkerRequests.delete(l),this._worker&&(this._worker.terminate(),this._worker=null,this._pendingWorkerRequests.clear()),this.requestMoveWithChunking(e).then(o).catch(r))},c)}catch{this._pendingWorkerRequests.delete(l),this.requestMoveWithChunking(e).then(o).catch(r)}})}async requestMoveOnMainThread(e){const i=this.getStrategy(e.difficulty),t=e.timeLimit||1e3,s=await i.selectMove(e.gameState,e.player,t);return this._options.enablePerformanceLogging&&this.logPerformance(e.difficulty,i.getPerformanceMetrics()),s}handleWorkerMessage(e,i,t){const{type:s,payload:a}=e.data;if(s==="MOVE_RESULT"){const{id:n,result:o}=a;this._pendingWorkerRequests.get(n)&&(this._pendingWorkerRequests.delete(n),i(o))}else if(s==="ERROR"){const{id:n,error:o}=a;this._pendingWorkerRequests.get(n)&&(this._pendingWorkerRequests.delete(n),t(new Error(o)))}}async requestMoveWithChunking(e){let i=e.difficulty;switch(e.difficulty){case u.MINIMAX_HARD:case u.MASTER:i=u.MINIMAX_EASY;break;case u.ADVANCED:case u.MINIMAX:i=u.GREEDY;break;case u.BLITZ:i=u.GREEDY;break}const t=this.getStrategy(i),s=Math.min(e.timeLimit||1e3,1e3),a=Date.now(),n=2e3;try{const o=await Promise.race([this.executeWithYielding(async()=>await t.selectMove(e.gameState,e.player,s)),new Promise((l,c)=>{setTimeout(()=>{c(new Error("Chunked processing timeout"))},n)})]),r=Date.now()-a;return this._options.enablePerformanceLogging&&this.logPerformance(i,t.getPerformanceMetrics()),o}catch{return await W.pure().selectMove(e.gameState,e.player,100)}}async executeWithYielding(e){return new Promise((i,t)=>{let a=Date.now();const n=global.setTimeout;global.setTimeout=(o,r)=>{const l=Date.now();return l-a>100?(a=l,n(()=>{n(o,r)},0)):n(o,r)},e().then(o=>{global.setTimeout=n,i(o)}).catch(o=>{global.setTimeout=n,t(o)})})}getCustomConfig(e){return e===u.CUSTOM&&this._customSettings?this._customSettings:null}stopThinking(){this._currentThinking&&(this.shouldUseWorker(this._currentThinking.difficulty)?this._worker&&(this._worker.terminate(),this._worker=null,this._pendingWorkerRequests.clear()):this.getStrategy(this._currentThinking.difficulty,this._currentThinking.strategyName).stopThinking())}getThinkingStatus(){return this._currentThinking?{...this._currentThinking}:null}isThinking(){return this._currentThinking!==null}getAvailableStrategies(e){return this._strategyRegistry.get(e)||[]}getSupportedDifficulties(){return Array.from(this._strategyRegistry.keys())}getStrategyMetrics(e,i){return this.getStrategy(e,i).getPerformanceMetrics()}resetStrategyMetrics(e,i){this.getStrategy(e,i).resetMetrics()}getPerformanceHistory(e){return this._performanceHistory.get(e)||[]}logPerformance(e,i){this._performanceHistory.has(e)||this._performanceHistory.set(e,[]);const t=this._performanceHistory.get(e);t.push({...i}),t.length>100&&t.shift()}getAggregateStats(e){const i=this._performanceHistory.get(e)||[];if(i.length===0)return{totalGames:0,averageThinkingTime:0,averageAccuracy:0,timeoutRate:0};const t=i.reduce((o,r)=>o+r.movesPlayed,0),s=i.reduce((o,r)=>o+r.averageThinkingTime*r.movesPlayed,0),a=i.reduce((o,r)=>o+r.timeoutCount,0),n=i.reduce((o,r)=>o+r.accuracy*r.movesPlayed,0);return{totalGames:i.length,averageThinkingTime:t>0?s/t:0,averageAccuracy:t>0?n/t:0,timeoutRate:t>0?a/t:0}}clearCache(){this.stopThinking(),this._strategies.clear()}setOptions(e){this._options={...this._options,...e}}getOptions(){return{...this._options}}}const B=new ot({defaultDifficulty:u.GREEDY,enablePerformanceLogging:!0,fallbackOnTimeout:!0}),I=0,v=1,x=2,X=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];class rt{container=null;currentScreen="menu";selectedAI=null;customSettings=null;gameState=null;isProcessingMove=!1;aiThinking=!1;particleSystem;comboSystem;uiManager=null;modalService=null;comboDisplay=null;specialMoveDisplay=null;constructor(){this.particleSystem=new ke,this.comboSystem=new Ie,this.comboSystem.addEventListener(e=>{this.handleComboEvent(e)})}async initialize(e){this.container=e;const i=this.getSettings(),t=i.language||"en";ie(t),se(),this.setupUI(),this.particleSystem.initialize(e),this.particleSystem.setEnabled(i.animations),this.showMenu()}setupUI(){if(!this.container)return;this.container.innerHTML=`
      <div class="super-reversi-app">
        <div class="game-header" id="game-header">
          <button class="header-back-btn" id="header-back-btn" style="display: none;">⬅️</button>
          <h1 data-i18n="app.title">${m("app.title")}</h1>
        </div>

        <!-- Shared Health Bar System -->
        <div class="shared-health-bar-container" id="shared-health-bar-container" style="display: none;">
          <!-- Left Player Section (Black) -->
          <div class="player-section left">
            <div class="player-info">
              <div class="player-icon">⚫</div>
              <div class="player-name">${m("game.black")}</div>
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
                <span id="current-turn-shared">${m("game.black")}</span>
              </div>
            </div>
          </div>

          <!-- Right Player Section (White) -->
          <div class="player-section right">
            <div class="piece-count" id="white-count">2</div>
            <div class="player-info">
              <div class="player-name">${m("game.white")}</div>
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
              <h3 class="dialog-title" id="modal-title" data-i18n="modal.confirm.title">${m("modal.confirm.title")}</h3>
              <p class="dialog-message" id="modal-message" data-i18n="messages.quitConfirm">${m("messages.quitConfirm")}</p>
              <div class="dialog-buttons">
                <button class="dialog-btn primary" id="modal-confirm" data-i18n="modal.confirm">${m("modal.confirm")}</button>
                <button class="dialog-btn secondary" id="modal-cancel" data-i18n="modal.cancel">${m("modal.cancel")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.comboDisplay=this.container.querySelector("#combo-display"),this.specialMoveDisplay=this.container.querySelector("#special-move-display");const e=document.getElementById("header-back-btn");e&&e.addEventListener("click",()=>{this.currentScreen==="game"?this.showSimpleConfirm(m("messages.quitConfirm"),m("modal.quitConfirm.title")).then(i=>{i&&(this.cleanupGameState(),this.showMenu())}):this.showMenu()}),this.addStyles(),this.setupHeaderEvents()}setupHeaderEvents(){document.getElementById("header-settings-btn")?.addEventListener("click",()=>{this.showSettings()}),document.getElementById("header-back-btn")?.addEventListener("click",()=>{this.handleBackButton()})}async handleBackButton(){switch(this.currentScreen){case"settings":case"help":this.showMenu();break;case"difficulty":this.showMenu();break;case"game":this.gameState&&!this.gameState.isGameOver?await this.showSimpleConfirm(m("messages.leaveGame"))&&(this.cleanupGameState(),this.showMenu()):(this.cleanupGameState(),this.showMenu());break;default:this.showMenu();break}}handleComboEvent(e){if((e.type==="combo_started"||e.type==="combo_continued")&&(this.showComboUI(e.comboCount,e.player,e.comboType),this.showMessage(`🔥 ${e.comboCount} 連擊！`),this.container)){const i=this.container.getBoundingClientRect(),t=i.width/2,s=i.height/2;this.particleSystem.createChainEffect(t,s)}}cleanupGameState(){this.aiThinking=!1,this.isProcessingMove=!1,B.isThinking()&&B.stopThinking();const e=document.getElementById("ai-status");e&&(e.textContent=""),this.gameState&&(this.gameState=null)}showComboUI(e,i,t){if(!this.comboDisplay)return;const s=this.comboDisplay.querySelector(".combo-count"),a=this.comboDisplay.querySelector(".combo-text"),n=this.comboDisplay.querySelector(".combo-multiplier");s&&(s.textContent=e.toString()),a&&(a.textContent=m("combo.counter",{count:e})),n&&(n.style.display="none");const r={2:"#90ee90",3:"#ffa500",4:"#ff6347",5:"#ff1493",6:"#9932cc",7:"#ffd700"}[Math.min(e,7)]||"#ffd700";this.comboDisplay.style.background=`linear-gradient(135deg, ${r}, ${r}aa)`,this.comboDisplay.classList.remove("hidden"),this.comboDisplay.classList.add("combo-animation"),setTimeout(()=>{this.comboDisplay?.classList.add("hidden"),this.comboDisplay?.classList.remove("combo-animation")},3e3)}detectSpecialMoves(e,i,t,s){const a=Pe.detectSpecialMove(e,i,t,s,this.gameState?.moveHistory.length||0,60);a.length>0&&a.forEach((n,o)=>{setTimeout(()=>{const r=m(`special.${n}`);this.showSpecialMoveUI(r,n),this.showMessage(`⚡ ${r}`)},o*1e3)})}showSpecialMoveUI(e,i){if(!this.specialMoveDisplay)return;const t=this.specialMoveDisplay.querySelector(".special-move-title"),s=this.specialMoveDisplay.querySelector(".special-move-subtitle");if(t&&(t.textContent=e),s){const o=m(`special.${i}.subtitle`);s.textContent=o}const n={corner_master:"#ffd700",mega_flip:"#ff4500",phoenix_rise:"#ff69b4",domination:"#9932cc",time_warp:"#8b00ff"}[i]||"#ffd700";t&&(t.style.color=n,t.style.textShadow=`
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
          width: 100%;
          max-width: 100%;
          margin: 0 0 0.5rem;
          padding: 0 0.5rem;
          z-index: 100;
        }
      }

      @media (max-width: 480px) {
        .shared-health-bar-container {
          width: 100%;
          max-width: 100%;
          margin: 0 0 0.25rem;
          padding: 0 0.25rem;
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
    `,document.head.appendChild(e)}showMenu(){const e=document.getElementById("screen-container");if(!e)return;this.cleanupGameState(),this.currentScreen="menu";const i=document.getElementById("game-header"),t=document.getElementById("header-back-btn"),s=document.getElementById("shared-health-bar-container");i&&(i.style.display="flex"),t&&(t.style.display="none"),s&&(s.style.display="none");const a=document.getElementById("black-score"),n=document.getElementById("white-score"),o=document.getElementById("current-turn");a&&(a.textContent=""),n&&(n.textContent=""),o&&(o.textContent=""),this.gameState=null,e.innerHTML=`
      <div class="menu-screen">
        <h2 class="menu-title">${m("menu.chooseMode")}</h2>
        <button class="menu-button" id="pvp-btn">👥 ${m("menu.pvp")}</button>
        <button class="menu-button" id="pvc-btn">🤖 ${m("menu.pvc")}</button>
        <button class="menu-button" id="menu-settings-btn">⚙️ ${m("menu.settings")}</button>
        <button class="menu-button" id="help-btn">❓ ${m("menu.help")}</button>
      </div>
    `,document.getElementById("pvp-btn")?.addEventListener("click",()=>{this.startNewGame("pvp")}),document.getElementById("pvc-btn")?.addEventListener("click",()=>{this.showAIDifficultyMenu()}),document.getElementById("menu-settings-btn")?.addEventListener("click",()=>{this.showSettings()}),document.getElementById("help-btn")?.addEventListener("click",()=>{this.showHelp()})}showAIDifficultyMenu(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="difficulty";const i=document.getElementById("header-back-btn");i&&(i.style.display="flex"),e.innerHTML=`
      <div class="ai-selection-screen">
        <h2 class="menu-title">${m("menu.selectDifficulty")}</h2>

        <!-- AI Level Tabs -->
        <div class="ai-level-tabs">
          <button class="ai-level-tab active" data-level="beginner">
            <span class="level-icon">🌱</span>
            <span class="level-name">初學者</span>
          </button>
          <button class="ai-level-tab" data-level="intermediate">
            <span class="level-icon">📚</span>
            <span class="level-name">中級玩家</span>
          </button>
          <button class="ai-level-tab" data-level="advanced">
            <span class="level-icon">⚔️</span>
            <span class="level-name">高級玩家</span>
          </button>
          <button class="ai-level-tab" data-level="professional">
            <span class="level-icon">🏆</span>
            <span class="level-name">職業級別</span>
          </button>
        </div>

        <!-- AI Options Grid -->
        <div class="ai-options-grid" id="ai-options-grid">
          <!-- Dynamic AI options will be loaded here -->
        </div>

        <!-- AI Info Box -->
        <div class="ai-info-box" id="ai-info-box">
          <div class="ai-info-header">
            <h3 id="ai-info-name">隨機AI</h3>
            <div class="ai-strength" id="ai-strength">★☆☆☆☆</div>
          </div>
          <p class="ai-description" id="ai-description">完全隨機選擇合法移動</p>
          <div class="ai-details">
            <div class="ai-detail">
              <span class="detail-label">思考時間:</span>
              <span class="detail-value" id="ai-thinking-time">0.1秒</span>
            </div>
            <div class="ai-detail">
              <span class="detail-label">搜索深度:</span>
              <span class="detail-value" id="ai-search-depth">0</span>
            </div>
            <div class="ai-features" id="ai-features">
              <span class="feature">即時響應</span>
              <span class="feature">完全隨機</span>
            </div>
          </div>
        </div>

        <!-- Custom Settings Panel (hidden by default) -->
        <div class="ai-custom-settings" id="ai-custom-settings" style="display: none;">
          <h4>自定義AI設定</h4>
          <div class="custom-setting">
            <label>思考時間 (秒):</label>
            <input type="range" id="custom-thinking-time" min="1" max="30" value="5" step="0.5">
            <span id="thinking-time-value">5.0</span>
          </div>
          <div class="custom-setting">
            <label>搜索深度:</label>
            <input type="range" id="custom-search-depth" min="1" max="12" value="6">
            <span id="search-depth-value">6</span>
          </div>
          <div class="custom-setting">
            <label>
              <input type="checkbox" id="custom-opening-book" checked>
              使用開局庫
            </label>
          </div>
          <div class="custom-setting">
            <label>
              <input type="checkbox" id="custom-endgame-solver" checked>
              終局求解器
            </label>
          </div>
          <div class="custom-setting">
            <label>AI性格:</label>
            <select id="custom-personality">
              <option value="balanced">均衡型</option>
              <option value="aggressive">進攻型</option>
              <option value="defensive">防守型</option>
              <option value="positional">位置型</option>
            </select>
          </div>
        </div>

        <!-- Start Game Button -->
        <button class="menu-button" id="start-ai-btn">${m("menu.startGame")}</button>
      </div>
    `,this.initializeAISelection()}initializeAISelection(){de(async()=>{const{AI_OPTIONS_DATABASE:e,getDefaultAIForLevel:i}=await import("./ai-config-types-DOMXaEOJ.js");return{AI_OPTIONS_DATABASE:e,getDefaultAIForLevel:i}},__vite__mapDeps([0,1])).then(({AI_OPTIONS_DATABASE:e,getDefaultAIForLevel:i})=>{this.setupAISelectionHandlers(e,i)})}setupAISelectionHandlers(e,i){let t="beginner";const s=document.querySelectorAll(".ai-level-tab");s.forEach(n=>{n.addEventListener("click",()=>{s.forEach(r=>r.classList.remove("active")),n.classList.add("active"),t=n.getAttribute("data-level")||"beginner",this.loadAIOptions(t,e);const o=i(t);o&&(this.selectedAI=o.id,this.updateAIInfo(o))})}),this.loadAIOptions("beginner",e);const a=i("beginner");a&&(this.selectedAI=a.id,this.updateAIInfo(a)),document.getElementById("start-ai-btn")?.addEventListener("click",()=>{this.selectedAI&&(this.selectedAI===u.CUSTOM&&this.customSettings&&B.updateCustomAIConfig(this.customSettings),this.startNewGame("pvc",this.selectedAI))}),this.initializeCustomSettings()}loadAIOptions(e,i){const t=document.getElementById("ai-options-grid");if(!t)return;const s=i[e]||[];t.innerHTML=s.map(n=>`
      <div class="ai-option-card" data-ai-id="${n.id}">
        <div class="ai-card-header">
          <h4>${n.name}</h4>
          <div class="ai-strength">${this.getStrengthStars(n.strength)}</div>
        </div>
        <p class="ai-card-description">${n.description}</p>
        <div class="ai-card-features">
          ${n.features.map(o=>`<span class="feature">${o}</span>`).join("")}
        </div>
      </div>
    `).join("");const a=t.querySelectorAll(".ai-option-card");a.forEach(n=>{n.addEventListener("click",()=>{a.forEach(l=>l.classList.remove("selected")),n.classList.add("selected");const o=n.getAttribute("data-ai-id"),r=s.find(l=>l.id===o);r&&(this.selectedAI=r.id,this.updateAIInfo(r),this.toggleCustomSettings(r.isCustomizable))})}),a.length>0&&a[0].classList.add("selected")}updateAIInfo(e){const i=document.getElementById("ai-info-name"),t=document.getElementById("ai-strength"),s=document.getElementById("ai-description"),a=document.getElementById("ai-thinking-time"),n=document.getElementById("ai-search-depth"),o=document.getElementById("ai-features");i&&(i.textContent=e.name),t&&(t.textContent=this.getStrengthStars(e.strength)),s&&(s.textContent=e.description),a&&(a.textContent=e.thinkingTime),n&&(n.textContent=e.searchDepth.toString()),o&&(o.innerHTML=e.features.map(r=>`<span class="feature">${r}</span>`).join(""))}getStrengthStars(e){return"★".repeat(e)+"☆".repeat(5-e)}toggleCustomSettings(e){const i=document.getElementById("ai-custom-settings");i&&(i.style.display=e?"block":"none")}initializeCustomSettings(){const e=document.getElementById("custom-thinking-time"),i=document.getElementById("thinking-time-value"),t=document.getElementById("custom-search-depth"),s=document.getElementById("search-depth-value");e&&i&&e.addEventListener("input",()=>{i.textContent=parseFloat(e.value).toFixed(1)}),t&&s&&t.addEventListener("input",()=>{s.textContent=t.value}),document.querySelectorAll("#ai-custom-settings input, #ai-custom-settings select").forEach(n=>{n.addEventListener("change",()=>{this.updateCustomSettings()})})}updateCustomSettings(){const e=parseFloat(document.getElementById("custom-thinking-time")?.value||"5"),i=parseInt(document.getElementById("custom-search-depth")?.value||"6"),t=document.getElementById("custom-opening-book")?.checked||!1,s=document.getElementById("custom-endgame-solver")?.checked||!1,a=document.getElementById("custom-personality")?.value||"balanced";this.customSettings={thinkingTime:e,searchDepth:i,useOpeningBook:t,useEndgameSolver:s,adaptiveTime:!0,personality:a,iterativeDeepening:!0,useTranspositionTable:!0}}showSettings(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="settings";const i=document.getElementById("header-back-btn");i&&(i.style.display="flex"),e.innerHTML=`
      <div class="settings-screen">
        <h2 style="color: #00ff7f; margin-bottom: 1.25rem;">${m("settings.title")}</h2>

        <div class="settings-group">
          <h3>${m("settings.language")}</h3>
          <select id="language-select" class="language-select">
            <option value="en">English</option>
            <option value="zh-Hant">繁體中文</option>
            <option value="zh-Hans">简体中文</option>
          </select>
        </div>

        <div class="settings-group">
          <h3>${m("settings.visual")}</h3>
          <label>
            <input type="checkbox" id="show-valid" checked> ${m("settings.showValid")}
          </label>
          <label>
            <input type="checkbox" id="show-last" checked> ${m("settings.showLast")}
          </label>
          <label>
            <input type="checkbox" id="show-mobility"> ${m("settings.showMobility")}
          </label>
          <label>
            <input type="checkbox" id="animations" checked> ${m("settings.animations")}
          </label>
        </div>

        <div class="settings-group">
          <h3>${m("settings.game")}</h3>
          <label>
            <input type="checkbox" id="auto-pass" checked> ${m("settings.autoPass")}
          </label>
          <label>
            <input type="checkbox" id="confirm-moves"> ${m("settings.confirm")}
          </label>
        </div>

        <button class="menu-button" id="save-settings" style="margin-top: 1.25rem;">
          ${m("settings.save")}
        </button>
      </div>
    `;const t=this.getSettings();document.getElementById("language-select").value=t.language||"en",document.getElementById("show-valid").checked=t.showValid,document.getElementById("show-last").checked=t.showLast,document.getElementById("show-mobility").checked=t.showMobility,document.getElementById("animations").checked=t.animations,document.getElementById("auto-pass").checked=t.autoPass,document.getElementById("confirm-moves").checked=t.confirmMoves,document.getElementById("save-settings")?.addEventListener("click",()=>{const s=document.getElementById("language-select").value,a={language:s,showValid:document.getElementById("show-valid")?.checked,showLast:document.getElementById("show-last")?.checked,showMobility:document.getElementById("show-mobility")?.checked,animations:document.getElementById("animations")?.checked,autoPass:document.getElementById("auto-pass")?.checked,confirmMoves:document.getElementById("confirm-moves")?.checked};localStorage.setItem("reversi-settings",JSON.stringify(a)),localStorage.setItem("language",s),ie(s),se(),this.particleSystem.setEnabled(a.animations),this.modalService&&this.modalService.showSuccess(m("settings.saved"),m("modal.settingsSaved.title")),this.refreshUI()})}showHelp(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="help";const i=document.getElementById("header-back-btn");i&&(i.style.display="flex"),e.innerHTML=`
      <div class="help-screen">
        <h2>${m("help.title")}</h2>

        <h3>${m("help.objectiveTitle")}</h3>
        <p>${m("help.objectiveText")}</p>

        <h3>${m("help.rulesTitle")}</h3>
        <ul>
          <li>${m("help.rules1")}</li>
          <li>${m("help.rules2")}</li>
          <li>${m("help.rules3")}</li>
          <li>${m("help.rules4")}</li>
          <li>${m("help.rules5")}</li>
          <li>${m("help.rules6")}</li>
        </ul>

        <h3>${m("help.strategyTitle")}</h3>
        <ul>
          <li>${m("help.strategy1")}</li>
          <li>${m("help.strategy2")}</li>
          <li>${m("help.strategy3")}</li>
          <li>${m("help.strategy4")}</li>
        </ul>

        <h3>${m("help.controlsTitle")}</h3>
        <ul>
          <li>${m("help.controls1")}</li>
          <li>${m("help.controls2")}</li>
          <li>${m("help.controls3")}</li>
        </ul>
      </div>
    `}startNewGame(e,i=u.GREEDY){this.gameState={board:this.createInitialBoard(),currentPlayer:v,blackScore:2,whiteScore:2,gameMode:e,isGameOver:!1,validMoves:new Set,moveHistory:[],aiDifficulty:i},this.updateValidMoves(),this.showGameScreen(),this.updateDisplay()}createInitialBoard(){const e=new Array(64).fill(I);return e[27]=x,e[28]=v,e[35]=v,e[36]=x,e}showGameScreen(){const e=document.getElementById("screen-container");if(!e||!this.gameState)return;this.currentScreen="game";const i=document.getElementById("game-header"),t=document.getElementById("header-back-btn"),s=document.getElementById("shared-health-bar-container");i&&(i.style.display="flex"),t&&(t.style.display="flex"),s&&(s.style.display="flex");const a=this.gameState.gameMode==="pvp"?m("game.pvp"):`${m("game.pvai")} (${m("difficulty."+this.gameState.aiDifficulty)})`;e.innerHTML=`
      <div class="game-screen">
        <div class="game-info-compact">
          <div>${m("game.mode")}: ${a}</div>
          <div id="ai-status"></div>
        </div>
        <div class="game-board" id="game-board"></div>
        <div id="game-over-modal" style="display: none;"></div>
      </div>
    `,this.createBoardCells()}createBoardCells(){const e=document.getElementById("game-board");if(!(!e||!this.gameState)){e.innerHTML="";for(let i=0;i<64;i++){const t=document.createElement("div");t.className="board-cell",t.dataset.position=i.toString(),t.addEventListener("click",()=>{!this.isProcessingMove&&!this.aiThinking&&this.handleCellClick(i)}),e.appendChild(t)}this.renderBoard()}}renderBoard(){if(!this.gameState)return;const e=this.getSettings(),i=new Map;if(e.showMobility&&this.gameState.validMoves.size>0)for(const t of this.gameState.validMoves){const s=this.calculateMoveMobility(t,this.gameState.currentPlayer);i.set(t,s)}for(let t=0;t<64;t++){const s=document.querySelector(`[data-position="${t}"]`);if(s){if(s.className="board-cell",s.innerHTML="",this.gameState.board[t]!==I){const a=document.createElement("div");a.className=`piece ${this.gameState.board[t]===v?"piece-black":"piece-white"}`,s.appendChild(a)}if(e.showValid&&this.gameState.validMoves.has(t)&&(s.classList.add("valid-move"),e.showMobility&&i.has(t))){const a=i.get(t),n=document.createElement("div");n.className="mobility-indicator";const o=a.player-a.opponent;n.textContent=o>0?`+${o}`:`${o}`,o>0?n.classList.add("mobility-positive"):o<0?n.classList.add("mobility-negative"):n.classList.add("mobility-neutral"),s.appendChild(n)}if(e.showLast&&this.gameState.moveHistory.length>0){const a=this.gameState.moveHistory[this.gameState.moveHistory.length-1];a&&a.position===t&&s.classList.add("last-move")}}}}getSettings(){const e=localStorage.getItem("reversi-settings");return e?JSON.parse(e):{language:localStorage.getItem("language")||"en",showValid:!0,showLast:!0,showMobility:!1,animations:!0,autoPass:!0,confirmMoves:!1}}async handleCellClick(e){if(!this.gameState||this.gameState.isGameOver||!this.gameState.validMoves.has(e))return;const i=this.getSettings();this.gameState.gameMode==="pvc"&&this.gameState.currentPlayer===v&&i.confirmMoves&&!await this.showSimpleConfirm(m("messages.moveConfirm"),m("modal.moveConfirm.title"))||this.makeMove(e)}makeMove(e){if(!this.gameState)return;this.isProcessingMove=!0;const i=this.getSettings(),t=this.getFlippedPieces(e,this.gameState.currentPlayer),s={corner:e===0||e===7||e===56||e===63,edge:this.isEdgePosition(e),massive:t.length>=10,chain:this.isChainMove(t),comeback:this.isComebackMove(),domination:this.isDominationMove()},a=this.particleSystem.calculateGrade(t.length,e,s),n=document.querySelector(`[data-position="${e}"]`);if(n){const o=n.getBoundingClientRect(),r=this.container.getBoundingClientRect(),l=o.left+o.width/2-r.left,c=o.top+o.height/2-r.top,d=t.map(f=>{const p=document.querySelector(`[data-position="${f}"]`);if(p){const y=p.getBoundingClientRect();return{x:y.left+y.width/2-r.left,y:y.top+y.height/2-r.top}}return{x:l,y:c}});i.animations&&(this.particleSystem.triggerMoveEffect(l,c,a,t.length,s,d),s.chain&&this.particleSystem.createChainEffect(l,c),this.showGradeIndicator(a,l,c))}if(this.gameState.moveHistory.push({position:e,player:this.gameState.currentPlayer,flipped:t}),this.triggerScreenShake(a),this.gameState.board[e]=this.gameState.currentPlayer,n){const o=document.createElement("div");o.className=`piece ${this.gameState.currentPlayer===v?"piece-black":"piece-white"} placing`,n.innerHTML="",n.appendChild(o)}i.animations?setTimeout(()=>{this.flipPiecesWithEffects(t,a);const o=t.length*80+300;setTimeout(()=>{this.afterMove()},o)},200):(this.flipPiecesWithEffects(t,a),this.afterMove())}showGradeIndicator(e,i,t){const s=document.createElement("div");switch(s.style.position="absolute",s.style.left=`${i}px`,s.style.top=`${t-50}px`,s.style.transform="translateX(-50%)",s.style.fontSize="3rem",s.style.fontWeight="bold",s.style.zIndex="200",s.style.pointerEvents="none",s.style.animation="gradePopup 1s ease-out forwards",e){case"SSS":s.textContent="SSS",s.style.color="#ff0080",s.style.textShadow="0 0 1.875rem #ff0080, 0 0 3.75rem #ff69b4",s.style.fontSize="3.5rem",s.style.animation="gradePopup 2s ease-out forwards, rainbow 2s infinite";break;case"SS":s.textContent="SS",s.style.color="#9932cc",s.style.textShadow="0 0 1.5625rem #9932cc, 0 0 3.125rem #8b00ff",s.style.fontSize="3.25rem",s.style.animation="gradePopup 1.5s ease-out forwards, glow 1.5s infinite";break;case"S":s.textContent="S",s.style.color="#ff69b4",s.style.textShadow="0 0 1.25rem #ff69b4",s.style.fontSize="3rem";break;case"A":s.textContent="A",s.style.color="#ffd700",s.style.textShadow="0 0 1.25rem #ffd700";break;case"B":s.textContent="B",s.style.color="#00ff7f",s.style.textShadow="0 0 0.9375rem #00ff7f";break;case"C":s.textContent="C",s.style.color="#888888",s.style.textShadow="0 0 0.625rem #888888";break}if(!document.getElementById("grade-animation-style")){const a=document.createElement("style");a.id="grade-animation-style",a.textContent=`
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
      `,document.head.appendChild(a)}this.container?.appendChild(s),setTimeout(()=>{s.remove()},1e3)}flipPiecesWithEffects(e,i){if(!this.gameState)return;this.getSettings().animations?e.forEach((s,a)=>{setTimeout(()=>{this.gameState.board[s]=this.gameState.currentPlayer;const n=document.querySelector(`[data-position="${s}"]`);if(n){const o=n.getBoundingClientRect(),r=this.container.getBoundingClientRect(),l=o.left+o.width/2-r.left,c=o.top+o.height/2-r.top,d=this.gameState.currentPlayer===v?"#000000":"#ffffff";this.particleSystem.createFlipEffect(l,c,d,i);const f=n.querySelector(".piece");f&&(f.classList.add("flipping"),setTimeout(()=>{f.className=`piece ${this.gameState.currentPlayer===v?"piece-black":"piece-white"}`},250))}},a*80)}):e.forEach(s=>{this.gameState.board[s]=this.gameState.currentPlayer;const a=document.querySelector(`[data-position="${s}"]`);if(a){const n=a.querySelector(".piece");n&&(n.className=`piece ${this.gameState.currentPlayer===v?"piece-black":"piece-white"}`)}})}flipPieces(e){if(!this.gameState)return;const i=this.getSettings();e.forEach(t=>{this.gameState.board[t]=this.gameState.currentPlayer;const s=document.querySelector(`[data-position="${t}"]`);if(s){const a=s.querySelector(".piece");a&&i.animations?(a.classList.add("flipping"),setTimeout(()=>{a.className=`piece ${this.gameState.currentPlayer===v?"piece-black":"piece-white"}`},250)):a&&(a.className=`piece ${this.gameState.currentPlayer===v?"piece-black":"piece-white"}`)}})}afterMove(){if(!this.gameState)return;this.updateScores(),this.gameState.currentPlayer=this.gameState.currentPlayer===v?x:v,this.updateValidMoves();const e=this.gameState.currentPlayer===v?x:v,i=this.gameState.validMoves.size>0,t=this.gameState.moveHistory[this.gameState.moveHistory.length-1];t&&(this.comboSystem.processMove(e===v?1:2,i,t.flipped.length),this.detectSpecialMoves(t.position,t.flipped,e===v?this.gameState.blackScore:this.gameState.whiteScore,e===v?this.gameState.whiteScore:this.gameState.blackScore));const s=!this.checkGameStatus();s&&this.updateDisplay(),this.isProcessingMove=!1,s&&this.gameState.gameMode==="pvc"&&this.gameState.currentPlayer===x&&this.makeAIMove()}updateValidMoves(){if(this.gameState){this.gameState.validMoves.clear();for(let e=0;e<64;e++)this.gameState.board[e]===I&&this.isValidMove(e,this.gameState.currentPlayer)&&this.gameState.validMoves.add(e)}}isValidMove(e,i){if(!this.gameState||this.gameState.board[e]!==I)return!1;for(const[t,s]of X)if(this.checkDirection(e,i,t||0,s||0).length>0)return!0;return!1}checkDirection(e,i,t,s){if(!this.gameState)return[];const a=[],n=Math.floor(e/8),o=e%8,r=i===v?x:v;let l=n+s,c=o+t;for(;l>=0&&l<8&&c>=0&&c<8;){const d=l*8+c;if(this.gameState.board[d]===I)return[];if(this.gameState.board[d]===r)a.push(d);else return a.length>0?a:[];l+=s,c+=t}return[]}getFlippedPieces(e,i){const t=[];for(const[s,a]of X){const n=this.checkDirection(e,i,s,a);t.push(...n)}return t}calculateMoveMobility(e,i){if(!this.gameState)return{player:0,opponent:0};const t=[...this.gameState.board],s=this.getFlippedPieces(e,i);t[e]=i;for(const r of s)t[r]=i;const a=i===v?x:v;let n=0;for(let r=0;r<64;r++)t[r]===I&&this.isValidMoveOnBoard(r,a,t)&&n++;let o=0;for(let r=0;r<64;r++)t[r]===I&&this.isValidMoveOnBoard(r,i,t)&&o++;return{player:o,opponent:n}}isValidMoveOnBoard(e,i,t){if(t[e]!==I)return!1;for(const[s,a]of X)if(this.checkDirectionOnBoard(e,i,s||0,a||0,t).length>0)return!0;return!1}checkDirectionOnBoard(e,i,t,s,a){const n=[],o=Math.floor(e/8),r=e%8,l=i===v?x:v;let c=o+s,d=r+t;for(;c>=0&&c<8&&d>=0&&d<8;){const f=c*8+d;if(a[f]===I)return[];if(a[f]===l)n.push(f);else return n.length>0?n:[];c+=s,d+=t}return[]}updateScores(){if(!this.gameState)return;const e=this.gameState.blackScore,i=this.gameState.whiteScore;let t=0,s=0;for(const a of this.gameState.board)a===v?t++:a===x&&s++;this.gameState.blackScore=t,this.gameState.whiteScore=s,e!==t&&this.animateSharedHealthChange("black",e,t),i!==s&&this.animateSharedHealthChange("white",i,s)}checkGameStatus(){if(!this.gameState)return!1;if(this.gameState.validMoves.size===0){if(this.gameState.currentPlayer=this.gameState.currentPlayer===v?x:v,this.updateValidMoves(),this.gameState.validMoves.size===0)return this.gameOver(),!0;if(this.getSettings().autoPass){const i=this.gameState.currentPlayer===v?"Black":"White";this.showMessage(`No valid moves - passing to ${i}`)}}return!1}gameOver(){if(!this.gameState)return;this.gameState.isGameOver=!0;let e,i;this.gameState.blackScore>this.gameState.whiteScore?(e=m("game.blackWins"),i="#000"):this.gameState.whiteScore>this.gameState.blackScore?(e=m("game.whiteWins"),i="#fff"):(e=m("game.tie"),i="#ffd700");const t=document.getElementById("game-over-modal");t&&(t.style.display="block",t.className="game-over-modal",t.innerHTML=`
        <h2 class="game-over-title">🏆 ${m("game.gameOverTitle")}</h2>
        <div class="final-scores">
          <p style="font-size: 2.25rem; color: ${i}; margin: 1.25rem 0;">
            ${e}
          </p>
          <p>⚫ ${m("game.black")}: ${this.gameState.blackScore}</p>
          <p>⚪ ${m("game.white")}: ${this.gameState.whiteScore}</p>
          <p style="margin-top: 1.25rem; font-size: 1.125rem;">
            ${m("game.totalMoves")}: ${this.gameState.moveHistory.length}
          </p>
        </div>
        <div class="modal-buttons">
          <button class="menu-button" id="play-again">${m("game.playAgain")}</button>
          <button class="menu-button" id="main-menu">${m("game.mainMenu")}</button>
        </div>
      `,document.getElementById("play-again")?.addEventListener("click",()=>{t.style.display="none",this.startNewGame(this.gameState.gameMode,this.gameState.aiDifficulty)}),document.getElementById("main-menu")?.addEventListener("click",()=>{t.style.display="none",this.showMenu()}))}animateSharedHealthChange(e,i,t){const s=t-i,a=document.querySelector(".shared-health-bar");Math.abs(s)>=5&&a&&(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),s!==0&&this.showSharedDamageNumber(e,s)}showSharedDamageNumber(e,i){const t=document.getElementById("damage-numbers"),s=document.querySelector(`.player-section.${e==="black"?"left":"right"}`);if(!t||!s)return;const a=document.createElement("div");a.className=`damage-number ${i>0?"positive":"negative"}`,a.textContent=i>0?`+${i}`:i.toString();const n=s.getBoundingClientRect(),o=t.getBoundingClientRect();a.style.left=`${n.left-o.left+n.width/2}px`,a.style.top=`${n.top-o.top-10}px`,a.style.transform="translateX(-50%)",t.appendChild(a),setTimeout(()=>{a.parentNode&&a.parentNode.removeChild(a)},1e3)}showDamageNumber(e,i){this.showSharedDamageNumber(e,i)}updateSharedHealthBar(){if(!this.gameState)return;const e=document.getElementById("black-fill"),i=document.getElementById("white-fill"),t=document.getElementById("black-count"),s=document.getElementById("white-count"),a=document.getElementById("current-turn-shared");if(!e||!i||!t||!s||!a)return;const n=this.gameState.blackScore+this.gameState.whiteScore,o=n>0?this.gameState.blackScore/n*100:50,r=n>0?this.gameState.whiteScore/n*100:50;e.style.width=`${o}%`,i.style.width=`${r}%`,t.textContent=this.gameState.blackScore.toString(),s.textContent=this.gameState.whiteScore.toString();const l=this.gameState.currentPlayer===v?m("game.black"):m("game.white");a.innerHTML=`<span>${l}</span>`;const c=e,d=i;o<15?c.classList.add("critical"):c.classList.remove("critical"),r<15?d.classList.add("critical"):d.classList.remove("critical"),o>75?(c.classList.add("dominant"),d.classList.remove("dominant")):r>75?(d.classList.add("dominant"),c.classList.remove("dominant")):(c.classList.remove("dominant"),d.classList.remove("dominant")),this.updateVSDividerPosition(o),this.triggerSpecialHealthEffects(o,r)}updateVSDividerPosition(e){const i=document.getElementById("vs-divider");i&&(i.style.left=`${e}%`)}triggerSpecialHealthEffects(e,i){const t=document.querySelector(".shared-health-bar"),s=document.getElementById("black-fill"),a=document.getElementById("white-fill");if(!t||!s||!a)return;t.classList.remove("balanced","dramatic-shift"),s.classList.remove("pulsing"),a.classList.remove("pulsing"),e>=45&&e<=55&&t.classList.add("balanced"),Math.abs(e-50)>35&&(t.classList.add("dramatic-shift"),e>65?s.classList.add("pulsing"):i>65&&a.classList.add("pulsing"),setTimeout(()=>{t.classList.remove("dramatic-shift")},1500))}updateDisplay(){if(!this.gameState)return;this.updateSharedHealthBar();const e=document.getElementById("black-score"),i=document.getElementById("white-score"),t=document.getElementById("current-turn");if(e&&(e.textContent=`⚫ ${m("game.black")}: ${this.gameState.blackScore}`),i&&(i.textContent=`⚪ ${m("game.white")}: ${this.gameState.whiteScore}`),t){const a=this.gameState.currentPlayer===v?m("game.black"):m("game.white");t.innerHTML=`${m("game.current")}: <span style="color: ${this.gameState.currentPlayer===v?"#000":"#fff"};">${a}</span>`}const s=document.getElementById("turn-indicator");if(s){const a=this.gameState.currentPlayer===v?"#000":"#fff",n=this.gameState.currentPlayer===v?m("game.black"):m("game.white");s.innerHTML=`${m("game.currentTurn")} <span style="color: ${a}; font-weight: bold;">${n}</span>`}this.renderBoard()}showMessage(e){const i=document.getElementById("ai-status");i&&(i.textContent=e,setTimeout(()=>{i.textContent=""},2e3))}triggerScreenShake(e){if(!this.container||!this.getSettings().animations)return;let t=0,s=0;switch(e){case"SSS":t=8,s=600;break;case"SS":t=7,s=550;break;case"S":t=12,s=800;break;case"A":t=6,s=500;break;case"B":t=3,s=300;break;case"C":return}const a=this.container.querySelector(".super-reversi-app");if(a){if(a.style.animation=`shake ${s}ms ease-in-out`,!document.getElementById("shake-animation")){const n=document.createElement("style");n.id="shake-animation",n.textContent=`
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
        `,document.head.appendChild(n)}setTimeout(()=>{a.style.animation=""},s)}}isMobileDevice(){const e=navigator.userAgent.toLowerCase(),t=["mobile","android","iphone","ipad","ipod","blackberry","windows phone"].some(n=>e.includes(n)),s=window.innerWidth<768,a="ontouchstart"in window||navigator.maxTouchPoints>0;return t||s&&a}getDeviceOptimizedAIConfig(e){return this.isMobileDevice()&&{[u.MINIMAX_HARD]:{maxDepth:6,timeLimit:3e3,disableEndgameSolver:!1},[u.ADVANCED]:{maxDepth:6,timeLimit:4e3,disableEndgameSolver:!1},[u.MASTER]:{maxDepth:6,timeLimit:5e3,disableEndgameSolver:!0}}[e]||null}async makeAIMove(){if(!this.gameState||this.gameState.validMoves.size===0||this.aiThinking||this.isProcessingMove)return;this.aiThinking=!0;const e=document.getElementById("ai-status");if(e){const s=this.isMobileDevice(),a=[u.ADVANCED,u.MASTER].includes(this.gameState.aiDifficulty);let n="AI 正在思考...",o="";s&&a&&(n="AI 正在深度思考...",o='<div style="font-size: 0.75rem; color: #888; margin-top: 0.25rem;">手機版建議使用較低難度以獲得更佳體驗</div>'),e.innerHTML=`
        <div class="ai-thinking-animation">
          <div class="thinking-dots">
            <div class="thinking-dot"></div>
            <div class="thinking-dot"></div>
            <div class="thinking-dot"></div>
          </div>
          <span>${n}</span>
          ${o}
        </div>
      `,e.style.display="block",e.style.visibility="visible"}let i=null,t=null;try{const s=this.convertToCoreGameState(this.gameState),a=Date.now(),n=this.getAITimeLimit(this.gameState.aiDifficulty),o={gameState:s,player:this.gameState.currentPlayer===v?g.BLACK:g.WHITE,difficulty:this.gameState.aiDifficulty,timeLimit:n,priority:5},r=this.isMobileDevice(),l=r?3e3:8e3,c=r?15e3:3e4;i=setTimeout(()=>{this.aiThinking&&e&&(e.innerHTML=`
            <div class="ai-thinking-animation">
              <div class="thinking-dots">
                <div class="thinking-dot"></div>
                <div class="thinking-dot"></div>
                <div class="thinking-dot"></div>
              </div>
              <span>AI 正在深度分析...</span>
              <div style="font-size: 0.75rem; color: #f39c12; margin-top: 0.25rem;">
                ⚡ ${r?"手機版處理較慢，請稍候":"複雜局面需要更多時間"}
              </div>
            </div>
          `)},l),t=setTimeout(()=>{if(this.aiThinking&&!this.isProcessingMove){i&&clearTimeout(i),B.isThinking()&&B.stopThinking(),this.aiThinking=!1,this.isProcessingMove=!0,e&&(e.innerHTML=`
              <div class="ai-error-display">
                <div style="color: #e74c3c; font-weight: 500; margin-bottom: 0.25rem;">
                  ⚠️ AI 超時保護啟動
                </div>
                <div style="font-size: 0.75rem; color: #888;">
                  ${r?"自動降級為隨機移動":"執行備用隨機策略"}
                </div>
              </div>
            `,setTimeout(()=>{e&&(e.textContent="")},3e3));const T=Array.from(this.gameState.validMoves);if(T.length>0){const F=T[Math.floor(Math.random()*T.length)];setTimeout(()=>{this.makeMove(F),this.isProcessingMove=!1},100)}else this.isProcessingMove=!1}},c);const d=await B.requestMove(o);i&&clearTimeout(i),t&&clearTimeout(t);const f=Date.now()-a,p=(d.thinkingTime/1e3).toFixed(1),y=d.depth||0,S=(d.confidence*100).toFixed(0),w=d.nodesEvaluated||0,b=r&&f>5e3,A=!r&&f>15e3;if(e){let T="";b?T='<div style="font-size: 0.75rem; color: #e67e22; margin-top: 0.25rem;">💡 考慮使用較低AI難度以加快遊戲速度</div>':A&&(T='<div style="font-size: 0.75rem; color: #e67e22; margin-top: 0.25rem;">💡 複雜局面需要更多計算時間</div>'),e.innerHTML=`
          <div class="ai-info-display">
            <div style="color: var(--color-primary); font-weight: 500; margin-bottom: 0.25rem;">
              🤖 AI 計算完成
            </div>
            <div class="ai-info">
              <div>⏱️ ${p}s</div>
              <div>🔍 深度 ${y}</div>
              <div>🎯 ${S}%</div>
              ${w>0?`<div>🧮 ${w.toLocaleString()} 節點</div>`:""}
            </div>
            ${T}
          </div>
        `}setTimeout(()=>{this.isProcessingMove||(this.makeMove(d.position),e&&(e.textContent=""),this.aiThinking=!1)},300)}catch(s){i&&clearTimeout(i),t&&clearTimeout(t);const a=this.isMobileDevice();if(e){const o=s instanceof Error?s.message:String(s),l=o.includes("timeout")||o.includes("時間")?"思考超時":"計算失敗",c=a?"建議降低AI難度或重新開始遊戲":"請重試或降低AI難度";e.innerHTML=`
          <div class="ai-error-display">
            <div style="color: #e74c3c; font-weight: 500; margin-bottom: 0.25rem;">
              ⚠️ AI ${l}
            </div>
            <div style="font-size: 0.75rem; color: #888;">
              ${c}
            </div>
          </div>
        `,setTimeout(()=>{e&&(e.textContent="")},3e3)}const n=Array.from(this.gameState.validMoves);if(n.length>0){const o=n[Math.floor(Math.random()*n.length)];this.makeMove(o)}this.aiThinking=!1}}convertToCoreGameState(e){const i=new Uint8Array(64);for(let s=0;s<64;s++)i[s]=e.board[s]===v?g.BLACK:e.board[s]===x?g.WHITE:g.EMPTY;const t=new Map;for(const s of e.validMoves){const a=this.getFlippedPieces(s,e.currentPlayer);t.set(s,a)}return{board:i,currentPlayer:e.currentPlayer===v?g.BLACK:g.WHITE,validMoves:t,scores:{black:e.blackScore,white:e.whiteScore},gameOver:e.isGameOver,consecutivePasses:e.consecutivePasses||0}}getAITimeLimit(e){const i=this.getDeviceOptimizedAIConfig(e);return i&&i.timeLimit?i.timeLimit:{[u.RANDOM]:200,[u.GREEDY]:1e3,[u.MINIMAX_EASY]:2e3,[u.MINIMAX]:3e3,[u.MINIMAX_HARD]:4e3,[u.ADVANCED]:5e3,[u.MASTER]:1e4,[u.BLITZ]:1500,[u.CUSTOM]:5e3}[e]||3e3}isEdgePosition(e){const i=Math.floor(e/8),t=e%8;return(i===0||i===7||t===0||t===7)&&!(e===0||e===7||e===56||e===63)}isChainMove(e){return!this.gameState||this.gameState.moveHistory.length===0?!1:this.gameState.moveHistory[this.gameState.moveHistory.length-1]?.flipped?.length>=3&&e.length>=3}isComebackMove(){return this.gameState?(this.gameState.currentPlayer===v?this.gameState.blackScore-this.gameState.whiteScore:this.gameState.whiteScore-this.gameState.blackScore)<=-5:!1}isDominationMove(){return this.gameState?(this.gameState.currentPlayer===v?this.gameState.blackScore-this.gameState.whiteScore:this.gameState.whiteScore-this.gameState.blackScore)>=10:!1}showSimpleConfirm(e,i){return new Promise(t=>{const s=document.getElementById("simple-modal"),a=document.getElementById("modal-title"),n=document.getElementById("modal-message"),o=document.getElementById("modal-confirm"),r=document.getElementById("modal-cancel");if(!s||!a||!n||!o||!r){t(confirm(e));return}a.textContent=i||m("modal.confirm.title"),n.textContent=e,o.textContent=m("modal.confirm"),r.textContent=m("modal.cancel"),s.style.display="flex";const l=()=>{s.style.display="none",o.removeEventListener("click",l),r.removeEventListener("click",c),t(!0)},c=()=>{s.style.display="none",o.removeEventListener("click",l),r.removeEventListener("click",c),t(!1)};o.addEventListener("click",l),r.addEventListener("click",c),s.addEventListener("click",d=>{d.target===s&&c()})})}}document.addEventListener("DOMContentLoaded",async()=>{const h=document.getElementById("game-container");if(h)try{const e=new rt;await e.initialize(h),window.superReversiGame=e}catch(e){h.innerHTML=`
        <div style="padding: 1.25rem; color: red;">
          <h2>Error Loading Game</h2>
          <p>${e}</p>
        </div>
      `}});export{u as A};
//# sourceMappingURL=index-DrAX7EBw.js.map
