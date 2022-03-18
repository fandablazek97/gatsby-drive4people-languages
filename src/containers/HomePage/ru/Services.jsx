// Hooks
// import useClipboard from "hooks/useClipboard";

// Components
// import AlertCopy from "components/AlertCopy";

// Scroll reveal animations
import SlideUp from "components/scroll-reveal-animations/SlideUp";

// Icons
import {
  FaPlane,
  FaHeart,
  FaShoppingBag,
  FaGlassMartiniAlt,
  FaCompass,
  FaCar,
} from "react-icons/fa";

export default function Services() {
  // const [isCopied, setCopied] = useClipboard("info@drive4people.cz", {
  //   successDuration: 3000,
  // });
  return (
    <section id="Услуги" className="ui-wrapper py-24 md:py-48">
      <SlideUp>
        <h2 className="ui-tagline">Услуги</h2>
        <span className="ui-heading" data-heading="lg">
          Что мы можем вам предложить?
        </span>
      </SlideUp>

      <div className="mt-16 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-2">
        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaPlane className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">
              Трансфер в / из аэропорта в рамках европы
            </h3>
            <p>
              Нужен персональный трансфер в аэропорт, но вы не хотите тратить
              время на планирование поездки и парковку автомобиля в аэропорту?
              Тогда эта услуга создана именно для вас.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaShoppingBag className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Экспресс-курьер</h3>
            <p>
              Вам необходимо быстро и безопасно доставить важную посылку на
              другой конец Чехии или Европы? Мы можем оказать и такую ​​услугу.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaHeart className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Свадьбы</h3>
            <p>
              Ищете подходящий транспорт для молодоженов или гостей свадьбы? Для
              праздничных событий мы предоставим вам комфортабельный автомобиль,
              а водитель в деловом костюме будет профессионально доступен вам в
              любое время.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaGlassMartiniAlt className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Корпоративные вечеринки и торжества</h3>
            <p>
              Для корпоративных или семейных мероприятий мы обеспечиваем как
              своевременный своз гостей, так и безопасный и комфортный возврат
              прямо к двери дома.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaCompass className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">
              Персональный водитель с нашим автомобилем
            </h3>
            <p>
              У вас запланирована важная встреча и все ваше внимание должно быть
              сосредоточено на ней? Профессиональный водитель спланирует поездку
              за вас и обеспечит комфортные и безопасные перевозки по Чешской
              Республике и Европе.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaCar className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">
              Персональный водитель вашего автомобиля
            </h3>
            <p>
              Больше информации на{" "}
              <a
                href="mailto:info@drive4people.cz"
                className="ui-link text-primary"
                data-link="2"
              >
                info@drive4people.cz
              </a>
              {/* <span className="text-muted ml-2 text-xs">
                (kliknutím zkopírovat)
              </span> */}
            </p>
          </div>
        </SlideUp>
      </div>
      {/* <AlertCopy isCopied={isCopied}>E-mail zkopírován do schránky</AlertCopy> */}
    </section>
  );
}
