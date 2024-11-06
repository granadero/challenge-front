import ItemsService from "@/service/api/items.service";
import React from "react";
import LayoutItems from "@/modules/items/LayoutItems";
import ListItems from "@/modules/items/listItems/listItems";

const getItems = async (search) => {
  return await ItemsService.searchItems(search);
};

async function Items({ searchParams }) {
  const result = await getItems(searchParams.search);

  return (
    <LayoutItems categories={result.categories}>
      <ListItems items={result.items} />
    </LayoutItems>
  );
}
export default Items;
