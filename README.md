# UI
Detta projekt är frontend-delen av Bee Well. Denna React applikation kommer att kommunicera med alla backend-tjänster på molnet med hjälp utav `axios`. Programmet är uppbyggt med hjälp utan atomisk design, de komponenter som kommer att utvecklas specificeras här samt i `bee-well/docs` repot. Förstasidan innehåller inte mycket logik eller kommunikation utan är mer en sida där användare kan logga in eller registrera sig. Resterande sidor är uppbyggda med kort som är modulära i design och funktion så att applikationen enkelt kan anpassas och ändras. 
## Komponenter
### Atomer
* Button
* CtaButton
* DiscreteButton
* PrimaryHeading
* SecondaryHeading
* Tag
* Textfield
* DatePicker
* Icon
### Molekyler
* Card
* CircularProgressBar
* Chart
* Modal
### Organismer
* ReportMoodModal
* SignUpModal
* SignInModal
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

## Under Utveckling
Se till att du har möjlighet att mocka API calls till backenden då det sannolikt kommer att ta ett tag innan denna delen är helt klar. Och även då behöver du kunna köra UI-delen utan att koppla dig mot den riktiga backenden under utveckling. Jag föreslår att du abstraherar API-calls och gör olika saker beroende på om man är i produktion eller utecklingsläge.
