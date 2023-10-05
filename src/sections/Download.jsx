import ExtensionCard from "../components/ExtensionCard";
import { extensions } from "../constants";

const Download = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="text-3xl font-medium">Download the extension</h2>
        <p className="max-w-lg text-center py-8 text-grayish-blue">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="flex max-md:flex-col gap-8 ">
        {extensions.map((ext) => (
          <ExtensionCard key={ext.title} {...ext}  />
        ))}
      </div>
    </div>
  );
};
export default Download;
