var image = document.getElementsByClassName("thumbnail");
      new simpleParallax(image, {
        delay: 0.6,
        transition: "cubic-bezier(0,0,0,1)",
        scale: 1.9,
      });

      var image2 = document.getElementsByClassName("test");
      new simpleParallax(image2, {
        orientation: "left",
        scale: 1.2,
      });