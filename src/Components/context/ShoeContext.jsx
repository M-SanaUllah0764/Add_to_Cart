import { createContext, useContext, useState } from "react";

const ShoeContext = createContext();

export const useShoeContext = () => {
  return useContext(ShoeContext);
};

export const ShoeProvider = ({ children }) => {
  const initialShoes = [
    {
      id: 1,
      img: "./img.jpg",
      name: "LOGO 1 BKA",
      price: "Rs. 17,500",
      isSold: false,
    },
    {
      id: 2,
      img: "./img2.jpg",
      name: "LOGO 2 BKA",
      price: "Rs. 17,500",
      isSold: false,
    },
    {
      id: 3,
      img: "./img2.jpg",
      name: "LOGO 3 BKA",
      price: "Rs. 17,500",
      isSold: false,
    },
    {
      id: 4,
      img: "./img2.jpg",
      name: "LOGO 4 BKA",
      price: "Rs. 17,500",
      isSold: false,
    },
    {
      id: 5,
      img: "./img2.jpg",
      name: "LOGO 5 BKA",
      price: "Rs. 17,500",
      isSold: false,
    },
  ];

  const [shoes, setShoes] = useState(initialShoes);
  const [cart, setCart] = useState([]);
  const [soldItems, setSoldItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getShoes = () => {
    // Filter shoes based on search query
    const filteredShoes = shoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredShoes;
  };

  const handleChangeAllShoes = () => {
    const newShoes = [
      {
        id: 6,
        img: "./new-img.jpg",
        name: "New Shoe 1",
        price: "Rs. 20,000",
        isSold: false,
      },
      {
        id: 7,
        img: "./new-img2.jpg",
        name: "New Shoe 2",
        price: "Rs. 22,500",
        isSold: false,
      },
      {
        id: 8,
        img: "./new-img2.jpg",
        name: "New Shoe 3",
        price: "Rs. 22,500",
        isSold: false,
      },
      {
        id: 9,
        img: "./new-img2.jpg",
        name: "New Shoe 4",
        price: "Rs. 22,500",
        isSold: false,
      },
      {
        id: 10,
        img: "./new-img2.jpg",
        name: "New Shoe 5",
        price: "Rs. 22,500",
        isSold: false,
      },
    ];

    setShoes(newShoes);
  };

  const addToCart = (shoe) => {
    setCart((prevCart) => [...prevCart, shoe]);
  };

  const markAsSold = (itemId) => {
    // Remove the item from the current cart
    setCart(cart.filter((item) => item.id !== itemId));

    // Find the item to mark as sold
    const itemToMarkAsSold = shoes.find((shoe) => shoe.id === itemId);

    // Update the soldItems state
    setSoldItems((prevSoldItems) => [...prevSoldItems, itemToMarkAsSold]);

    // Update the isSold property of the item in the shoes state
    setShoes((prevShoes) =>
      prevShoes.map((shoe) =>
        shoe.id === itemId ? { ...shoe, isSold: true } : shoe
      )
    );
  };

  return (
    <ShoeContext.Provider
      value={{
        getShoes,
        handleChangeAllShoes,
        addToCart,
        markAsSold,
        cart,
        soldItems,
        setSearchQuery,
      }}
    >
      {children}
    </ShoeContext.Provider>
  );
};
