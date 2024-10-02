// src/assets/navItems.js
const navItems = [
  { label: "डॅशबोर्ड", route: "/dashboard" },
  {
    label: "पिकाचे नियोजन", route: "/planning", dropdown: [
      { label: "पिकाचे नियोजन", route: "/planning/crop" },
      { label: "पीक लागड नियोजन", route: "/planning/planting" },
      { label: "मनुष्यबळ नियोजन", route: "/planning/workforce" },
      { label: "खते नियोजन", route: "/planning/fertilizers" },
      { label: "अवजारे नियोजन", route: "/planning/tools" },
      { label: "मशागत नियोजन नोंदी", route: "/planning/preparation" },
      { label: "खर्च नियोजन", route: "/planning/expenses" },
      { label: "पाण्याचे नियोज", route: "/planning/water" },
    ]
  },
  {
    label: "लागवड अंबलबजावणी", route: "/implementation", dropdown: [
      { label: "लागवड खर्च नोंदणी", route: "/implementation/expenses" },
      { label: "लागवड अबंलबजावनी नोंदणी", route: "/implementation/planting" },
      { label: "पाणी भरणा नोंदणी", route: "/implementation/water-supply" },
      { label: "तन काढणे नोंदणी", route: "/implementation/weeding" },
      { label: "पिकाची फवारणी नोंद", route: "/implementation/spraying" },
    ]
  },
  {
    label: "पिकांचे उत्पन्न", route: "/production", dropdown: [
      { label: "खर्च नोंदणी", route: "/production/expenses" },
      { label: "एकूण शिल्लक", route: "/production/balance" },
      { label: "उत्पन्न नोंदणी", route: "/production/income" },
    ]
  },
  {
    label: "जनावरांचे नियोजन", route: "/livestock", dropdown: [
      { label: "जनावरांची नोंदणी", route: "/livestock/registration" },
      { label: "जनावराची रोजच्या नोंदी", route: "/livestock/daily-records" },
      { label: "जनावरांचे खर्च नोंद", route: "/livestock/expenses" },
    ]
  },
  {
    label: "पोल्ट्री फॉर्मचे नियोजन", route: "/poultry", dropdown: [
      { label: "पोल्ट्री फॉर्म नोंदणी", route: "/poultry/registration" },
      { label: "जनावराची रोजच्या नोंदी", route: "/poultry/daily-records" },
      { label: "पोल्ट्री फॉर्म खर्च नों", route: "/poultry/expenses" },
    ]
  },
  {
    label: "शेळी पालन नियोजन", route: "/goat-farming", dropdown: [
      { label: "शेळी पालन नोंदी", route: "/goat-farming/records" },
      { label: "शेळीच्या रोजच्या नोंदी", route: "/goat-farming/daily-records" },
      { label: "शेळी पालन खर्च नोंदी", route: "/goat-farming/expenses" },
    ]
  },
  {
    label: "चाळ नियोजन", route: "/storage", dropdown: [
      { label: "चाळ नोंदी", route: "/storage/records" },
      { label: "चाळ रोजच्या नोंदी", route: "/storage/daily-records" },
      { label: "चाळ खर्च नोंदी", route: "/storage/expenses" },
    ]
  },
  {
    label: "Frontend Settings", route: "/frontend-settings", dropdown: [
      { label: "उपाय 1", route: "/frontend-settings/option1" },
      { label: "उपाय 2", route: "/frontend-settings/option2" },
      { label: "उपाय 3", route: "/frontend-settings/option3" },
    ]
  },
];

export default navItems;
