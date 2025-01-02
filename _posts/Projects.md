---
title: "Featured Projects"
excerpt: "From cloud-native applications to AI integrations - showcasing my technical evolution and project contributions"
coverImage: "/assets/blog/media/cover.jpg"
author:
  name: Drew Ponce
  picture: "/assets/blog/authors/dd.png"
ogImage:
  url: "/assets/blog/media/cover.jpg"
---

import ProjectCard from '../src/app/_components/project-card'

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <ProjectCard
    title="One Accord App"
    description="A cross-platform mobile application for Christian community building"
    features={[
      "React Native with TypeScript",
      "Cloud infrastructure using AWS Amplify",
      "Real-time messaging and community features",
      "Prayer request management system",
      "Location-based church discovery"
    ]}
    link="https://github.com/Firm-Collective/One-Accord"
    linkText="View Repository"
  />

  <ProjectCard
    title="Develop in Rest"
    description="AI-powered development assistant platform"
    features={[
      "Next.js 13 with TypeScript",
      "Cloudflare Workers and KV storage",
      "Claude AI integration",
      "Real-time code analysis",
      "Custom UI components with Tailwind"
    ]}
    link="https://developir.ai"
    linkText="View Live Site"
  />

  <ProjectCard
    title="TheDolorosa.com Evolution"
    description="Multi-phase transformation of a top-rated Los Angeles tattoo and piercing studio"
    phases={[
      {
        title: "Phase 1: WordPress to Webflow (2022)",
        features: [
          "Content migration and restructuring",
          "Modern design implementation",
          "Improved content management",
          "Enhanced user experience",
          "SEO optimization resulting in increased traffic"
        ]
      },
      {
        title: "Phase 2: Webflow to Cloud-Native (2024)",
        features: [
          "Next.js implementation",
          "Dynamic content delivery",
          "Cloudflare deployment",
          "Custom CMS integration",
          "Performance optimization",
          "Advanced SEO features and analytics"
        ]
      }
    ]}
    link="https://github.com/drewdevvv/thedolorosa"
    linkText="View Repository"
  />
</div>

## Technical Stack
- Cloud: AWS Amplify, Cloudflare Workers
- Frontend: React Native, Next.js, TypeScript
- Backend: Node.js, Express, Serverless Functions
- AI: Claude AI, OpenAI integration
- DevOps: CI/CD, Docker, Git