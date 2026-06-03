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
  const { name, cloudinaryImageId, locality, areaName,cuisines ,costForTwo, avgRating ,sla,cloudinaryImageId} =
    restData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}     ></img>
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
