window.onload = () => {
  const loginBtn = document.querySelector(".login");
  const signupBtn = document.querySelector(".signup");
  loginBtn.addEventListener("click", () => {
    loginBtn.setAttribute("href", "./login.html");
  });
  signupBtn.addEventListener("click", () => {
    signupBtn.setAttribute("href", "./signup.html");
  });
  let login = document.querySelector("a.nav-link.login");
  let signup = document.querySelector("a.nav-link.signup");
  let user = JSON.parse(sessionStorage.getItem("temp"));
  if (user) {
    let li_1 = login.parentElement;
    let li_2 = signup.parentElement;
    let ul = li_1.parentElement;
    ul.removeChild(li_1);
    ul.removeChild(li_2);

    let li_3 = document.createElement("li");
    li_3.classList.add("nav-item");
    li_3.innerHTML = `<a href="./Profile.html" class="nav-link login">${user.Name}</a>`;
    ul.appendChild(li_3);
  }
  Initial_Data();
};
function Initial_Data() {
  let Users = [
    {
      Picture: "./images/Abdul_Manaf.jpg",
      Name: "Abdul Manaf",
      Email: "sahitoa97@gmail.com",
      Phone: "03003141736",
      Password: "Manaf1234",
    },
    {
      Picture: "./images/Ammar_Ahmed.jpg",
      Name: "Ammar Ahmed",
      Email: "ammarahmed@gmail.com",
      Phone: "0300330033002",
      Password: "Ammar1234",
    },
    {
      Picture: "./images/Naveed_Ahmed.jpg",
      Name: "Naveed Ahmed",
      Email: "naveedahmed@gmail.com",
      Phone: "03000000000",
      Password: "Naveed1234",
    },
  ];
  let Packages = [
    {
      dp_url:
        "https://tourmypakistan.com.pk/wp-content/uploads/2019/01/Hunza-Serena-Inn-photos-Exterior-Hotel-information-26.jpeg",
      Title: "Hunza Serena Inn",
      Type: "Best",
      Description:
        "Take a first stop in this luminous and wonderful hotel with your loved ones. Serena Altit Fort Residence is a unique accommodation in Hunza Valley that will immerse you into the sights, sounds, tastes and history of Hunza, whilst offering an enchanting rendezvous with Nature. Situated at the footsteps of the 1100 years old Altit Fort, the Residence is surrounded by the enchanting Royal Garden and the medieval village of Altit-Khun.",
      Url: "",
      Pricing: {
        Single: "30,000",
        Couple: "45,000",
      },
    },
    {
      dp_url:
        "https://travelfreak.com/wp-content/uploads/2018/10/north-shore-oahu.jpg",
      Title: "North Shore Tour",
      Type: "Best",
      Description:
        "Take your friends to this once in a life time journey. Skip the hassle of renting a car and see the highlights of Oahu North Shore from the comfort of a minibus or van. Along the way, a guide keeps you entertained and shares details about the island that you would likely miss if traveling on your own. At each stop, you can enjoy free time to swim, shop, paddleboard/kayak or do an optional waterfall hike while getting to know the island.",
      Url: "",
      Pricing: {
        Single: "32,000",
        Couple: "58,000",
      },
    },
    {
      dp_url:
        "https://static.independent.co.uk/2022/06/14/11/1.%20Amsterdam%20Open%20Boat%20Canal%20Cruise%20-%20Live%20Guide%20-%20from%20Anne%20Frank%20House%203.jpeg?width=1200",
      Title: "Amsterdam Open Boat Canal Cruise",
      Type: "Best",
      Description:
        "Experience the beauty of Amsterdams canals by going on this scenic cruise. Pass by Anne Frank House, the Jordaan, the Houseboat Museum, Leiden Square, Rijksmuseum, De Duif and much more.Experience the beauty of Amsterdams canals by going on this scenic cruise. Pass by Anne Frank House, the Jordaan, the Houseboat Museum, Leiden Square, Rijksmuseum, De Duif and much more.",
      Url: "",
      Pricing: {
        Single: "33,000",
        Couple: "45,000",
      },
    },
    {
      dp_url: "./images/gallery/Azad_Kashmir.jpg",
      Title: "Azad Kashmir Tour",
      Type: "Normal",
      Description:
        "The natural beauty and picturesque locations have made it a favoured destination for tourists across the world. Jammu is famous for its temples, while Kashmir Valley is known for its lakes and gardens. J&K has agro-climatic conditions best suited for horticulture and floriculture.",
      Url: "",
      Pricing: {
        Single: "37,000",
        Couple: "55,000",
      },
    },
    {
      dp_url: "./images/gallery/gorakh.jpg",
      Title: "Gorakh Hill Tour",
      Type: "Normal",
      Description:
        "Planning a trip is a great escape from daily routine. Gorakh hill station is the perfect spot. The Gorakh hill lies in the Kirthar mountain range, which lies in the highest plateaus of Sindh, about 94km northwest of Dadu city. The beautiful hill station is 1700m above sea level.",
      Url: "",
      Pricing: {
        Single: "15,000",
        Couple: "25,000",
      },
    },
    {
      dp_url: "./images/gallery/gilgat.jpg",
      Title: "Gilgat Tour",
      Type: "Normal",
      Description:
        "The city is located in a broad valley near the confluence of the Gilgit River and Hunza River, and is a major tourist destination in Pakistan, serving as a hub for trekking and mountaineering expeditions in the Karakoram mountain range.the hustle and bustle of city life for such a favour.",
      Url: "",
      Pricing: {
        Single: "30,000",
        Couple: "50,000",
      },
    },
  ];

  localStorage.setItem("Users", JSON.stringify(Users));
  localStorage.setItem("Packages", JSON.stringify(Packages));
}
