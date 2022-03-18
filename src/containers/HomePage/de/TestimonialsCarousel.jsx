// Swiper
import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Components
import Badge from "components/ui/Badge";

// Star icon
import { FaStar } from "react-icons/fa";

export default function TestimonialsCarousel() {
  SwiperCore.use([Pagination, Autoplay, A11y]);

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="h-auto items-center"
      loop="true"
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide className="rounded-default bg-body-300 mb-12 flex flex-col items-center justify-center overflow-hidden bg-opacity-80 py-10 px-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 p-2 text-xl text-white">
          J
        </div>
        <span className="block font-bold">Jan Hrubeš</span>
        <div className="mt-2 flex space-x-1">
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
        </div>
        <div className="mt-4 mb-5 flex space-x-2">
          <Badge>Value</Badge>
          <Badge>Professionalism</Badge>
        </div>
        <p className="text-sm">
          Great deal, speed, reliability, professionalism, high quality 💯 we
          were very satisfied, thanks 👏👍
        </p>
      </SwiperSlide>

      <SwiperSlide className="rounded-default bg-body-300 mb-12 flex flex-col items-center justify-center overflow-hidden bg-opacity-80 py-10 px-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 p-2 text-xl text-white">
          K
        </div>
        <span className="block font-bold">Kateřina Juránková</span>
        <div className="mt-2 flex space-x-1">
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
        </div>
        <div className="mt-4 mb-5 flex space-x-2">
          <Badge>Punctuality</Badge>
          <Badge>Quality</Badge>
          <Badge>Professionalism</Badge>
        </div>
        <p className="text-sm">
          Perfect professional ride, perfect cleanliness of the interior, very
          pleasant performance, reliability, 100% service as it should be and
          like bonus, very nice and handsome young man ...
        </p>
      </SwiperSlide>

      <SwiperSlide className="rounded-default bg-body-300 mb-12 flex flex-col items-center justify-center overflow-hidden bg-opacity-80 py-10 px-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 p-2 text-xl text-white">
          A
        </div>
        <span className="block font-bold">Alexandr Kučera</span>
        <div className="mt-2 flex space-x-1">
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
        </div>
        <div className="mt-4 mb-5 flex space-x-2">
          <Badge>Punctuality</Badge>
          <Badge>Professionalism</Badge>
        </div>
        <p className="text-sm">
          Great professional approach and always a good mood. Drive4people I can
          only recommend.
        </p>
      </SwiperSlide>

      <SwiperSlide className="rounded-default bg-body-300 mb-12 flex flex-col items-center justify-center overflow-hidden bg-opacity-80 py-10 px-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 p-2 text-xl text-white">
          M
        </div>
        <span className="block font-bold">Marek Sahula</span>
        <div className="mt-2 flex space-x-1">
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
        </div>
        <div className="mt-4 mb-5 flex space-x-2">
          <Badge>Punctuality</Badge>
          <Badge>Professionalism</Badge>
        </div>
        <p className="text-sm">
          Excellent and professional approach. The driver arrived on time, he
          was smiling and very nice all the time. This company can only
          recommend.
        </p>
      </SwiperSlide>

      <SwiperSlide className="rounded-default bg-body-300 mb-12 flex flex-col items-center justify-center overflow-hidden bg-opacity-80 py-10 px-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 p-2 text-xl text-white">
          J
        </div>
        <span className="block font-bold">Jiří Sandanus</span>
        <div className="mt-2 flex space-x-1">
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
        </div>
        <div className="mt-4 mb-5 flex space-x-2">
          <Badge>Punctuality</Badge>
          <Badge>Quality</Badge>
          <Badge>Professionalism</Badge>
        </div>
        <p className="text-sm">
          The service was amazing, everything went to our complete satisfaction.
          I can just recommend to everyone.
        </p>
      </SwiperSlide>

      <SwiperSlide className="rounded-default bg-body-300 mb-12 flex flex-col items-center justify-center overflow-hidden bg-opacity-80 py-10 px-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 p-2 text-xl text-white">
          T
        </div>
        <span className="block font-bold">Tobiáš bartoš</span>
        <div className="mt-2 flex space-x-1">
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
        </div>
        <div className="mt-4 mb-5 flex space-x-2">
          <Badge>Punctuality</Badge>
          <Badge>Professionalism</Badge>
        </div>
        <p className="text-sm">
          From the first meeting Absolute professionalism !. Mr. Luke is Very
          pleasant and reliable. Quality representation of the company. More
          like that Professional drivers.
        </p>
      </SwiperSlide>

      <SwiperSlide className="rounded-default bg-body-300 mb-12 flex flex-col items-center justify-center overflow-hidden bg-opacity-80 py-10 px-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 p-2 text-xl text-white">
          L
        </div>
        <span className="block font-bold">Lukáš Kousal</span>
        <div className="mt-2 flex space-x-1">
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
        </div>
        <div className="mt-4 mb-5 flex space-x-2">
          <Badge>Punctuality</Badge>
          <Badge>Quality</Badge>
          <Badge>Professionalism</Badge>
        </div>
        <p className="text-sm">
          (Translated by google) <br /> I go to this company regularly. AND I am
          always satisfied with the accuracy. They always meet me in all demands
          and sudden changes. I can only recommend!
        </p>
      </SwiperSlide>

      <SwiperSlide className="rounded-default bg-body-300 mb-12 flex flex-col items-center justify-center overflow-hidden bg-opacity-80 py-10 px-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 p-2 text-xl text-white">
          H
        </div>
        <span className="block font-bold">Hana Bluchová</span>
        <div className="mt-2 flex space-x-1">
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
          <FaStar className="text-sm text-yellow-400" />
        </div>
        <div className="mt-4 mb-5 flex space-x-2">
          <Badge>Punctuality</Badge>
          <Badge>Quality</Badge>
          <Badge>Professionalism</Badge>
        </div>
        <p className="text-sm">
          Great satisfaction, the ride was without problems, reliability,
          professional.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
