const projects = [
	{
		title: "newsentity", 
		content: "Named Entity Recognition in news articles.",
		id: "p14",
		github: "https://github.com/rubyruins/newsentity",
		url:"https://newsentity.herokuapp.com/",
		tags: ["nltk", "plotly", "streamlit", "pandas"],
		categories: "mldl"
	},
	{
		title: "fast colorization", 
		content: "Colorization of grayscale images with CNNS.",
		id: "p13",
		github: "https://github.com/rubyruins/fast-colorization",
		url:"",
		tags: ["tensorflow", "keras", "numpy", "matplotlib"],
		categories: "mldl"
	},
	{
		title: "coursearch", 
		content: "A one stop solution to navigate the sea of online courses.",
		id: "p12",
		github: "https://github.com/rubyruins/Coursearch",
		url:"https://coursearch.herokuapp.com/",
		tags: ["selenium", "scrapy", "pandas", "flask"],
		categories: "misc fulldev"
	},
	{
		title: "sentifluent", 
		content: "Dashboard for character targeted sentiment analysis.",
		id: "p11",
		github: "https://github.com/rubyruins/sentifluent",
		url:"https://share.streamlit.io/rubyruins/sentifluent/sentiment.py",
		tags: ["selenium", "pandas", "nlp", "matplotlib"],
		categories: "mldl"
	},
	{
		title: "imagescrape", 
		content: "Build multiclass image datasets from the command line.",
		id: "p10",
		github: "https://github.com/rubyruins/imagescrape",
		url:"",
		tags: ["python", "selenium", "requests", "pillow"],
		categories: "misc"
	},
	{
		title: "music recs", 
		content: "Recommending music through collaborative filtering.",
		id: "p9",
		github: "https://github.com/rubyruins/music-recs",
		url:"",
		tags: ["pandas", "numpy", "tkinter"],
		categories: "mldl"
	},
	{
		title: "driver drowsiness detection", 
		content: "A warning system to alert drowsy or tired drivers.",
		id: "p8",
		github: "https://github.com/rubyruins/driver-drowsiness-detection",
		url:"",
		tags: [ "opencv", "dlib", "tkinter"],
		categories: "mldl"
	},
	{
		title: "producthunt clone", 
		content: "Allows users to create and vote for their favourite products.",
		id: "p7",
		github:"https://github.com/rubyruins/producthunt-clone",
		url:"https://product-hunt-python.herokuapp.com/",
		tags: ["django", "mySQL", "bootstrap"],
		categories: "fulldev"
	},
	{
		title: "criminal offense", 
		content: "An interactive dashboard to visualise San Fransisco crimes.",
		id: "p6",
		github: "https://github.com/rubyruins/criminal-offense-2.0",
		url:"",
		tags: ["chartsJS", "flask", "bootstrap", "pandas"],
		categories: "misc"
	},
	{
		title: "keeper", 
		content: "A Google Keep clone to work with to-do lists.",
		id: "p5",
		github: "https://github.com/rubyruins/keeper",
		url:"",
		tags: ["reactJS", "material-ui"],
		categories: "fulldev"
	},
	{
		title: "daily journal", 
		content: "A minimalistic journal to keep track of your day.",
		id: "p4",
		github: "https://github.com/rubyruins/daily-journal",
		url:"",
		tags: ["mongodb", "nodeJS", "express"],
		categories: "fulldev"
	},
	{
		title: "secrets", 
		content: "Anonymously post secrets via Google authentication.",
		id: "p3",
		github: "https://github.com/rubyruins/secrets",
		url:"",
		tags: ["googleoauth", "passportJS", "nodeJS", "express"],
		categories: "fulldev"
	},
	{
		title: "Existential Crisis", 
		content: "A life expectancy calculator using a regression model.",
		id: "p2",
		github: "https://github.com/rubyruins/existential-crisis",
		url:"",
		tags: ["flask", "jinja2", "python", "html"],
		categories: "fulldev"
	},
	{
		title: "Tindog", 
		content: "Tinder for lonely pups.",
		id: "p1",
		github: "https://github.com/rubyruins/TinDog",
		url:"https://rubyruins.github.io/TinDog/",
		tags: ["html", "css", "bootstrap"],
		categories: "fulldev"
	}
];

