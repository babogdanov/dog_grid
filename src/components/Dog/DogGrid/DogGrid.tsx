import { DogDataResponse } from "../DogView/DogView";

interface DogGridProps {
  dogDataResponse: DogDataResponse;
  handleImageClick: (dogUrl: string) => void;
}

const DogGrid = ({ dogDataResponse, handleImageClick }: DogGridProps) => {
  const dataOk =
    dogDataResponse &&
    dogDataResponse.status === "success" &&
    dogDataResponse.dogData?.length > 0;
  return (
    <div className="grid grid-cols-3 gap-8 justify-center p-10">
      {dataOk &&
        dogDataResponse?.dogData.map((dogUrl, index) => (
          <div key={dogUrl} className="flex justify-center">
            <button onClick={() => handleImageClick(dogUrl)}>
              <img src={dogUrl} alt={`Dog number ${index + 1}`}></img>
            </button>
          </div>
        ))}
      {!dataOk && <div>Something went wrong with the data.</div>}
    </div>
  );
};

export default DogGrid;
