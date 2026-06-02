import React from "react";
import ReactDOM from "react-dom/client";

const restlist = [
  {
    info: {
      id: "21001",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/dd196a56-86a8-409b-8e29-df0dbbfd76fc_21001.JPG",
      locality: "F.C. Road",
      areaName: "Shivajinagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-03 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "5.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b222ad4-29f3-4795-8bde-48db3c00c537",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/pizza-hut-f-c-road-shivajinagar-rest21001",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "326931",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Late GA Kulkarni Path",
      areaName: "Kothrud",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹140",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b222ad4-29f3-4795-8bde-48db3c00c537",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/chinese-wok-late-ga-kulkarni-path-kothrud-rest326931",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "24437",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/981a16ea-e3b2-4a85-8907-9fbc944138b5_24437.JPG",
      locality: "Perugate",
      areaName: "Sadashiv Peth",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "6.4K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
          {
            imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            description: "Best in Pizza",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Pizza",
                  imageId:
                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b222ad4-29f3-4795-8bde-48db3c00c537",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/dominos-pizza-perugate-sadashiv-peth-rest24437",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "243625",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/aa4f7db1-4061-43d7-ada4-1341cb577285_243625.JPG",
      locality: "Deccan Gymkhana",
      areaName: "Deccan Gymkhana",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "4.2K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "5.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b222ad4-29f3-4795-8bde-48db3c00c537",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/kfc-deccan-gymkhana-rest243625",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "506982",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/4a820e22-604b-4c18-a8fe-aa08a389e229_506982.JPG",
      locality: "Narayan Peth",
      areaName: "Shaniwar Peth",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
          {
            imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            description: "Best in Burger",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Burger",
                  imageId:
                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b222ad4-29f3-4795-8bde-48db3c00c537",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/mcdonalds-narayan-peth-shaniwar-peth-rest506982",
      type: "WEBLINK",
    },
  },
];
const Header = () => {
  return (
    <div className="logo-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjttAIQ8vzTTDemBf0J7WDgaC1vRwn1Jv2w&s"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, locality, areaName,cuisines ,costForTwo, avgRating ,sla} =
    restData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="data:image/webp;base64,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"
      ></img>
      <h3>{name}</h3>
      <h6>{locality}</h6>
      <h6>{areaName}</h6>
      <h6>{cuisines.join(",")}</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} Min</h6>
      <h6>{avgRating} stars</h6>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container"></div>
      {/* <RestaurantCard restData={restlist[0]} />,
      <RestaurantCard restData={restlist[1]} />,
      <RestaurantCard restData={restlist[2]} />
      <RestaurantCard restData={restlist[3]} /> */}
    
     {
      restlist.map((restaurant) => {
        return <RestaurantCard key={restaurant.info.id} restData={restaurant} />;
      })
     }   
  

    </div>
  );
};


const Footer = () => {
  return <div>Footer</div>;
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
