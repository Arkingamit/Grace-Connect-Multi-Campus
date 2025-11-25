import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const events = [

  {
    id: 1,
    title: "New Year's Prayer & Worship Night",
    description: "Ring in the new year with prayer, worship, and fellowship. Light refreshments provided.",
    date: "2024-12-31",
    time: "21:00",
    endTime: "00:30",
    location: "North Campus",
    category: "Prayer",
    capacity: 150,
    registered: 89,
    image: null,
    recurring: false,
    host: "Prayer Ministry Team"
  },
  {
    id: 2,
    title: "Sunday Worship Service",
    description: "Weekly worship service with contemporary music, biblical teaching, and fellowship.",
    date: "2024-12-17",
    time: "10:30",
    endTime: "12:00",
    location: "Grace Central",
    category: "Worship",
    capacity: 400,
    registered: 0, // Regular service
    image: null,
    recurring: true,
    host: "Pastoral Team"
  },
  {
    id: 3,
    title: "Youth Game Night",
    description: "Fun evening of games, pizza, and fellowship for our youth (ages 13-18).",
    date: "2024-12-20",
    time: "18:00",
    endTime: "21:00",
    location: "Youth Center",
    category: "Youth",
    capacity: 50,
    registered: 32,
    image: null,
    recurring: false,
    host: "Youth Ministry"
  },
  {
    id: 4,
    title: "Women's Bible Study",
    description: "Weekly Bible study focusing on the book of Philippians. All women welcome!",
    date: "2024-12-19",
    time: "19:00",
    endTime: "20:30",
    location: "Room 201",
    category: "Study",
    capacity: 25,
    registered: 18,
    image: null,
    recurring: true,
    host: "Sarah Johnson"
  },
  {
    id: 5,
    title: "Community Food Drive",
    description: "Help us serve our community by volunteering at our monthly food drive distribution.",
    date: "2024-12-21",
    time: "09:00",
    endTime: "13:00",
    location: "Church Parking Lot",
    category: "Outreach",
    capacity: 30,
    registered: 24,
    image: null,
    recurring: true,
    host: "Outreach Ministry"
  }
];

const categoryColors = {
  Worship: "bg-primary/10 text-primary",
  Prayer: "bg-prayer/10 text-prayer",
  Youth: "bg-success/10 text-success",
  Study: "bg-accent/10 text-accent-foreground",
  Outreach: "bg-destructive/10 text-destructive",
  Fellowship: "bg-muted text-muted-foreground"
};

export const EventsSection = () => {
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getAvailabilityStatus = (registered: number, capacity: number) => {
    if (registered === 0) return { text: 'Open Registration', color: 'text-success' };
    const percentage = (registered / capacity) * 100;
    if (percentage >= 100) return { text: 'Full', color: 'text-destructive' };
    if (percentage >= 90) return { text: 'Almost Full', color: 'text-accent' };
    if (percentage >= 75) return { text: 'Filling Up', color: 'text-accent' };
    return { text: 'Available', color: 'text-success' };
  };

  return (
    <section id="events" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">
              Join us for worship, fellowship, and community outreach
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button variant="default" size="sm">All Events</Button>
            <Button variant="outline" size="sm">Worship</Button>
            <Button variant="outline" size="sm">Youth</Button>
            <Button variant="outline" size="sm">Study</Button>
            <Button variant="outline" size="sm">Outreach</Button>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const availability = getAvailabilityStatus(event.registered, event.capacity);
              return (
                <Card key={event.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className={`${categoryColors[event.category as keyof typeof categoryColors]} text-xs`}>
                          {event.category}
                        </Badge>
                        {event.recurring && (
                          <Badge variant="outline" className="text-xs">
                            Recurring
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{formatTime(event.time)} - {formatTime(event.endTime)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>
                          {event.registered > 0 
                            ? `${event.registered}/${event.capacity} registered`
                            : `Up to ${event.capacity} attendees`
                          }
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className={`text-xs font-medium ${availability.color}`}>
                        {availability.text}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Host: {event.host}
                      </span>
                    </div>

                    <div className="pt-2">
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        RSVP
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View All Events */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              View Full Calendar
              <Calendar className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};