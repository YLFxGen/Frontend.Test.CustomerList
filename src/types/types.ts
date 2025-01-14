export interface Customer {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthday?: Date;
}

export interface ICustomer extends Customer {
  id: number;
}

export type CustomerState = {
  customers: { [id: string]: ICustomer };
};

export type CustomerAction = {
  type: string;
  customer: ICustomer;
};

export type DispatchType = (args: CustomerAction) => CustomerAction;
