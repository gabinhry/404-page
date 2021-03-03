With this module, when a user enters an incorrect URL, he will be redirected to the 404 page. <br/>
Nevertheless, if you provide a wrong id on an API route like `/articles/[id]`, you won't be redirected to the 404 page. <br/>
In order to do so, you'll need to add following code :
```
const article = getArticle(id);
if (!article) return <Redirect  to='/404'  />
```

If you are now starting your frontend with `npm run prod`, you'll see that the HTTP GET status returned is 404 for this bad id. <br/>

	> **Pro Tip** : 
	- You can test with : `curl -v https://domainname.com`
