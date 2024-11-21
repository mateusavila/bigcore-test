export interface LatitudeLongitude {
  latitude: number;
  longitude: number;
}

export interface VehicleTracking {
  vehicleId: number;
  vehicleIdTms: string;
  divisionId: number;
  divisionName: string;
  operationId: number;
  operationName: string;
  connector: string;
  licensePlate: string;
  driverId: number;
  driverName: string;
  driverIdTms: string;
  driverDivisionId: null | number;
  driverDivisionName: null | string;
  driverOperationId: null | number;
  driverOperationName: null | string;
  dateProcess: string;
  interval: number;
  timezone: number;
  moving: boolean;
  id: string;
  delayed: boolean;
  odometer: number;
  odometerKm: number;
  ignition: boolean;
  ignitionStatus: string;
  bearing: null | number;
  point: LatitudeLongitude;
  speed: number;
  quality: number;
  date: string;
}

export interface RequestDataVehicleTracking {
  data: VehicleTracking[];
  totalItems: number;
  numberOfRowPages: number;
  pageActive: number;
  totalPages: number;
}

export interface ColumnsVehicles {
  title: string;
  value: string;
  required: boolean;
  selected: boolean;
  width?: string | number;
}

export interface DivisionsItem {
  title: string;
  value: number;
  selected: boolean;
}

export interface PerPageOptions {
  title: string;
  value: number;
}

export interface FilterFields {
  startDate: string;
  endDate: string;
  licensePlate?: string[];
  divisionsId?: number[];
  idTms?: string[];
}

export interface OptionsRoute {
  page?: number | null;
  rows?: number | null;
  divisionId?: number[] | null;
  licensePlate?: string[] | null;
  idTms?: string[] | null;
  endDate?: string | null;
  startDate?: string | null;
}

export interface Connectors {
  title: string;
  url: string;
  width: number;
}

export interface ListScorecard {
  id: number;
  text: string;
  color: string;
  activeColor: string;
  value: string;
  icon: string;
  helper?: string;
  category: "alerts" | "activities" | "availability" | "states" | "cities";
}

export interface HandleFilterConfig {
  alertToggle: boolean;
  alertAvailability: boolean;
  alertActivity: boolean;
  alertCity: boolean;
  alertState: boolean;
  hideNumbers: boolean;
  limitVisibility: boolean;
  amountScorecards: number;
}
