(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o={productName:"NCR Reorder Control Pack",siteUrl:"https://samuelfrench.github.io/form-reorder-passive-site/",description:"Static workbook, printable PDFs, CSV templates, proof checklist, vendor quote form, and pad/carton labels for sequentially numbered NCR and carbonless form reorders.",previewImagePath:"./ncr-reorder-control-pack-preview.svg",previewImageUrl:"https://samuelfrench.github.io/form-reorder-passive-site/ncr-reorder-control-pack-preview.png",price:"99.00",currency:"USD"};function p(s){const r=(s==null?void 0:s.trim())||o.siteUrl,i={"@context":"https://schema.org","@type":"Product",name:o.productName,description:o.description,image:o.previewImageUrl,brand:{"@type":"Brand",name:o.productName},offers:{"@type":"Offer",price:o.price,priceCurrency:o.currency,url:r,availability:"https://schema.org/InStock"}};return JSON.stringify(i)}const l=["NCR-Reorder-Control-Workbook.xlsx","NCR-Proof-Checklist.pdf","NCR-Reorder-Trigger-Sheet.pdf","NCR-Vendor-Quote-Form.pdf","Pad-Labels.pdf","Carton-Labels.pdf","form-id-ledger-template.csv","number-range-template.csv","label-data-template.csv"],d=["Form ID Ledger","Number Range Tracker","Reorder Trigger Sheet","Vendor Quote Form","Label Data"];function u(s){return"#checkout-not-ready"}function h(s){const r=u(),i=r.startsWith("#")?"Checkout link pending":"Buy the pack",n=r.startsWith("#")?void 0:r;return`
    <script type="application/ld+json">${p(n)}<\/script>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero__copy">
        <p class="eyebrow">Sequential NCR control system</p>
        <h1 id="page-title">Stop guessing the next carbonless form number.</h1>
        <p class="lede">
          A static reorder workbook and printable proof pack for print shops, copy centers,
          brokers, and operators who repeat numbered NCR jobs.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="${r}">${i}</a>
          <a class="button button--secondary" href="./Free-NCR-Proof-Checklist.pdf">Free NCR Proof Checklist</a>
        </div>
      </div>
      <figure class="product-preview">
        <img
          src="${o.previewImagePath}"
          alt="Preview of the NCR Reorder Control Pack workbook, range tracker, and labels"
          width="1200"
          height="630"
        />
      </figure>
    </section>

    <section class="strip" aria-label="Business case">
      <div><strong>$99</strong><span>one-time download</span></div>
      <div><strong>6 sales</strong><span>clears about $500 before refunds at headline Lemon Squeezy fees</span></div>
      <div><strong>0 endpoints</strong><span>static files, checkout link, no hosted app support burden</span></div>
    </section>

    <section class="section section--grid" aria-labelledby="inside-title">
      <div>
        <p class="eyebrow">What is inside</p>
        <h2 id="inside-title">Workbook, labels, PDFs, and CSV templates.</h2>
        <p>
          The pack is built around repeat orders: identify the form, record the prior range,
          calculate the next start, prepare the proof, label the pads, and request the vendor quote.
        </p>
      </div>
      <div class="artifact-list">
        ${l.map(e=>`<span>${e}</span>`).join("")}
      </div>
    </section>

    <section class="section sheet-section" aria-labelledby="workbook-title">
      <div>
        <p class="eyebrow">Workbook sheets</p>
        <h2 id="workbook-title">Built for range control, not bookkeeping advice.</h2>
      </div>
      <ol class="sheet-list">
        ${d.map(e=>`<li>${e}</li>`).join("")}
      </ol>
    </section>

    <section class="section boundary" aria-labelledby="support-title">
      <p class="eyebrow">Support scope</p>
      <h2 id="support-title">Support is limited by design.</h2>
      <p>
        Supported: download access, print layout, and broken formulas.
      </p>
      <p>
        No tax, receipt-law, payment, imposition, or numbering setup advice. No press settings,
        paper chemistry, record-retention guidance, custom imports, or vendor negotiation.
      </p>
    </section>

    <section class="section checkout-note" id="checkout-not-ready" aria-labelledby="checkout-title">
      <p class="eyebrow">Checkout</p>
      <h2 id="checkout-title">Lemon Squeezy product connection point.</h2>
      <p>
        The static site is ready for a hosted checkout URL. Set the checkout environment value when
        the $99 product is created, then the primary CTA will go straight to purchase.
      </p>
    </section>
  `}const c=document.querySelector("#app");if(!c)throw new Error("App root element was not found.");c.innerHTML=h();
//# sourceMappingURL=index-CnBfmLl5.js.map
