new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (_, destination) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const t1 = gsap.timeline({ delay: 0.5 });

    t1.fromTo(title, 0.5, { y: "30", opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index !== 1) return;

    const chairs = document.querySelectorAll(".chair");
    const des = section.querySelector(".description");

    console.log(chairs);

    t1.fromTo(chairs, 0.5, { x: "100%" }, { x: "-30%" })
      .fromTo(des, 0.5, { y: "30", opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
      .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
      .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });

    // chairs.forEach((chair) => {
    //   t1.fromTo(chair, 1, { opacity: 0 }, { opacity: 1 });
    // });
  },
});
