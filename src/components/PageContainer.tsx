import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

export default function PageContainer({
  children,
  className = "",
  as: Tag = "div",
}: PageContainerProps) {
  return <Tag className={`container-page ${className}`}>{children}</Tag>;
}
