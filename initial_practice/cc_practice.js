let videoData = [{title: "Despacito", amount: 5.68},
         {title: "Shape of You", amount: 3.89},
         {title: "See You Again", amount: 3.85},
         {title: "Uptown Funk", amount: 3.32},
         {title: "Masha and the Bear: Recipe for Disaster", amount: 3.31},
         {title: "Gangam Style", amount: 3.23},
         {title: "Sorry", amount: 3.03},
         {title: "Sugar", amount: 2.80},
         {title: "Shake it Off", amount: 2.67},
         {title: "Roar", amount: 2.65},
         {title: "Bailando", amount: 2.63},
         {title: "Thinking Out Loud", amount: 2.53},
         {title: "Counting Stars", amount: 2.51},
         {title: "Dark Horse", amount: 2.46},
         {title: "Lean On", amount: 2.43}
 ];

let gameData = [{title: "Despacito", amount: 5.68},
         {title: "ORAS", amount: 2.015},
         {title: "God of War", amount: 2.018},
         {title: "Skyrim", amount: 2.010},
         {title: "Arkahm Assylum", amount: 2.008},
         {title: "Sun and Moon", amount: 2.015},
         {title: "Into the Wild", amount: 2.015},
         {title: "Red Dead One", amount: 2.011},
         {title: "Mario", amount: 1.994},
         {title: "GCube", amount: 2.001},
         {title: "3ds", amount: 2.014},
         {title: "Ps4", amount: 2.013},
         {title: "Spideman", amount: 2.018},
         {title: "Avengers", amount: 2.020},
         {title: "Galar", amount: 2.019}
 ];

let divSelection = d3.select("body") 
  .selectAll("div");

divSelection
  .data(videoData)
  .text(function(d) {return d}); 
  
divSelection
  .data(gameData)
  .text(function(d) {return d}); 
