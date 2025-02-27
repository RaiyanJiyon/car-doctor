"use client";

const PageCover = ({ title, prevPage, nextPage }) => {
  const backgroundImageUrl = 'https://i.ibb.co/S7M5y0GS/checkout.png';

  return (
    <section
      className="bg-cover bg-center h-[200px] relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, objectFit: 'fill' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="flex flex-col justify-center items-start h-full px-4 py-8 max-w-screen-xl mx-auto relative z-10 mt-10 md:ml-10">
        <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none text-white">
          {title}
        </h1>
      </div>

      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-primary text-white px-3 py-2 rounded">
        <h3>{prevPage}/{nextPage}</h3>
      </div>
    </section>
  );
};

export default PageCover;
