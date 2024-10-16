// All heroku applications not working
// Find one hosting service that will host web pages
const projects = [
  {
    "id": 0,
    "name": "Google Books Search",
    "link": "https://murmuring-cove-96907.herokuapp.com/",
    "desc": "This application allows user to search for their desired books and will provide you with all online books available. User can view the book on website and can even save those books to keep track of it in the future",
    "image": "./assets/images/Edited/booksearch.jpg",
    "repoLink": "https://github.com/Mahi-Mani/Google-Books-Search",
    "ratio": 1
  },
  {
    "id": 1,
    "name": "Vocabulary Builder",
    "link": "https://protected-reef-60148.herokuapp.com",
    "desc": "Application helps user to build their vocabulary skills as it would allow users to add a new word and once they have mastered in learning a new word, user will be able to push to mastered table. If user wishes to learn the word again, then user can move that word to learning table to keep track of. This application has access to a number of users. User will be able to keep track of all those words learnt/mastered by querying the application with respective names. Any one can view all learners of Vocabulary-Builder. Also, user can delete a word when no longer needed. Developed this application on inspiration from Kindle's Vocabulary Builder",
    "image": "./assets/images/Edited/vocabulary.jpg",
    "repoLink": "https://github.com/Mahi-Mani/Sequelize-VocabularyBuilder",
    "ratio": 1
  },
  {
    // Working
    "id": 2,
    "name": "Train Scheduler",
    "link": "https://mahi-mani.github.io/TrainScheduler/",
    "desc": "Train Scheduler application benefits user on showcasing schedules of different train user wishes to view. User can add new train at any point to view schedule. Minutes away field and next arrival keeps updating every minute so that user can keep track of their train.",
    "image": "./assets/images/Edited/train.jpg",
    "repoLink": "https://github.com/Mahi-Mani/TrainScheduler",
    "ratio": 1
  },
  {
    // Working
    "id": 3,
    "name": "ToDoList",
    "link": "https://mahi-mani.github.io/ToDoList/",
    "desc": " Application that helps user to make a note of their toDoList. This is a single page React application that gives users a good visualize effect that each list is coloured differently",
    "image": "./assets/images/Edited/todolist.jpg",
    "repoLink": "https://github.com/Mahi-Mani/ToDoList",
    "ratio": 1 
  },
  {
    // Working
    "id": 4,
    "name": "Memory Game",
    "link": "https://mahi-mani.github.io/Memory-Game/",
    "desc": "This is an entertaining application as one could capture their lovely pokemons. As and when an user catches a pokemon, score is updated. An user can catch a pokemon only once. User will lose the game if a pokemon is captured twice. Try to break the top score recorded.",
    "image": "./assets/images/Edited/memory.jpg",
    "repoLink": "https://github.com/Mahi-Mani/Memory-Game",
    "ratio": 1
  },
  {
    // Working
    "id": 5,
    "name": "Baefit",
    "link": "https://bryanjacinto1994.github.io/BaeFit-Workouts/",
    "desc": "A website that combines exercising with other aspects to make it more enjoyable. The workouts are designed for everyone, from beginners to veterans. Trail API finds scenic jogging routes for runners! Utilised spotify API for users who love to listen to songs while workout! All in one Application!",
    "image": "./assets/images/Edited/baefit.jpg",
    "repoLink": "",
    "ratio": 1
  },
  {
    // Working
    "id": 6,
    "name": "Emoji Finder",
    "link": "https://mahi-mani.github.io/Emoji-Finder/",
    "desc": "This is a simple search application exclusively for emoticons. One could search for an emoji from list of emoticons",
    "image": "./assets/images/Edited/emojifinder.jpg",
    "repoLink": "https://github.com/Mahi-Mani/Emoji-Finder",
    "ratio": 1
  },
  {
    "id": 7,
    "name": "Friend Finder",
    "link": "https://polar-falls-35679.herokuapp.com/",
    "desc": "This application's functionality is quite entertaining as it finds a closely associated friend. Application asks about 10 questions to the user, so that application has some knowledge on the user. Having learnt that, user is provided with an closely associated character from Friends series. This application is quite enjoyable as it points out your closely associated friend",
    "image": "./assets/images/Edited/friend.png",
    "repoLink": "https://github.com/Mahi-Mani/Friend-Finder",
    "ratio": 1
  },
  {
    "id": 8,
    "name": "Dictionary Scrapper",
    "link": "https://quiet-dusk-47394.herokuapp.com/",
    "desc": "NewScrapper is all about scrapping a website. This application works on scrapping https: //www.dictionaryofobscuresorrows.com/ website in the background. Using that, this application creates a public API in the backend and makes manipulations on those objects and provides an useful product to have a well use of this dictionary. User can delete words at any point of time. They could even save their favorite words so that they can revisit later. They can even delete words that are no longer needed.",
    "image": "./assets/images/Edited/dictionary.jpg",
    "repoLink": "https://github.com/Mahi-Mani/Dictionary-Scrapper",
    "ratio": 1
  },
  {
    "id": 9,
    "name": "Crystal Collector",
    "link": "https://mahi-mani.github.io/unit-4-game/",
    "desc": "You will be given a random number at the start of the game. There are four crystals below. By clicking on the crystal you will add a specific amounts of points to your total score. You win the game by matching your total score to random number, you lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time when the game starts, the game will change the values of each crystal",
    "image": "./assets/images/Edited/crystal.jpg",
    "repoLink": "https://github.com/Mahi-Mani/unit-4-game",
    "ratio": 1
  },
  {
    "id": 10,
    "name": "Trivia Game",
    "link": "https://mahi-mani.github.io/TriviaGame/",
    "desc": "It's a quiz game. You will have 10 timed questions. You will be shown correct answers when answered incorrectly. Review your total score at the end and restart the game.",
    "image": "./assets/images/Edited/trivia.jpg",
    "repoLink": "https://github.com/Mahi-Mani/TriviaGame",
    "ratio": 1
  },
  {
    "id": 11,
    "name": "Psychic Game",
    "link": "https://mahi-mani.github.io/Psychic-Game/",
    "desc": "Built a game that guesses a character what computer thinks. Your guesses are compared with computer's guess and if both matches, you win otherwise you lose! You gave got 9 chances to guess correctly.",
    "image": "./assets/images/Edited/psychic.jpg",
    "repoLink": "https://github.com/Mahi-Mani/Psychic-Game",
    "ratio": 1 
  }
]