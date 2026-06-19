import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Activity, Clock, Database, Server, Search, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white pt-28 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-[#1D1D1F] mb-6 leading-[1.07]"
        >
          Enterprise AI Infrastructure
          <br />
          Built for Scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-[#6E6E73] max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
        >
          DeepSoch AI provides GPU infrastructure, AI APIs, and enterprise compute, powering your workloads, models, and deployments at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-[15px] h-12 px-7 font-medium rounded-lg w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border border-gray-300 bg-white text-[#1D1D1F] hover:bg-gray-50 text-[15px] h-12 px-7 font-medium rounded-lg w-full sm:w-auto">
              Book Demo
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Rich Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="rounded-t-2xl border border-gray-200 border-b-0 bg-white shadow-[0_-8px_50px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Window chrome */}
          <div className="h-11 bg-[#F5F5F7] border-b border-gray-200 flex items-center px-5 gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <div className="mx-auto text-xs font-medium text-gray-400 tracking-tight">DeepSoch AI</div>
          </div>

          <div className="flex" style={{ minHeight: 560 }}>
            {/* Sidebar */}
            <div className="hidden lg:flex flex-col w-52 border-r border-gray-100 bg-[#FAFAFA] shrink-0">
              {/* Brand in sidebar */}
              <div className="px-4 py-4 border-b border-gray-100">
                <p className="text-[13px] font-semibold text-[#1D1D1F]">DeepSoch AI</p>
                <p className="text-[11px] text-gray-400 mt-0.5">Compute Cloud</p>
              </div>

              {/* Nav items */}
              <div className="flex-1 p-3 flex flex-col gap-0.5">
                {[
                  { label: "Overview", active: true },
                  { label: "GPU Instances", active: false },
                  { label: "Clusters", active: false },
                  { label: "Storage", active: false },
                  { label: "AI APIs", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`px-3 py-2 rounded-md text-[13px] cursor-default ${
                      item.active ? "bg-blue-50 text-blue-700 font-medium" : "text-[#6E6E73]"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Upgrade banner */}
              <div className="m-3 p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="w-3 h-3" />
                  <p className="text-[12px] font-semibold">Scale Faster</p>
                </div>
                <p className="text-[11px] text-blue-100 leading-snug mb-2">Unlock more compute power for premium workloads.</p>
                <div className="text-[11px] font-semibold bg-white/20 hover:bg-white/30 rounded-md px-2 py-1 text-center cursor-default">
                  Upgrade Plan
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-hidden">
              {/* Top bar */}
              <div className="border-b border-gray-100 px-6 py-3 flex items-center justify-between gap-4 bg-white">
                <div className="flex items-center gap-2 text-gray-400 bg-gray-100 rounded-lg px-3 py-1.5 w-48">
                  <Search className="w-3.5 h-3.5" />
                  <span className="text-[12px]">Search workload</span>
                </div>
                <div className="text-[13px] font-semibold text-gray-700">Infrastructure Overview</div>
                <div className="flex gap-2">
                  <div className="h-7 px-3 rounded-md bg-blue-600 text-white text-[12px] font-medium flex items-center cursor-default">Add Credits</div>
                  <div className="h-7 px-3 rounded-md border border-gray-200 text-gray-600 text-[12px] font-medium flex items-center cursor-default">Import Data</div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 xl:grid-cols-3 gap-4">
                {/* Left column (2/3) */}
                <div className="xl:col-span-2 flex flex-col gap-4">
                  {/* Stat cards */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[13px] font-semibold text-[#1D1D1F]">Dashboard</p>
                      <p className="text-[11px] text-gray-400">Monitor AI infrastructure, usage, and deployment activity in one place.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        { icon: <Clock className="w-3.5 h-3.5" />, label: "GPU Hours Used", value: "1,245.6", sub: "+24% this month", green: true },
                        { icon: <Server className="w-3.5 h-3.5" />, label: "Active Instances", value: "12", sub: "6 currently running", green: false },
                        { icon: <Database className="w-3.5 h-3.5" />, label: "Storage Used", value: "2.34 TB", sub: "23% of total capacity", green: false },
                        { icon: <Activity className="w-3.5 h-3.5" />, label: "API Calls", value: "320.5K", sub: "+32% in 7 days", green: true },
                      ].map((s) => (
                        <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                          <div className="flex items-center gap-1.5 text-gray-400 mb-2">
                            {s.icon}
                            <span className="text-[11px] text-gray-500">{s.label}</span>
                          </div>
                          <div className="text-xl font-bold text-gray-900 mb-0.5">{s.value}</div>
                          <div className={`text-[11px] font-medium ${s.green ? "text-green-600" : "text-gray-400"}`}>{s.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GPU Usage Overview + Recent Activity */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[12px] font-semibold text-gray-700">GPU Usage Overview</p>
                        <span className="text-[11px] text-gray-400">Last 7 Days</span>
                      </div>
                      {/* Fake bar chart */}
                      <div className="flex items-end gap-1 h-16">
                        {[60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm bg-blue-100" style={{ height: `${h}%` }}>
                            <div className="h-full rounded-sm bg-blue-500 opacity-70" style={{ height: `${h}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[12px] font-semibold text-gray-700">Recent Activity</p>
                        <span className="text-[11px] text-blue-600 cursor-default">View All</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: "GPU Instance", detail: "gpun-12xlarge-001 running" },
                          { label: "Image Generation", detail: "Poster render completed" },
                          { label: "Model Inference", detail: "llama-3 deployment active" },
                          { label: "Storage", detail: "project-dataset.zip uploaded" },
                        ].map((a) => (
                          <div key={a.label} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <div>
                              <p className="text-[11px] font-medium text-gray-700">{a.label}</p>
                              <p className="text-[10px] text-gray-400">{a.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column (1/3) */}
                <div className="flex flex-col gap-3">
                  {/* Usage breakdown */}
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <p className="text-[12px] font-semibold text-gray-700 mb-1">Usage Breakdown</p>
                    <p className="text-[11px] text-gray-400 mb-3">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">1,245.6</p>
                    <p className="text-[11px] text-gray-500 mb-3">GPU Hours</p>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "72%" }} />
                    </div>
                  </div>

                  {/* Top services */}
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[12px] font-semibold text-gray-700">Top Services</p>
                      <span className="text-[11px] text-blue-600 cursor-default">View All</span>
                    </div>
                    {["GPU Instances", "Model Inference", "Image Generation", "Storage"].map((s, i) => (
                      <div key={s} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                        <span className="text-[12px] text-gray-700">{s}</span>
                        <div className="w-16 h-1 bg-blue-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${[88, 72, 55, 40][i]}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick actions */}
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <p className="text-[12px] font-semibold text-gray-700 mb-3">Quick Actions</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Launch GPU", "Deploy Model", "Create Storage", "Generate Image"].map((action) => (
                        <div key={action} className="rounded-lg border border-gray-200 p-2 text-center text-[11px] font-medium text-gray-600 cursor-default hover:bg-gray-50 transition-colors">
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deployment active notification */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1 shrink-0 animate-pulse" />
                    <div>
                      <p className="text-[12px] font-semibold text-green-800">Deployment Active</p>
                      <p className="text-[11px] text-green-700 leading-snug">Your workload is now running on DeepSoch GPU Cloud.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
