import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/0dc2be78-7dfa-4854-bb37-7a7c50eb1fe4.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/3520de47-032f-492f-baa3-bc40f00b9b43.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/1aba1a9c-2760-4ce8-82d0-e9d110c5945a.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/4d3d0daa-f3d7-4676-9757-45ba6e5b9266.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/723464f4-1ea7-4409-b993-9dc591fe3d7c.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/791dc119-1e92-4231-abf0-4d8a31f91d7b.jpg",
  ];

  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/bucket/ea04abeb-9bac-4b56-98e3-bff4b1c0bdaf.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;