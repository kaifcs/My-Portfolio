"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import RatingCard from "./RatingCard";
import { motion } from "framer-motion";
import { Sparkles, Target, Award, Flame, TrendingUp, ExternalLink, Code2, Trophy } from "lucide-react";

const showPlus = (n) => `${n}+`;
const ratingHistory = {
  leetcode: [{rating: 1548}, {rating: 1652}, {rating: 1677}, {rating: 1742}, 
               {rating: 1703}, {rating: 1749}, {rating: 1791}, {rating: 1784}, 
               {rating: 1795}, {rating: 1784}, {rating: 1820}, {rating: 1794}, 
               {rating: 1791}, {rating: 1812}, {rating: 1859}, {rating: 1905}
            ],
  codechef: [{rating: 957}, {rating: 1180}, {rating: 1341}, {rating: 1410}, 
               {rating: 1392}, {rating: 1395}, {rating: 1446}, {rating: 1430}, 
               {rating: 1488}, {rating: 1501}, {rating: 1528}, {rating: 1536},
               {rating: 1569}, {rating: 1598}, {rating: 1597}, {rating: 1614},
               {rating: 1619}, {rating: 1635}, {rating: 1647}, {rating: 1649},
               {rating: 1684}, {rating: 1684}
              ],
  codeforces: [{rating: 417}, {rating: 656}, {rating: 878}, {rating: 990}, 
               {rating: 1084}, {rating: 1092}, {rating: 1033}, {rating: 1083}, 
               {rating: 1076}, {rating: 1084}, {rating: 1081}, {rating: 1061},
               {rating: 1171}, {rating: 1255}, {rating: 1249}, {rating: 1267},
               {rating: 1321}, {rating: 1332}, {rating: 1328}, {rating: 1344},
              ],
};

const REFRESH_MS = 5 * 60 * 1000;

