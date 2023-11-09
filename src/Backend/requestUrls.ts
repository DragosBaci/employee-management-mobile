const backendEnvironment = 'http://localhost:8080/';
const routeBase = 'api';
const authRouteBase = 'auth';
const id = ':id';

const requestUrls = {
  authLogin: `${backendEnvironment}${routeBase}/${authRouteBase}/login`,
  authRegister: `${backendEnvironment}${routeBase}/${authRouteBase}/register`,
  authLogout: `${backendEnvironment}${routeBase}/${authRouteBase}/logout`,

  departments: `${backendEnvironment}${routeBase}/department`,
  department: `${backendEnvironment}${routeBase}/department/${id}`,

  employees: `${backendEnvironment}${routeBase}/employee`,
  employee: `${backendEnvironment}${routeBase}/employee/${id}`,

  subordinates: `${backendEnvironment}${routeBase}/manager/${id}`,
  subdepartments: `${backendEnvironment}${routeBase}/subdepartment/${id}`,

  employeesInDepartment: `${backendEnvironment}${routeBase}/department/${id}/employees`,

  sendEmail: `${backendEnvironment}${routeBase}/send-email`,

  employeesInDepartmentAndSubdepartment: `${backendEnvironment}${routeBase}/employee/in-department/${id}`,
};

export default requestUrls;
