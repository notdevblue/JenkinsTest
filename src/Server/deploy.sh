#!/bin/bash

pm2 delete JenkinsTestServer
cd src/Server
npm install
pm2 start ./JenkinsTestServer.js