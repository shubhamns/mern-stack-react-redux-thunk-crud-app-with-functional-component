# node express crud app api

### Configure app

#### install nodejs
     $ cd nodejs-app
     $ npm install

#### Step 1 working with localhost

        1. install MongoDB `https://docs.mongodb.com/manual/administration/install-community/`
        2. you can also download MongoDB GUI `Robo 3t`.
        3. create database & copy `mongodb://localhost:27017/DBName`
        4. Paste to the `.env` file.

#### Step 2 working with Cloud

        1. Sign up with MongoDB `Head over to MongoDB Atlas or MLab and create a free account.`
        2. create connection string for your MongoDB Atlas database.
        3. copy mongodb+srv://USERNAME:PASSWORD@myapp-ic0bu.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority
        4. Paste to the `.env` file.

### Start app

     $ npm start

### Start app using Nodemon

     $ npm run dev
