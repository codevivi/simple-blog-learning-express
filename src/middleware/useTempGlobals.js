const useTempGlobalsFromSession = function (session) {
  let errMsg = session.errMsg;
  delete session.errMsg;
  let okMsg = session.msg;
  delete session.msg;
  return { errMsg, okMsg };
};
export const useTempGlobals = (req, res, next) => {
  req.tempGlobals = useTempGlobalsFromSession(req.session);
  next();
};