const featured = [
	{
		title: "fast colorization", 
		content: "Colorization of grayscale images with CNNS.",
		id: "f6",
		github: "https://github.com/rubyruins/fast-colorization",
		url:"",
		tags: ["tensorflow", "keras", "numpy", "matplotlib"],
		categories: "mldl"
	},
	{
		title: "coursearch", 
		content: "A one stop solution to navigate the sea of online courses.",
		id: "f5",
		github: "https://github.com/rubyruins/Coursearch",
		url:"https://coursearch.herokuapp.com/",
		tags: ["selenium", "scrapy", "pandas", "flask"],
		categories: "misc fulldev"
	},
	{
		title: "sentifluent", 
		content: "Dashboard for character targeted sentiment analysis.",
		id: "f4",
		github: "https://github.com/rubyruins/sentifluent",
		url:"https://share.streamlit.io/rubyruins/sentifluent/sentiment.py",
		tags: ["selenium", "pandas", "nlp", "matplotlib"],
		categories: "mldl"
	},
	{
		title: "music recs", 
		content: "Recommending music through collaborative filtering.",
		id: "f3",
		github: "https://github.com/rubyruins/music-recs",
		url:"",
		tags: ["pandas", "numpy", "tkinter"],
		categories: "mldl"
	},
	{
		title: "driver drowsiness detection", 
		content: "A warning system to alert drowsy or tired drivers.",
		id: "f2",
		github: "https://github.com/rubyruins/driver-drowsiness-detection",
		url:"",
		tags: [ "opencv", "dlib", "tkinter"],
		categories: "mldl"
	},
	{
		title: "imagescrape", 
		content: "Build multiclass image datasets from the command line.",
		id: "f1",
		github: "https://github.com/rubyruins/imagescrape",
		url:"",
		tags: ["python", "selenium", "requests", "pillow"],
		categories: "misc"
	},
];

const skills = [
	[
		{
			title: "Python",
			proficiency: "85%"
		},
		{
			title: "Java",
			proficiency: "75%"
		},
		{
			title: "C++",
			proficiency: "70%"
		}
	],
	[
		{
			title: "Machine Learning Algorithms",
			proficiency: "75%"
		},
		{
			title: "Deep Learning Algorithms",
			proficiency: "70%"
		},
		{
			title: "Natural Language Processing",
			proficiency: "60%"
		}
	],
	[
		{
			title: "Django",
			proficiency: "75%"
		},
		{
			title: "NodeJS + Express",
			proficiency: "70%"
		},
		{
			title: "ReactJS",
			proficiency: "50%"
		}
	],
	[
		{
			title: "Git + GitHub",
			proficiency: "70%"
		},
		{
			title: "Adobe Photoshop",
			proficiency: "70%"
		}
	]
];

