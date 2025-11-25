import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { AnnouncementsSection } from '@/components/ui/announcements-section';
import { PrayerWall } from '@/components/ui/prayer-wall';
import { EventsSection } from '@/components/ui/events-section';
import  GallerySection  from '@/components/ui/gallery-section';
import { LiveStreamSection } from '@/components/ui/live-stream';
import { SongCarousel } from '@/components/ui/song-carousel';
import { CampusDetails } from '@/components/ui/campus-details';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SongCarousel />
      <GallerySection />
      <AnnouncementsSection />
      <PrayerWall />
      <EventsSection />
      
      <LiveStreamSection />
      <CampusDetails />
      <Footer />
    </div>
  );
};

export default Index;
