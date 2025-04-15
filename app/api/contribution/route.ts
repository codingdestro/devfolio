import axios from "axios";
import { NextResponse } from "next/server";

export async function POST() {
  const query = `
  query {
    user(login: "codingdestro") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
        commitContributionsByRepository {
          contributions {
            totalCount
          }
          repository {
            name
          }
        }
        pullRequestContributionsByRepository {
          contributions {
            totalCount
          }
        }
        issueContributionsByRepository {
          contributions {
            totalCount
          }
        }
      }
    }
  }
`;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = await response.json();
    const totalContributions =
      data.data.user.contributionsCollection.contributionCalendar
        .totalContributions;

    return NextResponse.json({ totalContributions }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "failed to fetch total contributions" },
      { status: 402 }
    );
  }
}

export async function GET() {
  try {
    const res = await axios.get(
      "https://github-readme-streak-stats.herokuapp.com?user=codingdestro&theme=vue&border_radius=5&short_numbers=true&type=json"
    );
    console.log(res.data);
    return NextResponse.json({ contribution: res.data! });
  } catch {}
  return NextResponse.json({ msg: "failed to fetch contributions" });
}
