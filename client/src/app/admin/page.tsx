"use client";

import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  VideoIcon,
  Eye,
  AlertCircle,
  TrendingUp,
  Upload,
} from "lucide-react";
import { getVideos, updateVideo, deleteVideo } from "@/lib/storage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "@/lib/types";

export default function AdminPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    setVideos(getVideos());
  }, []);

  const pendingVideos = videos.filter((v) => v.status === "pending");
  const publishedVideos = videos.filter((v) => v.status === "published");
  const totalViews = videos.reduce((acc, v) => acc + v.views, 0);
  const totalVideos = videos.length;

  const weeklyGrowth = 18.3;
  const monthlyUploads = 67;

  const handleApprove = (id: string) => {
    updateVideo(id, { status: "published" });
    setVideos(getVideos());
  };

  const handleReject = (id: string) => {
    deleteVideo(id);
    setVideos(getVideos());
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Admin Console</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Total Videos
              </div>
              <VideoIcon className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold mb-1">{totalVideos}</div>
            <div className="text-xs text-muted-foreground">
              {publishedVideos.length} published
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Total Views
              </div>
              <Eye className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1">
              {(totalViews / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-green-600 font-medium">
              +{weeklyGrowth}% this week
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Pending Review
              </div>
              <AlertCircle className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-3xl font-bold mb-1">
              {pendingVideos.length}
            </div>
            <div className="text-xs text-muted-foreground">
              Awaiting moderation
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Monthly Uploads
              </div>
              <Upload className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold mb-1">{monthlyUploads}</div>
            <div className="text-xs text-muted-foreground">This month</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Top Performing Videos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {videos
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
                    className="w-24 h-14 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {video.channel}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-lg">
                      {video.views.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">views</div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      video.status === "published"
                        ? "bg-green-500/10 text-green-600"
                        : video.status === "pending"
                          ? "bg-orange-500/10 text-orange-600"
                          : "bg-blue-500/10 text-blue-600"
                    }`}
                  >
                    {video.status}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Moderation Queue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingVideos.map((video) => (
              <div
                key={video.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-accent border border-border"
              >
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-32 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {video.channel}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(video.id)}
                    className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition"
                  >
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleReject(video.id)}
                    className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            {pendingVideos.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No videos pending review
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
