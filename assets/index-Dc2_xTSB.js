(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const M={snowflake:{type:"snowflake",colors:["#ffffff","#e6f3ff","#cce7ff","#b3d9ff","#f0f8ff"],behavior:{movement:"float",gravity:30,drag:.95,turbulence:.3},physics:{velocity:{min:20,max:60},acceleration:{x:0,y:30},mass:.5,elasticity:.1},visual:{size:{min:1,max:3},opacity:{start:.6,end:.1},scale:{start:.8,end:.2},rotation:{enabled:!0,speed:.02},glow:{enabled:!1,intensity:0}},animation:{lifespan:{min:800,max:1200},fadeIn:100,fadeOut:400,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:30,max:60},delay:{min:0,max:50},spread:{angle:Math.PI*.2,radius:40},burst:!1}},fire:{type:"fire",colors:["#ff4500","#ff6347","#ffa500","#ff1493","#dc143c","#b22222"],behavior:{movement:"rise",gravity:-100,drag:.92,turbulence:.8},physics:{velocity:{min:80,max:200},acceleration:{x:0,y:-150},mass:.3,elasticity:0},visual:{size:{min:5,max:12},opacity:{start:.9,end:0},scale:{start:.5,end:1.6},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:1.2}},animation:{lifespan:{min:800,max:1500},fadeIn:50,fadeOut:600,pulsing:{enabled:!0,frequency:.1}},spawning:{count:{min:140,max:170},delay:{min:0,max:150},spread:{angle:Math.PI*.4,radius:40},burst:!0}},lightning:{type:"lightning",colors:["#ffff00","#ffffff","#00ffff","#87ceeb","#e0ffff"],behavior:{movement:"chain",gravity:0,drag:.99,turbulence:1.5},physics:{velocity:{min:300,max:600},acceleration:{x:0,y:0},mass:.1,elasticity:0},visual:{size:{min:8,max:16},opacity:{start:1,end:0},scale:{start:1,end:1},rotation:{enabled:!1,speed:0},glow:{enabled:!0,intensity:2}},animation:{lifespan:{min:100,max:300},fadeIn:0,fadeOut:150,pulsing:{enabled:!0,frequency:.5}},spawning:{count:{min:180,max:210},delay:{min:0,max:50},spread:{angle:Math.PI*2,radius:0},burst:!0}},blackhole:{type:"blackhole",colors:["#000000","#4b0082","#9400d3","#8b00ff","#1a1a1a"],behavior:{movement:"implode",gravity:800,drag:1.02,turbulence:.1},physics:{velocity:{min:100,max:300},acceleration:{x:0,y:0},mass:1,elasticity:0},visual:{size:{min:12,max:20},opacity:{start:.8,end:1},scale:{start:1.5,end:.1},rotation:{enabled:!0,speed:.15},glow:{enabled:!0,intensity:2.5}},animation:{lifespan:{min:1500,max:2500},fadeIn:100,fadeOut:500,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:220,max:300},delay:{min:0,max:300},spread:{angle:Math.PI*2,radius:120},burst:!1}},explosion:{type:"explosion",colors:["#ff4500","#ffa500","#ffff00","#ffffff","#ff6347"],behavior:{movement:"explode",gravity:50,drag:.88,turbulence:.6},physics:{velocity:{min:150,max:300},acceleration:{x:0,y:100},mass:.8,elasticity:.3},visual:{size:{min:3,max:8},opacity:{start:.9,end:0},scale:{start:.3,end:1.2},rotation:{enabled:!0,speed:.1},glow:{enabled:!0,intensity:1}},animation:{lifespan:{min:500,max:1e3},fadeIn:20,fadeOut:300,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:110,max:130},delay:{min:0,max:30},spread:{angle:Math.PI*2,radius:0},burst:!0}},magic:{type:"magic",colors:["#9932cc","#8b00ff","#ba55d3","#da70d6","#ee82ee"],behavior:{movement:"float",gravity:-20,drag:.98,turbulence:.4},physics:{velocity:{min:30,max:120},acceleration:{x:0,y:-50},mass:.2,elasticity:.8},visual:{size:{min:2,max:5},opacity:{start:.7,end:.1},scale:{start:.6,end:1},rotation:{enabled:!0,speed:.05},glow:{enabled:!0,intensity:.6}},animation:{lifespan:{min:1e3,max:1500},fadeIn:200,fadeOut:400,pulsing:{enabled:!0,frequency:.08}},spawning:{count:{min:70,max:100},delay:{min:0,max:100},spread:{angle:Math.PI*.4,radius:50},burst:!1}},storm:{type:"storm",colors:["#708090","#778899","#b0c4de","#87ceeb","#4682b4"],behavior:{movement:"spiral",gravity:20,drag:.96,turbulence:1.2},physics:{velocity:{min:150,max:350},acceleration:{x:0,y:50},mass:.6,elasticity:.2},visual:{size:{min:2,max:8},opacity:{start:.7,end:.2},scale:{start:1,end:.5},rotation:{enabled:!0,speed:.12},glow:{enabled:!1,intensity:0}},animation:{lifespan:{min:1200,max:2e3},fadeIn:150,fadeOut:500,pulsing:{enabled:!1,frequency:0}},spawning:{count:{min:60,max:120},delay:{min:0,max:100},spread:{angle:Math.PI*2,radius:100},burst:!1}},supernova:{type:"supernova",colors:["#ff8c00","#ffa500","#ff7f00","#ff6347","#ff4500"],behavior:{movement:"explode",gravity:-50,drag:.85,turbulence:1.8},physics:{velocity:{min:200,max:400},acceleration:{x:0,y:-100},mass:.4,elasticity:.1},visual:{size:{min:8,max:16},opacity:{start:1,end:0},scale:{start:.4,end:2},rotation:{enabled:!0,speed:.2},glow:{enabled:!0,intensity:2.2}},animation:{lifespan:{min:1e3,max:1800},fadeIn:50,fadeOut:800,pulsing:{enabled:!0,frequency:.15}},spawning:{count:{min:240,max:320},delay:{min:0,max:80},spread:{angle:Math.PI*2,radius:0},burst:!0}},cosmic_burst:{type:"cosmic_burst",colors:["#ffd700","#ffef94","#fff68f","#ffffe0","#fffacd"],behavior:{movement:"explode",gravity:-80,drag:.88,turbulence:2.5},physics:{velocity:{min:300,max:600},acceleration:{x:0,y:-200},mass:.2,elasticity:0},visual:{size:{min:12,max:20},opacity:{start:1,end:0},scale:{start:.2,end:3},rotation:{enabled:!0,speed:.25},glow:{enabled:!0,intensity:3}},animation:{lifespan:{min:1500,max:2800},fadeIn:100,fadeOut:1e3,pulsing:{enabled:!0,frequency:.2}},spawning:{count:{min:350,max:500},delay:{min:0,max:200},spread:{angle:Math.PI*2,radius:150},burst:!0}}};function E(f){switch(f){case"SSS":return"cosmic_burst";case"SS":return"supernova";case"S":return"fire";case"A":return"explosion";case"B":return"magic";case"C":default:return"snowflake"}}function b(f,e,a=.5){const t=M[f],i=M[e];return{type:f,colors:[...t.colors,...i.colors],behavior:{movement:a>.5?t.behavior.movement:i.behavior.movement,gravity:t.behavior.gravity*a+i.behavior.gravity*(1-a),drag:t.behavior.drag*a+i.behavior.drag*(1-a),turbulence:t.behavior.turbulence*a+i.behavior.turbulence*(1-a)},physics:{velocity:{min:Math.min(t.physics.velocity.min,i.physics.velocity.min),max:Math.max(t.physics.velocity.max,i.physics.velocity.max)},acceleration:{x:t.physics.acceleration.x*a+i.physics.acceleration.x*(1-a),y:t.physics.acceleration.y*a+i.physics.acceleration.y*(1-a)},mass:t.physics.mass*a+i.physics.mass*(1-a),elasticity:t.physics.elasticity*a+i.physics.elasticity*(1-a)},visual:{size:{min:Math.min(t.visual.size.min,i.visual.size.min),max:Math.max(t.visual.size.max,i.visual.size.max)},opacity:{start:Math.max(t.visual.opacity.start,i.visual.opacity.start),end:Math.min(t.visual.opacity.end,i.visual.opacity.end)},scale:{start:t.visual.scale.start*a+i.visual.scale.start*(1-a),end:t.visual.scale.end*a+i.visual.scale.end*(1-a)},rotation:{enabled:t.visual.rotation.enabled||i.visual.rotation.enabled,speed:t.visual.rotation.speed*a+i.visual.rotation.speed*(1-a)},glow:{enabled:t.visual.glow.enabled||i.visual.glow.enabled,intensity:Math.max(t.visual.glow.intensity,i.visual.glow.intensity)}},animation:{lifespan:{min:Math.min(t.animation.lifespan.min,i.animation.lifespan.min),max:Math.max(t.animation.lifespan.max,i.animation.lifespan.max)},fadeIn:Math.max(t.animation.fadeIn,i.animation.fadeIn),fadeOut:Math.max(t.animation.fadeOut,i.animation.fadeOut),pulsing:{enabled:t.animation.pulsing.enabled||i.animation.pulsing.enabled,frequency:t.animation.pulsing.frequency*a+i.animation.pulsing.frequency*(1-a)}},spawning:{count:{min:Math.max(t.spawning.count.min,i.spawning.count.min),max:Math.max(t.spawning.count.max,i.spawning.count.max)},delay:{min:Math.min(t.spawning.delay.min,i.spawning.delay.min),max:Math.max(t.spawning.delay.max,i.spawning.delay.max)},spread:{angle:Math.max(t.spawning.spread.angle,i.spawning.spread.angle),radius:Math.max(t.spawning.spread.radius,i.spawning.spread.radius)},burst:t.spawning.burst||i.spawning.burst}}}class P{canvas;ctx;particles=[];animationId=null;lastTime=0;constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="particle-canvas",this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.left="0",this.canvas.style.pointerEvents="none",this.canvas.style.zIndex="100";const e=this.canvas.getContext("2d");if(!e)throw new Error("Could not get canvas context");this.ctx=e}initialize(e){const a=e.getBoundingClientRect();this.canvas.width=a.width,this.canvas.height=a.height,e.style.position="relative",e.appendChild(this.canvas),this.startAnimation()}startAnimation(){const e=a=>{const t=a-this.lastTime;this.lastTime=a,this.update(t/1e3),this.render(),this.animationId=requestAnimationFrame(e)};this.animationId=requestAnimationFrame(e)}update(e){for(let a=this.particles.length-1;a>=0;a--){const t=this.particles[a];t&&(t.x+=t.vx*e,t.y+=t.vy*e,t.life-=e,t.alpha=Math.max(0,t.life/t.maxLife),t.type==="spark"&&(t.vy+=200*e),t.life<=0&&this.particles.splice(a,1))}}render(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const e of this.particles)this.ctx.save(),this.ctx.globalAlpha=e.alpha,e.type==="circle"?this.drawCircle(e):e.type==="star"?this.drawStar(e):e.type==="spark"&&this.drawSpark(e),this.ctx.restore()}drawCircle(e){this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.shadowBlur=10,this.ctx.shadowColor=e.color,this.ctx.fill()}drawStar(e){const t=e.size,i=e.size*.5;this.ctx.beginPath(),this.ctx.translate(e.x,e.y);for(let n=0;n<5*2;n++){const s=n%2===0?t:i,o=n*Math.PI/5,r=Math.cos(o)*s,c=Math.sin(o)*s;n===0?this.ctx.moveTo(r,c):this.ctx.lineTo(r,c)}this.ctx.closePath(),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.translate(-e.x,-e.y)}drawSpark(e){this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(e.x-e.vx*.1,e.y-e.vy*.1),this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.size,this.ctx.lineCap="round",this.ctx.stroke()}calculateGrade(e,a,t){const i=a===0||a===7||a===56||a===63,n=Math.floor(a/8),s=a%8,o=n===0||n===7||s===0||s===7;let r=e*10;return i?r+=60:o&&(r+=20),t?.massive&&(r+=40),t?.chain&&(r+=30),t?.comeback&&(r+=25),t?.domination&&(r+=20),t?.firstMove&&(r-=10),r>=100||e>=15?"SSS":r>=70||e>=10?"SS":r>=50||e>=7?"S":r>=30||e>=5?"A":r>=15||e>=3?"B":"C"}triggerMoveEffect(e,a,t,i,n){this.createPresetEffect(e,a,t,i,n),t==="SSS"&&i>=15?setTimeout(()=>this.createSSSEffect(e,a,i,n),200):t==="SS"&&i>=10&&setTimeout(()=>this.createSSEffect(e,a,i,n),150)}createPresetEffect(e,a,t,i,n){const s=E(t),o=M[s];if(!o)return;const r=Math.min(1+(i-1)*.1,2),c=Math.floor((o.spawning.count.min+Math.random()*(o.spawning.count.max-o.spawning.count.min))*r);for(let m=0;m<c;m++)setTimeout(()=>{this.createPresetParticle(e,a,o,m,c)},Math.random()*(o.spawning.delay.max-o.spawning.delay.min)+o.spawning.delay.min);n?.corner&&t!=="C"&&this.addCornerEnhancement(e,a,o),n?.massive&&i>=8&&this.addMassiveEnhancement(e,a,o)}createPresetParticle(e,a,t,i,n){const s=t.colors,o=s[Math.floor(Math.random()*s.length)]||s[0]||"#ffffff";let r,c;switch(t.behavior.movement){case"explode":r=i/n*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"float":r=Math.random()*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"rise":r=Math.PI*1.5+(Math.random()-.5)*t.spawning.spread.angle,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;case"chain":r=Math.random()*Math.PI*2,c=t.physics.velocity.max;break;case"implode":r=Math.random()*Math.PI*2,c=t.physics.velocity.min+Math.random()*(t.physics.velocity.max-t.physics.velocity.min);break;default:r=Math.random()*Math.PI*2,c=100}const m=t.spawning.spread.radius,u=Math.random()*t.spawning.spread.angle-t.spawning.spread.angle/2,h=e+Math.cos(u)*Math.random()*m,g=a+Math.sin(u)*Math.random()*m,p=t.visual.size.min+Math.random()*(t.visual.size.max-t.visual.size.min),v=(t.animation.lifespan.min+Math.random()*(t.animation.lifespan.max-t.animation.lifespan.min))/1e3;this.particles.push({x:h,y:g,vx:Math.cos(r)*c,vy:Math.sin(r)*c,life:v,maxLife:v,size:p,color:o,alpha:t.visual.opacity.start,type:t.type==="snowflake"?"circle":t.type==="lightning"?"spark":"star"})}addCornerEnhancement(e,a,t){for(let i=0;i<12;i++){const n=i/12*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(n)*80,vy:Math.sin(n)*80,life:1,maxLife:1,size:3,color:"#ffd700",alpha:.8,type:"star"})}}addMassiveEnhancement(e,a,t){for(let i=0;i<3;i++)setTimeout(()=>{for(let n=0;n<20;n++){const s=n/20*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(s)*(150+i*50),vy:Math.sin(s)*(150+i*50),life:.8,maxLife:.8,size:2,color:"#ffffff",alpha:.6-i*.2,type:"circle"})}},i*100)}createSSSEffect(e,a,t,i){const n=["#ffd700","#ffdf00","#ffed4e","#fff700","#ffa500","#daa520","#b8860b","#ffeaa7","#fdcb6e","#f39c12","#e67e22","#d4af37"];for(let s=0;s<8;s++)setTimeout(()=>{for(let o=0;o<60;o++){const r=o/60*Math.PI*2,c=400+s*100,m=Math.sin(o*.3)*50;this.particles.push({x:e,y:a,vx:Math.cos(r)*c+m,vy:Math.sin(r)*c+m,life:2,maxLife:2,size:Math.random()*8+4,color:n[Math.floor(Math.random()*n.length)]??"#ffd700",alpha:1,type:Math.random()>.3?"star":"circle"})}},s*60);for(let s=0;s<3;s++){const o=e+(s-1)*100;for(let r=0;r<120;r++){const c=r/10*Math.PI+s*2,m=r*3;setTimeout(()=>{this.particles.push({x:o+Math.cos(c)*m*.2,y:a+Math.sin(c)*m*.2,vx:Math.cos(c+Math.PI/2)*200,vy:Math.sin(c+Math.PI/2)*200,life:2.5,maxLife:2.5,size:Math.random()*6+3,color:n[r%n.length]??"#ffd700",alpha:1,type:"star"})},r*10+s*200)}}for(let s=0;s<5;s++)setTimeout(()=>{for(let o=0;o<Math.PI*2;o+=.05)this.particles.push({x:e,y:a,vx:Math.cos(o)*(600+s*150),vy:Math.sin(o)*(600+s*150),life:1,maxLife:1,size:2,color:s%2===0?"#000000":"#ffffff",alpha:.9,type:"circle"})},s*300);for(let s=0;s<200+t*20;s++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*100,y:a+Math.random()*50,vx:(Math.random()-.5)*800,vy:-Math.random()*600-300,life:3,maxLife:3,size:Math.random()*6+3,color:n[Math.floor(Math.random()*n.length)]??"#ffd700",alpha:1,type:Math.random()>.5?"star":"spark"})},Math.random()*500);i?.corner&&this.createCornerExplosion(e,a),i?.comeback&&this.createComebackEffect(e,a)}createSSEffect(e,a,t,i){const n=["#ff0000","#dc143c","#b22222","#cd5c5c","#ff6347","#ff4500","#ff1493","#8b0000","#a52a2a","#c41e3a"];for(let s=0;s<6;s++)setTimeout(()=>{for(let o=0;o<50;o++){const r=o/50*Math.PI*2,c=350+s*80,m=Math.sin(o*.4)*30;this.particles.push({x:e,y:a,vx:Math.cos(r)*c+m,vy:Math.sin(r)*c+m,life:1.8,maxLife:1.8,size:Math.random()*6+3,color:n[s%n.length]??"#ff0000",alpha:1,type:Math.random()>.4?"star":"circle"})}},s*100);for(let s=0;s<100;s++){const o=s/12*Math.PI,r=s*2.5;setTimeout(()=>{this.particles.push({x:e+Math.cos(o)*r*.4,y:a+Math.sin(o)*r*.4,vx:Math.cos(o+Math.PI/2)*180,vy:Math.sin(o+Math.PI/2)*180,life:2.2,maxLife:2.2,size:Math.random()*5+2,color:n[s%n.length]??"#ff0000",alpha:1,type:"star"})},s*20)}for(let s=0;s<150+t*12;s++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*80,y:a+Math.random()*30,vx:(Math.random()-.5)*600,vy:-Math.random()*500-250,life:2.8,maxLife:2.8,size:Math.random()*5+2,color:n[Math.floor(Math.random()*n.length)]??"#ff6347",alpha:1,type:Math.random()>.3?"star":"spark"})},Math.random()*400);i?.massive&&this.createMassiveEffect(e,a),i?.domination&&this.createDominationEffect(e,a)}createSEffect(e,a,t,i){const n=["#9932cc","#8b00ff","#9400d3","#4b0082","#6a5acd","#7b68ee","#9370db","#8a2be2","#9966cc","#ba55d3"];for(let s=0;s<5;s++)setTimeout(()=>{for(let o=0;o<40;o++){const r=o/40*Math.PI*2,c=300+s*80,m=Math.sin(o*.5)*20;this.particles.push({x:e,y:a,vx:Math.cos(r)*c+m,vy:Math.sin(r)*c+m,life:1.5,maxLife:1.5,size:Math.random()*5+3,color:n[s%n.length]??"#9932cc",alpha:1,type:Math.random()>.5?"star":"circle"})}},s*80);for(let s=0;s<80;s++){const o=s/8*Math.PI,r=s*4;setTimeout(()=>{this.particles.push({x:e+Math.cos(o)*r*.3,y:a+Math.sin(o)*r*.3,vx:Math.cos(o+Math.PI/2)*150,vy:Math.sin(o+Math.PI/2)*150,life:2,maxLife:2,size:Math.random()*4+2,color:n[s%n.length]??"#9932cc",alpha:1,type:"star"})},s*15)}for(let s=0;s<100+t*15;s++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*40,y:a+Math.random()*20,vx:(Math.random()-.5)*400,vy:-Math.random()*500-200,life:2.5,maxLife:2.5,size:Math.random()*4+2,color:n[Math.floor(Math.random()*n.length)]??"#8a2be2",alpha:1,type:Math.random()>.3?"spark":"star"})},Math.random()*300);for(let s=0;s<3;s++)setTimeout(()=>{for(let o=0;o<Math.PI*2;o+=.1)this.particles.push({x:e,y:a,vx:Math.cos(o)*(400+s*100),vy:Math.sin(o)*(400+s*100),life:.8,maxLife:.8,size:1,color:"#ffffff",alpha:.8,type:"circle"})},s*200);for(let s=0;s<50;s++){const o=s/50*Math.PI*2;setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(o)*500,vy:Math.sin(o)*500,life:1.2,maxLife:1.2,size:Math.random()*6+2,color:"#9932cc",alpha:1,type:"star"})},s*20)}}createAEffect(e,a,t){const i=["#87ceeb","#87cefa","#00bfff","#4169e1","#1e90ff","#6495ed","#7b68ee","#4682b4","#5f9ea0","#add8e6"],n=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];for(const[s,o]of n)for(let r=0;r<3;r++)for(let c=0;c<15;c++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:s*(250+r*50),vy:o*(250+r*50),life:1+r*.2,maxLife:1+r*.2,size:Math.random()*4+2,color:i[r%i.length]??"#87ceeb",alpha:1,type:"star"})},c*25+r*200);for(let s=0;s<4;s++)setTimeout(()=>{for(let o=0;o<30;o++){const r=o/30*Math.PI*2,c=180+s*60;this.particles.push({x:e,y:a,vx:Math.cos(r)*c,vy:Math.sin(r)*c,life:1.2,maxLife:1.2,size:Math.random()*3+2,color:i[s%i.length]??"#87ceeb",alpha:1,type:s%2===0?"star":"circle"})}},s*150);for(let s=0;s<60+t*8;s++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*30,y:a+Math.random()*15,vx:(Math.random()-.5)*300,vy:-Math.random()*350-150,life:1.8,maxLife:1.8,size:Math.random()*3+1,color:i[Math.floor(Math.random()*i.length)]??"#4169e1",alpha:1,type:"spark"})},Math.random()*400);for(let s=0;s<25;s++){const o=Math.random()*Math.PI*2,r=Math.random()*100+50;this.particles.push({x:e+Math.cos(o)*r,y:a+Math.sin(o)*r,vx:Math.cos(o)*100,vy:Math.sin(o)*100,life:.8,maxLife:.8,size:Math.random()*3+1,color:"#87ceeb",alpha:1,type:"star"})}}createBEffect(e,a,t){const i=["#90ee90","#98fb98","#00ff7f","#00fa9a","#7cfc00","#7fff00","#adff2f","#9aff9a","#8fbc8f","#20b2aa"];for(let n=0;n<2;n++)setTimeout(()=>{for(let s=0;s<25;s++){const o=s/25*Math.PI*2,r=120+n*40;this.particles.push({x:e,y:a,vx:Math.cos(o)*r,vy:Math.sin(o)*r,life:1,maxLife:1,size:Math.random()*2+2,color:i[n%i.length]??"#90ee90",alpha:1,type:n===0?"circle":"star"})}},n*100);for(let n=0;n<20+t*5;n++){const s=Math.random()*Math.PI*2,o=Math.random()*150+80;setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(s)*o,vy:Math.sin(s)*o,life:1.2,maxLife:1.2,size:Math.random()*2+1,color:i[Math.floor(Math.random()*i.length)]??"#00ff7f",alpha:1,type:"spark"})},Math.random()*200)}for(let n=0;n<8;n++){const s=n/8*Math.PI*2;for(let o=0;o<5;o++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(s)*(150+o*30),vy:Math.sin(s)*(150+o*30),life:.8,maxLife:.8,size:2,color:"#90ee90",alpha:1,type:"circle"})},o*50)}}createCEffect(e,a){const t=["#d3d3d3","#c0c0c0","#dcdcdc","#f5f5f5","#e0e0e0","#f8f8f8","#b8b8b8","#a9a9a9","#d8d8d8","#e6e6e6"];for(let i=0;i<12;i++){const n=i/12*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(n)*80,vy:Math.sin(n)*80,life:.8,maxLife:.8,size:Math.random()*1.5+1,color:t[i%t.length]??"#d3d3d3",alpha:.8,type:"circle"})}for(let i=0;i<6;i++){const n=Math.random()*Math.PI*2,s=Math.random()*60+40;this.particles.push({x:e,y:a,vx:Math.cos(n)*s,vy:Math.sin(n)*s,life:.6,maxLife:.6,size:1,color:"#d3d3d3",alpha:.7,type:"spark"})}}createFlipEffect(e,a,t,i){const n=t==="#000000";let s,o;if(i)switch(i){case"SSS":s=["#ffd700","#ffdf00","#ffed4e","#fff700","#ffa500"],o=3;break;case"SS":s=["#ff0000","#dc143c","#b22222","#cd5c5c","#ff6347"],o=2.5;break;case"S":s=["#9932cc","#8b00ff","#9400d3","#4b0082","#6a5acd"],o=2;break;case"A":s=["#87ceeb","#87cefa","#00bfff","#4169e1","#1e90ff"],o=1.5;break;case"B":s=["#90ee90","#98fb98","#00ff7f","#00fa9a","#7cfc00"],o=1.2;break;case"C":s=["#d3d3d3","#c0c0c0","#dcdcdc","#f5f5f5","#e0e0e0"],o=1;break;default:s=n?["#666666","#888888","#555555"]:["#f0f0f0","#e8e8e8","#f5f5f5"],o=.8}else s=n?["#666666","#888888","#555555"]:["#f0f0f0","#e8e8e8","#f5f5f5"],o=.8;const r=s[0]??"#ffffff",c=s,m=Math.floor(15*o);for(let h=0;h<m;h++){const g=h/m*Math.PI*2,p=(Math.random()*60+60)*o;this.particles.push({x:e,y:a,vx:Math.cos(g)*p,vy:Math.sin(g)*p,life:.6*o,maxLife:.6*o,size:(Math.random()*1.5+1)*o,color:h%3===0?r:c[h%c.length]??r,alpha:.9,type:h%2===0?"spark":"star"})}const u=Math.floor(2+o);for(let h=0;h<u;h++)setTimeout(()=>{const g=Math.floor(12+o*4);for(let p=0;p<g;p++){const v=p/g*Math.PI*2,S=(80+h*30)*o;this.particles.push({x:e,y:a,vx:Math.cos(v)*S,vy:Math.sin(v)*S,life:.6+h*.2,maxLife:.6+h*.2,size:h===0?2:1,color:r,alpha:.7-h*.2,type:"circle"})}},h*80);for(let h=0;h<15;h++){const g=Math.random()*Math.PI*2,p=Math.random()*60+40;setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*20,y:a+(Math.random()-.5)*20,vx:Math.cos(g)*p,vy:Math.sin(g)*p,life:.7,maxLife:.7,size:Math.random()*1.5+1,color:c[Math.floor(Math.random()*c.length)]??"#d3d3d3",alpha:.8,type:"spark"})},Math.random()*200)}for(let h=0;h<8;h++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*30,y:a+(Math.random()-.5)*30,vx:(Math.random()-.5)*30,vy:-Math.random()*40-20,life:1.2,maxLife:1.2,size:Math.random()*1+.5,color:r,alpha:.6,type:"circle"})},Math.random()*300);setTimeout(()=>{for(let h=0;h<Math.PI*2;h+=.2)this.particles.push({x:e,y:a,vx:Math.cos(h)*150,vy:Math.sin(h)*150,life:.4,maxLife:.4,size:1.5,color:n?"#333333":"#f9f9f9",alpha:.5,type:"circle"})},100)}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles=[],this.canvas.remove()}getParticleCount(){return this.particles.length}createCornerExplosion(e,a){const t=["#ffd700","#ffdf00","#ffa500"];for(let i=0;i<4;i++){const n=i/4*Math.PI*2;for(let s=0;s<20;s++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(n)*300+(Math.random()-.5)*100,vy:Math.sin(n)*300+(Math.random()-.5)*100,life:1.5,maxLife:1.5,size:Math.random()*3+2,color:t[s%t.length]??"#ffd700",alpha:1,type:"circle"})},s*30+i*200)}}createComebackEffect(e,a){const t=["#ff4500","#ff6347","#ffa500","#ff1493"];for(let i=0;i<80;i++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*60,y:a+Math.random()*30,vx:(Math.random()-.5)*200,vy:-Math.random()*400-200,life:2,maxLife:2,size:Math.random()*4+2,color:t[Math.floor(Math.random()*t.length)]??"#ff6347",alpha:.9,type:"spark"})},Math.random()*600)}createMassiveEffect(e,a){const t=["#0080ff","#00bfff","#87ceeb","#b0e0e6"];for(let i=0;i<6;i++)setTimeout(()=>{for(let n=0;n<40;n++){const s=n/40*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(s)*(200+i*50),vy:Math.sin(s)*(200+i*50),life:1+i*.2,maxLife:1+i*.2,size:Math.random()*3+1,color:t[i%t.length]??"#0080ff",alpha:.8,type:"circle"})}},i*150)}createDominationEffect(e,a){const t=["#9932cc","#8b00ff","#ffd700","#daa520"];for(let i=0;i<12;i++){const n=i/12*Math.PI*2;setTimeout(()=>{this.particles.push({x:e+Math.cos(n)*50,y:a+Math.sin(n)*50,vx:Math.cos(n)*150,vy:Math.sin(n)*150,life:1.8,maxLife:1.8,size:Math.random()*4+3,color:t[i%t.length]??"#9932cc",alpha:1,type:"star"})},i*80)}}createChainEffect(e,a){const t=["#ffff00","#ffffff","#00ffff"];for(let i=0;i<8;i++){const n=i/8*Math.PI*2;for(let s=0;s<10;s++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(n)*(100+s*20)+(Math.random()-.5)*60,vy:Math.sin(n)*(100+s*20)+(Math.random()-.5)*60,life:.4,maxLife:.4,size:2,color:t[s%t.length]??"#ffff00",alpha:1,type:"spark"})},s*20+i*50)}}}let _="en";const I={en:{"loading.title":"Loading Super Reversi...","loading.details":"Initializing game engine and AI systems","app.title":"🎮 Super Reversi","game.black":"Black","game.white":"White","game.current":"Current","game.currentTurn":"Current Turn:","game.mode":"Mode","game.pvp":"Player vs Player","game.pvai":"Player vs AI","game.back":"← Back to Menu","game.blackWins":"Black Wins!","game.whiteWins":"White Wins!","game.tie":"It's a Tie!","game.gameOverTitle":"Game Over!","game.totalMoves":"Total moves","game.playAgain":"Play Again","game.mainMenu":"Main Menu","menu.chooseMode":"🎯 Choose Game Mode","menu.pvp":"Player vs Player","menu.pvc":"Player vs Computer","menu.settings":"Settings","menu.help":"How to Play","menu.back":"← Back to Menu","menu.selectDifficulty":"🤖 Select AI Difficulty","menu.easy":"Easy","menu.medium":"Medium","menu.hard":"Hard","menu.easyDesc":"Easy: AI makes random valid moves","menu.mediumDesc":"Medium: AI tries to maximize flips","menu.hardDesc":"Hard: AI uses advanced strategy","menu.startGame":"Start Game","settings.title":"⚙️ Settings","settings.language":"Language","settings.visual":"Visual Settings","settings.showValid":"Show valid moves","settings.showLast":"Highlight last move","settings.animations":"Enable animations","settings.game":"Game Settings","settings.autoPass":"Auto-pass when no moves","settings.confirm":"Confirm moves (vs Computer)","settings.save":"Save Settings","settings.saved":"Settings saved!","help.title":"❓ How to Play Reversi","help.objectiveTitle":"🎯 Objective","help.objectiveText":"Have the most pieces when the game ends.","help.rulesTitle":"📋 Rules","help.rules1":"Black moves first","help.rules2":"Capture pieces between yours","help.rules3":"Can capture in 8 directions","help.rules4":"Must capture at least 1 piece","help.rules5":"Pass if no valid moves","help.rules6":"Game ends when no moves left","help.strategyTitle":"💡 Strategy","help.strategy1":"<strong>Corners:</strong> Can't be flipped!","help.strategy2":"<strong>Edges:</strong> Harder to flip","help.strategy3":"<strong>Mobility:</strong> Limit opponent moves","help.strategy4":"<strong>Patience:</strong> Less can be more","help.controlsTitle":"🎮 Controls","help.controls1":"Click highlighted cells to move","help.controls2":"Green = valid moves","help.controls3":"Gold = last move","messages.quitConfirm":"Are you sure you want to quit the current game?","messages.moveConfirm":"Confirm this move?","messages.invalidMove":"Invalid move","difficulty.easy":"Easy","difficulty.medium":"Medium","difficulty.hard":"Hard","combo.counter":"${count} Combo!","combo.double":"Twin Strike!","combo.triple":"Triple Tempest!","combo.quadruple":"Quadra Blaze!","combo.quintuple":"Penta Storm!","combo.sextuple":"Hexa Fury!","combo.septuple":"Hepta Cataclysm!","special.corner_joseki":"Corner Joseki!","special.great_reversal":"Great Reversal!","special.total_domination":"Total Domination!","special.desperate_kill":"Desperate Kill!","special.perfect_endgame":"Perfect Endgame!","special.edge_control":"Edge Control!","special.chain_reaction":"Chain Reaction!","special.time_control":"Time Control!","special.corner_joseki.subtitle":"Corner Joseki","special.great_reversal.subtitle":"Great Reversal","special.total_domination.subtitle":"Total Domination","special.desperate_kill.subtitle":"Desperate Kill","special.perfect_endgame.subtitle":"Perfect Endgame","special.edge_control.subtitle":"Edge Control","special.chain_reaction.subtitle":"Chain Reaction","special.time_control.subtitle":"Time Control"},"zh-Hant":{"loading.title":"正在載入超級黑白棋...","loading.details":"正在初始化遊戲引擎與人工智慧系統","app.title":"🎮 超級黑白棋","game.black":"黑棋","game.white":"白棋","game.current":"現在","game.currentTurn":"目前回合：","game.mode":"模式","game.pvp":"玩家對戰","game.pvai":"玩家對電腦","game.back":"← 返回選單","game.blackWins":"黑棋勝利！","game.whiteWins":"白棋勝利！","game.tie":"平手！","game.gameOverTitle":"遊戲結束！","game.totalMoves":"總步數","game.playAgain":"再玩一次","game.mainMenu":"回主選單","menu.chooseMode":"🎯 選擇遊戲模式","menu.pvp":"玩家對玩家","menu.pvc":"玩家對電腦","menu.settings":"設定","menu.help":"玩法說明","menu.back":"← 返回選單","menu.selectDifficulty":"🤖 選擇AI難度","menu.easy":"簡單","menu.medium":"中等","menu.hard":"困難","menu.easyDesc":"簡單：AI隨機下合法棋","menu.mediumDesc":"中等：AI試著最大化翻子","menu.hardDesc":"困難：AI使用進階策略","menu.startGame":"開始遊戲","settings.title":"⚙️ 設定","settings.language":"語言","settings.visual":"視覺設定","settings.showValid":"顯示可下位置","settings.showLast":"標示上一手","settings.animations":"啟用動畫","settings.game":"遊戲設定","settings.autoPass":"無棋可下自動跳過","settings.confirm":"與電腦對戰時確認落子","settings.save":"保存設定","settings.saved":"設定已保存！","help.title":"❓ 如何遊玩黑白棋","help.objectiveTitle":"🎯 目標","help.objectiveText":"遊戲結束時棋子數最多者獲勝。","help.rulesTitle":"📋 規則","help.rules1":"黑棋先行","help.rules2":"夾住對方棋子以翻轉","help.rules3":"可向八個方向翻棋","help.rules4":"至少翻一子才能落子","help.rules5":"無棋可下時須跳過","help.rules6":"雙方皆無棋可下時遊戲結束","help.strategyTitle":"💡 策略","help.strategy1":"<strong>角落：</strong> 不會被翻轉！","help.strategy2":"<strong>邊緣：</strong> 較不易被翻","help.strategy3":"<strong>行動力：</strong> 限制對手落子","help.strategy4":"<strong>耐心：</strong> 有時少卻是多","help.controlsTitle":"🎮 操作","help.controls1":"點擊高亮格子落子","help.controls2":"綠色 = 可下位置","help.controls3":"金色 = 上一步","messages.quitConfirm":"確定要結束目前的遊戲嗎？","messages.moveConfirm":"確定這一步嗎？","messages.invalidMove":"無效的落子","difficulty.easy":"簡單","difficulty.medium":"中等","difficulty.hard":"困難","combo.counter":"${count} 連擊！","combo.double":"雙星爆擊！","combo.triple":"三連風暴！","combo.quadruple":"四極炎舞！","combo.quintuple":"五芒雷鳴！","combo.sextuple":"六道狂怒！","combo.septuple":"七星毀滅！","special.corner_joseki":"角部定式！","special.great_reversal":"大翻盘！","special.total_domination":"完全压制！","special.desperate_kill":"絕地反杀！","special.perfect_endgame":"完美收官！","special.edge_control":"邊線掌控！","special.chain_reaction":"連鎖反應！","special.time_control":"時間掌控！","special.corner_joseki.subtitle":"角部定式","special.great_reversal.subtitle":"大翻盘","special.total_domination.subtitle":"完全压制","special.desperate_kill.subtitle":"絕地反杀","special.perfect_endgame.subtitle":"完美收官","special.edge_control.subtitle":"邊線掌控","special.chain_reaction.subtitle":"連鎖反應","special.time_control.subtitle":"時間掌控"},"zh-Hans":{"loading.title":"正在加载超级黑白棋...","loading.details":"正在初始化游戏引擎和人工智能系统","app.title":"🎮 超级黑白棋","game.black":"黑棋","game.white":"白棋","game.current":"当前","game.currentTurn":"当前回合：","game.mode":"模式","game.pvp":"玩家对战","game.pvai":"玩家对电脑","game.back":"← 返回菜单","game.blackWins":"黑棋胜利！","game.whiteWins":"白棋胜利！","game.tie":"平局！","game.gameOverTitle":"游戏结束！","game.totalMoves":"总步数","game.playAgain":"再玩一次","game.mainMenu":"回主菜单","menu.chooseMode":"🎯 选择游戏模式","menu.pvp":"玩家对玩家","menu.pvc":"玩家对电脑","menu.settings":"设置","menu.help":"玩法说明","menu.back":"← 返回菜单","menu.selectDifficulty":"🤖 选择AI难度","menu.easy":"简单","menu.medium":"中等","menu.hard":"困难","menu.easyDesc":"简单：AI随机下合法棋","menu.mediumDesc":"中等：AI尝试最大化翻子","menu.hardDesc":"困难：AI使用高级策略","menu.startGame":"开始游戏","settings.title":"⚙️ 设置","settings.language":"语言","settings.visual":"视觉设置","settings.showValid":"显示可下位置","settings.showLast":"标记上一步","settings.animations":"启用动画","settings.game":"游戏设置","settings.autoPass":"无棋可下自动跳过","settings.confirm":"与电脑对战时确认落子","settings.save":"保存设置","settings.saved":"设置已保存！","help.title":"❓ 如何玩黑白棋","help.objectiveTitle":"🎯 目标","help.objectiveText":"游戏结束时棋子数最多者获胜。","help.rulesTitle":"📋 规则","help.rules1":"黑棋先行","help.rules2":"夹住对方棋子以翻转","help.rules3":"可向八个方向翻棋","help.rules4":"至少翻一子才能落子","help.rules5":"无棋可下时须跳过","help.rules6":"双方均无棋可下时游戏结束","help.strategyTitle":"💡 策略","help.strategy1":"<strong>角落：</strong> 不会被翻转！","help.strategy2":"<strong>边缘：</strong> 较不易被翻","help.strategy3":"<strong>行动力：</strong> 限制对手落子","help.strategy4":"<strong>耐心：</strong> 有时少却是多","help.controlsTitle":"🎮 操作","help.controls1":"点击高亮格子落子","help.controls2":"绿色 = 可下位置","help.controls3":"金色 = 上一步","messages.quitConfirm":"确定要结束当前的游戏吗？","messages.moveConfirm":"确认这一步吗？","messages.invalidMove":"无效的落子","difficulty.easy":"简单","difficulty.medium":"中等","difficulty.hard":"困难","combo.counter":"${count} 连击！","combo.double":"双星爆击！","combo.triple":"三连风暴！","combo.quadruple":"四极炎舞！","combo.quintuple":"五芒雷鸣！","combo.sextuple":"六道狂怒！","combo.septuple":"七星毁灭！","special.corner_joseki":"角部定式！","special.great_reversal":"大翻盘！","special.total_domination":"完全压制！","special.desperate_kill":"絕地反杀！","special.perfect_endgame":"完美收官！","special.edge_control":"邊線掌控！","special.chain_reaction":"连鎖反應！","special.time_control":"時間掌控！","special.corner_joseki.subtitle":"角部定式","special.great_reversal.subtitle":"大翻盘","special.total_domination.subtitle":"完全压制","special.desperate_kill.subtitle":"絕地反杀","special.perfect_endgame.subtitle":"完美收官","special.edge_control.subtitle":"邊線掌控","special.chain_reaction.subtitle":"连鎖反應","special.time_control.subtitle":"時間掌控"}};function l(f,e){let a=I[_][f]??f;return e&&(a=a.replace(/\$\{(\w+)\}/g,(t,i)=>Object.prototype.hasOwnProperty.call(e,i)?String(e[i]):"")),a}function w(f){I[f]&&(_=f,typeof document<"u"&&(document.documentElement.lang=f))}function k(f=document){f.querySelectorAll("[data-i18n]").forEach(a=>{const t=a.dataset.i18n;a.textContent=l(t)})}const T={none:{effectType:"snowflake",intensity:1,duration:500},double:{effectType:"magic",intensity:1.5,duration:800,soundEffect:"combo_double"},triple:{effectType:"fire",intensity:2,duration:1200,soundEffect:"combo_triple",screenShake:!0},quadruple:{effectType:"explosion",intensity:2.5,duration:1500,soundEffect:"combo_quadruple",screenShake:!0},quintuple:{effectType:"lightning",intensity:3,duration:1800,soundEffect:"combo_quintuple",screenShake:!0,slowMotion:!1},sextuple:{effectType:"storm",intensity:4,duration:2200,soundEffect:"combo_sextuple",screenShake:!0,slowMotion:!0},septuple:{effectType:"blackhole",intensity:5,duration:2500,soundEffect:"combo_septuple",screenShake:!0,slowMotion:!0}};class ${_state;_eventHandlers=[];_history=[];constructor(){this._state=this.createInitialState()}createInitialState(){return{count:0,player:null,multiplier:1,startTime:0,isActive:!1,maxCombo:0,type:"none"}}get state(){return Object.freeze({...this._state})}get history(){return Object.freeze([...this._history])}processMove(e,a,t){return a?this.endCombo():this._state.player===e?this.continueCombo(t):this.startCombo(e,t)}startCombo(e,a){this._state.isActive&&this.endCombo(),this._state={count:2,player:e,multiplier:1.2,startTime:Date.now(),isActive:!0,maxCombo:Math.max(this._state.maxCombo,2),type:"double"};const t={type:"combo_started",player:e,comboCount:this._state.count,comboType:this._state.type,effect:this.getComboEffect(),timestamp:Date.now()};return this._emitEvent(t),this._history.push(t),t}continueCombo(e){if(!this._state.isActive||!this._state.player)throw new Error("Cannot continue combo: no active combo");this._state.count++,this._state.multiplier=Math.min(1+this._state.count*.2,3),this._state.maxCombo=Math.max(this._state.maxCombo,this._state.count),this._state.type=this.determineComboType(this._state.count);const a={type:"combo_continued",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,effect:this.getComboEffect(),timestamp:Date.now()};return this._emitEvent(a),this._history.push(a),a}endCombo(){if(!this._state.isActive||!this._state.player)return null;const e={type:"combo_ended",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,timestamp:Date.now()};return this._state=this.createInitialState(),this._state.maxCombo=this.state.maxCombo,this._emitEvent(e),this._history.push(e),e}breakCombo(e="manual"){if(!this._state.isActive||!this._state.player)return null;const a={type:"combo_broken",player:this._state.player,comboCount:this._state.count,comboType:this._state.type,timestamp:Date.now()};return this._state=this.createInitialState(),this._state.maxCombo=this.state.maxCombo,this._emitEvent(a),this._history.push(a),a}determineComboType(e){return e>=7?"septuple":e>=6?"sextuple":e>=5?"quintuple":e>=4?"quadruple":e>=3?"triple":e>=2?"double":"none"}getComboEffect(){const e=T[this._state.type],a=Math.min(this._state.count*.1,1);return{...e,intensity:e.intensity+a,duration:e.duration+this._state.count*50}}getStats(){const e=this._history.filter(n=>n.type==="combo_ended"||n.type==="combo_broken"),a=e.length,t=a>0?e.reduce((n,s)=>n+s.comboCount,0)/a:0,i={none:0,double:0,triple:0,quadruple:0,quintuple:0,sextuple:0,septuple:0};return e.forEach(n=>{i[n.comboType]++}),{currentCombo:this._state.count,maxCombo:this._state.maxCombo,totalCombos:a,averageComboLength:t,comboTypeDistribution:i}}getSuggestedEffect(e){switch(e){case"septuple":return"blackhole";case"sextuple":return"storm";case"quintuple":return"lightning";case"quadruple":return"explosion";case"triple":return"fire";case"double":return"magic";default:return"snowflake"}}shouldPlaySpecialSound(e){return!["none","double"].includes(e)}shouldTriggerScreenShake(e){return["quintuple","sextuple","septuple"].includes(e)}shouldTriggerSlowMotion(e){return e==="septuple"}reset(){this._state=this.createInitialState(),this._history=[]}addEventListener(e){this._eventHandlers.push(e)}removeEventListener(e){const a=this._eventHandlers.indexOf(e);a!==-1&&this._eventHandlers.splice(a,1)}_emitEvent(e){this._eventHandlers.forEach(a=>{try{a(e)}catch{}})}getComboDisplayText(){if(!this._state.isActive)return"";const e=`combo.${this._state.type}`,a=l(e);return a===e?`${this._state.count} combo!`:a}getComboDisplayColor(){return{none:"#ffffff",double:"#90ee90",triple:"#ffa500",quadruple:"#ff6347",quintuple:"#ff1493",sextuple:"#9932cc",septuple:"#ffd700"}[this._state.type]||"#ffffff"}}const L={corner_joseki:{positionType:"corner",minFlipCount:3,timing:"early"},great_reversal:{minFlipCount:6},total_domination:{scoreDifference:{min:15,max:999},minFlipCount:4},desperate_kill:{scoreDifference:{min:-15,max:-1},minFlipCount:4},perfect_endgame:{scoreDifference:{min:20,max:999},special:"near_endgame"},edge_control:{positionType:"edge",minFlipCount:5},chain_reaction:{minFlipCount:8,special:"multiple_directions"},time_control:{minFlipCount:10,special:"ultra_rare"}};b("explosion","magic",.7),l("special.corner_joseki"),l("special.corner_joseki.subtitle"),b("storm","lightning",.6),l("special.great_reversal"),l("special.great_reversal.subtitle"),b("blackhole","magic",.8),l("special.total_domination"),l("special.total_domination.subtitle"),b("fire","explosion",.8),l("special.desperate_kill"),l("special.desperate_kill.subtitle"),{...M.blackhole},l("special.perfect_endgame"),l("special.perfect_endgame.subtitle"),b("lightning","storm",.5),l("special.edge_control"),l("special.edge_control.subtitle"),b("lightning","explosion",.7),l("special.chain_reaction"),l("special.chain_reaction.subtitle"),{...M.blackhole},l("special.time_control"),l("special.time_control.subtitle");class z{static detectSpecialMove(e,a,t,i,n,s){const o=[],r=a.length,c=t-i;for(const[m,u]of Object.entries(L))this.checkCondition(m,u,e,r,c,n,s,a)&&o.push(m);return o}static checkCondition(e,a,t,i,n,s,o,r){if(a.minFlipCount&&i<a.minFlipCount)return!1;if(a.scoreDifference){const{min:c,max:m}=a.scoreDifference;if(n<c||n>m)return!1}return!(a.positionType&&!this.checkPositionType(t,a.positionType)||a.timing&&!this.checkTiming(a.timing,s,o)||a.special&&!this.checkSpecialCondition(e,a.special,{position:t,flipCount:i,scoreDiff:n,moveNumber:s,totalMoves:o,flippedPositions:r}))}static checkPositionType(e,a){const t=Math.floor(e/8),i=e%8;switch(a){case"corner":return(t===0||t===7)&&(i===0||i===7);case"edge":return t===0||t===7||i===0||i===7;case"center":return t>=2&&t<=5&&i>=2&&i<=5;default:return!1}}static checkTiming(e,a,t){const i=a/Math.max(t,60);switch(e){case"early":return i<.3;case"mid":return i>=.3&&i<=.7;case"late":return i>.7;default:return!0}}static checkSpecialCondition(e,a,t){switch(a){case"near_endgame":return t.moveNumber>Math.max(t.totalMoves*.8,40);case"multiple_directions":return this.checkMultipleDirections(t.position,t.flippedPositions);case"ultra_rare":return t.flipCount>=15&&Math.abs(t.scoreDiff)>10;default:return!0}}static checkMultipleDirections(e,a){const t=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],i=Math.floor(e/8),n=e%8;let s=0;for(const[o,r]of t){if(o===void 0||r===void 0)continue;let c=!1,m=i+o,u=n+r;for(;m>=0&&m<8&&u>=0&&u<8;){const h=m*8+u;if(a.includes(h)){c=!0;break}m+=o,u+=r}c&&s++}return s>=3}}const x=0,d=1,y=2,C=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];class D{container=null;currentScreen="menu";gameState=null;isProcessingMove=!1;aiThinking=!1;particleSystem;comboSystem;comboDisplay=null;specialMoveDisplay=null;constructor(){this.particleSystem=new P,this.comboSystem=new $,this.comboSystem.addEventListener(e=>{this.handleComboEvent(e)})}async initialize(e){this.container=e;const t=this.getSettings().language||"en";w(t),k(),this.setupUI(),this.particleSystem.initialize(e),this.showMenu()}setupUI(){this.container&&(this.container.innerHTML=`
      <div class="super-reversi-app">
        <div class="game-header" id="game-header" style="display: none;">
          <h1 data-i18n="app.title">${l("app.title")}</h1>
          <div class="header-right">
            <div class="score-display" id="score-display">
              <span id="black-score"></span>
              <span id="current-turn" style="color: #ffd700;"></span>
              <span id="white-score"></span>
            </div>
          </div>
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
      </div>
    `,this.comboDisplay=this.container.querySelector("#combo-display"),this.specialMoveDisplay=this.container.querySelector("#special-move-display"),this.addStyles())}handleComboEvent(e){if((e.type==="combo_started"||e.type==="combo_continued")&&(this.showComboUI(e.comboCount,e.player,e.comboType),this.showMessage(`🔥 ${e.comboCount} 連擊！`),this.container)){const a=this.container.getBoundingClientRect(),t=a.width/2,i=a.height/2;this.particleSystem.createChainEffect(t,i)}}showComboUI(e,a,t){if(!this.comboDisplay)return;const i=this.comboDisplay.querySelector(".combo-count"),n=this.comboDisplay.querySelector(".combo-text"),s=this.comboDisplay.querySelector(".combo-multiplier");i&&(i.textContent=e.toString()),n&&(n.textContent=l("combo.counter",{count:e})),s&&(s.style.display="none");const r={2:"#90ee90",3:"#ffa500",4:"#ff6347",5:"#ff1493",6:"#9932cc",7:"#ffd700"}[Math.min(e,7)]||"#ffd700";this.comboDisplay.style.background=`linear-gradient(135deg, ${r}, ${r}aa)`,this.comboDisplay.classList.remove("hidden"),this.comboDisplay.classList.add("combo-animation"),setTimeout(()=>{this.comboDisplay?.classList.add("hidden"),this.comboDisplay?.classList.remove("combo-animation")},3e3)}detectSpecialMoves(e,a,t,i){const n=z.detectSpecialMove(e,a,t,i,this.gameState?.moveHistory.length||0,60);n.length>0&&n.forEach((s,o)=>{setTimeout(()=>{const r=l(`special.${s}`);this.showSpecialMoveUI(r,s),this.showMessage(`⚡ ${r}`)},o*1e3)})}showSpecialMoveUI(e,a){if(!this.specialMoveDisplay)return;const t=this.specialMoveDisplay.querySelector(".special-move-title"),i=this.specialMoveDisplay.querySelector(".special-move-subtitle");if(t&&(t.textContent=e),i){const o=l(`special.${a}.subtitle`);i.textContent=o}const s={corner_master:"#ffd700",mega_flip:"#ff4500",phoenix_rise:"#ff69b4",domination:"#9932cc",time_warp:"#8b00ff"}[a]||"#ffd700";t&&(t.style.color=s,t.style.textShadow=`
        0 0 20px ${s}88,
        0 0 40px ${s}66,
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
        padding: 1.25rem;
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
      }
      
      .game-header h1 {
        color: #00ff7f;
        margin: 0;
        font-size: 1.75rem;
        text-shadow: 0 0 0.625rem rgba(0,255,127,0.5);
      }
      
      .score-display {
        display: flex;
        gap: 1.875rem;
        color: white;
        font-size: 1.125rem;
        font-weight: bold;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .language-select {
        padding: 0.25rem;
        font-size: 1rem;
      }

      .screen-container {
        width: 100%;
        max-width: min(90vw, 56.25rem);
        height: auto;
        flex: 1;
        background: rgba(26, 26, 26, 0.95);
        border-radius: 0.75rem;
        padding: 1.875rem;
        box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.4);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        width: 15.625rem;
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
        width: min(28.125rem, 70vmin);
        height: min(28.125rem, 70vmin);
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
      }
      
      .settings-group {
        margin: 1.5625rem 0;
      }
      
      .settings-group h3 {
        color: #00ff7f;
        margin-bottom: 0.9375rem;
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
        margin-left: 1.25rem;
        margin-bottom: 0.625rem;
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
    `,document.head.appendChild(e)}showMenu(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="menu";const a=document.getElementById("game-header");a&&(a.style.display="none"),e.innerHTML=`
      <div class="menu-screen">
        <h2 class="menu-title">${l("menu.chooseMode")}</h2>
        <button class="menu-button" id="pvp-btn">👥 ${l("menu.pvp")}</button>
        <button class="menu-button" id="pvc-btn">🤖 ${l("menu.pvc")}</button>
        <button class="menu-button" id="settings-btn">⚙️ ${l("menu.settings")}</button>
        <button class="menu-button" id="help-btn">❓ ${l("menu.help")}</button>
      </div>
    `,document.getElementById("pvp-btn")?.addEventListener("click",()=>{this.startNewGame("pvp")}),document.getElementById("pvc-btn")?.addEventListener("click",()=>{this.showAIDifficultyMenu()}),document.getElementById("settings-btn")?.addEventListener("click",()=>{this.showSettings()}),document.getElementById("help-btn")?.addEventListener("click",()=>{this.showHelp()})}showAIDifficultyMenu(){const e=document.getElementById("screen-container");if(!e)return;e.innerHTML=`
      <div class="menu-screen">
        <button class="back-button" id="back-btn" style="align-self: flex-start; margin-bottom: 1.25rem;">${l("menu.back")}</button>
        <h2 class="menu-title">${l("menu.selectDifficulty")}</h2>
        <div class="difficulty-selector">
          <button class="difficulty-button active" data-diff="easy">${l("menu.easy")}</button>
          <button class="difficulty-button" data-diff="medium">${l("menu.medium")}</button>
          <button class="difficulty-button" data-diff="hard">${l("menu.hard")}</button>
        </div>
        <p style="color: #ccc; text-align: center; margin: 1.25rem 0;">
          <span id="diff-desc">${l("menu.easyDesc")}</span>
        </p>
        <button class="menu-button" id="start-ai-btn">${l("menu.startGame")}</button>
      </div>
    `;let a="easy";const t=document.querySelectorAll(".difficulty-button"),i=document.getElementById("diff-desc"),n={easy:l("menu.easyDesc"),medium:l("menu.mediumDesc"),hard:l("menu.hardDesc")};t.forEach(s=>{s.addEventListener("click",()=>{t.forEach(o=>o.classList.remove("active")),s.classList.add("active"),a=s.getAttribute("data-diff"),i&&(i.textContent=n[a])})}),document.getElementById("back-btn")?.addEventListener("click",()=>{this.showMenu()}),document.getElementById("start-ai-btn")?.addEventListener("click",()=>{this.startNewGame("pvc",a)})}showSettings(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="settings",e.innerHTML=`
      <button class="back-button" id="back-btn" style="margin-bottom: 0.9375rem;">${l("menu.back")}</button>
      <div class="settings-screen">
        <h2 style="color: #00ff7f; margin-bottom: 1.25rem;">${l("settings.title")}</h2>

        <div class="settings-group">
          <h3>${l("settings.language")}</h3>
          <select id="language-select" class="language-select">
            <option value="en">English</option>
            <option value="zh-Hant">繁體中文</option>
            <option value="zh-Hans">简体中文</option>
          </select>
        </div>

        <div class="settings-group">
          <h3>${l("settings.visual")}</h3>
          <label>
            <input type="checkbox" id="show-valid" checked> ${l("settings.showValid")}
          </label>
          <label>
            <input type="checkbox" id="show-last" checked> ${l("settings.showLast")}
          </label>
          <label>
            <input type="checkbox" id="animations" checked> ${l("settings.animations")}
          </label>
        </div>

        <div class="settings-group">
          <h3>${l("settings.game")}</h3>
          <label>
            <input type="checkbox" id="auto-pass" checked> ${l("settings.autoPass")}
          </label>
          <label>
            <input type="checkbox" id="confirm-moves"> ${l("settings.confirm")}
          </label>
        </div>

        <button class="menu-button" id="save-settings" style="margin-top: 1.25rem;">
          ${l("settings.save")}
        </button>
      </div>
    `;const a=this.getSettings();document.getElementById("language-select").value=a.language||"en",document.getElementById("show-valid").checked=a.showValid,document.getElementById("show-last").checked=a.showLast,document.getElementById("animations").checked=a.animations,document.getElementById("auto-pass").checked=a.autoPass,document.getElementById("confirm-moves").checked=a.confirmMoves,document.getElementById("back-btn")?.addEventListener("click",()=>{this.showMenu()}),document.getElementById("save-settings")?.addEventListener("click",()=>{const t=document.getElementById("language-select").value,i={language:t,showValid:document.getElementById("show-valid")?.checked,showLast:document.getElementById("show-last")?.checked,animations:document.getElementById("animations")?.checked,autoPass:document.getElementById("auto-pass")?.checked,confirmMoves:document.getElementById("confirm-moves")?.checked};localStorage.setItem("reversi-settings",JSON.stringify(i)),localStorage.setItem("language",t),w(t),k(),alert(l("settings.saved")),this.refreshUI()})}showHelp(){const e=document.getElementById("screen-container");e&&(this.currentScreen="help",e.innerHTML=`
      <button class="back-button" id="back-btn" style="margin-bottom: 0.9375rem;">${l("menu.back")}</button>
      <div class="help-screen">
        <h2>${l("help.title")}</h2>

        <h3>${l("help.objectiveTitle")}</h3>
        <p>${l("help.objectiveText")}</p>

        <h3>${l("help.rulesTitle")}</h3>
        <ul>
          <li>${l("help.rules1")}</li>
          <li>${l("help.rules2")}</li>
          <li>${l("help.rules3")}</li>
          <li>${l("help.rules4")}</li>
          <li>${l("help.rules5")}</li>
          <li>${l("help.rules6")}</li>
        </ul>

        <h3>${l("help.strategyTitle")}</h3>
        <ul>
          <li>${l("help.strategy1")}</li>
          <li>${l("help.strategy2")}</li>
          <li>${l("help.strategy3")}</li>
          <li>${l("help.strategy4")}</li>
        </ul>

        <h3>${l("help.controlsTitle")}</h3>
        <ul>
          <li>${l("help.controls1")}</li>
          <li>${l("help.controls2")}</li>
          <li>${l("help.controls3")}</li>
        </ul>
      </div>
    `,document.getElementById("back-btn")?.addEventListener("click",()=>{this.showMenu()}))}startNewGame(e,a="easy"){this.gameState={board:this.createInitialBoard(),currentPlayer:d,blackScore:2,whiteScore:2,gameMode:e,isGameOver:!1,validMoves:new Set,moveHistory:[],aiDifficulty:a},this.updateValidMoves(),this.showGameScreen(),this.updateDisplay()}createInitialBoard(){const e=new Array(64).fill(x);return e[27]=y,e[28]=d,e[35]=d,e[36]=y,e}showGameScreen(){const e=document.getElementById("screen-container");if(!e||!this.gameState)return;this.currentScreen="game";const a=document.getElementById("game-header");a&&(a.style.display="flex");const t=this.gameState.gameMode==="pvp"?l("game.pvp"):`${l("game.pvai")} (${l("difficulty."+this.gameState.aiDifficulty)})`;e.innerHTML=`
      <div class="game-screen">
        <div class="game-controls">
          <button class="back-button" id="back-btn">${l("game.back")}</button>
        </div>
        <div class="game-info">
          <div>${l("game.mode")}: ${t}</div>
          <div id="turn-indicator">${l("game.currentTurn")} <span style="color: #ffd700;">${l("game.black")}</span></div>
          <div id="ai-status"></div>
        </div>
        <div class="game-board" id="game-board"></div>
        <div id="game-over-modal" style="display: none;"></div>
      </div>
    `,this.createBoardCells(),document.getElementById("back-btn")?.addEventListener("click",()=>{confirm(l("messages.quitConfirm"))&&this.showMenu()})}createBoardCells(){const e=document.getElementById("game-board");if(!(!e||!this.gameState)){e.innerHTML="";for(let a=0;a<64;a++){const t=document.createElement("div");t.className="board-cell",t.dataset.position=a.toString(),t.addEventListener("click",()=>{!this.isProcessingMove&&!this.aiThinking&&this.handleCellClick(a)}),e.appendChild(t)}this.renderBoard()}}renderBoard(){if(!this.gameState)return;const e=this.getSettings();for(let a=0;a<64;a++){const t=document.querySelector(`[data-position="${a}"]`);if(t){if(t.className="board-cell",e.showValid&&this.gameState.validMoves.has(a)&&t.classList.add("valid-move"),e.showLast&&this.gameState.moveHistory.length>0){const i=this.gameState.moveHistory[this.gameState.moveHistory.length-1];i&&i.position===a&&t.classList.add("last-move")}if(t.innerHTML="",this.gameState.board[a]!==x){const i=document.createElement("div");i.className=`piece ${this.gameState.board[a]===d?"piece-black":"piece-white"}`,t.appendChild(i)}}}}getSettings(){const e=localStorage.getItem("reversi-settings");return e?JSON.parse(e):{language:localStorage.getItem("language")||"en",showValid:!0,showLast:!0,animations:!0,autoPass:!0,confirmMoves:!1}}handleCellClick(e){if(!this.gameState||this.gameState.isGameOver||!this.gameState.validMoves.has(e))return;const a=this.getSettings();this.gameState.gameMode==="pvc"&&this.gameState.currentPlayer===d&&a.confirmMoves&&!confirm(l("messages.moveConfirm"))||this.makeMove(e)}makeMove(e){if(!this.gameState)return;this.isProcessingMove=!0;const a=this.getFlippedPieces(e,this.gameState.currentPlayer),t={corner:e===0||e===7||e===56||e===63,edge:this.isEdgePosition(e),massive:a.length>=10,chain:this.isChainMove(a),comeback:this.isComebackMove(),domination:this.isDominationMove()},i=this.particleSystem.calculateGrade(a.length,e,t),n=document.querySelector(`[data-position="${e}"]`);if(n){const o=n.getBoundingClientRect(),r=this.container.getBoundingClientRect(),c=o.left+o.width/2-r.left,m=o.top+o.height/2-r.top;this.particleSystem.triggerMoveEffect(c,m,i,a.length,t),t.chain&&this.particleSystem.createChainEffect(c,m),this.showGradeIndicator(i,c,m)}if(this.gameState.moveHistory.push({position:e,player:this.gameState.currentPlayer,flipped:a}),this.triggerScreenShake(i),this.gameState.board[e]=this.gameState.currentPlayer,n){const o=document.createElement("div");o.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"} placing`,n.innerHTML="",n.appendChild(o)}this.getSettings().animations?setTimeout(()=>{this.flipPiecesWithEffects(a,i);const o=a.length*80+300;setTimeout(()=>{this.afterMove()},o)},200):(this.flipPiecesWithEffects(a,i),this.afterMove())}showGradeIndicator(e,a,t){const i=document.createElement("div");switch(i.style.position="absolute",i.style.left=`${a}px`,i.style.top=`${t-50}px`,i.style.transform="translateX(-50%)",i.style.fontSize="3rem",i.style.fontWeight="bold",i.style.zIndex="200",i.style.pointerEvents="none",i.style.animation="gradePopup 1s ease-out forwards",e){case"SSS":i.textContent="SSS",i.style.color="#ff0080",i.style.textShadow="0 0 1.875rem #ff0080, 0 0 3.75rem #ff69b4",i.style.fontSize="3.5rem",i.style.animation="gradePopup 2s ease-out forwards, rainbow 2s infinite";break;case"SS":i.textContent="SS",i.style.color="#9932cc",i.style.textShadow="0 0 1.5625rem #9932cc, 0 0 3.125rem #8b00ff",i.style.fontSize="3.25rem",i.style.animation="gradePopup 1.5s ease-out forwards, glow 1.5s infinite";break;case"S":i.textContent="S",i.style.color="#ff69b4",i.style.textShadow="0 0 1.25rem #ff69b4",i.style.fontSize="3rem";break;case"A":i.textContent="A",i.style.color="#ffd700",i.style.textShadow="0 0 1.25rem #ffd700";break;case"B":i.textContent="B",i.style.color="#00ff7f",i.style.textShadow="0 0 0.9375rem #00ff7f";break;case"C":i.textContent="C",i.style.color="#888888",i.style.textShadow="0 0 0.625rem #888888";break}if(!document.getElementById("grade-animation-style")){const n=document.createElement("style");n.id="grade-animation-style",n.textContent=`
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
      `,document.head.appendChild(n)}this.container?.appendChild(i),setTimeout(()=>{i.remove()},1e3)}flipPiecesWithEffects(e,a){if(!this.gameState)return;const t=this.getSettings();e.forEach((i,n)=>{setTimeout(()=>{this.gameState.board[i]=this.gameState.currentPlayer;const s=document.querySelector(`[data-position="${i}"]`);if(s){const o=s.getBoundingClientRect(),r=this.container.getBoundingClientRect(),c=o.left+o.width/2-r.left,m=o.top+o.height/2-r.top,u=this.gameState.currentPlayer===d?"#000000":"#ffffff";this.particleSystem.createFlipEffect(c,m,u,a);const h=s.querySelector(".piece");h&&t.animations?(h.classList.add("flipping"),setTimeout(()=>{h.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"}`},250)):h&&(h.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"}`)}},n*80)})}flipPieces(e){if(!this.gameState)return;const a=this.getSettings();e.forEach(t=>{this.gameState.board[t]=this.gameState.currentPlayer;const i=document.querySelector(`[data-position="${t}"]`);if(i){const n=i.querySelector(".piece");n&&a.animations?(n.classList.add("flipping"),setTimeout(()=>{n.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"}`},250)):n&&(n.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"}`)}})}afterMove(){if(!this.gameState)return;this.updateScores(),this.gameState.currentPlayer=this.gameState.currentPlayer===d?y:d,this.updateValidMoves();const e=this.gameState.currentPlayer===d?y:d,a=this.gameState.validMoves.size>0,t=this.gameState.moveHistory[this.gameState.moveHistory.length-1];t&&(this.comboSystem.processMove(e===d?1:2,a,t.flipped.length),this.detectSpecialMoves(t.position,t.flipped,e===d?this.gameState.blackScore:this.gameState.whiteScore,e===d?this.gameState.whiteScore:this.gameState.blackScore)),this.checkGameStatus()||(this.updateDisplay(),this.gameState.gameMode==="pvc"&&this.gameState.currentPlayer===y&&this.makeAIMove()),this.isProcessingMove=!1}updateValidMoves(){if(this.gameState){this.gameState.validMoves.clear();for(let e=0;e<64;e++)this.gameState.board[e]===x&&this.isValidMove(e,this.gameState.currentPlayer)&&this.gameState.validMoves.add(e)}}isValidMove(e,a){if(!this.gameState||this.gameState.board[e]!==x)return!1;for(const[t,i]of C)if(this.checkDirection(e,a,t||0,i||0).length>0)return!0;return!1}checkDirection(e,a,t,i){if(!this.gameState)return[];const n=[],s=Math.floor(e/8),o=e%8,r=a===d?y:d;let c=s+i,m=o+t;for(;c>=0&&c<8&&m>=0&&m<8;){const u=c*8+m;if(this.gameState.board[u]===x)return[];if(this.gameState.board[u]===r)n.push(u);else return n.length>0?n:[];c+=i,m+=t}return[]}getFlippedPieces(e,a){const t=[];for(const[i,n]of C){const s=this.checkDirection(e,a,i,n);t.push(...s)}return t}updateScores(){if(!this.gameState)return;let e=0,a=0;for(const t of this.gameState.board)t===d?e++:t===y&&a++;this.gameState.blackScore=e,this.gameState.whiteScore=a}checkGameStatus(){if(!this.gameState)return!1;if(this.gameState.validMoves.size===0){if(this.gameState.currentPlayer=this.gameState.currentPlayer===d?y:d,this.updateValidMoves(),this.gameState.validMoves.size===0)return this.gameOver(),!0;if(this.getSettings().autoPass){const a=this.gameState.currentPlayer===d?"Black":"White";this.showMessage(`No valid moves - passing to ${a}`)}}return!1}gameOver(){if(!this.gameState)return;this.gameState.isGameOver=!0;let e,a;this.gameState.blackScore>this.gameState.whiteScore?(e=l("game.blackWins"),a="#000"):this.gameState.whiteScore>this.gameState.blackScore?(e=l("game.whiteWins"),a="#fff"):(e=l("game.tie"),a="#ffd700");const t=document.getElementById("game-over-modal");t&&(t.style.display="block",t.className="game-over-modal",t.innerHTML=`
        <h2 class="game-over-title">🏆 ${l("game.gameOverTitle")}</h2>
        <div class="final-scores">
          <p style="font-size: 2.25rem; color: ${a}; margin: 1.25rem 0;">
            ${e}
          </p>
          <p>⚫ ${l("game.black")}: ${this.gameState.blackScore}</p>
          <p>⚪ ${l("game.white")}: ${this.gameState.whiteScore}</p>
          <p style="margin-top: 1.25rem; font-size: 1.125rem;">
            ${l("game.totalMoves")}: ${this.gameState.moveHistory.length}
          </p>
        </div>
        <div class="modal-buttons">
          <button class="menu-button" id="play-again">${l("game.playAgain")}</button>
          <button class="menu-button" id="main-menu">${l("game.mainMenu")}</button>
        </div>
      `,document.getElementById("play-again")?.addEventListener("click",()=>{t.style.display="none",this.startNewGame(this.gameState.gameMode,this.gameState.aiDifficulty)}),document.getElementById("main-menu")?.addEventListener("click",()=>{t.style.display="none",this.showMenu()}))}updateDisplay(){if(!this.gameState)return;document.getElementById("black-score").textContent=`⚫ ${l("game.black")}: ${this.gameState.blackScore}`,document.getElementById("white-score").textContent=`⚪ ${l("game.white")}: ${this.gameState.whiteScore}`;const e=this.gameState.currentPlayer===d?l("game.black"):l("game.white");document.getElementById("current-turn").innerHTML=`${l("game.current")}: <span style="color: ${this.gameState.currentPlayer===d?"#000":"#fff"};">${e}</span>`;const a=document.getElementById("turn-indicator");if(a){const t=this.gameState.currentPlayer===d?"#000":"#fff";a.innerHTML=`${l("game.currentTurn")} <span style="color: ${t}; font-weight: bold;">${e}</span>`}this.renderBoard()}showMessage(e){const a=document.getElementById("ai-status");a&&(a.textContent=e,setTimeout(()=>{a.textContent=""},2e3))}triggerScreenShake(e){if(!this.container||!this.getSettings().animations)return;let t=0,i=0;switch(e){case"SSS":t=20,i=1200;break;case"SS":t=16,i=1e3;break;case"S":t=12,i=800;break;case"A":t=6,i=500;break;case"B":t=3,i=300;break;case"C":return}const n=this.container.querySelector(".super-reversi-app");if(n){if(n.style.animation=`shake ${i}ms ease-in-out`,!document.getElementById("shake-animation")){const s=document.createElement("style");s.id="shake-animation",s.textContent=`
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
        `,document.head.appendChild(s)}setTimeout(()=>{n.style.animation=""},i)}}makeAIMove(){if(!this.gameState||this.gameState.validMoves.size===0)return;this.aiThinking=!0;const e=document.getElementById("ai-status");e&&(e.innerHTML='<span class="ai-thinking">AI is thinking...</span>'),setTimeout(()=>{const a=this.selectAIMove();a!==-1&&this.makeMove(a),e&&(e.textContent=""),this.aiThinking=!1},800)}selectAIMove(){if(!this.gameState)return-1;const e=Array.from(this.gameState.validMoves);if(e.length===0)return-1;switch(this.gameState.aiDifficulty){case"easy":return this.selectRandomMove(e);case"medium":return this.selectGreedyMove(e);case"hard":return this.selectStrategicMove(e);default:return e[0]??0}}selectRandomMove(e){return e[Math.floor(Math.random()*e.length)]??0}selectGreedyMove(e){if(!this.gameState)return e[0]??0;let a=e[0]??0,t=0;for(const i of e){const n=this.getFlippedPieces(i,y).length;n>t&&(t=n,a=i)}return a}selectStrategicMove(e){if(!this.gameState)return e[0]??0;const a=[120,-20,20,5,5,20,-20,120,-20,-40,-5,-5,-5,-5,-40,-20,20,-5,15,3,3,15,-5,20,5,-5,3,3,3,3,-5,5,5,-5,3,3,3,3,-5,5,20,-5,15,3,3,15,-5,20,-20,-40,-5,-5,-5,-5,-40,-20,120,-20,20,5,5,20,-20,120];let t=e[0]??0,i=-1e3;for(const n of e){const s=this.getFlippedPieces(n,y).length,r=(a[n]??0)+s*10;r>i&&(i=r,t=n)}return t}isEdgePosition(e){const a=Math.floor(e/8),t=e%8;return(a===0||a===7||t===0||t===7)&&!(e===0||e===7||e===56||e===63)}isChainMove(e){return!this.gameState||this.gameState.moveHistory.length===0?!1:this.gameState.moveHistory[this.gameState.moveHistory.length-1]?.flipped?.length>=3&&e.length>=3}isComebackMove(){return this.gameState?(this.gameState.currentPlayer===d?this.gameState.blackScore-this.gameState.whiteScore:this.gameState.whiteScore-this.gameState.blackScore)<=-5:!1}isDominationMove(){return this.gameState?(this.gameState.currentPlayer===d?this.gameState.blackScore-this.gameState.whiteScore:this.gameState.whiteScore-this.gameState.blackScore)>=10:!1}}document.addEventListener("DOMContentLoaded",async()=>{const f=document.getElementById("game-container");if(f)try{const e=new D;await e.initialize(f),window.superReversiGame=e}catch(e){f.innerHTML=`
        <div style="padding: 1.25rem; color: red;">
          <h2>Error Loading Game</h2>
          <p>${e}</p>
        </div>
      `}});
//# sourceMappingURL=index-Dc2_xTSB.js.map
