import { Suspense } from "react";
const Main = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen pt-10">{children}</main>
    </Suspense>
  );
};

export default Main;
