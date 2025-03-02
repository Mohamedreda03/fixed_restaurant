import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={backgroundImage}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-secondary z-0" />
      )}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl md:text-5xl font-serif mb-4 ${
              backgroundImage ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-xl ${
                backgroundImage ? "text-white/90" : "text-foreground/80"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
