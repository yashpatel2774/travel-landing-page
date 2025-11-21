# Travel Website Landing Page

This is a Travel Website Landing Page that I created using React.js, Vite, TailwindCSS, and json-server.  

The design is built based on the Figma file provided in the assignment, and I have tried to match the layout, spacing, colors, and responsiveness as closely as possible.

---

##  Tech Stack Used in this webiste

- React.js (Functional Components + Hooks)
- Vite
- TailwindCSS
- Axios
- React Icons
- JSON Server (Mock API)

---

##  Installation and Setup

# 1. Clone the project  

git clone https://github.com/yashpatel2774/travel-landing-page

Then move to project folder using   -- cd travel-landing-page


# 2. Install dependencies  

Install the Dependencies using -- npm install


# 3. Run the React project  

npm run dev

---

##  API Setup (json-server)

The project uses json-server to serve the mock API.

# Start the API server  

npx json-server --watch db.json --port 4000


API Endpoints:

- **GET** `/destinations`
- **GET** `/testimonials`
- **POST** `/subscribers`

---

##  Features Implemented

- Fully responsive design (Desktop, Tablet, Mobile)
- Pixel-perfect structure based on the Figma design
- Top Destinations section dynamically rendered using API
- Testimonials fetched from API
- Newsletter form with email validation
- Newsletter POST request to `/subscribers`
- Success message after form submit
- Hover animations and smooth scrolling
- Clean, component-based folder structure
- TailwindCSS for fast styling
- React Icons for UI improvements



## Here is my Recording link of my website 

https://drive.google.com/file/d/1GCBlbtPbxse4EQwhXy3S0t5Q52_p6sO8/view?usp=drive_link