// import React from "react";

// export default function SteamBotDemo() {
//   return (<></>);
// }

import React, { useEffect, useState } from "react";

export default function SteamBotDemo() {
  const [rows, setRows] = useState([]);

  // load some mock data from public/data/steam.json
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/steam.json`)
      .then(r => r.json())
      .then(setRows)
      .catch(console.error);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-3">Sportsbetting Steam Bot – Demo</h2>
      <p className="text-muted">
        This demo uses mock data to show how the bot detects sudden “steam”
        moves across bookmakers. No live API keys are exposed.
      </p>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Event</th>
              <th>Market</th>
              <th>Book</th>
              <th>Price</th>
              <th>Last Seen</th>
              <th>Signal</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.event}</td>
                <td>{r.market}</td>
                <td>{r.book}</td>
                <td>{r.price}</td>
                <td>{r.ts}</td>
                <td>{r.signal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="mt-4">How it works</h4>
      <ol>
        <li>Polls odds APIs at a fixed interval.</li>
        <li>Normalises bookmaker/team names.</li>
        <li>Detects fast price moves (“steam”).</li>
        <li>Emits alert with confidence score.</li>
      </ol>
    </div>
  );
}
