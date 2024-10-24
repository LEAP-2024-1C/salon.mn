import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[#101828] text-white">
      <div>
        <p className="text-2xl">Бидний үйлчилгээ</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          itaque voluptatibus rerum laudantium neque sit?
        </p>
        <p>Гоо сайхан</p>
        <p>Үсний эмчилгээ</p>
        <p>Үс засалт</p>
        <p>Waxing</p>
        {/* <Image
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/brand_promo.png"
          width={500}
          height={500}
          alt="barber"
        /> */}
      </div>
      <div>
        <p> Service & Price</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Эрэгтэй үс засалт</p>
        <div className="flex justify-between">
          <p className="">Засалт</p>
          <p>50000₮</p>
        </div>
        <div className="flex justify-between">
          <p>Улаар хусах</p>
          <p>30000₮</p>
        </div>

        <div className="flex justify-between">
          <p>Хүүхэд</p>
          <p>40000₮</p>
        </div>
        <div className="flex justify-between">
          <p>Будаг </p>
          <p>30000₮</p>
        </div>
        <div className="flex justify-between">
          <p>Хими</p>
          <p>50000₮</p>
        </div>

        <p>Эмэгтэй үс засалт</p>
        <div className="flex justify-between">
          <p>Тайралт</p>
          <p>50000₮</p>
        </div>
        <div className="flex justify-between">
          <p>Хүүхэд</p>
          <p>40000₮</p>
        </div>

        <div className="flex justify-between">
          <p>Сэнс & Индүү</p>
          <p>40000₮</p>
        </div>
        <div className="flex justify-between">
          <p>Ороолт</p>
          <p>30000₮</p>
        </div>
        <div className="flex justify-between">
          <p>Гоёлын засалт</p>
          <p>60000₮-100000₮</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
