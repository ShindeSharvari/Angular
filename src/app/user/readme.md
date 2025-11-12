# User Component - README

## ✅ Component Name

**UserComponent**

## 📌 Purpose of Component

This Angular component demonstrates the use of multiple structural directives:

* `*ngIf` with `else`
* `ngSwitch`
* `*ngFor`

It also displays a user list inside a table using `*ngFor`, and conditionally shows content based on boolean values and emoji selection.

---

## 📂 Files Involved

| File Name             | Description                           |
| --------------------- | ------------------------------------- |
| `user.component.ts`   | Contains component logic (TypeScript) |
| `user.component.html` | Contains UI structure (HTML)          |
| `user.component.css`  | For styling the component (CSS)       |

---

## 🧠 Concepts Used

| Angular Concept  | Explanation                                         |
| ---------------- | --------------------------------------------------- |
| `*ngIf` + `else` | Shows different content based on boolean value      |
| `ngSwitch`       | Displays content based on emoji value               |
| `*ngFor`         | Loops through `users[]` array to display table rows |

---

## 🔧 Code Overview

### ✅ HTML (`user.component.html`)

```html
<h2>All Users</h2>
<h1 style="align-items: center;" *ngIf="isBoolean else Sharvari">Hii I am True 😎</h1>
<ng-template #Sharvari>
    <h1>Hii I am False 🤔</h1>
</ng-template>

<div class="show" [ngSwitch]="fruitEmoji">
    <h1 *ngSwitchCase="'🍎'">Apple🍎</h1>
    <h1 *ngSwitchCase="'🍍'">PineApple🍍</h1>
    <h1 *ngSwitchCase="'🥭'">Mango🥭</h1>
    <h1 *ngSwitchCase="'🍉'">Watermelon🍉</h1>
    <h1 *ngSwitchCase="'🍓'">Strawberry🍓</h1>
    <h1 *ngSwitchDefault>Cheery🍒</h1>
</div>

<table border="1" cellspacing="0px" cellpading="0px">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let item of users">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.city}}</td>
        </tr>
    </tbody>
</table>
```

### ✅ TypeScript (`user.component.ts`)

```ts
export class UserComponent {

  isBoolean: boolean = false;
  fruitEmoji = '🍉';

  users = [
    { id: 1, name: "Sharvari", age: 24, city: "Pune" },
    { id: 2, name: "Sakshi", age: 21, city: "Nashik" },
    { id: 3, name: "Rakhi", age: 22, city: "Mumbai" },
    { id: 4, name: "Ganesh", age: 22, city: "Latur" },
    { id: 5, name: "Omkar", age: 20, city: "Pune" },
    { id: 6, name: "Aniket", age: 26, city: "Satara" }
  ];
}
```

---

## 🚀 Output Behavior

| Directive Used   | What Happens                                                         |
| ---------------- | -------------------------------------------------------------------- |
| `*ngIf` + `else` | Shows **True 😎** or **False 🤔** message based on `isBoolean` value |
| `ngSwitch`       | Shows a fruit name based on selected emoji                           |
| `*ngFor`         | Loops and displays user details in a table                           |

---

## 🔁 How to Use This Component

1. Ensure the component is declared in `app.module.ts`.
2. Use this selector inside `app.component.html`:

```html
<app-user></app-user>
```

---

### ✅ End of File
