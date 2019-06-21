import { Link } from "./Link";
import { LaunchSite } from "./LaunchSite";
import { Rocket } from "../rockets/Rocket";
import { Telemetry } from "./Telemetry";
import { Reuse } from "./Reuse";

export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: Date;
    launch_date_local: Date;
    rocket: Rocket;
    telemetry: Telemetry;
    reuse: Reuse;
    launch_site: LaunchSite;
    launch_success: boolean;
    links: Link;
    details: string;
}