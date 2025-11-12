# Sharyu Component - README

## ✅ Component Name

**SharyuComponent**

## 📌 Purpose of Component

This Angular component demonstrates the use of **ngClass** and **event binding** to dynamically change CSS classes based on a boolean value.
When the user clicks the button, the text color toggles between **green** and **red**.

---

## 📂 Files Involved

| File Name               | Description                           |
| ----------------------- | ------------------------------------- |
| `sharyu.component.ts`   | Contains component logic (TypeScript) |
| `sharyu.component.html` | Contains UI structure (HTML)          |
| `sharyu.component.css`  | Contains styling rules (CSS classes)  |

---

## 🧠 How It Works

### ✅ TypeScript Logic (`sharyu.component.ts`)

* A boolean variable `isActive` is used to determine which CSS class to apply.
* `ChangeColor()` toggles `isActive` between `true` and `false` every time the button is clicked.

### ✅ HTML (`sharyu.component.html`)

* Uses Angular directive **[ngClass]** to apply green or red CSS class dynamically.
* Includes a button with click event binding `(click)` to trigger the class change.

### ✅ CSS (`sharyu.component.css`)

* Has two classes `green` and `red` defining different text colors.

---

## 🔧 Code Overview

### HTML

```html
<h1 [ngClass]="{'green' : isActive == true, 'red' : isActive == false}">Hii my name is Sharyu</h1>
<button (click)="ChangeColor()">Change Color</button>
```

### TypeScript

```ts
export class SharyuComponent {
  isActive = false;

  ChangeColor() {
    this.isActive = !this.isActive;
  }
}
```

### CSS

```css
.red {
  color: red;
}

.green {
  color: green;
}
```

---

## 🚀 Output Behavior

| Action                | Result                                     |
| --------------------- | ------------------------------------------ |
| Initial state         | Text appears in **red** color              |
| After clicking button | Text toggles between **green** and **red** |

---

## 🔁 How to Use This Component

1. Ensure this component is declared inside `app.module.ts`.
2. Add its selector in any HTML file where you want it to appear:

```html
<app-sharyu></app-sharyu>
```

---

### ✅ End of File
