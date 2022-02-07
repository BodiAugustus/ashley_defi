import { ActiveLink } from "@components/ui/common"
import React from "react"

const BreadCrumbItem = ({item, index}) => {
  return(
    <li
      
    className={`${index === 0 ? "pr-4" : "px-4"} text-white hover:text-sky-400`}>
      <ActiveLink 
      href={item.href}>
        <a >{item.value}</a>
      </ActiveLink>
    </li>
  )
}

const Breadcrumbs = ({items, isAdmin}) => {
    return(
        <nav aria-label="breadcrumb" className="xs:mt-4 xs:-mb-1
        md:mr-16
        lg:m-0
        ">
<ol className="flex leading-none text-sky-400 divide-x divide-indigo-400">
  {items.map((item, i) =>
  <React.Fragment
  key={item.href}
  >
  { !item.requireAdmin &&
     <BreadCrumbItem
       item={item}
       index={i}
     />
  }
  { item.requireAdmin && isAdmin && 
    <BreadCrumbItem
       item={item}
       index={i}
     />
  }
  </React.Fragment>
    )}
</ol>
</nav>
    )
}

export default Breadcrumbs