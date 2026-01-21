export default function WhatsAppChat() {
  return (
    <a href={`https://wa.me/${process.env.WHATSAPP_NUMBER}`} target="_blank" className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg z-50">
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}
