import type { Item, Kategori } from "@/lib/tipe";
import Image from "next/image";

interface KartuItemProps {
    item: Item;
}

const kategoriConfig: Record<
    Kategori,
    { gradien: string; badge: string; ikon: string; label: string }
> = {
    energi: {
        gradien: "from-amber-400 to-orange-500",
        badge: "bg-amber-50 border-amber-200 text-amber-700",
        ikon: "⚡",
        label: "Energi",
    },
    lingkungan: {
        gradien: "from-emerald-400 to-green-500",
        badge: "bg-emerald-50 border-emerald-200 text-emerald-700",
        ikon: "🌿",
        label: "Lingkungan",
    },
    kampus: {
        gradien: "from-blue-400 to-indigo-500",
        badge: "bg-blue-50 border-blue-200 text-blue-700",
        ikon: "🏫",
        label: "Kampus",
    },
};

export default function KartuItem({ item }: KartuItemProps) {
    const { judul, kategori, deskripsi, tersedia, gambar } = item;
    const config = kategoriConfig[kategori];

    return (
        <article
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100
                       bg-white shadow-sm transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg"
        >
            {/* Gambar / placeholder gradien */}
            <div className="relative h-44 w-full overflow-hidden">
                {gambar ? (
                    <Image
                        src={gambar}
                        alt={judul}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${config.gradien}`}
                    >
                        <span className="text-5xl drop-shadow-sm">
                            {config.ikon}
                        </span>
                    </div>
                )}

                {/* Badge status tersedia */}
                <span
                    className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1
                                text-xs font-semibold shadow-sm backdrop-blur-sm
                                ${tersedia
                            ? "bg-green-500/90 text-white"
                            : "bg-gray-700/75 text-gray-200"
                        }`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${tersedia ? "bg-green-200 animate-pulse" : "bg-gray-400"
                            }`}
                    />
                    {tersedia ? "Tersedia" : "Tidak Tersedia"}
                </span>
            </div>

            {/* Konten kartu */}
            <div className="flex flex-1 flex-col gap-3 p-5">
                {/* Badge kategori */}
                <span
                    className={`inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-0.5
                                text-xs font-medium ${config.badge}`}
                >
                    {config.ikon} {config.label}
                </span>

                {/* Judul */}
                <h3 className="text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-gray-700">
                    {judul}
                </h3>

                {/* Deskripsi */}
                <p className="flex-1 text-sm leading-relaxed text-gray-500">
                    {deskripsi}
                </p>

                {/* Garis bawah aksen */}
                <div
                    className={`h-0.5 w-0 rounded-full bg-gradient-to-r ${config.gradien}
                                transition-all duration-500 group-hover:w-full`}
                />
            </div>
        </article>
    );
}
