from pathlib import Path
from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "assets" / "map" / "palpagos-world-map.webp"
OUTPUT = ROOT / "assets" / "map" / "palpagos-world-map-4096.webp"


with Image.open(SOURCE) as image:
    if image.size != (8192, 8192):
        raise SystemExit(f"Unexpected source dimensions: {image.size}")
    optimized = image.convert("RGB").resize((4096, 4096), Image.Resampling.LANCZOS)
    optimized.save(OUTPUT, "WEBP", quality=86, method=6)

print(f"Wrote {OUTPUT.relative_to(ROOT)} ({OUTPUT.stat().st_size:,} bytes)")
