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

export const builderLinks = [
  {
    label: "Home",
    slug: "/builder/home",
    icon: ""
  },
  {
    label: "Listed Properties",
    slug: "/builder-property",
    icon: ""
  },
  {
    label: "Pending Requests",
    slug: "/builder-pending-request",
    icon: ""
  },
  {
    label: "Accepted Request",
    slug: "/builder-accepted-request",
    icon: ""
  },
  {
    label: "Profile",
    slug: "/builder-profile",
    icon: ""
  }
];

export const adminLinks = [
  {
    label: "users",
    slug: "/admin-users",
    icon: ""
  },
  {
    label: "Properties",
    slug: "/admin-properties",
    icon: ""
  },
  {
    label: "Review Property Request",
    slug: "/admin-review-request",
    icon: ""
  }
];
