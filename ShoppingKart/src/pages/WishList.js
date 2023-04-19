import React, { useContext } from "react";
import { WishListContext } from "../App";
import WishListCard from "../components/WishListCard";

const WishList = () => {
  const { wishList } = useContext(WishListContext);

  return (
    <main>
      {!wishList.length ? (
        <h2>WishList is Empty</h2>
      ) : (
        <>
          <h2>WishList Items : {wishList.length > 0 && wishList.length}</h2>
          <ul>
            {wishList?.map((wishListItem) => (
              <WishListCard key={wishListItem.id} wishListItem={wishListItem} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default WishList;
