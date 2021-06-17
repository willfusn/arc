# USN Front-End Dev Exercise
Welcome! For this exercise, you will be working with an existing open-source app repo that is similar to the front-end codebase at USN. It should take no more than an hour or two. This repo is a fork of: [https://github.com/diegohaz/arc](https://github.com/diegohaz/arc). Feel free to visit for more info.

## Setup
Before you begin, be sure you have accepted the email invitation as a collaborator with push access to this repo.
### 1. Installation
#### Get the source code

```sh
$ git clone 
$ cd arc
```
#### Install dependencies

```sh
$ npm install
```
#### Run the example app

```sh
$ npm run dev:example
```

It will start the development server with [HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it. Now you can open [http://localhost:3000](http://localhost:3000) in browser and start developing.

***Important:*** *you will be doing all your work in the `src-example` directory*
#### Run the example instance of Storybook
We also suggest utilizing the [*example* version of Storybook](https://github.com/diegohaz/arc/wiki/Example-components) included in the project for this task.

```sh
$ npm run storybook:example
```

This should open [http://localhost:9001](http://localhost:9001).

### 2. Create a new branch for your work
Name it `<your-name>-task-plat-922-eval-exercise` off of `master`. This will be the branch you will push to the remote upon completion.

## Task

The exercise is to add a simple testimonials section to the homepage.
#### Scenario
We finally got some feedback for our super example app! Here are the 6 testimonial quotes we want to feature on the homepage:


1. "This is so complicated" - Bob
3. "What were they thinking??" - Curly
2. "I really don't recommend this." - Larry
4. "Is that the best you can do?" - Thor
5. "Hulk smash!!" - Bruce
6. "I'm Mary Poppins, y'all! - Yondu 

## Deliverables

***Note:*** *Remember, all your work should be completed within the `src-example` directory.*

- Add a new Testimonials section to the bottom of the home page above the footer so it looks like the mobile and desktop design mocks below. *Hint: It should make use of existing Heading and Blockquote example components.*
- Whenever a user loads the page, it should show 3 of the 6 testimonial quotes at random.
- Make commits to the branch with *descriptive* commit messages (diffing your branch with master should cleanly show only your code additions for this exercise)
- Push to the remote when complete
  
***Bonus (completely optional)***

If you can spare the time and extra effort, instead of showing 3 randomly selected quotes, show 3 at a time in a continuous animated loop cycle. Every 3 seconds, replace the existing 3 quotes with the next 3 quotes using a simple fade animation. It should repeat continuously.

## What we are looking for…

- **Match the mocks as closely as possible.** *Hint: The Testimonial heading should use the same san-serif font as the existing example Blockquote component.*
- **Reuseability, keep in mind the following…**
    - We may plan to feature these testimonials on other pages in the future
    - We may plan to use a similar random selection hook (or cycling animation) on other content in the future
- **Use of conventions, patterns and coding style already established in the example app.**

#### Mobile Mock
(375px wide)

![](mobile-mock.png?raw=true)
#### Desktop Mock
(375px wide)

![](desktop-mock.png?raw=true)
## License

MIT © [Diego Haz](https://github.com/diegohaz)
