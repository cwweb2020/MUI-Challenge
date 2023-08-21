const useColors = () => {

    const gradients = [
        "linear-gradient(45deg, rgba(0,255,0,1) 0%, rgba(0,0,255,1) 100%);",
        "linear-gradient(45deg, rgba(255,165,0,1) 0%, rgba(165,42,42,1) 100%);",
        "linear-gradient(45deg, rgba(128,128,128,1) 0%, rgba(165,42,42,1) 100%);",
        "linear-gradient(45deg, rgba(53,53,134,1) 0%, rgba(160,106,254,1) 100%);",
        "linear-gradient(45deg, rgba(134,53,53,1) 0%, rgba(254,106,233,1) 100%);",
        "linear-gradient(45deg, rgba(255,215,0,1) 0%, rgba(254,106,233,1) 100%);",
        "linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(254,106,233,1) 100%);",
        "linear-gradient(45deg, rgba(93,85,85,1) 0%, rgba(254,106,233,1) 100%);",
        "linear-gradient(45deg, rgba(0,255,0,1) 0%, rgba(254,106,233,1) 100%);",
        "linear-gradient(45deg, rgba(75,0,130,1) 0%, rgba(106,254,198,1) 100%);"
      ];
      
      function getRandomGradient() {
        const randomIndex = Math.floor(Math.random() * gradients.length);
        return gradients[randomIndex];
      }
      
      const randomGradient = getRandomGradient();

  return {
        randomGradient
  }
}

export default useColors