const experience = [
	{
		title: "Data Science Intern | Specrom Analytics",
		date: "January 2021 - Present",
		content: ["Worked on a press release distrubtion problem to match articles with potential journalists to cover them.", "Specrom Analytics is  an AI focused consulting firm offering products and services based on web scraping, data analytics, text mining and NLP. They offer cloud based Data Extraction and Web Scraping services for all kinds of use cases such as media monitoring, social listening, lead generation, SEO etc."],
		tech: "NLTK, Pandas, Streamlit and Plotly Express.",
		github: "https://github.com/rubyruins/newsentity/tree/dev",
		url: "",
		id: "i6"
	},
	{
		title: "Web Development Team | Orion Racing India",
		date: "August 2020 - February 2021",
		content: ["Designed and developed the official website for Orion Racing India.", "Orion Racing India is a student run, non-profit racing team based in K.J.Somaiya College Of Engineering, Vidyavihar, Mumbai. They develop, design and manufacture a formula style car to take part in International Design Competitions organized by Formula SAE, like Formula Student Germany."],
		tech: "HTML, CSS, Javascript and PHP.",
		github: "",
		url: "http://www.orion-racing.com/",
		id: "i5"
	},
	{
		title: "Data Science Intern | RIIDL Somaiya Vidyavihar",
		date: "June 2020 - Present",
		content: ["Worked on COMRADE, an ML-based informed intervention for crowdsourcing based optimisation of medical resources attending demand equalisation for COVID 19 treatment.", "Responsible for cleaning, processing and analysing data, drawing important inferences and presenting findings. Designed dashboards and graphs for the web application."],
		tech: "Pandas, Numpy, Plotly Express and Flask.",
		github: "",
		url: "",
		id: "i4"
	},
	{
		title: "UI Lead and Data Analyst | KJSCE SDC",
		date: "January 2020",
		content: ["Worked on Copinion, a psychometric test to analyse and observe personality traits of over 500 engineering students.", "Designed questions for the psychometric test based on the OCEAN model after close consultation and in depth research. Led the team to develop the user interface for the platform. Also analyzed and presented our findings to observe common personality traits in our target audience."],
		tech: "HTML, CSS, Material Design Bootstrap, PHP, Pandas and Seaborn.",
		github: "",
		url: "http://co-opinion.herokuapp.com/",
		id: "i3"
	},
	{
		title: "Python Intern | Datagrid Solutions, Andheri",
		date: "December 2019",
		content: ["Learned the Django framework and implemented it by creating a polls app, a blog, and a ProductHunt clone for searching and curating new products in one place."],
		tech: "Django, SQLite, HTML, Bootstrap and Javascript.",
		github: "https://github.com/rubyruins/producthunt-clone",
		url: "https://product-hunt-python.herokuapp.com/",
		id: "i2"
	},
	// {
	// 	title: "File handling and complex functions in C",
	// 	date: "KJSCE | June - July 2019",
	// 	content: "Implemented complex programs by breaking them down into simpler functions and working on one part at a time.",
	// 	id: "i1"
	// },
];

const organizations = [
	{
		title: "Summer Camp Mentor, The Young Writers Initiative",
		date: "July 2020 - August 2020",
		content: "The Young Writers Initiative's Mentorship Program is an 8 week long summer program designed as a mentorship and a summer camp combined for writing. It is free and accessible for everyone. I was part of the team of 7 accomplished writing mentors, who each mentored one mentee for 2 months. ",
		url: "https://www.tywi.org/mentorship-program.html",
		id: "o3"
	},
	{
		title: "Creative Team, KJSCE Codecell",
		date: "May 2019 - May 2020",
		content: "CodeCell is the Codechef campus chapter at KJSCE Vidyavihar. Responsible for designing templates, posts and other creative work for workshops and a nationwide Hackathon (KJSCE HACK (4.0) Taught students at various workshops on Git and Github, Python Programming, etc.",
		url: "https://www.kjscecodecell.com/",
		id: "o2"
	},
	{
		title: "Creative Head, KJSCE SAHAS",
		date: "August 2018 - May 2019",
		content: "SAHAS is the formal student council of the department of Sciences and Humanities at KJSCE Vidyavihar. Responsible for conducting workshops, events and fests and all creative work related to it.",
		id: "o1"
	}
];

const certifications = [
	{
		title: "30 Days of Google Cloud | Google Cloud, Qwiklabs",
		courses: ["Cloud Engineering Track", "Data Science & Machine Learning Track"],
		id: "c4"
	},
	{
		title: "Natural Language Processing | Deeplearning.ai, Coursera",
		courses: ["Natural Language Processing with Probabilistic Models", "Natural Language Processing with Classification and Vector Spaces"],
		id: "c3"
	},
	{
		title: "Tensorflow Developer | Deeplearning.ai, Coursera",
		courses: ["Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning", "Convolutional Neural Networks in TensorFlow", "Natural Language Processing in TensorFlow" , "Sequences, Time Series and Prediction"],
		id: "c2"
	},
	{
		title: "Deep Learning Specialisation | Deeplearning.ai, Coursera",
		courses: ["Neural Networks and Deep Learning", "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization", "Structuring Machine Learning Projects", "Convolutional Neural Networks", "Sequence Models"],
		id: "c1"
	}
]

export {projects, featured, skills, experience, certifications, organizations};
