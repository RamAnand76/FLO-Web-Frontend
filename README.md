# 🌐 Portfolio Builder - Frontend (Next.js + Tailwind CSS)

This is the frontend of the **Portfolio Website Automation Platform** built using **Next.js** and **Tailwind CSS**. It allows users to:

* View and manage dashboard analytics
* Create or import portfolio templates
* Build a profile through a multi-section form

---

## 🚀 Tech Stack

* **Framework**: [Next.js](https://nextjs.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: React Icons, Lucide React
* **Language**: TypeScript

---

## 📁 Project Structure

```
.
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── DropdownMenu.tsx
│   ├── ActionCard.tsx
│   ├── MetricCard.tsx
│   ├── PortfolioCard.tsx
│   └── TemplateCard.tsx
│
├── forms/                # Modular form sections
│   ├── ProfileForm.tsx
│   ├── EducationForm.tsx
│   ├── ExperienceForm.tsx
│   └── CertificationForm.tsx
│
├── pages/                # Route pages
│   ├── index.tsx         # Dashboard
│   ├── profile.tsx       # Profile builder
│   ├── templates.tsx     # Template browser
│   ├── settings.tsx
│   ├── _app.tsx          # Custom App
│   ├── _document.tsx     # Custom Document
│   └── 404.tsx
│
├── styles/
│   └── globals.css       # Tailwind styles
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/your-org/portfolio-builder.git
cd portfolio-builder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Tailwind CSS

Already configured. Ensure the following exists:

* `tailwind.config.js`
* `postcss.config.js`
* Tailwind imports in `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 🌟 Contribution Guidelines

* Always **create a new branch** when working on a new page or feature.
* If a branch like `dev_{branch_name}` already exists, it means someone is working on that page. Do **not** edit directly on that branch.
* Preferred branch naming:

  * `main` – clean stable production
  * `production` – deployment
  * `dev` – integration branch
  * `dev_index`, `dev_profile`, `dev_templates` – page-specific work

### 📘 Git Commands to Use

```bash
# Clone the repository
git clone https://github.com/your-org/portfolio-builder.git

# Create and switch to a new branch
git checkout -b dev_{feature_name}

# Stage changes
git add .

# Commit your changes
git commit -m "feat: implemented {feature_name} page"

# Push the new branch
git push origin dev_{feature_name}
```

* Run `npm run lint` before PRs.
* Keep components modular and reusable.

---

## ✅ Todos

* [x] Create base layout
* [x] Setup routing to 3 core pages
* [x] Build dropdown menu logic
* [x] Setup Tailwind properly
* [ ] Connect backend API (WIP)

---
