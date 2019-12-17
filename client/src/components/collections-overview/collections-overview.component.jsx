import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => {
  // useEffect(() => {
  //   //
  //   if (!isFetching && !isLoaded) {
  //     fetchCollectionsStart();
  //   }
  // }, [fetchCollectionsStart]);

  // const query = "Nike";
  // const searched = collections.map(({ items }) => {
  //   return items.filter(
  //     item => item.name.toLowerCase().includes(query.toLowerCase()) == true
  //   );
  // });

  // console.log(searched);
  // console.log(collections);
  // <h1>{searched[0][0].imageUrl}</h1>;

  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
