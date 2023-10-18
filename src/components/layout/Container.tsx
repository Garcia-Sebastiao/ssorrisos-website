export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`${className} w-full xs:px-14 lg:px-44 2xl:px-80 py-20 flex items-center`}
    >
      {children}
    </section>
  );
}
