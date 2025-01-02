import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  link: string;
  linkText: string;
  phases?: {
    title: string;
    features: string[];
  }[];
};

export default function ProjectCard({
  title,
  description,
  features,
  link,
  linkText,
  phases
}: ProjectCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        {!phases && (
          <ul className="mb-4 space-y-1 text-sm">
            {features.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>
        )}

        {phases && phases.map((phase, i) => (
          <div key={i} className="mb-4">
            <h4 className="font-semibold mb-2">{phase.title}</h4>
            <ul className="mb-4 space-y-1 text-sm">
              {phase.features.map((feature, j) => (
                <li key={j}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}

        <a
          href={link}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}