import { useState } from "react";
import FeatureLink from "../components/FeatureLink";
import { featureLinks } from "../constants";
import FeatureShowcase from "../components/FeatureShowcase";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(featureLinks[0]);
  return (
    <section className="flex justify-center items-center flex-col  mt-40 mb-12 ">
      <div className="text-center">
        <h2 className="text-3xl font-medium">Features</h2>
        <p className="py-8 text-grayish-blue   text-center max-w-lg ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex justify-around items-center max-md:flex-col  w-3/4  md:border-b-[.09rem]">
        {featureLinks.map((feature) => {
          return (
            <FeatureLink
              key={feature}
              featureName={feature}
              activeFeatureName={activeFeature}
              handleClick={(arg) => setActiveFeature(arg)}
            />
          );
        })}
      </div>
      <FeatureShowcase activeFeature={activeFeature} />
    </section>
  );
};
export default Features;
