import { useEffect } from 'react';
import JenkinsHeader from '../components/jenkins/JenkinsHeader';
import JenkinsHero from '../components/jenkins/JenkinsHero';
import JenkinsTrustBar from '../components/jenkins/JenkinsTrustBar';
import JenkinsCarrierBadges from '../components/jenkins/JenkinsCarrierBadges';
import JenkinsWhyChoose from '../components/jenkins/JenkinsWhyChoose';
import JenkinsCoverageTypes from '../components/jenkins/JenkinsCoverageTypes';
import JenkinsAbout from '../components/jenkins/JenkinsAbout';
import JenkinsReviews from '../components/jenkins/JenkinsReviews';
import JenkinsQuoteContact from '../components/jenkins/JenkinsQuoteContact';
import JenkinsBilingual from '../components/jenkins/JenkinsBilingual';
import JenkinsFooter from '../components/jenkins/JenkinsFooter';
import JenkinsFloatingWhatsApp from '../components/jenkins/JenkinsFloatingWhatsApp';
import JenkinsStickyMobileBar from '../components/jenkins/JenkinsStickyMobileBar';

export default function JenkinsPublicSite() {
  useEffect(() => {
    document.title = 'Independent Insurance Agent | Greater Houston TX | Jenkins Insurance Agency';
    
    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Greater Houston TX independent insurance agent. Compare 20+ carriers for home, auto, life & business. Serving The Woodlands, Spring, Humble, Magnolia, Tomball & Conroe TX. Free quotes in 24 hours.');
    }

    // Scroll fade animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-fade');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-opensans">
      <JenkinsHeader />
      <main>
        <JenkinsHero />
        <JenkinsTrustBar />
        <JenkinsCarrierBadges />
        <JenkinsWhyChoose />
        <JenkinsCoverageTypes />
        <JenkinsAbout />
        <JenkinsReviews />
        <JenkinsQuoteContact />
        <JenkinsBilingual />
      </main>
      <JenkinsFooter />
      <JenkinsFloatingWhatsApp />
      <JenkinsStickyMobileBar />
    </div>
  );
}
