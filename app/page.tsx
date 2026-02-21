import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import SocialProof from '@/components/social-proof'
import ProductVideoSection from '@/components/product-video-section'
import AboutMLera from '@/components/about-mlera'
import ProblemSolution from '@/components/problem-solution'
import FeaturesHowItWorks from '@/components/features-howitworks'
import ProductVisualization from '@/components/product-visualization'
import MidCTA from '@/components/mid-cta'
import BrandVideoSection from '@/components/brand-video-section'
import LexiconComparison from '@/components/lexicon-comparison'
import CTAFooter from '@/components/cta-footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProductVideoSection />
      <AboutMLera />
      <ProblemSolution />
      <FeaturesHowItWorks />
      <ProductVisualization />
      <MidCTA />
      <BrandVideoSection />
      <LexiconComparison />
      <CTAFooter />
    </main>
  )
}
