
# Bon Bonne
Documentation by <br>
Rebecca Marijke Broos

*Updated on 03/18/2019*

## Contents
Description project<br>
Demo<br>
Features<br>
Instructions<br>
Planning / Log<br>
Design<br>
Flowchart<br>
Known issues<br>
Future implementations

## Description project
An application that takes a JSON list of restaurants as input and displays it in a React card viewing system. Cards contain detailed information about the restaurant.

*Purpose of this project is to demonstrate my skills in Front End development and share my work process.*

## Demo
To see the application in action:<br>
https://rebeccamarijkebroos.github.io/BonBonne/


## Features
Current features:
* The application renders cards components using data from a JSON file
* Clicking Info on the card opens up a card in overlay view with more details about the restaurant
* Clicking the random button will return 6 random restaurants
* Cards can be filtered on rating of 4 or over
* Cards can be filtered on Low price range
* Cards can be sorted on Name
* Cards can be sorted on Rating

## Instructions
#### Required input
The application requires a JSON file set in BonBonne.js.
Object must contain the following format as minimal input:

```[{
   "Opening_hours":
["Monday: 11:00 AM – 3:00 PM",
"Tuesday: 11:00 AM – 3:00 PM",
"Wednesday: 11:00 AM – 3:00 PM",
"Thursday: 11:00 AM – 3:00 PM",
"Friday: 11:00 AM – 3:00 PM",
"Saturday: Closed",
"Sunday: Closed"],
   	"address": "Repslagargatan 8, 118 46 Stockholm",    
"phone_number": "08-641 20 77"
     	"name": "String",
    	"price_level": 1, //Value between 1 and 3. 1 = Low, 2 = Average, 3 = High
   	 "rating": 4.4,
  	"website": "http://www.tamarindo.se/",
    	"photo": "https://cdn.pixabay.com/photo/2016/11/18/22/21/architecture-1837150_1280.jpg",
    	"id": 0,
}]

```
#### Required dependencies and recreating development environment
The application was built using Node. Running NPX create-react-app also resulted in a large node_modules folder which I haven’t included on the Github repository.

Suggested work-around to recreate development environment:
1. Using terminal and Node run: npx create-react-app BonBonne
2. Delete all files and folders except the node_modules folder
3. Download and extract Github repository files to root directory
4. Folder structure should now look like this:
```
* node_modules		
* public
	> index.html
	> manifest.json
	> restaurant-icon.png
* src
	> components
		>> card.css
		>> cardList.js
		>> cardModal.js
		>> restaurant.jpeg
	> BonBonne.js
	> BonBonne.test.js
	> db.json
* Index.js
* serviceWorker.js
* .gitignore
* package-lock.json
* Package.json
* Yarn.lock
```

4. In terminal navigate to created directory
5. Install required dependencies using the terminal:<br>
`npm install react-responsive-modal`
6. Run the development server:<br>
 `npm start` (may need to open browser manually first)

#### Overview of used dependencies and their versions:
	React version 16.8.4
    React Dom version 16.8.4
    React Responsive Modal version 3.6.0
    React Scripts 2.1.8

## Planning / Log
To make efficient use of my time I broke down the project into the next stages:

##### Define prerequisites and familiarize Docker and API input
Orientation phase. Both JSON and Docker were new to me at the time. Understanding JSON went smoothly because of my experience with Javascript. I managed to get Docker running as well, but when trying to run my React application in the Express environment the html was parsed as text instead of code. I decided to prioritize the building of the application over the implementation in express.

##### Plan
Highest priority was given to creating a functioning application that showed the restaurant in a list form and in a detail form.

##### Wireframe and design
Designing structure for the project. The red thread in the structure is the flow of the original JSON object which follows a parent to child pattern. Structuring the project like this will allow child features to still make use of all original data provided at the top of the tree.

##### Pseudo Code and prototyping
I started with plotting down components in a comment form and making use of the alert function to test certain features.

##### Iterate and test, rinse and repeat
With the planning and structure in place I built out the components and tested them. I kept track of the issues and features the section below.

## Known issues and future features
#### Known issues:
* IS.01 Opening hours with more than 40 characters per index cause a shift in layout of the detailed view
* IS.02 “To website” text is displayed when no website was provided
	* *Resolved on 3/27/2019*
* IS.03 No indication is given when no opening hours are available
* IS.04 Use of random function could result in a Type error
* IS.05 Reset function doesn’t restore original array after use of sort or filter.
	* *Resolved on 4/2/2019*

#### Planned implementations
* FEA.01 Algorithm for splitting the address is noted twice. Once in the list file and again in the detail file.
	* Desired solution: Pass splitted address along to the modal
	* *Added on 3/15/2019*
* FEA.02 Algorithm for converting numeral price range to text is noted twice. Once in the list file and again in the detail file
	* Desired solution: Pass converted price range along to the modal
	* *Added on 3/15/2019*
* FEA.03 Mapping function is done directly in the main component
	 * Desired solution: Result of mapping stored in variable so result can be accessed by other functions such as sort or filter
	* *Added on 3/15/2019*
* FEA.04 A feature that lets the user sort the list of restaurants based on relevant attributes
	* *Added on 3/16/2019*
* FEA.05 A feature which allows the user to filter out restaurants based on relevant attributes
	* *Added on 3/16/2019*
* FEA.06 Restaurant roulette: button to display a set of randomized restaurants
	* *Added on 3/16/2019*
* FEA.07 Discard: Card button to delete card from results to help user narrow down the ideal restaurant
