import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  tag?: string;
};

export default function CurvedInfoCard({
  title,
  description,
  icon: Icon,
  gradient,
  tag,
}: Props) {
  return (
    <div
      className="
        group bg-white rounded-3xl shadow-lg overflow-hidden
        transition-all duration-500
        hover:-translate-y-3 hover:shadow-2xl
        animate-fade-up
      "
    >
      {/* Curved Header */}
      <div className={`relative h-32 ${gradient}`}>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-tl-[60px]" />

        <div className="
          absolute top-6 left-6
          w-12 h-12 rounded-xl bg-white/20
          flex items-center justify-center text-white
        ">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {tag && (
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}
