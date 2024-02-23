"use client";

import React, { useState, useRef, useEffect } from "react";
import AppSection from "../AppSection";
import { PROJECTS } from "@/constants/menu";
import AppButton from "../AppButton";
import AppText from "../AppText";
import GithubLogo from "@images/icons/github-logo.svg";
import GlobeIcon from "@images/icons/globe-icon.svg";
import PlayIcon from '@images/icons/play-icon.svg';
import Image from "next/image";

const TAGS = {
  DS: "Data Science and ML",
  DA: "Data Analysis and Visualization",
  NN: "Neural Network"
};

const PER_PAGE_PROJECTS = 3;

const randomColors = [
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-red-600",
  "text-pink-600",
  "text-purple-600",
  "text-indigo-600",
  "text-teal-600",
  "text-orange-600",
  "text-lime-600",
  "text-cyan-600",
  "text-emerald-600",
  "text-amber-600",
  "text-fuchsia-600",
  "text-true-gray-600",
];

const mainProjects = [
  {
    id: "llm_model",
    name: "Data Verification using LLM",
    description: `Developed Large Language Model (LLM) using Optical Character Recognition (OCR) technology on various use cases – images containing text with different font, sentiment analysis, hand written notes to extract text from images. Leveraged transformers to utilize pre-trained LLM models like BART for various Natural Language Processing (NLP) tasks, enhancing accuracy of the extracted text output`,
    techStack: ["Python", "Pandas", "Numpy", "OpenCV", "Tesseract", "Transformers", "Neural Networks"],
    imgURL: "/images/llm.jpg",
    githubLink: `https://github.com/abhiramdesai17/Data-Verification-LLM`,
    tags: [TAGS.NN]
  },

  {
    id: "credit-card-default-classifier",
    name: "Credit Card Default Classifier",
    description: `Conducted comprehensive pre-processing and imputation on financial dataset to determine if client has defaulted in monthly credit card payments, interpreting findings through visualization and advanced statistical techniques.
    Developed and evaluated various machine learning models including logistic regression, SVM and Random Forest classifier, identifying SVM as the optimal model with 86% classification accuracy, improving efficiency by 17% compared to baseline model.`,
    techStack: ["Python", "Pandas", "Numpy", "Scikitlearn", "Tensorflow", "Seaborn", "Matplotlib"],
    imgURL: "/images/creditcarddefault.jpg",
    githubLink: `https://github.com/abhiramdesai17/Default-of-Credit-Card-Clients`,
    tags: [TAGS.DS]
  },

  {
    id: "flight-delay-classifier",
    name: "Flight Delay Classification Model",
    description: `Implemented a flight classification model based on the flight delay factor employing a dataset encompassing flight data recorded in January 2019 in the United States consisting of 583,986 records and 22 binary categorical data attributes.
    Performed intricate cleaning and preprocessing operations and performed exploratory data analysis (EDA) to identify
    trends and make interpretations and optimizations on a logistic regression base model with classification accuracy of 85%.
    Employed 5+ advanced machine learning algorithms with highest classification accuracy of 92% on Multi Layer Pereptron (MLP) Neural Network, improving data efficiency by 7%`,
    techStack: ["Python", "Pandas", "Numpy", "Scikitlearn", "Seaborn", "Matplotlib"],
    imgURL: "/images/flightdelay.jpg",
    githubLink: `https://github.com/abhiramdesai17/flight-delay-classifier`,
    tags: [TAGS.DS]
  },


  {
    id: "covid19",
    name: "Covid 19 Storyboard - Data Visualization",
    description: `Developed a comprehensive Tableau Dashboard to analyze the global impact of the Covid-19 pandemic, utilizing data from January 2021 to October 2021.
    Processed and curated a diverse set of data, encompassing cases, deaths, vaccinations, and other relevant metrics, sourced from countries worldwide.
    Conducted in-depth trend analysis, identifying key patterns and anomalies within the dataset. Insights included the identification of countries with the highest number of cases, most deaths, and the highest vaccination and recovery rates.
    Leveraged advanced analytical techniques to explore correlations between Covid-19 metrics and factors such as health-related issues, age demographics, and other relevant variables.
    Contributed actionable insights to public health discussions by translating complex data patterns into understandable narratives for stakeholders.
    Collaborated with cross-functional teams to ensure the accuracy and reliability of data sources, and facilitated ongoing updates to the dashboard for real-time monitoring.`,
    techStack: ["Python", "Tableau"],
    imgURL: "/images/covid19.jpg",
    webLink: `https://public.tableau.com/app/profile/abhiram.desai/viz/COVID-19Storyboard_17069095125430/COVID-19StoryBoard`,
    tags: [TAGS.DA]
  },

  {
    id: "crime-prediction",
    name: "Crime Prediction ML Project",
    description: `Designed linear regression, kNN, decision tree and random forest prediction models to predict the total number of offenses per million people based on locality and type of crime to assist police department of the city with accuracy of 87%.
    Performed exploratory data analysis and generated geospatial visualization of the data showing the offence type with highest number of offences in that province.
    Uploaded the cleaned dataset in the data warehouse (AWS Redshift) connected with an interactive Tableau dashboard.`,
    techStack: ["Python", "Geopandas", "Redshift", "Tableau"],
    imgURL: "/images/crimeprediction.png",
    githubLink: `https://github.com/abhiramdesai17/Crime-Prediction`,
    tags: [TAGS.DS]
  },

  {
    id: "uber-lyft",
    name: "Uber vs Lyft Classification Analysis",
    description: `Performed quantitative analysis of Uber and Lyft rides in Boston, MA to accurately determine which of the two is more likely to be used based on a set of given factors.
    The dataset consists of 700k+ instances and 57 attributes and takes into consideration the prices of Uber and Lyft rides in and around the city of Boston. It includes various factors like the source and destination of the ride, time of the day, weather conditions, pricing, etc.`,
    techStack: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "Tableau", "Google Sites"],
    imgURL: "/images/uberlyft.png",
    webLink: `https://sites.google.com/husky.neu.edu/ubervslyft/home`,
    tags: [TAGS.DA]
  },

  {
    id: "stroke-prediction",
    name: "Stroke Prediction",
    description: `Standardized regression models to predict whether a patient is likely to get a stroke based on gender, age, diseases and smoking status with a prediction accuracy of 90.2% on Naive Bayes model. 
    Plotted 7 count plots to observe behaviour of stroke based on various categorical features like gender, hypertension, marital status, heart disease, residence, smoking status and employment.
    Modelled kNN, SVM and Random Forest models to improve overall efficiency by 9.5% with kNN model giving highest accuracy of 99.7%.`,
    techStack: ["Pandas", "Numpy", "Seaborn", "Matplotlib", "Scikitlearn"],
    imgURL: "/images/strokeprediction_2.png",
    githubLink: `https://github.com/abhiramdesai17/Stroke-Prediction`,
    tags: [TAGS.DS]
  }
  
];

