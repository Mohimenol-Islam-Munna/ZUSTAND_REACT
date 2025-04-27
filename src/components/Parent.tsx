import useStore, { customHook, useGetGlobalContext } from "../store";

const Parent = () => {
  const count = useStore((state: any) => state.count);
  const incrementHandler = useStore((state: any) => state.increment);
  const decrementHandler = useStore((state: any) => state.decrement);
  const resetHandler = useStore((state: any) => state.reset);

  const { value, incrementValue, decrementValue, resetValue } = customHook();
  const result = useGetGlobalContext();

  const { data, incrementData, decrementData, resetData } = result;

  console.log("🚀 ~ Parent ~ context result:", result);

  return (
    <div className="my-4 border border-red-300 rounded-lg p-5">
      <div>
        <h4 className="text-3xl">Count: {count}</h4>
        <h4 className="text-3xl">Value: {value}</h4>
        <h4 className="text-3xl">Context: {data}</h4>

        <div className="flex gap-5 flex-wrap mt-8">
          <button
            className="border border-green-500 px-4 py-2 rounded-full"
            onClick={() => {
              incrementHandler();
              incrementValue();
              incrementData();
            }}
          >
            Increment
          </button>
          <button
            className="border border-yellow-500 px-4 py-2 rounded-full"
            onClick={() => {
              decrementHandler();
              decrementValue();
              decrementData();
            }}
          >
            Decrement
          </button>
          <button
            className="border border-red-500 px-4 py-2 rounded-full"
            onClick={() => {
              resetHandler();
              resetValue();
              resetData();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parent;
