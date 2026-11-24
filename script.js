{
const input=document.getElementById('wunschzeit');
const out=document.getElementById('arrival'),day=document.getElementById('daynote'),com=document.getElementById('comment');
function calc(v){
  const p=(v||'09:00').split(':'),h=parseInt(p[0],10)||0,m=p[1]||'00',raw=h+8,ah=raw%24;
  out.textContent=String(ah).padStart(2,'0')+':'+m;
  day.textContent=raw>=24?'am nächsten Tag (natürlich)':'am selben Tag – ein kleines Wunder';
  let c;
  if(ah>=16&&ah<21)c='Perfekt: genau zum Sonnenuntergang. Papa ist zufrieden, die Söhne frieren.';
  else if(ah>=21)c='Stirnlampen sind eingepackt. Die Nachbarn werden begeistert sein.';
  else if(ah<6)c='Wir kommen mitten in der Nacht. Bitte Haustür offen lassen und Kaffee bereitstellen.';
  else c='Tagsüber?! Höchst ungewöhnlich. Wir warten sicherheitshalber im Auto, bis die Sonne untergeht.';
  com.textContent=c;
}
input.addEventListener('input',()=>calc(input.value));
document.querySelectorAll('.preset').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.t;calc(b.dataset.t);}));
calc(input.value);
}
