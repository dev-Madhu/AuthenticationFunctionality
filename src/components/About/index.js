// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="container">
      <h1 className="title">About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About
