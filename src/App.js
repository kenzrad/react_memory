import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    score: 0,
    topScore: 0
  };

  handleImageClick = id => {
    console.log(`${id} has been clicked!`)
    let newArray = this.shuffleArray(images);
    this.setState({images: newArray});
  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>React Memory Game</Title>
        <Instructions>Clicky clicky clickity click</Instructions>
        <Score
          score={this.state.score}
          topScore={this.state.topScore}
        >
        </Score>
        {this.state.images.map(image => (
          <ImageCard
            handleImageClick={this.handleImageClick}
            id={image.id}
            name={image.name}
            key={image.id}
            image={image.image}
            clicked={image.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
