// Client testimonials. Add/edit entries here. Only publish with each client's consent.
window.TESTIMONIALS=[
 {name:"T. Dhananjayan",place:"Trichy",text:"Excellent service and very friendly guidance. All my doubts about LIC policies were explained clearly. Thank you for your valuable support!"},
 {name:"R. Vijaya",place:"Tirunelveli",text:"A very trustworthy and helpful LIC advisor. I received clear information to help me choose a policy suitable for my family’s needs."},
 {name:"Vijayan V.",place:"Chennai",text:"Very responsive and professional service. Whenever I have a question, I receive proper guidance and support. Highly appreciated!"},
 {name:"V. Sudharsan",place:"Trichy",text:"Helped me understand the importance of financial protection for my family. I really appreciate the patience and care shown throughout the process."},
 {name:"Janaki T.",place:"U.S.A.",text:"Every detail was explained in simple words, making it easy for me to understand the policy benefits, premiums, and terms. Great experience!"},
 {name:"R. Janakiraman",place:"Chennai",text:"A sincere and dedicated LIC agent who values customers and provides helpful guidance. Truly appreciate the professional approach."},
 {name:"R. Mahendran",place:"Thanjavur",text:"From choosing a policy to understanding the documentation, the support was very helpful. Thank you for making the process smooth!"},
 {name:"Ruben Shyam P.M",place:"U.S.A.",text:"Very polite, approachable, and dedicated to customer service. I appreciate the time taken to understand my needs and explain suitable options."},
 {name:"G. Leela Devi",place:"Chennai",text:"The guidance and assistance provided throughout the policy process were reassuring. A dependable advisor who genuinely cares about customers."},
 {name:"A. Antonyraj",place:"Singapore",text:"Thank you for your excellent guidance, friendly communication, and continued support. I truly appreciate the dedication and commitment to customer service."}
];
(function(){
const T=window.TESTIMONIALS,$=s=>document.querySelector(s);
const ini=n=>n.replace(/[^A-Za-z ]/g,' ').trim().split(/\s+/).filter(w=>w.length>1||true).slice(-2).map(w=>w[0]).join('').toUpperCase();
const card=t=>`<figure class="card tcard rv"><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“${t.text}”</blockquote><figcaption><span class="av">${ini(t.name)}</span><span><strong>${t.name}</strong><small>📍 ${t.place}</small></span></figcaption></figure>`;
const g=$('#tGrid'),tz=$('#tTeaser');
if(g)g.innerHTML=T.map(card).join('');
if(tz)tz.innerHTML=T.slice(0,3).map(card).join('');
// standalone-page extras (the home page handles these in main.js)
if(g){const S=window.SITE;
 document.querySelectorAll('[data-wa]').forEach(e=>e.href='https://wa.me/'+S.whatsapp+'?text='+encodeURIComponent('Hello Sir, I would like to know about LIC plans.'));
 document.querySelectorAll('[data-callnum]').forEach(e=>{e.href='tel:+91'+S.phones[1].replace(/\s/g,'');const s=e.querySelector('span');if(s)s.textContent='Call '+S.phones[1]});
 document.querySelectorAll('[data-fb]').forEach(e=>e.href=S.facebook);
 const b=$('#burger'),n=$('#nav');b.addEventListener('click',()=>n.classList.toggle('open'));
 $('#yr').textContent=new Date().getFullYear();}
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.tcard.rv').forEach(e=>io.observe(e));
})();
