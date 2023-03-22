export interface Employee {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    address: string;
    startDate: string;
    finishDate: string | null;
    hours: number | null;
    timeBasis: string;
    contractType: string;
    ongoing: boolean;
  }