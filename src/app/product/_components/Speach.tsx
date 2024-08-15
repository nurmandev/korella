"use client";

import { Star, Sparkles } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => (
  <div className="bg-[#222222] rounded-lg p-6 text-white">
    <Sparkles className="text-white mb-4 h-6 w-6" />

    <h3 className="text-sm inline-flex border border-white px-3 py-1 rounded-lg tracking-tight mb-10">
      {title}
    </h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

export const SpeechAnalysis = () => (
  <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 font-space-grotesk">
    <h2 className="text-center text-3xl font-light mb-8">
      Why Choose Speech Analysis
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <Card
        title="Deep Insights into Customer Interactions"
        description="Identify recurring issues, customer pain points, and areas for improvement in your products or services."
      />
      <Card
        title="Sentiment Analysis"
        description="Gauge customer emotions and sentiments to tailor your communication strategies."
      />
      <Card
        title="Compliance Monitoring"
        description="Automatically flag non-compliant conversations to mitigate risks and avoid costly fines."
      />
      <Card
        title="Operational Efficiency"
        description="Optimize staffing levels, reduce call handling times, and improve overall operational efficiency."
      />
    </div>
  </div>
);
