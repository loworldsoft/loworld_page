(function () {
  if (!window.MyChatWidget) {
    console.error('MyChatWidget is not initialized');
    return;
  }

  const pluginKey = window.MyChatWidget.pluginKey;
  const customerId = window.MyChatWidget.customerId; // 로컬 스토리지에서 가져온 고객 ID
  loadWidget();

  function loadWidget() {
    // 상담 버튼 생성
    const widgetButton = document.createElement('button');
    widgetButton.style.position = 'fixed';
    widgetButton.style.bottom = '20px';
    widgetButton.style.right = '30px';
    widgetButton.style.zIndex = '1000';
    widgetButton.style.backgroundColor = '#4CAF50';
    widgetButton.style.color = 'white';
    widgetButton.style.border = 'none';
    widgetButton.style.borderRadius = '50%';
    widgetButton.style.width = '60px';
    widgetButton.style.height = '60px';
    widgetButton.style.cursor = 'pointer';
    widgetButton.style.display = 'flex';
    widgetButton.style.alignItems = 'center';
    widgetButton.style.justifyContent = 'center';
    widgetButton.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease';

    // **열기 아이콘 (채팅 아이콘)**
    const iconOpen = document.createElement('img');
    iconOpen.src = '/assets/svg/icons/talk3.svg'; // 채팅 아이콘 경로
    iconOpen.style.width = '40px';
    iconOpen.style.height = '40px';

    // **닫기 아이콘 (X 아이콘)**
    const iconClose = document.createElement('img');
    iconClose.src = '/assets/svg/icons/talk.svg'; // 닫기 아이콘 경로 (새로운 SVG 추가 필요)
    iconClose.style.width = '40px';
    iconClose.style.height = '40px';
    iconClose.style.display = 'none'; // 기본적으로 숨김

    // 기본 아이콘 추가
    widgetButton.appendChild(iconOpen);
    widgetButton.appendChild(iconClose);
    document.body.appendChild(widgetButton);

    // 숨겨진 div 생성
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'my-chat-widget-container';
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.bottom = '100px';
    widgetContainer.style.right = '30px';
    widgetContainer.style.width = '400px';
    widgetContainer.style.height = '600px';
    widgetContainer.style.backgroundColor = 'white';
    widgetContainer.style.border = '1px solid #ccc';
    widgetContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    widgetContainer.style.borderRadius = '10px';
    widgetContainer.style.zIndex = '1001';
    widgetContainer.style.overflow = 'hidden';
    widgetContainer.style.opacity = '0';
    widgetContainer.style.transform = 'scale(0.8)';
    widgetContainer.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
    widgetContainer.style.pointerEvents = 'none'; // 클릭 방지 (닫혀있을 때)
    document.body.appendChild(widgetContainer);

    // 버튼 클릭 이벤트
    widgetButton.addEventListener('click', function () {
      if (widgetContainer.style.opacity === '0') {
        // 열기 상태
        widgetContainer.style.opacity = '1';
        widgetContainer.style.transform = 'scale(1)';
        widgetContainer.style.pointerEvents = 'auto'; // 클릭 가능하도록 변경
        widgetButton.style.backgroundColor = '#FF4F4F';
        widgetButton.style.transform = 'rotate(360deg)';

        // 아이콘 변경
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
      } else {
        // 닫기 상태
        widgetContainer.style.opacity = '0';
        widgetContainer.style.transform = 'scale(0.8)';
        widgetContainer.style.pointerEvents = 'none'; // 클릭 방지
        widgetButton.style.backgroundColor = '#4CAF50';
        widgetButton.style.transform = 'rotate(0deg)';

        // 아이콘 변경
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
      }
    });

    // iframe 동적 생성 (한 번만 생성)
    const iframe = document.createElement('iframe');
    iframe.src = `http://localhost:4200/#/syncbi/channeltalk/home?customerId=${customerId}&pluginKey=${pluginKey}`; // 고객 ID 및 플러그인 키 포함
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    widgetContainer.appendChild(iframe);
  }
})();