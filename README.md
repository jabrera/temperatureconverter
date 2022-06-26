# Temperature Converter
https://temperature-converter.juvarabrera.com

## Technical Requirements
- Create a single page web application that takes celsius and convert it to fahrenheit or vice versa

## Functionalities
1. Convert celsius value to fahrenheit
2. Convert fahrenheit to celsius
3. Toggle between light and dark theme mode
4. Save theme and load saved theme whenever page is loaded

Additional functionalities

5. Progressive Web App
    * Website can be installed on Windows, Mac, Android, and iOS
    * Website can run offline
6. Users can talk to a chatbot that can also convert celsius to fahrenheit and vice versa
    * If internet connection is unavailable, the user won't be able to access the chatbot

## Libraries Used
- Materialdesignicons.com - this is used to render icons for buttons

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
2. Created a high-fidelity prototype with light and dark theme using Adobe XD based from the low-fi prototype. I chose a color scheme and created a logo.
3. Developed the web application using HTML, CSS.
4. Integrated functionalities using Javascript
5. Created a service worker and manifest.json to make the web application progressive
6. Created a Firebase project
7. Deployed the application to Firebase
8. Linked Firebase project to my domain by setting up an A record on my domain's DNS record (https://temperature-converter.juvarabrera.com)
9. Created a Dialogflow agent for the chatbot
10. Integrated Dialogflow agent to the website using `iframe`
