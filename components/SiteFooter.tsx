import Link from "next/link";

const tahun = new Date().getFullYear();

const kategoriLinks = [
    { href: "/?kategori=energi", label: "⚡ Energi" },
    { href: "/?kategori=lingkungan", label: "🌿 Lingkungan" },
    { href: "/?kategori=kampus", label: "🏫 Kampus" },
];

const infoLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
];

export default function SiteFooter() {
    return (
        <footer className="border-t bg-gray-50 text-sm text-gray-600">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
                {/* Brand */}
                <div className="flex flex-col gap-2">
                    <Link href="/" className="text-base font-bold text-gray-900">
                        🌐 Smart Campus IoT
                    </Link>
                    <p className="leading-relaxed">
                        Platform pemantauan perangkat IoT kampus secara real-time —
                        energi, lingkungan, dan keamanan dalam satu dasbor.
                    </p>
                </div>

                {/* Kategori */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-gray-800">Kategori</h2>
                    <ul className="flex flex-col gap-1">
                        {kategoriLinks.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="transition-colors hover:text-gray-900"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-gray-800">Informasi</h2>
                    <ul className="flex flex-col gap-1">
                        {infoLinks.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="transition-colors hover:text-gray-900"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t px-4 py-4 text-center text-xs text-gray-400">
                © {tahun} Smart Campus IoT — Praktikum Pemrograman Web &amp; Aplikasi
            </div>
        </footer>
    );
}