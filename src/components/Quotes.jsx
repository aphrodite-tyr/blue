import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

function Quotes() {
  return (
    <div className="bg-main2 hero-content flex flex-col items-center justify-center text-center p-10 text-sm md:text-base font-casual2 space-y-4">
      <div className="w-full text-left">
        <BiSolidQuoteAltLeft className="inline text-xl md:text-2xl" />
      </div>
      <h1 className="flex items-start gap-2">
        <span>
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </span>
      </h1>
      
      <h1>
        Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir
      </h1>

      <h1> QS. Ar-Rum 21 </h1>

      <div className="w-full text-right">
        <BiSolidQuoteAltRight className="inline text-xl md:text-2xl" />
      </div>
    </div>
  );
}

export default Quotes;
