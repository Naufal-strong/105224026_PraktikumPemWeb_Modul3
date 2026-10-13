import type { Item } from "@/lib/tipe";
import KartuItem from "./KartuItem";

interface DaftarItemProps {
    items: Item[];
}

export default function DaftarItem({ items }: DaftarItemProps) {
    if (items.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-8 text-center text-sm text-gray-500">
                Belum ada perangkat IoT yang tersedia di kategori ini.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <KartuItem key={item.id} item={item} />
            ))}
        </div>
    );
}
