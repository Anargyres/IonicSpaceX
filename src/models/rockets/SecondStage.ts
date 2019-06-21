import { Payload } from "./Payload";
import { Thrust } from "../capsule/Thrust";

export interface SecondStage {
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust: Thrust;
    payloads: Payload[];
}