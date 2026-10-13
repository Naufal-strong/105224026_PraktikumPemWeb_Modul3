import type { Kategori } from "@/lib/tipe";

interface BagianProps {
    id: string;
    judul: string;
    deskripsi?: string;
    kategori?: Kategori;
    jumlah?: number;
    children: React.ReactNode;
}

const kategoriConfig: Record<
    Kategori,
    { warna: string; aksen: string; ikon: string }
> = {
    energi: {
        warna: "from-amber-500 to-orange-500",
        aksen: "bg-amber-50 border-amber-200 text-amber-700",
        ikon: "⚡",
    },
    lingkungan: {
        warna: "from-emerald-500 to-green-500",
        aksen: "bg-emerald-50 border-emerald-200 text-emerald-700",
        ikon: "🌿",
    },
    kampus: {
        warna: "from-blue-500 to-indigo-500",
        aksen: "bg-blue-50 border-blue-200 text-blue-700",
        ikon: "🏫",
    },
};

export default function Bagian({
    id,
    judul,
    deskripsi,
    kategori,
    jumlah,
    children,
}: BagianProps) {
    const config = kategori ? kategoriConfig[kategori] : null;

    return (
        <section
            id={id}
            aria-labelledby={`judul-${id}`}
            className="py-10"
        >
            {/* Header Bagian */}
            <div className="mb-8">
                {/* Garis aksen gradien */}
                <div
                    className={`mb-4 h-1 w-16 rounded-full bg-gradient-to-r ${
                        config?.warna ?? "from-gray-400 to-gray-600"
                    }`}
                />

                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        {/* Badge kategori (opsional) */}
                        {config && kategori && (
                            <span
                                className={`mb-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-medium ${config.aksen}`}
                            >
                                {config.ikon}{" "}
                                {kategori.charAt(0).toUpperCase() +
                                    kategori.slice(1)}
                            </span>
                        )}

                        {/* Judul */}
                        <h2
                            id={`judul-${id}`}
                            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                        >
                            {judul}
                        </h2>

                        {/* Deskripsi (opsional) */}
                        {deskripsi && (
                            <p className="mt-1.5 text-sm text-gray-500">
                                {deskripsi}
                            </p>
                        )}
                    </div>

                    {/* Badge jumlah item (opsional) */}
                    {jumlah !== undefined && (
                        <span className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-gray-100 px-2.5 text-sm font-semibold text-gray-600">
                            {jumlah}
                        </span>
                    )}
                </div>

                {/* Garis pemisah */}
                <div className="mt-4 border-t border-gray-100" />
            </div>

            {/* Konten */}
            <div className="mt-2">{children}</div>
        </section>
    );
}