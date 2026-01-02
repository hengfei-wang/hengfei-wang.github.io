---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- Toolbar: Download / Open -->
<style>
  .cv-toolbar{ padding:12px; background:#f7f7f7; border:1px solid #eee; margin-bottom:12px; display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
  .cv-btn{ display:inline-block; padding:8px 12px; background:#0070f3; color:#fff; text-decoration:none; border-radius:6px; font-weight:500; }
  .cv-note{ color:#555; font-size:0.95rem; }
  .cv-updated{ color:#333; font-size:0.95rem; margin:8px 0 12px 0; }
  .pdf-wrap{ width:100%; height:calc(100vh - 180px); min-height:400px; }
  @media (max-width:700px){ .pdf-wrap{ height:60vh; } }
</style>

<div class="cv-toolbar">
  <a class="cv-btn" href="{{ '/files/CV.pdf' | relative_url }}" target="_blank" rel="noopener" download>Download PDF</a>
  <a class="cv-btn" href="{{ '/files/CV.pdf' | relative_url }}" target="_blank" rel="noopener">Open in new window</a>
</div>

<!-- Update timestamp -->
<div class="cv-updated" aria-hidden="false">Last updated: January 2026</div>

<div class="pdf-wrap" role="document" aria-label="Curriculum Vitae">
  <!-- Use object to embed, with iframe as additional fallback -->
  <object data="{{ '/files/CV.pdf' | relative_url }}" type="application/pdf" width="100%" height="100%">
    <iframe src="{{ '/files/CV.pdf' | relative_url }}" width="100%" height="100%" style="border:0;">
      <p>Your browser does not support embedded PDFs. Please <a href="{{ '/files/CV.pdf' | relative_url }}" target="_blank" rel="noopener">click here to open or download the CV</a>.</p>
    </iframe>
  </object>
</div>
