import os

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="100%" height="100%">
  <defs>
    <style>
      .navy { fill: #072152; }
      .royal { fill: #005ce6; }
      .brand-text {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-weight: 600;
        fill: #072152;
        font-size: 68px;
        letter-spacing: -0.5px;
      }
    </style>
  </defs>

  <!-- Left Head -->
  <circle cx="377" cy="288" r="73" class="navy" />

  <!-- Right Head -->
  <circle cx="647" cy="288" r="73" class="royal" />

  <!-- Left Figure / Student -->
  <path class="navy" d="
    M 320 380
    C 320 338 340 330 375 342
    L 512 418
    L 512 472
    L 382 405
    L 382 480
    C 420 480 475 505 504 555
    C 470 545 380 540 320 530
    Z
  " />

  <!-- Right Figure / Tutor -->
  <path class="royal" d="
    M 704 380
    C 704 338 684 330 649 342
    L 512 418
    L 512 472
    L 642 405
    L 642 480
    C 604 480 549 505 520 555
    C 554 545 644 540 704 530
    Z
  " />

  <!-- Brand Text -->
  <text x="512" y="700" text-anchor="middle" class="brand-text">Naveen Home tuitions</text>
</svg>'''

os.makedirs('/app/applet/public/assets', exist_ok=True)
with open('/app/applet/public/assets/logo.svg', 'w') as f:
    f.write(svg_content)

print("SVG created successfully at public/assets/logo.svg")
