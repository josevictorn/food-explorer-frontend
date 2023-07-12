import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { FiChevronLeft } from 'react-icons/fi';

import { Header } from "../../components/Header";
import { ButtonText } from '../../components/ButtonText';
import { Footer } from "../../components/footer";

import { api } from '../../services';

import { DishContainer, IngredientContainer } from "./styles";
import { Button } from '../../components/Button';
import { Stepper } from '../../components/Stepper';

export function Details() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);

  function handleAddItem() {
    setCount(prevState => prevState + 1);
  }

  function handleRemoveItem() {
    setCount(prevState => prevState - 1);
  }

  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  function handleBack() {
    navigate(-1);
  }

  function handleEdit(id) {
    navigate(`/edit/${id}`);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      setData(response.data);
    }
    
    fetchDish();
  }, []);
  
  return (
    <div>
      <Header />

      {
        data &&
        <DishContainer>
          <ButtonText 
            icon={FiChevronLeft} 
            title="Voltar"
            onClick={handleBack} 
          />

          <main className="content">
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={`Imagem de ${data.title}`} />

            <section>
              <h2>{data.title}</h2>

              <p>{data.description}</p>

              <div className="ingredients">
                {
                  data.ingredients.map(ingredient => (
                    <IngredientContainer key={ingredient.id}>{ingredient.name}</IngredientContainer>
                  ))
                }
              </div>

              <div className="buy">
                {
                  user.isAdmin ?
                  <Button title="Editar prato" onClick={() => handleEdit(data.id)} /> :
                  <>
                  <Stepper amount={count} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />
                  <Button 
                    title={`pedir ∙ ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.price)}`} 
                  />
                  </>
                }
              </div>

            </section>
          </main>
        </DishContainer>
      }

      <Footer />
    </div>
  )
}