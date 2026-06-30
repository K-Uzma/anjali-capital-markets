import Hero from "./subComponents/Hero";
import MarketPrices from "./subComponents/MarketPrices";
import AppShowcase from "./subComponents/AppShowcase";
import PlatformFeatures from "./subComponents/PlatformFeatures";
import TradingCalculator from "./subComponents/TradingCalculator";
import GetStarted from "./subComponents/GetStarted";
// import TradingInstruments from "./subComponents/TradingInstruments";
import News from "./subComponents/News";
import FAQ from "./subComponents/FAQ";

const Homepage = () => {
  return (
    <>
      <Hero />
      <MarketPrices />
      <AppShowcase />
      <News />
      <PlatformFeatures />
      <TradingCalculator />
      <GetStarted />
      {/* <TradingInstruments /> */}
      <FAQ />
    </>
  );
};

export default Homepage;
