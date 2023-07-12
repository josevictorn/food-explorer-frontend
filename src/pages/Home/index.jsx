import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate, Link } from 'react-router-dom';
import { Navigation } from 'swiper';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Footer } from '../../components/footer';
import { Stepper } from '../../components/Stepper';

import { api } from '../../services';

import { FiHeart, FiEdit2 } from 'react-icons/fi';

import bannerImg from '../../assets/banner-image.png';

import { HomeContainer, Content, Banner } from "./styles";

import 'swiper/css';
import "swiper/css/navigation";

export function Home() {
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [search, setSeach] = useState("");

  const [count, setCount] = useState(1);
  const [favorites, setFavorites] = useState(false);

  let fill = 'transparent'

  function handleFavorites() {
    setFavorites(!favorites)
    if(favorites) {
      fill = '#E1E1E6'
    } else {
      fill = 'transparent'
    }
  }

  function handleAddItem() {
    setCount(prevState => prevState + 1);
  }

  function handleRemoveItem() {
    setCount(prevState => prevState - 1 < 0 ? 0 : prevState - 1);
  }

  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    async function fetchCategories() {
      const dishes = await api.get('/dishes?search');

      const filteredMeals = dishes.data.filter(dish => dish.category === 'meals');
      const filteredDesserts = dishes.data.filter(dish => dish.category === 'desserts');
      const filteredDrinks = dishes.data.filter(dish => dish.category === 'drinks');

      setMeals(filteredMeals);
      setDesserts(filteredDesserts);
      setDrinks(filteredDrinks);
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchDishes() {
      const dishes = await api.get(`/dishes?search=${search}`);

      const filteredMeals = dishes.data.filter(dish => dish.category === 'meals');
      const filteredDesserts = dishes.data.filter(dish => dish.category === 'desserts');
      const filteredDrinks = dishes.data.filter(dish => dish.category === 'drinks');

      setMeals(filteredMeals);
      setDesserts(filteredDesserts);
      setDrinks(filteredDrinks);
    }

    fetchDishes();
  }, [search]);

  function handleEdit(id) {
    navigate(`/edit/${id}`);
  }

  return(
    <HomeContainer>
      <Header search={search} onChangeSearch={setSeach} />

      <Content>
        <Banner>
          <img src={bannerImg} />

          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        {
          meals.length > 0 && 
          <Section title="Refeições">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={16}
              navigation={window.innerWidth <= 470 ? false : true}
              modules={[Navigation]}
            >
              {meals.map(meal => (
                <SwiperSlide key={meal.id} isadmin={user.isAdmin}>
                  {
                    user.isAdmin ?
                    <button className='edit' onClick={() => handleEdit(meal.id)}>
                      <FiEdit2 size={24} />
                    </button> :
                    <button className='favorites' onClick={handleFavorites}>
                      <FiHeart size={20} fill={fill} />
                    </button>
                  }

                  <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt={`Imagem de ${meal.title}`} />

                  <Link to={`/details/${meal.id}`}>{meal.title}</Link>

                  <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(meal.price)}</p>

                  <div>
                    {
                      !user.isAdmin &&
                      <Stepper amount={count} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />
                    }

                    {
                      !user.isAdmin &&
                      <Button title="incluir" />
                    }
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>
        }

        {
          desserts.length > 0 && 
          <Section title="Sobremesas">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={16}
              navigation={window.innerWidth <= 470 ? false : true}
              modules={[Navigation]}
            >
              {desserts.map(dessert => (
                <SwiperSlide key={dessert.id} isadmin={user.isAdmin}>
                  {
                    user.isAdmin ?
                    <button className='edit' onClick={() => handleEdit(dessert.id)}>
                      <FiEdit2 size={24} />
                    </button> :
                    <button className='favorites'>
                      <FiHeart size={20} />
                    </button>
                  }

                  <img src={`${api.defaults.baseURL}/files/${dessert.image}`} alt="Imagem de Salada Ravanello" />

                  <Link to={`/details/${dessert.id}`}>{dessert.title}</Link>

                  <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dessert.price)}</p>

                  <div>
                    {
                      !user.isAdmin &&
                      <Stepper amount={count} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />
                    }

                    {
                      !user.isAdmin &&
                      <Button title="incluir" />
                    }
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>
        }

        {
          drinks.length > 0 &&
          <Section title="Bebidas">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={16}
              navigation={window.innerWidth <= 470 ? false : true}
              modules={[Navigation]}
            >
              {drinks.map(drink => (
                <SwiperSlide key={drink.id} isadmin={user.isAdmin}>
                  {
                    user.isAdmin ?
                    <button className='edit' onClick={() => handleEdit(drink.id)}>
                      <FiEdit2 size={24} />
                    </button> :
                    <button className='favorites'>
                      <FiHeart size={20} />
                    </button>
                  }

                  <img src={`${api.defaults.baseURL}/files/${drink.image}`} alt="Imagem de Salada Ravanello" />

                  <Link to={`/details/${drink.id}`}>{drink.title}</Link>

                  <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(drink.price)}</p>

                  <div>
                    {
                      !user.isAdmin &&
                      <Stepper amount={count} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />
                    }

                    {
                      !user.isAdmin &&
                      <Button title="incluir" />
                    }
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>
        }
      </Content>
      <Footer />
    </HomeContainer>
  );
}