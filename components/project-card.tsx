import { HoverEffect } from "./ui/card-hover-effect";

export function ProjectCard() {
    const projects = [
      {
        title: "Prediction of Product Purchase Using Logistic Regression Model",
        description: "This project uses a logistic regression model to predict customer purchase behavior by analyzing various data points. The goal is to segment the customer base and tailor marketing strategies accordingly for more targeted outreach.",
        link: "https://github.com/IlyOuhammi/Prediction-of-Product-Purchase-Using-Logistic-Regression-Model",
      },
      {
        title: "Youtube trending analysis",
        description: "This project analyzes YouTube trending data to understand factors influencing video popularity, including view counts, likes, and comments. It uses Python and data analysis libraries to identify trends and predict viral content, offering insights into audience engagement. The goal is to help creators and marketers understand what drives success on the platform.",
        link: "https://github.com/IlyOuhammi/youtube-trending-analysis",
      },
      {
        title: "Financial risk for loan approval",
        description:
          "This project uses machine learning techniques to assess financial risk for loan approval. It focuses on predicting whether a loan application should be approved based on factors like income, credit score, and loan amount. The model helps in making data-driven decisions by classifying applicants into categories based on their likelihood to repay. The project involves data preprocessing, feature selection, and model evaluation to improve the accuracy of the loan approval predictions.",
        link: "https://github.com/IlyOuhammi/financial-risk-for-loan-approval",
      },
    ];

  return (
    <div>
      <div className="w-full font-outfit">
        <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl ">My Project</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
