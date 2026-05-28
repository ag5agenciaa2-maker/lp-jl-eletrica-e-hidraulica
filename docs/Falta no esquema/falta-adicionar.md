# 📋 Falta Adicionar no Schema

**Empresa:** JL Elétrica e Hidráulica | Manutenção Elétrica | Quadro Elétrico com IDR | Perfil de LED | Hidráulica Residencial | Tomadas e Interruptores | Betim MG
**Data de geração:** 28/05/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `email` — Não informado pelo cliente. Necessário para formulário, rodapé e schema.
- [ ] `geo.latitude` / `geo.longitude` — Coordenadas estimadas pelo endereço (R. Jaguarão, 806, São Luiz, Betim/MG). Confirmar com Google Business Profile quando disponível: https://maps.google.com

## 🟡 IMPORTANTES

- [ ] `sameAs` Google Business Profile — Cliente ainda não possui perfil cadastrado. Recomendar abertura do perfil para SEO local e captura de avaliações.
- [ ] `sameAs` Facebook — Página da empresa no Facebook não informada.
- [ ] `sameAs` LinkedIn — Não aplicável para pequeno serviço local, salvo solicitação.
- [ ] `aggregateRating` — Cliente ainda não tem avaliações públicas. Reativar este bloco assim que o Google Business Profile estiver ativo e com reviews.

## 🔵 COMPLEMENTARES

- [ ] `legalName` — Razão social não informada.
- [ ] `foundingDate` — Data de fundação não informada.
- [ ] `founder.name` — Nome do proprietário (JL) não informado. Bloco `founder` omitido até receber o dado.
- [ ] `founder.image` — Foto do responsável não disponível.
- [ ] `founder.sameAs` — Instagram pessoal do responsável não informado.
- [ ] `priceRange` — Faixa de preço não declarada pelo cliente.
- [ ] `paymentAccepted` — Formas de pagamento aceitas não informadas (cartão, Pix, boleto, dinheiro).
- [ ] `image` — Fotos reais da equipe, da fachada e de serviços executados não disponíveis. Atualmente o schema usa apenas o logo. Substituir por foto principal real quando entregue.
- [ ] CNPJ — Não informado. Útil para rodapé e credibilidade institucional.
- [ ] Registro CREA — Diferencial técnico não informado.

## 🟢 FAQ

- [x] Seção FAQ presente no site com 6 perguntas. Schema FAQPage gerado e ativo.

---

## ✅ Resolvidos Automaticamente

- [x] `@type` — Definido como array `["Electrician", "Plumber"]` pelo escopo duplo do negócio.
- [x] `name` — JL Elétrica e Hidráulica.
- [x] `alternateName` — Otimizado com serviços principais e cidade.
- [x] `url` — https://jleletricaehidraulica.ag5agencia.site/ (deploy ativo Cloudflare Pages + TLS Google CA · 28/05/2026)
- [x] `slug` — jleletricaehidraulica
- [x] `telephone` — +5531975718568 (formato E.164).
- [x] `contactPoint` — WhatsApp marcado como `customer service`, idioma português, atendimento BR.
- [x] `address` — R. Jaguarão, 806 · São Luiz · Betim/MG · 32675-616.
- [x] `geo.latitude` / `geo.longitude` — Derivadas do endereço: -19.9763 / -44.2114 (validar quando o Google Business existir).
- [x] `openingHoursSpecification` — Segunda a sábado, 09:00 às 18:00.
- [x] `areaServed` — Betim/MG + bairros adjacentes a São Luiz: Jardim das Alterosas, Citrolândia, Centro, Angola, Imbiruçu.
- [x] `hasOfferCatalog` — 5 serviços extraídos da seção de zig-zag do site.
- [x] `sameAs` — Instagram oficial.
- [x] `WebSite`, `WebPage`, `FAQPage` — Blocos auxiliares gerados.

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o valor no Schema dentro de `index.html` e revalidar em https://validator.schema.org/
📌 **NAP** (Nome · Endereço · Telefone) deve ser idêntico ao Google Business Profile assim que o perfil for criado.
📌 **Prioridade imediata:** ativar o Google Business Profile da JL — isso destrava `aggregateRating`, coordenadas verificadas e o primeiro item de `sameAs`.
