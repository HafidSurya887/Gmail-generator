# Generator Alias Gmail

Ubah satu Gmail jadi banyak alamat alias. Semua email tetap masuk ke inbox Gmail aslimu.

- **Plus (+)**: `nama+impulse1@gmail.com`
- **Titik (.)**: `n.ama@gmail.com`
- **Keduanya**: gabungan titik dan plus

Situs statis, tanpa backend, tanpa data yang dikirim ke mana pun. Bisa dipasang ke layar utama HP (PWA) dan jalan offline.

## Struktur

```
index.html
assets/style.css
assets/app.js
assets/favicon.svg
manifest.webmanifest
sw.js
vercel.json
package.json
```

## Jalankan lokal

```
npm run dev
```

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Di vercel.com pilih **Add New > Project**, lalu pilih repo.
3. Framework: **Other**. Build command dan output directory dikosongkan. Klik **Deploy**.

## Catatan

- Login tetap pakai password Gmail asli. Alias tidak punya password sendiri.
- Tombol "Masuk dengan Google" hanya jalan dengan Gmail asli.
- Sebagian situs menormalisasi email dan menolak alias. Coba jenis alias lain.
- Jangan dipakai untuk membuat banyak akun demi bonus atau promo, itu biasanya melanggar aturan layanan.
