export const handleValidation = (
  e,
  setFormHelperText,
  formHelperText,
  contactFormState,
  workHistoryFormState,
  bioFormState
) => {
  // validation function handles all inputs where the only validation is that the string must be greater than 2
  const validator = (formValue) => {
    //persisting the event to ensure it makes it to validation
    e.persist();
    let valid = /(?=(?:.*?[a-z]){2})/i.test(formValue);
    if (!valid) {
      setFormHelperText({
        ...formHelperText,
        [e.target.name]: "Must be at least 2 characters long",
      });
    } else {
      setFormHelperText({
        ...formHelperText,
        [e.target.name]: undefined,
      });
    }
  };
  /* handling input validation based on input id and setting error message to be rendered via helperText*/
  switch (e.target.id) {
    case "firstName":
      validator(contactFormState.firstName);
      break;
    case "lastName":
      validator(contactFormState.lastName);
      break;
    case "city":
      validator(contactFormState.city);
      break;
    case "state":
      validator(contactFormState.state);
      break;
    case "country":
      validator(contactFormState.country);
      break;
    case "company":
      validator(workHistoryFormState.company);
      break;
    case "position":
      validator(workHistoryFormState.position);
      break;
    case "responsibilites":
      validator(workHistoryFormState.responsibilites);
      break;
    case "zip":
      let valid = /(^\d{5}(?:[\s]?[-\s][\s]?\d{4})?$)/.test(
        contactFormState.zip
      );
      if (!valid) {
        setFormHelperText({
          ...formHelperText,
          [e.target.name]: "Please enter a valid 6 digit US zipcode",
        });
      } else {
        setFormHelperText({
          ...formHelperText,
          [e.target.name]: undefined,
        });
      }
      break;
    case "website":
      let validWeb = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i.test(
        bioFormState.website
      );
      if (!validWeb) {
        setFormHelperText({
          ...formHelperText,
          [e.target.name]: "Please enter a valid website address",
        });
      } else {
        setFormHelperText({
          ...formHelperText,
          [e.target.name]: undefined,
        });
      }
      break;
    default:
      break;
  }
};