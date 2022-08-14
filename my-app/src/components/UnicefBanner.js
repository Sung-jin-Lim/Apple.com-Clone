function UnicefBanner() {
  return (
    <div className="UnicefBanner bg-[#1D1D1F]">
      <div className="UnicefBanner-container flex flex-row items-center justify-center py-4 gap-4">
        <img src="/UNICEF_Logo.png" alt="unicef" className="h-8" />
        <a href="" className="text-[#2997ff] text-sm">
          Donate to support families affected by the war in Ukraine
        </a>
      </div>
    </div>
  );
}

export default UnicefBanner;
