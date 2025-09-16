import Link from "next/link";

interface BrandProps {
  className?: string;
}

const Brand = ({ className = "" }: BrandProps) => {
  const classes = [
    "navbar-brand",
    "d-inline-flex",
    "align-items-center",
    "gap-2",
    "text-decoration-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href="/" className={classes} aria-label="QTick home">
      <span className="brand-placeholder" aria-hidden={true}>
        Logo
      </span>
      <span className="fw-bold fs-4 text-primary mb-0">QTick</span>
    </Link>
  );
};

export default Brand;
