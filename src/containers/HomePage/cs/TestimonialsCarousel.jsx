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
          <Badge>Hodnota</Badge>
          <Badge>Profesionalita</Badge>
        </div>
        <p className="text-sm">
          Skvělá domluva, rychlost, spolehlivost, profesionalita, vysoká kvalita
          💯 byli jsme velmi spokojeni, díky 👏👍
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
          <Badge>Dochvilnost</Badge>
          <Badge>Kvalita</Badge>
          <Badge>Profesionalita</Badge>
        </div>
        <p className="text-sm">
          Dokonala profi jizda, dokonala cistota interieru, velmi prijemne
          vystupovani, spolehlivost, stoprocentni servis jak ma byt a jako
          bonus, velmi sympaticky a pohledny mlady muz...
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
          <Badge>Dochvilnost</Badge>
          <Badge>Profesionalita</Badge>
        </div>
        <p className="text-sm">
          Skvělý profesionální přístup a vždy dobrá nálada. Drive4people můžu
          jedině doporučit.
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
          <Badge>Dochvilnost</Badge>
          <Badge>Profesionalita</Badge>
        </div>
        <p className="text-sm">
          Výborný a profesionální přístup. Pan řidič přijel na domluvený čas,
          byl usměvavý a po celou dobu velmi příjemný. Tuto společnost lze
          jedině doporučit.
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
          <Badge>Dochvilnost</Badge>
          <Badge>Kvalita</Badge>
          <Badge>Profesionalita</Badge>
        </div>
        <p className="text-sm">
          Služba byla úžasná, vše proběhlo k naší naprosté spokojenosti. Mohu
          všem jen doporučit.
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
          <Badge>Dochvilnost</Badge>
          <Badge>Profesionalita</Badge>
        </div>
        <p className="text-sm">
          Od prvního setkání Naprostá profesionalita!. Pan Lukáš je Velice
          příjemný a spolehlivý. Kvalitni repretentace firmy. Takových více
          Profi řidičů. Kodlova
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
          <Badge>Dochvilnost</Badge>
          <Badge>Kvalita</Badge>
          <Badge>Profesionalita</Badge>
        </div>
        <p className="text-sm">
          (Přeloženo Googlem) <br /> Pravidelně chodím do této společnosti. A
          jsem vždy spokojen s přesností. Vždy mě potkávají ve všech požadavcích
          a náhlých změnách. Mohu jen DOPORUČIT!
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
          <Badge>Dochvilnost</Badge>
          <Badge>Kvalita</Badge>
          <Badge>Profesionalita</Badge>
        </div>
        <p className="text-sm">
          Velká spokojenost, jízda byla bez problémů, spolehlivost,
          profesionální.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
