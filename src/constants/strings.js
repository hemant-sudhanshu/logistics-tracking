export const strings = {
  common: {
    appName: "Logistics Tracking",
    oops: "Oops!",
    notFound: "Error 404: Page not found",
    goBack: "Go back",
    genericErrorMessage: "An unexpected error occurred.",
  },
  validation: {
    userName: {
      required: "User name is required",
    },
    email: {
      required: "Email is required",
      invalid: "Invalid email address",
    },
    password: {
      required: "Password is required",
      length:
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      lowercase: "Password must contain at least one lowercase letter",
      uppercase: "Password must contain at least one uppercase letter",
      number: "Password must contain at least one number",
      special: "Password must contain at least one special character",
      confirmPassword: "Please confirm your password",
      doNotMatch: "Passwords do not match",
    },
    name: {
      firstName: "First name is required",
      lastName: "Last name is required",
    },
    acceptTerms: "Please accept terms of use and privacy policy.",
    characters: {
      min3: "Must be 3 characters or more",
      max15: "Must be 15 characters or less",
    },
    shipmentId: {
      required: "Shipment Id is required",
      invalid: "Invalid Shipment Id",
    },
    title: {
      required: "Shipment Title is required",
      invalid: "Invalid Shipment Title",
    },
    date: {
      required: "Shipment date is required",
      invalid: "Invalid Shipment date",
    },
    deliveryDate: {
      required: "Delivery date is required",
      invalid: "Invalid delivery date",
    },
    origin: {
      required: "Origin is required",
    },
    houseNo: {
      required: "House/Building/Flat No is required",
    },
    address1: {
      required: "Address1 is required",
    },
    destinationCity: {
      required: "Destination city is required",
    },
    destinationState: {
      required: "Destination state is required",
    },
    destinationPincode: {
      required: "Destination pincode is required",
    },
    status: {
      required: "Shipment status is required",
    },
    action: {
      required: "Shipment action is required",
    },
    location: {
      required: "Shipment location is required",
    },
  },
  auth: {
    common: {
      userName: "User Name",
      emailAddress: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      fName: "First Name",
      lName: "Last Name",
      and: "and",
      iAccept: "I accept the",
      termsOfUse: "terms of use",
      privacyPolicy: "privacy policy",
    },
    signIn: {
      title: "Sign In",
      dontHaveAccount: `Don’t have an account yet?`,
      signInSuccess: "Sign In successful!",
    },
    signUp: {
      title: "Sign Up",
      alreadyHaveAccount: "Already have an account?",
      signUpSuccess: "Sign Up successful!",
    },
  },
  primary: {
    tabs: [
      {
        title: "All",
        key: "all",
      },
      {
        title: "Incoming",
        key: "incoming",
      },
      {
        title: "Outgoing",
        key: "outgoing",
      },
    ],
    common: {
      signOut: "Sign Out",
      termsOfUse: "Terms of Use",
      privacyPolicy: "Privacy Policy",
      about: "About",
      addNew: "+ Add New",
      addShipment: "Add Shipment",
      addAction: "Add Action",
      addShipmentSuccess: "Shipment added succesfully!",
      id: "ID",
      shipmentId: "Shipment Id",
      date: "Date",
      title: "Title",
      all: "All",
      action: "Action",
      actions: "Actions",
      location: "Location",
      incoming: "Incoming",
      outgoing: "Outgoing",
      origin: "Origin",
      destination: "Destination",
      originAddress: "Origin Address",
      destinationAddress: "Destination Address",
      shipmentDate: "Shipment Date",
      deliveryDate: "Delivery Date",
      status: "Status",
      note: "Note",
      type: "Type",
      instructions: "Instructions",
      transit: "Transit",
      delivered: "Delivered",
      delayed: "Delayed",
      houseNo: "House/Building/Flat No",
      address1: "Address 1",
      address2: "Address 2",
      state: "State",
      pinCode: "Pin Code",
      shipmentStatus: "Shipment Status",
      selectStatus: "Select Status",
      destinationCity: "Destination City",
      selectCity: "Select City",
      selectAction: "Select Action",
      shipmentAddSuccess: "Shipment added successfully!",
      shipmentUpdateSuccess: "Shipment updated successfully!",
      updateStatus: "Update Status",
      shipmentScannedAt: "Shipment scanned at",
      shipment: "Shipment",
    },
    home: {
      title: "Home",
      next: "Next",
      previous: "Previous",
    },
  },
  apiErrors: {
    requestTimeout:
      "Request timed out. Please check your internet connection or try again later.",
    networkError: "Network error. Please check your internet connection.",
    requestCanceled: "Request canceled. Please try again or contact support.",
    unauthorizedAccess: "Unauthorized access. Please log in again.",
    forbiddenAccess:
      "Forbidden. You do not have permission to access this resource.",
    resourceNotFound: "Resource not found.",
    internalServerError:
      "Internal server error. Please try again later or contact support.",
    unexpectedError: "Unexpected error occurred. Please try again.",
    badRequest: "Bad request. Please check your request parameters.",
    appleSignInError: "Apple Sign in failed!",
    appleSignInCancel: "User canceled Apple Sign in.",
  },
};
