import imgCookbook from "./img/project_Cookbook.png";
import imgLetsGoal from "./img/project_LetsGoal.png";
import imgMatching from "./img/project_MatchingMania.png"

const ProjectData = [
    {
        id: 0,
        title: "MyCookbook",
        description: "A fullstack application designed for users to explore, discover, save and keep track of new recipes. Created using a Python/Flask backend with a PostgreSQL database.",
        img: imgCookbook,
        src: "https://github.com/SeanDemske/MyCookbook",
        demo: "https://myonlinecookbook.herokuapp.com",
        blog: "https://blog.seandemske.com/how-i-built-a-full-stack-cookbook-application?guid=abb153d4-310a-4127-8b65-444c13b0befc&deviceId=ff5b29e0-2cba-4342-a3ba-bf5a67938136"
    },
    {
        id: 1,
        title: "LetsGoal. (Hackathon)",
        description: "This project was built as part of one of Mintbean’s hackathons. Built over 6 days with NodeJS/Express back end using Nunjucks HTML templating, hand written vanilla CSS, a PostgreSQL database, and JWT with Bcrypt for authentication.",
        img: imgLetsGoal,
        src: "https://github.com/SeanDemske/GoalTracker",
        demo: "https://lets-goal.herokuapp.com",
    },
    {
        id: 2,
        title: "Matching Mania",
        description: "See how effeciently you can match all the cards on the board! Built with plain old vanilla HTML, CSS and JavaScript",
        img: imgMatching,
        src: "https://github.com/SeanDemske/memory-game",
        demo: "https://seandemske.github.io/memory-game/",
    }
]

export default ProjectData;