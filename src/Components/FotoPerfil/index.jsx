import {Link} from "react-router-dom";
function FotoPerfil({src, alt}) {
    return (
        <Link href="/inicio" className="d-flex align-items-center link-dark text-decoration-none">
                    <img src={src} alt={alt} width="60" height="60" className="rounded-circle me-2" />
        </Link>
    )
}
export default FotoPerfil;