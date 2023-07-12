import { useNavigate } from 'react-router-dom';

import { FiX, FiSearch } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Footer } from '../Footer';
import { Input } from '../Input';

import { MenuMobileContainer, Header, Content } from "./styles";
import { useEffect } from 'react';

export function MenuMobile({ menuIsVisible, setMenuMobileIsVisible, search, onChangeSearch }) {
  const { SignOut, user } = useAuth();

  const navigate = useNavigate();

  function handleCloseMenu() {
    setMenuMobileIsVisible(false);
  }

  function handleSignOut() {
    SignOut();
    navigate('/')
  }

  function handleNew() {
    navigate('/new')
  }

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return(
    <MenuMobileContainer isVisible={menuIsVisible}>
      <Header>
        <button onClick={handleCloseMenu}>
          <FiX size={32} />
        </button>
        <p>Menu</p>
      </Header>
      <Content>
        <Input 
          value={search}
          icon={FiSearch} 
          placeholder="Busque por pratos ou ingredientes"
          onChange={e => onChangeSearch(e.target.value)}
        />

        {
          user.isAdmin && 
          <button onClick={handleNew}>Novo prato</button>
        }

        <button onClick={handleSignOut}>Sair</button>
      </Content>
      <Footer />
    </MenuMobileContainer>
  );
}