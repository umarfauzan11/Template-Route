import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Banner from '../components/card/banner';

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Template Route</h2>
        </div>
      </section>
      <BottomNav />
    </div>
  );
}