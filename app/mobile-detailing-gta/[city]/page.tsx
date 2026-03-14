import { Metadata } from "next";
import { notFound } from "next/navigation";
import CityLandingPage from "@/components/landing/CityLandingPage";
import { gtaCityConfigs } from "@/lib/gta-cities-data";

type Props = { params: { city: string } };

export async function generateStaticParams() {
  return gtaCityConfigs.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = gtaCityConfigs.find((c) => c.slug === params.city);
  if (!city) return { title: "Mobile Detailing | PitStop Polish" };
  return {
    title: city.title,
    description: city.description,
  };
}

export default function GtaCityPage({ params }: Props) {
  const city = gtaCityConfigs.find((c) => c.slug === params.city);
  if (!city) notFound();
  return <CityLandingPage city={city} />;
}
