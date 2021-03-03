### Step 1
Add the `not-found.screen.tsx` in `frontend/src/pages/404`.

### Step 2
Add a redirection in the `frontend/src/pages/page.navigation.tsx`.
```
<Router>
	<Switch>
		<Route  exact  path="/"  component={HomeScreen}  />
		<Route  exact  path="/signin"  component={SigninScreen}  />
		<Route  exact  path="/signup"  component={SignupScreen}  />
		<Route  exact  path="/connected"  component={ConnectedScreen}  />
		<Route  exact  path="/404"  component={NotFoundScreen}  />
		<Redirect  to='/404'  />
	</Switch>
</Router>
```
### Step 3
Copy the `server` folder in `./frontend/`

### Step 4
Add `frontend/server/nodemodules/` folder to the global `.gitignore` <br/>
frontend/node_modules

### Step 5
`cd frontend && npm install`

### Step 6
Add a script in your `frontend/package.json`.
```
"scripts": {
	"prod": "npm run build && (cd server && npm start)",
	...
},
```
### Step 7
`cd ./frontend/server && npm install` <br/>
`cd ..` <br/>
Launch your frontend in production with `npm run prod`. <br/>
That's it ! :rocket: