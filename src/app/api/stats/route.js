import axios from "axios";
import { NextResponse } from "next/server";

export const revalidate = 300;

const LC = "Dynamite05";
const CF = "kaif2828";
const CC = "labor_art_09";

const parseNum = (v) => parseInt(v?.toString().replace(/,/g, "")) || 0;

export async function GET() {
  try {
    const platforms = {
      leetcode: { solved: 0, easy: 0, medium: 0, hard: 0, rating: 0, contests: 0, maxRating: 0 },
      codeforces: { solved: 0, rating: 0, contests: 0, maxRating: 0 },
      codechef: { solved: 566, rating: 0, contests: 0, stars: 0, maxRating: 0 },
    };

    const leetcodeTask = async () => {
    /* ================= LEETCODE ================= */
    try {
      const res = await axios.post("https://leetcode.com/graphql", {
        query: `
          query getUserContest($username: String!) {
            userContestRanking(username: $username) {
              rating
              attendedContestsCount
            }
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username: LC },
      });

      const contest = res.data.data.userContestRanking;
      const stats = res.data.data.matchedUser.submitStatsGlobal.acSubmissionNum;

      let easy = 0, medium = 0, hard = 0;

      stats.forEach((s) => {
        if (s.difficulty === "Easy") easy = parseNum(s.count);
        if (s.difficulty === "Medium") medium = parseNum(s.count);
        if (s.difficulty === "Hard") hard = parseNum(s.count);
      });

      platforms.leetcode = {
        solved: easy + medium + hard,
        easy,
        medium,
        hard,
        rating: parseNum(contest?.rating),
        contests: parseNum(contest?.attendedContestsCount),
        maxRating: parseNum(contest?.rating), // LC gives only current
      };
    } catch {}
    };

    const codeforcesTask = async () => {
    /* ================= CODEFORCES ================= */
    try {
      const [info, subs, ratingRes] = await Promise.all([
        axios.get(`https://codeforces.com/api/user.info?handles=${CF}`),
        axios.get(`https://codeforces.com/api/user.status?handle=${CF}&count=10000`),
        axios.get(`https://codeforces.com/api/user.rating?handle=${CF}`),
      ]);

      const user = info.data.result[0];

      const solved = new Set();
      subs.data.result.forEach((s) => {
        if (s.verdict === "OK") {
          solved.add(`${s.problem.contestId}-${s.problem.index}`);
        }
      });

      const ratings = ratingRes.data.result.map((c) => c.newRating);

      platforms.codeforces = {
        solved: solved.size,
        rating: parseNum(user.rating),
        contests: ratings.length,
        maxRating: Math.max(...ratings, 0),
      };
    } catch {}
    };

    const getCodechefStars = (rating) => {
      if (rating >= 2500) return "★★★★★";
      if (rating >= 2200) return "★★★★★";
      if (rating >= 2000) return "★★★★";
      if (rating >= 1800) return "★★★★";
      if (rating >= 1600) return "★★★";
      if (rating >= 1400) return "★★";
      return "★";
    };

    const codechefTask = async () => {
    /* ================= CODECHEF (REAL-TIME RATING + STARS) ================= */
    try {
      const res = await axios.get(`https://www.codechef.com/api/ratings/${CC}`);
      const ratings = res.data;

      if (Array.isArray(ratings) && ratings.length > 0) {
        const latest = ratings[ratings.length - 1];
        const rating = parseNum(latest.rating);

        platforms.codechef = {
          solved: 566,                // manual solved
          rating,
          contests: ratings.length,   // real contests
          stars: getCodechefStars(rating), // ⭐ REAL-TIME STARS
          maxRating: Math.max(...ratings.map(r => parseNum(r.rating))), // real max
        };
      }
    } catch {
      // fallback
      platforms.codechef = {
        solved: 566,
        rating: 1684,
        contests: 22,
        stars: "★★★",
        maxRating: 1684,
      };
    }
    };

    await Promise.all([leetcodeTask(), codeforcesTask(), codechefTask()]);

    /* ================= TOTALS ================= */

    const totalProblems =
      platforms.leetcode.solved +
      platforms.codeforces.solved +
      platforms.codechef.solved;

    const totalContests =
      platforms.leetcode.contests +
      platforms.codeforces.contests +
      platforms.codechef.contests;

    const globalMaxRating = Math.max(
      platforms.leetcode.maxRating,
      platforms.codeforces.maxRating,
      platforms.codechef.maxRating
    );

    return NextResponse.json({
      totalProblems,
      totalContests,
      globalMaxRating,
      platforms,
    });

  } catch {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}