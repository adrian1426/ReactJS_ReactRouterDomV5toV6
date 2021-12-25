import { useMatch, useParams } from 'react-router-dom';

const Proyecto = () => {
  const match = useMatch("/portafolio/proyecto1/:id");
  const params = useParams();
  const { id } = match.params;

  console.log('params <Proyecto/>', params);

  return (
    <div>
      <h1>Proyecto {id}</h1>
    </div>
  );
};

export default Proyecto;