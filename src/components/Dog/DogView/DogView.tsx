import React from "react";
import { useEffect, useState } from "react";
import DogDetail from "../DogDetail";
import DogGrid from "../DogGrid";

export interface DogDataResponse {
  dogData: string[];
  status: string;
}

const DogView = () => {
  const [dogDataResponse, setDogDataResponse] = useState<DogDataResponse>({
    dogData: [],
    status: "",
  });
  const [detailedViewData, setDetailedViewData] = useState<{
    inDetailedView: boolean;
    dogUrl: string;
  }>({ inDetailedView: false, dogUrl: "" });

  const dogCount = 12;

  const handleImageClick = (dogUrl: string) => {
    setDetailedViewData({ inDetailedView: true, dogUrl });
  };

  const handleImageDelete = (dogUrl: string) => {
    setDogDataResponse((prevState) => {
      const newDogData = [...prevState?.dogData];
      newDogData.splice(
        newDogData.findIndex((x) => x === dogUrl),
        1
      );
      return { status: prevState.status, dogData: newDogData };
    });

    setDetailedViewData({ inDetailedView: false, dogUrl: "" });
  };
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/hound/images`)
      .then((res) => res.json())
      .then((res: { message: string[]; status: string }) => {
        setDogDataResponse({
          status: res.status,
          dogData: res.message.slice(0, dogCount),
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return detailedViewData.inDetailedView ? (
    <DogDetail
      dogUrl={detailedViewData.dogUrl}
      handleDelete={handleImageDelete}
    />
  ) : (
    <DogGrid
      dogDataResponse={dogDataResponse}
      handleImageClick={handleImageClick}
    />
  );
};

export default DogView;
