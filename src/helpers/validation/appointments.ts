import * as yup from 'yup';
import moment from 'moment';

const getAppointmentSchema = yup.object({
  therapistId: yup.number().required(),
  date: yup.string().test({
    test: (value) => {
      if (moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD') === value) {
        return true;
      }
    },
  }),
});

const updateAvailableSchema = yup.object({
  therapistId: yup.number().required(),
  isAvailable: yup.boolean().required(),
});

const addAppointmentSchema = yup.object().shape({
  date: yup.object().shape({
    from: yup.date().required(),
    to: yup.date().required(),
  }),
  time: yup.array().of(
    yup.object().shape({
      from: yup.string().matches(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/).required(),
      to: yup.string().matches(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/).required(),
    }),
  ),
});

export { getAppointmentSchema, updateAvailableSchema, addAppointmentSchema };
