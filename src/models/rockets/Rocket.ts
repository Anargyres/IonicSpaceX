import { FirstStage } from "./FirstStage";
import { SecondStage } from "./SecondStage";
import { LandingLegs } from "./LandingLegs";
import { Engine } from "./Engine";
import { Height } from "./Height";
import { Diameter } from "../capsule/Diameter";
import { Mass } from "./Mass";
import { PayloadWeight } from "./PayloadWeight";

export interface Rocket {

    //fromLaunch
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: FirstStage;
    second_stage: SecondStage;

    //fromRocket
    id: string;
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: Height
    diameter: Diameter
    mass: Mass;
    payload_weights: PayloadWeight[];
    engines: Engine;
    landing_legs: LandingLegs;
    description: string;
}