(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const l={},p="https://samuelfrench.github.io/form-reorder-passive-site/";function d(o){const e=o==null?void 0:o.trim();if(!e)return p;const i=e.startsWith("https://")?e:`https://${e}`,r=new URL(i);if(r.protocol!=="https:")throw new Error("Site URL must use https.");return r.pathname=r.pathname==="/"?"/":`${r.pathname.replace(/\/+$/,"")}/`,r.search="",r.hash="",r.toString()}function u(o){const e=d(o);return{productName:"NCR Reorder Control Pack",siteUrl:e,description:"Downloadable workbook, printable PDFs, CSV templates, proof checklist, vendor quote form, and pad/carton labels for sequentially numbered NCR and carbonless form reorders.",previewImagePath:"./ncr-reorder-control-pack-preview.svg",previewImageUrl:new URL("ncr-reorder-control-pack-preview.png",e).toString(),price:"99.00",currency:"USD"}}function h(){return typeof l=="object"?"https://printworkflowpacks.com/":void 0}const a=u(h());function f(o,e=a){const i=(o==null?void 0:o.trim())||e.siteUrl,r={"@context":"https://schema.org","@type":"Product",name:e.productName,description:e.description,image:e.previewImageUrl,brand:{"@type":"Brand",name:e.productName},offers:{"@type":"Offer",price:e.price,priceCurrency:e.currency,url:i,availability:"https://schema.org/InStock"}};return JSON.stringify(r)}const b=["NCR-Reorder-Control-Workbook.xlsx","NCR-Proof-Checklist.pdf","NCR-Reorder-Trigger-Sheet.pdf","NCR-Vendor-Quote-Form.pdf","Pad-Labels.pdf","Carton-Labels.pdf","form-id-ledger-template.csv","number-range-template.csv","label-data-template.csv"],m=["Form ID Ledger","Number Range Tracker","Reorder Trigger Sheet","Vendor Quote Form","Label Data"];function g(o){return"#inside-title"}function y(o){const e=g(),i=e.startsWith("#")?"View what is inside":"Buy the pack",r=e.startsWith("#")?void 0:e;return`
    <script type="application/ld+json">${f(r)}<\/script>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero__copy">
        <p class="eyebrow">Sequential NCR control system</p>
        <h1 id="page-title">NCR Reorder Control Pack</h1>
        <p class="lede">
          Stop guessing the next carbonless form number. This downloadable workbook and
          printable proof pack is for print shops, copy centers, brokers, and operators
          who repeat numbered NCR jobs.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="${e}">${i}</a>
          <a class="button button--secondary" href="./Free-NCR-Proof-Checklist.pdf">Free NCR Proof Checklist</a>
        </div>
      </div>
      <figure class="product-preview">
        <img
          src="${a.previewImagePath}"
          alt="Preview of the NCR Reorder Control Pack workbook, range tracker, and labels"
          width="1200"
          height="630"
        />
      </figure>
    </section>

    <section class="strip" aria-label="Product summary">
      <div><strong>$99</strong><span>One-time digital download.</span></div>
      <div><strong>XLSX workbook</strong><span>Ledger, range tracker, reorder trigger, quote form, and label data.</span></div>
      <div><strong>Proof PDFs</strong><span>Checklist, trigger sheet, quote form, pad labels, and carton labels.</span></div>
      <div><strong>CSV templates</strong><span>Form ID, number range, and label data templates.</span></div>
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
        ${b.map(t=>`<span>${t}</span>`).join("")}
      </div>
    </section>

    <section class="section sheet-section" aria-labelledby="workbook-title">
      <div>
        <p class="eyebrow">Workbook sheets</p>
        <h2 id="workbook-title">Built for range control, not bookkeeping advice.</h2>
      </div>
      <ol class="sheet-list">
        ${m.map(t=>`<li>${t}</li>`).join("")}
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

    <section class="section checkout-note" aria-labelledby="delivery-title">
      <p class="eyebrow">Delivery model</p>
      <h2 id="delivery-title">Hosted digital delivery after purchase.</h2>
      <p>
        The $99 ZIP is a one-time digital download. After purchase, the checkout provider
        delivers the file and receipt. This site explains the contents, support boundary,
        and free checklist before purchase.
      </p>
    </section>
  `}const c=document.querySelector("#app");if(!c)throw new Error("App root element was not found.");c.innerHTML=y();
//# sourceMappingURL=index-CX9eFWI_.js.map
