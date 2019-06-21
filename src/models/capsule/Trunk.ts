import { TrunkVolume } from "./TrunkVolume";
import { Cargo } from "./Cargo";

export interface Trunk {
    trunk_volume: TrunkVolume;
    cargo: Cargo;
}