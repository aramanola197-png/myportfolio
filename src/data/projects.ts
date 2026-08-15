export interface Project {
  id: string;
  name: string;
  url: string;
  screenshot: string;
  description: string[];
  category: "main" | "portfolio";
}

export const projects: Project[] = [
  {
    id: "altiq-ai",
    name: "ALTIQ AI",
    url: "https://altiq-ai.onrender.com",
    screenshot: "/work/websites/altiq-ai/screenshot.png",
    category: "main",
    description: [
      "ALTIQ AI is a Builder Operating System built for the Stacks ecosystem and Zero Authority DAO. It brings project-isolated workspaces, project-scoped AI conversations with persistent memory, research and documentation tools, branding capabilities, and opportunity discovery into a single environment.",
      "The platform is designed around a clear workflow: create a project, build with AI assistance, then discover funding and opportunities from official Zero Authority DAO and Stacks sources. Secure authentication and protected workspaces keep every project’s data isolated. The goal is to give founders and builders one coherent system instead of a collection of disconnected tools.",
    ],
  },
  {
    id: "axiomcloud-ai",
    name: "Axiom Cloud",
    url: "https://axiomcloud-ai.onrender.com",
    screenshot: "/work/websites/axiomcloud-ai/screenshot.png",
    category: "main",
    description: [
      "Axiom Cloud is an AI-native platform that takes an idea from understanding and research through to building and deployment. Four AI systems operate inside one workspace: Research Studio for market sizing, competitor analysis, trends and structured citations; AI Tutor that explains business concepts, technology stacks and industry terminology at the user’s level; AI Builder that produces real project architecture, file structure and a downloadable working codebase; and AI Board Room where the user can pitch to AI personas representing an Investor, CTO and Product Manager.",
      "Its central idea is simple and direct: Think. Research. Build. Deploy. The platform is built so a founder does not have to jump between disconnected tools when moving from the first question to a deployed product.",
    ],
  },
  {
    id: "aethreon-iq",
    name: "AETHREON IQ",
    url: "https://aethreonintelligence.onrender.com",
    screenshot: "/work/websites/aethreon-intelligence/screenshot.png",
    category: "main",
    description: [
      "AETHREON IQ is a reputation intelligence platform for contributors, communities and DAOs. It surfaces on-chain signals that matter before contributor evaluation. The analytical architecture includes Contributor Intelligence (on-chain history, DAO participation, proposal records and voting consistency), Address Verification that parses and verifies different cryptographic address formats including Base58 and contract/sub-path/network-prefix handling, and Community Mapping that reveals the structure of a DAO — active contributors, influence and trust concentrations.",
      "Powered by Zero Authority DAO and oriented around Web3 intelligence, the platform is designed to give decision-makers a clearer layer of signal when evaluating collaborators and communities.",
    ],
  },
  {
    id: "uncle-ubong",
    name: "Uncle Ubong",
    url: "https://uncle-ubong.onrender.com",
    screenshot: "/work/websites/uncle-ubong/screenshot.png",
    category: "portfolio",
    description: [
      "A clean personal portfolio website designed and taken live for Uncle Ubong (@Ubong_007), a Web3 Key Opinion Leader and community builder. The site presents his professional identity, core competencies in community building and content, ambassador work, and journey in the Web3 space.",
      "Built as a focused, modern portfolio that can be shared publicly under the ownership agreements that allow it. This is one of the portfolio sites I am permitted to display.",
    ],
  },
];

export const writingPieces = [
  {
    id: "prompt-engineers",
    title: "The Best Prompt Engineers Rarely Start With a Prompt",
    url: "https://x.com/i/status/2078796786890920330",
    type: "Article",
    excerpt:
      "A long-form exploration of why the quality of a prompt is usually a reflection of the quality of thinking that happens before any prompt is written. The piece argues that professional prompt engineering begins with problem understanding, context, and clear objectives rather than clever wording alone.",
  },
  {
    id: "chainlift",
    title: "Writing for ChainLift",
    url: "https://x.com/Chainlift_",
    type: "Ecosystem Writing",
    excerpt:
      "Professional writing and content work for the ChainLift project and ecosystem — covering product communication, onboarding narratives, build updates and technical explanation aimed at builders and communities entering the Stacks and on-chain space.",
  },
];
