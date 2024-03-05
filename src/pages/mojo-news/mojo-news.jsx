import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import news5 from "../../assets/news5.png";
import news6 from "../../assets/news6.png";
import news7 from "../../assets/news7.png";
import news8 from "../../assets/news8.png";
import news9 from "../../assets/news9.png";
import news10 from "../../assets/news10.png";
import news11 from "../../assets/news11.jpg";
import news12 from "../../assets/news12.jpg";
import Header from "../../components/header/header.component";
import Tagline from "../../components/tagline/tagline.component";
import Footer from "../../components/footer/footer.component";
import Message from "../../components/message/message.component";

import "./mojo-news.styles.scss";
import Heading from "../../atoms/heading/heading.component";
const news = [
  {
    image: news1,
    title: "Understanding and Optimizing Your Website’s Conversion Funnel",
    description:
      "Your website’s conversion funnel plays a crucial part for sales. The better your conversion funnel, the more visitors you can expect to convert into paying",
  },
  {
    image: news2,
    title: "What Is an SEO-Friendly Website and Why Does It Matter?",
    description:
      "In today’s digital world, a website is a vital tool for any business or organization. However, having a website is not enough – it needs",
  },
  {
    image: news3,
    title:
      "Google Analytics: Understanding Them for Better Website Performance",
    description:
      "Google analytics is an excellent reporting tool that can help you improve the performance of your pages, traffic sources (social media, paid ads, SEO, etc.),",
  },
  {
    image: news4,
    title: "How to Develop a Successful Mobile App",
    description:
      "Successful mobile app development is not easy. The market is highly competitive and some research suggests that there is less than 0.01 percent chance of success.",
  },
  {
    image: news5,
    title: "3 Ways to Rank Higher on Google",
    description:
      "Based on documents filed in December 2022, the Census Bureau is expecting over 30,000 new businesses to enter the arena. With competition for current business",
  },
  {
    image: news6,
    title: "How to Future-Proof Your Website",
    description:
      "The intangible and immersive world we call the metaverse is constantly evolving. In doing so, it can easily make websites, at the very least, perform poorly",
  },
  {
    image: news7,
    title:
      "Key Reasons You’re Struggling to Get Noticed by Potential Customers",
    description:
      "It’s been a while since you started a website but it’s not getting much traffic or influencing sales. Instead, it’s lost amongst the myriad of",
  },
  {
    image: news8,
    title: "App Development Success Stories That Prove You Need an App",
    description:
      "What is a mobile app and why do you need one? Mobile app development companies create software for businesses that can be viewed on a smartphone.",
  },
  {
    image: news9,
    title: "YMYL in SEO for E-commerce",
    description:
      "What is YMYL and why is it important? It may sound like the latest designer on the block, but in reality, it’s tech-jargon that web",
  },
  {
    image: news10,
    title: "The Biggest Changes in SEO in 2023",
    description:
      "The internet is evolving everyday. With 92% of internet users on social media, it’s becoming incredibly important to keep shared information within certain parameters pertaining",
  },
  {
    image: news11,
    title: "The Biggest Changes in SEO in 2023",
    description:
      "(213) 838-MOJO | (0155) Why You Too Should Care About SEO As the world switches to online platforms following the pandemic, all brick-and-mortar businesses are",
  },
  {
    image: news12,
    title: "The Biggest Changes in SEO in 2023",
    description:
      "(213) 838-MOJO | (0155) How to Create A Winning Website in 2023 Every day more than half a million websites pop up online.",
  },
];
export default function Mojonews() {
  return (
    <div>
      <main className={"news-main"}>
        <Header />
        <Heading title="Mojo News" />

        <div className={"newsContainer"}>
          {news.map((item, index) => (
            <div className={"news"} key={index}>
              <div className="imageContainer">
                <img src={item.image} alt="logo" />
              </div>

              <div className="contentContainer">
                <div className={"title"}>{item.title}</div>
                <div className={"description"}>{item.description}</div>
                <div className={"link"}>SEE MORE</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Message />
      <Tagline />
      <Footer />
    </div>
  );
}
