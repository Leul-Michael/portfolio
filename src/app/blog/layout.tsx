import Wrapper from "@/components/wrapper";

export default function BlogRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper className="relative z-10 flex flex-col h-full w-full min-h-screen py-32 bg-background">
      {children}
    </Wrapper>
  );
}
