import React from 'react';

type VideoItem = {
  id: number;
  title: string;
  youtubeShortUrl: string;
};

const videos: VideoItem[] = [
  {
    id: 1,
    youtubeShortUrl: 'https://youtube.com/shorts/fmmWe_Z7nw4?si=3QOMPjfyiXs-3z_v',
    title: 'Student from Teesside University',
  },
  {
    id: 2,
    youtubeShortUrl: 'https://youtube.com/shorts/0s53PfdyCUg?si=JHKOcvYUQlqkxJoZ',
    title: 'Graduate from University of South Wales',
  },
  {
    id: 3,
    youtubeShortUrl: 'https://youtube.com/shorts/a87vEIeE2Vc?si=ML0mlCuqZ6S-4yFy',
    title: 'Student from Rohampton University',
  },
];

export const VideoTestimonialGallery: React.FC = () => {
  return (
    <div className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#e7a449]">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="aspect-w-9 aspect-h-16">
              <iframe
                className="w-full h-full"
                src={video.youtubeShortUrl.replace('/shorts/', '/embed/').split('?')[0]}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-[#cf0000] text-white text-center font-medium">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
