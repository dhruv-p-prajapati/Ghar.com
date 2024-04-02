import { IoIosInformationCircle } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { TbBuildingCommunity } from "react-icons/tb";
import { MdOutlineSell } from "react-icons/md";

export const publicLinks = [
  {
    label: "About",
    slug: "/about",
    icon: <IoIosInformationCircle />
  },
  {
    label: "Contact",
    slug: "/contact",
    icon: <MdOutlineContactPhone />
  }
];

export const userLinks = [
  {
    label: "login",
    slug: "/login",
    icon: <CiBookmarkCheck />
  },
  {
    label: "builder registration",
    slug: "/builder/register",
    icon: <CiBookmarkCheck />
  },
  {
    label: "My Wishlist",
    slug: "/wishlist",
    icon: <CiBookmarkCheck />
  },
  {
    label: "All Properties",
    slug: "/all-properties",
    icon: <TbBuildingCommunity />
  },
  {
    label: "Properties for rent",
    slug: "/for-rent",
    icon: <MdOutlineSell />
  },
  {
    label: "Properties for Sell",
    slug: "/for-sell",
    icon: <MdOutlineSell />
  }
];
