import { ButtonLink } from "./style";


interface socialProps{
    name:string,
    url:string
}

function Button(props:socialProps){
    return(
        <ButtonLink href={props.url} target="_blank">{props.name}</ButtonLink>
    );
}
export default Button;