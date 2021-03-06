# Introduction

This is my submission for the Coding Test for Bink. You can see the running version [here](https://lukies-meal-app.netlify.app/)

All the user stories were implemented. As no particular requirements on styling other than the thumbnail, I just focused on making the information from the API clear and responsive. For a more complex app, I would generally reach for something like styled components to keep CSS organized, but here I just used the singular CSS file for simplicity/speed

## Mock API Issue

The unit testing is quite light due to a bug I wasn't able to resolve in time:

I refactored the fetch call to the API and state update to a Custom Hook. However, mocking the response back from the API did not seem to work in react-testing-library when using a custom hook. 

I tried:

1. Overriding global fetch
2. Using Jest Spy.on function
3. The RenderHook function of React-Testing-Library

Each time it had an issue, typically with the JSON that was being used. Which leads me to believe it is a simple issue with how the data is being structured.

As a workaround to preserve time, the testing is using the actual API call in a number of places which makes the tests more integration-based than Unit.

## Scripts for Local Deployment

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/'neosaurrrus'/bink-project. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
The gem is available as open source under the terms of the MIT License.

## Code of Conduct
Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
