/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of the files in the Parking Miru Web Engine 
section is not responsible for any damage or errors that will occur and 
constitutes a violation of the of the creators of the Web Engine. *** 
*/

setInterval(function() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Set parking noti texts
  const parkingTexts = {
    staff: ["ที่จอดรถบุคลากร", "Staff Parking", "スタッフ用駐車場"],
    guest: ["บุคคลทั่วไปจอดได้", "Guest Parking", "ゲスト用駐車場"],
  };
  const parkingIndex = Math.floor(seconds / 10) % parkingTexts.staff.length;
  const parkingNotiText = (hours >= 8 && hours < 16) ? parkingTexts.staff[parkingIndex] : parkingTexts.guest[parkingIndex];

  // Update text element
  document.getElementById("text").innerHTML = parkingNotiText;
}, 1000);