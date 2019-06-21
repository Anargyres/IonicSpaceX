import { Thrust } from "./Thrust";

    export interface Thruster {
        type: string;
        amount: number;
        pods: number;
        fuel_1: string;
        fuel_2: string;
        thrust: Thrust;
    }