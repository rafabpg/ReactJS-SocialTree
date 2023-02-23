import { TwitterLogo,TwitchLogo,InstagramLogo,LinkedinLogo,GithubLogo } from "phosphor-react";
import { SocialLinksContainer } from "./style";


function SocialLinks(){
    return(
        <SocialLinksContainer>
            <TwitterLogo size={22} color="#BB99DD" />
            <TwitchLogo size={22} color="#BB99DD" />
            <InstagramLogo size={22} color="#BB99DD" />
            <LinkedinLogo size={22} color="#BB99DD" />
            <GithubLogo size={22} color="#BB99DD" />
        </SocialLinksContainer>
    );
}
export default SocialLinks;