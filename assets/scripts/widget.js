(function () {
  // UUID 생성 함수
  function generateUUID() {
    if (typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID(); // 최신 브라우저 지원
    } else {
      // 폴리필
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))).toString(16)
      );
    }
  }

  // 로컬 스토리지에서 고객 ID 가져오기 또는 생성
  function getOrCreateCustomerId() {
    const storageKey = 'customerId';
    let customerId = localStorage.getItem(storageKey);

    if (!customerId) {
      customerId = generateUUID(); // 고유 ID 생성
      localStorage.setItem(storageKey, customerId); // 로컬 스토리지에 저장
      console.log('New Customer ID generated and stored:', customerId);
    } else {
      console.log('Customer ID retrieved from localStorage:', customerId);
    }

    return customerId;
  }

  const customerId = getOrCreateCustomerId(); // 고객 ID 생성/가져오기

  // MyChatWidget에 고객 ID 추가
  if (window.MyChatWidget) {
    window.MyChatWidget.customerId = customerId;
  }
})();
