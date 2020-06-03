import React, { useState } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photos from "./photos";
import logo from './image/logo.PNG'


/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    direction={"column"}
    renderImage={props => <SortablePhoto {...props} />}
  />
));

function App() {
  const [items, setItems] = useState(Photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div>
      <div style={{}}>
        <img style={{position:"absolute", left: "2vw", width: "6vw"}} src= {logo} />
        <p style={{textAlign: "center", paddingTop: "2vw", paddingBottom: "2vw", fontSize: "2.4vw"}}>HATCH AWARDS 59</p>
      </div>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}
export default App;
