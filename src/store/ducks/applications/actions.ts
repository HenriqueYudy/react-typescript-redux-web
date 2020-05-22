import { action } from 'typesafe-actions';
import { ApplicationsTypes , Application} from './types';

export const loadRequest = () => action(ApplicationsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Application[]) => action(ApplicationsTypes.LOAD_SUCCESS , {data});

export const loadFailure = () => action(ApplicationsTypes.LOAD_FAILURE);