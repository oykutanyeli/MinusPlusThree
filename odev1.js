const pricing = [
  {
    title: "Basic",
    description: "Start with a first step",
    properties: [
      {
        title: "Prototype",
        description:
          "A simple plan for simple needsd. Use one of our design to create a contract.",
      },
      {
        title: "App Design",
        description:
          "A simple plan for simple needsd. Use one of our design to create a contract.",
      },
      {
        title: "Web Design",
        description:
          "A simple plan for simple needsd. Use one of our design to create a contract.",
      },
      {
        title: "Interaction",
        description:
          "A simple plan for simple needsd. Use one of our design to create a contract.",
      },
    ],
  },
  {
    title: "Pro",
    description: "Start with a first step",
    properties: [
      {
        title: "Prototype",
        description:
          "A simple plan for simple needsd. Use one of our design to create a contract.",
      },
      {
        title: "App Design",
        description:
          "A simple plan for simple needsd. Use one of our design to create a contract.",
      },
      {
        title: "Web Design",
        description:
          "A simple plan for simple needsd. Use one of our design to create a contract.",
      },
      {
        title: "Interaction",
        description:
          "A simple plan for simple needsd. Use one of our design to create a contract.",
      },
    ],
  },
];
document.getElementById("bozukbu").innerHTML = pricing.map(
  (GereksizBu) =>
    `<section class="pricing-plan basic">
    <div class="pricing-plan-header">
      <h4> ${GereksizBu.title}</h4>
      <p class="lg color-firefly">${GereksizBu.description}</p>
    </div>
    <div class="pricing-plan-features"> 
    ${GereksizBu.properties.map(
      (prop) =>
        `   <div class="pricing-plan-feature">
    <div class="pricing-plan-feature-header">
    <img src="./assets/image/tick.svg" alt="tick" />
    <h5 class="text-clr">${prop.title}</h5>
    </div>
    <p> ${prop.description}</p>
</div>
` )}
</div>
</section>`
);
