<h1>Inventory Management System</h1>

<h2>User stories & Wireframe</h2>

As a User, I want to sign up, to manage the items in my inventory.

As a User, I want to sign in, to edit the items in my inventory.

As a User, I want to change password, for security purposes.

As a User, I want to sign out, because I am finished editing items in my inventory.

As a User, I want to be able to view all the items in my inventory.

As a User, I want to be able to view a specific item in my inventory.

As a User, I want to be able to remove items from my inventory.

As a User, I want to add new items to my inventory, because new item is requested.

https://imgur.com/a/O8VqNwn

<h2> Repositories for application</h2>
<p>https://github.com/Team-Zero-Errors/ims-project-api</p>
<p>https://github.com/Team-Zero-Errors/ims-project-client</p>

<h2>How it Works</h2>
<p>After user logins in, all items are automatically displayed for that specific
user, showing item name, price and quantity for items in that users inventory.
User can create new items that will automatically be added to display.
For each item in the inventory you can update and delete. For update a new
view will appear and the input fields are automatically populated with the
current info, the user can change it and save it, which will then be automatically
populated into the inventory list. If the user deletes and item it will be
removed from the inventory list.</p>

<h2>Deployed Sites</h2>
https://ims-project-api.herokuapp.com
<br>
https://team-zero-errors.github.io/ims-project-client/

<h2>What technologies were used:</h2>
<ul>
<li>jQuery</li>
<li>JavaScript</li>
<li>Command Terminal</li>
<li>HTML</li>
<li>Handlebars</li>
<li>SCSS</li>
<li>AJAX</li>
<li>Bootstrap</li>
<li>Google</li>
<li>Stack Overflow</li>
</ul>

<h2>Development Process:</h2>
<ul>
<li>Team worked together on getting the repositories for both client and api up and running</li>
<li>Team of three: Scott Holm, Katherine Ward, Jason Vo</li>
<li>We started out with each person working on a feature. One person worked on the user authentication in the front end, one person set up the handlebars in the front end, and the last person worked on setting up the backend.<li>
<li>Set up handlebars and get the user authentication to work. It was fairly easy since the template already provided user authentication.</li>
<li>Minor style additions to our page, just so it did not look plain. Touch it up later down the development process.</li>
<li>Only needed to add targets and event handlers for sign in, sign out, change password, and sign up.</li>
<li>Created an item folder that will hold the api, events, and ui files.</li>
<li>Added event handlers that will listen to the user actions and base on that action the user will either create item, delete item, show all items, update item.</li>
<li>After the user clicks/submit the button, it will trigger the request for that action in the api. Ui will display the success/failure feedback to the user.</li>
<li>Once everything seems to be working on localhost, we set up for deployment for both api/client to ensure that both are communicating with each other.</li>
<li>After each feature was pushed to gitHub, another team member had to review and commit.</li>
<li>After each feature commit, team did full end to end testig and resloved any bugs that were found.</li>
</ul>

<h2>Future Iteration/ fixed problems</h2>
<ul>
<li>Fix: Update Price and Quantity to be numbers vs string</li>
<li>Future: create user profile and associated company they work for</li>
<li>Future: create ability for user to create orders which will automatically
update the inventory</li>
</ul>
