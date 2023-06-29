import {
  findTherapistById, getAllTherapists, updateTherapistProfile, updateProfileImg,
} from './therapists';
import { getAppointments, updateAvailable, addAppointment } from './appointment';
import { login } from './auth';
import createSessionController from './session';
import findClientSecret from './payment';
import s3upload from './s3upload';
import adminLogin from './admin';

export {
  findTherapistById, getAllTherapists, updateTherapistProfile, getAppointments, updateAvailable,
  addAppointment, findClientSecret, createSessionController, updateProfileImg,
  login, s3upload, adminLogin,
};
