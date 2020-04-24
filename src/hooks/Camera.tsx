import { useCamera } from '@ionic/react-hooks/camera';
import { CameraResultType, CameraSource } from "@capacitor/core";

function usePhoto() {

    const { getPhoto } = useCamera();
  
    const takePhoto = async () => {
      const cameraPhoto = await getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 75,
        width: 1000,
        height: 1000
      });
      return cameraPhoto.dataUrl;
    };
  
    return {
      takePhoto
    };
  }

  
export default usePhoto;
