const Home = () => {
  return (
    <div
      className="relative flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/lofi.webp)",
          opacity: 0.3,
        }}
      ></div>

      <div className="text-center flex flex-col gap-8 justify-center items-center relative z-10">
        <h3 className="font-bold text-5xl">جمعية العزم للكفيفات المسنات</h3>
        <p className="text-gray-700  font-medium text-xl">
          نمنح النور بالأمل ونرعى بالحب
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-amber-200 rounded-4xl px-6 py-3 font-bold cursor-pointer">
            تسجيل الدخول
          </button>
          <button className="bg-amber-200 rounded-4xl px-6 py-3 font-bold cursor-pointer">
            ارسل طلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
