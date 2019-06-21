import { HeatShield } from "./HeatShield";
import { Thruster } from "./Thruster";
import { LaunchPayloadMass } from "./LaunchPayloadMass";
import { LaunchPayloadVol } from "./LaunchPayloadVol";
import { ReturnPayloadMass } from "./ReturnPayloadMass";
import { ReturnPayloadVol } from "./ReturnPayloadVol";
import { PressurizedCapsule } from "./PressurizedCapsule";
import { Trunk } from "./Trunk";
import { HeightWTrunk } from "./HeightWTrunk";
import { Diameter } from "./Diameter";

export interface Capsule {
    id: string;
    name: string;
    type: string;
    active: boolean;
    crew_capacity: number;
    sidewall_angle_deg: number;
    orbit_duration_yr: number;
    heat_shield: HeatShield;
    thrusters: Thruster[];
    launch_payload_mass: LaunchPayloadMass;
    launch_payload_vol: LaunchPayloadVol;
    return_payload_mass: ReturnPayloadMass;
    return_payload_vol: ReturnPayloadVol;
    pressurized_capsule: PressurizedCapsule;
    trunk: Trunk;
    height_w_trunk: HeightWTrunk;
    diameter: Diameter;
}
