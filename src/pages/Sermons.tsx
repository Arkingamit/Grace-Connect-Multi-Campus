import React, { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Clock, Download, Search, Filter, Heart } from 'lucide-react';

const sermons = [
  {
    id: 1,
    title: "Finding Hope in Difficult Times",
    pastor: "Pastor Geo",
    date: "December 15, 2024",
    duration: "45 min",
    series: "Christmas Hope",
    description: "A powerful message about finding hope and peace during life's challenging seasons, drawing from the Christmas story.",
    thumbnail: "/api/placeholder/400/225",
    videoUrl: "#",
    audioUrl: "#",
    views: 1250,
    likes: 89,
    category: "Hope",
    featured: true
  },
  {
    id: 2,
    title: "The Power of Forgiveness",
    pastor: "Pastor blesson",
    date: "December 8, 2024",
    duration: "38 min",
    series: "Living Grace",
    description: "Understanding the transformative power of forgiveness in our relationships and spiritual journey.",
    thumbnail: "/api/placeholder/400/225",
    videoUrl: "#",
    audioUrl: "#",
    views: 980,
    likes: 72,
    category: "Grace"
  },
  {
    id: 3,
    title: "Building Strong Foundations",
    pastor: "Pastor Geo",
    date: "December 1, 2024",
    duration: "42 min",
    series: "Faith Foundations",
    description: "Learning how to build our lives on the solid foundation of faith, love, and community.",
    thumbnail: "/api/placeholder/400/225",
    videoUrl: "#",
    audioUrl: "#",
    views: 1100,
    likes: 95,
    category: "Faith"
  },
  {
    id: 4,
    title: "Called to Serve",
    pastor: "Pastor Nehal",
    date: "November 24, 2024",
    duration: "35 min",
    series: "Purpose Driven",
    description: "Discovering our unique calling and how we can serve God and our community with our gifts.",
    thumbnail: "/api/placeholder/400/225",
    videoUrl: "#",
    audioUrl: "#",
    views: 850,
    likes: 64,
    category: "Service"
  },
  {
    id: 5,
    title: "Walking in Faith",
    pastor: "Pastor blesson",
    date: "November 17, 2024",
    duration: "40 min",
    series: "Faith Journey",
    description: "Practical steps for deepening our faith walk and trusting God in every season of life.",
    thumbnail: "/api/placeholder/400/225",
    videoUrl: "#",
    audioUrl: "#",
    views: 920,
    likes: 78,
    category: "Faith"
  },
  {
    id: 6,
    title: "Community and Connection",
    pastor: "Pastor Nehal",
    date: "November 10, 2024",
    duration: "37 min",
    series: "Together We Rise",
    description: "The importance of biblical community and how we can build meaningful connections.",
    thumbnail: "/api/placeholder/400/225",
    videoUrl: "#",
    audioUrl: "#",
    views: 760,
    likes: 55,
    category: "Community"
  }
];

const categories = ["All", "Hope", "Grace", "Faith", "Service", "Community"];
const series = ["All Series", "Christmas Hope", "Living Grace", "Faith Foundations", "Purpose Driven", "Faith Journey", "Together We Rise"];

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSeries, setSelectedSeries] = useState("All Series");

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.pastor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || sermon.category === selectedCategory;
    const matchesSeries = selectedSeries === "All Series" || sermon.series === selectedSeries;
    
    return matchesSearch && matchesCategory && matchesSeries;
  });

  const featuredSermon = sermons.find(sermon => sermon.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Featured Sermon */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Sermons</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover life-changing messages that inspire, encourage, and strengthen your faith journey.
            </p>
          </div>

          {featuredSermon && (
            <Card className="glass-card p-8 max-w-4xl mx-auto hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Badge className="bg-accent text-accent-foreground">Featured Sermon</Badge>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{featuredSermon.title}</h2>
                    <p className="text-muted-foreground mb-4">{featuredSermon.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{featuredSermon.pastor}</span>
                      <span>•</span>
                      <span>{featuredSermon.date}</span>
                      <span>•</span>
                      <span>{featuredSermon.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="gradient" size="lg" className="hover-lift">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Now
                    </Button>
                    <Button variant="glass" size="lg" className="hover-lift">
                      <Download className="w-5 h-5 mr-2" />
                      Audio
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                    <Play className="w-16 h-16 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-3 shadow-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search sermons, pastors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-xl border border-border bg-background/50 backdrop-blur-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-4 py-2 rounded-xl border border-border bg-background/50 backdrop-blur-sm"
              >
                {series.map(serie => (
                  <option key={serie} value={serie}>{serie}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-muted-foreground mb-6">
            {filteredSermons.length} sermon{filteredSermons.length !== 1 ? 's' : ''} found
          </p>

          {/* Sermon Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon, index) => (
              <Card key={sermon.id} className="glass-card hover-lift overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <Play className="w-12 h-12 text-primary" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{sermon.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1 text-sm">
                    {sermon.duration}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                      {sermon.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{sermon.series}</p>
                    <p className="text-muted-foreground text-sm line-clamp-2">{sermon.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{sermon.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{sermon.pastor}</span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{sermon.views} views</span>
                      <span>{sermon.likes} likes</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="default" size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover-lift">
              Load More Sermons
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sermons;