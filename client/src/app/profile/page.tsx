"use client";

import { useState, useEffect } from "react";
import {
  Edit2,
  Save,
  X,
  TrendingUp,
  Eye,
  Clock,
  Video,
  MapPin,
  LinkIcon,
  Users,
  Star,
} from "lucide-react";
import { getVideos } from "@/lib/storage";
import { getCurrentUser } from "@/lib/auth";
import { VideoCard } from "@/components/video-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [githubProfile, setGithubProfile] = useState<GitHubProfile | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    bio: "Content creator passionate about technology and education",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
  });

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      if (!currentUser) {
        try {
          const response = await fetch(
            "https://api.github.com/users/dev-sandip",
          );
          if (response.ok) {
            const data = await response.json();
            setGithubProfile(data);
          }
        } catch (error) {
          console.error("Failed to fetch GitHub profile:", error);
        }
      }
      setLoading(false);
    };

    fetchGitHubProfile();
  }, [currentUser]);

  const videos = getVideos();
  const userVideos = videos.filter((v) => v.status === "published");

  const totalViews = userVideos.reduce((acc, v) => acc + v.views, 0);
  const totalWatchTime = userVideos.reduce((acc, v) => acc + v.views * 5, 0);
  const avgViews =
    userVideos.length > 0 ? Math.round(totalViews / userVideos.length) : 0;

  const weeklyGrowth = 12.5;

  if (!currentUser && githubProfile) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <img
                src={githubProfile.avatar_url || "/placeholder.svg"}
                alt={githubProfile.name || githubProfile.login}
                className="w-24 h-24 rounded-full object-cover border-2 border-border"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-semibold">
                    {githubProfile.name || githubProfile.login}
                  </h1>
                  <a
                    href={githubProfile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent transition"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">
                  {githubProfile.bio || "Developer"}
                </p>
                {githubProfile.location && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    {githubProfile.location}
                  </div>
                )}
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-2xl font-semibold">
                      {githubProfile.public_repos}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      Repositories
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl font-semibold">
                      {githubProfile.followers}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      Followers
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl font-semibold">
                      {githubProfile.following}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      Following
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Repositories
                </div>
                <Video className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {githubProfile.public_repos}
              </div>
              <div className="text-xs text-muted-foreground">
                Public projects
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Followers
                </div>
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {githubProfile.followers}
              </div>
              <div className="text-xs text-muted-foreground">
                GitHub followers
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Following
                </div>
                <Star className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {githubProfile.following}
              </div>
              <div className="text-xs text-muted-foreground">
                Following developers
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              This is the developer profile for{" "}
              {githubProfile.name || githubProfile.login}. Visit their GitHub
              profile to see their projects and contributions.
            </p>
            <a
              href={githubProfile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              <LinkIcon className="w-4 h-4" />
              View GitHub Profile
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-muted-foreground">Loading profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <img
              src={profile.avatar || "/placeholder.svg"}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-border"
            />
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-accent border border-border"
                  />
                  <textarea
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-accent border border-border"
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition inline-flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 rounded-lg bg-accent hover:bg-muted border border-border transition inline-flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-semibold">{profile.name}</h1>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="p-2 rounded-lg hover:bg-accent transition"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-muted-foreground mb-4">{profile.bio}</p>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="text-2xl font-semibold">
                        {userVideos.length}
                      </span>
                      <span className="text-muted-foreground ml-2">Videos</span>
                    </div>
                    <div>
                      <span className="text-2xl font-semibold">
                        {(totalViews / 1000).toFixed(1)}K
                      </span>
                      <span className="text-muted-foreground ml-2">Views</span>
                    </div>
                    <div>
                      <span className="text-2xl font-semibold">
                        {(totalWatchTime / 60).toFixed(0)}h
                      </span>
                      <span className="text-muted-foreground ml-2">
                        Watch Time
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Total Views
              </div>
              <Eye className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold mb-1">
              {(totalViews / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-muted-foreground">
              Across all videos
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Avg Views
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1">
              {avgViews.toLocaleString()}
            </div>
            <div className="text-xs text-green-600 font-medium">
              +{weeklyGrowth}% this week
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Watch Time
              </div>
              <Clock className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold mb-1">
              {(totalWatchTime / 60).toFixed(0)}h
            </div>
            <div className="text-xs text-muted-foreground">
              Total hours watched
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Published
              </div>
              <Video className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-3xl font-bold mb-1">{userVideos.length}</div>
            <div className="text-xs text-muted-foreground">Active videos</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Top Performing Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {userVideos
              .sort((a, b) => b.views - a.views)
              .slice(0, 5)
              .map((video, index) => (
                <div
                  key={video.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-accent/50 hover:bg-accent transition"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-20 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {video.channel}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      {video.views.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">views</div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-4">My Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {userVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
