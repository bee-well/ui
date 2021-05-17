# UI
Detta projekt är frontend-delen av Bee Well. Denna React applikation kommer att kommunicera med alla backend-tjänster på molnet med hjälp utav `axios`. Programmet är uppbyggt med hjälp utan atomisk design, de komponenter som kommer att utvecklas specificeras här samt i `bee-well/docs` repot. Förstasidan innehåller inte mycket logik eller kommunikation utan är mer en sida där användare kan logga in eller registrera sig. Resterande sidor är uppbyggda med kort som är modulära i design och funktion så att applikationen enkelt kan anpassas och ändras. 

Som sagt har vi arbetat med atomisk design i projektet, vilket innebär att vi delar in komponenter i storleksordning. Atomer innehåller de minsta komponenterna som Buttons, Headings, Tag, Textfield, Datepicker, Icon. Följt av Molekyler exporterar Card, CircularProgressBar, Chart, Modal. Organismer är än större som använder Modals, Cards. För att till sist renderas i pages som innehåller själva logiken för sidorna.

Vi använde Figma när vi skapade får UX mockup och på dettas sättet var lättare att få en överblick över hur det grafiska skulle se ut. SCSS var ett bra tillvägagångssätt för att få en kontinuerlig approach när det kommer till styling av komponenter. Nedanför ses logiken över hur strukturen är uppbyggd i UI repot: 

## Api 

Strukturen för våra API requests där vi använder oss utav Axios. 

## Komponenter
### Atomer
* Buttons 
  * Button 
  * CtaButton 
* Heading 
  * PrimaryHeading 
  * SecondaryHeading 
* Tag 
* Textfield 
  * Password 
  * Test 
* DatePicker 
* Icon 
### Molekyler
* Card 
* CircularProgressBar 
* Chart 
* Modal 
### Organismer
* Modals
  * ReportMoodModal 
  * SignUpModal 
  * SignInModal 
* Cards
  * ProfileCard 
  * WelcomeCard 
  * OverviewCard 
  * ReportCard 
  * FilterCard 
  * DayCard 
  * HourCard 
  * ReportAmountCard 
### Pages
* Start 
* Panel 
* Statistics 

## Context

In a typical React application, as also for Bee-Well data is passed from parent to child using properties. Context allows a way to share data between different components without the need to explicitly pass a property value through every level of the system.

## Hooks

Hooks are quite similar to JavaScript functions, the rules of Hooks is that all state logic in a component is visible in the source code. You can only call for Hooks at the top level and it can only call them using functions in React. There are some pre-requirities to use React Hooks such as Node, NPM & the create react app. For example we have used the 'React.useState' that enables to add state to function components. When we call this inside a function as described above it generates a single piece of state associated with that component. 

## Sass

Sass stands for Syntactically awesome style sheets and is an extension of CSS that enables the Bee Well team to use variables, rules, inline import to name some examples. It is compatible with all versions of CSS. There is one requirement and that is that you need to have Ruby installed. It allowed us to write clean, easy and less CSS. This resulted in writing our CSS quicker.
