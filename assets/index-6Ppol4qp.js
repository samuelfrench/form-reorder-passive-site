(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=["NCR-Reorder-Control-Workbook.xlsx","NCR-Proof-Checklist.pdf","NCR-Reorder-Trigger-Sheet.pdf","NCR-Vendor-Quote-Form.pdf","Pad-Labels.pdf","Carton-Labels.pdf","form-id-ledger-template.csv","number-range-template.csv","label-data-template.csv"],d=["Form ID Ledger","Number Range Tracker","Reorder Trigger Sheet","Vendor Quote Form","Label Data"];function l(n){return"#checkout-not-ready"}function p(n){const o=l(),s=o.startsWith("#")?"Checkout link pending":"Buy the pack";return`
    <section class="hero" aria-labelledby="page-title">
      <div class="hero__copy">
        <p class="eyebrow">Sequential NCR control system</p>
        <h1 id="page-title">Stop guessing the next carbonless form number.</h1>
        <p class="lede">
          A static reorder workbook and printable proof pack for print shops, copy centers,
          brokers, and operators who repeat numbered NCR jobs.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="${o}">${s}</a>
          <a class="button button--secondary" href="/Free-NCR-Proof-Checklist.pdf">Free NCR Proof Checklist</a>
        </div>
      </div>
      <div class="job-ticket" aria-label="Product preview">
        <div class="job-ticket__topline">
          <span>FORM ID</span>
          <strong>NCR-042</strong>
        </div>
        <dl class="job-ticket__rows">
          <div><dt>Prior range</dt><dd>1001-1500</dd></div>
          <div><dt>Next start</dt><dd>1501</dd></div>
          <div><dt>Pads</dt><dd>10 x 50 sets</dd></div>
          <div><dt>Status</dt><dd>Proof ready</dd></div>
        </dl>
        <p class="stamp">Range checked</p>
      </div>
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
        ${c.map(r=>`<span>${r}</span>`).join("")}
      </div>
    </section>

    <section class="section sheet-section" aria-labelledby="workbook-title">
      <div>
        <p class="eyebrow">Workbook sheets</p>
        <h2 id="workbook-title">Built for range control, not bookkeeping advice.</h2>
      </div>
      <ol class="sheet-list">
        ${d.map(r=>`<li>${r}</li>`).join("")}
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
  `}const a=document.querySelector("#app");if(!a)throw new Error("App root element was not found.");a.innerHTML=p();
//# sourceMappingURL=index-6Ppol4qp.js.map
