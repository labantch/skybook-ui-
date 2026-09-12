# SkyBook Luxury Airways – Frontend Website

Premium multi-page airline booking experience (static HTML + Tailwind CSS + vanilla JS).

## Pages included

| File | Description |
|------|-------------|
| `index.html` | Homepage / Flight search |
| `flights.html` | Flight search results & fare selection |
| `seats.html` | Interactive seat map |
| `passenger-details.html` | Passenger information form |
| `confirm-payment.html` | Review & payment |
| `my-bookings.html` | User bookings management |
| `account.html` | Login / Sign up |
| `profile.html` | User profile & preferences |
| `about.html` | About SkyBook |
| `skyclub.html` | SkyClub & Private Aviation |
| `management.html` | Admin / Operations Console (demo) |

## How to deploy on GitHub Pages

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it e.g. `skybook` or `skybook-website`
   - Keep it **Public**
   - Do **not** add a README (we already have one)

2. **Upload this folder**
   - On the new repo page click **“uploading an existing file”**
   - Drag & drop **all files and the `assets` folder** from this project
   - Commit the changes

   **Or use Git locally:**
   ```bash
   git init
   git add .
   git commit -m "Initial SkyBook website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to **Settings → Pages**
   - Under **Source** choose **Deploy from a branch**
   - Branch: `main` / folder: `/ (root)`
   - Click **Save**

4. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

## Local preview

Just open `index.html` in any modern browser, or use a simple local server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit http://localhost:8000

## Notes

- All styling is done with **Tailwind CSS** (CDN) + a few page-specific styles.
- The `assets/css` and `assets/js` files are lightweight placeholders (the real logic lives inside each HTML file).
- `management.html` is a full admin console demo (login with `admin@skybook.com` + any password).
- This is a frontend-only demo – no real backend or payment processing.

---

© 2026 SkyBook Airways – Luxury demo project
