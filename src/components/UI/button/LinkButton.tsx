import React, { ReactChildren, ReactChild } from 'react';

interface ButtonProps {
    children: ReactChild | ReactChildren ;
    image: string | null ;
    selected: boolean | null;
}

const LinkButton = ({
  children, image, selected, ...props
}: ButtonProps) => {
  let className = 'nav__item-link-button ';
  if (selected) {
    className += 'active';
  }

  return (
    <button
      className={className}
      {...props}
    >
      {image
        ? <img src={image} alt=""/>
        : null
      }
      {children}
    </button>
  );
};

export default LinkButton;
