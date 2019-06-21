import { Location } from "./Location";

export interface Launchpads {
    id: string;
    full_name: string;
    status: string;
    location: Location;
    vehicles_launched: string[];
    details: string;
}