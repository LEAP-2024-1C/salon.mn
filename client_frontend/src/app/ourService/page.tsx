import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[#101828] text-white font-serif">
      <div className="flex justify-evenly items-start px-14 max-w-[1400px] mx-auto pt-14  ">
        <Image
          className="mt-5 ml-4"
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/brand_promo.png"
          width={120}
          height={120}
          alt="Picture of the author"
        />

        <div className="pt-12 pl-5 flex flex-col justify-center">
          <p className="text-4xl font-semibold">Бидний үйлчилгээ</p>
          <p className="mt-4 w-80 text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            itaque voluptatibus rerum laudantium neque sit?
          </p>
        </div>

        <Image
          className="mt-5 mr-4"
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/fashion-barber-with-mustache-dressed-in-a-black-sh-NT3C8MP_isolated.png"
          width={400}
          height={300}
          alt="barber"
        />
      </div>

      <div className="pt-20 max-w-[1400px] mx-auto">
        <p className="text-center text-4xl">
          Enhance your masculine through elegant hairstyle with us
        </p>
        <p className="w-[1500px] text-center">
          Dolor rhoncus, massa sit semper sit viverra eget mauris. Lacus
          faucibus gravida sit ut cursus consectetur auctor leo. Hac ut sit nisl
          diam venenatis platea.
        </p>
      </div>
      <div className="pt-20 max-w-[1500px] mx-auto">
        <p className="text-4xl text-center">Үнэ & Үйлчилгээ</p>
        <p className="w-[1500px] text-center">
          Tortor neque mi sagittis eleifend donec lectus velit, viverra. Nibh at
          nibh dolor tristique ut erat elementum. Facilisis proin semper
          tristique cidunt imperdiet velit strum donec a a in ut.
        </p>
      </div>

      <div className="flex pt-20 gap-5 max-w-[1400px] mx-auto ">
        <Image
          className="rounded-xl ml-5"
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/handsome-bearded-man-is-getting-hairstyle-by-haird-2021-08-29-12-16-08-utc-putt7dmiry94jicwknon1xmj49cfnbrfabmxclo9o0.jpg"
          width={310}
          height={250}
          alt="Picture of the author"
        />
        <Image
          className="rounded-xl"
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/barbershop-theme-2021-08-31-15-22-34-utc-puttahhbd8i8x3uffi18snedt4143b3hdp9pgj2f3k.jpg"
          width={310}
          height={250}
          alt="Picture of the author"
        />
        <Image
          className="rounded-xl"
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/barbershop-theme-2021-08-31-15-23-16-utc-puttcgx1sn81fgynucww25deye90caz2ziulxk4hyo.jpg"
          width={310}
          height={250}
          alt="Picture of the author"
        />
        <Image
          className="rounded-xl"
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/male-hairdressers-advising-customer-on-hairstyle-i-2022-03-04-01-51-32-utc-puttdn7sc6txxx97zd73ocp5oqgiyon05c7gj0ds6o.jpg"
          width={310}
          height={250}
          alt="Picture of the author"
        />
      </div>

      <div>
        <p className="text-3xl text-center py-5">Эрэгтэй үс засалт</p>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Засалт</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>50000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Улаар хусах</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>30000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Хүүхэд</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>40000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Хими</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>80000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Сахал засах</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>30000₮</p>
        </div>
        <p className="text-3xl text-center py-5">Эмэгтэй үс засалт</p>

        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Тайралт</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>50000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Хүүхэд</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>40000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Сэнс, Индүү</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>40000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Ороолт</p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>50000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Гоёлын засалт </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>60000₮-100000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Сүлжээс </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>60000₮-100000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Маникьюр </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>100000₮-150000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Хими дижитал </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>150000₮-250000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Хими арчих </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>80000₮</p>
        </div>

        <p className="text-3xl text-center py-5">Гоо сайхан</p>

        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Усан массаж </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>70000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Тосон массаж </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>60000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Хими арчих </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>80000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Батганы эмчилгээ </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>45000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Нүүр будалт энгийн </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>40000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Сормуус суулгах </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>70000₮</p>
        </div>

        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Нүүр будалт гоёлын </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>50000₮</p>
        </div>

        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Сормуус нөхөлт </p>
          <div className="flex-grow mx-4 border-b-4 border-dotted border-gray-400"></div>
          <p>55000₮</p>
        </div>
        <div className="flex justify-between max-w-[1500px] mx-auto px-8 md:px-20 text-3xl">
          <p className="text-[#F63D68]">Сормуус наах</p>
          <div className="flex-grow mx-4 border-b-4 gap-1 border-dotted border-gray-400"></div>

          <p>8000₮</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
