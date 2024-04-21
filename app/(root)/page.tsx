import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "../../public/assets/images/hero.png"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Organise, rencontre et célèbre. 
          Tes évènements, notre plateforme!</h1>
          <p className="p-regular-20 md:p-regular-24">Réserve et apprends des astuces grâce à nos mentor venant de grandes entreprises avec notre communauté étendue</p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link
            href='#events'
            >
              Découvre Maintenant
            </Link>
          </Button>
        </div>
        <Image
        src={HeroImage}
        alt="hero"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />
      </div>
    </section>

    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Déjà plus <br/> d'un millier d'évènements</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Recherche
        Categorie
      </div>
    </section>
    </>
  );
}
