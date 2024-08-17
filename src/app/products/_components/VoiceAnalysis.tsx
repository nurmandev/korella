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

export const VoiceAnalysis = () => (
  <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 font-space-grotesk">
    <h2 className="text-center text-3xl font-light mb-8">
      Why Choose Voice Assistant?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <Card
        title="24/7 Customer Service"
        description="Ensure support is available at all times, improving customer satisfaction and loyalty."
      />
      <Card
        title="Cost Efficiency"
        description="Reduce the need for a large customer support team, cutting down on labor costs."
      />
      <Card
        title="Reduced Wait Times"
        description="Handle multiple calls simultaneously, leading to quicker resolution of customer issues."
      />
      <Card
        title="Enhanced Service Quality"
        description="Handle multiple calls simultaneously, leading to quicker resolution of customer issues."
      />
    </div>
  </div>
);
