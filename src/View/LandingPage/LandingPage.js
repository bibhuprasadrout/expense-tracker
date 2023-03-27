import styled from "styled-components";
import { Card } from "../../DesignSystem/Card/Card";
import { SectionTitle } from "../../DesignSystem/Title/Title";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
const LandingPageWrapper = styled(Wrapper)`
  min-height: calc(100vh - 8rem);
  height: 100%;
`;
const LandingPageCard = styled(Card)`
  min-height: inherit;
  .landinPageInfo {
    font-size: 0.9rem;
    opacity: 0.3;
  }
  .lookIntoFeatureTitle {
    font-size: 1.3rem;
    text-align: left;
  }
`;
export const LandingPage = () => {
  return (
    <>
      <LandingPageWrapper>
        <LandingPageCard>
          <div className="landinPageInfo">
            The Landing Page is currently a work in progress.
          </div>
          <SectionTitle className="lookIntoFeatureTitle">
            Feature to look into in the mean-time :
          </SectionTitle>
          <p>
            1. This is a frontend react app that uses a redux store to
            transition data.
          </p>
          <p>2. First, Login using the provided credentials.</p>
          <p>3. At present the filter is fully functional.</p>
          <p>
            4. The add new expense, edit expense, delete expense are a work in
            progress but the UI is still available.
          </p>
        </LandingPageCard>
      </LandingPageWrapper>
    </>
  );
};
