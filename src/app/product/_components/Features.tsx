"use client";
import React from "react";
import { NextPage } from "next";
import {
  FaChartBar,
  FaMicrophone,
  FaFlag,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  text: string;
}

interface FeatureData {
  title: string;
  description: string;
  features: Feature[];
}

const featuresData: FeatureData[] = [
  {
    title: "Pattern Recognition",
    description: "Identify patterns, trends, and anomalies in spoken language.",
    features: [
      { icon: <FaChartBar />, text: "Identification of recurring themes" },
      { icon: <FaMicrophone />, text: "Speech-to-text transcription accuracy" },
      {
        icon: <FaMicrophone />,
        text: "Detection of anomalies in conversations",
      },
    ],
  },
  {
    title: "Sentiment Analysis",
    description:
      "Understand customer emotions and tailor responses accordingly.",
    features: [
      { icon: <FaChartBar />, text: "Emotion detection in voice tone" },
      { icon: <FaMicrophone />, text: "Sentiment scoring and tracking" },
      { icon: <FaMicrophone />, text: "Customized response suggestions" },
    ],
  },
  {
    title: "Compliance Monitoring",
    description:
      "Ensure adherence to industry regulations and company policies.",
    features: [
      {
        icon: <FaFlag />,
        text: "Automatic flagging of non-compliant conversations",
      },
      { icon: <FaFlag />, text: "Detailed compliance reports" },
      { icon: <FaFlag />, text: "Regulatory adherence checks" },
    ],
  },
  {
    title: "Upsell and Cross-sell Opportunities",
    description: "Discover new opportunities for revenue generation.",
    features: [
      { icon: <FaHandHoldingUsd />, text: "Identification of upsell cues" },
      { icon: <FaHandHoldingUsd />, text: "Cross-sell suggestion engine" },
      { icon: <FaHandHoldingUsd />, text: "Sales performance tracking" },
    ],
  },
];

const FeatureCard = ({ title, description, features }: FeatureData) => {
  return (
    <div className="flex justify-between bg-[#222222] p-6 md:p-8 lg:p-10 rounded-lg md:w-[1000px] h-[240px] shadow-[inset_0px_0px_20px_0px_#54545433]">
      <div className="flex flex-col justify-left w-[100px]">
        <h2 className="font-space-grotesk text-1xl md:text-2xl font-semibold text-white mb-4">
          {title}
        </h2>
        <p className="font-space-grotesk text-1xl md:text-1xl text-white">
          {description}
        </p>
      </div>
      <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 p-3 rounded bg-[#2D2D2D] shadow-lg text-white"
          >
            <span className="text-lg">{feature.icon}</span>
            <span className="font-space-grotesk flex flex-col">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FeatureSection: NextPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-10 px-4 text-left">
      <h1 className="font-space-grotesk text-1xl md:text-5xl font-semibold text-white mb-10 text-left">
        Key Features
      </h1>
      <div className="lg:[grid gap-6 w-full max-w-6xl grid-cols-1 md:grid-cols-1] flex flex-col">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            features={feature.features}
          />
        ))}
      </div>
    </div>
  );
};
