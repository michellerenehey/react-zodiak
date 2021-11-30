# ZODIAC / ZODIAK APP

## COMPONENTS:

### Header

- import React
- import styling
- Header() which returns header

### Footer

- import React
- import styling
- Footer() which returns footer

### Main

- import React
- import styling
- import ZodiacCard
- import data.js list
- not sure about images yet...
- Main() which uses .map to map through the items in data.js appropriately (declaring props!)

### ZodiacCard

- import React
- import styling
- ZodiacCard() which takes in the props from Main and renders the html (in jsx version!) that we want to appear on the page

## Other Parts of App:

### app.js

- import React
- import Header, Footer, Main components
- import styling? TBD
- this will have an App() function that returns one div (with a className) and call on the header, footer, and main components

### data.js

- this will be a static-coded list of zodiac signs & their dates

### .eslintrc

- manually add this, based on demo

### .prettierrc

- manually add this, based on demo

### photos

- each zodiac will need it's own photo, decide if these will live in src folder or in public folder
