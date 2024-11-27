"use client";

const videos = [
  {
    id: 1,
    title: "Video 1 - Introdução ao SaepFlix",
    thumbnail: "/thumbnails/video1.jpg",
    videoSrc: "/videos/video1.mp4",
    description: "Este é o vídeo de introdução ao SaepFlix.",
  },
  {
    id: 2,
    title: "Video 2 - Configurando o Projeto",
    thumbnail: "/thumbnails/video1.jpg",
    videoSrc: "/videos/video1.mp4",
    description: "Aprenda a configurar o projeto SaepFlix.",
  },
  {
    id: 3,
    title: "Video 3 - Exploração de Recursos",
    thumbnail: "/thumbnails/video1.jpg",
    videoSrc: "/videos/video1.mp4",
    description: "Conheça os recursos disponíveis no SaepFlix.",
  },
];

export default function VideosPage() {
  return (
    <section className="flex flex-col w-full max-w-4xl mx-auto bg-white p-4 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Lista de Vídeos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col items-center bg-gray-200 p-4 rounded-md">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            <p className="text-sm text-gray-700">{video.description}</p>
            <video
              controls
              width="100%"
              height="250"
              className="rounded-md mt-4"
            >
              <source src={video.videoSrc} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}
