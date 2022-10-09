import 'dotenv/config';
export const SENSOR_TECH_ENDPOINT = 
    (resourceId: string) => `${process.env.BASE_SENSOR_TECH_URL}sensor/${resourceId}`;