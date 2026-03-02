import React, { useEffect } from 'react';
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
    document.title = 'Independent Insurance Agent | The Woodlands TX | Jenkins Insurance';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Open Sans', sans-serif", color: '#2C2C2C' }}>
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
