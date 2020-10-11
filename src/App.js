import React, {Component} from "react"
import './App.css';
import Footer from './components/footer.jsx'
import BottomScrollListener from 'react-bottom-scroll-listener'
import Highlights from "./components/highlightsPanel";

class App extends Component {
  constructor({props}){
    super(props);
    this.state = {            
      notif: true,
      newsLetter: false
    }
  }

  handleOnDocumentBottom = () => {    
    this.setState({
      newsLetter: true
    })
  }

  closeNotif = () =>{
    this.setState({ notif: false })    
  }

  closeNewsLetter = () =>{
    this.setState({ newsLetter: false })    
  }

  render(){                            
    return (
      <BottomScrollListener
      offset = '300'
      debounce='60000'
      onBottom={this.handleOnDocumentBottom}>
      <div className="App">
        <div className="fixed">
          {
            this.state.notif ? 
            <div className="notif">        
              <p>By accessing and using this website, you acknowledge that you have read and understand our <span>Cookie Policy</span>, <span>Privacy Policy</span>, and <span>our Terms of Service</span>.</p>
              <button className="btn btn-primary" onClick={this.closeNotif}>Got It!</button>
            </div> : <div className="close-notif"></div>
          }
        </div>
        
        <header className={this.state.notif ? "hero-shot" : "up"}>
          <div className="logo">
            <nav><img src={require('./image/logo.png')} alt='logo'/></nav>
          </div>
          <div className="headline">
            <h2>Hello! I'm Andre Sihombing</h2>
            <h3>Consult, Design, and Develop Websites</h3>
            <h4>Have something great in mind? Feel free to contact me.<br/> I'll help you to make it happen.</h4>
            <button className="btn btn-contact">LET'S MAKE CONTACT!</button>
          </div>        
        </header>        
        <Highlights/>   
        <Footer/>
        {
          this.state.newsLetter ? 
          <div className="news-letter">
            <div className="top">
              <div className="text-top"> Get latest updates in web technologies</div>
              <i className="fa fa-close fa-lg" onClick={this.closeNewsLetter}></i>
            </div>
            <div className="center">
              <p>I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</p>
            </div>
            <div className="bottom">
              <input               
                type="text"              
                placeholder="Email Address"
                />              
                <button>Count Me In!</button>
            </div>
          </div> : <div className="close-news"></div>
        }
        
      </div>      
      </BottomScrollListener>
    );
  }
}

export default App;
