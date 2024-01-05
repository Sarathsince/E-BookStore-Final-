import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import Image from './Cards';
const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={{ padding: '1rem' }}>
        <section style={{ marginTop: '80px' }}>
          {/* Content after the navbar */}
          <b><h2>KITAB</h2></b>
          <Image />
          <h3><p><b>KITAB</b> is a word derived from the language Arabic,meaning of the word is books.Some of the collection are listed above:</p></h3>
          {/* Add more content as needed */}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
