# Portföyü GitHub Pages'e Yükleme (Deploy)

GitHub Pages’in çalışması için **3 şey** aynı anda doğru olmalı. Biri yanlışsa site açılmaz veya bozuk görünür.

---

## ✅ 1. GitHub Pages ayarı (branch / folder)

Repo’da: **Settings** → **Pages**

Şunlar **aynen** böyle olmalı:

| Ayar    | Değer              |
|---------|--------------------|
| Source  | **Deploy from a branch** |
| Branch  | **gh-pages**       |
| Folder  | **/(root)**        |

**Save** de.  
❌ **main** veya **docs** seçili olmasın.  
❌ GitHub Actions ile deploy kullanmayın; sadece **gh-pages** branch’i kullanın.

---

## ✅ 2. Vite base (yol) ayarı

Site adresin: `https://zeynepuguz.github.io/zeynep-portfolio/`

Bunun için `vite.config.js` içinde **mutlaka** şu satır olmalı:

```js
base: "/zeynep-portfolio/"
```

Bu yoksa veya yanlışsa: sayfa açılır ama CSS/JS yüklenmez → boş veya 404.

*(Projede bu ayar zaten var.)*

---

## ✅ 3. Deploy komutu (build + gh-pages)

Proje klasöründe:

```bash
npm run deploy
```

Bu komut:
1. `npm run build` → `dist` oluşturur  
2. `gh-pages -d dist` → `dist` içeriğini **gh-pages** branch’inin **köküne** yükler  

Yani **gh-pages** branch’inde kökte `index.html` ve `assets/` olur. Pages bu branch’ten yayınladığı için site buradan servis edilir.

---

## 🔍 4. “Olmuyor” diyorsan: 4 hızlı kontrol

### Kontrol 1: Yayınlanan yerde index.html var mı?

- GitHub’da repo → **Code** → branch listesinden **gh-pages** seç.
- Kök dizinde **index.html** dosyası görünüyor mu?
  - ✅ Varsa: dosya yüklemesi doğru.
  - ❌ Yoksa: `npm run deploy` tekrar çalıştır; hata mesajı varsa düzelt.

### Kontrol 2: Pages ayarı ne?

- **Settings** → **Pages**
- **Source:** Deploy from a branch  
- **Branch:** **gh-pages**  
- **Folder:** **/(root)**  

Bunlardan biri farklıysa düzelt, **Save** de.

### Kontrol 3: Vite base var mı?

- `vite.config.js` içinde `base: "/zeynep-portfolio/"` satırı var mı?
  - ✅ Varsa: asset yolları doğru.
  - ❌ Yoksa: ekle, `npm run deploy` tekrar çalıştır.

### Kontrol 4: Adres ve cache

- Açman gereken adres: **https://zeynepuguz.github.io/zeynep-portfolio/**  
  (sonunda `/` olsun.)
- İlk deploy’dan sonra 1–2 dakika bekleyin.
- Hâlâ eski/boş sayfa görüyorsan: **Ctrl+Shift+R** (zorla yenile) veya gizli pencerede dene.

---

## Giriş hatası (Authentication failed / 403)

GitHub artık şifre ile push kabul etmiyor. **Personal Access Token** kullanın:

1. GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**  
2. **Generate new token (classic)** → **repo** işaretli olsun → oluştur, token’ı kopyalayın.  
3. `npm run deploy` çalıştırın.  
4. Username: GitHub kullanıcı adınız  
5. Password: **Token’ı yapıştırın** (şifre değil).

---

## Özet (tek hamle)

1. **Settings → Pages:** Source: **Deploy from a branch**, Branch: **gh-pages**, Folder: **/(root)** → Save.  
2. **vite.config.js:** `base: "/zeynep-portfolio/"` var mı kontrol et (zaten var).  
3. Terminalde: `npm run deploy`  
4. Giriş istenirse: kullanıcı adı + **Personal Access Token**.  
5. 1–2 dakika sonra: **https://zeynepuguz.github.io/zeynep-portfolio/** adresinden kontrol et.

Bu adımlardan sonra hâlâ “ısrarla olmuyor” dersen, şu iki bilgiyi yaz:  
- Settings → Pages’te **hangi branch** seçili? (gh-pages mi, main mi?)  
- **gh-pages** branch’inde kökte **index.html** görünüyor mu? (Evet/Hayır)

Bu iki cevapla nokta atışı çözülebilir.
