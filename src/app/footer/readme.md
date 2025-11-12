---------------------------------------------------------
FOOTER COMPONENT - PROJECT INFORMATION
---------------------------------------------------------

Component Name: Footer Component
Technology Used: Angular (HTML, CSS, TypeScript)

Purpose of Component:
---------------------
This component is created to display a footer section at the bottom of all pages in an Angular application.
It includes:
- Website name
- Navigation menu (Home, About, Contact, etc.)
- Social media icons (Font Awesome)
- Current Year displayed dynamically

---------------------------------------------------------
FILES INCLUDED
---------------------------------------------------------
footer.component.ts         → Angular logic file (TypeScript)
footer.component.html       → Footer structure/layout (HTML)
footer.component.css        → Styling and footer design (CSS)

---------------------------------------------------------
HOW IT WORKS
---------------------------------------------------------
footer.component.ts
- Contains logic to display the current year dynamically using:
      currentYear = new Date().getFullYear();

footer.component.html
- Defines the layout of the footer including:
      • Logo / site name
      • Navigation links using <a routerLink="...">
      • Social media icons using <i class="fa-brands ...">

footer.component.css
- Adds styling including:
      • Background color
      • Alignment of items
      • Hover effects on links and icons
      • Responsive layout for mobile screens

---------------------------------------------------------
REQUIREMENTS (FOR ICONS)
---------------------------------------------------------
Font Awesome must be installed. Run the following command:

   npm install @fortawesome/fontawesome-free

Then add this in angular.json under "styles":

   "node_modules/@fortawesome/fontawesome-free/css/all.min.css"

---------------------------------------------------------
HOW TO USE IN APP
---------------------------------------------------------
1. Add footer selector in app.component.html:

   <router-outlet></router-outlet>
   <app-footer></app-footer>

2. Ensure footer folder is inside:
   src/app/footer/

---------------------------------------------------------
OUTPUT
---------------------------------------------------------
✔ Footer sticks at the bottom of every page
✔ Links redirect using Angular routing
✔ Social icons appear with hover effect
✔ Current year updates automatically

---------------------------------------------------------
END OF FILE
---------------------------------------------------------
