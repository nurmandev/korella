import { useEffect } from "react";

const SnowWrapper = ({ children }) => {
  useEffect(() => {
    // Snow effect script
    var heroSection = document.querySelector(".hero-section"); // Target the Hero section

    if (heroSection && !heroSection.querySelector("#embedim--snow")) {
      function embRand(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
      }

      var embCSS =
        ".embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px}";
      var embHTML = "";

      for (var i = 1; i < 200; i++) {
        embHTML += '<i class="embedim-snow"></i>';
        var rndX = embRand(0, 1000000) * 0.0001,
          rndO = embRand(-100000, 100000) * 0.0001,
          rndT = (embRand(3, 8) * 10).toFixed(2),
          rndS = (embRand(0, 10000) * 0.0001).toFixed(2);

        embCSS +=
          ".embedim-snow:nth-child(" +
          i +
          "){" +
          "opacity:" +
          (embRand(1, 10000) * 0.0001).toFixed(2) +
          ";" +
          "transform:translate(" +
          rndX.toFixed(2) +
          "vw,-10px) scale(" +
          rndS +
          ");" +
          "animation:fall-" +
          i +
          " " +
          embRand(10, 30) +
          "s -" +
          embRand(0, 30) +
          "s linear infinite" +
          "}" +
          "@keyframes fall-" +
          i +
          "{" +
          rndT +
          "%{" +
          "transform:translate(" +
          (rndX + rndO).toFixed(2) +
          "vw," +
          rndT +
          "vh) scale(" +
          rndS +
          ")" +
          "}" +
          "to{" +
          "transform:translate(" +
          (rndX + rndO / 2).toFixed(2) +
          "vw, 105vh) scale(" +
          rndS +
          ")" +
          "}" +
          "}";
      }

      var embedimSnow = document.createElement("div");
      embedimSnow.id = "embedim--snow";
      embedimSnow.innerHTML =
        "<style>#embedim--snow{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;pointer-events:none;z-index:0}" +
        embCSS +
        "</style>" +
        embHTML;

      heroSection.appendChild(embedimSnow); // Append to the Hero section
    }
  }, []);

  return <div className="hero-section relative">{children}</div>;
};

export default SnowWrapper;
