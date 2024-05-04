require('dotenv').config()
const express= require('express')
const app=express()

const githubData={
        "login": "faizanalibaig",
        "id": 142169392,
        "node_id": "U_kgDOCHlVMA",
        "avatar_url": "https://avatars.githubusercontent.com/u/142169392?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/faizanalibaig",
        "html_url": "https://github.com/faizanalibaig",
        "followers_url": "https://api.github.com/users/faizanalibaig/followers",
        "following_url": "https://api.github.com/users/faizanalibaig/following{/other_user}",
        "gists_url": "https://api.github.com/users/faizanalibaig/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/faizanalibaig/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/faizanalibaig/subscriptions",
        "organizations_url": "https://api.github.com/users/faizanalibaig/orgs",
        "repos_url": "https://api.github.com/users/faizanalibaig/repos",
        "events_url": "https://api.github.com/users/faizanalibaig/events{/privacy}",
        "received_events_url": "https://api.github.com/users/faizanalibaig/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Faizan Ali Baig ",
        "company": null,
        "blog": "",
        "location": "Islamabad,Pakisatn",
        "email": null,
        "hireable": null,
        "bio": "Mern Stack Developer ",
        "twitter_username": null,
        "public_repos": 20,
        "public_gists": 0,
        "followers": 2,
        "following": 6,
        "created_at": "2023-08-13T16:25:01Z",
        "updated_at": "2024-04-08T09:12:29Z"
      }



app.get('/hello', (req, res)=>{
    res.send('Hello World')
})

app.get('/github', (req, res)=>{
    res.json(githubData)
})

app.listen(process.env.port, ()=>{
   console.log(`${process.env.port}`)
})