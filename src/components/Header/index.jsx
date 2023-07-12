import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';

import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi';

import { Input } from "../Input";
import { Button } from "../Button";

import logoFoodExplorer from '../../assets/logo-food-explorer.svg';
import logoFoodExplorerAdmin from '../../assets/logo-food-explorer-admin.svg';
import receiptImg from '../../assets/receipt.svg';

import { HeaderMobileContainer, HeaderContainer, Logout } from "./styles";
import { useState } from "react";
import { MenuMobile } from "../MenuMobile";

export function Header({ search, onChangeSearch }) {
  const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);

  const navigate = useNavigate();

  const { SignOut, user } = useAuth();

  function handleOpenMenu() {
    setMenuMobileIsVisible(true);
  }

  function handleSignOut() {
    SignOut();
    navigate('/');
  }

  function handleNew() {
    navigate('/new')
  }


  return(
    <>
      <HeaderMobileContainer>
        <button onClick={handleOpenMenu}>
          <FiMenu size={32} />
        </button>

        <img src={ user.isAdmin ? logoFoodExplorerAdmin : logoFoodExplorer } alt="Logotipo do Food Explorer" />

        {
          !user.isAdmin &&
          <button>
            <img src={receiptImg} alt="Ícone de recibo" />
            <span>0</span>
          </button>
        }

        <MenuMobile 
          menuIsVisible={menuMobileIsVisible}
          setMenuMobileIsVisible={setMenuMobileIsVisible}
          search={search}
          onChangeSearch={onChangeSearch}
        />
      </HeaderMobileContainer>

      <HeaderContainer>
        <img src={ user.isAdmin ? logoFoodExplorerAdmin : logoFoodExplorer } alt="Logotipo do Food Explorer" />
        
        <Input 
          value={search} 
          icon={FiSearch} 
          placeholder="Busque por pratos ou ingredientes" 
          onChange={e => onChangeSearch(e.target.value)}
        />

        {
          user.isAdmin ?
          <Button title="Novo prato" onClick={handleNew} /> :
          <Button title="Pedidos (0)" />
        }

        <Logout
          onClick={handleSignOut}
        >
          <FiLogOut size={22} />
        </Logout>
      </HeaderContainer>
    </>
  );
}