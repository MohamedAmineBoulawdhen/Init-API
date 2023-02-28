# User List App

This is a simple React app that displays a list of users using the jsonplaceholder API.

## Instructions

1. Create a new project using create-react-app exp: `npx create-react-app user-list-app`

2. Create a new file called `UserList.js` in the `src` folder.

3. Install axios: `npm install axios`

4. In `UserList.js`, import axios and useState:
```javascript
import axios from 'axios';
import { useState, useEffect } from 'react';
```

5.Use axios inside useEffect to get data from the jsonplaceholder API.

6.Use useState to save the data into a listOfUsers state.

7.Map listOfUsers to display the list of users on the screen.

8.Style your app as you wish using CSS or a styling library like Bootstrap.

#Conclusion
That's it! You should now have a working User List app that fetches data from an API and displays it on the screen.
