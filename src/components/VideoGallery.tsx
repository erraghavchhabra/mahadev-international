"use client";

type VideoItem = {
  title: string;
  src: string;
};

const videos: VideoItem[] = [
  {
    title: "Cooker",
    src: "/videos/cooker.mp4",
  },
  {
    title: "Cake Extraction",
    src: "/videos/gc.mp4",
  },
  {
    title: "Oil Extraction",
    src: "/videos/vc.mp4",
  },
];

export default function VideoGallery() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Product Videos
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >

              {/* Video */}
              <div className="w-full">
                <video
                  controls
                  className="w-full h-auto"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Title */}
              <div className="p-5 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {video.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}