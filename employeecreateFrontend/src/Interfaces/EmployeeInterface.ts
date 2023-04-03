export interface Employee {
    readonly id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    address: string;
    startDate: Date;
    finishDate?: Date;
    hours?: number;
    timeBasis: string;
    contractType: string;
    ongoing: boolean;
  }