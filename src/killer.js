'use strict';
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to this ${e.request.url} on tab ${e.request.tabId}.`;
  console.log(msg);
});
function removeRuleIds(ruleIds) {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: ruleIds,
    addRules: [],
  });
}
const existingRules = chrome.declarativeNetRequest.getDynamicRules((rules) => {
  const ruleIds  = [];
  console.log(rules);
  rules.map((rule) => {
    ruleIds.push(rule.id);
  });
  removeRuleIds(ruleIds);
  console.log(rules);
  return rules;
});