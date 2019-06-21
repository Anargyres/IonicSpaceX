export interface CoreDetails {
    core_serial: string;
    block?: number;
    status: string;
    original_launch: any;
    missions: string[];
    rtls_attempt: boolean;
    rtls_landings: number;
    asds_attempt: boolean;
    asds_landings: number;
    water_landing: boolean;
    details: string;
}