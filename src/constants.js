import { facebook, twitter } from "./assets/icons";
import { chrome, firefox, opera, tab1, tab2, tab3 } from "./assets/images";


const featureLinks = ["simple bookmarking", "speedy searching", "easy sharing"];

const features = [
  {
    name: "simple bookmarking",
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites. ",
    link: "#",
    img: tab1,
  },
  {
    name: "speedy searching",
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.",
    link: "#",
    img: tab2,
  },
  {
    name: "easy sharing",
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "#",
    img: tab3,
  },
];

const extensions = [
  {
    title: "Add to Chrome",
    desc: "Minimum version 62",
    img: chrome,
    link: "#",
    order: 1,
  },
  {
    title: "Add to Firefox",
    desc: "Minimum version 55",
    img: firefox,
    link: "#",
    order: 2,
  },
  {
    title: " Add to Opera",
    desc: "Minimum version 46",
    img: opera,
    link: "#",
    order: 3,
  },
];

const questions = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const footerLinks = [{link: "Features", url:"#"}, {link:"Pricing", url:"#"}, {link:"Contact", url:"#"}];

const socialLinks = [
  {name:"facebook", img:facebook, url:"#"},
  {name:"twitter",img: twitter, url:"#"},
]

const headerLinks = [
  {name:"Features" , url:"#"},
  {name:"Pricing" , url:"#"},
  {name:"Contact" , url:"#"},
  

]
export { features, featureLinks, extensions, questions, footerLinks, socialLinks, headerLinks };
