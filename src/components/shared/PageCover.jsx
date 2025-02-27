"use client";

const PageCover = ({title, prevPage, nextPage}) => {
  const backgroundImageUrl = 'https://i.ibb.co/S7M5y0GS/checkout.png';

  return (
    <section
      className="bg-cover bg-center h-[250px] relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, objectFit: 'fill' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7 mt-10 md:ml-10">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none text-white">
            {title}
          </h1>
        </div>
      </div>

      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-primary text-white px-3 py-2">
        <h3>{prevPage}/{nextPage}</h3>
      </div>
    </section>
  );
};

export default PageCover;
