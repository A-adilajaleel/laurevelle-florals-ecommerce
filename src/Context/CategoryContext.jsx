import { createContext, useState } from "react"

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([
{ id:1,name: "Bouquets", images: "/images/Bouquets.jpg" },
  {id:2, name: "Roses", images: "/images/Roses.jpg" },
  { id:3,name: "Occasions", images: "/images/Occasions.jpg" },
  { id:4,name: "Bridal", images: "/images/WeddingB.jpg" },
  { id:5, name: "Indoor Plants", images: "/images/indoor.jpg" },
 {id:6,name: "Office Decor Flowers", images: "/images/Office Decor Flowers.jpg" },
{id:7,name: "Event Floral Packages", images: "/images/event floral package.jpg" },
  {id:8,name: "Pastel Arrangements", images: "/images/Pastel Arrangements.jpg" },
  ])

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  )
}
