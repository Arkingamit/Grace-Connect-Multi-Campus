import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Download, Share2, Heart, Calendar, User } from 'lucide-react';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

// Mock image data
const photos = [
  { id: 1, src: gallery1, title: "Sunday Morning Worship", category: "Worship" },
  { id: 2, src: gallery2, title: "Community Fellowship", category: "Fellowship"  },
  { id: 3, src: gallery3, title: "South Gujarat", category: "Group"},
  { id: 4, src: gallery4, title: "Youth Group Fun", category: "Youth"},
  { id: 5, src: gallery5, title: "Traditional Day Celebration", category: "Traditional Day"},
  { id: 6, src: gallery6, title: "Cricket Match", category: "Cricket"},
];

const categoryColors = {
  Worship: "bg-worship text-worship-text",
  Fellowship: "bg-fellowship text-fellowship-text",
  Music: "bg-music text-music-text",
  Youth: "bg-youth text-youth-text",
  Outreach: "bg-outreach text-outreach-text",
  Baptism: "bg-baptism text-baptism-text"
};

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ["All", ...Array.from(new Set(photos.map(p => p.category)))];
  
  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  const openLightbox = (photo) => setSelectedPhoto(photo);
  const closeLightbox = () => setSelectedPhoto(null);

  // Group photos into rows of 3
  const photoRows = [];
  for (let i = 0; i < filteredPhotos.length; i += 3) {
    photoRows.push(filteredPhotos.slice(i, i + 3));
  }

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-heading">Photo Gallery</h2>
            <p className="text-xl text-subheading">
              Capturing moments of faith, fellowship, and community
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Photo Rows */}
          <div className="space-y-4 mb-8">
            {photoRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-4 h-64" onMouseLeave={() => setHoveredId(null)}>
                {row.map(photo => {
                  const isHovered = hoveredId === photo.id;
                  const isRowHovered = row.some(p => p.id === hoveredId);
                  const shouldCompress = isRowHovered && !isHovered;

                  return (
                    <div
                      key={photo.id}
                      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-out ${
                        isHovered ? 'flex-[2]' : shouldCompress ? 'flex-[0.5]' : 'flex-1'
                      }`}
                      onMouseEnter={() => setHoveredId(photo.id)}
                      onClick={() => openLightbox(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />

                      <Badge 
                        className={`absolute top-3 left-3 ${categoryColors[photo.category]} text-xs transition-opacity duration-300 ${
                          shouldCompress ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        {photo.category}
                      </Badge>

                      <div className={`absolute inset-0 bg-overlay transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                     
                        </div>
                      </div>

                      {shouldCompress && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <h3 className="text-white font-semibold text-center px-2 transform -rotate-90 whitespace-nowrap">
                            {photo.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <Button variant="secondary" size="lg" className="hover:bg-background-hover transition-colors">
              Load More Photos
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-overlay z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="bg-background rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[60vh] object-cover"
                />
              </div>

              <div className="p-6">
               

  
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
