interface DogDetailProps {
  dogUrl: string;
  handleDelete: (dogUrl: string) => void;
}

const DogDetail = ({ dogUrl, handleDelete }: DogDetailProps) => {
  return (
    <div>
      <img src={dogUrl} alt={`Url: ${dogUrl}`}></img>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleDelete(dogUrl)}
      >
        Delete
      </button>
    </div>
  );
};

export default DogDetail;
