"use client";

interface CategoryTabsProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryTabs({ categories, active, onChange }: CategoryTabsProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0">
      <div className="flex gap-2 w-max lg:w-auto lg:flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              active === cat
                ? "bg-forest text-white shadow-md shadow-forest/20"
                : "bg-white text-ink-light border border-sand-dark hover:border-forest/30 hover:text-forest"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
