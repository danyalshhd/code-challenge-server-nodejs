import request from "supertest";
import { app } from '../../app';
import { ISensor } from "../../dto/ISensor";

it('returns an NOT FOUND error', async () => {
    await request(app)
        .get('/v1/temperature')
        .expect(404)
})

it('returns error if invalid id provided', async () => {
    const id = 'a';
    await request(app)
        .get(`/v1/temperature/${id}`)
        .expect(400)
})

it('returns expected id in sucess case', async () => {
    const id = 1;
    const response = await request(app)
        .get(`/v1/temperature/${id}`)
        
    const extractTemperature: ISensor = JSON.parse(response.text) as ISensor;
    expect(+extractTemperature.id).toEqual(id);
})
