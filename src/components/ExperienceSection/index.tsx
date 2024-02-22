import React, {useEffect, useRef} from "react";
import classNames from "classnames";
import AppSection from "../AppSection";
import { EXPERIENCE } from "@/constants/menu";
import AppText from "../AppText";
import Image from "next/image";

const experienceArr = [
  {
    id: "Job1",
    role: "Medical Imaging Data Engineer co-op",
    company: "Philips North America",
    companyUrl: "https://www.usa.philips.com/a-w/about/news/archive/standard/news/press/2021/20211110-philips-receives-grant-to-improve-quality-and-accessibility-of-maternal-care-in-low-and-middle-income-countries.html",
    companyLogoUrl: "/images/philips-logo.png",
    workingPeriod: "January 2023 - August 2023",
    highlights: [
      `● Deployed YOLO model on unstructured dataset of ultrasound image data for detection of fetal presence for prediction of features like gestational age and number of gestations, contributing to 45% accuracy in object detection`,
      `● Used data exploration and transformation techniques to transform 3TB+ of unprocessed ultrasound image data into structured NumPy arrays, enabling estimation of ultrasound features using predictive analytics reducing manual labor by 10% each month`,
      `● Migrated 15TB+ data warehouse including stored procedures, triggers and ETLs to MD.ai (a medical AI cloud healthcare API) leveraging AWS S3 and Glue resulting in yearly cost savings of $25k`,
      `● Automated a data pipeline using Python and Airflow to catalog ultrasound information of 100k+ patients for annotation extraction purposes, saving 15 hours of manual labor each week`,
      `● Collaborated with 3 cross-functional teams to integrate data from 9 disparate data sources using Python, S3 and Redshift to create BI-ready data views for analysis with AWS Quicksight dashboard to derive clear, compelling actionable insights`
    ],
  },
  {
    id: "Job2",
    role: "Application Development Analyst",
    company: "Accenture",
    companyUrl: "https://www.accenture.com/in-en",
    companyLogoUrl: "/images/accenture-logo.png",
    workingPeriod: "June 2021 - December 2021",
    highlights: [
      `● Utilized python libraries to outline anomalous securities by applying statistical approach (Z-score and Standard Deviation); received 84% approval from Compliance team`,
      `● Trained model to apply anomaly detection algorithm to assign anomaly scores and filter out anomalous securities with accuracy of 78% contributing to development of marketing mix models and delivering 10% boost on ROI`
  },
];

function ExperienceSection() {

  const timeLineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    experienceArr.forEach(experience => {
      const timeLineRef = timeLineRefs.current[experience.id];

      if(!timeLineRef) return;

      const obsCallBack = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;

        if (!entry.intersectionRatio && !entry.isIntersecting) {
          timeLineRef.classList.remove(`show-timeline-content`);
          timeLineRef.classList.add(`hide-timeline-content`);
        }

        if (entry.intersectionRatio > 0.2 && entry.isIntersecting) {
          timeLineRef.classList.remove(`hide-timeline-content`);
          timeLineRef.classList.add(`show-timeline-content`);
        }
      };
      const obsOptions = {
        root: null,
        threshold: [0, 0.2],
      };
      const timelineObserver = new IntersectionObserver(
        obsCallBack,
        obsOptions,
      );
      timelineObserver.observe(timeLineRef);
      observerRefs.current[experience.id] = timelineObserver;
    });

    return () => {
      experienceArr.forEach(experience => {
        observerRefs.current[experience.id].disconnect();
      });
    };
  }, []);


  return (
    <AppSection headerTxt={EXPERIENCE}>
      <div
        className={`section-content-padding w-full relative flex flex-col gap-8 before:content-[''] before:absolute before:h-full before:w-1 before:rounded-full before:bg-borderColor lg:before:left-1/2 before:left-[30px]`}
      >
        {experienceArr.map((experience, index) => {
          return (
            <div
              className="py-4 lg:px-16 px-8 relative"
              key={experience.id}
              ref={(el) => (timeLineRefs.current[experience.id] = el)}
            >
              <div
                className={classNames(
                  `bg-backgroundColor-card-day dark:bg-backgroundColor-card-night h-full rounded-md relative p-4 border-b-4 border-borderColor hover:border-primaryColor-light lg:w-[45%] w-[calc(100%-24px)] left-[44px] transition-all duration-500 ease-in-out`,
                  index % 2 === 0 &&
                    `lg:left-0 after:content-[''] after:absolute after:h-2 after:w-2 after:rotate-45 after:bg-backgroundColor-card-day dark:after:bg-backgroundColor-card-night lg:after:left-[calc(100%-4px)] after:-left-[4px] after:top-6`,
                  index % 2 !== 0 &&
                    `lg:left-[55%] after:content-[''] after:absolute after:h-2 after:w-2 after:rotate-45 after:bg-backgroundColor-card-day dark:after:bg-backgroundColor-card-night after:-left-[4px] after:top-6`
                )}
              >
                <AppText textTag="h3" extraMedium bold defaultColor>
                  {experience.role}
                </AppText>
                <AppText textTag="p" default secondary semiBold>
                  {experience.company}
                </AppText>
                <ul className="list-disc p-4 marker:text-textColor-primary-day dark:marker:text-textColor-primary-night">
                  {experience.highlights.map((highlight, index) => {
                    return (
                        <li key={index}>
                          <AppText textTag="p" default defaultColor>
                            {highlight}
                          </AppText>
                        </li>
                    );
                  })}
                </ul>
                <AppText textTag={"p"} semiBold default defaultColor customClass="lg:hidden mt-2">
                  {experience.workingPeriod}
                </AppText>
              </div>
              <div
                className={`bg-backgroundColor-day p-2 dark:bg-backgroundColor-night border-4 border-borderColor absolute h-16 w-16 rounded-full top-3 lg:left-[calc(50%-30px)] left-0 transition-transform duration-500 ease-in-out`}
              >
                <a href={experience.companyUrl} target={"_blank"}>
                  <Image
                    alt={experience.company}
                    src={experience.companyLogoUrl}
                    fill
                  />
                </a>
              </div>
              <div
                className={classNames(
                  `w-[45%] h-16 rounded-md absolute top-2 lg:flex lg:items-center hidden transition-all duration-500 ease-in-out`,
                  index % 2 === 0 && `left-[55%]`,
                  index % 2 !== 0 && `left-0 justify-end`
                )}
              >
                <AppText textTag={"p"} semiBold default defaultColor>
                  {experience.workingPeriod}
                </AppText>
              </div>
            </div>
          );
        })}
      </div>
    </AppSection>
  );
}

export default ExperienceSection;
