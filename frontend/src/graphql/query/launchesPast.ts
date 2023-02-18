import { gql } from "apollo-boost";
import { launchesPast } from "../fragments/launchesPast";

export const getLaunchesPast = gql`
  query {
    launchesPast {
      ...launchesPast
    }
  }
  ${launchesPast}
`;

// export const getUser = gql`
//   query($id: ID!) {
//     user(id: $id) {
//       ...launchesPasts
//     }
//   }
//   ${launchesPasts}
// `;
