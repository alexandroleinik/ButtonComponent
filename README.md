![](https://a.imge.to/2019/12/11/vzbosG.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
## Button Component
Component has props:
```javascript
size:T.oneOf(['s','m','l']),
type:T.oneOf(['default','primary','success','warning','error','link']),
href:T.string,
children:T.node,
disabled:T.bool,
onClick:T.func,
icon:T.string,
loading:T.bool
```
