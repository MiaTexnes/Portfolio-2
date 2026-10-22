const projects = [
  {
    slug: "connectsphere",
    title: "ConnectSphere",
    module: "CSS Frameworks",
    tags: ["Tailwind CSS"],
    description:
      "Log in, read a feed, and view a profile in this small social app. Tailwind styles the login page, the feed, and the profile.",
    image: "/images/css-frameworks.webp",
    imageAlt:
      "The ConnectSphere profile, with a username, follow buttons, and follower counts.",
    caption:
      "The profile after login. It shows the username, follow buttons, and follower counts.",
    live: "https://connect-sphere1.netlify.app/",
    readme:
      "https://github.com/MiaTexnes/connectsphere/blob/css-frameworks/readme.md",
    about:
      "ConnectSphere is a small social app from the CSS Frameworks module. You log in, read posts in a feed, and open a profile. The posts sit in one column.",
    tools: "Tailwind CSS styles the login page, the feed, and the profile.",
    improvement: "The profile was missing the username. It now shows @janedoe.",
  },
  {
    slug: "loot-locker",
    title: "Loot Locker",
    module: "JavaScript Frameworks",
    tags: ["Next.js", "Tailwind CSS"],
    description:
      "Browse products, sort the list, and keep a cart that stays after refresh. Built with Next.js and Tailwind. No real payment.",
    image: "/images/javascript-frameworks.webp",
    imageAlt:
      "The Loot Locker shop, with a search field, a sort menu, and product cards.",
    caption:
      "The shop front. Search, sort, and a cart that is still there after a refresh.",
    live: "https://lootlocker.netlify.app/",
    readme:
      "https://github.com/NoroffFEU/jsfw-2025-v1-mia-js-frameworks/blob/main/README.md",
    about:
      "Loot Locker is a shop. A visitor can browse products, search, and sort the list. Items added to the cart are still there after a refresh.",
    tools: "Next.js and Tailwind CSS. The checkout does not take real payment.",
    improvement:
      "The product rating used to include a ½ mark. The shop now shows the rating with stars.",
  },
  {
    slug: "pink-gavel",
    title: "Pink Gavel Auctions",
    module: "Semester Project 2",
    tags: ["JavaScript", "Tailwind CSS", "Vite"],
    description:
      "Guests can browse auctions. Students with a Noroff email can list items, place bids, and manage a profile with starting credits.",
    image: "/images/semester-project-2.webp",
    imageAlt:
      "The Pink Gavel home page, with newest listings and a browse button.",
    caption: "Auctions on the home page. A guest can look without logging in.",
    live: "https://pinkgavel.netlify.app/",
    readme:
      "https://github.com/MiaTexnes/Auction-House-Pink-Gavel/blob/main/README.md",
    about:
      "Pink Gavel Auctions is an auction site. A guest can browse the listings without an account. A student with a Noroff email can list an item, place a bid, and manage a profile that starts with credits.",
    tools:
      "JavaScript, Tailwind CSS, and Vite. The listings come from the Noroff auction API.",
    improvement:
      "The newest-listings carousel stays inside the screen, and the phone menu covers the page. The profile text is readable in dark mode.",
  },
];

export default projects;
