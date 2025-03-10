/* Basic Reset & Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  background: #f9f9f9;
  color: #333;
  overflow-x: hidden;
  position: relative;
}
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

/* Hero Section with Overlay Text */
header {
  position: relative;
  height: 400px;
  background: url('https://i.imgur.com/2kTVqrX.jpg') no-repeat center center/cover;
}
header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 1;
}
.hero-text h1 {
  font-family: 'Merriweather', serif;
  font-size: 3rem;
  margin-bottom: 10px;
}
.hero-text p {
  font-size: 1.2rem;
}

/* Navigation */
nav {
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 100;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
nav ul li {
  margin: 0 15px;
}
nav ul li a {
  text-decoration: none;
  font-weight: 500;
  color: #333;
  transition: color 0.3s;
}
nav ul li a:hover {
  color: #8FBC8F;
}

/* Carousel */
#carousel {
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 40px auto;
  overflow: hidden;
  border: 2px solid #ddd;
  border-radius: 8px;
}
#carousel img {
  width: 100%;
  display: none;
}
#carousel img.active {
  display: block;
}

/* Products Listing (in products.html) */
#product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  padding: 15px;
  text-align: center;
}
.product-card img {
  width: 100%;
  border-radius: 4px;
}

/* Map Container */
.map-container {
  margin: 20px auto;
  max-width: 600px;
}

/* Facebook Embed Container */
.fb-container {
  margin: 20px auto;
  max-width: 500px;
}

/* YouTube Video Container */
.video-container {
  margin: 20px auto;
  max-width: 560px;
}

/* Google Form Container */
.form-container {
  margin: 20px auto;
  max-width: 640px;
}

/* Contact Form */
form label {
  display: block;
  margin-top: 10px;
  text-align: left;
}
form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
}
form button {
  margin-top: 15px;
  padding: 10px 20px;
  background: #8FBC8F;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
}
form button:hover {
  background: #7aa07a;
}

/* Footer */
footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  margin-top: 40px;
}
footer a {
  color: #fff;
  text-decoration: underline;
}

/* Snowflakes */
.snowflake {
  position: fixed;
  top: -10px;
  color: #fff;
  user-select: none;
  z-index: 9999;
  pointer-events: none;
  font-size: 1em;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes fall {
  0% { transform: translateY(0px); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
