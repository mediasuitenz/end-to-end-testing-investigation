# End to End - Testing Investigation

This repository contains tests for end to end testing for Media Suite.

## 1 - Basic Tests

The purpose of this directory is to write simple tests for an already deployed website (in this case, the [Media Suite website](https://www.mediasuite.co.nz/)).
This is to become familiar with each framework.

An issue was encountered when running Playwright tests on Media Suite machines.
The installed antivirus caused issues with HTTPS certificates for tests running on Firefox.
A locally installed FireFox would function correctly, however the Nightly build of Firefox that Playwright uses would cause issues.
A conditional has been added to ignore HTTPS errors in Firefox only when running locally.
This compromise seems acceptable as any general HTTPS errors would be caught by other browsers, and any Firefox specific HTTPS errors would be caught in a CI pipeline.
