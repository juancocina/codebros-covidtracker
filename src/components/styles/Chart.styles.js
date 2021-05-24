import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Container = styled(Grid)`
  /* display: flex; */
  /* justify-content: center; */
  width: 85% !important;
  margin: 0 8% !important;

  @media (max-width: 770px) {
    width: 100% !important;
  }
`;

export const ChartContainer = styled.div`
  margin-top: 5%;
`;
