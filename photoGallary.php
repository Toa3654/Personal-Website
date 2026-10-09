<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Image Gallery with Arrows</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #f0f0f0;
      padding: 20px;
    }
    .gallery {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .gallery img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 10px auto;
      display: block;
    }
    .controls {
      margin: 20px auto;
    }
    button {
      font-size: 1.2em;
      padding: 10px 20px;
      margin: 0 10px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background: #007BFF;
      color: white;
      transition: background 0.3s;
    }
    button:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <div class="gallery">
    <img id="mainImage" src="pic1.jpg" alt="Gallery Image" />
    <div class="controls">
      <button id="prevBtn">←</button>
      <button id="nextBtn">→</button>
    </div>
  </div>

  <script>
    const images = [
      "kayaking.jpg",
      "hiking.jpg",
      "double_queen_bed_room.jpg",
      "double_full_bed_room.jpeg"
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById("mainImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function showImage(index) {
      mainImage.src = images[index];
      currentIndex = index;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  </script>
</body>
</html>
