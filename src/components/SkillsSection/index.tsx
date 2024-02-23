import React from "react";
import JavascriptLogo from "@images/icons/javascript-logo.svg";
import PythonLogo from "@images/icons/python-logo.svg";
import CPPLogo from "@images/icons/cpp_logo.svg";
import RLogo from "@images/icons/Rlogo.svg";
import SPSSlogo from "@images/icons/SPSS_logo.svg";
import TypescriptLogo from "@images/icons/typescript-logo.svg";
import NodeJSLogo from "@images/icons/nodejs-logo.svg";
import ExpressJSLogo from "@images/icons/express-logo.svg";
import MongoDBLogo from "@images/icons/mongo-logo.svg";
import AthenaLogo from "@images/icons/aws-athena.svg";
import RedshiftLogo from "@images/icons/aws-redshift-logo.svg";
import BigQueryLogo from "@images/icons/bigquery_logo.svg";
import SnowflakeLogo from "@images/icons/snowflake-logo.svg";
import PostgresSQLLogo from "@images/icons/postgresql-logo.svg";
import TalendLogo from "@images/icons/talend-icon.svg";
import AlteryxLogo from "@images/icons/alteryx.svg";
import GlueLogo from "@images/icons/aws-glue.svg";
import GitLogo from "@images/icons/git-logo.svg";
import DockerLogo from "@images/icons/docker-logo.svg";
import HTMLLogo from "@images/icons/html-5-logo.svg";
import TableauLogo "@images/icons/tableau.svg";
import PowerBILogo "@images/icons/powerbi.svg";
import QuicksightLogo "@images/icons/aws-quicksight.svg";
import DatawrapperLogo "@images/icons/datawrapper.svg";
import FlourishLogo "@images/icons/flourish-logo.svg";
import CSSLogo from "@images/icons/css-3-logo.svg";
import SASSLogo from "@images/icons/sass-logo.svg";
import ReactLogo from "@images/icons/react-logo.svg";
import NextJSLogo from "@images/icons/nextjs-logo.svg";
import GatsbyLogo from "@images/icons/gatsby-logo.svg";
import TensorflowLOGO from "@images/icons/tensorflow-logo.svg";
import OpenCVLOGO from "@images/icons/opencv.svg";
import TesseractLOGO from "@images/icons/tesseract.svg";
import TransformersLOGO from "@images/icons/transformers.svg";
import SeabornLOGO from "@images/icons/seaborn.svg";
import ReduxLogo from "@images/icons/redux-logo.svg";
import GraphQLLogo from "@images/icons/graphql-logo.svg";
import ApolloClientLogo from "@images/icons/apollo-client-logo.svg";
import MaterialUILogo from "@images/icons/material-logo.svg";
import AntDLogo from "@images/icons/ant-design-logo.svg";
import PulumiLogo from "@images/icons/pulumi-logo.svg";
import PackerLogo from "@images/icons/packer-logo.svg";
import GoLangLogo from "@images/icons/golang-logo.svg";
import JavaLogo from "@images/icons/java-logo.svg";
import FastAPILogo from "@images/icons/fastapi-logo.svg";
import RedisLogo from "@images/icons/redis-logo.svg";
import KafkaLogo from "@images/icons/kafka-logo.svg";
import MSSQLLogo from "@images/icons/ms_sql_logo.svg";
import BootstrapLogo from "@images/icons/bootstrap-logo.svg";
import TerraformLogo from "@images/icons/terraform-logo.svg";

import HarnessLogo from "@images/icons/harness-logo.svg";
import JFrogLogo from "@images/icons/jfrog-logo.svg";
import GCPLogo from "@images/icons/gcp-logo.svg";
import AWSLogo from "@images/icons/aws-logo.svg";
import AzureLogo from "@images/icons/azure.svg";
import GrafanaLogo from "@images/icons/grafana-logo.svg";
import DynatraceLogo from "@images/icons/dynatrace-logo.svg";
import RancherLogo from "@images/icons/rancher-logo.svg";
import SparkLogo from "@images/icons/spark-logo.svg";
import AirflowLogo from "@images/icons/airflow-logo.svg";
import HadoopLogo from "@images/icons/hadoop-logo.svg";
import PineconeLogo from "@images/icons/pinecone-logo.svg";
import NumpyLogo from "@images/icons/numpy-logo.svg";
import PandasLogo from "@images/icons/pandas-logo.svg";
import SciKitLearnLogo from "@images/icons/scikitlearn-logo.svg";
import PytorchLogo from "@images/icons/pytorch-logo.svg";

import { SKILLS } from "@/constants/menu";
import AppSection from "../AppSection";
import SkillsSubSection from "./SkillsSubSection";

