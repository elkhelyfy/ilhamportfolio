import { HoverEffect } from "./ui/card-hover-effect";

export function ProjectCard() {
    const projects = [
      {
        title: "Customer Review Analysis and Purchase Behavior Modeling for British Airways",
        description: [
          "Data Scraping: Collected 6,600 customer reviews using the BeautifulSoup library",
          "Predictive Modeling: Built a RandomForest-based model to analyze factors influencing purchase behavior",
          "Results: The model achieved an accuracy of 87%, highlighting opportunities for improvement",
          "Improvement Proposals: Suggested adding new customer-focused features to enhance model performance.",
        ],
        link: "#1",
        technologies: ["Python", "BeautifulSoup", "RandomForest", "Machine Learning"],
      },
      {
        title: "Sentiment Analysis and Recommendation System for YouTube Videos",
        description: [
          "NLP System with BERT: Conducted sentiment analysis of video descriptions, achieving accuracy above 80%",
          "Recommendation Algorithm with Transformers: Implemented collaborative filtering using user interactions and sentiment analysis results.",
          "REST API with Flask on AWS EC2: Developed a real-time system for recommendation and sentiment analysis requests.",
          "Performance Optimization: Improved user engagement and increased average watch time for recommended videos.",
        ],
        link: "#2",
        technologies: ["Python", "BERT", "Transformers", "Flask", "AWS EC2"],
      },
      {
        title: "Customer Satisfaction Study for a Telecommunication Company",
        description: [
          "Predictive Modeling: Developed supervised models (Random Forest, Gradient Boosting, Logistic Regression) to predict subscription renewal probability.",
          "Results Analysis: Identified key drivers of customer loyalty, such as incident resolution time and perceived service quality.",
          "Improvement Proposals: Made strategic recommendations, such as personalized offers and improved customer support, to reduce churn rates.",
          "Measurable Impact: Estimated a 10% increase in renewal rates through targeted segmentation and personalized retention actions.",
        ],
        link: "#3",
        technologies: ["Python", "Random Forest", "Gradient Boosting", "Logistic Regression"],
      },
    ];

  return (
    <div>
      <div className="w-full font-outfit px-5 md:px-12">
        <h2 className="text-2xl md:text-4xl text-black dark:text-white max-w-4xl ">My Project</h2>
      </div>
      <div className="px-10">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
