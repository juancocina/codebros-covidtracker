import React from "react";
import { Helmet } from "react-helmet";
import L from "leaflet";

import { useUSTracker } from "hooks";
import { commafy, friendlyDate } from "lib/util";

import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";

const LOCATION = {
  lat: 37,
  lng: -95,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 4;

const States = () => {

  const { data: stats = {} } = useUSTracker({
    api: "USA",
  });

  //Time constraint: only a select few of states were used

  const { data: CAStats = {} } = useUSTracker({
    api: "CA",
  });

  const { data: NYStats = {} } = useUSTracker({
    api: "NY",
  });

  const { data: TXStats = {} } = useUSTracker({
    api: "TX",
  });

  const { data: WAStats = {} } = useUSTracker({
    api: "WA",
  });

  const { data: FLStats = {} } = useUSTracker({
    api: "FL",
  });

  const { data: states = [] } = useUSTracker({
    api: "states",
  });

   const hasStates = Array.isArray(states) && states.length > 0;

  const dashboardStats = [
    {
      primary: {
        label: "Total Cases",
        value: stats ? commafy(stats?.cases) : "-",
      },
    },
    {
      primary: {
        label: "Total Deaths",
        value: stats ? commafy(stats?.deaths) : "-",
      },
    },
    {
      primary: {
        label: "Total Tests",
        value: stats ? commafy(stats?.tests) : "-",
      },
    },
    {
      primary: {
        label: "Active Cases",
        value: stats ? commafy(stats?.active) : "-",
      },
    },
    {
      primary: {
        label: "Critical Cases",
        value: stats ? commafy(stats?.critical) : "-",
      },
    },
    {
      primary: {
        label: "Recovered Cases",
        value: stats ? commafy(stats?.recovered) : "-",
      },
    },
  ];

  const CADashboardStats = [
    {
      primary: {
        label: "Total Cases",
        value: CAStats ? commafy(CAStats?.cases) : "-",
      },
    },
    {
      primary: {
        label: "Total Deaths",
        value: CAStats ? commafy(CAStats?.deaths) : "-",
      },
    },
    {
      primary: {
        label: "Total Tests",
        value: CAStats ? commafy(CAStats?.tests) : "-",
      },
    },
    {
      primary: {
        label: "Active Cases",
        value: CAStats ? commafy(CAStats?.active) : "-",
      },
    },
    {
      primary: {
        label: "Today's Cases",
        value: CAStats ? commafy(CAStats?.todayCases) : "-",
      },
    },
    {
      primary: {
        label: "Recovered Cases",
        value: CAStats ? commafy(CAStats?.recovered) : "-",
      },
    },
  ];

  const NYDashboardStats = [
    {
      primary: {
        label: "Total Cases",
        value: NYStats ? commafy(NYStats?.cases) : "-",
      },
    },
    {
      primary: {
        label: "Total Deaths",
        value: NYStats ? commafy(NYStats?.deaths) : "-",
      },
    },
    {
      primary: {
        label: "Total Tests",
        value: NYStats ? commafy(NYStats?.tests) : "-",
      },
    },
    {
      primary: {
        label: "Active Cases",
        value: NYStats ? commafy(NYStats?.active) : "-",
      },
    },
    {
      primary: {
        label: "Today's Cases",
        value: NYStats ? commafy(NYStats?.todayCases) : "-",
      },
    },
    {
      primary: {
        label: "Recovered Cases",
        value: NYStats ? commafy(NYStats?.recovered) : "-",
      },
    },
  ];

  const TXDashboardStats = [
    {
      primary: {
        label: "Total Cases",
        value: TXStats ? commafy(TXStats?.cases) : "-",
      },
    },
    {
      primary: {
        label: "Total Deaths",
        value: TXStats ? commafy(TXStats?.deaths) : "-",
      },
    },
    {
      primary: {
        label: "Total Tests",
        value: TXStats ? commafy(TXStats?.tests) : "-",
      },
    },
    {
      primary: {
        label: "Active Cases",
        value: TXStats ? commafy(TXStats?.active) : "-",
      },
    },
    {
      primary: {
        label: "Today's Cases",
        value: TXStats ? commafy(TXStats?.todayCases) : "-",
      },
    },
    {
      primary: {
        label: "Recovered Cases",
        value: TXStats ? commafy(TXStats?.recovered) : "-",
      },
    },
  ];

  const WADashboardStats = [
    {
      primary: {
        label: "Total Cases",
        value: WAStats ? commafy(WAStats?.cases) : "-",
      },
    },
    {
      primary: {
        label: "Total Deaths",
        value: WAStats ? commafy(WAStats?.deaths) : "-",
      },
    },
    {
      primary: {
        label: "Total Tests",
        value: WAStats ? commafy(WAStats?.tests) : "-",
      },
    },
    {
      primary: {
        label: "Active Cases",
        value: WAStats ? commafy(WAStats?.active) : "-",
      },
    },
    {
      primary: {
        label: "Today's Cases",
        value: WAStats ? commafy(WAStats?.todayCases) : "-",
      },
    },
    {
      primary: {
        label: "Recovered Cases",
        value: WAStats ? commafy(WAStats?.recovered) : "-",
      },
    },
  ];

  const FLDashboardStats = [
    {
      primary: {
        label: "Total Cases",
        value: FLStats ? commafy(FLStats?.cases) : "-",
      },
    },
    {
      primary: {
        label: "Total Deaths",
        value: FLStats ? commafy(FLStats?.deaths) : "-",
      },
    },
    {
      primary: {
        label: "Total Tests",
        value: FLStats ? commafy(FLStats?.tests) : "-",
      },
    },
    {
      primary: {
        label: "Active Cases",
        value: FLStats ? commafy(FLStats?.active) : "-",
      },
    },
    {
      primary: {
        label: "Today's Cases",
        value: FLStats ? commafy(FLStats?.todayCases) : "-",
      },
    },
    {
      primary: {
        label: "Recovered Cases",
        value: FLStats ? commafy(FLStats?.recovered) : "-",
      },
    },
  ];
  

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) 
  {
     if (!hasStates || !map) return;

     map.eachLayer((layer) => {
      if (layer?.options?.name === "OpenStreetMap") return;
      map.removeLayer(layer);
    });
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>US</title>
      </Helmet>

      <Container type="content" className="text-center">
        <h1>United States</h1>
      </Container>

      <div className="tracker">
        <Map {...mapSettings} />
        <div className="tracker-stats">
          <ul>
            { dashboardStats.map(({ primary = {} }, i ) => {
              return (
                <li key={`Stat-${i}`} className="tracker-stat">
                  { primary.value && (
                    <p className="tracker-stat-primary">
                      { primary.value }
                      <strong>{ primary.label }</strong>
                    </p>
                  ) }
                </li>
              );
            }) }
          </ul>
          <div className="tracker-last-updated">
            <p>Last Updated: { stats ? friendlyDate( stats?.updated ) : '-' }</p>
          </div>
        </div>

        <Container type="content" className="text-center">
        <h1>California</h1>
        </Container>
        <div className="tracker-stats">
          <ul>
            { CADashboardStats.map(({ primary = {} }, i ) => {
              return (
                <li key={`Stat-${i}`} className="tracker-stat">
                  { primary.value && (
                    <p className="tracker-stat-primary">
                      { primary.value }
                      <strong>{ primary.label }</strong>
                    </p>
                  ) }
                </li>
              );
            }) }
          </ul>
        </div>
        <div className="tracker-last-updated">
          <p>Last Updated: { CAStats ? friendlyDate( CAStats?.updated ) : '-' }</p>
        </div>

        <Container type="content" className="text-center">
        <h1>Florida</h1>
        </Container>
        <div className="tracker-stats">
          <ul>
            { FLDashboardStats.map(({ primary = {} }, i ) => {
              return (
                <li key={`Stat-${i}`} className="tracker-stat">
                  { primary.value && (
                    <p className="tracker-stat-primary">
                      { primary.value }
                      <strong>{ primary.label }</strong>
                    </p>
                  ) }
                </li>
              );
            }) }
          </ul>
        </div>
        <div className="tracker-last-updated">
          <p>Last Updated: { FLStats ? friendlyDate( FLStats?.updated ) : '-' }</p>
        </div>

        <Container type="content" className="text-center">
        <h1>New York</h1>
        </Container>
        <div className="tracker-stats">
          <ul>
            { NYDashboardStats.map(({ primary = {} }, i ) => {
              return (
                <li key={`Stat-${i}`} className="tracker-stat">
                  { primary.value && (
                    <p className="tracker-stat-primary">
                      { primary.value }
                      <strong>{ primary.label }</strong>
                    </p>
                  ) }
                </li>
              );
            }) }
          </ul>
        </div>
        <div className="tracker-last-updated">
          <p>Last Updated: { NYStats ? friendlyDate( NYStats?.updated ) : '-' }</p>
        </div>

        <Container type="content" className="text-center">
        <h1>Texas</h1>
        </Container>
        <div className="tracker-stats">
          <ul>
            { TXDashboardStats.map(({ primary = {} }, i ) => {
              return (
                <li key={`Stat-${i}`} className="tracker-stat">
                  { primary.value && (
                    <p className="tracker-stat-primary">
                      { primary.value }
                      <strong>{ primary.label }</strong>
                    </p>
                  ) }
                </li>
              );
            }) }
          </ul>
        </div>
        <div className="tracker-last-updated">
          <p>Last Updated: { TXStats ? friendlyDate( TXStats?.updated ) : '-' }</p>
        </div>

        <Container type="content" className="text-center">
        <h1>Washington</h1>
        </Container>
        <div className="tracker-stats">
          <ul>
            { WADashboardStats.map(({ primary = {} }, i ) => {
              return (
                <li key={`Stat-${i}`} className="tracker-stat">
                  { primary.value && (
                    <p className="tracker-stat-primary">
                      { primary.value }
                      <strong>{ primary.label }</strong>
                    </p>
                  ) }
                </li>
              );
            }) }
          </ul>
        </div>
        <div className="tracker-last-updated">
          <p>Last Updated: { WAStats ? friendlyDate( WAStats?.updated ) : '-' }</p>
        </div>
      </div>

      

      <Container type="content" className="text-center home-start">
        <h2>Still Getting Started?</h2>
        <p>Run the following in your terminal!</p>
        <pre>
          <code>gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-leaflet</code>
        </pre>
        <p className="note">Note: Gatsby CLI required globally for the above command</p>
      </Container>
    </Layout>
  );
};

export default States;
