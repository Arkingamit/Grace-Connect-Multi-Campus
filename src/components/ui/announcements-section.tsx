import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Pin, Share2, Heart } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: "Christmas Eve Service - 7 PM",
    content: "Join us for a candlelight Christmas Eve service filled with carols, scripture, and the celebration of Christ's birth. Childcare available for infants through age 5.",
    category: "Worship",
    isPinned: true,
    date: "2024-12-24",
    author: "Pastor Mark",
    image: null,
    reactions: 24
  },
  {
    id: 2,
    title: "New Member Classes Starting January",
    content: "Discover what it means to be part of Grace Community. Learn about our beliefs, mission, and how you can get involved. Classes run for 4 weeks starting January 7th.",
    category: "Membership",
    isPinned: false,
    date: "2024-01-07",
    author: "Sarah Johnson",
    image: null,
    reactions: 12
  },
  {
    id: 3,
    title: "Youth Winter Retreat - Registration Open",
    content: "Our annual winter retreat is back! February 16-18 at Camp Galilee. Early bird pricing until January 15th. Ages 13-18 welcome.",
    category: "Youth",
    isPinned: false,
    date: "2024-02-16",
    author: "Youth Ministry",
    image: null,
    reactions: 8
  },
  {
    id: 4,
    title: "Food Drive for Local Families",
    content: "Help us serve our community this holiday season. We're collecting non-perishable items through December 22nd. Drop-off bins located in the main lobby.",
    category: "Outreach",
    isPinned: true,
    date: "2024-12-22",
    author: "Outreach Team",
    image: null,
    reactions: 31
  }
];

const categoryColors = {
  Worship: "bg-primary/10 text-primary",
  Membership: "bg-accent/10 text-accent-foreground",
  Youth: "bg-success/10 text-success",
  Outreach: "bg-prayer/10 text-prayer",
  Urgent: "bg-destructive/10 text-destructive"
};

export const AnnouncementsSection = () => {
  return (
    <section id="announcements" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Church Announcements</h2>
            <p className="text-xl text-muted-foreground">
              Stay connected with what's happening in our community
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button variant="default" size="sm">All</Button>
            <Button variant="outline" size="sm">Worship</Button>
            <Button variant="outline" size="sm">Youth</Button>
            <Button variant="outline" size="sm">Outreach</Button>
            <Button variant="outline" size="sm">Membership</Button>
          </div>

          {/* Announcements Grid */}
          <div className="space-y-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        {announcement.isPinned && (
                          <Pin className="w-4 h-4 text-accent fill-current" />
                        )}
                        <Badge 
                          className={`${categoryColors[announcement.category as keyof typeof categoryColors]} text-xs`}
                        >
                          {announcement.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold leading-tight">
                        {announcement.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By {announcement.author}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(announcement.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {announcement.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="w-4 h-4" />
                        <span>{announcement.reactions}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Announcements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};