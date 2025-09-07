const ProjectsDetails = [
  {
    id: 1,
    title: "IMDB Query Engine",
    description: [
      "Designed a relational query engine to reduce disk I/O overhead for 70+ million records by developing a custom LRU-based buffer manager.",
      "Achieved 100× query speedup by implementing a B+ Tree index to improve clustered and unclustered searches.",
      "Built a query executor from scratch to process records from 3 relational tables, designing scan, selection, projection, materialization, and Block Nested Loop (BNL) joins operators using a fixed execution plan.",
      "Wrote end-to-end and unit test cases using JUnit and Mockito, achieving 99% test coverage under various workloads.",
    ],
    link: "https://github.com/Khushi2405/IMDB-Query-Engine",
    project_link: "https://github.com/Khushi2405/IMDB-Query-Engine",
    image: "https://khushi2405.github.io/my-portfolio/assets/images/DBMS.png",
  },
  {
    id: 2,
    title: "SilentSpeak - Muted Speech Detection",
    description: [
      "SilentSpeak is a motion-based alternative for speech command recognition by leveraging IMU sensors to analyze jaw movements during speech",
      "Trained a Random Forest Classifier, achieving 88% accuracy in classifying commands based on IMU sensor data.",
      "Integrated ADB commands with speech recognition to automate tasks on mobile devices like unlocking the device, answering calls, and executing custom actions.",
    ],
    link: "https://github.com/Khushi2405/SilentSpeak",
    project_link: "https://github.com/Khushi2405/SilentSpeak",
    video:
      "https://khushi2405.github.io/my-portfolio/assets/videos/SilentSpeak.mp4",
  },
  {
    id: 3,
    title: "PersonaGPT — AI Powered Resume",
    description: [
      "Developed an AI-powered resume that answers any technical and behavioral questions based on candidate profile data.",
      "Integrated OpenAI library with Gemini 2.0 Flash, for real-time responses along with implementing rate-limiting safeguards.",
      "Automated follow-up by triggering Supabase edge functions via webhooks to send personalized emails upon interest detection."
    ],
    link: "https://github.com/Khushi2405/PersonaGPT",
    image:"https://khushi2405.github.io/my-portfolio/assets/images/personaGPT.png",
    project_link: "https://khushi2405-personagpt.hf.space",
  },
  {
    id: 4,
    title: "CareerEcho - AI Career Platform",
    description: [
      "Developed an AI-powered career platform using LangChain and Google Gemini Flash 2.5 to manage specialized agents for resume parsing, content creation, and study material generation.",
      "Built and deployed a web application with Streamlit by integrating backend AI processes with a responsive user interface to provide real-time updates.",
      "Tested and refined various prompt strategies to maximize accuracy while minimizing token usage."
    ],
    link: "https://github.com/Khushi2405/CareerEcho/",
    image: "https://khushi2405.github.io/my-portfolio/assets/images/careerEcho.png",
    project_link: "https://career-echo.streamlit.app/",
  },
  {
    id: 5,
    title: "Hand Gesture Recognition",
    description: [
      "Built a hand gesture recognition system using an ESP32S3 microcontroller and MPU6050 IMU sensor to predict hand gestures (left, right, up, down).",
      "Trained Support Vector Machine (SVM) model by collecting accelerometer and gyroscope data for each gesture achieving an accuracy of 95%",
      "Implemented real-time gesture classification, enabling intuitive, sensor-based interactions for human-computer interaction applications.",
    ],
    link: "https://github.com/Khushi2405/Hand-Gesture-Recognition",
    project_link: "https://github.com/Khushi2405/Hand-Gesture-Recognition",
    video:
      "https://khushi2405.github.io/my-portfolio/assets/videos/HandGesture.mp4",
  },
  // {
  //   id: 5,
  //   title: "Email and Message Client",
  //   description: [
  //     "Designed and developed an email and messaging mobile application using Android Studio and Java, integrating Firebase for robust database management and ensuring efficient data synchronization.",
  //     "Implemented user registration and login features with options to switch between email and messaging, utilizing RecyclerView for dynamic data presentation and incorporating error handling and message history tracking.",
  //   ],
  //   link: "https://github.com/shivasharma14/Email-and-Message-Client",

  //   image:
  //     "https://khushi2405.github.io/my-portfolio/assets/images/EmailAndMessage.png",
  // },
];

export default ProjectsDetails;
