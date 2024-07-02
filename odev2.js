// Footer için gereken veriler, başlıklar ve alt başlıklar 
//ile birlikte bir array içerisinde tanımlanıyor.
const footer = [
    {
      title: "Product",
      subtitles: [
        {
          text: "Features",
          href: "/features",
        },
        {
          text: "Why Cequence",
          href: "/why-cequence",
        },
        {
          text: "Technology",
          href: "/technology",
        },
        {
          text: "Security",
          href: "/security",
        },
        {
          text: "Pricing",
          href: "/pricing",
        },
      ],
    },
    {
      title: "Sollution",
      subtitles: [
        {
          text: "Procurement",
          href: "/procurement",
        },
        {
          text: "Sales",
          href: "/Sales",
        },
        {
          text: "Legal",
          href: "/legal",
        },
        {
          text: "Medium Businesses",
          href: "/medium-businesses",
        },
        {
          text: "Enterprises",
          href: "/enterprises",
        },
      ],
    },
    {
      title: "Company",
      subtitles: [
        {
          text: "Careers",
          href: "/careers",
        },
        {
          text: "Case study",
          href: "/case-study",
        },
      ],
    },
    {
      title: "Links",
      subtitles: [
        {
          text: "Facebook",
          href: "/facebook",
        },
        {
          text: "LinkedIn",
          href: "/linkedIn",
        },
      ],
    },
  ];
  // Footer'ın konumlandığı HTML elementi (id="bezdik") 
  //seçilerek içeriği dinamik olarak oluşturuluyor.
  document.getElementById("bezdik").innerHTML= footer.map( armut =>
    //id="bezdik" olan HTML elementini seçer.
    //Her bir ana başlık için HTML yapısı oluşturuluyor.
    `<div class="footer-links" >
    <h6 class="h6-bold">${armut.title}</h6>
    ${armut.subtitles.map(elma => 
    ` <ul><li><a href="${elma.href}" class="link">${elma.text}</a></li></ul> `  
    )}
   </div>
    `
   )