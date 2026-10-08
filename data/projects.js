const projects = [
  {
    slug: "connectsphere",
    title: "ConnectSphere",
    module: "CSS Frameworks",
    description:
      "Log in, read a feed, and view a profile in this small social app. Tailwind styles the login page, the feed, and the profile.",
    image: "/images/connectsphere.png",
    imageAlt:
      "Placeholder labeled ConnectSphere. Replace this file with a screenshot of the feed.",
    caption:
      "The feed after login. Posts sit in a grid, and you can search them.",
    live: "https://connect-sphere1.netlify.app/",
    readme:
      "https://github.com/MiaTexnes/connectsphere/blob/css-frameworks/readme.md",
    about:
      "ConnectSphere is a small social app from the CSS Frameworks module. You log in, read posts in a feed, and open a profile. The feed is a grid of posts, and you can search them.",
    tools: "Tailwind CSS styles the login page, the feed, and the profile.",
    improvement:
      "The profile was missing the username, a follow button, and a following and followers area. Those are the parts that changed. Sort on the feed is still missing.",
  },
  {
    slug: "loot-locker",
    title: "Loot Locker",
    module: "JavaScript Frameworks",
    description:
      "Browse products, sort the list, and keep a cart that stays after refresh. Built with Next.js, Tailwind, and a simple checkout.",
    image: "/images/loot-locker.png",
    imageAlt:
      "Placeholder labeled Loot Locker. Replace this file with a screenshot of the shop.",
    caption:
      "The shop front. Search, sort, and a cart that is still there after a refresh.",
    live: "https://lootlocker.netlify.app/",
    readme:
      "https://github.com/NoroffFEU/jsfw-2025-v1-mia-js-frameworks/blob/main/README.md",
    about:
      "Loot Locker is a shop. A visitor can browse products, search, and sort the list. Items added to the cart are still there after a refresh. Checkout is a simple flow.",
    tools: "Next.js, Tailwind CSS, and a simple checkout.",
    improvement:
      "The product rating rendered oddly. The stars are text: ★ for a full star, ☆ for an empty star, and ½ for a half star. The live-site change is to fix that display. A note about 17 large commits is feedback in the PDF. It is not a change on the live site.",
  },
  {
    slug: "pink-gavel",
    title: "Pink Gavel Auctions",
    module: "Semester Project 2",
    description:
      "Guests can browse auctions. Students with a Noroff email can list items, place bids, and manage a profile with starting credits.",
    image: "/images/pink-gavel.png",
    imageAlt:
      "Placeholder labeled Pink Gavel Auctions. Replace this file with a screenshot of the auction home page.",
    caption: "Auctions on the home page. A guest can look without logging in.",
    live: "https://pinkgavel.netlify.app/",
    readme:
      "https://github.com/MiaTexnes/Auction-House-Pink-Gavel/blob/main/README.md",
    about:
      "Pink Gavel Auctions is an auction site. A guest can browse the listings without an account. A student with a Noroff email can list an item, place a bid, and manage a profile that starts with credits. Search can come back with no results, and that message already works, as do listings, bidding, credits, and the avatar.",
    tools: "JavaScript, HTML, and CSS, talking to the Noroff auction API.",
    improvement:
      "On a wide screen, the newest-listings carousel shows arrow buttons outside the cards and a horizontal scrollbar. On a phone, the open menu does not cover the page, so the welcome text and the Browse Auctions button stay visible. In dark mode, the text on the profile page has poor contrast. The change is to fit the carousel and the menu to each screen, and to make the profile text easier to read in dark mode.",
  },
];

export default projects;
