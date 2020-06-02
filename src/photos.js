import React from "react";



const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

export const images = importAll(
  require.context("./image", true, /\.(png|jpe?g|gif|svg)$/)
);

const Photos = [];

let regx = /\[(.*?)\]/;
for (let image in images) {
  
  let url = images[image];
  let dimensions = regx.exec(url)
  
  if (dimensions) {
    let dim = JSON.parse(dimensions[0]);
      let img = new Image();
      let height;
      let width;

      img.onload = function(){
        height = img.height;
        width = img.width;
        //console.log("[" + width + "," + height  + ']');
      }

      img.src = url;
      // // let dimensions = sizeOf();
      // console.log(`HxW ${height}x${width}`);
      // console.log(url);
      Photos.push(
        {
          src: url,
          width: dim[0],
          height: dim[1]
        }
      )
    }
}



export default Photos

// export const photos = [
//   {
//     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 1,
//     height: 1
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src:
//       "https://media1.tenor.com/images/702158a9c3947532d70e083d78fcada8/tenor.gif",
//     width: 1,
//     height: 1
//   }
// ];

