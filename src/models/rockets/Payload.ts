export interface Payload {
    payload_id: string;
    reused: boolean;
    customers: string[];
    payload_type: string;
    payload_mass_kg?: number;
    payload_mass_lbs?: number;
    orbit: string;
    cap_serial: string;
    mass_returned_kg?: number;
    mass_returned_lbs?: number;
    flight_time_sec?: number;
    cargo_manifest: string;
}