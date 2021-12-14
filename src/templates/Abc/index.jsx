import { useLocation, useParams, useNavigate } from "react-router-dom";

export const Abc = () => {
  const params = useParams();
  const location = useLocation(); //Retorna configurações da url
  const navigate = useNavigate(); // tudo sobre o histórico de navegação

  if(params.slug){
    return (
      <h1>
        Slug: {params.slug}
      </h1>
    );
  }

  return (
    <div>
      <h1>
        Oi!
      </h1>
    </div>
  );
}
