import Image from "next/image";

export default function LifePage() {
  return (
    <div className="w-full min-h-screen max-w-[736px] py-4 px-4">
      <div className="w-full flex flex-col items-center gap-3 mt-10 mb-6 sm:mb-20 text-xs sm:text-sm">
        <Image
          src={"/images/bhagat_singh.png"}
          alt=""
          width={500}
          height={500}
          className="rounded-lg w-28 sm:w-34 border-white/80 border"
        ></Image>
        <div className="flex flex-col items-center">
          <p className="text-white/30">
            Remembering him gives me immense strength in life.
          </p>
          <p className="text-white/30">He is my Hero.</p>
        </div>
      </div>

      <div className="py-12 flex flex-col gap-6 sm:gap-12">
        <QNA question="Purpose of life?" answer="Personal growth and growth of society."/>
      </div>
    </div>
  );
}

function QNA({question, answer}: {question: string; answer: string;}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-white/80 text-sm">{question}</h3>
      <p className="text-white/30 text-xs">{answer}</p>
    </div>
  );
}
