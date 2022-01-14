// export const playAudio = (isPlaying, audioRef) => {
//   if (isPlaying) {
//     const playPromise = audioRef.current.play();
//     if (playPromise !== undefined) {
//       playPromise
//         .then((audio) => {
//           audioRef.current.play();
//         })
//         .catch((error) => console.log(error));
//     }
//   }
// };
import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [

    {
      name: "Beaver Creek",
      artist: "Aso, Middle School, Aviino",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#083540", "#38BBAC"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
    },

    {
      name: "Nightfall",
      artist: "Aiguille",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F6B7AE", "#5B4D8A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    },

    {
      name: "Reflection",
      artist: "Swørn",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#C14C79", "#551853"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    },

    {
      name: "Keep Going",
      artist: "Swørn",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#C14C79", "#551853"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    },

    {
      name: "Under the City Stars",
      artist: "Aso, Middle School, Aviino",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#083540", "#38BBAC"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    },

    {
      name: "When I Get Up In the Morning",
      artist: "Middle School",
      cover: "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#EF6133", "#1C384E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22933",
    }

  ]
}

export default chillHop;