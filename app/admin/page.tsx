import { Users, Briefcase, FileText, Activity } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "1,248", icon: <Users className="size-5" />, trend: "+12% this month" },
    { label: "Active Deployments", value: "42", icon: <Briefcase className="size-5" />, trend: "+3 this week" },
    { label: "Published Posts", value: "156", icon: <FileText className="size-5" />, trend: "+15 this month" },
    { label: "New Inquiries", value: "8", icon: <Activity className="size-5" />, trend: "Needs attention" },
  ];

  const recentLogs = [
    { id: 1, user: "Jiwon Kim", action: "Published a new post: 'AI Trends 2026'", time: "2 hours ago" },
    { id: 2, user: "System", action: "Deployment #104 status changed to 'Ongoing'", time: "5 hours ago" },
    { id: 3, user: "Sanghoon Lee", action: "Registered as a new Expert", time: "1 day ago" },
    { id: 4, user: "Acme Corp", action: "Submitted a new quote request (Custom AI)", time: "1 day ago" },
    { id: 5, user: "Admin", action: "Updated site settings", time: "2 days ago" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4 text-muted-foreground">
              <span className="text-sm font-medium">{stat.label}</span>
              <div className="p-2 bg-secondary rounded-lg">
                {stat.icon}
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold tracking-tight text-foreground">{stat.value}</div>
              <p className="text-xs text-primary font-medium mt-1">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="glass-panel rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Activity className="size-5 text-primary" /> Recent Activity
        </h2>
        <div className="space-y-6">
          {recentLogs.map((log) => (
            <div key={log.id} className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold shrink-0 border border-border/50">
                {log.user.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {log.user} <span className="font-normal text-muted-foreground">{log.action}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">{log.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
