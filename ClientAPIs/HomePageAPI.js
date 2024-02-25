import { BASEAPIS } from "../BaseAPIs/BaseAPIs";


export const HomePageAPI = {

    fetchAllVehicles: (data) => {
        return BASEAPIS.POSTAPI(data, 'getNearbyLocation');
    },
}