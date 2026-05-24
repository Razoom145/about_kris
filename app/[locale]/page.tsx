import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


const skills = [
  {
    name: "Next.js",
    src: "/Skill/nextjs-icon-svgrepo-com.svg",
  },
  {
    name: "TypeScript",
    src: "/Skill/typescript-svgrepo-com.svg",
  },
  {
    name: "PostgreSQL",
    src: "/Skill/postgresql-logo-svgrepo-com.svg",
  },
  {
    name: "Tailwind",
    src: "/Skill/tailwind-svgrepo-com.svg",
  },
];

const todoImages = [1, 2, 3, 4, 5, 6, 7, 8];
const spaceImages = ["1_1", "2_2", "3_3", "4_4"];

export default function Home() {
  const tNav = useTranslations("nav");
  const tHero = useTranslations("hero");
  const tProducts = useTranslations("products");
  const tSkills = useTranslations("skills");
  const tPortfolio = useTranslations("portfolio");
  const tContact = useTranslations("contact");
  return (
    <main className="min-h-screen bg-[#0f172a] text-white px-6 md:px-12 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <nav className="flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl px-6 py-5 sticky top-5 z-50">
          <article className="text-2xl font-black tracking-wide text-cyan-300">
            Kristina
          </article>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-gray-300">
            <a href="#about" className="hover:text-cyan-300 transition">
                {tNav("about")}
            </a>
            <a href="#product" className="hover:text-cyan-300 transition">
                {tNav("product")}
            </a>
            <a href="#portfolio" className="hover:text-cyan-300 transition">
                {tNav("portfolio")}
            </a>
            <a href="#contact" className="hover:text-cyan-300 transition">
                {tNav("contact")}
            </a>
          </div>
        </nav>

        <section
          id="about"
          className="grid lg:grid-cols-2 gap-12 items-center mt-20"
        >
          <div className="space-y-6">
            <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 text-sm">
              {tHero("badge")}
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
                {tHero("title")}
            </h1>

            <p className="text-gray-300 text-lg leading-8 max-w-2xl">
                {tHero("description")}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#portfolio"
                className="bg-cyan-400 text-black font-bold px-6 py-3 rounded-2xl hover:scale-105 transition"
              >
                  {tHero("portfolioButton")}
              </a>

              <a
                href="#contact"
                className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
              >
                  {tHero("contactButton")}
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-cyan-400/30 blur-3xl rounded-full"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-5 backdrop-blur-xl shadow-2xl">
              <Image
                src="/photo.jpg"
                alt="Kristina"
                width={450}
                height={550}
                className="rounded-[30px] object-cover h-[500px]"
              />
            </div>
          </div>
        </section>

        <section id="product" className="mt-32">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-black">{tProducts("title")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4">
                {tProducts("items.landing.title")}
              </h3>
              <p className="text-gray-300 leading-7">
                {tProducts("items.landing.description")}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-6">🛒</div>
              <h3 className="text-2xl font-bold mb-4">
                {tProducts("items.webapp.title")}
              </h3>
              <p className="text-gray-300 leading-7">
                {tProducts("items.webapp.description")}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold mb-4">
                {tProducts("items.design.title")}
              </h3>
              <p className="text-gray-300 leading-7">
                {tProducts("items.design.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-32 overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-black mb-10">
            {tSkills("title")}
          </h2>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8">
            <div className="flex gap-12 animate-[scroll_20s_linear_infinite] whitespace-nowrap px-10">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 min-w-fit"
                >
                  <div className="bg-white rounded-2xl p-4">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="text-2xl font-bold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="mt-32 space-y-20">
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-3">
                  {tPortfolio("todo.title")}
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  {tPortfolio("todo.description")}
                </p>
              </div>

              <Link
                href="https://lucktodo.vercel.app/"
                className="border border-cyan-400/30 text-cyan-300 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition w-fit"
              >
                {tPortfolio("todo.button")}
              </Link>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {todoImages.map((img) => (
                <div
                  key={img}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={`/ToDo/${img}.png`}
                    alt={`Todo ${img}`}
                    width={500}
                    height={400}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-3">
                  {tPortfolio("space.title")}
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  {tPortfolio("space.description")}
                </p>
              </div>

              <Link
                href="https://space-site-khaki.vercel.app/"
                className="border border-cyan-400/30 text-cyan-300 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition w-fit"
              >
                {tPortfolio("space.button")}
              </Link>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {spaceImages.map((img) => (
                <div
                  key={img}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={`/Space/${img}.jpeg`}
                    alt={`Space ${img}`}
                    width={500}
                    height={400}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-32 pb-20">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              {tContact("title")}
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl leading-8 mb-10">
              {tContact("description")}
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="https://www.threads.com/@razoomdev"
                className="bg-white text-black px-6 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                {tContact("threads")}
              </Link>

              <Link
                href="https://www.instagram.com/razoomdev/"
                className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/20 transition"
              >
                {tContact("instagram")}
              </Link>

              <Link
                href="https://boosty.to/zomaro_dev"
                className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/20 transition"
              >
                {tContact("boosty")}
              </Link>

              <Link
                href="https://kwork.ru/website-development/52161554/razrabotka-veb-prilozheniy-i-saytov-pod-klyuch-na-next-js-i-typescript?ref=24301729"
                className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/20 transition"
              >
                {tContact("kwork")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
