import styled from "styled-components";
import ContactDetail from "../../components/ContactDetail";
// import EmailToUs from '../../components/EmailToUs'
import MobileEmailToUs from "../../components/MobileEmailToUs";

const Total = styled.div`
  margin: 0px 20px;
`;
const ContentBox = styled.div`
  height: 90vh;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
`;
const ContentBox2 = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
`;

function MobileContact() {
  return (
    <Total>
      <ContentBox>
        <ContactDetail />
      </ContentBox>
      <ContentBox2>
        <MobileEmailToUs />
      </ContentBox2>
    </Total>
  );
}

export default MobileContact;
