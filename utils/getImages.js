const getImagePaths = () => {
    const imageContext = require.context('../public/images', false, /\.(png|jpg|jpeg|gif)$/);
  
    return imageContext.keys().map((path) => {
      const imagePath = imageContext(path);
      return {
        path,
        src: imagePath.default,
      };
    });
  };
  
  export default getImagePaths;
  