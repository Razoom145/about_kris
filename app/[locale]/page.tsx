import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const skills = [
    { name: "Next.js", src: "/Skill/nextjs-icon-svgrepo-com.svg" },
    { name: "TypeScript", src: "/Skill/typescript-svgrepo-com.svg" },
    { name: "PostgreSQL", src: "/Skill/postgresql-logo-svgrepo-com.svg" },
    { name: "Tailwind", src: "/Skill/tailwind-svgrepo-com.svg" },
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
        <main className="min-h-screen bg-[#0f172a] text-white px-6 md:px-12 py-8 overflow-hidden selection:bg-cyan-500/30">
            <div className="max-w-7xl mx-auto">

                {/* НАВИГАЦИЯ — Сбалансированная и адаптивная */}
                <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/5 bg-[#0b0f19]/60 backdrop-blur-xl rounded-2xl sm:rounded-full px-6 py-3.5 sticky top-5 z-50 shadow-2xl shadow-black/40">
                    <article className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text text-transparent">
                        Kristina.dev
                    </article>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-gray-300">
                        <a href="#about" className="hover:text-cyan-300 transition-colors">{tNav("about")}</a>
                        <a href="#product" className="hover:text-cyan-300 transition-colors">{tNav("product")}</a>
                        <a href="#portfolio" className="hover:text-cyan-300 transition-colors">{tNav("portfolio")}</a>
                        <a href="#contact" className="hover:text-cyan-300 transition-colors">{tNav("contact")}</a>
                    </div>
                </nav>

                {/* ГЕРОЙ-СЕКЦИЯ — Крупный сочный шрифт и яркий blur */}
                <section id="about" className="grid lg:grid-cols-2 gap-12 items-center mt-20">
                    <div className="space-y-6">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 text-sm font-medium">
              {tHero("badge")}
            </span>

                        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                            {tHero("title")}
                        </h1>

                        <p className="text-gray-300 text-lg leading-8 max-w-2xl font-light">
                            {tHero("description")}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href="#portfolio" className="bg-cyan-400 text-black font-bold px-6 py-3.5 rounded-2xl hover:scale-105 active:scale-95 transition shadow-lg shadow-cyan-400/10">
                                {tHero("portfolioButton")}
                            </a>
                            <a href="#contact" className="border border-white/20 px-6 py-3.5 rounded-2xl hover:bg-white/10 active:scale-95 transition">
                                {tHero("contactButton")}
                            </a>
                        </div>
                    </div>

                    {/* Фотокарточка с неоновой подложкой */}
                    <div className="relative flex justify-center group">
                        <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-cyan-400/30 transition duration-500" />

                        <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-5 backdrop-blur-xl shadow-2xl">
                            <Image
                                src="/photo.jpg"
                                alt="Kristina"
                                width={450}
                                height={550}
                                className="rounded-[30px] object-cover h-[500px] w-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* СЕРВИСЫ — Hover-эффекты приподнимания карточек */}
                <section id="product" className="mt-44">
                    <h2 className="text-4xl md:text-5xl font-black mb-10">{tProducts("title")}</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "⚡", key: "landing" },
                            { icon: "🛒", key: "webapp" },
                            { icon: "🎨", key: "design" }
                        ].map((item) => (
                            <div key={item.key} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between">
                                <div>
                                    <div className="text-5xl mb-6">{item.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{tProducts(`items.${item.key}.title`)}</h3>
                                    <p className="text-gray-300 leading-7 font-light">{tProducts(`items.${item.key}.description`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ТЕХНОЛОГИИ — Исправлен скролл через CSS-инжекцию */}
                <section className="mt-44 overflow-hidden">
                    <h2 className="text-4xl md:text-5xl font-black mb-10">{tSkills("title")}</h2>

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8">
                        {/* Добавляем стили для бесконечной анимации прямо в тег, чтобы не трогать tailwind.config */}
                        <style dangerouslySetInnerHTML={{__html: `
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee { animation: marquee 25s linear infinite; }
            `}} />

                        <div className="flex gap-12 w-max px-10 animate-marquee">
                            {/* Дублируем массив для бесшовности скролла */}
                            {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                                <div key={index} className="flex items-center gap-4 min-w-fit">
                                    <div className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-md">
                                        <Image src={skill.src} alt={skill.name} width={45} height={45} className="w-[45px] h-[45px]" />
                                    </div>
                                    <span className="text-2xl font-bold tracking-tight">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ПОРТФОЛИО — Идеально выровненная адаптивная Bento-сетка */}
                <section id="portfolio" className="mt-44 space-y-44">

                    {/* ПРОЕКТ 1: Luck to Do */}
                    <div className="space-y-10">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <div className="space-y-3">
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight">{tPortfolio("todo.title")}</h2>
                                <p className="text-neutral-400 max-w-2xl text-base leading-relaxed font-light">{tPortfolio("todo.description")}</p>
                            </div>
                            <Link href="https://lucktodo.vercel.app/" target="_blank" className="inline-flex items-center justify-center border border-white/10 bg-white/5 text-sm font-medium px-5 py-3 rounded-xl hover:bg-white hover:text-black transition-all group/btn w-fit shadow-md">
                                {tPortfolio("todo.button")}
                                <span className="inline-block translate-x-0 group-hover/btn:translate-x-1 transition-transform ml-1.5">→</span>
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-12 gap-4">
                            <div className="md:col-span-8 overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f19] h-[400px] relative group">
                                <Image src="/ToDo/1.png" alt="Todo Main" fill className="object-cover object-top group-hover:scale-[1.01] transition duration-700" />
                            </div>
                            <div className="md:col-span-4 overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f19] h-[400px] relative group">
                                <Image src="/ToDo/2.png" alt="Todo Mobile" fill className="object-cover object-top group-hover:scale-[1.01] transition duration-700" />
                            </div>
                            {todoImages.slice(2, 5).map((img) => (
                                <div key={img} className="md:col-span-4 overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f19] h-[240px] relative group">
                                    <Image src={`/ToDo/${img}.png`} alt={`Todo ${img}`} fill className="object-cover object-center group-hover:scale-[1.03] transition duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ПРОЕКТ 2: Space Tourism */}
                    <div className="space-y-10">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <div className="space-y-3">
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight">{tPortfolio("space.title")}</h2>
                                <p className="text-neutral-400 max-w-2xl text-base leading-relaxed font-light">{tPortfolio("space.description")}</p>
                            </div>
                            <Link href="https://space-site-khaki.vercel.app/" target="_blank" className="inline-flex items-center justify-center border border-white/10 bg-white/5 text-sm font-medium px-5 py-3 rounded-xl hover:bg-white hover:text-black transition-all group/btn w-fit shadow-md">
                                {tPortfolio("space.button")}
                                <span className="inline-block translate-x-0 group-hover/btn:translate-x-1 transition-transform ml-1.5">→</span>
                            </Link>
                        </div>

                        {/* Добавлен relative и object-cover для корректного отображения картинок */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {spaceImages.map((img) => (
                                /* Убрали h-[340px], добавили aspect-video (соотношение 16:9) */
                                <div key={img} className="overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f19] aspect-video relative group">
                                    <Image
                                        src={`/Space/${img}.jpeg`}
                                        alt={`Space ${img}`}
                                        fill
                                        className="object-cover object-top group-hover:scale-[1.02] transition duration-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* КОНТАКТЫ — Стеклянный градиентный футер */}
                <section id="contact" className="mt-44 pb-20">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            {tContact("title")}
                        </h2>

                        <p className="text-gray-300 text-lg max-w-2xl leading-8 mb-10 font-light">
                            {tContact("description")}
                        </p>

                        <div className="flex flex-wrap gap-4 relative z-10">
                            <Link href="https://www.threads.com/@razoomdev" className="bg-white text-black px-6 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition shadow-md">
                                {tContact("threads")}
                            </Link>
                            <Link href="https://www.instagram.com/razoomdev/" className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/20 active:scale-95 transition">
                                {tContact("instagram")}
                            </Link>
                            <Link href="https://boosty.to/zomaro_dev" className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/20 active:scale-95 transition">
                                {tContact("boosty")}
                            </Link>
                            <Link href="https://kwork.ru/website-development/52161554/razrabotка-veb-prilozheniy-i-saytov-pod-klyuch-na-next-js-i-typescript?ref=24301729" className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-6 py-4 rounded-2xl font-semibold hover:bg-cyan-400/20 active:scale-95 transition">
                                {tContact("kwork")}
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}