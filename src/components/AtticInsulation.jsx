const AtticInsulation = () => {
  return (
    <section id="attic-insulation" className="w-10/12 mx-auto">
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold pt-10">
        Attic Insulation!
      </h1>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 content-none mx-auto h-1 mt-4 bg-black/70"></div>
      <img
        src="./main.webp"
        alt="Main"
        className="h-80 w-96 mx-auto mt-10 object-cover rounded-lg shadow-lg"
      />
      <p className="text-black/70 mt-10 mb-10">
        Customers can trust us with the cleaning and sanitizing of their air
        ducts. We have the products and tools to eliminate harmful particles
        such as dust, dirt, allergens, germs, etc. We can keep your vents
        pristine.
      </p>
    </section>
  );
};

export default AtticInsulation;
