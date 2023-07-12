import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import UseFetch from "../../../Hooks/UseFetch";
 

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = UseFetch(`/${mediaType}/${id}/recommendations`);

    return (
        <Carousel
            title="recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;