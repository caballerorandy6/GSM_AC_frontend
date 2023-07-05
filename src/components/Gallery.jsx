import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <section
      id="gallery"
      className="embla w-full mx-auto text-center"
      ref={emblaRef}
    >
      <div className="embla__container w-full md:w-6/12 lg:w-4/12 mt-2 mb-14 items-center gap-8">
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./main.webp"
            alt="Car 1"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./guys.webp"
            alt="Contact Image"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./car1.webp"
            alt="Car 1"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./worker.webp"
            alt="Worker"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./worker1.webp"
            alt="Worker 1"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./worker2.webp"
            alt="Worker 2"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./worker3.webp"
            alt="Worker 3"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./worker4.webp"
            alt="Worker 4"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./worker6.webp"
            alt="Worker 6"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./worker7.webp"
            alt="Worker 7"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="embla__slide p-8 shadow-lg rounded-lg">
          <img
            src="./about-people.webp"
            alt="Worker 2"
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
