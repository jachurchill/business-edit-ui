import { EmptyNameRequest, StateModelIF } from '@/interfaces'

export const stateModel: StateModelIF = {
  tombstone: {
    keycloakRoles: [],
    authRoles: [],
    userInfo: null,
    businessId: '',
    entityType: null,
    currentDate: '',
    filingDate: '',
    filingId: 0,
    correctedFilingId: null,
    isSaving: false,
    isSavingResuming: false,
    isFilingPaying: false,
    ignoreChanges: false,
    haveChanges: false
  },
  accountInformation: {
    accountType: '',
    id: null,
    label: '',
    type: ''
  },
  businessInformation: {
    legalType: '',
    identifier: ''
  },
  nameRequest: {
    legalType: null,
    legalName: '',
    nrNumber: '',
    details: {},
    applicant: {
      firstName: '',
      middleName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      city: '',
      countryTypeCode: '',
      postalCode: '',
      stateProvinceCode: ''
    },
    filingId: null
  },
  nameTranslations: [],
  incorporationDateTime: {
    valid: false,
    isFutureEffective: false,
    effectiveDate: null
  },
  certifyState: {
    valid: false,
    certifiedBy: ''
  },
  defineCompanyStep: {
    valid: false,
    changed: false,
    businessContact: {
      email: '',
      confirmEmail: '',
      phone: '',
      extension: ''
    },
    officeAddresses: {},
    folioNumber: null
  },
  peopleAndRolesStep: {
    valid: false,
    changed: false,
    orgPeople: []
  },
  shareStructureStep: {
    valid: false,
    changed: false,
    shareClasses: []
  },
  incorporationAgreementStep: {
    valid: false,
    changed: false,
    agreementType: null
  },
  originalIA: {
    header: {
      name: '',
      certifiedBy: '',
      date: '',
      folioNumber: '',
      isFutureEffective: null
    },
    business: {
      legalType: '',
      identifier: ''
    },
    incorporationApplication: {
      nameRequest: {
        legalType: ''
      },
      nameTranslations: [],
      offices: {},
      contactPoint: {
        email: '',
        phone: '',
        extension: ','
      },
      parties: [],
      shareStructure: {
        shareClasses: []
      },
      incorporationAgreement: {
        agreementType: ''
      }
    }
  },
  originalAlteration: {
    header: {
      name: '',
      certifiedBy: '',
      date: '',
      folioNumber: '',
      effectiveDate: null
    },
    business: {
      foundingDate: null,
      legalName: '',
      legalType: '',
      identifier: ''
    },
    alteration: {
      provisionsRemoved: null,
      business: {
        legalType: '',
        identifier: ''
      },
      nameRequest: { ...EmptyNameRequest },
      nameTranslations: [],
      shareStructure: {
        resolutionDates: [],
        shareClasses: []
      },
      contactPoint: {
        email: '',
        phone: '',
        extension: ','
      }
    }
  },
  originalSnapshot: [],
  staffPaymentStep: {
    valid: false,
    staffPayment: {
      option: NaN,
      routingSlipNumber: '',
      bcolAccountNumber: '',
      datNumber: '',
      folioNumber: '',
      isPriority: false
    }
  },
  filingData: {
    filingTypeCode: null,
    entityType: null,
    priority: false,
    waiveFees: false
  },
  detail: {
    valid: false,
    comment: ''
  },
  editingFlags: {
    companyName: false,
    nameTranslations: false,
    officeAddresses: false,
    peopleAndRoles: false,
    shareStructure: false,
    incorporationAgreement: false
  },
  summaryMode: false
}
