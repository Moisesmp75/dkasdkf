"use client";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-semibold text-zinc-900">{title}</h1>
      {description ? (
        <p className="mt-2 text-sm text-zinc-600">{description}</p>
      ) : null}
    </header>
  );
}

