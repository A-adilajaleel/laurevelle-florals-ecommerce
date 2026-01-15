import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CategoryContext } from '../Context/CategoryContext'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../Context/ProductContext'
import ProductCard from '../Components/PorductCard'


const Home = () => {
    const{categories}=useContext(CategoryContext)
    const{products}=useContext(ProductContext)
    localStorage.removeItem("products");
    const navigate = useNavigate()
  return (
    <div className="relative">
      <div className="relative min-h-screen bg-[url('https://i.pinimg.com/1200x/cf/cd/a3/cfcda3e5999bc356bc679d0bdda7bcd0.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <header className="relative flex flex-col items-center pt-12 sm:pt-20 px-4">
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic font-bold tracking-tight text-center">
            Laurevelle
          </h1>
        </header>

        <div className="relative flex flex-col items-center sm:items-start justify-center px-6 sm:px-12 md:px-20 mt-16 sm:mt-28 lg:mt-40 max-w-4xl w-full">
          <p className=" text-white font-mono font-bold text-base sm:text-lg md:text-2xl max-w-xl text-center sm:text-left leading-relaxed">
            Crafted with love and artistry, our floral arrangements bring elegance and serenity to every space. Each bouquet is thoughtfully designed to delight the senses, inspire joy, and elevate the ambiance with timeless beauty
          </p>

          <div className="mt-45 flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/login"
              className="bg-white text-yellow-950 px-6 py-3 rounded-3xl shadow-lg hover:bg-green-950 hover:text-white transition-all duration-300 text-center font-semibold"
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="bg-transparent border-2 border-white text-gray-50 px-6 py-3 rounded-3xl hover:bg-white hover:text-pink-900 transition-all duration-300 text-center font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-[url('https://i.pinimg.com/1200x/be/5a/82/be5a82451f530f515c934a9a9b7667b8.jpg')] bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-950 drop-shadow-lg">
            Our Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Link to='/custom'>
            <div className="bg-white/90 rounded-3xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <img
                className="h-20 w-20 mb-4"
                src="https://cdn-icons-png.flaticon.com/128/10209/10209258.png"
                alt="Custom Orders"
              />
              <h1 className="text-xl font-bold font-mono">
                Custom Orders & Personalization
              </h1>
            </div>
            </Link>
                
            <div className="bg-white/90 rounded-3xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <img
                className="h-20 w-20 mb-4"
                src="https://cdn-icons-png.flaticon.com/128/3074/3074180.png"
                alt="Event Decoration"
              />
              <h1 className="text-xl font-bold font-mono">
                Event & Occasion Decoration
              </h1>
            </div>

            <div className="bg-white/90 rounded-3xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <img
                className="h-20 w-20 mb-4"
                src="https://cdn-icons-png.flaticon.com/128/4291/4291797.png"
                alt="Flower Sales"
              />
              <h1 className="text-xl font-bold font-mono">
                Flower & Plant Sales
              </h1>
            </div>

            <div className="bg-white/90 rounded-3xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <img
                className="h-20 w-20 mb-4"
                src="https://cdn-icons-png.flaticon.com/128/11425/11425578.png"
                alt="Delivery Services"
              />
              <h1 className="text-xl font-bold font-mono">
                Delivery Services
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section  className='bg-[url("/images/homeimage.jpg")] p-2'>
        <div className='p-2'>
        <h1 className='font-bold text-pink-900 text-2xl ml-2 '>OUR CATEGORIES...</h1>
        </div>
        
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-4">
  {categories.map((cat) => (
    <div
      key={cat.id}
      onClick={() => navigate(`/category/${cat.name}`)}
      className="group cursor-pointer bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center overflow-hidden"
    >
     
      <div className="w-full h-40 sm:h-60 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-pink-900/10 z-10 transition-colors duration-300" />
        <img
          src={cat.images}
          alt={cat.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>

    
      <div className="p-5 w-full text-center">
       
        <div className="w-6 h-1 bg-pink-200 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:w-12 group-hover:bg-pink-800" />
        
        <p className="text-lg sm:text-xl font-serif font-bold text-gray-800 group-hover:text-pink-900 transition-colors">
          {cat.name}
        </p>
      </div>
    </div>
  ))}
</div>
      </section>
      <section className='p-5'>
        <div className="relative max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-serif italic font-bold text-pink-900 mb-8">
      Our Mission
    </h2>

    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-mono px-2">
      Our mission is to spread joy, love, and meaningful connections through thoughtfully crafted floral arrangements.
      <br className="hidden md:block" />
      We aim to deliver fresh, high-quality flowers with artistic care, helping people express emotions, celebrate moments,
      and create lasting memories — one bouquet at a time.
    </p>

    <div className="mt-10 flex justify-center">
      <span className="h-1 w-24 bg-pink-700 rounded-full"></span>
    </div>
  </div>
      </section>
     <section className='bg-[url("/images/listbg.jpg")] p-4'>
  <h1 className='text-2xl font-bold text-red-800 mb-6'>
    PRODUCT LIST
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {products && products.length > 0 ? (
      products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))
    ) : (
      <p className="text-center col-span-full text-gray-600">
        No products available
      </p>
    )}
  </div>
</section>


      <section className='bg-[url("/images/reviewbg.jpg")] bg-cover bg-center py-14 px-6 flex flex-col items-center gap-10'>

  <h1 className='text-4xl font-bold text-gray-800 drop-shadow-sm'>
    Our Reviews
  </h1>

 
  <div className='bg-white/80  shadow-lg rounded-2xl p-8 max-w-3xl text-center flex flex-col items-center gap-4'>
    <img
      className='w-20 h-20'
      src="https://cdn-icons-png.flaticon.com/128/10091/10091272.png"
    />
    <p className='font-mono text-xl text-yellow-900'>
      “Absolutely loved the bouquet! The flowers were fresh, fragrant, and arranged so beautifully. Delivery was right on time. I’m definitely ordering again!”
    </p>
    <h4 className="text-2xl font-bold text-yellow-700">— Andrea</h4>
  </div>

  
  <div className='bg-white/80  shadow-lg rounded-2xl p-8 max-w-3xl text-center flex flex-col items-center gap-4'>
    <img
      className='w-20 h-20'
      src="https://cdn-icons-png.flaticon.com/128/10091/10091272.png"
    />
    <p className='font-mono text-xl text-yellow-900'>
      “The best flower shop I’ve ever tried. Their roses lasted for more than a week! Amazing quality and friendly service.”
    </p>
    <h4 className="text-2xl font-bold text-yellow-700">— Mary</h4>
  </div>

 
  <div className='bg-white/80 shadow-lg rounded-2xl p-8 max-w-3xl text-center flex flex-col items-center gap-4'>
    <img
      className='w-20 h-20'
      src="https://cdn-icons-png.flaticon.com/128/10091/10091272.png"
    />
    <p className='font-mono text-xl text-yellow-900'>
      “I ordered a birthday bouquet for my mom, and it was PERFECT. The colours were vibrant and the wrapping was elegant. Thank you for making her day special!”
    </p>
    <h4 className="text-2xl font-bold text-yellow-700">— Juliet</h4>
  </div>

</section>
<section className='bg-[url("/images/fbg.png")] bg-cover bg-center py-16 px-6'>
  <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>

    
    <div className='flex gap-4'>
      <img
        src="https://cdn-icons-png.flaticon.com/128/14068/14068620.png"
        className='w-10 h-10 rounded-full bg-pink-800 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer'
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/220/220375.png"
        className='w-10 h-10 rounded-full bg-pink-800 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer'
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/160/160205.png"
        className='w-10 h-10 rounded-full bg-pink-800 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer'
      />
    </div>

    
    <div className='flex flex-col items-center text-center'>
      <img
        src="https://cdn-icons-png.flaticon.com/128/6342/6342579.png"
        className='w-20 h-20 rounded-full bg-pink-900 p-3 mb-3  '
      />
      <h1 className='italic text-3xl text-pink-800 font-mono font-semibold'>
        Laurevelle
      </h1>
      <p className='text-xs  text-pink-600 uppercase mt-1'>
        Floral Atelier
      </p>
    </div>

    
    <div className='text-center md:text-right'>
      <h3 className='text-pink-700 text-lg font-semibold'>
         787-453-3126
      </h3>
      <a
        href="mailto:contact@laurevelleflowers.com"
        className="text-rose-600 hover:text-rose-800 transition-colors duration-300 text-sm"
      >
        contact@laurevelleflowers.com
      </a>
    </div>

  </div>
</section>

<section className='bg-pink-900 py-3'>
  <p className='text-white text-center text-xs tracking-wide'>
    © 2014 Laurevelle. All Rights Reserved
  </p>
</section>

    </div>
  )
}

export default Home
