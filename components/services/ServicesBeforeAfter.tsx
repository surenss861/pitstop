import Image from "next/image";
import { beforeAfterPairs } from "@/lib/services-data";

export default function ServicesBeforeAfter() {
  return (
    <div className="space-y-10 md:space-y-12">
      {beforeAfterPairs.map((pair) => (
        <div key={pair.title}>
          <h3 className="text-lg font-bold text-white mb-1">{pair.title}</h3>
          <p className="text-text-muted text-sm mb-4 max-w-[60ch]">{pair.caption}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <figure className="relative rounded-xl overflow-hidden border border-border aspect-[4/3] bg-bg">
              <Image src={pair.beforeSrc} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-bg/90 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
                Before
              </figcaption>
            </figure>
            <figure className="relative rounded-xl overflow-hidden border border-border aspect-[4/3] bg-bg">
              <Image src={pair.afterSrc} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-bg/90 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
                After
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}
