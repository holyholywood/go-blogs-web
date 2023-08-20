import { IconType } from "react-icons";
import { RiHome4Fill, RiSettings5Fill, RiUser3Fill } from "react-icons/ri";

type PublicPageMenuType = {
  name: string;
  url: string;
  icon: IconType;
};

const PublicPageMenus: PublicPageMenuType[] = [
  {
    name: "Beranda",
    url: "/",
    icon: RiHome4Fill,
  },
  {
    name: "Profil",
    url: "/profile",
    icon: RiUser3Fill,
  },
  {
    name: "Pengaturan",
    url: "/settings",
    icon: RiSettings5Fill,
  },
];

export default PublicPageMenus;
