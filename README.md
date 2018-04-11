# scheduler
A full-stack system: complete with front-end, back-end and CRUD functionality. This is a prototype built to be used as a scheduling app. It is still in phase one of development and will undergo many changes in future versions.

## Necessary customizations
* Go to file scheduler-project/scheduler/src/main/resources/application.properties and on the first 3 lines enter the database name, database username and password.
* Got to file scheduler-project/scheduler/src/main/java/com/abhi/scheduler/email/SchedulerSendEmail.java and on line 11, change sender@example.com to a valid sender's email address.

## Run the backend as follows:
In the terminal cd to the backend project folder (scheduler) and type the commands: <br/>
`$ ./gradlew build -x test` <br/>
`$ ./gradlew run -x test`

### Prerequisites for backend to run:
* [Gradle](https://gradle.org/)
* [MySql database](https://www.mysql.com/)

## Once the backend is running, go ahead and run the frontend as follows:
In the terminal cd to the frontend project folders (scheduler-client1 and scheduler-client2) and type the command: <br/>
`$ npm start`

### Prerequisites:
* [Node.js](https://nodejs.org/en/) with npm installed
* [Angular CLI](https://cli.angular.io/)
