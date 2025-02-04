import { ProductCard } from "./components/productCard";
import image from "../../assets/images/bg1.jpeg";
import image1 from "../../assets/images/first.png";
import image2 from "../../assets/images/second.png";
import image3 from "../../assets/images/third.png";
import rectangle1 from "../../assets/images/Rectangle1.png";
import rectangle2 from "../../assets/images/Rectangle2.png";
import rectangle3 from "../../assets/images/Rectangle3.png";
import rectangle4 from "../../assets/images/Rectangle4.png";
import rectangle5 from "../../assets/images/Rectangle5.png";
import rectangle6 from "../../assets/images/Rectangle6.png";
import {
  Partners,
  PeopleTalkSession,
  SectionBorder,
  SectionHeader,
  ServiceCard,
  TopAbsoluteContainer,
  VideoContainer,
  WhyCard,
} from "./components";
import { CustomButton } from "../../components";
import { data, data2, partners, serviceData } from "./data";
export const Home = () => {
  const images = [
    { width: "w-[39%]", url: image3 },
    { width: "w-[39%]", url: image2 },
    { width: "w-[22%]", url: image1 },
  ];

  const products = [
    {
      title: "Buy",
      imageUrl: rectangle6,
      description:
        "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options.",
      btnText1: "Find a Home to Buy",
      btnText2: "Learn More",
      bg: "bg-[#fff]",
      height: "319.07px",
      align: "row",
    },
    {
      title: "Buy",
      imageUrl: rectangle5,
      description:
        "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options.",
      btnText1: "Find a Home to Buy",
      btnText2: "Learn More",
      bg: "bg-[#F9F9F0]",
      height: "319.07px",
      align: "row",
    },
    {
      title: "Buy",
      imageUrl: rectangle4,
      description:
        "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options.",
      btnText1: "Find a Home to Buy",
      btnText2: "Learn More",
      bg: "bg-[#FFFFE8]",
      height: "591px",
      align: "column",
    },
    {
      title: "Buy",
      imageUrl: rectangle3,
      description:
        "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options.",
      btnText1: "Find a Home to Buy",
      btnText2: "Learn More",
      bg: "bg-[#F9FAFB]",
      height: "591px",
      align: "column",
    },
    {
      title: "Buy",
      imageUrl: rectangle2,
      description:
        "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options.",
      btnText1: "Find a Home to Buy",
      btnText2: "Learn More",
      bg: "bg-[#F5FDFF]",
      height: "319.07px",
      align: "row",
    },
    {
      title: "Buy",
      imageUrl: rectangle1,
      description:
        "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options.",
      btnText1: "Find a Home to Buy",
      btnText2: "Learn More",
      bg: "bg-[#FFFDFA]",
      height: "319.07px",
      align: "row",
    },
  ];

  return (
    <main className="my-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-9 my-9 max-w-[819px] mx-auto px-8 relative">
        <div className="fixed right-2 bottom-2 lg:absolute  lg:top-[-2.5rem] lg:right-[-15rem] z-40">
          <TopAbsoluteContainer />
        </div>
        <div className="bg-gradient-to-r from-[#FFFFFB] via-[#F6FDF4] to-[#FFEDCB] flex items-center justify-center px-4 py-4 rounded gap-4 border-grayBorder border-solid border">
          <span className="font-bold text-xs text-primary">
            We Serve Nigerians Across the Globe
          </span>
          <div className="h-8 w-[2px] bg-grayBorder"></div>
          <span className="font-bold text-xs text-primary">
            👀 10,000 PEOPLE HAVE SEEN THIS
          </span>
        </div>
        <h1 className="text-5xl text-center font-bold font-custom leading-[68px]">
          Find a Home to Buy In Nigeria On Various Purchase Plans.
        </h1>
        <p className="text-center leading-9 px-8">
          We have taken real estate beyond
          <span className="border-solid border-black border-b-[2px]">
            mere listings
          </span>
          . Conduct secure real estate transactions on our platform trusted by
          more than{" "}
          <span className="font-bold">4,000 customers, and 30+ companies</span>
        </p>
        <CustomButton
          isRightIconVisible={true}
          variant="primary"
          className="flex items-center text-sm gap-4 px-4"
          children={"Explore Our Products"}
        />
      </div>
      <div className="block lg:flex items-center gap-6 max-w-[1187px] mx-auto px-4 lg:px-[126px]">
        {images.map((item, index) => (
          <div
            key={index}
            className={`h-[286px] w-full lg:${item.width}  rounded-[16px]`}
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </div>

      <div className="flex items-center gap-8 py-10 mt-20">
        <SectionBorder>
          {/* Product section */}
          <SectionHeader
            title="Products"
            description="Get started with one of our carefully crafted products & services."
          />
          <div className="max-w-[1226px] mx-4 lg:mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {products.map((item, index) => (
                <ProductCard
                  key={index}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  btnText1={item.btnText1}
                  bg={item.bg}
                  height={item.height}
                  align={item.align}
                />
              ))}
            </div>
          </div>

          {/* Partners section */}
          <div className="mt-[160px] min-w-screen-xl mx-auto">
            <SectionHeader
              title="Our Partners"
              description="Organizations we’ve partnered with to make real estate in Nigeria a pleasant experience for all."
            />
            <div className="overflow-x-scroll  scrollbar-hide">
              <div className="flex gap-4 mx-auto  justify-center min-w-[1270px]">
                {data.map((text, index) => (
                  <div>
                    <CustomButton
                      className={``}
                      size="sm"
                      isRightIconVisible={false}
                      variant={index === 0 ? "primary" : "outline"}
                      children={
                        <div className="flex items-center gap-4 px-4">
                          {text}
                        </div>
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Partners */}
            <div className="overflow-x-scroll scrollbar-hide">
              <div className="min-w-[1270px]  w-full mx-auto flex itemx-center justify-center gap-10 mt-10">
                {partners.map((partner) => (
                  <Partners />
                ))}
              </div>
            </div>

            <h1 className="text-gray text-center font-bold text-4xl py-10">
              Over 50 Partners
            </h1>

            <div className="flex items-center justify-center">
              <CustomButton
                isRightIconVisible={true}
                variant="primary"
                className="flex items-center text-sm gap-4 px-4"
                children={"View All Partners"}
              />
            </div>
          </div>
        </SectionBorder>
      </div>
      <SectionBorder>
        <SectionHeader
          title="Why Giddaa?"
          description="Reasons why you should embark on your real estate journey with us, and our products."
        />
        {/* Why section */}
        <div className="overflow-x-scroll scrollbar-hide">
          <div className="flex justify-center items-center gap-4 mx-auto w-[955px] overflow-x-scroll-scroll  ">
            {data2.map((text) => (
              <div>
                <CustomButton
                  size="sm"
                  isRightIconVisible={false}
                  variant="outline"
                  children={
                    <div className="flex items-center gap-4 px-4">{text}</div>
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 max-w-[1187px] mx-4 lg:mx-auto">
          <WhyCard />
          <WhyCard />
          <WhyCard />
        </div>
        {/* People talk */}
        <div>
          <SectionHeader
            title="People Talk"
            description="What our customers and partners think about us."
          />
          <div className="overflow-x-scroll scrollbar-hide mb-8 w-full">
            <div className="flex justify-center items-center gap-4 mx-auto w-[955px] overflow-x-scroll-scroll  ">
              {" "}
              {data2.map((text) => (
                <div>
                  <CustomButton
                    size="sm"
                    isRightIconVisible={false}
                    variant="outline"
                    children={
                      <div className="flex items-center gap-4 px-4">{text}</div>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="h-[590px]  max-w-[1187px] mx-auto">
            <PeopleTalkSession />
          </div>
        </div>
        {/* Know more to talk about */}
        <div>
          <SectionHeader
            title="Know More About Us"
            description="From our teams lips to your ears —  let’s tell you about Giddaa. "
          />
          <div className="flex gap-4 max-w-[1187px] mx-auto overflow-x-scroll-scroll justify-center mb-8"></div>
          <div className="rounded-3xl overflow-hidden max-w-[1187px] mx-auto">
            <VideoContainer height="585px" />
          </div>
        </div>
      </SectionBorder>

      <SectionBorder className="mt-10 ">
        <SectionHeader
          title="Get Started"
          description="Made it this far? What are you waiting for? Get started with one of our products today!."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1187px] mx-4 lg:mx-auto">
          {serviceData.map((service) => (
            <ServiceCard {...service} />
          ))}
        </div>
      </SectionBorder>
    </main>
  );
};
