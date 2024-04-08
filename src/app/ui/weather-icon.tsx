


import Image, { StaticImageData } from "next/image";

// all our provided icons
import sunnyClearIcon from "../assets/weather-icons/sunny-clear.png";
import sunnyCloudyIcon from "../assets/weather-icons/sunny-cloudy.png";
import cloudyIcon from "../assets/weather-icons/cloudy.png";
import rainIcon from "../assets/weather-icons/rain.png";
import rainHeavyIcon from "../assets/weather-icons/rain-heavy.png";
import snowIcon from "../assets/weather-icons/snow.png";
import thunderIcon from "../assets/weather-icons/thunder.png";

type WeatherIcon = {
    id: number;
    src: StaticImageData;
    alt: string;
};

const icons = [
    { id: 800, src: sunnyClearIcon, alt: "Sunny clear" },
    { id: 801, src: sunnyCloudyIcon, alt: "Sunny cloudy" },
    { id: 802, src: cloudyIcon, alt: "Partly cloudy" },
    { id: 803, src: cloudyIcon, alt: "Mostly cloudy" },
    { id: 804, src: cloudyIcon, alt: "Overcast" },
    { id: 500, src: rainIcon, alt: "Rain" },
    { id: 501, src: rainHeavyIcon, alt: "Heavy rain" },
    { id: 600, src: snowIcon, alt: "Snow" },
    { id: 200, src: thunderIcon, alt: "Thunder" },
] as WeatherIcon[];

type WeatherIconProps = {
    weatherId: number;
  };

// how can we make this work dynamically? 🤔, like this :)
export const WeatherIcon = ({ weatherId }: WeatherIconProps) => {
    const icon = icons.find((icon) => {
        // Check if the weatherId starts with the same digits as the icon id
        return String(weatherId).startsWith(String(icon.id));
      });
    if (icon) {
        return <Image src={icon.src} alt={icon.alt} className="w-64" />;
      } else {
        return <div className="text-2xl font-bold">Unknown weather, {weatherId}</div>;
      }
};
export default WeatherIcon;
