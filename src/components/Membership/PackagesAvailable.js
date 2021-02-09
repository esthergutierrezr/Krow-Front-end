import CheckBox from "../Style/SVG/Membership/checkbox.svg";
import MembershipHome from "../Style/SVG/Membership/mbs.svg";
const PackagesAvailable = [
  {
    id: 1,
    name: "Subscrição Mensal*",
    checkIns: "Unlimited Check-ins",
    image: MembershipHome,
    taxedPrice: "89",
    price: "72.36",
    validity: "*Válida por 30 dias desde a data da compra",
    perks: [
      {
        id: 1,
        image: CheckBox,
        description: "Check-ins ilimitados em localizações premium",
      },
      {
        id: 2,
        image: CheckBox,
        description: "Café, chá e água ilimitados",
      },
      {
        id: 3,
        image: CheckBox,
        description: "Wi-Fi gratuito",
      },
      {
        id: 4,
        image: CheckBox,
        description: "Lugar dedicado, acesso a tomadas",
      },
      {
        id: 5,
        image: CheckBox,
        description: "20% de desconto em comida e bebida",
      },
      {
        id: 6,
        image: CheckBox,
        description: "Estacionamento gratuito ou com desconto",
      },
      {
        id: 7,
        image: CheckBox,
        description: "Salas de reunião com condições especiais",
      },
      {
        id: 8,
        image: CheckBox,
        description: 'Benefícios exclusivos de "lifestyle"',
      },
      {
        id: 9,
        image: CheckBox,
        description: "Acesso a uma comunidade distinta",
      },
    ],
  },
];

export default PackagesAvailable;
