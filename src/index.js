import React from 'react';
import ReactDOM from 'react-dom';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const symList = [
  {
    proName: "PEPPERSTONE:VIX",
    title: "VIX"
  },
  {
    proName: "PEPPERSTONE:US500",
    title: "S&P500"
  },
  {
    proName: "PEPPERSTONE:NAS100",
    title: "NASDAQ"
  },
  {
    proName: "EIGHTCAP:USDBRL",
    title: "Dólar"
  },
  {
    proName: "OANDA:EURUSD",
    title: "EURUSD"
  },
  {
    proName: "OANDA:GBPUSD",
    title: "GBPUSD"
  }
];

const App = () => {
  return(
    <div className="ui container">
          {/* <TradingViewEmbed
            widgetType={widgetType.SCREENER}
            widgetConfig={{
              width: "100%",
              colorTheme: "light",
              locale: "br",
              autosize: true,
              symbols: symList
            }}
          /> */}
            
          <TradingViewEmbed
              widgetType={widgetType.ADVANCED_CHART}
              widgetConfig={{
                interval: "1H",
                colorTheme: "light",
                locale: "br",
                width: "100%",
                symbol: "PEPPERSTONE:US500",
                //studies: [
                //  "MACD@tv-basicstudies",
                //  "StochasticRSI@tv-basicstudies",
                //  "TripleEMA@tv-basicstudies"
                //]
              }}
          />
          <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={{
              showSymbolLogo: true,
              isTransparent: true,
              locale: "br",
              displayMode: "adaptive",
              colorTheme: "light",
              autosize: true,
              symbols: symList
            }}
          />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
