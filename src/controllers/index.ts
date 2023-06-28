import {
  findTherapistById, getAllTherapists, updateTherapistProfile, updateProfileImg,
} from './therapists';
import { getAppointments, updateAvailable, addAppointment } from './appointment';
import { login } from './auth';
import createSessionController from './session';
import findClientSecret from './payment';

export {
  findTherapistById, getAllTherapists, updateTherapistProfile, getAppointments, updateAvailable,
  addAppointment, findClientSecret, createSessionController, updateProfileImg,
  login,
};
