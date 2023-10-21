export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`${className} font-DMSansSemiBold text-primaryFont xs:text-4xl`}>
      {children}
    </h2>
  );
}
