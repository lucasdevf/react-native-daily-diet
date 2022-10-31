import { Image } from 'react-native';

import { HeaderHomeContainer } from "./styles";

import Avatar from '../../assets/avatar.png';
import Logo from '../../assets/logo.png';

export function HeaderHome() {
  return (
    <HeaderHomeContainer>
      <Image source={Logo} />
      <Image source={Avatar} />
    </HeaderHomeContainer>
  )
}