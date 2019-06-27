import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0
  };

  handleImageClick = (id, clicked) => {
    console.log(`${id} has been clicked!`)
    let newArray = this.shuffleArray(images);
    if(clicked) {
      this.setState({score: 0});
    }
    else if (this.state.topScore < 12) {
      this.setState({
        images: newArray,
        score: this.state.score + 1,
        topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
      });
    }
    else {
      console.log("You win!");
    }
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
            clickCheck={this.clickCheck}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
