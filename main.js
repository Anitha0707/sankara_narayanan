(function(){
const S=window.SITE,P=window.PLANS,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// fill contact fields
$$('[data-site]').forEach(e=>{const k=e.dataset.site;if(S[k])e.textContent=S[k]});
$$('[data-phone]').forEach(e=>{const p=S.phones[+e.dataset.phone];e.textContent=p;e.href='tel:+91'+p.replace(/\s/g,'')});
$$('[data-wa]').forEach(e=>e.href='https://wa.me/'+S.whatsapp+'?text='+encodeURIComponent('Hello Sir, I would like to know about LIC plans.'));
$$('[data-mail]').forEach(e=>{e.href='mailto:'+S.email;e.textContent=S.email});
$$('[data-fb]').forEach(e=>e.href=S.facebook);

// phone numbers: [0] WhatsApp, [1] calls only; years of service
$$('[data-wanum]').forEach(e=>{e.href='https://wa.me/'+S.whatsapp;const s=$('span',e);if(s)s.textContent=S.phones[0]});
$$('[data-callnum]').forEach(e=>{e.href='tel:+91'+S.phones[1].replace(/\s/g,'');const s=$('span',e);if(s)s.textContent='Call '+S.phones[1]});
$$('[data-years]').forEach(e=>e.textContent=S.years);
// plan cards: provider tabs, LIC top-6 with "show all", category filter
const grid=$('#planGrid'),chips=$('#chips'),tabs=$('#provTabs'),more=$('#moreBtn');
let prov='LIC',all=false,cat='All';
const lic=P.filter(x=>x.prov==='LIC');
tabs.innerHTML=window.PROVIDERS.map((n,i)=>`<button class="tab${i?'':' on'}" data-p="${n}">${n}</button>`).join('');
chips.innerHTML=window.PLAN_CATS.map((c,i)=>`<button class="chip${i?'':' on'}" data-c="${c}">${c}</button>`).join('');
function render(){
 let list=P.filter(x=>x.prov===prov);
 if(prov==='LIC'){
  if(!all) list=window.FEATURED_LIC.map(id=>lic.find(x=>x.id===id)).filter(Boolean);
  else if(cat!=='All') list=list.filter(x=>x.cat===cat||(cat==='New'&&x.isNew));
 }
 chips.hidden=!(prov==='LIC'&&all);
 more.hidden=prov!=='LIC';
 more.textContent=all?'Show top '+window.FEATURED_LIC.length+' only':'Show all '+lic.length+' LIC plans';
 grid.innerHTML=list.map(p=>`<article class="card plan" tabindex="0" data-id="${p.id}">${p.isNew?'<span class="badge">NEW</span>':''}<div class="ico">${p.icon}</div><small>${p.cat==='New'?'New launch':p.cat}</small><h3>${p.name}</h3><p>${p.short}</p><em>${p.launch||p.no}</em><button class="link">View details →</button></article>`).join('');
}
tabs.addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;prov=b.dataset.p;all=false;cat='All';$$('.tab',tabs).forEach(x=>x.classList.toggle('on',x===b));$$('.chip',chips).forEach((x,i)=>x.classList.toggle('on',!i));render()});
chips.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;cat=b.dataset.c;$$('.chip',chips).forEach(x=>x.classList.toggle('on',x===b));render()});
more.addEventListener('click',()=>{all=!all;cat='All';$$('.chip',chips).forEach((x,i)=>x.classList.toggle('on',!i));render()});
render();
// modal
const m=$('#modal'),mb=$('#modalBody');
function open(id){const p=P.find(x=>x.id===id);
 mb.innerHTML=`<small>${p.prov==='LIC'?p.no+' · ':p.prov+' · '}${p.cat==='New'?'New launch':p.cat}</small><h3>${p.icon} ${p.name}</h3><p class="muted">${p.type}</p>${p.launch?`<p class="launch">${p.launch}</p>`:""}<dl>${p.facts.map(f=>`<dt>${f[0]}</dt><dd>${f[1]}</dd>`).join('')}</dl><div class="btns"><a class="btn gold" target="_blank" rel="noopener" href="https://wa.me/${S.whatsapp}?text=${encodeURIComponent('Hello Sir, please share details and a quote for '+p.name+' ('+p.no+').')}">Ask on WhatsApp</a><a class="btn ghost" href="tel:+91${S.phones[1].replace(/\s/g,'')}">Call now</a></div><p class="fine">Indicative summary only. Features, eligibility and premiums vary – please read the official brochure or policy wording before buying.</p>`;
 m.hidden=false;document.body.classList.add('lock');$('.x',m).focus();}
function close(){m.hidden=true;document.body.classList.remove('lock')}
grid.addEventListener('click',e=>{const c=e.target.closest('.plan');if(c)open(c.dataset.id)});
grid.addEventListener('keydown',e=>{if(e.key==='Enter'){const c=e.target.closest('.plan');if(c)open(c.dataset.id)}});
m.addEventListener('click',e=>{if(e.target===m||e.target.classList.contains('x'))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();lb.hidden=true}});
// gallery lightbox
const lb=$('#lightbox'),lbi=$('img',lb);
$$('.gal img').forEach(i=>i.addEventListener('click',()=>{lbi.src=i.src;lbi.alt=i.alt;lb.hidden=false}));
lb.addEventListener('click',()=>lb.hidden=true);
// nav
$('#burger').addEventListener('click',()=>$('#nav').classList.toggle('open'));
$$('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
// enquiry form -> WhatsApp
$('#enq').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);
 const t=`Hello Sir, I am ${f.get('name')} (${f.get('phone')}). Interested in: ${f.get('plan')}. ${f.get('msg')||''}`;
 window.open('https://wa.me/'+S.whatsapp+'?text='+encodeURIComponent(t),'_blank')});
$('#plan').innerHTML+=P.map(p=>`<option>${p.name}</option>`).join('');
$('#yr').textContent=new Date().getFullYear();
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
})();
