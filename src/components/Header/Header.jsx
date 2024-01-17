import header from "./Header.module.css/"

function Header(){
    return(
        <header className={header.divHeader}>

            <a href="#">Sobre MIm</a>
            <a href="#">Projetos</a>
            <a href="#">Habilidades</a>
            <a href="#">Vida Academica</a>
            <a href="#">Contato</a>
        </header>
    )
}
export default Header