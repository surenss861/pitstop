import { Metadata } from "next";
import { notFound } from "next/navigation";
import CityLandingPage from "@/components/landing/CityLandingPage";
import { gtaCityConfigs, isGtaCitySlug } from "@/lib/gta-cities-data";

type Props = { params: { city: string } };

export function generateStaticParams() {
  return gtaCityConfigs.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isGtaCitySlug(params.city)) return { title: "PitStop Polish" };
  const city = gtaCityConfigs.find((c) => c.slug === params.city);
  if (!city) return { title: "PitStop Polish" };
  return {
    title: city.title,
    description: city.description,
  };
}

export default function CityPage({ params }: Props) {
  if (!isGtaCitySlug(params.city)) notFound();
  const city = gtaCityConfigs.find((c) => c.slug === params.city);
  if (!city) notFound();
  return <CityLandingPage city={city} />;
}
