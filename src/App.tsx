import profile from './assets/profileImage.png'
import Button from './components/Button'
import SocialLinks from './components/SocialLinks'
import { GlobalStyles } from './global'
import { ProfileContainer, ProfileImage,Container } from './styles'

const socialMedia = [
  {
    name:'Instagram',
    url:'https://www.instagram.com/',
  },
  {
    name:'Twitch',
    url:'https://www.twitch.tv/',
  },
  {
    name:'Twitter',
    url:'https://twitter.com/login?lang=pt',
  },
  {
    name:'Linkedin',
    url:'https://www.linkedin.com/feed/',
  },
  {
    name:'Github',
    url:'https://github.com/',
  },
]


function App() {


  return (
    <Container>
      <GlobalStyles/>
      <ProfileContainer>
        <ProfileImage src={profile} alt="Profile picture from unplash" />
        <figcaption>@instagram</figcaption>
      </ProfileContainer>
      {
        socialMedia.map((item)=>{
           return <Button name={item.name} url={item.url}/> 
        })
      }
      <SocialLinks/>
    </Container> 
  )
}

export default App
