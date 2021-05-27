export enum PermissionKey {
  NotAllowed = 'NotAllowed',

  ViewOwnUser = 'ViewOwnUser',
  ViewAnyUser = 'ViewAnyUser',
  ViewTenantUser = 'ViewTenantUser',
  CreateAnyUser = 'CreateAnyUser',
  CreateUser = 'CreateUser',
  CreateTenantUser = 'CreateTenantUser',
  UpdateOwnUser = 'UpdateOwnUser',
  UpdateTenantUser = 'UpdateTenantUser',
  UpdateAnyUser = 'UpdateAnyUser',
  UpdateUser = 'UpdateUser',
  DeleteTenantUser = 'DeleteTenantUser',
  DeleteAnyUser = 'DeleteAnyUser',

  ViewTenant = 'ViewTenant',
  CreateTenant = 'CreateTenant',
  UpdateTenant = 'UpdateTenant',
  DeleteTenant = 'DeleteTenant',

  ViewAudit = 'ViewAudit',
  CreateAudit = 'CreateAudit',
  UpdateAudit = 'UpdateAudit',
  DeleteAudit = 'DeleteAudit',

  ViewCareGroup = 'ViewCareGroup',
  CreateCareGroup = 'CreateCareGroup',
  UpdateCareGroup = 'UpdateCareGroup',
  DeleteCareGroup = 'DeleteCareGroup',

  ViewRoles = 'ViewRoles',
  CreateRoles = 'CreateRoles',
  UpdateRoles = 'UpdateRoles',
  DeleteRoles = 'DeleteRoles',

  CreateMoods = 'CreateMoods',
  ViewMoods = 'ViewMoods',
  UpdateMoods = 'UpdateMoods',
  DeleteMoods = 'DeleteMoods',

  ViewPatient = 'ViewPatient',
  CreatePatient = 'CreatePatient',
  UpdatePatient = 'UpdatePatient',
  DeactivatePatient = 'DeactivatePatient',
  CanRequestDeactivatePatient = 'CanRequestDeactivatePatient',
  DeletePatient = 'DeletePatient',
  CanSendMedicalRecords = 'CanSendMedicalRecords',

  ViewCaregiver = 'ViewCaregiver',
  CreateCaregiver = 'CreateCaregiver',
  UpdateCaregiver = 'UpdateCaregiver',
  DeactivateCaregiver = 'DeactivateCaregiver',
  CanRequestDeactivateCaregiver = 'CanRequestDeactivateCaregiver',
  DeleteCaregiver = 'DeleteCaregiver',

  InviteCaregiver = 'InviteCaregiver',

  CreateSideEffectLog = 'CreateSideEffectLog',
  ViewSideEffectLog = 'ViewSideEffectLog',
  DeleteSideEffectLog = 'DeleteSideEffectLog',
  ViewSideEffect = 'ViewSideEffect',
  CreateSideEffect = 'CreateSideEffect',
  UpdateSideEffect = 'UpdateSideEffect',
  DeleteSideEffect = 'DeleteSideEffect',

  CreateMoodLogs = 'CreateMoodLogs',
  ViewMoodLogs = 'ViewMoodLogs',
  UpdateMoodLogs = 'UpdateMoodLogs',
  DeleteMoodLogs = 'DeleteMoodLogs',

  ViewAuditLog = 'ViewAuditLog',
  CreateAuditLog = 'CreateAuditLog',

  CanGetNotificationAccess = 'CanGetNotificationAccess',
  CanSendDhrNotification = 'CanSendDhrNotification',

  ViewEHRAppointment = 'ViewEHRAppointment',
  CreateEHRAppointment = 'CreateEHRAppointment',
  UpdateEHRAppointment = 'UpdateEHRAppointment',
  DeleteEHRAppointment = 'DeleteEHRAppointment',

  ViewEHRPatient = 'ViewEHRPatient',
  CreateEHRPatient = 'CreateEHRPatient',
  UpdateEHRPatient = 'UpdateEHRPatient',
  DeleteEHRPatient = 'DeleteEHRPatient',

  ViewEHRPrescription = 'ViewEHRPrescription',
  CreateEHRPrescription = 'CreateEHRPrescription',
  UpdateEHRPrescription = 'UpdateEHRPrescription',
  DeleteEHRPrescription = 'DeleteEHRPrescription',

  ViewEHRTherapyPlan = 'ViewEHRTherapyPlan',
  CreateEHRTherapyPlan = 'CreateEHRTherapyPlan',
  UpdateEHRTherapyPlan = 'UpdateEHRTherapyPlan',
  DeleteEHRTherapyPlan = 'DeleteEHRTherapyPlan',

  UploadHealthRecord = 'UploadHealthRecord',
  DownloadHealthRecord = 'DownloadHealthRecord',
  DeleteHealthRecord = 'DeleteHealthRecord',
  UpdateHealthRecord = 'UpdateHealthRecord',

  CreatePhrTags = 'CreatePhrTags',
  ViewPhrTags = 'ViewPhrTags',
  UpdatePhrTags = 'UpdatePhrTags',
  DeletePhrTags = 'DeletePhrTags',

  ViewPhrCategories = 'ViewPhrCategories',
  CreatePhrCategories = 'CreatePhrCategories',
  UpdatePhrCategories = 'UpdatePhrCategories',
  DeletePhrCategories = 'DeletePhrCategories',

  CreateDietPlan = 'CreateDietPlan',
  ViewDietPlan = 'ViewDietPlan',
  UpdateDietPlan = 'UpdateDietPlan',
  DeleteDietPlan = 'DeleteDietPlan',

  CreateDiet = 'CreateDiet',
  ViewDiet = 'ViewDiet',
  UpdateDiet = 'UpdateDiet',
  DeleteDiet = 'DeleteDiet',

  CreateFoodLogs = 'CreateFoodLogs',
  ViewFoodLogs = 'ViewFoodLogs',
  UpdateFoodLogs = 'UpdateFoodLogs',
  DeleteFoodLogs = 'DeleteFoodLogs',

  ViewAppointment = 'ViewAppointment',
  CreateAppointment = 'CreateAppointment',
  UpdateAppointment = 'UpdateAppointment',
  DeleteAppointment = 'DeleteAppointment',

  ViewPrescription = 'ViewPrescription',
  CreatePrescription = 'CreatePrescription',
  UpdatePrescription = 'UpdatePrescription',
  DeletePrescription = 'DeletePrescription',

  ViewPrescriptionMeds = 'ViewPrescriptionMeds',
  CreatePrescriptionMeds = 'CreatePrescriptionMeds',
  UpdatePrescriptionMeds = 'UpdatePrescriptionMeds',
  DeletePrescriptionMeds = 'DeletePrescriptionMeds',

  ViewTherapyPlan = 'ViewTherapyPlan',
  CreateTherapyPlan = 'CreateTherapyPlan',
  UpdateTherapyPlan = 'UpdateTherapyPlan',
  DeleteTherapyPlan = 'DeleteTherapyPlan',

  ViewOwnAppointment = 'ViewOwnAppointment',
  UpdateOwnAppointment = 'UpdateOwnAppointment',

  ViewOwnPrescription = 'ViewOwnPrescription',

  ViewOwnTherapyPlan = 'ViewOwnTherapyPlan',

  ViewAppointmentNote = 'ViewAppointmentNote',
  CreateAppointmentNote = 'CreateAppointmentNote',
  UpdateAppointmentNote = 'UpdateAppointmentNote',
  DeleteAppointmentNote = 'DeleteAppointmentNote',

  ViewCMSContent = 'ViewCMSContent',
  ViewCategory = 'ViewCategory',
  ViewContent = 'ViewContent',
  ViewCondition = 'ViewCondition',
  ViewGallery = 'ViewGallery',
  ViewSubCategory = 'ViewSubCategory',

  CreateCareGroupUser = 'CreateCareGroupUser',
  ViewCareGroupUser = 'ViewCareGroupUser',
  UpdateCareGroupUser = 'UpdateCareGroupUser',
  DeleteCareGroupUser = 'DeleteCareGroupUser',

  ViewHealthTasks = 'ViewHealthTasks',
  CreateHealthTasks = 'CreateHealthTasks',
  UpdateHealthTasks = 'UpdateHealthTasks',
  DeleteHealthTasks = 'DeleteHealthTasks',

  ViewPatientHealthTasks = 'ViewPatientHealthTasks',
  CreatePatientHealthTasks = 'CreatePatientHealthTasks',
  UpdatePatientHealthTasks = 'UpdatePatientHealthTasks',
  DeletePatientHealthTasks = 'DeletePatientHealthTasks',

  ViewPatientHealthTasksLogs = 'ViewPatientHealthTasksLogs',
  CreatePatientHealthTasksLogs = 'CreatePatientHealthTasksLogs',
  UpdatePatientHealthTasksLogs = 'UpdatePatientHealthTasksLogs',
  DeletePatientHealthTasksLogs = 'DeletePatientHealthTasksLogs',

  CreateTenantConfig = 'CreateTenantConfig',
  ViewTenantConfig = 'ViewTenantConfig',
  UpdateTenantConfig = 'UpdateTenantConfig',
  DeleteTenantConfig = 'DeleteTenantConfig',

  CreateOwnTenantConfig = 'CreateOwnTenantConfig',
  ViewOwnTenantConfig = 'ViewOwnTenantConfig',
  UpdateOwnTenantConfig = 'UpdateOwnTenantConfig',
  DeleteOwnTenantConfig = 'DeleteOwnTenantConfig',
  ManageOwnTenantConfig = 'ManageOwnTenantConfig',

  CreateFeed = 'CreateFeed',
  ViewFeed = 'ViewFeed',
  UpdateFeed = 'UpdateFeed',
  DeleteFeed = 'DeleteFeed',

  CreateMedLog = 'CreateMedLog',
  ViewMedLog = 'ViewMedLog',
  UpdateMedLog = 'UpdateMedLog',
  DeleteMedLog = 'DeleteMedLog',

  CanChat = 'CanChat',

  CanAccessAppointmentQueue = 'CanAccessAppointmentQueue',

  CanAccessPatientQueue = 'CanAccessPatientQueue',

  CanAccessPrescriptionQueue = 'CanAccessPrescriptionQueue',

  CanAccessTherapyPlanQueue = 'CanAccessTherapyPlanQueue',

  CreateAlert = 'CreateAlert',
  ViewAlert = 'ViewAlert',
  UpdateAlert = 'UpdateAlert',
  DeleteAlert = 'DeleteAlert',

  CanPushNotification = 'CanPushNotification',

  CanSeeCareCentral = 'CanSeeCareCentral',

  ViewAlertConfig = 'ViewAlertConfig',
  UpdateAlertConfig = 'UpdateAlertConfig',

  CreateBadge = 'CreateBadge',
  ViewBadge = 'ViewBadge',
  UpdateBadge = 'UpdateBadge',
  DeleteBadge = 'DeleteBadge',

  CreatePatientBadge = 'CreatePatientBadge',
  ViewPatientBadge = 'ViewPatientBadge',
  UpdatePatientBadge = 'UpdatePatientBadge',
  DeletePatientBadge = 'DeletePatientBadge',

  ViewNotifications = 'ViewNotifications',

  CreatePatientNursingNote = 'CreatePatientNursingNote',
  ViewPatientNursingNote = 'ViewPatientNursingNote',
  UpdatePatientNursingNote = 'UpdatePatientNursingNote',
  DeletePatientNursingNote = 'DeletePatientNursingNote',
  CreateSurveyLogs = 'CreateSurveyLogs',
  ViewSurveyLogs = 'ViewSurveyLogs',
  UpdateSurveyLogs = 'UpdateSurveyLogs',
  DeleteSurveyLogs = 'DeleteSurveyLogs',

  CreatePatientSurvey = 'CreatePatientSurvey',
  ViewPatientSurvey = 'ViewPatientSurvey',
  UpdatePatientSurvey = 'UpdatePatientSurvey',
  DeletePatientSurvey = 'DeleteSurveyLogs',

  CreateSurvey = 'CreateSurvey',
  ViewSurvey = 'ViewSurvey',
  UpdateSurvey = 'UpdateSurvey',
  DeleteSurvey = 'DeleteSurvey',

  ManagePatientDetails = 'ManagePatientDetails',

  CanViewMedicalRecordsOnly = 'CanViewMedicalRecordsOnly',
  UpsertBulkEhrData = 'UpsertBulkEhrData',
}
