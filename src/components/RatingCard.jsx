// src/components/RatingCard.jsx
"use client";
import React from "react";
import { ResponsiveContainer, AreaChart, Area, YAxis, Tooltip } from "recharts";
import Link from "next/link";

const normalizeData = (data) => {
  if (!Array.isArray(data) || data.length === 0) return [];
  const ratings = data.map((d) => Number(d.rating) || 0);
  const min = Math.min(...ratings);
  return data.map((d, i) => ({
    rating: Number(d.rating) || 0,
    normalized: (Number(d.rating) || 0) - min + 20,
    index: i,
  }));
};

const RatingCard = ({
  name,
  rating,
  maxRating,
  contests,
  color = "#10b981",
  data = [],
  link = "#",
  badge = "",
}) => {
  const chartData = normalizeData(data);

  return (
    <Link href={link} target="_blank" className="block group">
      <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900 p-6 transition hover:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{name}</h3>
            <span className="px-3 py-1 text-sm font-bold rounded-full
                            bg-gradient-to-r from-yellow-400 to-amber-500
                            text-black shadow-lg shadow-yellow-500/30">
              {badge}
            </span>
          </div>
          <div className="text-gray-500 group-hover:text-white">↗</div>
        </div>

        {/* Rating */}
        <div className="mb-2">
          <span className="text-5xl font-bold" style={{ color }}>
            {rating ?? "-"}
          </span>
          <span className="ml-2 text-sm text-gray-400">MAX: {maxRating ?? "-"}</span>
        </div>

        {/* Contests */}
        <p className="text-xs tracking-widest text-gray-500 mb-4">
          {contests ?? 0} CONTESTS
        </p>

        {/* Chart */}
        <div className="h-24 w-full opacity-90">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
              <Tooltip
                formatter={(value, name, props) => {
                  // Show the real rating value (not normalized) in tooltip
                  const real = props?.payload?.rating ?? value;
                  return [real, "Rating"];
                }}
                labelFormatter={(label) => `Contest ${label}`}
                contentStyle={{
                  background: "#020617",
                  border: "1px solid #1f2937",
                }}
              />
              <Area
                type="monotone"
                dataKey="normalized"
                stroke={color}
                strokeWidth={2.2}
                fill={color}
                fillOpacity={0.12}
                dot={false}
                isAnimationActive={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Link>
  );
};

export default RatingCard;

