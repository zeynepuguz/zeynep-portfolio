# Portföyü GitHub Pages'e Yükleme (Deploy)

## 1. Tek komutla deploy

Proje klasöründe (terminalde `zeynep-portfolio` içindeyken):

```bash
npm run deploy
```

Bu komut:
- Önce `npm run build` ile projeyi derler (dist klasörü oluşur)
- Sonra `gh-pages` ile `dist` içeriğini GitHub’daki **gh-pages** branch’ine yükler

---

## 2. Sık karşılaşılan sorunlar ve çözümleri

### "dist folder not found" / Build çalışmıyor

- Önce build’i ayrı çalıştırın: `npm run build`
- Hata alırsanız: `npm install` yapıp tekrar `npm run build` deneyin.

### Git remote yok / "remote origin does not appear to be a git repository"

Reponun GitHub’a bağlı olduğundan emin olun:

```bash
git remote -v
```

Çıktıda `origin` ve `https://github.com/zeynepuguz/zeynep-portfolio` (veya `.git`’li hali) görünmeli.

Yoksa ekleyin:

```bash
git remote add origin https://github.com/zeynepuguz/zeynep-portfolio.git
```

(Repo adı farklıysa kendi kullanıcı adı ve repo adınızı yazın.)

### Giriş / yetki hatası (Authentication failed, 403)

GitHub artık şifre ile push kabul etmiyor. İki yol var:

**A) Personal Access Token (HTTPS ile)**

1. GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**  
2. **Generate new token** → repo yetkisi verin.  
3. Token’ı kopyalayın (bir daha gösterilmez).  
4. `npm run deploy` çalıştırdığınızda:
   - **Username:** GitHub kullanıcı adınız  
   - **Password:** Token’ı yapıştırın (şifre değil).

**B) SSH kullanmak**

1. SSH key oluşturup GitHub’a ekleyin.  
2. Remote’u SSH’a çevirin:

```bash
git remote set-url origin git@github.com:zeynepuguz/zeynep-portfolio.git
```

Sonra tekrar: `npm run deploy`

### Site açılmıyor / 404

- Adres tam olarak şu olmalı: **https://zeynepuguz.github.io/zeynep-portfolio/**  
- Repo adı farklıysa: `https://<kullanici-adin>.github.io/<repo-adin>/`  
- GitHub’da repo → **Settings** → **Pages** → **Source:** “Deploy from a branch” → **Branch:** `gh-pages` → **Save**.  
- İlk deploy’dan sonra 1–2 dakika bekleyin.

---

## 3. Özet adımlar

1. Proje klasöründe: `npm run deploy`  
2. Giriş istenirse: GitHub kullanıcı adı + **Personal Access Token** (şifre yerine).  
3. Birkaç dakika sonra: **https://zeynepuguz.github.io/zeynep-portfolio/** adresinden kontrol edin.

Bu adımları uyguladıktan sonra hâlâ hata alırsanız, tam hata mesajını (ve mümkünse ekran görüntüsünü) paylaşırsanız ona göre devam edebiliriz.
