# Temperature Converter
https://temperature-converter.juvarabrera.com



## Technical Requirements
- Create a single page web application that takes celsius and convert it to fahrenheit or vice versa

## Functionalities
1. Convert celsius value to fahrenheit
2. Convert fahrenheit value to celsius
3. Toggle between light and dark theme mode
4. Save theme and load saved theme whenever page is loaded

Additional functionalities

5. Progressive Web App
    * Website can be installed on Windows, MacOS, Android, and iOS
    * Website can run offline (without internet connection)
6. Users can talk to a chatbot that can also convert celsius to fahrenheit and vice versa
    * If internet connection is unavailable, the user won't be able to access the chatbot

## Libraries Used
- Materialdesignicons.com - this is used to render icons for buttons

## Tools Used
- Sass - used to compile `.scss` files to `.css`

## Platforms Used
1. Firebase - used to deploy the static application to the cloud
2. DialogFlow - used to create the chatbot that converts temperature

## How to Run the Application
### Option A
- Open the `index.html` file in the browser

### Option B - Using NPM
- Run `npm install http-server -g`
- Navigate to the project directory
- Run `http-server`
- Open `localhost:8080` on your browser

## Process of Creating The Application
You can watch the actual creation of the web app [here](https://www.twitch.tv/videos/1514309334).
1. Created a low-fidelity prototype using diagrams.net to determine the components and placement for user experience
    1. There's only going to be one text input to get the value. Initially, the web app is set to converting C to F. You can click the unit button to toggle the conversion from C to F or F to C.
    2. The theme toggle for`light` and `dark` mode is fixed on the upper right of the screen. Initially, the default theme is `light`. But when the user tries the toggle it to `dark` mode and refreshes the page, it automatically loads the `dark` mode instead of going to the default theme. 
2. Created a high-fidelity prototype with light and dark theme using Adobe XD based from the low-fi prototype. I chose a color scheme and created a logo.
    1. I tried to find some blue and red color combinations that would indicate hot and cold.
3. Developed the web application using HTML, CSS based from the high-fidelity prototype.
4. Integrated functionalities using Javascript
    1. The conversion is automatic whenever the user types into the textbox and when they toggle between C and F.
5. Created a service worker `sw.js` and `manifest.json` to make the web application progressive.
    1. This allows the application to be installable on Windows, MacOS, Android and iOS if the browser supports service worker.
    2. This also allows the application to be available even without internet connection
6. Created a Firebase project
    1. `firebase init`
7. Deployed the application to Firebase
    1. `firebase deploy`
8. Linked Firebase project to my domain by setting up an A record on my domain's DNS record (https://temperature-converter.juvarabrera.com)
9. Created a Dialogflow agent for the chatbot
    1. Created an intent called `Convert`
    2. Whenever the user says "Convert X Y to Z": where `X` is the number; `Y` is the origin unit; and `Z` is the converted unit
    3. The agent is programmed to convert celsius to fahrenheit and vice versa
    4. See `functions/` directory for the source code of the Dialogflow Cloud Functions deployed to Google Cloud
10. Integrated Dialogflow agent to the website using `iframe`
