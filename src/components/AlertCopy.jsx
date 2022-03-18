export default function AlertCopy({ isCopied = false, children }) {
  return (
    <div
      className={`transition-visibility z-100 bg-primary rounded-default shadow-soft-lg fixed bottom-10 left-[5%] right-[5%] flex items-center justify-center px-8 py-4 text-center text-lg font-semibold text-white md:left-[15%] md:right-[15%] xl:left-[30%] xl:right-[30%] ${
        isCopied
          ? "visible opacity-100 duration-300"
          : "invisible opacity-0 duration-200"
      }`}
    >
      {children}
    </div>
  );
}
