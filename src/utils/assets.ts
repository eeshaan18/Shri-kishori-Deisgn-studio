/**
 * Type-safe asset management for production-ready image references.
 * Using this constant ensures that image paths match the public folder
 * and prevent 404 errors during Vercel deployment (which is case-sensitive).
 */
export const ASSETS = {
  // Global / Root Images
  LOGO: '/images/logo.png',
  LOGO1: '/images/logo1.png',
  CLOSED: '/images/closed.svg',
  ERROR_404_DARK: '/images/404-dark.svg',
  ERROR_404: '/images/404.svg',

  // Portfolio Section
  PORTFOLIO: {
    WALLET: '/images/portfolio/icon-wallet.svg',
    IMG_PORTFOLIO: '/images/portfolio/img portfolio.png',
    MOBILEAPP: '/images/portfolio/icon-mobileapp.svg',
    VAULT: '/images/portfolio/icon-vault.svg',
  },

  // Hero Section
  HERO: {
    BANNER: '/images/hero/banner image.png',
  },

  // Work / About Section
  WORK: {
    BG_START: '/images/work/bg-start.png',
    WITH_US: '/images/work/img work with us.png',
  },

  // About Section
  ABOUT: {
    FOUNDER: '/images/about/Founder.png',
    IMG_12: '/images/about/12.jpg',
    ABOUT_1: '/images/about/about 1.png',
    IMG_PORTFOLIO: '/images/about/img portfolio.png',
    IMG_11: '/images/about/11.jpg',
  },

  // Icons Utility
  ICONS: {
    DOGECOIN: '/images/icons/icon-dogecoin.svg',
    SERVICES: '/images/icons/icon-Services.svg',
    STAR: '/images/icons/icon-star.svg',
    BLOCKCHAIN: '/images/icons/icon-blockchain.svg',
    BAG: '/images/icons/icon-bag.svg',
    LITECOIN: '/images/icons/icon-litecoin.svg',
    ETHEREUM: '/images/icons/icon-ethereum.svg',
    SOLANA: '/images/icons/icon-solana.svg',
    CONSULTING: '/images/icons/icon-consulting.svg',
    BITCOIN: '/images/icons/icon-bitcoin.svg',
    BITCOIN_CIRCLE: '/images/icons/icon-bitcoin-circle.svg',
  },

  // Logo variations
  LOGO_VARIANTS: {
    WHITE: '/images/logo/logo-white.svg',
    SVG: '/images/logo/logo.svg',
    RADHE2: '/images/logo/Radhe2.svg',
  },

  // Timeline Section
  TIMELINE: {
    SUPPORT: '/images/timeline/icon-support.svg',
    PLANNING: '/images/timeline/icon-planning.svg',
    REFINEMENT: '/images/timeline/icon-refinement.svg',
    PROTOTYPE: '/images/timeline/icon-prototype.svg',
    IMG: '/images/timeline/img.png',
  },

  // Perks Section
  PERKS: {
    SUPPORT: '/images/perks/icon-support.svg',
    BG: '/images/perks/perk-bg.png',
    GROUP_85: '/images/perks/Group 85.png',
    PERK: '/images/perks/perk.png',
    COMMUNITY: '/images/perks/icon-community.svg',
    ACADEMY: '/images/perks/icon-academy.svg',
  },

  // UI / Categories (Documentation)
  DOCS: {
    TYPESCRIPT: '/images/documentation/Categories=Typescript.svg',
    NEXTAUTH: '/images/documentation/nextauth.png',
    AXIOS: '/images/documentation/axios.svg',
    NEXTJS: '/images/documentation/Categories=Nextjs.svg',
    TAILWIND: '/images/documentation/Categories=Tailwind.svg',
    REACT: '/images/documentation/Categories=React.svg',
  },

  // Footer / Socials
  FOOTER: {
    FACEBOOK: '/images/footer/facebook.svg',
    LINKEDIN: '/images/footer/linkedin.svg',
    TWITTER: '/images/footer/twitter.svg',
  },

  // Upgrade
  UPGRADE: {
    IMG: '/images/upgrade/img-upgrade.png',
  },
} as const;

/**
 * Usage Examples:
 * 
 * 1. Standard Next.js Image:
 * <Image src={ASSETS.LOGO} alt="Main Logo" width={100} height={100} />
 * 
 * 2. Nested Assets:
 * <Image src={ASSETS.ICONS.BITCOIN} alt="Bitcoin Icon" width={24} height={24} />
 * 
 * 3. Portfolio images:
 * <Image src={ASSETS.PORTFOLIO.IMG_PORTFOLIO} alt="Portfolio Sample" layout="responsive" />
 */
