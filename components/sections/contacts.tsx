"use client";

import { useState } from "react";
import Bagian from "@/components/Bagian";

export default function Contacts() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        topik: "gangguan-sensor",
        pesan: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        setTimeout(() => {
            setStatus("success");
            setFormData({
                nama: "",
                email: "",
                topik: "gangguan-sensor",
                pesan: "",
            });
        }, 800);
    };

    return (
        <Bagian
            id="kontak"
            judul="Hubungi & Pusat Bantuan IoT"
            deskripsi="Laporkan gangguan perangkat, ajukan titik sensor baru, atau sampaikan saran seputar ekosistem Smart Campus IoT."
        >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                {/* Info Kontak Sidebar */}
                <div className="flex flex-col justify-between gap-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100/60 p-6 lg:col-span-2">
                    <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            📡 Helpdesk Aktif
                        </span>
                        <h3 className="mt-3 text-lg font-bold text-gray-900">
                            Pusat Operasi IoT Kampus
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                            Tim teknisi kami memantau metrik daya, lingkungan, dan infrastruktur kampus 24/7.
                        </p>

                        <div className="mt-6 flex flex-col gap-4 text-sm text-gray-700">
                            <div className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-base shadow-sm">
                                    📍
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-900">Lokasi Lab</p>
                                    <p className="text-xs text-gray-500">
                                        Gedung Sains & Teknologi, Lt. 3, Lab Sistem Cerdas
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-base shadow-sm">
                                    ✉️
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-900">Email Tim</p>
                                    <a
                                        href="mailto:iot-support@campus.ac.id"
                                        className="text-xs text-blue-600 hover:underline"
                                    >
                                        iot-support@campus.ac.id
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-base shadow-sm">
                                    💬
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-900">WhatsApp Hotline</p>
                                    <p className="text-xs text-gray-500">+62 812-3456-7890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-base shadow-sm">
                                    ⏰
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-900">Jam Layanan</p>
                                    <p className="text-xs text-gray-500">Senin - Jumat: 08.00 - 16.30 WIB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-3.5 text-xs text-emerald-800">
                        ⚡ <span className="font-semibold">Respon Cepat:</span> Laporan anomali sensor diproses dalam rata-rata waktu &lt; 2 jam kerja.
                    </div>
                </div>

                {/* Formulir Kontak */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-3">
                    <h3 className="text-lg font-bold text-gray-900">Kirim Pesan / Tiket Laporan</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Isi formulir di bawah ini untuk berkoordinasi langsung dengan tim pemeliharaan IoT.
                    </p>

                    {status === "success" && (
                        <div className="mt-4 flex items-center justify-between rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                            <div>
                                <p className="font-semibold">✅ Pesan Berhasil Terkirim!</p>
                                <p className="text-xs text-green-700">
                                    Tiket laporan Anda telah dicatat. Tim kami akan segera menindaklanjuti.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setStatus("idle")}
                                className="text-xs font-semibold text-green-900 underline hover:no-underline"
                            >
                                Kirim lagi
                            </button>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="nama"
                                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    required
                                    placeholder="cth. Budi Santoso"
                                    value={formData.nama}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, nama: e.target.value }))
                                    }
                                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/40 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700"
                                >
                                    Email Kampus / Pribadi
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="cth. budi@student.ac.id"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                                    }
                                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/40 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="topik"
                                className="block text-xs font-semibold uppercase tracking-wider text-gray-700"
                            >
                                Kategori / Topik
                            </label>
                            <select
                                id="topik"
                                value={formData.topik}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, topik: e.target.value }))
                                }
                                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/40 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                            >
                                <option value="gangguan-sensor">⚠️ Gangguan / Kerusakan Sensor</option>
                                <option value="energi">⚡ Panel Surya / Stasiun EV</option>
                                <option value="lingkungan">🌿 Kualitas Udara / Sampah Pintar</option>
                                <option value="kampus">🏫 Kamera / Dispenser Kampus</option>
                                <option value="usulan-titik">💡 Usulan Titik Instalasi Baru</option>
                                <option value="lainnya">💬 Pertanyaan Lainnya</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="pesan"
                                className="block text-xs font-semibold uppercase tracking-wider text-gray-700"
                            >
                                Detail Pesan / Laporan
                            </label>
                            <textarea
                                id="pesan"
                                rows={4}
                                required
                                placeholder="Jelaskan kendala, nomor perangkat (jika ada), atau pertanyaan Anda..."
                                value={formData.pesan}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, pesan: e.target.value }))
                                }
                                className="mt-1.5 w-full resize-none rounded-xl border border-gray-200 bg-gray-50/40 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {status === "submitting" ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                    <span>Mengirim...</span>
                                </>
                            ) : (
                                <>
                                    <span>Kirim Laporan</span>
                                    <span>→</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </Bagian>
    );
}
