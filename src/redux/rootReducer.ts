import { History } from "history";
import { combineReducers } from "redux";
import { Listing } from "model/model";

import { listingReducer, ListingReducerType } from "redux/listing/listingReducer";
import { authenticationReducer, AuthenticationReducerType } from '../redux/authentication/authenticationReducer';

export interface RootState {
	listingList: Listing[];
	loginForm: AuthenticationReducerType
}

export default (history: History) =>
	combineReducers({
		listing: listingReducer,
		loginForm: authenticationReducer,
	});
