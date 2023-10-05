const FeatureLink = ({ handleClick, featureName, activeFeatureName }) => {
  return (
    <span
      onClick={() => handleClick(featureName)}
      className={` p-4 max-md:px-[0rem] ${
        featureName === activeFeatureName ? "text-black border-b-2 border-red-500" : "text-grayish-blue"
      }`}
    >
      {featureName}
    </span>
  );
};
export default FeatureLink;
