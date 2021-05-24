import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Container = styled.div`
  margin: 50px 0;
`;

export const GridInfected = styled(Grid)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(0, 0, 255, 0.5);

  @media (max-width: 770px) {
    margin: 2% 0 !important;
  }
`;

export const GridRecovered = styled(Grid)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(0, 255, 0, 0.5);

  @media (max-width: 770px) {
    margin: 2% 0 !important;
  }
`;

export const GridDeaths = styled(Grid)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(255, 0, 0, 0.5);

  @media (max-width: 770px) {
    margin: 2% 0 !important;
  }
`;
