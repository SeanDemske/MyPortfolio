import imgCookbook from "./img/project_Cookbook.png";
import imgLetsGoal from "./img/project_LetsGoal.png";
import imgMatching from "./img/project_MatchingMania.png"
import imgPortfolio from "./img/project_Portfolio.png";
import imgCovid from "./img/project_Covid.png";
import imgChatApp from "./img/project_ChatApp.png";
import imgDota from "./img/project_Dota.png";

const ProjectData = [
    {
        id: 0,
        title: "DoTA Drafter",
        description: "A fullstack application that recreates the drafting phase of a competitive DoTA 2 match. Built using React, Express, SocketIO, and handwritten CSS",
        img: imgDota,
        src: "https://github.com/SeanDemske/DotaDrafter",
        demo: "https://dota-drafter.netlify.app/",
    },
    {
        id: 1,
        title: "MyCookbook",
        description: "A fullstack application designed for users to explore, discover, save and keep track of new recipes. Created using a Python/Flask backend with a PostgreSQL database.",
        img: imgCookbook,
        src: "https://github.com/SeanDemske/MyCookbook",
        demo: "https://myonlinecookbook.herokuapp.com",
        blog: "https://blog.seandemske.com/how-i-built-a-full-stack-cookbook-application?guid=abb153d4-310a-4127-8b65-444c13b0befc&deviceId=ff5b29e0-2cba-4342-a3ba-bf5a67938136"
    },
    {
        id: 2,
        title: "LetsGoal. (Hackathon)",
        description: "This project was built as part of one of Mintbean’s hackathons. Built over 6 days with NodeJS/Express back end using Nunjucks HTML templating, hand written vanilla CSS, a PostgreSQL database, and JWT with Bcrypt for authentication.",
        img: imgLetsGoal,
        src: "https://github.com/SeanDemske/GoalTracker",
        demo: "https://lets-goal.herokuapp.com",
    },
    {
        id: 3,
        title: "Covid-19 Tracker",
        description: "Fully responsive Covid 19 statistics display built with React, Material UI and ChartJS",
        img: imgCovid,
        src: "https://github.com/SeanDemske/covid-tracker",
        demo: "https://seandemske.github.io/covid-tracker-live/",
    },
    {
        id: 4,
        title: "Live Chat App",
        description: "Responsive live chat application built with SocketIO and React",
        img: imgChatApp,
        src: "https://github.com/SeanDemske/react-chat-application",
        demo: "https://sleepy-euler-79a070.netlify.app/",
    },
    {
        id: 5,
        title: "Matching Mania",
        description: "See how effeciently you can match all the cards on the board! Built with plain old vanilla HTML, CSS and JavaScript",
        img: imgMatching,
        src: "https://github.com/SeanDemske/memory-game",
        demo: "https://seandemske.github.io/memory-game/",
    },
    {
        id: 6,
        title: "Portfolio",
        description: "The website you are currently on right now! Designed using Figma and created using the React framework with CSS written from scratch",
        img: imgPortfolio,
        src: "https://github.com/SeanDemske/MyPortfolio",
        demo: "https://seandemske.com/",
    }
]

export default ProjectData;