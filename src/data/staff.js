import JaxAvatar from "assets/sources/staff/44jax44.webp";
import AliRezaAvatar from "assets/sources/staff/AliReza1083.webp";
import AvieAvatar from "assets/sources/staff/avie-dev.webp";
import DunsinAvatar from "assets/sources/staff/Dun-sin.webp";
import FrancescoAvatar from "assets/sources/staff/FrancescoXX.webp";
import GrahamAvatar from "assets/sources/staff/InHuOfficial.webp";
import KrupaliAvatar from "assets/sources/staff/krupalitrivedi.webp";
import LouellaAvatar from "assets/sources/staff/lovelacecoding.webp";
import MadhuAvatar from "assets/sources/staff/MadhuSaini22.webp";
import PradumnaAvatar from "assets/sources/staff/Pradumnasaraf.webp";
import SumitAvatar from "assets/sources/staff/sumitsaurabh927.webp";
import TobiAvatar from "assets/sources/staff/tobySolutions.webp";
import ElderAvatar from "assets/sources/staff/Elder.webp";
import TiyaAvatar from "assets/sources/staff/Tiya.webp";

/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} avatar
 * @property {string?} github
 * @property {string} description
 * @property {string?} twitter
 * @property {string?} blogUrl
 * @property {number?} contributions
 */

/**
 * @type {Profile[]}
 */
const staff = [
  {
    name: "Graham",
    avatar: GrahamAvatar,
    github: "InHuOfficial",
    description: "Open for new opportunities in 2023",
    twitter: "Grahamthedev",
    blogUrl: "https://dev.to/inhuofficial",
    contributions: 0,
  },
  {
    name: "Ali Reza",
    avatar: AliRezaAvatar,
    github: "AliReza1083",
    description:
      "Passionate in Coding, Refugee Boy, Threads about Web Development",
    twitter: "Ali_Developer05",
    blogUrl: "https://linkfree.eddiehub.io/AliReza1083",
    contributions: 0,
  },
  {
    name: "Avie",
    avatar: AvieAvatar,
    github: "avie-dev",
    description:
      "BrSE in Japan(YNS)🌸 | Community leader@ http://ossph.org | Community manager| @4ccommunityhq| open source | Spaces Host | Sharing about Tech💻, Japan🇯🇵 & Art",
    twitter: "AvieDev",
    blogUrl: "",
    contributions: 0,
  },
  {
    name: "Dunsin",
    avatar: DunsinAvatar,
    github: "Dun-sin",
    description:
      "🧑‍💻18|⚙Building https://code-magic.vercel.app and https://whischat.vercel.app |☯Being real about stuff |🥑Open Source |🎖️Tweeting from my POV |🧒She/Her",
    twitter: "DunsinWebDev",
    blogUrl: "https://linktr.ee/DunsinCodes",
    contributions: 0,
  },
  {
    name: "Francesco Ciulla",
    avatar: FrancescoAvatar,
    github: "FrancescoXX",
    description:
      "·Follow me, I will help you with Web3 & DevRel· Building a 1M Community 19%· Docker Captain |@dailydotdev · Public Speaker· 4C founder @4ccommunityhq",
    twitter: "FrancescoCiull4",
    youtube: "https://www.youtube.com/c/FrancescoCiulla",
    twitch: "https://www.twitch.tv/francesco_ciulla",
    blogUrl: "https://discord.com/invite/TcmA2kbJeA",
    contributions: 10,
  },
  {
    name: "JAX",
    avatar: JaxAvatar,
    github: "44jax44",
    description:
      "I will help you become a better communicator | Tweets on all aspects of communication| Life Health & Fitness Coach | Can communicate in 🇬🇧 🇫🇷 🇱🇧 🇪🇸 🇵🇹",
    twitter: "44jax44",
    blogUrl: "https://linktr.ee/44jax44",
    contributions: 0,
  },
  {
    name: "Pradumna Saraf",
    avatar: PradumnaAvatar,
    github: "Pradumnasaraf",
    description: "Open Source Advocate | EddieHub Ambassador",
    twitter: "pradumna_saraf",
    blogUrl: "",
    contributions: 0,
  },
  {
    name: "Sumit",
    avatar: SumitAvatar,
    github: "sumitsaurabh927",
    description:
      "Explaining tech the way I wish I was taught | Tweets on Javascript, React, Open Source, and Web Development |🎙 Spaces | 🥑 Open Source advocate",
    twitter: "sumitsaurabh927",
    blogUrl: "https://sumitsaurabh.hashnode.dev/",
    contributions: 0,
  },
  {
    name: "Tobiloba Adedeji",
    avatar: TobiAvatar,
    github: "tobySolutions",
    description:
      "Frontend Engineer  | YouTuber | Communicator | Accessibility Advocate | Open Source Enthusiast. Software Engineer Intern Nithub,  Staff  @4ccommunityhq",
    twitter: "toby_solutions",
    blogUrl: "",
    linkedin: "tobiloba-adedeji",
    contributions: 34,
  },
  {
    name: "Louëlla Creemers",
    avatar: LouellaAvatar,
    github: "lovelacecoding",
    linkedin: "louelladev",
    description:
      "Web Developer 🌍 | Public Speaker 🗣️ | .NET & C# 🖥️  | Dad Joke Enthusiast 🤓 | Learning and Joking With You While Working and Studying CS",
    twitter: "lovelacecoding",
    twitch: "https://www.twitch.tv/lovelacecoding",
    blogUrl: "https://lovelacecoding.hashnode.dev/",
    contributions: null,
  },
  {
    name: "Madhu Saini",
    avatar: MadhuAvatar,
    github: "MadhuSaini22",
    description: "Full Stack Developer | Open Source Enthusiast",
    twitter: "MadhuSaini22",
    blogUrl: "https://madhusaini46810.wixsite.com/original",
    linkedin: "madhu-saini",
    contributions: 24,
  },
  {
    name: "Krupali",
    description:
      "20 🚀 || talking about blogging and communities|| web3 and web dev learner | summarising spaces in threads | chillin' in discord servers |books 💜",
    avatar: KrupaliAvatar,
    github: "krupalitrivedi",
    twitter: "chai_really",
    blogUrl: "",
    linkedin: "",
    contributions: null,
  },
  {
    name: "K. Eldreth aka Elder",
    github: "",
    description: "Just another bystander; Lead Dev in robotics",
    twitter: "Elder_Youth",
    blogUrl: "",
    avatar: ElderAvatar,
    linkedin: "",
    contributions: null,
  },
  {
    name: "Tiya Bansal",
    github: "Tiyabansal",
    description: "SWE Intern @JPMC, UK | Cloud and Devops | IT Undergraduate",
    twitter: "TiyaTwts",
    blogUrl: "",
    avatar: TiyaAvatar,
    linkedin: "tiya-bansal",
    contributions: null,
  },
].sort((a, b) => (a.name > b.name ? 1 : -1));

export default staff;

// module.exports = staff