const programmingSkills = [
  
  {
    id: "python",
    logo: PythonLogo,
    name: "Python",
    url: "https://www.python.org/doc/",
  },

  {
    id: "c++",
    logo: CPPLogo,
    name: "C++",
    url: "https://cplusplus.com/",
  },

  {
    id: "R",
    logo: RLogo,
    name: "R",
    url: "https://www.r-project.org/",
  },

  {
    id: "spss",
    logo: SPSSlogo,
    name: "SPSS",
    url: "https://www.ibm.com/products/spss-statistics/gradpack?adoper=227628_2&adobe_mc_sdid=SDID%3D6D6551E086955D42-77660BEE2435813D%7CMCORGID%3DD10F27705ED7F5130A495C99%40AdobeOrg%7CTS%3D1708643103&adobe_mc_ref=https%3A%2F%2Fwww.google.com%2F",
  },

  {
    id: "java",
    logo: JavaLogo,
    name: "Java",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

];

const databaseSkills = [
  {
    id: "mongoDB",
    logo: MongoDBLogo,
    name: "MongoDB",
    url: "https://docs.mongodb.com/",
  },
  {
    id: "postgresSQL",
    logo: PostgresSQLLogo,
    name: "PostgresSQL",
    url: "https://www.postgresql.org/docs/",
  },
  {
    id: "MSSQL",
    logo: MSSQLLogo,
    name: "MS SQL",
    url: "https://www.microsoft.com/en-us/sql-server",
  },

  {
    id: "AWS Athena",
    logo: AthenaLogo,
    name: "AWS Athena",
    url: "https://aws.amazon.com/athena/",
  },

  {
    id: "AWS Redshift",
    logo: RedshiftLogo,
    name: "Redshift",
    url: "https://aws.amazon.com/redshift/",
  },

  {
    id: "GCP BigQuery",
    logo: BigQueryLogo,
    name: "BigQuery",
    url: "https://cloud.google.com/bigquery",
  },

  {
    id: "Snowflake",
    logo: SnowflakeLogo,
    name: "Snowflake",
    url: "https://www.snowflake.com/en/",
  },

];

const dataEngineeringSkills = [
  {
    id: "spark",
    logo: SparkLogo,
    name: "Apache Spark",
    url: "https://spark.apache.org/",
  },
  {
    id: "airflow",
    logo: AirflowLogo,
    name: "Airflow",
    url: "https://airflow.apache.org/",
  },
  {
    id: "Hadoop",
    logo: HadoopLogo,
    name: "Hadoop",
    url: "https://hadoop.apache.org/",
  },
  {
    id: "Talend",
    logo: TalendLogo,
    name: "Talend",
    url: "https://www.talend.com/",
  },

  {
    id: "Alteryx",
    logo: AlteryxLogo,
    name: "Alteryx",
    url: "https://www.alteryx.com/",
  },

  {
    id: "glue",
    logo: GlueLogo,
    name: "AWS Glue",
    url: "https://aws.amazon.com/glue/",
  },

];


// const frontendSkills = [
//   {
//     id: "html",
//     logo: HTMLLogo,
//     name: "HTML",
//     url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//   },
//   {
//     id: "css",
//     logo: CSSLogo,
//     name: "CSS",
//     url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//   },
//   {
//     id: "sass",
//     logo: SASSLogo,
//     name: "SASS",
//     url: "https://sass-lang.com/documentation/",
//   },
//   {
//     id: "bootstrap",
//     logo: BootstrapLogo,
//     name: "Bootstrap 4",
//     url: "https://sass-lang.com/documentation/",
//   },
//   {
//     id: "reactJS",
//     logo: ReactLogo,
//     name: "ReactJS",
//     url: "https://reactjs.org/",
//   },
//   {
//     id: "reactNative",
//     logo: ReactLogo,
//     name: "React Native",
//     url: "https://reactnative.dev/",
//   },
//   { id: "redux", logo: ReduxLogo, name: "Redux", url: "https://redux.js.org/" },
//   {
//     id: "materialUI",
//     logo: MaterialUILogo,
//     name: "Material UI",
//     url: "https://mui.com/",
//   }
// ];

// const backendSkills = [
//   {
//     id: "node",
//     logo: NodeJSLogo,
//     name: "NodeJS",
//     url: "https://nodejs.org/en/docs/",
//   },
//   {
//     id: "express",
//     logo: ExpressJSLogo,
//     name: "ExpressJS",
//     url: "https://expressjs.com/en/api.html",
//   },
//   {
//     id: "fastapi",
//     logo: FastAPILogo,
//     name: "FastAPI",
//     url: "https://expressjs.com/en/api.html",
//   },
//   {
//     id: "redis",
//     logo: RedisLogo,
//     name: "Redis Stack",
//     url: "https://expressjs.com/en/api.html",
//   },
//   {
//     id: "kafka",
//     logo: KafkaLogo,
//     name: "Apache Kafka",
//     url: "https://expressjs.com/en/api.html",
//   }
// ];





const machineLearningSkills = [
  {
    id: "numpy",
    logo: NumpyLogo,
    name: "Numpy",
    url: "https://numpy.org/",
  },
  {
    id: "pandas",
    logo: PandasLogo,
    name: "Pandas",
    url: "https://pandas.pydata.org/",
  },
  {
    id: "scikitlearn",
    logo: SciKitLearnLogo,
    name: "SciKit-Learn",
    url: "https://scikit-learn.org/stable/",
  },
  {
    id: "pytorch",
    logo: PythonLogo,
    name: "Pytorch",
    url: "https://pytorch.org/",
  },
  {
    id: "Tensorflow",
    logo: TensorflowLOGO,
    name: "Tensorflow",
    url: "https://www.tensorflow.org/",
  },

  {
    id: "OpenCV",
    logo: OpenCVLOGO,
    name: "OpenCV",
    url: "https://opencv.org/",
  },

  {
    id: "Tesseract",
    logo: TesseractLOGO,
    name: "Tesseract",
    url: "https://github.com/tesseract-ocr/tesseract",
  },

  {
    id: "Transformers",
    logo: TransformersLOGO,
    name: "Transformers",
    url: "https://huggingface.co/docs/transformers/en/index",
  },

  {
    id: "Seaborn",
    logo: SeabornLOGO,
    name: "Seaborn",
    url: "https://seaborn.pydata.org/",
  },
];

const visualizationSkills = [
  {
    id: "tableau",
    logo: TableauLogo,
    name: "Tableau",
    url: "https://www.tableau.com/",
  },
  {
    id: "powerbi",
    logo: PowerBILogo,
    name: "PowerBI",
    url: "https://www.microsoft.com/en-us/power-platform/products/power-bi",
  },

  {
    id: "quicksight",
    logo: QuicksightLogo,
    name: "Quicksight",
    url: "https://aws.amazon.com/quicksight/",
  },

  {
    id: "datawrapper",
    logo: DatawrapperLogo,
    name: "Datawrapper",
    url: "https://www.datawrapper.de/",
  },

  {
    id: "flourish",
    logo: FlourishLogo,
    name: "Flourish",
    url: "https://flourish.studio/",
  },
];

const cloudSkills = [
  { id: "git", logo: GitLogo, name: "Git", url: "https://git-scm.com/doc" },
  {
    id: "docker",
    logo: DockerLogo,
    name: "Docker",
    url: "https://docs.docker.com/",
  },

  {
    id: "GCP",
    logo: GCPLogo,
    name: "GCP",
    url: "https://cloud.google.com/",
  },

  {
    id: "aws",
    logo: AWSLogo,
    name: "AWS",
    url: "https://aws.amazon.com/",
  },

  {
    id: "azure",
    logo: AzureLogo,
    name: "Azure",
    url: "https://azure.microsoft.com/en-us",
  },

  // {
  //   id: "packer",
  //   logo: PackerLogo,
  //   name: "Packer",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "terraform",
  //   logo: TerraformLogo,
  //   name: "Terraform",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "pulumi",
  //   logo: PulumiLogo,
  //   name: "Pulumi",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "harness",
  //   logo: HarnessLogo,
  //   name: "Harness",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "jfrog",
  //   logo: JFrogLogo,
  //   name: "JFrog",
  //   url: "https://docs.docker.com/",
  // },
  
  // {
  //   id: "rancher",
  //   logo: RancherLogo,
  //   name: "Rancher",
  //   url: "https://docs.docker.com/",
  // }
];

function SkillsSection() {
  return (
    <AppSection headerTxt={SKILLS}>
      <div className="flex lg:flex-row max-lg:flex-col-reverse flex-col sm:gap-12 gap-9 section-content-padding">
        <div className="lg:basis-2/4 basis-full flex flex-col sm:gap-12 gap-9">
          <SkillsSubSection headerTxt={"Programming Languages"} skills={programmingSkills} />
          <SkillsSubSection headerTxt={"CI/CD and Cloud"} skills={cloudSkills} />
          <SkillsSubSection headerTxt={"Data Engineering"} skills={dataEngineeringSkills} />
        </div>

        <div className="lg:basis-2/4 basis-full flex flex-col sm:gap-12 gap-9">
          <SkillsSubSection headerTxt={"Databases"} skills={databaseSkills} />
          <SkillsSubSection headerTxt={"Visualization"} skills={visualizationSkills} />
          <SkillsSubSection headerTxt={"Machine Learning"} skills={machineLearningSkills} />
        </div>
      </div>
    </AppSection>
  );
}

export default SkillsSection;
