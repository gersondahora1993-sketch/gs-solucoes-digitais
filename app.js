const WA = "https://wa.me/5522997870184?text=";
const items = [
{c:"Food & Delivery",i:"🍔",t:"Delivery Hamburgueria / Lanchonete / Pizzaria",d:"Cardápio com fotos, carrinho, cupons, checkout no WhatsApp. Base pronta estilo iFood.",tech:["Flutter","WhatsApp","Cupons"]},
{c:"Food & Delivery",i:"🍦",t:"Sorveteria & Açaiteria",d:"Montagem de copos/potes, adicionais, tamanhos, entrega + retirada. Ideal p/ stories.",tech:["Flutter","PDV","Delivery"]},
{c:"Food & Delivery",i:"🍰",t:"Confeitaria & Doceria",d:"Encomendas, catálogo, bolo no pote, festa. Pedido direto no WhatsApp.",tech:["Catálogo","WhatsApp","Encomendas"]},
{c:"Food & Delivery",i:"🥖",t:"Padaria PDV",d:"Venda por KG/UN, caixa rápido, cupom térmico 58/80mm, PWA mobile-first.",tech:["PWA","Supabase","Cupom térmico"]},
{c:"Varejo",i:"👗",t:"Loja de Roupas",d:"Variação cor/tamanho, estoque, vendas, dashboard + botão WhatsApp. Ex: Nyellen Fashion, Impera Modas.",tech:["React","Node","SQLite"]},
{c:"Varejo",i:"🥫",t:"Supermercado PDV",d:"Frente de caixa rápido, código de barras, fiado, fechamento de caixa.",tech:["PDV","Estoque","Caixa"]},
{c:"Varejo",i:"🧱",t:"Material de Construção",d:"Orçamento, venda por metro/unidade, entrega, contas a receber.",tech:["Orçamento","Entrega","Financeiro"]},
{c:"Varejo",i:"🧴",t:"Loja de Utilidades",d:"Catálogo geral, promoções, multi-empresa. Plataforma SaaS pronta.",tech:["SaaS","Multi-loja","Promoções"]},
{c:"Varejo",i:"🔩",t:"Loja de Peças em Geral",d:"Busca por peça/compatibilidade, orçamento, fiado, lucro por venda.",tech:["React","Supabase","Orçamento"]},
{c:"Beleza",i:"💈",t:"Barbearia",d:"Agendamento online, fila, comissão barbeiro, lembrete no WhatsApp.",tech:["Node","Agendamento","WhatsApp"]},
{c:"Automotivo",i:"🚗",t:"Lava Jato & Estética Automotiva",d:"Check-in/out com fotos ANTES/DURANTE/DEPOIS, acompanhamento realtime p/ cliente + financeiro.",tech:["Next.js","Supabase","Fotos"]},
{c:"Fitness",i:"💪",t:"Academia",d:"Planos, matrícula, catraca, avaliação, financeiro recorrente.",tech:["Gestão","Planos","Financeiro"]},
{c:"Fitness",i:"🏋️",t:"Personal Trainer",d:"Treinos A-E, avaliação IMC, evolução com gráficos, financeiro em PDF, 100% offline.",tech:["Flutter","Offline","PDF"]},
{c:"Distribuidoras",i:"🍬",t:"Distribuidora de Doces",d:"Lotes, atacado por faixa, vendas, loja pública. Ex: EG Souza.",tech:["React","Atacado","Lotes"]},
{c:"Distribuidoras",i:"🥤",t:"Depósito de Bebidas",d:"Estoque, engradados/retornáveis, rota de entrega, WhatsApp.",tech:["Estoque","Rota","WhatsApp"]},
{c:"Distribuidoras",i:"🔥",t:"Depósito de Gás",d:"Pedido rápido, área de entrega, marketing automático com vídeo vertical 9x16.",tech:["Python","Vídeo Auto","Delivery"]},
{c:"Serviços",i:"❄️",t:"Climatização / Ar-condicionado",d:"Ordem de serviço, orçamento visita, manutenção preventiva, garantia.",tech:["OS","Orçamento","Agenda"]},
{c:"Esporte",i:"📊",t:"Análise Esportiva",d:"Props NBA, futebol 104 ligas, Poisson, odds, dashboard live.",tech:["API ESPN","Probabilidades","Live"]},
{c:"SaaS",i:"🏢",t:"Plataforma Comercial SaaS",d:"Multiempresa, super-admin + loja pública, billing/trial. Base p/ qualquer nicho.",tech:["SaaS","Postgres","Multi-tenant"]},
];
const cats = ["Todos","Food & Delivery","Varejo","Beleza","Automotivo","Fitness","Distribuidoras","Serviços","Esporte","SaaS"];
const grid=document.getElementById('grid'), filters=document.getElementById('filters');
let active="Todos";
function renderFilters(){
  filters.innerHTML="";
  cats.forEach(c=>{
    const b=document.createElement('button');
    b.textContent=c; if(c===active)b.classList.add('on');
    b.onclick=()=>{active=c;renderFilters();render()};
    filters.appendChild(b);
  });
}
function render(){
  grid.innerHTML="";
  items.filter(x=>active==="Todos"||x.c===active).forEach(s=>{
    const el=document.createElement('div'); el.className="card";
    el.innerHTML=`<div class="icon">${s.i}</div><h3>${s.t}</h3><p>${s.d}</p><div class="tags">${s.tech.map(t=>`<span>${t}</span>`).join('')}</div><a class="btn btn-wa" target="_blank" href="${WA+encodeURIComponent('Olá! Quero demonstração do sistema: '+s.t)}">Pedir demonstração</a>`;
    grid.appendChild(el);
  });
}
renderFilters();render();
document.getElementById('track').innerHTML = "🍔 DELIVERY &nbsp;•&nbsp; 💈 BARBEARIA &nbsp;•&nbsp; 🚗 LAVA JATO &nbsp;•&nbsp; 👗 LOJA DE ROUPAS &nbsp;•&nbsp; 🏋️ PERSONAL &nbsp;•&nbsp; 🥖 PADARIA &nbsp;•&nbsp; 🍬 DISTRIBUIDORA &nbsp;•&nbsp; 🔥 DEPÓSITO DE GÁS &nbsp;•&nbsp; 📊 ANÁLISE ESPORTIVA &nbsp;•&nbsp; ❄️ CLIMATIZAÇÃO &nbsp;•&nbsp; ".repeat(3);
document.getElementById('copyBio').onclick=()=>{
  const bio="⚡ GS Soluções Digitais\n🚀 Sistemas p/ delivery, loja, barbearia, lava jato, academia e + \n📲 Demonstração gratuita 👇\nhttps://wa.me/5522997870184";
  navigator.clipboard.writeText(bio); alert("Bio copiada! Cola no Instagram/TikTok.");
};
