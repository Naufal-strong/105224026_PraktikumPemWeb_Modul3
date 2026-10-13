import type { Item } from "./tipe";

export const daftarItem: Item[] = [
    {
        id: 1,
        judul: "Panel surya atap",
        kategori: "energi",
        deskripsi: "Pemantauan produksi listrik harian.",
        tersedia: true,
    },

    {
        id: 2,
        judul: "Stasiun Pengisian EV",
        kategori: "energi",
        deskripsi: "Tempat mengisi baterai mobil listrik.",
        tersedia: false,
    },
    {
        id: 3,
        judul: "Tong Sampah Pintar",
        kategori: "lingkungan",
        deskripsi: "Sensor tingkat kepenuhan sampah.",
        tersedia: true,
    },
    {
        id: 4,
        judul: "Kamera Keamanan Kampus",
        kategori: "kampus",
        deskripsi: "Monitoring keamanan area kampus.",
        tersedia: false,
    },
    {
        id: 5,
        judul: "Dispenser Air Otomatis",
        kategori: "kampus",
        deskripsi: "Ketersediaan air minum.",
        tersedia: true,
    },
    {
        id: 6,
        judul: "Sensor Kualitas Udara",
        kategori: "lingkungan",
        deskripsi: "Pemantauan kualitas udara sekitar.",
        tersedia: true,
    },
];