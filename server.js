import express from "express";
import fetch from "node-fetch";
import https from "https";

const app = express();
const PORT = 5000;

// Force IPv4
const agent = new https.Agent({family: 4});

app.get("/api/popular", async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=api_key&language=en-US&page=1`;
    const response = await fetch(url, {agent});

    if (!response.ok) {
      console.error("TMDB response status:", response.status);
      const text = await response.text();
      console.error("TMDB response body:", text);
      return res.status(response.status).json({error: "TMDB request failed"});
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({error: "Failed to fetch data from TMDB"});
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/api/popular`);
});
