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
        403
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
      Forbidden
      </div>
      <div className="mt-6 text-white">
      Oops, You don't have permission to access this page.
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
  );
}
