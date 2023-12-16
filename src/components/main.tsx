import { Suspense } from "react";
const Main = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="mt-20 text-2xl font-bold flex justify-center items-center min-h-screen">
          Loading...
        </div>
      }
    >
      <main className="min-h-screen pt-10">{children}</main>
    </Suspense>
  );
};

export default Main;
