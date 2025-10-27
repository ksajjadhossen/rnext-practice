import { useEffect } from "react";

export default function Scroller() {
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollX, window.scrollY);
    }
    //subscribing to scroll event
    window.addEventListener("scroll", handleScroll);

    //cleanup is mandatory ....

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <h1 style={{ fontSize: "100px" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum atque illo
      ab deserunt adipisci veritatis sequi molestias facilis rerum ipsa quam
      delectus sapiente impedit error ad magnam deleniti perferendis hic
      doloremque praesentium autem cum officiis, omnis unde! Perspiciatis, rem
      veniam! Rerum animi ratione praesentium consequatur numquam? Alias est
      autem obcaecati?
    </h1>
  );
}
