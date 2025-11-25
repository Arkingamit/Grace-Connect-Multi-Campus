import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Play, Radio, Users, MessageCircle, Send, Heart, Volume2, ExternalLink } from 'lucide-react';

const liveMessages = [
  {
    id: 1,
    user: "Sarah M.",
    message: "Blessed by this worship! 🙏",
    timestamp: "10:32 AM",
    type: "chat"
  },
  {
    id: 2,
    user: "John D.",
    message: "Please pray for my family during this difficult time",
    timestamp: "10:34 AM",
    type: "prayer"
  },
  {
    id: 3,
    user: "Mary K.",
    message: "Amazing message today Pastor!",
    timestamp: "10:35 AM",
    type: "chat"
  },
  {
    id: 4,
    user: "Anonymous",
    message: "Praying for healing and strength",
    timestamp: "10:36 AM",
    type: "prayer"
  }
];

export const LiveStreamSection = () => {
  const [isLive, setIsLive] = useState(true);
  const [viewerCount, setViewerCount] = useState(234);
  const [chatMessage, setChatMessage] = useState('');
  const [chatType, setChatType] = useState('chat');
  
  // Replace this with your actual YouTube live stream video ID
  const youtubeVideoId = "jfKfPfyJRdk"; // Example: live stream or any video ID
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    // Handle message sending logic here
    console.log('Sending message:', { message: chatMessage, type: chatType });
    setChatMessage('');
  };

  return (
    <section id="live-stream" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Live Worship</h2>
            <p className="text-xl text-muted-foreground">
              Join us online for live worship and fellowship
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* YouTube Live Stream Player */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  {/* YouTube Embed */}
                  <iframe
                    src={youtubeEmbedUrl}
                    title="Live Worship Service"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Live Indicator Overlay */}
                  {isLive && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-red-600 text-white gap-2 shadow-lg">
                        <Radio className="w-3 h-3" />
                        LIVE
                      </Badge>
                    </div>
                  )}
                  
                  {/* Viewer Count Overlay */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="gap-2 bg-black/70 text-white border-0">
                      <Users className="w-3 h-3" />
                      {viewerCount} watching
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Christmas Celebration Service</h3>
                      <p className="text-muted-foreground">
                        Join us for a special Christmas service celebrating the birth of our Savior
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">10:30 AM Service</Badge>
                      <Badge variant="outline">Pastor Mark</Badge>
                      <Badge variant="outline">Christmas Special</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${youtubeVideoId}`, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Watch on YouTube
                      </Button>
                      <Button variant="outline">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Live Chat & Prayer */}
            <div className="space-y-6">
              {/* Chat Tabs */}
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex gap-2">
                    <Button 
                      variant={chatType === 'chat' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setChatType('chat')}
                      className="flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                    <Button 
                      variant={chatType === 'prayer' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setChatType('prayer')}
                      className="flex-1"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Prayer
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Messages */}
                  <div className="h-64 overflow-y-auto space-y-3 pr-2">
                    {liveMessages
                      .filter(msg => chatType === 'chat' ? true : msg.type === 'prayer')
                      .map((msg) => (
                      <div key={msg.id} className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-medium">{msg.user}</span>
                          <span className="text-muted-foreground">{msg.timestamp}</span>
                          {msg.type === 'prayer' && (
                            <Badge className="bg-blue-100 text-blue-800 text-xs px-1 py-0">
                              Prayer
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Message Input */}
                  <div className="space-y-2">
                    <Input
                      placeholder={chatType === 'chat' ? 'Type a message...' : 'Share a prayer request...'}
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage(e);
                        }
                      }}
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      size="sm" 
                      className="w-full gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send {chatType === 'chat' ? 'Message' : 'Prayer'}
                    </Button>
                  </div>
                  
                  {/* YouTube Chat Link */}
                  <div className="pt-2 border-t">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${youtubeVideoId}`, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Join YouTube Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};