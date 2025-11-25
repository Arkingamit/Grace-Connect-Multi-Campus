import React, { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, Clock, Calendar, Search, Heart, Star, Plus } from 'lucide-react';

const groups = [
  {
    id: 1,
    name: "Young Adults Fellowship",
    description: "A vibrant community for young adults (18-30) focused on growing in faith together through Bible study, fellowship, and service.",
    leader: "Sarah Johnson & Mike Chen",
    category: "Young Adults",
    meetingDay: "Thursdays",
    meetingTime: "7:00 PM",
    location: "Fellowship Hall",
    size: 24,
    maxSize: 30,
    imageUrl: "/api/placeholder/400/250",
    featured: true,
    tags: ["Bible Study", "Fellowship", "Service"],
    contact: "youngadults@gracecommunity.org"
  },
  {
    id: 2,
    name: "Families with Young Children",
    description: "Support and encouragement for parents raising young children, with age-appropriate activities and childcare provided.",
    leader: "David & Lisa Martinez",
    category: "Families",
    meetingDay: "Sundays",
    meetingTime: "11:30 AM",
    location: "Children's Wing",
    size: 18,
    maxSize: 25,
    imageUrl: "/api/placeholder/400/250",
    featured: false,
    tags: ["Parenting", "Support", "Children"],
    contact: "families@gracecommunity.org"
  },
  {
    id: 3,
    name: "Men's Bible Study",
    description: "Deep dive into Scripture with practical application for daily life. A place for men to grow spiritually and build authentic relationships.",
    leader: "Pastor Robert Kim",
    category: "Men",
    meetingDay: "Saturdays",
    meetingTime: "7:00 AM",
    location: "Conference Room A",
    size: 16,
    maxSize: 20,
    imageUrl: "/api/placeholder/400/250",
    featured: false,
    tags: ["Bible Study", "Men's Ministry", "Discipleship"],
    contact: "mens@gracecommunity.org"
  },
  {
    id: 4,
    name: "Women of Grace",
    description: "A supportive community for women of all ages to study God's word, pray together, and encourage one another in their faith journey.",
    leader: "Pastor Sarah Johnson",
    category: "Women",
    meetingDay: "Tuesdays",
    meetingTime: "10:00 AM",
    location: "Sanctuary Side Room",
    size: 22,
    maxSize: 30,
    imageUrl: "/api/placeholder/400/250",
    featured: true,
    tags: ["Bible Study", "Women's Ministry", "Prayer"],
    contact: "women@gracecommunity.org"
  },
  {
    id: 5,
    name: "Senior Saints",
    description: "A warm community for our senior members (55+) featuring Bible study, fellowship meals, and service opportunities.",
    leader: "Betty Williams & Frank Johnson",
    category: "Seniors",
    meetingDay: "Wednesdays",
    meetingTime: "2:00 PM",
    location: "Senior Center",
    size: 28,
    maxSize: 35,
    imageUrl: "/api/placeholder/400/250",
    featured: false,
    tags: ["Fellowship", "Service", "Meals"],
    contact: "seniors@gracecommunity.org"
  },
  {
    id: 6,
    name: "New Members Class",
    description: "Perfect for newcomers! Learn about our church family, beliefs, and how to get connected in our community.",
    leader: "Pastor John Smith",
    category: "New Members",
    meetingDay: "Sundays",
    meetingTime: "9:00 AM",
    location: "Welcome Center",
    size: 12,
    maxSize: 15,
    imageUrl: "/api/placeholder/400/250",
    featured: false,
    tags: ["New Members", "Orientation", "Connection"],
    contact: "welcome@gracecommunity.org"
  },
  {
    id: 7,
    name: "Marriage Enrichment",
    description: "Strengthen your marriage through biblical principles, fun activities, and connections with other couples.",
    leader: "Mark & Jennifer Davis",
    category: "Couples",
    meetingDay: "Fridays",
    meetingTime: "7:30 PM",
    location: "Fellowship Hall",
    size: 14,
    maxSize: 20,
    imageUrl: "/api/placeholder/400/250",
    featured: false,
    tags: ["Marriage", "Couples", "Relationship"],
    contact: "marriage@gracecommunity.org"
  },
  {
    id: 8,
    name: "Youth Group (Teens)",
    description: "High energy, faith-focused community for teenagers with games, worship, and relevant Bible teaching.",
    leader: "Pastor Alex Thompson",
    category: "Youth",
    meetingDay: "Sundays",
    meetingTime: "6:00 PM",
    location: "Youth Center",
    size: 35,
    maxSize: 40,
    imageUrl: "/api/placeholder/400/250",
    featured: true,
    tags: ["Youth", "Games", "Worship"],
    contact: "youth@gracecommunity.org"
  }
];

const categories = ["All", "Young Adults", "Families", "Men", "Women", "Seniors", "New Members", "Couples", "Youth"];

const Groups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || group.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredGroups = groups.filter(group => group.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Small Groups</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Life change happens in community. Find your place to grow, connect, and make lasting friendships.
            </p>
            <Button variant="gradient" size="xl" className="hover-lift">
              <Plus className="w-5 h-5 mr-2" />
              Start a New Group
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">{groups.length}</div>
              <div className="text-sm text-muted-foreground">Active Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">200+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">7</div>
              <div className="text-sm text-muted-foreground">Days a Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Welcoming</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Groups */}
      {featuredGroups.length > 0 && (
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Featured Groups</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredGroups.map((group, index) => (
                <Card key={group.id} className="glass-card hover-lift overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                    <Users className="w-12 h-12 text-primary" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{group.description}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{group.meetingDay}s at {group.meetingTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{group.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{group.size}/{group.maxSize} members</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {group.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="gradient" className="w-full hover-lift">
                      Join Group
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search groups by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-xl border border-border bg-background/50 backdrop-blur-sm"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <p className="text-muted-foreground mb-6">
            {filteredGroups.length} group{filteredGroups.length !== 1 ? 's' : ''} found
          </p>

          {/* All Groups Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGroups.map((group, index) => (
              <Card key={group.id} className="glass-card hover-lift overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <Users className="w-12 h-12 text-primary" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{group.category}</Badge>
                  </div>
                  {group.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{group.description}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{group.meetingDay}s at {group.meetingTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{group.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{group.size}/{group.maxSize} members</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1">Led by:</p>
                    <p className="text-sm text-muted-foreground">{group.leader}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {group.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      disabled={group.size >= group.maxSize}
                    >
                      {group.size >= group.maxSize ? 'Full' : 'Join Group'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 glass-card p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Don't See What You're Looking For?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking to start new groups based on the interests and needs of our community. 
              Let us know what type of group you'd like to see or consider starting one yourself!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="hover-lift">
                <Plus className="w-5 h-5 mr-2" />
                Start a New Group
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Suggest a Group
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Groups;