import React from "react";

function TableBody({ data }) {
  return (
    <tbody>
      {data.map((coin) => (
        <tr key={coin.id}>
          <td>
            <img src={coin.image} alt="crypto"></img>
          </td>
          <td className="lead">{coin.name}</td>
          <td className="lead">{coin.symbol.toUpperCase()}</td>
          <td className="lead">${coin.current_price.toLocaleString()}</td>
          <td className="lead">${coin.total_volume.toLocaleString()}</td>
          <td className="lead">
            {coin.price_change_percentage_24h < 0 ? (
              <p className="coin-percent red">
                {coin.price_change_percentage_24h.toFixed(2)}%{" "}
                <i className="fa fa-caret-down red" aria-hidden="true"></i>
              </p>
            ) : (
              <p className="coin-percent green">
                {"+" + coin.price_change_percentage_24h.toFixed(2)}%{" "}
                <i className="fa fa-caret-up green" aria-hidden="true"></i>
              </p>
            )}
          </td>
          <td className="lead">${coin.market_cap.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
