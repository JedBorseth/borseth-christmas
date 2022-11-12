import Footer from "./components/Footer";
import Header from "./components/Header";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://ubrhjizvkeuroroqkemq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVicmhqaXp2a2V1cm9yb3FrZW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTAyOTEsImV4cCI6MTk4Mzc4NjI5MX0.lkw-GYuZZBSq0WuObgRp_xMTjGDXBPZzjA_RZOZTG4A",
);
console.log(supabase);
const DrawNames = () => {
  return (
    <div className="h-screen w-full bg-neutral font-light text-white">
      <Header />
      <main className="grid min-h-screen grid-rows-3 items-center bg-inherit">
        <div className="grid w-full place-items-center">
          <input
            type="text"
            placeholder="Enter Name"
            className="input-bordered input-primary input w-full w-2/3 max-w-xs text-black"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DrawNames;
