interface TechBadgeProps {
  tech: string;
  variant?: 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo' | 'pink' | 'orange';
}

const variantClasses = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  purple: 'bg-purple-100 text-purple-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  red: 'bg-red-100 text-red-800',
  indigo: 'bg-indigo-100 text-indigo-800',
  pink: 'bg-pink-100 text-pink-800',
  orange: 'bg-orange-100 text-orange-800',
};

export function TechBadge({ tech, variant = 'blue' }: TechBadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]}`}>
      {tech}
    </span>
  );
}