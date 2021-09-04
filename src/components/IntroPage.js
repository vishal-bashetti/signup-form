import SignupForm from "./SignupForm";

function IntroPage() {
  return (
    <div className="continer">
      <header className="intro-content">
        <h1 className="title">Learn to code by watching others</h1>
        <p className="discription">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </header>
      <div className="price-info" role="contentinfo">
        <div className="trial-day">
          <span className="day-highlighter">Try it free 7 days</span> then
        </div>
        <div className="trial-price">$20/mo. thereafter</div>
      </div>
      <SignupForm />
    </div>
  );
}

export default IntroPage;
