export type FetchResponseGET<data, param> = {
  response: data | null;
  error: any;
  loading: boolean;
  fetcher: (arg: param, token?: string, isFormData?: boolean) => any;
};

export type FetchResponsePOST<data, param> = {
  response: data | null;
  error: any;
  loading: boolean;
  fetcher: (arg: param, token?: string, isForm?: boolean) => any;
};

export type employeeType = {
  id: number;
  departmentId: number;
  imageUri: string;
  name: string;
  email: string;
  managerId: string;
  employeesIDs: any;
};

export type departmentType = {
  id: number;
  description: string;
  imageUri: string;
  employeeIds: [];
  parentDepartmentId: number;
  subdepartmentIds: [];
};
