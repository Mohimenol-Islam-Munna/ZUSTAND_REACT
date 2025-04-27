import useStore, { customHook, useGetGlobalContext } from "../store";

const Child = () => {
  const count = useStore((state: any) => state.count);
  const { value } = customHook();
  const { data } = useGetGlobalContext();

  return (
    <div className="my-4 border border-red-300 rounded-lg p-4">
      <h2 className="text-3xl">Child Count: {count}</h2>
      <h2 className="text-3xl">Child Value: {value}</h2>
      <h2 className="text-3xl">Child Context: {data}</h2>
    </div>
  );
};

export default Child;
