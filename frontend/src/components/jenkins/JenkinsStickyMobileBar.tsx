export default function JenkinsStickyMobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-[9997] flex"
      style={{ height: '60px' }}
    >
      <a
        href="tel:+12814108934"
        className="flex-1 flex items-center justify-center gap-2 font-opensans font-bold text-jenkins-navy text-[15px]"
        style={{ background: '#F4B942' }}
      >
        📞 Call Now
      </a>
      <a
        href="https://wa.me/12814108934?text=Hi%20C.%20Jenkins%2C%20I%27d%20like%20a%20free%20insurance%20quote!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 font-opensans font-bold text-white text-[15px]"
        style={{ background: '#25D366' }}
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
