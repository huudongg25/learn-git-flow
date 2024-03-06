import React from 'react'
import {Carousel} from 'antd'
import Link from 'next/link'
const Banner = ():JSX.Element => {
  return (
    <section className="homeBannerHead">
        <Carousel
          className="homeBannerHeadSlide"
          autoplay={true}
          autoplaySpeed={3000}
          effect="fade"
        >
          <img
            src="https://png.pngtree.com/background/20230522/original/pngtree-antique-books-on-table-desktop-wallpaper-picture-image_2695660.jpg"
            alt=""
          />
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20230613/pngtree-an-open-book-sits-on-top-of-several-books-image_2873009.jpg"
            alt=""
          />
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-old-books-lie-on-top-of-a-candle-image_2898782.jpg"
            alt=""
          />
          <img
            src="https://live.staticflickr.com/5481/10998827936_614c4ec517_b.jpg"
            alt=""
          />
          <img
            src="https://img.freepik.com/fotos-premium/pilha-de-livros-antigos-sobre-mesa-de-madeira-em-uma-sala-de-biblioteca_614679-2085.jpg"
            alt=""
          />
          <img
            src="https://previews.123rf.com/images/nuevoimg/nuevoimg2309/nuevoimg230910440/212498417-estante-antiga-com-livros-antigos-e-l%C3%A2mpadas-em-estilo-vintage.jpg"
            alt=""
          />
        </Carousel>
        <div className="homeBannerHeadTitle">
          <h4>Book For Life</h4>
          <h1>Providing knowledge to humanity</h1>
          <Link href={"/shop"}>Shop Now</Link>
        </div>
      </section>
  )
}

export default Banner