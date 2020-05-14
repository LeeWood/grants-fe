import {
  APPLICANT_ONBOARDING_POST_START,
  APPLICANT_ONBOARDING_POST_SUCCESS,
  APPLICANT_ONBOARDING_POST_FAILURE,
  WRITER_ONBOARDING_POST_START,
  WRITER_ONBOARDING_POST_SUCCESS,
  WRITER_ONBOARDING_POST_FAILURE,
} from "../actions/onboardingActions";

const initialState = {
  user: {},
  isLoading: false,
};

const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLICANT_ONBOARDING_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case APPLICANT_ONBOARDING_POST_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
      };
    case APPLICANT_ONBOARDING_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case WRITER_ONBOARDING_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case WRITER_ONBOARDING_POST_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
      };
    case WRITER_ONBOARDING_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default onboardingReducer;