import styled from "styled-components";
export default function Preloder() {
  return (
    <div style={{ backgroundColor: "#fff", height: "100vh" }}>
      <Animation
        src=" https://www.intentionalkreative.com/static/media/loading-animation.0d7bc8dd.gif"
        alt=""
      />
    </div>
  );
}
const Animation = styled.img`
  margin-left: 30%;
`;
