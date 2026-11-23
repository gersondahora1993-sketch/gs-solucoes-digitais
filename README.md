# ⚡ GS Soluções Digitais — Portfólio

Site estático de divulgação: **+20 sistemas prontos** com demonstração via WhatsApp.
Feito para vender no WhatsApp, Instagram e TikTok.

🌐 Demo local: `http://localhost:8080`
📲 WhatsApp: https://wa.me/5522997870184
📸 Instagram: https://instagram.com/gs.devbr

## Estrutura

```
.
├── index.html  → página principal
├── styles.css  → tema dark responsivo
├── app.js      → 20 sistemas + filtros + links WhatsApp
└── logo.png    → logo + favicon
```

## Rodar local

```powershell
# Python (sem instalar nada)
python -m http.server 8080
# abrir http://localhost:8080
```

Ou arraste a pasta para Vercel / Netlify para ganhar link público.

## Personalizar

- WhatsApp: troque `5522997870184` em `index.html` e `app.js:1` (`const WA`)
- Sistemas: edite o array `items` em `app.js:2-22`
- Categorias: edite `cats` em `app.js:23`
- Bio Instagram: botão `copyBio` em `index.html:99` + `app.js:45-48`

## Segmentos atendidos

Lojas de roupas, academia, personal, lava jato, estética automotiva, barbearia, delivery (hamburgueria, lanchonete, pizzaria, sorveteria, açaiteria), distribuidora de doces, depósito de bebidas e gás, padaria, peças, supermercado, material de construção, confeitaria, utilidades, climatização e mais.

## Deploy grátis (2 min)

1. Crie conta em vercel.com ou netlify.com
2. Suba este repo / arraste a pasta
3. Cole o link na bio do Instagram/TikTok

© 2026 GS Soluções Digitais
