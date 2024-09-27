import React from 'react';
import '../styles/home.css';  // Importing from the styles folder
import Header from '../components/Header';
const Home = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
    'https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3.png',
    'https://avatars.githubusercontent.com/u/104321400?s=280&v=4',
    'https://static-00.iconduck.com/assets.00/file-type-typescript-official-icon-256x256-aavrgmi0.png',
    'https://e0.pxfuel.com/wallpapers/873/248/desktop-wallpaper-java-logo-java-logo-java-programming.jpg',
    'https://clipart-library.com/images_k/python-logo-transparent/python-logo-transparent-5.png',
    'https://cdn4.vectorstock.com/i/thumb-large/77/53/sql-database-icon-logo-design-ui-or-ux-app-vector-17507753.jpg',
    'https://th.bing.com/th/id/OIP.uf5Wr4c5nlbGbTR0XyGUvQHaEO?rs=1&pid=ImgDetMain'
  ];
  

  return (
    <div className="home-container">
      <Header />
      <div className="circle-container">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="circle">
            <img src={images[index % images.length]} alt={`Circle ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
 