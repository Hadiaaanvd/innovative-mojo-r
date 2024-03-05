import "./general.styles.scss";
export default function Message() {
  return (
    <div className="message">
      <div className="message-header">
        <i>MESSAGE FROM CEO</i>
      </div>
      <div className="message-body">
        <div className="quote">
          "We know that creativity is what makes this world a better place. We
          are here to help create. When our clients have a vision we will make
          that vision become reality and help them find their MOJO."
        </div>
        <div className="ceo">ERIC W.</div>
      </div>
    </div>
  );
}
