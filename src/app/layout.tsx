export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ur" }];
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return <>{children}</>;
}