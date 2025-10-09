import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TechBadge } from "@/components/tech-badge";
import { LogoIcon } from "@/components/logo-icon";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  technologies?: Array<{ name: string; variant?: 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo' | 'pink' | 'orange' }>;
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholder?: boolean;
  logoCompany?: string;
}

export function ProjectCard({ 
  title = "", 
  description = "", 
  technologies = [], 
  githubUrl, 
  liveUrl,
  isPlaceholder = false,
  logoCompany
}: ProjectCardProps) {
  if (isPlaceholder) {
    return null;
  }

  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          {logoCompany && <LogoIcon company={logoCompany} size={32} />}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-zinc-600 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <TechBadge 
              key={index} 
              tech={tech.name} 
              variant={tech.variant} 
            />
          ))}
        </div>
        
        <div className="flex gap-2 mt-auto">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild className="flex-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                live demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}