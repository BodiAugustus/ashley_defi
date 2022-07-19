import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

export const links = [
  {
    id: '13gfdd',
    name: 'Home',
    url: '/',
    howLong: 'w-[74%] ',
  },
  {
    id: '13gfss',
    name: 'Services',
    url: '/services',
    howLong: 'w-[114%] ',
  },

  {
    id: '13gfgg',
    name: 'sign up',
    url: '/subscribe',
    // url: "/marketplace",
    howLong: 'w-[81%] ',
  },
  {
    id: '13gfssdf',
    name: 'Contact',
    url: '/contact',
    howLong: 'w-[89%] ',
  },
];

export const socials = [
  {
    id: '23gfdd',
    name: 'Twitter',
    url: 'https://twitter.com/AshleyDeFi',
    icon: <AiFillTwitterCircle />,
    color: 'text-sky-400',
  },
  {
    id: '23gfgg',
    name: 'GitHub',
    url: 'https://discord.com/channels/939647986856767570/939647986856767573',
    icon: <BsDiscord />,
    color: 'text-yellow-400',
  },
  {
    id: '23gfss',
    name: 'Telegram',
    url: 'https://t.me/BodiAugustus',
    icon: <FaTelegramPlane />,
    color: 'text-white',
  },
];
