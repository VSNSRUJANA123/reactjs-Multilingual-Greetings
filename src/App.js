import {Component} from 'react'
import './App.css'
import Buttons from './components/Buttons'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    isActive: languageGreetingsList[0].id,
    activeImg: languageGreetingsList[0],
  }

  renderBtn = id => {
    const resFilter = languageGreetingsList.findIndex(items => items.id === id)
    this.setState({
      isActive: id,
      activeImg: languageGreetingsList[resFilter],
    })
  }

  render() {
    const {isActive, activeImg} = this.state
    return (
      <div className="bgGreet">
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(items => {
            const styleBtn = isActive === items.id && 'active'
            return (
              <Buttons
                key={items.imageUrl}
                items={items}
                renderBtn={this.renderBtn}
                styleBtn={styleBtn}
              />
            )
          })}
        </ul>
        <div>
          <img
            className="img"
            src={activeImg.imageUrl}
            alt={activeImg.imageAltText}
          />
        </div>
      </div>
    )
  }
}

export default App
