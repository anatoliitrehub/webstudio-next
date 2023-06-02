import Image from "next/image";
import image1 from "../public/images/imgbox1.jpg";
import image2 from "../public/images/imgbox2.jpg";
import image3 from "../public/images/imgbox3.jpg";

const Employments = () => {
  return (
    <section className="employments">
      <div className="container">
        <h2 className="employments__title">Чим ми займаємося</h2>
        <ul className="employments__list">
          <li className="employments__item">
            <div className="employments__skin">
              <Image src={image1} alt="веб додатки" width={370} height={370} />
              <div className="employments__label">
                <p className="employments__text">Десктопні додатки</p>
              </div>
            </div>
          </li>
          <li className="employments__item">
            <div className="employments__skin">
              <Image
                src={image2}
                alt="мобільні додатки"
                width={370}
                height={370}
              />
              <div className="employments__label">
                <p className="employments__text">Мобільні додатки</p>
              </div>
            </div>
          </li>
          <li className="employments__item">
            <div className="employments__skin">
              <Image
                src={image3}
                alt="дизайнерські рішення"
                width={370}
                height={370}
              />
              <div className="employments__label">
                <p className="employments__text">Дизайнерські рішення</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Employments;
