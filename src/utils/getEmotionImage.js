import emotion1 from "./../assets/emotion1";
import emotion2 from "./../assets/emotion2";
import emotion3 from "./../assets/emotion3";
import emotion4 from "./../assets/emotion4";
import emotion5 from "./../assets/emotion5";

export default function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