const ProgrammingSection = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchStats = async () => {
      try {
        const res = await fetch("/api/stats", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch stats");
        const data = await res.json();
        if (active) setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchStats();

    const intervalId = setInterval(fetchStats, REFRESH_MS);
    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-transparent text-white py-16 px-4 flex items-center justify-center relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent blur-[120px] rounded-full -top-32 -left-32 animate-pulse pointer-events-none" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/10 via-purple-500/5 to-transparent blur-[120px] rounded-full -bottom-32 -right-32 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
        
        <div className="text-center relative z-10">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 border-4 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 blur-xl opacity-50 animate-pulse"></div>
          </div>
          <p className="text-zinc-400 font-medium text-lg">Loading competitive analytics...</p>
        </div>
      </section>
    );
  }

  if (!stats) {
    return (
      <section className="min-h-screen bg-transparent text-white py-16 px-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />
        <div className="text-center relative z-10">
          <p className="text-zinc-400 text-lg">Failed to load stats. Please try again.</p>
        </div>
      </section>
    );
  }

  // Calculate data according to requirements
  const totalProblems = (stats.totalProblems ?? 1100) + 250;
  const activeDays =
    stats.dailyStreak && stats.dailyStreak > 0 ? stats.dailyStreak : 440;
  const totalContests =
    stats.totalContests ??
    (stats.platforms?.leetcode?.contests ?? 0) +
      (stats.platforms?.codechef?.contests ?? 0) +
      (stats.platforms?.codeforces?.contests ?? 0);

  /* ================= DSA ================= */
  const dsaData = {
    easy: stats.dsa?.easy ?? stats.platforms?.leetcode?.easy ?? 0,
    medium: stats.dsa?.medium ?? stats.platforms?.leetcode?.medium ?? 0,
    hard: stats.dsa?.hard ?? stats.platforms?.leetcode?.hard ?? 0,
    total: stats.dsa?.total ?? stats.platforms?.leetcode?.solved ?? 0,
  };

  /* ================= CP ================= */
  const cpData = {
    codechef: stats.platforms?.codechef?.solved ?? 566,
    codeforces: stats.platforms?.codeforces?.solved ?? 0,
    total:
      (stats.platforms?.codechef?.solved ?? 566) +
      (stats.platforms?.codeforces?.solved ?? 0),
  };
  const contestBreakdown = [
    { platform: "LeetCode", count: stats.platforms?.leetcode?.contests ?? 0 },
    { platform: "CodeChef", count: stats.platforms?.codechef?.contests ?? 0 },
    { platform: "Codeforces", count: stats.platforms?.codeforces?.contests ?? 0 },
  ];

  return (
    <section id="competitive-programming" className="py-16 relative bg-transparent overflow-hidden">
      
      {/* ========== PREMIUM BACKGROUND ARCHITECTURE ========== */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-950/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/8 via-cyan-500/5 to-transparent blur-[140px] rounded-full -top-64 -left-64 animate-pulse pointer-events-none" />
      <div className="absolute w-[900px] h-[900px] bg-gradient-to-tl from-blue-500/8 via-purple-500/5 to-transparent blur-[160px] rounded-full -bottom-64 -right-64 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* ========== PREMIUM HEADER ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 backdrop-blur-xl mb-6 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase">
              Algorithm Mastery
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
            Competitive{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                Programming
              </span>
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/50 via-cyan-400/50 to-blue-400/50 blur-sm"></div>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed font-light">
            Solving complex algorithmic problems and scaling global leaderboards.
          </p>
        </motion.div>

        {/* ========== SUMMARY CARDS ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          <SummaryCard
            icon={<Target className="w-8 h-8" />}
            value={showPlus(totalProblems)}
            label="PROBLEMS SOLVED"
            iconColor="text-emerald-400"
            gradientFrom="from-emerald-500/10"
            gradientTo="to-emerald-500/5"
            borderColor="border-emerald-500/20"
            glowColor="shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          />
          <SummaryCard
            icon={<Award className="w-8 h-8" />}
            value={showPlus(totalContests)}
            label="GLOBAL CONTESTS"
            iconColor="text-blue-400"
            gradientFrom="from-blue-500/10"
            gradientTo="to-blue-500/5"
            borderColor="border-blue-500/20"
            glowColor="shadow-[0_0_40px_rgba(59,130,246,0.15)]"
          />
          <SummaryCard
            icon={<Flame className="w-8 h-8" />}
            value={showPlus(activeDays)}
            label="DAILY STREAK"
            iconColor="text-orange-400"
            gradientFrom="from-orange-500/10"
            gradientTo="to-orange-500/5"
            borderColor="border-orange-500/20"
            glowColor="shadow-[0_0_40px_rgba(249,115,22,0.15)]"
          />
          <SummaryCard
            icon={<TrendingUp className="w-8 h-8" />}
            value={showPlus(activeDays)}
            label="MAX LONGEVITY"
            iconColor="text-purple-400"
            gradientFrom="from-purple-500/10"
            gradientTo="to-purple-500/5"
            borderColor="border-purple-500/20"
            glowColor="shadow-[0_0_40px_rgba(168,85,247,0.15)]"
          />
        </motion.div>

        {/* ========== PLATFORM RATING CARDS ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          <RatingCard
            name="LeetCode"
            rating={stats.platforms.leetcode.rating}
            maxRating={stats.platforms.leetcode.rating}
            contests={stats.platforms.leetcode.contests}
            badge="KNIGHT"
            color="#facc15"
            data={ratingHistory.leetcode}
            link="https://leetcode.com/u/Dynamite05/"
          />

          <RatingCard
            name="CodeChef"
            rating={stats.platforms.codechef.rating}
            maxRating={stats.platforms.codechef.rating}
            contests={stats.platforms.codechef.contests}
            badge={stats.platforms.codechef.stars}
            color="#f6a028"
            data={ratingHistory.codechef}
            link="https://www.codechef.com/users/labor_art_09"
          />

          <RatingCard
            name="Codeforces"
            rating={stats.platforms.codeforces.rating}
            maxRating={stats.platforms.codeforces.rating}
            contests={stats.platforms.codeforces.contests}
            badge="PUPIL"
            color="#29ef78"
            data={ratingHistory.codeforces}
            link="https://codeforces.com/profile/kaif2828"
          />
        </motion.div>

        {/* ========== ANALYTICS DASHBOARD ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          
          {/* DSA Analysis */}
          <AnalyticsCard
            title="DSA Analysis"
            description="Data Structures & Algorithms (LeetCode)"
            total={dsaData.total}
            data={[
              { name: "Easy", value: dsaData.easy, color: "#10b981" },
              { name: "Medium", value: dsaData.medium, color: "#f59e0b" },
              { name: "Hard", value: dsaData.hard, color: "#ef4444" },
            ]}
          />

          {/* CP Analysis */}
          <AnalyticsCard
            title="Competitive Programming"
            description="CodeChef + Codeforces"
            total={cpData.total}
            data={[
              { name: "CodeChef", value: stats.platforms.codechef.solved, label: showPlus(stats.platforms.codechef.solved), color: "#6023ee" },
              { name: "Codeforces", value: cpData.codeforces, label: showPlus(cpData.codeforces), color: "#1a6cef" },
            ]}
          />
        </motion.div>

        {/* ========== CONTEST BREAKDOWN ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-16"
        >
          <ContestBreakdownCard
            totalContests={totalContests}
            breakdown={contestBreakdown}
          />
        </motion.div>

        {/* ========== PREMIUM CODING PROFILES SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-xl mb-6 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase">
                Platform Presence
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Coding{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Profiles
              </span>
            </h3>
            <p className="text-zinc-400 text-lg lg:text-xl font-light max-w-2xl mx-auto">
              Connect across leading competitive programming platforms
            </p>
          </div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
            <CodingProfileCard
              name="HackerRank"
              logo="https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png"
              link="https://www.hackerrank.com/profile/kaif_2327csit"
              accentColor="from-green-500/20 to-green-600/10"
              borderColor="border-green-500/30"
              hoverGlow="hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]"
            />
            <CodingProfileCard
              name="AtCoder"
              logo="https://img.atcoder.jp/assets/favicon.png"
              link="https://atcoder.jp/users/kaif2828"
              accentColor="from-gray-500/20 to-gray-600/10"
              borderColor="border-gray-500/30"
              hoverGlow="hover:shadow-[0_0_40px_rgba(107,114,128,0.2)]"
            />
            <CodingProfileCard
              name="GeeksforGeeks"
              logo="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
              link="https://www.geeksforgeeks.org/user/kaifkhan29g04/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
              accentColor="from-green-600/20 to-green-700/10"
              borderColor="border-green-600/30"
              hoverGlow="hover:shadow-[0_0_40px_rgba(22,163,74,0.2)]"
            />
            <CodingProfileCard
              name="Codolio"
              logo="https://codolio.com/favicon.ico"
              link="https://codolio.com/profile/kaif2828"
              accentColor="from-blue-500/20 to-blue-600/10"
              borderColor="border-blue-500/30"
              hoverGlow="hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            />
            <CodingProfileCard
              name="Code360"
              logo="https://files.codingninjas.in/new-cn-logos-1-1711622387.svg"
              link="https://www.naukri.com/code360/profile/Kaifkhan123"
              accentColor="from-orange-500/20 to-orange-600/10"
              borderColor="border-orange-500/30"
              hoverGlow="hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]"
            />
          </div>
        </motion.div>

        {/* ========== CODOLIO CTA ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Link
            href="https://codolio.com/profile/kaif2828"
            target="_blank"
            className="group relative"
          >
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-zinc-950/60 backdrop-blur-2xl border border-zinc-800/50 rounded-2xl px-10 py-7 hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-emerald-500/5 hover:to-cyan-500/5 transition-all duration-500 group-hover:scale-[1.02] shadow-2xl">
              <p className="text-center text-zinc-300 group-hover:text-white transition-colors font-medium flex items-center gap-3 justify-center text-lg">
                <Code2 className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                View Complete Profile on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 font-bold">
                  Codolio
                </span>
                <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== REUSABLE COMPONENTS (VISUAL UPGRADES ONLY) ==================== */

const SummaryCard = ({ icon, value, label, iconColor, gradientFrom, gradientTo, borderColor, glowColor }) => (
  <div className={`relative group overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientTo} backdrop-blur-xl border ${borderColor} rounded-2xl p-6 lg:p-8 hover:scale-[1.03] transition-all duration-500 shadow-lg hover:${glowColor}`}>
    {/* Hover Glow Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Content */}
    <div className="relative z-10">
      <div className={`mb-4 ${iconColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        {icon}
      </div>
      <p className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono tracking-tight">{value}</p>
      <p className="text-zinc-400 text-[10px] font-bold tracking-[0.15em] uppercase group-hover:text-zinc-300 transition-colors">
        {label}
      </p>
    </div>
  </div>
);

const AnalyticsCard = ({ title, description, total, data }) => (
  <div className="relative group overflow-hidden bg-zinc-950/40 backdrop-blur-2xl border border-zinc-800/50 rounded-3xl p-8 lg:p-10 hover:border-zinc-700/70 transition-all duration-500 shadow-2xl hover:shadow-[0_0_60px_rgba(16,185,129,0.1)]">
    
    {/* Ambient Glow */}
    <div className="absolute -inset-40 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    {/* Content Container */}
    <div className="relative z-10">
      {/* Header */}
      <div className="mb-10">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-500 tracking-tight">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm font-light">{description}</p>
      </div>

      {/* Chart + Stats Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Donut Chart */}
        <div className="w-full lg:w-1/2 h-72 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl blur-2xl"></div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={6}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#09090b",
                  border: "1px solid #27272a",
                  borderRadius: "1rem",
                  color: "#fff",
                  backdropFilter: "blur(16px)",
                  padding: "12px 16px",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Breakdown */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Total */}
          <div className="text-center lg:text-left mb-6">
            <p className="text-6xl font-bold text-white font-mono tracking-tight">{total}</p>
            <p className="text-zinc-500 text-sm mt-2 font-medium uppercase tracking-wider">Total Solved</p>
          </div>

          {/* Data Items */}
          {data.map((item, index) => (
            <div
              key={index}
              className="group/item flex items-center justify-between gap-4 bg-zinc-900/40 rounded-xl px-5 py-4 border border-zinc-800/50 hover:border-zinc-700/70 hover:bg-zinc-900/60 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full shadow-[0_0_12px_currentColor] transition-all duration-300 group-hover/item:scale-125"
                  style={{ backgroundColor: item.color, color: item.color }}
                ></div>
                <span className="text-zinc-300 font-medium group-hover/item:text-white transition-colors">{item.name}</span>
              </div>
              <span className="text-white font-bold text-xl font-mono">{item.label ?? item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ContestBreakdownCard = ({ totalContests, breakdown }) => (
  <div className="relative group overflow-hidden rounded-3xl">
    
    {/* Outer Gradient Glow */}
    <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/30 via-cyan-500/30 to-blue-500/30 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

    {/* Main Card */}
    <div className="relative bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/50 rounded-3xl p-10 lg:p-12 shadow-2xl">

      {/* Header */}
      <div className="mb-10 text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
          Contest Participation
        </h3>
        <p className="text-zinc-400 text-sm font-light">
          LeetCode + CodeChef + Codeforces
        </p>
      </div>

      {/* Total Contests - Premium Display */}
      <div className="text-center mb-10 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-[100px]"></div>
        </div>
        
        {/* Number */}
        <div className="relative z-10">
          <p className="text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 font-mono tracking-tighter">
            {totalContests}
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full blur-sm mb-4"></div>
          <p className="text-zinc-400 text-xs tracking-[0.25em] uppercase font-bold">
            Total Contests
          </p>
        </div>
      </div>

      {/* Platform Breakdown */}
      <div className="space-y-4">
        {breakdown.map((item, idx) => (
          <div
            key={idx}
            className="group/item relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 backdrop-blur-sm px-7 py-5 transition-all duration-500 hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-emerald-500/5 hover:to-cyan-500/5 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          >
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            {/* Content */}
            <div className="relative flex items-center justify-between">
              <span className="text-zinc-300 font-semibold text-lg group-hover/item:text-white transition-colors">
                {item.platform}
              </span>

              <span className="text-4xl font-bold text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-emerald-400 group-hover/item:to-cyan-400 transition-all font-mono tracking-tight">
                {item.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CodingProfileCard = ({ name, logo, link, accentColor, borderColor, hoverGlow }) => (
  <Link href={link} target="_blank" className="group block">
    <div className={`relative overflow-hidden bg-gradient-to-br ${accentColor} backdrop-blur-xl border ${borderColor} rounded-2xl p-6 lg:p-7 transition-all duration-500 hover:scale-[1.05] ${hoverGlow} hover:border-opacity-60 shadow-lg`}>
      
      {/* Hover Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        {/* Logo Container */}
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-zinc-900/50 backdrop-blur-sm p-3 lg:p-4 flex items-center justify-center border border-zinc-700/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Platform Name */}
        <div>
          <h4 className="text-white font-bold text-base lg:text-lg mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all">
            {name}
          </h4>
          <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 group-hover:text-zinc-400 transition-colors">
            Profile
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default ProgrammingSection;