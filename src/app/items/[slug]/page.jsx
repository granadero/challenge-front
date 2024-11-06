import React from "react";
import DetailItem from "@/modules/items/detailItem/detailItem";
import LayoutItems from "@/modules/items/LayoutItems";
import ItemsService from "@/service/api/items.service";

const getItemDetail = async (slug) => {
  return await ItemsService.getItemDetail(slug);
};

export default async function ItemDetail({ params }) {
  const { slug } = params;
  const result = await getItemDetail(slug);
  return (
    <LayoutItems categories={result.item.category}>
      <DetailItem item={result.item} />
    </LayoutItems>
  );
}
