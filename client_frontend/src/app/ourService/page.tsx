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
      <div>
        <div
          className="mt-5 mr-4 bg-image"
          style={{
            backgroundImage:
              "url('https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/young-handsome-man-with-blond-hair-wearing-gray-sh-2021-08-27-18-01-56-utc-e1663293082778-putr6cjso5hb5chtk3uf2x383651o3yxf4c37o8r9c.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "360px",
            height: "480px",
          }}
        ></div>
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

      <div className=" flex justify-between max-w-[1400px] mx-auto my-16">
        <div className="w-[300px] h-[500px] bg-[#ECE8DE] border border-gray-300 rounded-xl">
          <Image
            className="mx-auto mt-5"
            src="https://gentlecut.dropletthemes.com/wp-content/uploads/2018/12/Head-Icon-1-66x102.png"
            width={66}
            height={102}
            alt="barber"
          />
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
          <Image
            className="mx-auto mt-5 object-cover overflow-hidden "
            src="https://files.oaiusercontent.com/file-eo54AuJ1cQbV12idYY99hMZG?se=2024-10-28T03%3A38%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4a85fbea-73ed-420f-9b51-52c9db328fff.webp&sig=JgjZGqLMS6N3YXUlYUQHew/K0L1ceuWzLTtCXtTbCEM%3D"
            width={66}
            height={102}
            alt="barber"
          />
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
          <Image
            className="mx-auto mt-5 object-cover overflow-hidden  "
            src="https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={76}
            height={102}
            alt="barber"
          />
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
    </div>
  );
};

export default OurServices;
