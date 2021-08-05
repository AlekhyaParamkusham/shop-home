const defaultProps = {
  prop3: () => {},
};
const Component = ({ prop3 = defaultProps.prop3 }) => (
  <Card.ImgOverlay>
    <span className="badge1 bg-dark text-white ms-1 rounded-pill">Sale</span>
  </Card.ImgOverlay>
);
