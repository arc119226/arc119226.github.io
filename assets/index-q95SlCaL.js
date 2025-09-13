(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();class S{canvas;ctx;particles=[];animationId=null;lastTime=0;constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="particle-canvas",this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.left="0",this.canvas.style.pointerEvents="none",this.canvas.style.zIndex="100";const e=this.canvas.getContext("2d");if(!e)throw new Error("Could not get canvas context");this.ctx=e}initialize(e){const a=e.getBoundingClientRect();this.canvas.width=a.width,this.canvas.height=a.height,e.style.position="relative",e.appendChild(this.canvas),this.startAnimation()}startAnimation(){const e=a=>{const s=a-this.lastTime;this.lastTime=a,this.update(s/1e3),this.render(),this.animationId=requestAnimationFrame(e)};this.animationId=requestAnimationFrame(e)}update(e){for(let a=this.particles.length-1;a>=0;a--){const s=this.particles[a];s&&(s.x+=s.vx*e,s.y+=s.vy*e,s.life-=e,s.alpha=Math.max(0,s.life/s.maxLife),s.type==="spark"&&(s.vy+=200*e),s.life<=0&&this.particles.splice(a,1))}}render(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const e of this.particles)this.ctx.save(),this.ctx.globalAlpha=e.alpha,e.type==="circle"?this.drawCircle(e):e.type==="star"?this.drawStar(e):e.type==="spark"&&this.drawSpark(e),this.ctx.restore()}drawCircle(e){this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.shadowBlur=10,this.ctx.shadowColor=e.color,this.ctx.fill()}drawStar(e){const s=e.size,t=e.size*.5;this.ctx.beginPath(),this.ctx.translate(e.x,e.y);for(let r=0;r<5*2;r++){const i=r%2===0?s:t,o=r*Math.PI/5,n=Math.cos(o)*i,c=Math.sin(o)*i;r===0?this.ctx.moveTo(n,c):this.ctx.lineTo(n,c)}this.ctx.closePath(),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.translate(-e.x,-e.y)}drawSpark(e){this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(e.x-e.vx*.1,e.y-e.vy*.1),this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.size,this.ctx.lineCap="round",this.ctx.stroke()}calculateGrade(e,a,s){const t=a===0||a===7||a===56||a===63,r=Math.floor(a/8),i=a%8,o=r===0||r===7||i===0||i===7;let n=e*10;return t?n+=60:o&&(n+=20),s?.massive&&(n+=40),s?.chain&&(n+=30),s?.comeback&&(n+=25),s?.domination&&(n+=20),s?.firstMove&&(n-=10),n>=80||e>=15?"SSS":n>=60||e>=12?"SS":n>=40||e>=8?"S":n>=25||e>=5?"A":n>=12||e>=3?"B":"C"}triggerMoveEffect(e,a,s,t,r){switch(s){case"SSS":this.createSSSEffect(e,a,t,r);break;case"SS":this.createSSEffect(e,a,t,r);break;case"S":this.createSEffect(e,a,t,r);break;case"A":this.createAEffect(e,a,t);break;case"B":this.createBEffect(e,a,t);break;case"C":this.createCEffect(e,a);break}}createSSSEffect(e,a,s,t){const r=["#ffd700","#ffdf00","#ffed4e","#fff700","#ffa500","#daa520","#b8860b","#ffeaa7","#fdcb6e","#f39c12","#e67e22","#d4af37"];for(let i=0;i<8;i++)setTimeout(()=>{for(let o=0;o<60;o++){const n=o/60*Math.PI*2,c=400+i*100,h=Math.sin(o*.3)*50;this.particles.push({x:e,y:a,vx:Math.cos(n)*c+h,vy:Math.sin(n)*c+h,life:2,maxLife:2,size:Math.random()*8+4,color:r[Math.floor(Math.random()*r.length)]??"#ffd700",alpha:1,type:Math.random()>.3?"star":"circle"})}},i*60);for(let i=0;i<3;i++){const o=e+(i-1)*100;for(let n=0;n<120;n++){const c=n/10*Math.PI+i*2,h=n*3;setTimeout(()=>{this.particles.push({x:o+Math.cos(c)*h*.2,y:a+Math.sin(c)*h*.2,vx:Math.cos(c+Math.PI/2)*200,vy:Math.sin(c+Math.PI/2)*200,life:2.5,maxLife:2.5,size:Math.random()*6+3,color:r[n%r.length]??"#ffd700",alpha:1,type:"star"})},n*10+i*200)}}for(let i=0;i<5;i++)setTimeout(()=>{for(let o=0;o<Math.PI*2;o+=.05)this.particles.push({x:e,y:a,vx:Math.cos(o)*(600+i*150),vy:Math.sin(o)*(600+i*150),life:1,maxLife:1,size:2,color:i%2===0?"#000000":"#ffffff",alpha:.9,type:"circle"})},i*300);for(let i=0;i<200+s*20;i++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*100,y:a+Math.random()*50,vx:(Math.random()-.5)*800,vy:-Math.random()*600-300,life:3,maxLife:3,size:Math.random()*6+3,color:r[Math.floor(Math.random()*r.length)]??"#ffd700",alpha:1,type:Math.random()>.5?"star":"spark"})},Math.random()*500);t?.corner&&this.createCornerExplosion(e,a),t?.comeback&&this.createComebackEffect(e,a)}createSSEffect(e,a,s,t){const r=["#ff0000","#dc143c","#b22222","#cd5c5c","#ff6347","#ff4500","#ff1493","#8b0000","#a52a2a","#c41e3a"];for(let i=0;i<6;i++)setTimeout(()=>{for(let o=0;o<50;o++){const n=o/50*Math.PI*2,c=350+i*80,h=Math.sin(o*.4)*30;this.particles.push({x:e,y:a,vx:Math.cos(n)*c+h,vy:Math.sin(n)*c+h,life:1.8,maxLife:1.8,size:Math.random()*6+3,color:r[i%r.length]??"#ff0000",alpha:1,type:Math.random()>.4?"star":"circle"})}},i*100);for(let i=0;i<100;i++){const o=i/12*Math.PI,n=i*2.5;setTimeout(()=>{this.particles.push({x:e+Math.cos(o)*n*.4,y:a+Math.sin(o)*n*.4,vx:Math.cos(o+Math.PI/2)*180,vy:Math.sin(o+Math.PI/2)*180,life:2.2,maxLife:2.2,size:Math.random()*5+2,color:r[i%r.length]??"#ff0000",alpha:1,type:"star"})},i*20)}for(let i=0;i<150+s*12;i++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*80,y:a+Math.random()*30,vx:(Math.random()-.5)*600,vy:-Math.random()*500-250,life:2.8,maxLife:2.8,size:Math.random()*5+2,color:r[Math.floor(Math.random()*r.length)]??"#ff6347",alpha:1,type:Math.random()>.3?"star":"spark"})},Math.random()*400);t?.massive&&this.createMassiveEffect(e,a),t?.domination&&this.createDominationEffect(e,a)}createSEffect(e,a,s,t){const r=["#9932cc","#8b00ff","#9400d3","#4b0082","#6a5acd","#7b68ee","#9370db","#8a2be2","#9966cc","#ba55d3"];for(let i=0;i<5;i++)setTimeout(()=>{for(let o=0;o<40;o++){const n=o/40*Math.PI*2,c=300+i*80,h=Math.sin(o*.5)*20;this.particles.push({x:e,y:a,vx:Math.cos(n)*c+h,vy:Math.sin(n)*c+h,life:1.5,maxLife:1.5,size:Math.random()*5+3,color:r[i%r.length]??"#9932cc",alpha:1,type:Math.random()>.5?"star":"circle"})}},i*80);for(let i=0;i<80;i++){const o=i/8*Math.PI,n=i*4;setTimeout(()=>{this.particles.push({x:e+Math.cos(o)*n*.3,y:a+Math.sin(o)*n*.3,vx:Math.cos(o+Math.PI/2)*150,vy:Math.sin(o+Math.PI/2)*150,life:2,maxLife:2,size:Math.random()*4+2,color:r[i%r.length]??"#9932cc",alpha:1,type:"star"})},i*15)}for(let i=0;i<100+s*15;i++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*40,y:a+Math.random()*20,vx:(Math.random()-.5)*400,vy:-Math.random()*500-200,life:2.5,maxLife:2.5,size:Math.random()*4+2,color:r[Math.floor(Math.random()*r.length)]??"#8a2be2",alpha:1,type:Math.random()>.3?"spark":"star"})},Math.random()*300);for(let i=0;i<3;i++)setTimeout(()=>{for(let o=0;o<Math.PI*2;o+=.1)this.particles.push({x:e,y:a,vx:Math.cos(o)*(400+i*100),vy:Math.sin(o)*(400+i*100),life:.8,maxLife:.8,size:1,color:"#ffffff",alpha:.8,type:"circle"})},i*200);for(let i=0;i<50;i++){const o=i/50*Math.PI*2;setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(o)*500,vy:Math.sin(o)*500,life:1.2,maxLife:1.2,size:Math.random()*6+2,color:"#9932cc",alpha:1,type:"star"})},i*20)}}createAEffect(e,a,s){const t=["#87ceeb","#87cefa","#00bfff","#4169e1","#1e90ff","#6495ed","#7b68ee","#4682b4","#5f9ea0","#add8e6"],r=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];for(const[i,o]of r)for(let n=0;n<3;n++)for(let c=0;c<15;c++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:i*(250+n*50),vy:o*(250+n*50),life:1+n*.2,maxLife:1+n*.2,size:Math.random()*4+2,color:t[n%t.length]??"#87ceeb",alpha:1,type:"star"})},c*25+n*200);for(let i=0;i<4;i++)setTimeout(()=>{for(let o=0;o<30;o++){const n=o/30*Math.PI*2,c=180+i*60;this.particles.push({x:e,y:a,vx:Math.cos(n)*c,vy:Math.sin(n)*c,life:1.2,maxLife:1.2,size:Math.random()*3+2,color:t[i%t.length]??"#87ceeb",alpha:1,type:i%2===0?"star":"circle"})}},i*150);for(let i=0;i<60+s*8;i++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*30,y:a+Math.random()*15,vx:(Math.random()-.5)*300,vy:-Math.random()*350-150,life:1.8,maxLife:1.8,size:Math.random()*3+1,color:t[Math.floor(Math.random()*t.length)]??"#4169e1",alpha:1,type:"spark"})},Math.random()*400);for(let i=0;i<25;i++){const o=Math.random()*Math.PI*2,n=Math.random()*100+50;this.particles.push({x:e+Math.cos(o)*n,y:a+Math.sin(o)*n,vx:Math.cos(o)*100,vy:Math.sin(o)*100,life:.8,maxLife:.8,size:Math.random()*3+1,color:"#87ceeb",alpha:1,type:"star"})}}createBEffect(e,a,s){const t=["#90ee90","#98fb98","#00ff7f","#00fa9a","#7cfc00","#7fff00","#adff2f","#9aff9a","#8fbc8f","#20b2aa"];for(let r=0;r<2;r++)setTimeout(()=>{for(let i=0;i<25;i++){const o=i/25*Math.PI*2,n=120+r*40;this.particles.push({x:e,y:a,vx:Math.cos(o)*n,vy:Math.sin(o)*n,life:1,maxLife:1,size:Math.random()*2+2,color:t[r%t.length]??"#90ee90",alpha:1,type:r===0?"circle":"star"})}},r*100);for(let r=0;r<20+s*5;r++){const i=Math.random()*Math.PI*2,o=Math.random()*150+80;setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(i)*o,vy:Math.sin(i)*o,life:1.2,maxLife:1.2,size:Math.random()*2+1,color:t[Math.floor(Math.random()*t.length)]??"#00ff7f",alpha:1,type:"spark"})},Math.random()*200)}for(let r=0;r<8;r++){const i=r/8*Math.PI*2;for(let o=0;o<5;o++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(i)*(150+o*30),vy:Math.sin(i)*(150+o*30),life:.8,maxLife:.8,size:2,color:"#90ee90",alpha:1,type:"circle"})},o*50)}}createCEffect(e,a){const s=["#d3d3d3","#c0c0c0","#dcdcdc","#f5f5f5","#e0e0e0","#f8f8f8","#b8b8b8","#a9a9a9","#d8d8d8","#e6e6e6"];for(let t=0;t<12;t++){const r=t/12*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(r)*80,vy:Math.sin(r)*80,life:.8,maxLife:.8,size:Math.random()*1.5+1,color:s[t%s.length]??"#d3d3d3",alpha:.8,type:"circle"})}for(let t=0;t<6;t++){const r=Math.random()*Math.PI*2,i=Math.random()*60+40;this.particles.push({x:e,y:a,vx:Math.cos(r)*i,vy:Math.sin(r)*i,life:.6,maxLife:.6,size:1,color:"#d3d3d3",alpha:.7,type:"spark"})}}createFlipEffect(e,a,s,t){const r=s==="#000000";let i,o;if(t)switch(t){case"SSS":i=["#ffd700","#ffdf00","#ffed4e","#fff700","#ffa500"],o=3;break;case"SS":i=["#ff0000","#dc143c","#b22222","#cd5c5c","#ff6347"],o=2.5;break;case"S":i=["#9932cc","#8b00ff","#9400d3","#4b0082","#6a5acd"],o=2;break;case"A":i=["#87ceeb","#87cefa","#00bfff","#4169e1","#1e90ff"],o=1.5;break;case"B":i=["#90ee90","#98fb98","#00ff7f","#00fa9a","#7cfc00"],o=1.2;break;case"C":i=["#d3d3d3","#c0c0c0","#dcdcdc","#f5f5f5","#e0e0e0"],o=1;break;default:i=r?["#666666","#888888","#555555"]:["#f0f0f0","#e8e8e8","#f5f5f5"],o=.8}else i=r?["#666666","#888888","#555555"]:["#f0f0f0","#e8e8e8","#f5f5f5"],o=.8;const n=i[0]??"#ffffff",c=i,h=Math.floor(15*o);for(let l=0;l<h;l++){const g=l/h*Math.PI*2,f=(Math.random()*60+60)*o;this.particles.push({x:e,y:a,vx:Math.cos(g)*f,vy:Math.sin(g)*f,life:.6*o,maxLife:.6*o,size:(Math.random()*1.5+1)*o,color:l%3===0?n:c[l%c.length]??n,alpha:.9,type:l%2===0?"spark":"star"})}const u=Math.floor(2+o);for(let l=0;l<u;l++)setTimeout(()=>{const g=Math.floor(12+o*4);for(let f=0;f<g;f++){const b=f/g*Math.PI*2,v=(80+l*30)*o;this.particles.push({x:e,y:a,vx:Math.cos(b)*v,vy:Math.sin(b)*v,life:.6+l*.2,maxLife:.6+l*.2,size:l===0?2:1,color:n,alpha:.7-l*.2,type:"circle"})}},l*80);for(let l=0;l<15;l++){const g=Math.random()*Math.PI*2,f=Math.random()*60+40;setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*20,y:a+(Math.random()-.5)*20,vx:Math.cos(g)*f,vy:Math.sin(g)*f,life:.7,maxLife:.7,size:Math.random()*1.5+1,color:c[Math.floor(Math.random()*c.length)]??"#d3d3d3",alpha:.8,type:"spark"})},Math.random()*200)}for(let l=0;l<8;l++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*30,y:a+(Math.random()-.5)*30,vx:(Math.random()-.5)*30,vy:-Math.random()*40-20,life:1.2,maxLife:1.2,size:Math.random()*1+.5,color:n,alpha:.6,type:"circle"})},Math.random()*300);setTimeout(()=>{for(let l=0;l<Math.PI*2;l+=.2)this.particles.push({x:e,y:a,vx:Math.cos(l)*150,vy:Math.sin(l)*150,life:.4,maxLife:.4,size:1.5,color:r?"#333333":"#f9f9f9",alpha:.5,type:"circle"})},100)}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.particles=[],this.canvas.remove()}getParticleCount(){return this.particles.length}createCornerExplosion(e,a){const s=["#ffd700","#ffdf00","#ffa500"];for(let t=0;t<4;t++){const r=t/4*Math.PI*2;for(let i=0;i<20;i++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(r)*300+(Math.random()-.5)*100,vy:Math.sin(r)*300+(Math.random()-.5)*100,life:1.5,maxLife:1.5,size:Math.random()*3+2,color:s[i%s.length]??"#ffd700",alpha:1,type:"circle"})},i*30+t*200)}}createComebackEffect(e,a){const s=["#ff4500","#ff6347","#ffa500","#ff1493"];for(let t=0;t<80;t++)setTimeout(()=>{this.particles.push({x:e+(Math.random()-.5)*60,y:a+Math.random()*30,vx:(Math.random()-.5)*200,vy:-Math.random()*400-200,life:2,maxLife:2,size:Math.random()*4+2,color:s[Math.floor(Math.random()*s.length)]??"#ff6347",alpha:.9,type:"spark"})},Math.random()*600)}createMassiveEffect(e,a){const s=["#0080ff","#00bfff","#87ceeb","#b0e0e6"];for(let t=0;t<6;t++)setTimeout(()=>{for(let r=0;r<40;r++){const i=r/40*Math.PI*2;this.particles.push({x:e,y:a,vx:Math.cos(i)*(200+t*50),vy:Math.sin(i)*(200+t*50),life:1+t*.2,maxLife:1+t*.2,size:Math.random()*3+1,color:s[t%s.length]??"#0080ff",alpha:.8,type:"circle"})}},t*150)}createDominationEffect(e,a){const s=["#9932cc","#8b00ff","#ffd700","#daa520"];for(let t=0;t<12;t++){const r=t/12*Math.PI*2;setTimeout(()=>{this.particles.push({x:e+Math.cos(r)*50,y:a+Math.sin(r)*50,vx:Math.cos(r)*150,vy:Math.sin(r)*150,life:1.8,maxLife:1.8,size:Math.random()*4+3,color:s[t%s.length]??"#9932cc",alpha:1,type:"star"})},t*80)}}createChainEffect(e,a){const s=["#ffff00","#ffffff","#00ffff"];for(let t=0;t<8;t++){const r=t/8*Math.PI*2;for(let i=0;i<10;i++)setTimeout(()=>{this.particles.push({x:e,y:a,vx:Math.cos(r)*(100+i*20)+(Math.random()-.5)*60,vy:Math.sin(r)*(100+i*20)+(Math.random()-.5)*60,life:.4,maxLife:.4,size:2,color:s[i%s.length]??"#ffff00",alpha:1,type:"spark"})},i*20+t*50)}}}const y=0,d=1,m=2,M=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];class x{container=null;currentScreen="menu";gameState=null;isProcessingMove=!1;aiThinking=!1;particleSystem;constructor(){this.particleSystem=new S}async initialize(e){this.container=e,this.setupUI(),this.particleSystem.initialize(e),this.showMenu()}setupUI(){this.container&&(this.container.innerHTML=`
      <div class="super-reversi-app">
        <div class="game-header" id="game-header" style="display: none;">
          <h1>🎮 Super Reversi</h1>
          <div class="score-display" id="score-display">
            <span id="black-score">⚫ Black: 2</span>
            <span id="current-turn" style="color: #ffd700;">Current: Black</span>
            <span id="white-score">⚪ White: 2</span>
          </div>
        </div>
        <div id="screen-container" class="screen-container">
          <!-- Screens render here -->
        </div>
      </div>
    `,this.addStyles())}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}showMenu(){const e=document.getElementById("screen-container");if(!e)return;this.currentScreen="menu";const a=document.getElementById("game-header");a&&(a.style.display="none"),e.innerHTML=`
      <div class="menu-screen">
        <h2 class="menu-title">🎯 Choose Game Mode</h2>
        <button class="menu-button" id="pvp-btn">👥 Player vs Player</button>
        <button class="menu-button" id="pvc-btn">🤖 Player vs Computer</button>
        <button class="menu-button" id="settings-btn">⚙️ Settings</button>
        <button class="menu-button" id="help-btn">❓ How to Play</button>
      </div>
    `,document.getElementById("pvp-btn")?.addEventListener("click",()=>{this.startNewGame("pvp")}),document.getElementById("pvc-btn")?.addEventListener("click",()=>{this.showAIDifficultyMenu()}),document.getElementById("settings-btn")?.addEventListener("click",()=>{this.showSettings()}),document.getElementById("help-btn")?.addEventListener("click",()=>{this.showHelp()})}showAIDifficultyMenu(){const e=document.getElementById("screen-container");if(!e)return;e.innerHTML=`
      <div class="menu-screen">
        <button class="back-button" id="back-btn" style="align-self: flex-start; margin-bottom: 1.25rem;">← Back to Menu</button>
        <h2 class="menu-title">🤖 Select AI Difficulty</h2>
        <div class="difficulty-selector">
          <button class="difficulty-button active" data-diff="easy">Easy</button>
          <button class="difficulty-button" data-diff="medium">Medium</button>
          <button class="difficulty-button" data-diff="hard">Hard</button>
        </div>
        <p style="color: #ccc; text-align: center; margin: 1.25rem 0;">
          <span id="diff-desc">Easy: AI makes random valid moves</span>
        </p>
        <button class="menu-button" id="start-ai-btn">Start Game</button>
      </div>
    `;let a="easy";const s=document.querySelectorAll(".difficulty-button"),t=document.getElementById("diff-desc"),r={easy:"Easy: AI makes random valid moves",medium:"Medium: AI tries to maximize flips",hard:"Hard: AI uses advanced strategy"};s.forEach(i=>{i.addEventListener("click",()=>{s.forEach(o=>o.classList.remove("active")),i.classList.add("active"),a=i.getAttribute("data-diff"),t&&(t.textContent=r[a])})}),document.getElementById("back-btn")?.addEventListener("click",()=>{this.showMenu()}),document.getElementById("start-ai-btn")?.addEventListener("click",()=>{this.startNewGame("pvc",a)})}showSettings(){const e=document.getElementById("screen-container");e&&(this.currentScreen="settings",e.innerHTML=`
      <button class="back-button" id="back-btn" style="margin-bottom: 0.9375rem;">← Back to Menu</button>
      <div class="settings-screen">
        <h2 style="color: #00ff7f; margin-bottom: 1.25rem;">⚙️ Settings</h2>
        
        <div class="settings-group">
          <h3>Visual Settings</h3>
          <label>
            <input type="checkbox" id="show-valid" checked> Show valid moves
          </label>
          <label>
            <input type="checkbox" id="show-last" checked> Highlight last move
          </label>
          <label>
            <input type="checkbox" id="animations" checked> Enable animations
          </label>
        </div>
        
        <div class="settings-group">
          <h3>Game Settings</h3>
          <label>
            <input type="checkbox" id="auto-pass" checked> Auto-pass when no moves
          </label>
          <label>
            <input type="checkbox" id="confirm-moves"> Confirm moves (vs Computer)
          </label>
        </div>
        
        <button class="menu-button" id="save-settings" style="margin-top: 1.25rem;">
          Save Settings
        </button>
      </div>
    `,document.getElementById("back-btn")?.addEventListener("click",()=>{this.showMenu()}),document.getElementById("save-settings")?.addEventListener("click",()=>{const a={showValid:document.getElementById("show-valid")?.checked,showLast:document.getElementById("show-last")?.checked,animations:document.getElementById("animations")?.checked,autoPass:document.getElementById("auto-pass")?.checked,confirmMoves:document.getElementById("confirm-moves")?.checked};localStorage.setItem("reversi-settings",JSON.stringify(a)),alert("Settings saved!"),this.showMenu()}))}showHelp(){const e=document.getElementById("screen-container");e&&(this.currentScreen="help",e.innerHTML=`
      <button class="back-button" id="back-btn" style="margin-bottom: 0.9375rem;">← Back to Menu</button>
      <div class="help-screen">
        <h2>❓ How to Play Reversi</h2>
        
        <h3>🎯 Objective</h3>
        <p>Have the most pieces when the game ends.</p>
        
        <h3>📋 Rules</h3>
        <ul>
          <li>Black moves first</li>
          <li>Capture pieces between yours</li>
          <li>Can capture in 8 directions</li>
          <li>Must capture at least 1 piece</li>
          <li>Pass if no valid moves</li>
          <li>Game ends when no moves left</li>
        </ul>
        
        <h3>💡 Strategy</h3>
        <ul>
          <li><strong>Corners:</strong> Can't be flipped!</li>
          <li><strong>Edges:</strong> Harder to flip</li>
          <li><strong>Mobility:</strong> Limit opponent moves</li>
          <li><strong>Patience:</strong> Less can be more</li>
        </ul>
        
        <h3>🎮 Controls</h3>
        <ul>
          <li>Click highlighted cells to move</li>
          <li>Green = valid moves</li>
          <li>Gold = last move</li>
        </ul>
      </div>
    `,document.getElementById("back-btn")?.addEventListener("click",()=>{this.showMenu()}))}startNewGame(e,a="easy"){this.gameState={board:this.createInitialBoard(),currentPlayer:d,blackScore:2,whiteScore:2,gameMode:e,isGameOver:!1,validMoves:new Set,moveHistory:[],aiDifficulty:a},this.updateValidMoves(),this.showGameScreen(),this.updateDisplay()}createInitialBoard(){const e=new Array(64).fill(y);return e[27]=m,e[28]=d,e[35]=d,e[36]=m,e}showGameScreen(){const e=document.getElementById("screen-container");if(!e||!this.gameState)return;this.currentScreen="game";const a=document.getElementById("game-header");a&&(a.style.display="flex");const s=this.gameState.gameMode==="pvp"?"Player vs Player":`Player vs AI (${this.gameState.aiDifficulty})`;e.innerHTML=`
      <div class="game-screen">
        <div class="game-controls">
          <button class="back-button" id="back-btn">← Back to Menu</button>
        </div>
        <div class="game-info">
          <div>Mode: ${s}</div>
          <div id="turn-indicator">Current Turn: <span style="color: #ffd700;">Black</span></div>
          <div id="ai-status"></div>
        </div>
        <div class="game-board" id="game-board"></div>
        <div id="game-over-modal" style="display: none;"></div>
      </div>
    `,this.createBoardCells(),document.getElementById("back-btn")?.addEventListener("click",()=>{confirm("Are you sure you want to quit the current game?")&&this.showMenu()})}createBoardCells(){const e=document.getElementById("game-board");if(!(!e||!this.gameState)){e.innerHTML="";for(let a=0;a<64;a++){const s=document.createElement("div");s.className="board-cell",s.dataset.position=a.toString(),s.addEventListener("click",()=>{!this.isProcessingMove&&!this.aiThinking&&this.handleCellClick(a)}),e.appendChild(s)}this.renderBoard()}}renderBoard(){if(!this.gameState)return;const e=this.getSettings();for(let a=0;a<64;a++){const s=document.querySelector(`[data-position="${a}"]`);if(s){if(s.className="board-cell",e.showValid&&this.gameState.validMoves.has(a)&&s.classList.add("valid-move"),e.showLast&&this.gameState.moveHistory.length>0){const t=this.gameState.moveHistory[this.gameState.moveHistory.length-1];t&&t.position===a&&s.classList.add("last-move")}if(s.innerHTML="",this.gameState.board[a]!==y){const t=document.createElement("div");t.className=`piece ${this.gameState.board[a]===d?"piece-black":"piece-white"}`,s.appendChild(t)}}}}getSettings(){const e=localStorage.getItem("reversi-settings");return e?JSON.parse(e):{showValid:!0,showLast:!0,animations:!0,autoPass:!0,confirmMoves:!1}}handleCellClick(e){if(!this.gameState||this.gameState.isGameOver||!this.gameState.validMoves.has(e))return;const a=this.getSettings();this.gameState.gameMode==="pvc"&&this.gameState.currentPlayer===d&&a.confirmMoves&&!confirm("Confirm this move?")||this.makeMove(e)}makeMove(e){if(!this.gameState)return;this.isProcessingMove=!0;const a=this.getFlippedPieces(e,this.gameState.currentPlayer),s={corner:e===0||e===7||e===56||e===63,edge:this.isEdgePosition(e),massive:a.length>=10,chain:this.isChainMove(a),comeback:this.isComebackMove(),domination:this.isDominationMove()},t=this.particleSystem.calculateGrade(a.length,e,s),r=document.querySelector(`[data-position="${e}"]`);if(r){const o=r.getBoundingClientRect(),n=this.container.getBoundingClientRect(),c=o.left+o.width/2-n.left,h=o.top+o.height/2-n.top;this.particleSystem.triggerMoveEffect(c,h,t,a.length,s),s.chain&&this.particleSystem.createChainEffect(c,h),this.showGradeIndicator(t,c,h)}if(this.gameState.moveHistory.push({position:e,player:this.gameState.currentPlayer,flipped:a}),this.triggerScreenShake(t),this.gameState.board[e]=this.gameState.currentPlayer,r){const o=document.createElement("div");o.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"} placing`,r.innerHTML="",r.appendChild(o)}this.getSettings().animations?setTimeout(()=>{this.flipPiecesWithEffects(a,t);const o=a.length*80+300;setTimeout(()=>{this.afterMove()},o)},200):(this.flipPiecesWithEffects(a,t),this.afterMove())}showGradeIndicator(e,a,s){const t=document.createElement("div");switch(t.style.position="absolute",t.style.left=`${a}px`,t.style.top=`${s-50}px`,t.style.transform="translateX(-50%)",t.style.fontSize="3rem",t.style.fontWeight="bold",t.style.zIndex="200",t.style.pointerEvents="none",t.style.animation="gradePopup 1s ease-out forwards",e){case"SSS":t.textContent="SSS",t.style.color="#ff0080",t.style.textShadow="0 0 1.875rem #ff0080, 0 0 3.75rem #ff69b4",t.style.fontSize="3.5rem",t.style.animation="gradePopup 2s ease-out forwards, rainbow 2s infinite";break;case"SS":t.textContent="SS",t.style.color="#9932cc",t.style.textShadow="0 0 1.5625rem #9932cc, 0 0 3.125rem #8b00ff",t.style.fontSize="3.25rem",t.style.animation="gradePopup 1.5s ease-out forwards, glow 1.5s infinite";break;case"S":t.textContent="S",t.style.color="#ff69b4",t.style.textShadow="0 0 1.25rem #ff69b4",t.style.fontSize="3rem";break;case"A":t.textContent="A",t.style.color="#ffd700",t.style.textShadow="0 0 1.25rem #ffd700";break;case"B":t.textContent="B",t.style.color="#00ff7f",t.style.textShadow="0 0 0.9375rem #00ff7f";break;case"C":t.textContent="C",t.style.color="#888888",t.style.textShadow="0 0 0.625rem #888888";break}if(!document.getElementById("grade-animation-style")){const r=document.createElement("style");r.id="grade-animation-style",r.textContent=`
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
      `,document.head.appendChild(r)}this.container?.appendChild(t),setTimeout(()=>{t.remove()},1e3)}flipPiecesWithEffects(e,a){if(!this.gameState)return;const s=this.getSettings();e.forEach((t,r)=>{setTimeout(()=>{this.gameState.board[t]=this.gameState.currentPlayer;const i=document.querySelector(`[data-position="${t}"]`);if(i){const o=i.getBoundingClientRect(),n=this.container.getBoundingClientRect(),c=o.left+o.width/2-n.left,h=o.top+o.height/2-n.top,u=this.gameState.currentPlayer===d?"#000000":"#ffffff";this.particleSystem.createFlipEffect(c,h,u,a);const l=i.querySelector(".piece");l&&s.animations?(l.classList.add("flipping"),setTimeout(()=>{l.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"}`},250)):l&&(l.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"}`)}},r*80)})}flipPieces(e){if(!this.gameState)return;const a=this.getSettings();e.forEach(s=>{this.gameState.board[s]=this.gameState.currentPlayer;const t=document.querySelector(`[data-position="${s}"]`);if(t){const r=t.querySelector(".piece");r&&a.animations?(r.classList.add("flipping"),setTimeout(()=>{r.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"}`},250)):r&&(r.className=`piece ${this.gameState.currentPlayer===d?"piece-black":"piece-white"}`)}})}afterMove(){this.gameState&&(this.updateScores(),this.gameState.currentPlayer=this.gameState.currentPlayer===d?m:d,this.updateValidMoves(),this.checkGameStatus()||(this.updateDisplay(),this.gameState.gameMode==="pvc"&&this.gameState.currentPlayer===m&&this.makeAIMove()),this.isProcessingMove=!1)}updateValidMoves(){if(this.gameState){this.gameState.validMoves.clear();for(let e=0;e<64;e++)this.gameState.board[e]===y&&this.isValidMove(e,this.gameState.currentPlayer)&&this.gameState.validMoves.add(e)}}isValidMove(e,a){if(!this.gameState||this.gameState.board[e]!==y)return!1;for(const[s,t]of M)if(this.checkDirection(e,a,s||0,t||0).length>0)return!0;return!1}checkDirection(e,a,s,t){if(!this.gameState)return[];const r=[],i=Math.floor(e/8),o=e%8,n=a===d?m:d;let c=i+t,h=o+s;for(;c>=0&&c<8&&h>=0&&h<8;){const u=c*8+h;if(this.gameState.board[u]===y)return[];if(this.gameState.board[u]===n)r.push(u);else return r.length>0?r:[];c+=t,h+=s}return[]}getFlippedPieces(e,a){const s=[];for(const[t,r]of M){const i=this.checkDirection(e,a,t,r);s.push(...i)}return s}updateScores(){if(!this.gameState)return;let e=0,a=0;for(const s of this.gameState.board)s===d?e++:s===m&&a++;this.gameState.blackScore=e,this.gameState.whiteScore=a}checkGameStatus(){if(!this.gameState)return!1;if(this.gameState.validMoves.size===0){if(this.gameState.currentPlayer=this.gameState.currentPlayer===d?m:d,this.updateValidMoves(),this.gameState.validMoves.size===0)return this.gameOver(),!0;if(this.getSettings().autoPass){const a=this.gameState.currentPlayer===d?"Black":"White";this.showMessage(`No valid moves - passing to ${a}`)}}return!1}gameOver(){if(!this.gameState)return;this.gameState.isGameOver=!0;let e,a;this.gameState.blackScore>this.gameState.whiteScore?(e="Black Wins!",a="#000"):this.gameState.whiteScore>this.gameState.blackScore?(e="White Wins!",a="#fff"):(e="It's a Tie!",a="#ffd700");const s=document.getElementById("game-over-modal");s&&(s.style.display="block",s.className="game-over-modal",s.innerHTML=`
        <h2 class="game-over-title">🏆 Game Over!</h2>
        <div class="final-scores">
          <p style="font-size: 2.25rem; color: ${a}; margin: 1.25rem 0;">
            ${e}
          </p>
          <p>⚫ Black: ${this.gameState.blackScore}</p>
          <p>⚪ White: ${this.gameState.whiteScore}</p>
          <p style="margin-top: 1.25rem; font-size: 1.125rem;">
            Total moves: ${this.gameState.moveHistory.length}
          </p>
        </div>
        <div class="modal-buttons">
          <button class="menu-button" id="play-again">Play Again</button>
          <button class="menu-button" id="main-menu">Main Menu</button>
        </div>
      `,document.getElementById("play-again")?.addEventListener("click",()=>{s.style.display="none",this.startNewGame(this.gameState.gameMode,this.gameState.aiDifficulty)}),document.getElementById("main-menu")?.addEventListener("click",()=>{s.style.display="none",this.showMenu()}))}updateDisplay(){if(!this.gameState)return;document.getElementById("black-score").textContent=`⚫ Black: ${this.gameState.blackScore}`,document.getElementById("white-score").textContent=`⚪ White: ${this.gameState.whiteScore}`;const e=this.gameState.currentPlayer===d?"Black":"White";document.getElementById("current-turn").innerHTML=`Current: <span style="color: ${this.gameState.currentPlayer===d?"#000":"#fff"};">${e}</span>`;const a=document.getElementById("turn-indicator");if(a){const s=this.gameState.currentPlayer===d?"#000":"#fff";a.innerHTML=`Current Turn: <span style="color: ${s}; font-weight: bold;">${e}</span>`}this.renderBoard()}showMessage(e){const a=document.getElementById("ai-status");a&&(a.textContent=e,setTimeout(()=>{a.textContent=""},2e3))}triggerScreenShake(e){if(!this.container||!this.getSettings().animations)return;let s=0,t=0;switch(e){case"SSS":s=20,t=1200;break;case"SS":s=16,t=1e3;break;case"S":s=12,t=800;break;case"A":s=6,t=500;break;case"B":s=3,t=300;break;case"C":return}const r=this.container.querySelector(".super-reversi-app");if(r){if(r.style.animation=`shake ${t}ms ease-in-out`,!document.getElementById("shake-animation")){const i=document.createElement("style");i.id="shake-animation",i.textContent=`
          @keyframes shake {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            10% { transform: translate(-${s}px, -${s/2}px) rotate(-1deg); }
            20% { transform: translate(${s}px, -${s}px) rotate(1deg); }
            30% { transform: translate(-${s}px, ${s/2}px) rotate(0deg); }
            40% { transform: translate(${s}px, ${s}px) rotate(1deg); }
            50% { transform: translate(-${s/2}px, -${s}px) rotate(-1deg); }
            60% { transform: translate(${s/2}px, ${s}px) rotate(0deg); }
            70% { transform: translate(-${s/2}px, ${s/2}px) rotate(-1deg); }
            80% { transform: translate(${s/2}px, -${s/2}px) rotate(1deg); }
            90% { transform: translate(-${s/4}px, ${s/4}px) rotate(0deg); }
          }
        `,document.head.appendChild(i)}setTimeout(()=>{r.style.animation=""},t)}}makeAIMove(){if(!this.gameState||this.gameState.validMoves.size===0)return;this.aiThinking=!0;const e=document.getElementById("ai-status");e&&(e.innerHTML='<span class="ai-thinking">AI is thinking...</span>'),setTimeout(()=>{const a=this.selectAIMove();a!==-1&&this.makeMove(a),e&&(e.textContent=""),this.aiThinking=!1},800)}selectAIMove(){if(!this.gameState)return-1;const e=Array.from(this.gameState.validMoves);if(e.length===0)return-1;switch(this.gameState.aiDifficulty){case"easy":return this.selectRandomMove(e);case"medium":return this.selectGreedyMove(e);case"hard":return this.selectStrategicMove(e);default:return e[0]??0}}selectRandomMove(e){return e[Math.floor(Math.random()*e.length)]??0}selectGreedyMove(e){if(!this.gameState)return e[0]??0;let a=e[0]??0,s=0;for(const t of e){const r=this.getFlippedPieces(t,m).length;r>s&&(s=r,a=t)}return a}selectStrategicMove(e){if(!this.gameState)return e[0]??0;const a=[120,-20,20,5,5,20,-20,120,-20,-40,-5,-5,-5,-5,-40,-20,20,-5,15,3,3,15,-5,20,5,-5,3,3,3,3,-5,5,5,-5,3,3,3,3,-5,5,20,-5,15,3,3,15,-5,20,-20,-40,-5,-5,-5,-5,-40,-20,120,-20,20,5,5,20,-20,120];let s=e[0]??0,t=-1e3;for(const r of e){const i=this.getFlippedPieces(r,m).length,n=(a[r]??0)+i*10;n>t&&(t=n,s=r)}return s}isEdgePosition(e){const a=Math.floor(e/8),s=e%8;return(a===0||a===7||s===0||s===7)&&!(e===0||e===7||e===56||e===63)}isChainMove(e){return!this.gameState||this.gameState.moveHistory.length===0?!1:this.gameState.moveHistory[this.gameState.moveHistory.length-1]?.flipped?.length>=3&&e.length>=3}isComebackMove(){return this.gameState?(this.gameState.currentPlayer===d?this.gameState.blackScore-this.gameState.whiteScore:this.gameState.whiteScore-this.gameState.blackScore)<=-5:!1}isDominationMove(){return this.gameState?(this.gameState.currentPlayer===d?this.gameState.blackScore-this.gameState.whiteScore:this.gameState.whiteScore-this.gameState.blackScore)>=10:!1}}document.addEventListener("DOMContentLoaded",async()=>{const p=document.getElementById("game-container");if(p)try{const e=new x;await e.initialize(p),window.superReversiGame=e}catch(e){p.innerHTML=`
        <div style="padding: 1.25rem; color: red;">
          <h2>Error Loading Game</h2>
          <p>${e}</p>
        </div>
      `}});
//# sourceMappingURL=index-q95SlCaL.js.map
