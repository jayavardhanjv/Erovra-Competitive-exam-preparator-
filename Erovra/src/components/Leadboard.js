import React from "react";

// Function component to render leaderboard
const Leaderboard = ({ names, scores }) => {
    // Sort scores in descending order
    const sortedScores = scores.sort((a, b) => b - a);
    // Map over each score and assign it to the corresponding name
    const leaderboardData = sortedScores.map((score, index) => ({
        name: names[index],
        score
    }));

    // Render leaderboard data
    return (
        <div>
            <h2>Leaderboard</h2>
            {leaderboardData.map(data => (
                <div key={data.name}>
                    <p>{data.name}: {data.score}</p>
                </div>
            ))}
        </div>
    );
};

export default Leaderboard;