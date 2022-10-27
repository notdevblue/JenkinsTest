#!/bin/bash

pm2 delete JenkinsTestServer
npm install
pm2 start ./JenkinsTestServer.js