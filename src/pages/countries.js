import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";
import CountrySelector from "../components/Country-Selector";
import Chart from "../components/Chart";
import Cards from "../components/Cards";

import { fetchData } from "../hooks/useCountries";

class Countries extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);

    //set the state
    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <Layout pageName="countries">
        <Helmet>
          <title>Countries</title>
        </Helmet>

        <Container type="content" className="text-center">
          <h1>Countries</h1>
        </Container>
        <Cards data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </Layout>
    );
  }
}

export default Countries;
