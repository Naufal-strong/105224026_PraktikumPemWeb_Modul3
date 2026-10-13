"use client";

import { useState, useMemo } from "react";
import { daftarItem } from "@/lib/data";
import type { Kategori } from "@/lib/tipe";
import DaftarItem from "@/components/DaftarItem";

type FilterKategori = "semua" | Kategori;

export default function KatalogPage() {
    const [pencarian, setPencarian] = useState("");
    const [kategoriTerpilih, setKategoriTerpilih] = useState<FilterKategori>("semua");
    const [hanyaTersedia, setHanyaTersedia] = useState(false);

    const kategoriList: { id: FilterKategori; label: string; icon: string }[] = [
        { id: "semua", label: "Semua Kategori", icon: "🌐" },
        { id: "energi", label: "Energi", icon: "⚡" },
        { id: "lingkungan", label: "Lingkungan", icon: "🌿" },
        { id: "kampus", label: "Fasilitas Kampus", icon: "🏫" },
    ];

    const itemTerfilter = useMemo(() => {
        return daftarItem.filter((item) => {
            const cocokKategori =
                kategoriTerpilih === "semua" || item.kategori === kategoriTerpilih;
            const cocokTersedia = !hanyaTersedia || item.tersedia;
            const query = pencarian.toLowerCase().trim();
            const cocokPencarian =
                query === "" ||
                item.judul.toLowerCase().includes(query) ||
                item.deskripsi.toLowerCase().includes(query);

            return cocokKategori && cocokTersedia && cocokPencarian;
        });
    }, [pencarian, kategoriTerpilih, hanyaTersedia]);

    return (
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-12">
            {/* Header Katalog */}
            <div className="flex flex-col gap-3 border-b border-gray-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        📑 Direktori Perangkat
                    </span>
                    <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Katalog Perangkat IoT
                    </h1>
                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                        Eksplorasi seluruh sensor dan infrastruktur pintar yang terpasang di area kampus.
                    </p>
                </div>

                <div className="text-sm text-gray-500">
                    Menampilkan <span className="font-bold text-gray-900">{itemTerfilter.length}</span> dari{" "}
                    <span className="font-semibold text-gray-900">{daftarItem.length}</span> perangkat
                </div>
            </div>

            {/* Filter & Pencarian Controls */}
            <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
                {/* Search bar */}
                <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                        🔍
                    </span>
                    <input
                        type="text"
                        placeholder="Cari berdasarkan nama perangkat atau fungsi (cth. Panel surya, sensor, air)..."
                        value={pencarian}
                        onChange={(e) => setPencarian(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                    {pencarian && (
                        <button
                            onClick={() => setPencarian("")}
                            className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-xs text-gray-400 hover:text-gray-600"
                        >
                            ✕ Hapus
                        </button>
                    )}
                </div>

                {/* Category Tabs & Availability Toggle */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Pills Kategori */}
                    <div className="flex flex-wrap gap-2">
                        {kategoriList.map((kat) => {
                            const aktif = kategoriTerpilih === kat.id;
                            return (
                                <button
                                    key={kat.id}
                                    onClick={() => setKategoriTerpilih(kat.id)}
                                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition ${aktif
                                            ? "bg-gray-900 text-white shadow-sm"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                                        }`}
                                >
                                    <span>{kat.icon}</span>
                                    <span>{kat.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Toggle Filter Ketersediaan */}
                    <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-700">
                        <input
                            type="checkbox"
                            checked={hanyaTersedia}
                            onChange={(e) => setHanyaTersedia(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span>Hanya perangkat aktif / tersedia</span>
                    </label>
                </div>
            </div>

            {/* Grid Hasil Perangkat */}
            <div>
                {itemTerfilter.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 py-16 text-center">
                        <span className="text-4xl">🔎</span>
                        <h3 className="mt-3 text-base font-bold text-gray-900">
                            Tidak ada perangkat yang cocok
                        </h3>
                        <p className="mt-1 text-xs text-gray-500">
                            Coba gunakan kata kunci pencarian lain atau sesuaikan filter kategori Anda.
                        </p>
                        <button
                            onClick={() => {
                                setPencarian("");
                                setKategoriTerpilih("semua");
                                setHanyaTersedia(false);
                            }}
                            className="mt-4 rounded-xl bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
                        >
                            Reset Semua Filter
                        </button>
                    </div>
                ) : (
                    <DaftarItem items={itemTerfilter} />
                )}
            </div>
        </div>
    );
}
