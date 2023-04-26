/*

(async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: detectAds,
    });
  })();


*/

// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to this ${e.request.url} on tab ${e.request.tabId}.`;
  console.log(msg);
});

// create asynce function to return data from promise
function test() {
  return chrome.declarativeNetRequest.getDynamicRules();
}

const testValid = async() => {
  let result = test();
   return result;
}


console.log('Service worker started.');

chrome.declarativeNetRequest.getDynamicRules((rules) => {
  return rules;
});

function removeRuleIds(ruleIds) {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: ruleIds,
    addRules: [],
  });
}

function removeallRules() {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [],
    addRules: [],
  });
}

const existingRules = chrome.declarativeNetRequest.getDynamicRules((rules) => {
  console.log(rules);
  return rules;
});

function deleteRules() {
  removeRuleIds(existingRules);
}

function addRule(rule) {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [],
    addRules: [rule],
});
}

function getStaticRuleCount() {
  return chrome.declarativeNetRequest.getAvailableStaticRuleCount().data;
}

function generateUniqueRuleId() {
  return Math.floor(Math.random() * 1000000000);
}


chrome.declarativeNetRequest.updateDynamicRules({
  
  removeRuleIds: [351487780,9612718], // remove existing rules
  //add unique rule id to each rule
  addRules: [
    {
      id: generateUniqueRuleId(),
      priority: 1,
      action: {type: 'block'},
      condition: {
        urlFilter: ''
        ,
        domains : ['youtube.com'],
        //resourceTypes: ['xhr'],
      },
    },
  ],
} , () => {

  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError.message);
  }

  async function test2  () {
    return await test;
  }

  removeallRules();
  console.log(test());
  // return data from promise 

  
  console.log('Rules added successfully.');
});
