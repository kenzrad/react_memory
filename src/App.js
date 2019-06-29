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

  gameOver = () => {
    if (this.state.score === 12) {
      console.log("you win!!!");
    }
    else {
      console.log("you lose!");
    }
    this.state.images.forEach(card => {
      card.clicked = 0;
    });
    this.setState({ score: 0 });
  };

  handleImageClick = (id) => {
    let newArray = this.shuffleArray(images);
    this.state.images.find((image, i) => {
      if (image.id === id) {
        if (images[i].clicked === 0 && this.state.score < 11) {
          images[i].clicked = images[i].clicked + 1;
          this.setState({ 
            images: newArray,
            score: this.state.score + 1, 
            topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
          });
          return true;
        }
        else if (images[i].clicked === 0 && this.state.score === 11) {
          this.setState({ 
            score: this.state.score + 1, 
            topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
          }, function () {
            this.gameOver();
          }) 
        } 
        else {
          this.gameOver();
        }
      }
    })
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
