import React, { MouseEvent } from 'react';

import { Svg, Img, ImgWrapper } from './styles';

import brazil from './img/brazil.svg';
import china from './img/china.svg';
import india from './img/india.svg';
import nicaragua from './img/nicaragua.svg';
import pakistan from './img/pakistan.svg';
import austria from './img/austria.svg';
import spain from './img/spain.svg';
import earth from './img/earth.svg';
import verdaccio from './img/verdaccio.svg';
import filebinary from './img/filebinary.svg';
import law from './img/law.svg';
import license from './img/license.svg';
import time from './img/time.svg';
import version from './img/version.svg';

export interface IconsMap {
  brazil: string;
  spain: string;
  china: string;
  nicaragua: string;
  pakistan: string;
  austria: string;
  india: string;
  earth: string;
  verdaccio: string;
  license: string;
  time: string;
  law: string;
  version: string;
  filebinary: string;
  [key: string]: string;
}

export interface Props {
  name: keyof typeof Icons;
  className?: string;
  onClick?: (event: MouseEvent<SVGElement | HTMLSpanElement>) => void;
  size?: 'sm' | 'md';
  pointer?: boolean;
  img?: boolean;
  modifiers?: any;
}

export const Icons: IconsMap = {
  brazil,
  spain,
  china,
  nicaragua,
  pakistan,
  india,
  austria,
  earth,
  verdaccio,
  filebinary,
  law,
  license,
  time,
  version,
};

const Icon: React.FC<Props> = ({ className, name, size = 'sm', img = false, pointer = false, ...props }) => {
  return img ? (
    <ImgWrapper className={className} pointer={pointer} size={size} title={name} name={name} {...props}>
      <Img alt={String(name)} src={Icons[name]} />
    </ImgWrapper>
  ) : (
    // @ts-ignore
    <Svg className={className} pointer={pointer} size={size} {...props}>
      <title>{name}</title>
      <use xlinkHref={`${Icons[name]}#${name}`} />
    </Svg>
  );
};

export default Icon;
