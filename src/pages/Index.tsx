import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/70e1b6fd-9f28-4975-a1e7-3c2423ff0ec3.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/c984bbcd-c5ab-4108-8858-d24cb6a3db26.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/804c22a4-6288-4343-87bc-54b1f4ed9bc1.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/b77367b7-e851-4edf-b9a0-2f1d6d903ba7.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/07256b5e-d1e8-4882-8d18-c424d58b43e3.jpg",
    "https://cdn.poehali.dev/projects/6aa3f227-8c87-4486-977a-050a2812fc72/files/191f3542-0de1-417b-970d-f9913d3147d3.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
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