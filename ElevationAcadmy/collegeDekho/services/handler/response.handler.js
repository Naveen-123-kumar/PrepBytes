import {
    set, unset, get, keys, isFunction,
  } from 'lodash';
  
  /**
     * @function
     * @name errorHandler
     * @description This method is used to send back error to the client
     * @param {Object} res - Response object is used to send back error to the client
     * @param {Object} error - Request object is used to get the error
     * @returns {Object} Send back error to the client
     */
  // eslint-disable-next-line func-names

    export const errorHandler = function (res, error, next, responseInNext = false) {
    const errorName = get(error, 'name', '');
    // check if error is validation error
    if (errorName === 'ValidationError') {
      const errors = get(error, 'errors', {});
      const errorKeys = keys(errors);
      const errorObj = get(errors, `${get(errorKeys, '[0]')}`);
      const message = get(errorObj, 'message');
      set(error, 'message', message);
      unset(error, 'errors');
    }
    if (responseInNext && isFunction(next)) {
      return next(error, {});
    }
    return res.status(get(error, 'status', 500)).json(error);
  };
  /**
     * @function
     * @name successHandler
     * @description This method is used to send back successfull response to the client
     * @param {Object} res - Response object is used to send back error to the client
     * @param {Object} data - Request object is used to get the data
     * @param {Number} status - represents the status code
     * @returns {Object} Send back successfull response to the client
     */
  // eslint-disable-next-line func-names
  export const successHandler = function (res, data, status = 200) {
    return res.status(status).json(data);
  };
  