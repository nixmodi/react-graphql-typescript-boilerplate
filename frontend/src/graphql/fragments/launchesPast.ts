import { gql } from "apollo-boost";

export const launchesPast = gql`
  fragment launchesPast on launchesPast {
    mission_name,
  }
`;
