// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: March 2025
// This file contains the JS functions for index.html

/**
 * Show address
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)
  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + streetName + ", " + streetNumber + "."
}
