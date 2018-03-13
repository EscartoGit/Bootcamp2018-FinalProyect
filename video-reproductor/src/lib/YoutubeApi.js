import React, {Component} from 'react';
var xhr = new XMLHttpRequest();

var RootUrl = 'https://www.googleapis.com/youtube/v3/search';
var url = '';

function Youtube(data) {
  let params = {
    part: 'snippet',
    key: data.key,
    q: data.searchTerm,
    type: 'video'
  };
  url = RootUrl + formatParams(params)

  let callPromise = new Promise((resolve, reject) => {
    if (url) {
      xhr.open('GET', url);

      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.status);
        }
      };
      xhr.send();
    }

  });
  return callPromise
}

function formatParams(params) {
  return "?" + Object
    .keys(params)
    .map(function (key) {
      return key + "=" + encodeURIComponent(params[key])
    })
    .join("&")
}

export default Youtube;
