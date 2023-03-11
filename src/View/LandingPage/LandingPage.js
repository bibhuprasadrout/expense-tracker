import styled from "styled-components";
import { Card } from "../../DesignSystem/Card/Card";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
const LandingPageWrapper = styled(Wrapper)`
  min-height: calc(100vh - 8rem);
  height: 100%;
`;
const LandingPageCard = styled(Card)`
  min-height: inherit;
`;
export const LandingPage = () => {
  return (
    <>
      <LandingPageWrapper>
        <LandingPageCard>
          <div>The Landing Page is currently a work in progress.</div>
          <div>
            Please experience the login feature that is fully functional. The
            app uses a redux store to create a database in the data layer.
          </div>
        </LandingPageCard>
      </LandingPageWrapper>
    </>
  );
};
