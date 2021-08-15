export const projects = [
  {
    title: 'Covi-Tracker',
    description: "This project uses Python to build a full-stack Covid-19 data tracking app. The front-end for this application uses Flask, ChartJS and Bootstrap to create a simple, user friendly web application. The back-end for this app, also build in Python collects, cleans and stores up-to-date Covid-19 data using beautifulsoup, pandas and sqlite3.",
    image: '/images/1.png',
    tags: ['Python', 'Flask', 'Bootstrap', 'SQL'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'Flask Blog App',
    description:"This app explores the concept of a simple, fully-stacked blogging app like twitter. Built in Python Flask, this app handles user registration, login and password-reset processes, as well as user content creation. SQL query handling and hashed secure password handling are demonstrated in this project.",
    image: '/images/2.png',
    tags: ['Python', 'Flask', 'Bootstrap', 'SQL'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'ReactJS Portfolio Template',
    description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
      image: '/images/3.jpg',
      tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Unichat',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/4.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 'Jul 2019', text: 'Graduated with a 2:1 BSc Honours Degree in Physics at the University of Glasgow', },
  { year: 'Apr 2020', text: 'Started my journey as a JavaScript and React developer', },
  { year: 'Oct 2020', text: 'Completed the IBM Applied Data Science Specialisation course', },
  { year: 'Aug 2019', text: 'Achieved the IBM Data Science Professional certificate', },
  { year: 'Feb 2021', text: 'Developed my first React app', },
  { year: 'Jun 2021', text: 'Built my first Flask App - a Covid-19 data tracking website', },
  { year: 'Sept 2021', text: 'Began a postgraduate MSc in Data Science at Queen Mary University, London', },
];

export const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Most Popular Social Networking Sites"
			},
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				includeZero: true,			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "Facebook" },
					{ y:  1800000000, label: "YouTube" },
					{ y:  800000000, label: "Instagram" },
					{ y:  563000000, label: "Qzone" },
					{ y:  376000000, label: "Weibo" },
					{ y:  336000000, label: "Twitter" },
					{ y:  330000000, label: "Reddit" }
				]
			}]
		}
		