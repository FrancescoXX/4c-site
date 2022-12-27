# :gem: 4C (The Cool Community of Content Creators)

Imagine **The Cool Community For Content Creators** or **4C**, as a chill coffee shop (cooler even :bomb:). An inclusive and helpful environment, where we help content creators reach their goal by sharing experiences.

Gain access to exclusive talks/workshops with popular content creators, and hence, opportunities to collaborate.

We have games too! :video_game:

Join our amazing community on discord and twitter.

<a href="https://discord.com/invite/cRjhjFRRre"><img src="https://cdn.worldvectorlogo.com/logos/discord-6.svg" title="Discord" alt="Discord Community" width="40"/></a> <a href="https://twitter.com/4ccommunityhq"><img src="https://cdn.worldvectorlogo.com/logos/twitter-6.svg" title="Twitter" alt="Twitter Account" width="40"/></a>

<img src='./mediakit/4c_banner.jpg' alt='4C logo'>

# :camera: Website overview

This repository concerns the 4C community [website](https://www.4c.rocks/). Visit the website to stay up to date with community members' projects, active memebers, and other amazing content!

# :tada: Want to contribute?

Whether you are a community member or not, we would love your point of view! Feel free to first check out our [code of conduct](https://github.com/FrancescoXX/4c-site/blob/main/CODE_OF_CONDUCT.md) and also the [contribution guidelines](https://github.com/FrancescoXX/4c-site/blob/main/CONTRIBUTING.md) for any missing steps.

## :computer: For Contributors

### :bookmark: Tech Stack

The code base of this repo uses;

- [NextJs](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

For contributing to code, you will need;

- [Node](https://nodejs.org/en/) installed on your computer.
- Basic knowledge of [Git](https://git-scm.com/)

### :bookmark: Contribution steps

> Disclaimer: \*In order to run this project locally, you might require some additional configurations.
> If you try to run the project locally and you get something similar to this:

-

<img src='https://media.discordapp.net/attachments/881808811344683028/1051093955518935060/image.png' alt='node error'>

#### Follow the steps below to resolve the issue

If you don't have nvm manager, you can follow this steps:

1.  Download [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)
2.  Install nvm-setup.exe in your system
3.  In the terminal
    ```console
    $ nvm install 16.16.0
    ```
4.  ```console
    $ nvm use 16.16.0
    ```
5.  ```console
    $ node -v
    ```
6.  Now your node version should be 16.16.0, you can go ahead now :)
7.  Restart your system

You can directly work on this project on Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/FrancescoXX/4c-site)

Or, to work on it locally,

1.  [Fork](https://github.com/FrancescoXX/4c-site) this repository

2.  Clone the repo

    ```console
    $ git clone git@github.com:<your github username>/4c-site.git
    ```

3.  Navigate to the cloned directory

    ```console
    $ cd 4c-site
    ```

4.  Install dependencies

    ```console
    $ npm install
    ```

5.  Start the project on `localhost`
    ```console
    $ npm run dev
    ```

In the course of trying to set up the project locally, if you come across an errror that says `PWA is not supported`, you can try the following steps below to fix it;

> For Linux or Mac 👇

1.  Go to 4c-site folder using `cd 4c-site`
2.  In the terminal,
    ```console
    $ export NODE_OPTIONS=--openssl-legacy-provider
    ```
3.  If you get an error in the above code then use the option below
    ```console
    $ unset NODE_OPTIONS=""
    ```
4.  ```console
        $ npm run dev
    ```

    > For Windows 👇

5.  Go to 4c-site folder using `cd 4c-site`
6.  In the terminal,
    ```console
    $ set NODE_OPTIONS=--openssl-legacy-provider
    ```
7.  ```console
    $ npm run dev
    ```

### Format check

Before PR, please check formatting first. Eslint may show error, just make sure prettier formatting is ok.

```console
    $ npm run format:check
    $ npm run lint:check
```

If you get this error "Code style issues found in the above file(s). Forgot to run Prettier?"
Run this command

>Prettier
```console
    $ npm run format .
```
>Lint
```console
    $ npm run lint
```

Done!

### :bookmark: Adding a project to the project page

> Note: _The project page is reserved to display projects for community members only. Each member can put up only one project._

To add your project to the project page, head over to the `/content` directory, and subsequently, the `projects.json` file. There, you will find objects for each project.

For example,

```json
{
  "name": "Francesco Ciulla",
  "title": "FREE Web3 Resources",
  "screenshot": "https://user-images.githubusercontent.com/18360871/199210192-f5599a23-f0b1-49ff-9c52-2554a72a2c14.png",
  "description": "A list of resources to learn Web3 for FREE",
  "link": "https://github.com/FrancescoXX/free-Web3-resources",
  "twitter": "https://twitter.com/FrancescoCiull4",
  "live_link": "https://www.freeweb3resources.com"
}
```

- Create a new object similar to the one above.
- Follow the example above and create project details like;
  - Your name
  - Project title
  - A screenshot
  - Short description
  - A link to the GitHub repo (If it is open source)
  - Link to your twitter profile
  - Live link of the project.
- Open a pull request :+1:

Notice anything odd and/or missing from this README or on the website itself? Feel free to raise an [issue](https://github.com/FrancescoXX/4c-site/issues).

Join the amazing [4C community](https://discord.com/invite/cRjhjFRRre) on discord, and follow us on [twitter](https://twitter.com/4ccommunityhq) to stay in the loop.

# :key: License

This repository is under the [MIT](./LICENSE) license.

Please leave a star :star: All support is highly appreciated.
