const topRowClients = [
  {
    name: "Indore Cancer Foundation",
    img: "cancer_care.png",
    className: "md:h-[100px] h-[50px]",
  },
  {
    name: "National Institute of Information and Communications Technology",
    img: "nict.png",
    className: "md:h-[100px] h-[50px]",
  },
  {
    name: "Mayaa Money",
    img: "mayaa.png",
    className: "md:h-[100px] h-[50px]",
  },
  {
    name: "Paul Merchants Limited",
    img: "paul.png",
    className: "md:h-[100px] h-[50px]",
  },
  {
    name: "PaidPromo",
    img: "paid_promo.png",
    className: "md:h-[100px] h-[50px]",
  },
];
const bottomRowClients = [
  {
    name: "EPS",
    img: "eps.png",
    className: "md:h-[100px] h-[50px]",
  },
  {
    name: "Kriti",
    img: "kriti.png",
    className: "md:h-[100px] h-[50px]",
  },
  {
    name: "Kasta Pipes",
    img: "kasta.png",
    className: "md:h-[100px] h-[50px]",
  },
  {
    name: "And Buy",
    img: "and_buy.png",
    className: "md:h-[100px] h-[50px]",
  },
  {
    name: "Client Logo",
    img: "cancer_care.png",
    className: "md:h-[100px] h-[50px]",
  },
];
export default function TrustedClients() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extralight text-center mb-16 text-gray-800">
          Our Trusted Clients
        </h2>

        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center mb-12">
          {topRowClients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              {/* For development, using placeholder images. Replace with actual logos */}
              <img
                src={`/images/clients/${client.img}`}
                alt={client.name}
                className={client.className + " object-contain"}
              />
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {bottomRowClients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              {/* For development, using placeholder images. Replace with actual logos */}
              <img
                src={`/images/clients/${client.img}`}
                alt={client.name}
                className={client.className + " object-contain"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
