import { heroBg } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full">
        <img src={heroBg} alt="Hero background"
        className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
};

export default Hero;