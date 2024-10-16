import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Card} from "@material-tailwind/react";

export default function notFoundPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [locale]);

  return (

    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
    <h1 className="text-9xl font-extrabold text-white tracking-widest">
      401
    </h1>
    <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
    Unauthorized Access.
    </div>
    <div className="mt-6 text-white">
    Oops! You're not authorization access this pages.
    </div>
    <button className="mt-5">
      <span className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <a href="/">Go Home</a>
        </span>
      </span>
    </button>
  </main>

    // <div className="font-prompt grid h-screen grid-rows-[auto_1fr] bg-white ">
    //   <Card
    //     className="flex items-center justify-center p-8"
    //     color="transparent"
    //     shadow={false}
    //   >
    //     <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
    //       <div className="mb-1 flex flex-col text-center gap-3 ">
    //       <h1 className="mb-4 text-10xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">401</h1>
    //         <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Unauthorized.</p>
    //         <p className="mb-4 text-lg font-light text-gray-800 dark:text-gray-700">Not authorized: Access denied!</p>
    //       </div>
    //     </div>
    //   </Card>
    // </div>
  );
}
