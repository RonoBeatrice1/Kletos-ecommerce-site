import "../css/homepage/homepage.css";

const homepage = () => {
  return (
    <div className="home-page flex-col">
      <div>
        <a href="/customerauth">Customer</a>
        <a href="/merchantauth">Merchant</a>
      </div>
    </div>
  );
};

export default homepage;
