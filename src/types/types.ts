export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
}

export interface ICustomer extends Customer {
  id: number;
}

export type CustomerState = {
  customers: ICustomer[];
};

export type CustomerAction = {
  type: string;
  customer: ICustomer;
};

export type DispatchType = (args: CustomerAction) => CustomerAction;
