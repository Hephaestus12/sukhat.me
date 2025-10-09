"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/logo-icon";
import { Github, GitFork, Star } from "lucide-react";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch('https://api.github.com/users/tejsukhatme');
        const userData = await userResponse.json();
        setStats(userData);

        // Fetch top repositories
        const reposResponse = await fetch('https://api.github.com/users/tejsukhatme/repos?sort=stars&per_page=6');
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <LogoIcon company="github" size={48} />
          </div>
          <p className="text-zinc-600 mb-4">loading github activity...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* GitHub Stats Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <LogoIcon company="github" size={32} />
            <h4 className="font-semibold text-lg">github stats</h4>
          </div>
          
          {stats && (
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-800">{stats.public_repos}</div>
                <div className="text-sm text-zinc-600">repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-800">{stats.followers}</div>
                <div className="text-sm text-zinc-600">followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-800">{stats.following}</div>
                <div className="text-sm text-zinc-600">following</div>
              </div>
            </div>
          )}

          <Button variant="outline" asChild className="w-full">
            <a
              href="https://github.com/tejsukhatme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github size={16} />
              view github profile
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Top Repositories */}
      {repos.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold text-lg mb-4">popular repositories</h4>
            <div className="space-y-3">
              {repos.slice(0, 3).map((repo) => (
                <div key={repo.name} className="border rounded-lg p-3 hover:bg-zinc-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-teal-600 hover:underline"
                      >
                        {repo.name}
                      </a>
                      {repo.description && (
                        <p className="text-sm text-zinc-600 mt-1">{repo.description}</p>
                      )}
                      <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star size={12} />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}