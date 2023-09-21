import React, { Component } from "react";

class TextTypingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.animateText();
  }

  animateText = () => {
    const { text, currentIndex } = this.state;
    const { textToType } = this.props;

    if (currentIndex < textToType.length) {
      this.setState({
        text: text + textToType[currentIndex],
        currentIndex: currentIndex + 1,
      });

      setTimeout(this.animateText, Math.random() * 200 + 50);
    }
  };

  render() {
    return <pre>{this.state.text}</pre>;
  }
}

export default TextTypingAnimation;
