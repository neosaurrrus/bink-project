# Introduction

This is my submission for the Coding Test for Bink.

All the user stories were implemented. As there was no steer on presentation I just focused on making the information from the API clear.

## Mock API Issue

The unit testing is quite light due to a bug I wasn't able to resolve in time:

I refactored the fetch call to the API and state update to a Custom Hook. However, mocking the response back from the API did not seem to work in react-testing-library when using a custom hook. 

I tried:

1. Overriding global fetch
2. Using Jest Spy.on function
3. The RenderHook function of React-Testing-Library

Each time it had an issue, typically with the JSON that was being used. Which leads me to believe it is a simple issue with how the data is being structured. While I am comfortable with hooks and react-testing-library, I had not combined the two till this week!

As a workaround in the time I had left, the testing is using the actual API call in a number of places which makes the tests more integration-based than Unit.

## Available Scripts

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/'neosaurrrus'/bink-project. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
The gem is available as open source under the terms of the MIT License.

## Code of Conduct
Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
