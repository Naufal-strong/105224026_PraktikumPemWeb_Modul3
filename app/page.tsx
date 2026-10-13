import { daftarItem } from "@/lib/data";
import Bagian from "@/components/Bagian";
import DaftarItem from "@/components/DaftarItem";
import Contacts from "@/components/sections/contacts";

export default function Home() {
  const itemEnergi = daftarItem.filter((item) => item.kategori === "energi");
  const itemLingkungan = daftarItem.filter((item) => item.kategori === "lingkungan");
  const itemKampus = daftarItem.filter((item) => item.kategori === "kampus");

  const totalPerangkat = daftarItem.length;
  const perangkatTersedia = daftarItem.filter((item) => item.tersedia).length;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-950 p-8 text-white shadow-xl sm:p-12">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-500/30">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Smart Campus IoT System
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            My Energy &amp; Smart Campus IoT
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            Platform pemantauan energi terbarukan, kualitas lingkungan hidup, dan infrastruktur pintar kampus secara terintegrasi dan real-time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="#energi"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-semibold text-gray-950 transition hover:bg-emerald-400"
            >
              Jelajahi Perangkat ↓
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-white/5 px-5 py-2.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Pusat Bantuan
            </a>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-gray-800/80 pt-8 sm:grid-cols-4">
          <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-xs">
            <p className="text-xs font-medium text-gray-400">Total Perangkat</p>
            <p className="mt-1 text-2xl font-bold text-white">{totalPerangkat}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-xs">
            <p className="text-xs font-medium text-gray-400">Status Aktif</p>
            <p className="mt-1 text-2xl font-bold text-emerald-400">
              {perangkatTersedia} / {totalPerangkat}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-xs">
            <p className="text-xs font-medium text-gray-400">Sektor Energi</p>
            <p className="mt-1 text-2xl font-bold text-amber-400">{itemEnergi.length} Unit</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-xs">
            <p className="text-xs font-medium text-gray-400">Lingkungan Hidup</p>
            <p className="mt-1 text-2xl font-bold text-teal-400">{itemLingkungan.length} Unit</p>
          </div>
        </div>
      </section>

      {/* Bagian Energi */}
      <Bagian
        id="energi"
        judul="Infrastruktur Energi Terbarukan"
        kategori="energi"
        deskripsi="Monitoring konversi energi surya dan fasilitas charging kendaraan listrik kampus."
        jumlah={itemEnergi.length}
      >
        <DaftarItem items={itemEnergi} />
      </Bagian>

      {/* Bagian Lingkungan */}
      <Bagian
        id="lingkungan"
        judul="Pemantauan Lingkungan & Kebersihan"
        kategori="lingkungan"
        deskripsi="Sensor sensorik untuk memantau indeks kualitas udara dan efisiensi pengelolaan sampah pintar."
        jumlah={itemLingkungan.length}
      >
        <DaftarItem items={itemLingkungan} />
      </Bagian>

      {/* Bagian Kampus */}
      <Bagian
        id="kampus"
        judul="Fasilitas & Keamanan Kampus"
        kategori="kampus"
        deskripsi="Peralatan pintar untuk mendukung kenyamanan, hidrasi higienis, dan pengawasan area kampus."
        jumlah={itemKampus.length}
      >
        <DaftarItem items={itemKampus} />
      </Bagian>

      {/* Bagian Kontak */}
      <Contacts />
    </div>
  );
}
