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

Allows to share information to any component. 

## Hooks

Submits a hook that allows us to have state variables in functional components.

## Sass

Here we store our styling files to get continuous styling along the project. 
