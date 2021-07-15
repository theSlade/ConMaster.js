# ConMaster.js

## About

What is ConMaster.js? With conmaster.js can you get emojis and colors very easy and more in the future!
ConMaster also have a math console system, that alows you to create math objects!
<br>

## Emoji Example

```javascript
const conmasterJS = require("conmaster.js");
const discord = require("discord.js");

const embed = new discord.MessageEmbed()
.setTitle(`${conmasterJS.emoji.happy1)} Be HAPPY!`) // And you can choose the emoji you want to use!
```

## Color Example

```javascript
const conmasterJS = require("conmaster.js");
const discord = require("discord.js");

const embed = new discord.MessageEmbed()
.setTitle(`${conmasterJS.color.white)} Be HAPPY!`) // You can use Example color.yellow for yellow or color.red for red
```

<br>

# Math Examples

## AddNumber

```javascript
const conmasterJS = require("conmaster.js");

conmasterJS.addNumber(10, 10);
// Output 10 + 10 = 20
```

## SubtractNumber

```javascript
const conmasterJS = require("conmaster.js");

conmasterJS.subtractNumber(10, 10);
// Output 10 - 5 = 5
```

<br>
<br>

## <strong>Reddit Scrapper</strong> system helps you to get some data from the reddit app.

<br>

### 💿 Small Usage

```javascript
const reddit = require("conmaster.js");

reddit({
  search: "meme",
  limits: 3,
}).then((res) => {
  console.log(res);
});
```

<br>

### 📕 Basic Usage

```javascript
const reddit = require("conmaster.js");

reddit({
  search: "meme",
})
  .then((response) => {
    console.log(response);
    /*
    Output:
    {
        data: [
                {
                title: 'Sorry if this has been posted here before',
                image: 'https://i.redd.it/x9vjahonb0b61.jpg',
                link: 'https://www.reddit.com/r/meme/comments/kw6exy/sorry_if_this_has_been_posted_here_before/',
                like: 3073,
                dislike: 0,
                comment: 42,
                subredditName: 'r/meme',
                author: 'BoneClaw06',
                dateCreated_UTC: 'Jan 19, 1970 3:21 PM',
                subreddit: 'meme',
                id: 'kw6exy',
                voteRatio: 0.98,
                nsfw: false
                },
                { More... }
            ]
    }

    */
  })
  .catch((error) => {
    console.log(error);
  });
```

<br>

### 📚 Limits Usage

```javascript
reddit({
  search: "meme",
  limits: 2, // Just give 2 data of search
})
  .then((response) => {
    console.log(response);
    /*
    Output:
    {
        data: [
                {
                    title: 'Sorry if this has been posted here before',
                    image: 'https://i.redd.it/x9vjahonb0b61.jpg',
                    link: 'https://www.reddit.com/r/meme/comments/kw6exy/sorry_if_this_has_been_posted_here_before/',
                    like: 3073,
                    dislike: 0,
                    comment: 42,
                    subredditName: 'r/meme',
                    author: 'BoneClaw06',
                    dateCreated_UTC: 'Jan 19, 1970 3:21 PM',
                    subreddit: 'meme',
                    id: 'kw6exy',
                    voteRatio: 0.98,
                    nsfw: false
                },
                {
                    title: 'Pls mods don’t let my 2 hours of making this be in vain',
                    image: 'https://i.redd.it/ma7z29qqi0b61.jpg',
                    link: 'https://www.reddit.com/r/meme/comments/kw746z/pls_mods_dont_let_my_2_hours_of_making_this_be_in/',
                    like: 1205,
                    dislike: 0,
                    comment: 27,
                    subredditName: 'r/meme',
                    author: 'totallyarandomname',
                    dateCreated_UTC: 'Jan 19, 1970 3:21 PM',
                    subreddit: 'meme',
                    id: 'kw746z',
                    voteRatio: 0.93,
                    nsfw: false
                }
            ]
    }
    */
  })
  .catch((error) => {
    console.log(error);
  });
```

<br>
<br>

## 📂 Opinion

> If you found some bugs or you have some suggestions, feel free to join our discord server and report / suggest our there, Discord [Server](https://discord.gg/pQwJhz9zVF)

```

```
