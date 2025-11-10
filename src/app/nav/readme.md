✅ NavComponent — Navigation Bar Component
Detail	Description
Location	src/app/nav/nav.component.ts / nav.component.html
Purpose	This component represents the main navigation bar of the application.
Features	Displays logo, navigation links, and accepts user input using Angular two-way binding.
🔹 What this component does:

Shows a logo name (TechRel) dynamically using Angular property binding.

Contains a set of menu options (Home, About Us, Projects, Studio, Contact, Gallery).

Uses two-way data binding (ngModel) to get phone number/user input through a textbox and display it below instantly.

Demonstrates use of Angular interpolation {{ }} to show dynamic values.

🔹 Key Properties in NavComponent.ts
Property	Type	Description
logoName	string	Stores the brand / logo text displayed on navbar.
option	string	Stores custom menu option (Gallery).
msg	string	Holds text entered in the input box; used for two-way binding.
🔹 Code used for Two-Way Binding
<input [(ngModel)]="msg" type="text" placeholder="Enter Contact Number">
<h2>{{ msg }}</h2>


This allows the value typed in input to appear immediately in the <h2> tag without reloading.

✅ Short Summary for README:

NavComponent is a reusable navigation bar that displays application branding and menu options.
It demonstrates Angular interpolation and two-way data binding with ngModel, showing user input in real time.
