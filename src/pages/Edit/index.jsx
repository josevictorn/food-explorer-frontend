import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import CurrencyInput from 'react-currency-input-field';

import { FiChevronLeft, FiUpload } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { IngredientItem } from '../../components/IngredientItem';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/footer';

import { api } from '../../services';

import { NewContainer, Content, InputIngridients, Form } from './styles';

export function Edit() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const options = [
    { value: 'meals', label: 'Refeições' },
    { value: 'desserts', label: 'Sobremesas' },
    { value: 'drinks', label: 'Bebidas' }
  ]

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      const ingredientsNames = response.data.ingredients.map(ingredient => (ingredient.name));

      setTitle(response.data.title);
      setIngredients(ingredientsNames);
      setDescription(response.data.description);
      setCategory(response.data.category);
      setPrice(response.data.price);
    }
    
    fetchDish();
  }, [])
  
  function handleBack() {
    navigate(-1);
  }

  function handleAddIngredient() {
    if (newIngredient === '') {
      window.alert('Informe o ingrediente antes de inserir-lo.');
      return;
    }

    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  }

  function handleRemoveIngredient(removedTag) {
    setIngredients(prevState => prevState.filter(tag => tag !== removedTag));
  }

  async function handleEditDish() {
    if(!image) {
      return alert("Adicione uma imagem para o prato.")
    }
      
    if(!title) {
      return alert("Digite o nome do prato.")
    }
        
    if(!category) {
      return alert("Informe a categoria do prato.")
    }
          
    if(newIngredient) {
      return alert('Você preencheu o campo de "Novo Ingrediente", mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio para continuar.')
    }
            
    if(!price) {
      return alert("Informe o preço do prato.")
    }
    
    const formatedPrice = typeof price !== 'number' ? parseFloat(price.replace(/[^\d,]+/g, '').replace(',', '.')) : price;

    await api.put(`/dishes/${params.id}`, {
      title,
      description,
      category,
      price: formatedPrice,
      ingredients
    })
    
    const requestForm = new FormData();
    requestForm.append("image", image);

    await api.patch(`/dishes/${params.id}/upload`, requestForm);
    alert("Prato modificado com sucesso!");
    navigate("/");
  }

  async function handleDeleteDish() {
    await api.delete(`/dishes/${params.id}/deleteImage`);
    await api.delete(`/dishes/${params.id}`)
    alert("Prato deletado com sucesso!");
    navigate("/");
  }

  return(
    <NewContainer>
      <Header />

      <Content>

        <ButtonText 
          icon={FiChevronLeft} 
          title="Voltar"
          onClick={handleBack} 
        />

        <Form>
          <h2>Editar prato</h2>

          <div className="input-group">
            <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <input 
                type="file" 
                id="image" 
                accept="image/*" 
                onChange={e => setImage(e.target.files[0])}
              />
              <label htmlFor="image">
                <FiUpload size={20} />
                Selecione a imagem para altera-lá
              </label>
            </div>

            <div className="input-wrapper">
              <label htmlFor="name">Nome</label>
              <Input 
                value={title}
                placeholder="Ex.: Salada Ceasar" 
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label>Categoria</label>
            
              <Select 
                options={options} 
                classNamePrefix="react-select"
                onChange={e => setCategory(e.value)}
              />
            </div>
          </div>

          <div className="input-group-two">
            <div className="input-wrapper">
              <label>Ingredientes</label>
              <InputIngridients>
                {
                  ingredients.map((ingredient, index) => (
                    <IngredientItem key={index} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)} />
                  ))
                }
                <IngredientItem isNew value={newIngredient} onChange={e => setNewIngredient(e.target.value)} onClick={handleAddIngredient} />
              </InputIngridients>
            </div>

            <div className="input-wrapper">
              <label htmlFor="price">Preço</label>
              <CurrencyInput
                id="price"
                placeholder="R$ 00,00"
                value={price}
                className="input-price"
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                onValueChange={(value) => setPrice(value)}
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <Textarea
              defaultValue={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)} 
            />
          </div>

          <div className="buttons-wrapper">
            <Button 
              title="Excluir prato"
              isSecondary
              onClick={handleDeleteDish}
            />

            <Button 
              title="Salvar alterações"
              onClick={handleEditDish}
            />
          </div>
        </Form>
      </Content>

      <Footer />
    </NewContainer>
  );
}