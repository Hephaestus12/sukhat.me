import Image from "next/image";

interface LogoIconProps {
  company: string;
  size?: number;
  className?: string;
}

const logoUrls: Record<string, string> = {
  "weatherpromise": "https://weatherpromise.com/favicon.ico",
  "aws": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "kodex": "https://kodex.ai/favicon.ico",
  "rippling": "https://logo.clearbit.com/rippling.com",
  "microsoft": "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "google": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "github": "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  "bits": "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg",
};

export function LogoIcon({ company, size = 24, className = "" }: LogoIconProps) {
  const logoUrl = logoUrls[company.toLowerCase()];
  
  if (!logoUrl) {
    return (
      <div 
        className={`bg-zinc-300 rounded flex items-center justify-center text-xs font-bold text-zinc-600 ${className}`}
        style={{ width: size, height: size }}
      >
        {company.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src={logoUrl}
        alt={`${company} logo`}
        width={size}
        height={size}
        className="object-contain rounded"
        unoptimized
      />
    </div>
  );
}