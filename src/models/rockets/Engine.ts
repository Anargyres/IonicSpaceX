import { ThrustSeaLevel2 } from "./ThrustSeaLevel2";
import { ThrustVacuum2 } from "./ThrustVacuum2";

export interface Engine {
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: ThrustSeaLevel2;
    thrust_vacuum: ThrustVacuum2;
    thrust_to_weight: number;
}