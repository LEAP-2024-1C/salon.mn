import Image from "next/image";


const OurServices = () => {
  return (
    <div className="bg-[#101828] text-white font-serif">
      
     <div className="flex flex-col md:flex-row lg:justify-between items-center max-w-[1200px] mx-auto   ">
          <Image
            className="mt-5 ml-4 md:ml-0 lg:ml-6"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/brand_promo.png"
            width={120}
            height={120}
            alt="Picture of the author"
          />  
          <div className="pt-12 pl-5 md:pl-0 lg:px-8 flex flex-col justify-center text-center md:text-left lg:max-w-[500px]">
            <p className="font-semibold text-xl md:text-xl lg:text-4xl ">Бидний үйлчилгээ</p>
            <p className="mt-4 w-80 md:w-full lg:w-[450px] text-base lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              itaque voluptatibus rerum laudantium neque sit?
            </p>
          </div>

          <Image
            className="mt-5 mr-4 md:mr-0 lg:mr-6"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/fashion-barber-with-mustache-dressed-in-a-black-sh-NT3C8MP_isolated.png"
            width={400}
            height={300}
            alt="barber"
          />
        </div>


        <div className="block  md:text-xl lg:text-2xl  lg:text-center animate-fadeInUp2 ">
            <p className="text-center lg:text-center lg:text-4xl lg:pt-10 ">
              Enhance your masculine through elegant hairstyle with us
            </p>
             <p className="text-center  md:max-w-[300px] lg:max-w-[900px] mx-auto pt-3">
              Dolor rhoncus, massa sit semper sit viverra eget mauris. Lacus faucibus gravida sit ut cursus consectetur auctor leo. Hac ut sit nisl diam venenatis platea.
            </p>
       </div>

       <div className="block  md:text-xl lg:text-2xl  lg:text-center lg:py-6 animate-fadeInUp3 ">
            <p className="text-center lg:text-center lg:text-4xl lg:pt-4 ">
              Үнэ & Үйлчилгээ
            </p>
             <p className="text-center  md:max-w-[300px] lg:max-w-[900px] mx-auto pt-3">
              Dolor rhoncus, massa sit semper sit viverra eget mauris. Lacus faucibus gravida sit ut cursus consectetur auctor leo. Hac ut sit nisl diam venenatis platea.
            </p>
       </div>


      

      <div className="block  md:flex md:justify-between md:items-center md:text-xl gap-5 lg:max-w-[1200px] lg:mx-auto animate-fadeInUp4  ">
        <Image
          className="rounded-xl "
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

      <div className="block  md:flex md:justify-between md:items-center md:text-xl md:gap-2 lg:max-w-[1200px] lg:mx-auto lg:py-8 animate-fadeInUp5 ">
        <div className="w-[300px] h-[500px] bg-[#ECE8DE] border-2   border-red-300 rounded-xl">
          {/* <Image
            className="mx-auto mt-5"
            src="https://gentlecut.dropletthemes.com/wp-content/uploads/2018/12/Head-Icon-1-66x102.png"
            width={66}
            height={102}
            alt="barber"
          /> */}
          <p className="text-center text-2xl text-red-600">Эрэгтэй</p>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Засалт</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">50000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Улаар хусах</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">30000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Хүүхэд</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">40000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Хими</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">80000₮</p>
          </div>
        </div>

        <div className="w-[300px] h-[500px] bg-[#ECE8DE] border border-gray-300 rounded-xl">
          {/* <Image
            className="mx-auto mt-5 object-cover overflow-hidden "
            src="https://files.oaiusercontent.com/file-Y8gXqIHzNfNxl3Ec5hgppRiX?se=2024-10-28T12%3A20%3A50Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df01ace71-0610-4179-b4c7-5e4a828f1ad6.webp&sig=Sb/BRS3DiFvNplEuiGIrYItSxWS0cEQ5MlZoDNAi8wI%3D"
            width={66}
            height={102}
            alt="barber"
          /> */}
          <p className="text-center text-2xl text-red-600">Эмэгтэй</p>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Тайралт</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">50000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Хүүхэд</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">40000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Сэнс, Индүү</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">40000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Ороолт</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">50000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Гоёлын засалт</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">60000₮-100000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Сүлжээс</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">60000₮-100000₮</p>
          </div>
        </div>

        <div className="w-[300px] h-[500px] bg-[#ECE8DE] border border-gray-300 rounded-xl">
          <p className="text-center text-2xl text-red-600">Гоо сайхан </p>

          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Усан массаж </p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">50000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Тосон массаж</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">30000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Хими арчих</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">40000₮</p>
          </div>
          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4">
            <p className="font-semibold text-black">Сормуус суулгах</p>
            <div className="flex-grow mx-2 border-b-2 border-dotted  border-red-400 pt-2"></div>
            <p className="text-[#F63D68]">70000₮</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-4xl text-center">Our tools set</p>
        <div className="flex gap-3 my-8 ml-4">
          <div>
            <Image
              className="overflow-hidden"
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/hair-nose-ear-and-shaving-wireless-clipper-2021-08-26-16-25-43-utc_isolated.png"
              width={240}
              height={300}
              alt="Picture of the author"
            />
            <p className="text-2xl w-80">
              Package Hair Cutting Machine by Barber 97 Aliquet blandit eget
              dolor.
            </p>
          </div>
          <div>
            <Image
              className="overflow-hidden"
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/professional-haircutting-scissors-isolated-2021-08-26-17-07-22-utc_isolated.png"
              width={240}
              height={150}
              alt="Picture of the author"
            />
            <p className="text-2xl w-80">
              Package Hair Cutting Machine by Barber 97 Aliquet blandit eget
              dolor.
            </p>
          </div>
          <div>
            <Image
              className="overflow-hidden"
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/hairclipper-on-white-background-2021-08-26-18-17-31-utc_isolated.png"
              width={240}
              height={150}
              alt="Picture of the author"
            />
            <p className="text-2xl w-80">
              Package Hair Cutting Machine by Barber 97 Aliquet blandit eget
              dolor.
            </p>
          </div>
          <div>
            <Image
              className="overflow-hidden"
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/hairdresser-tool-set-in-open-bag-2021-09-03-21-13-00-utc_isolated.png"
              width={240}
              height={300}
              alt="Picture of the author"
            />
            <p className="text-2xl w-80">
              Package Hair Cutting Machine by Barber 97 Aliquet blandit eget
              dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
