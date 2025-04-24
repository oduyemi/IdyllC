import React, { useState } from 'react';

type VideoItem = {
  id: number;
  thumbnail: string;
  videoSrc: string;
  title: string;
};

const videos: VideoItem[] = [
  {
    id: 1,
    thumbnail: '/thumbnails/video.jpg',
    videoSrc: '../../assets/videos/video1.mp4',
    title: 'Client from Offshore Nigeria',
  },
  {
    id: 2,
    thumbnail: '/thumbnails/video1.jpg',
    videoSrc: '../../assets//videos/video2.mp4',
    title: 'Captain’s Experience',
  },
  {
    id: 3,
    thumbnail: '/thumbnails/video2.jpg',
    videoSrc: '../../assets/videos/video3.mp4',
    title: 'Reliable Internet at Sea',
  },
  {
    id: 4,
    thumbnail: '/thumbnails/video4.jpg',
    videoSrc: '../../assets/videos/video3.mp4',
    title: 'LinkOrg Keeps Us Connected',
  },
];

export const VideoTestimonialGallery: React.FC = () => {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setPlayingVideoId(id);
  };

  return (
    <div className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#cf0000]">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {playingVideoId === video.id ? (
              <video
                controls
                autoPlay
                src={video.videoSrc}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                onClick={() => handlePlay(video.id)}
                className="relative cursor-pointer group"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="bg-[#cf0000] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#b00000] transition">
                    ▶ Play
                  </button>
                </div>
              </div>
            )}
            <div className="p-4 bg-[#cf0000] text-white text-center font-medium">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};