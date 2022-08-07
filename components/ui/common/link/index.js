import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, activeLinkClass, ...props }) => {
  //children are anchor tag elements, props includes classname and href
  const { pathname } = useRouter(); // gets current pathname - we can compare links to pathname and if matches means we are on active link
  let className = children.props.className || '';

  if (pathname === props.href) {
    className = `${className} ${
      activeLinkClass ? activeLinkClass : 'text-indigo-600'
    }`;
  }
  return (
    <Link {...props}>
      {
        React.cloneElement(children, { className }) //
      }
    </Link>
  );
};

export default ActiveLink;
