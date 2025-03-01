const ProjectsDetails = [
    {
      id: 1,
      title: "SilentSpeak - Muted Speech Detection",
      description: [
        "SilentSpeak is a motion-based alternative for speech command recognition by leveraging IMU sensors to analyze jaw movements during speech",
        "Trained a Random Forest Classifier, achieving 88% accuracy in classifying commands based on IMU sensor data.",
        "Integrated ADB commands with speech recognition to automate tasks on mobile devices like unlocking the device, answering calls, and executing custom actions.",
      ],
      link : "https://github.com/Khushi2405/SilentSpeak",
      video : "https://khushi2405.github.io/my-portfolio/assets/videos/SilentSpeak.mp4",
    },
    {
      id: 2,
      title: "Hand Gesture Recognition",
      description: [
        "Built a hand gesture recognition system using an ESP32S3 microcontroller and MPU6050 IMU sensor to predict hand gestures (left, right, up, down).",
        "Trained Support Vector Machine (SVM) model by collecting accelerometer and gyroscope data for each gesture achieving an accuracy of 95%",
        "Implemented real-time gesture classification, enabling intuitive, sensor-based interactions for human-computer interaction applications.",
      ],
      link : "https://github.com/Khushi2405/Hand-Gesture-Recognition",
      video : "https://khushi2405.github.io/my-portfolio/assets/videos/HandGesture.mp4",
    },
    {
      id: 3,
      title: "Email and Message Client",
      description: [
        "Designed and developed an email and messaging mobile application using Android Studio and Java, integrating Firebase for robust database management and ensuring efficient data synchronization.",
        "Implemented user registration and login features with options to switch between email and messaging, utilizing RecyclerView for dynamic data presentation and incorporating error handling and message history tracking.",
      ],
      link: "https://github.com/shivasharma14/Email-and-Message-Client",
      image: "https://khushi2405.github.io/my-portfolio/assets/images/EmailAndMessage.png",
    },
  ];

export default ProjectsDetails;