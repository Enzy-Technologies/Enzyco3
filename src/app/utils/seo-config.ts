export interface PageSEO {
  title: string;
  description: string;
  image?: string;
}

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title: "Enzy - The Operating System for High-Performance Sales Teams",
    description: "Transform your sales team with Enzy's AI-powered platform. Streamline workflows, boost productivity, and close more deals with intelligent automation and real-time insights.",
  },
  features: {
    title: "Features - Enzy Sales Platform",
    description: "Discover Enzy's powerful features: AI-powered insights, automated workflows, real-time analytics, and seamless integrations that supercharge your sales team's performance.",
  },
  solutions: {
    title: "Solutions - Enzy for Sales Teams",
    description: "Tailored solutions for modern sales teams. From startup scaling to enterprise management, Enzy adapts to your workflow and drives measurable results.",
  },
  resources: {
    title: "Resources - Enzy Learning Center",
    description: "Explore guides, case studies, and best practices to maximize your sales team's potential with Enzy. Learn from industry leaders and success stories.",
  },
  about: {
    title: "About Enzy - Our Mission & Team",
    description: "Learn about Enzy's mission to empower high-performance sales teams with cutting-edge technology. Meet our team and discover our vision for the future of sales.",
  },
};