function ProjectsSection() {
  const [selectedProjects, setSelectedProjects] = useState(mainProjects);
  const [displayedProjects, setDisplayedProjects] = useState(PER_PAGE_PROJECTS);

  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const projectObserverRefs = useRef<{ [key: string]: IntersectionObserver }>(
    {}
  );

  useEffect(() => {
    selectedProjects.forEach((project) => {
      const projectRef = projectRefs.current[project.id];

      if (!projectRef) return;

      const obsCallBack = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          projectRef.classList.remove("opacity-100");
          projectRef.classList.remove("translate-y-0");
          projectRef.classList.add("opacity-0");
          projectRef.classList.add("translate-y-[5%]");
        } else {
          projectRef.classList.remove("opacity-0");
          projectRef.classList.remove("translate-y-[5%]");
          projectRef.classList.add("opacity-100");
          projectRef.classList.add("translate-y-0");
        }
      };

      const obsOptions = {
        root: null,
        threshold: 0,
      };

      const projectObserver = new IntersectionObserver(obsCallBack, obsOptions);
      projectObserver.observe(projectRef);
      projectObserverRefs.current[project.id] = projectObserver;
    });

    return () => {
      selectedProjects.forEach((project) => {
        projectObserverRefs.current[project.id]?.disconnect();
      });
    };
  }, [selectedProjects, displayedProjects]);

  const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedProjects(mainProjects);
      setDisplayedProjects(displayedProjects);
    } else {
      const filteredProjects = mainProjects.filter((project) =>
        project.tags.includes(value)
      );
      setSelectedProjects(filteredProjects);
      setDisplayedProjects(displayedProjects);
    }
  };

  const handleOnClickBtn = () => {
    if (displayedProjects < selectedProjects.length) {
      setDisplayedProjects((prevState) => prevState + PER_PAGE_PROJECTS);
    } else {
      setDisplayedProjects((prevState) => prevState - PER_PAGE_PROJECTS);
    }
  };

  return (
    <AppSection headerTxt={PROJECTS}>
      <div className="section-content-padding w-full relative flex flex-col items-center justify-start md:gap-8 gap-6">
        <select
          onChange={onSelectTag}
          className="self-end bg-transparent border-2 rounded-md border-borderColor p-2 cursor-pointer text-textColor-primary-day dark:text-textColor-primary-night"
        >
          {["all", ...Object.values(TAGS)].map((tag) => {
            return (
              <option
                className="bg-backgroundColor-day dark:bg-backgroundColor-night"
                key={tag}
                value={tag}
              >
                {tag}
              </option>
            );
          })}
        </select>
        <div className="sm:project-section-grid-layout flex flex-col gap-4">
          {selectedProjects.slice(0, displayedProjects).map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="md:p-6 p-4 bg-backgroundColor-card-day dark:bg-backgroundColor-card-night w-full rounded-md opacity-0 translate-y-[5%] transition-all duration-500 ease-linear"
            >
              <div className="w-full h-[200px] sm:h-[240px] rounded-md relative mb-4 overflow-hidden">
                <Image alt={project.name} src={project.imgURL} fill />
              </div>
              <div className="flex flex-col gap-3 justify-start">
                <div className="flex gap-2 justify-between align-center">
                <AppText textTag="h3" extraMedium bold defaultColor>
                  {project.name}
                </AppText>
                  <div className="flex gap-2 align-center justify-end">
                  <a href={project.githubLink} target="_blank">
                    <GithubLogo className="h-9 w-9" />
                  </a>
                  {project.webLink && <a href={project.webLink} target="_blank">
                    <GlobeIcon className="h-9 w-9" />
                  </a>}
                  {/*project.demoLink && <a href={project.demoLink} target="_blank"><PlayIcon className="h-9 w-9"/></a>*/}
                </div>
                  </div>
                <AppText textTag="p" default secondary>
                  {project.description}
                </AppText>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((stack, index) => {
                    return (
                      <p
                        key={stack}
                        className={`text-sm ${index < randomColors.length ? randomColors[index] : randomColors[Math.floor(Math.random() * (13))]}`}
                      >{`#${stack}`}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProjects.length > PER_PAGE_PROJECTS && (
          <AppButton
            buttonType="secondary"
            buttonText={`${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } `}
            ariaLabel={`click to ${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } projects`}
            onClick={handleOnClickBtn}
          />
        )}
      </div>
    </AppSection>
  );
}

export default ProjectsSection;
