// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:2250",
  userDetails: "/api/Students/GetUserProfile",
  tokenUrl: "/Token",
  studentDetails: "/api/admin/GetUserProfile",
  api_RegisterUser: "/api/Account/Register",
  api_MasterData: "/api/admin/GetMasterDetails",
  api_updateStudents: "/api/admin/UpdateStudent",
  api_createStudents: "/api/Account/RegisterStudent",
  api_CreateUpdateBatches: "/api/admin/CreateUpdateBatch",
  api_Transactions: "/api/admin/GetTransactions",
  api_CreateTransaction: "/api/admin/CreateTransactions",
  api_UpdateTransaction: "/api/admin/UpdateTransaction",
  api_GetHomePageResponse: "/api/admin/GetHomePageResponse"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
