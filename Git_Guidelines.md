# ============================================

# Connect Local Project to Existing GitHub Repo

# ============================================

## 1. Initialize Git inside your local project

```bash
git init
```

## 2. Add all project files

```bash
git add .
```

## 3. Commit the initial project

```bash
git commit -m "Initial React + Vite + Tailwind v4 setup"
```

## 4. Add the GitHub remote (your existing repo)

```bash
git remote add origin https://github.com/JavierBautistaOrtigosa/react-foundations.git
```

## 5. Push your local project to GitHub

```bash
git push -u origin main
```

### If GitHub rejects because the repo has no `main` branch yet:

Use this instead:

```bash
git push -u origin HEAD:main
```

### If your default branch is `master` instead of `main`:

```bash
git push -u origin master
```

## 6. Verify everything is connected

```bash
git remote -v
```

## You should see:

```
origin  https://github.com/JavierBautistaOrtigosa/react-foundations.git (fetch)
origin  https://github.com/JavierBautistaOrtigosa/react-foundations.git (push)
```
