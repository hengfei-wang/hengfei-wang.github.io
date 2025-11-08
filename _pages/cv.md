---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- 工具栏：下载 / 在新窗口打开 -->
<style>
  .cv-toolbar{ padding:12px; background:#f7f7f7; border:1px solid #eee; margin-bottom:12px; display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
  .cv-btn{ display:inline-block; padding:8px 12px; background:#0070f3; color:#fff; text-decoration:none; border-radius:6px; font-weight:500; }
  .cv-note{ color:#555; font-size:0.95rem; }
  .pdf-wrap{ width:100%; height:calc(100vh - 140px); min-height:400px; }
  @media (max-width:700px){ .pdf-wrap{ height:60vh; } }
</style>

<div class="cv-toolbar">
  <a class="cv-btn" href="{{ '/files/CV.pdf' | relative_url }}" target="_blank" rel="noopener" download>下载 PDF</a>
  <a class="cv-btn" href="{{ '/files/CV.pdf' | relative_url }}" target="_blank" rel="noopener">新窗口打开</a>
  <div class="cv-note">若浏览器无法内嵌显示 PDF，请使用上面的“下载”或“新窗口打开”。移动设备上通常会在系统查看器打开。</div>
</div>

<div class="pdf-wrap" role="document" aria-label="Curriculum Vitae">
  <!-- 使用 object 嵌入，支持后备内容 -->
  <object data="{{ '/files/CV.pdf' | relative_url }}" type="application/pdf" width="100%" height="100%">
    <!-- 部分老旧或受限环境会忽略 object，这里提供 iframe 作为额外尝试 -->
    <iframe src="{{ '/files/CV.pdf' | relative_url }}" width="100%" height="100%" style="border:0;">
      <!-- 最终后备：纯文本链接 -->
      <p>浏览器无法内嵌显示 PDF。请 <a href="{{ '/files/CV.pdf' | relative_url }}" target="_blank" rel="noopener">点击这里在新窗口打开或下载 CV.pdf</a>。</p>
    </iframe>
  </object>
</div>
