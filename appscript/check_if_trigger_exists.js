function checkIfTriggerExists(eventType, handlerFunction) {
  Logger.log('Current project has ' + ScriptApp.getProjectTriggers().length + ' triggers.');

  var triggers = ScriptApp.getProjectTriggers();
  var triggerExists = false;
  triggers.forEach(function (trigger) {
    if(trigger.getEventType() === eventType &&
      trigger.getHandlerFunction() === handlerFunction)
      triggerExists = true;
  });
  return triggerExists;
}