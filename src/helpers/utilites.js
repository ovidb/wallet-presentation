export const generateActionTypes = (prefix, actions) =>
  actions
    .reduce((prev, action) => ({
      ...prev,
      [action]: `${prefix}/${action}`
        .replace(/[A-Z]/g, char => `_${char}`)
        .toUpperCase()
    }), {});

export const generateAction = (action, payload) => ({
  type: action,
  payload:
    (typeof payload === 'function')
      ? state => payload(state)
      : { ...payload }
});

export const functionalActionExtractor = action => {
  return ({ type: action.type, payload: action.payload.toString() })
};
