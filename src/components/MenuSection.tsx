interface MenuItem {
  name: string;
  description: string;
  price: string | { single: string; double?: string };
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  note?: string;
}

const MenuSection = ({ title, items, note }: MenuSectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-serif mb-6 pb-2 border-b border-border">
        {title}
      </h2>

      {note && <p className="text-sm italic mb-4 text-foreground/80">{note}</p>}

      <ul className="space-y-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row md:justify-between"
          >
            <div className="mb-2 md:mb-0">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-foreground/80 mt-1">
                {item.description}
              </p>
            </div>
            <div className="font-medium md:text-right md:ml-4 md:min-w-[100px]">
              {typeof item.price === "string" ? (
                <span>${item.price}</span>
              ) : (
                <span>
                  ${item.price.single}
                  {item.price.double && <span> / ${item.price.double}</span>}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
