# Challenge Week 9 - To Do App

In this challenge, we will build a simple To-Do App. This app has two main features: creating an `activity` and adding `items` to the activity. Currently, we have an incomplete project, and your task is to complete the project based on the challenge objectives.

Here's the structure of the project:

```bash
│   index.js        # App entry point
│   server.js        # Our express server configuration
└───config          # Environment variables and configuration related stuff
└───controllers     # Handle requests and serves error responses
└───middlewares     # Contains all the middleware that we need
└───models          # Database models
└───repositories    # Data access layer for querying and manipulation of database
└───routes          # Our routes controllers for all the endpoints of the app
└───services        # Business logic of our app
└───utils           # Common functions that would be used repetitively
```

## Objectives
1. Create an API to update item

- Example endpoint: `PUT /api/v1/items/:id`
- Example body:
```json
{
    "title": "Item 1",
    "priority": "normal",
    "isActive": false,
}
```

- Example response:
```json
{
    "status": "success",
    "data": {
        "isActive": false,
        "id": 1,
        "activityId": 1,
        "title": "Item 1",
        "priority": "normal",
        "updatedAt": "2023-10-10T05:27:18.930Z",
        "createdAt": "2023-10-10T07:27:18.930Z"
    }
}
```

2. Create an API to get items by activity id with pagination
- Example endpoint: `GET /api/v1/items/activity/:id?page=1&limit=10`
- Example response:
```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "activityId": 1,
            "title": "Item 1",
            "isActive": true,
            "priority": "normal"
        }
    ]
}
```

## How to Submit

1. Fork this [repository](https://github.com/arifintahu/msib-challenge-week-9)
2. Clone forked repository
3. Create a new branch: `git checkout -b solution`
4. Install dependencies: `npm install`
5. Create a folder of your nickname: `mkdir nickname`
6. Copy files from the `challenge` directory to your own folder
7. Copy `.env.example` to `.env`
8. Complete the objectives
9. Run your server using `node yourfolder/src/index.js`
10. Commit and push your changes
11. Create a Pull Request to original repository
