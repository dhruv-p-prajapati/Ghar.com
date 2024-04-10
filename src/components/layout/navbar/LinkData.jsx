import { IoIosInformationCircle } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { TbBuildingCommunity } from "react-icons/tb";
import { MdOutlineSell } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { TbHomeDown } from "react-icons/tb";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { HiUsers } from "react-icons/hi";
import { SiCodereview } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";

export const publicLinks = [
  {
    label: "Home",
    slug: "/",
    icon: <FaHome />
  },
  {
    label: "All Properties",
    slug: "/all-properties",
    icon: <RiBuilding2Fill />
  },
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
    label: "Home",
    slug: "/user",
    icon: <FaHome />
  },
  {
    label: "All Properties",
    slug: "/all-properties",
    icon: <TbBuildingCommunity />
  },
  {
    label: "Saved Properties",
    slug: "/saved-properties",
    icon: <CiBookmarkCheck />
  },
  {
    label: "Owned Properties",
    slug: "/owned-properties",
    icon: <TbHomeDown />
  },
  {
    label: "Profile",
    slug: "/profile",
    icon: <FaUserAlt />
  }
];

export const builderLinks = [
  {
    label: "Home",
    slug: "/builder",
    icon: <FaHome />
  },
  {
    label: "Pending Requests",
    slug: "/pending-request",
    icon: <MdPendingActions />
  },
  {
    label: "Accepted Request",
    slug: "/accepted-request",
    icon: <TiTick />
  },
  {
    label: "Create new Property",
    slug: "/create-property",
    icon: <MdOutlineAddHomeWork />
  },
  {
    label: "Listed Properties",
    slug: "/listed-property",
    icon: <TbBuildingCommunity />
  },
  {
    label: "Profile",
    slug: "/builder-profile",
    icon: <FaUserAlt />
  }
];

export const adminLinks = [
  {
    label: "Home",
    slug: "/admin",
    icon: <FaHome />
  },
  {
    label: "All Properties",
    slug: "/all-properties",
    icon: <TbBuildingCommunity />
  },
  {
    label: "Review Property Request",
    slug: "/review-request",
    icon: <SiCodereview />
  },
  {
    label: "Users",
    slug: "/users",
    icon: <HiUsers />
  },
  {
    label: "Queries",
    slug: "/queries",
    icon: <FaPersonCircleQuestion />
  }
];
