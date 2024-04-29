# OnlyCoders Project

#### [Tech Stack Used]

1. React/Next.js
2. Tailwindcss **for styling**
3. MongoDB **for storing Data**
4. Typescript **to catch errors more effectively and write more maintainable and robust code**
5. GSAP **for animation**

This project uses the the nextjs app router.

#### [Pages]

1. [Index route (Social or Level 1 page)](https://onlycoders.vercel.app/)

2. [Signup page (Level 2 page)](https://onlycoders.vercel.app/signup)

#### [Code Structure]

1. app: this folder contains the individual pages of the application, the favicon and the global css. In this project there are three route. the routing is based on the file structure except where the folder look like this `(x) where x is a folder name` then the folder name is excempted from the route path.

2. assets: this contains the images and the lottie animation files used in the project

3. component: this contains the resuable code for the ui

4. lib: contains the internal library used in the application. for this project we have the dbConnect lib that allows us to connect with mongoDB on our system or mongodb atlas

5. models: contains the mongoose schema for the projects

**NOTE: The .env will be added to the code that is been pushed to github so that you dont have to create mongodb to test, in a real world case it wouldn't be so. Thank you**
