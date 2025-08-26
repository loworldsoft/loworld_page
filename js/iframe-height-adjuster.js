/**
 * iframe 높이 자동 조정 스크립트
 * 부모 창에 현재 페이지의 높이 정보를 전송하여 iframe 크기를 동적으로 조정합니다.
 */
(function () {
    'use strict';

    // 이벤트 리스너들을 저장할 변수
    let mutationObserver = null;
    let isCleanedUp = false;

    /**
     * 페이지의 실제 전체 높이를 계산
     */
    function getPageHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
    }

    /**
     * 부모 창에 높이 정보 전송
     */
    function sendHeightToParent() {
        if (isCleanedUp) return; // 정리된 후에는 실행하지 않음

        if (window.parent && window.parent !== window) {
            const height = getPageHeight();

            window.parent.postMessage({
                type: 'resize',
                height: height,
                timestamp: Date.now(),
                url: window.location.href
            }, '*');

            // console.log('부모에게 높이 정보 전송:', height + 'px');
        }
    }

    /**
     * 디바운스된 높이 전송 함수
     */
    let debounceTimeout;
    function debouncedSendHeight() {
        if (isCleanedUp) return;

        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(sendHeightToParent, 300);
    }

    /**
     * 이벤트 리스너들과 관찰자 정리
     */
    function cleanup() {
        if (isCleanedUp) return;

        // console.log('iframe 높이 조정 스크립트 정리 시작');

        // 플래그 설정
        isCleanedUp = true;

        // MutationObserver 정리
        if (mutationObserver) {
            mutationObserver.disconnect();
            mutationObserver = null;
            // console.log('MutationObserver 정리 완료');
        }

        // 타이머 정리
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
            debounceTimeout = null;
        }

        // 이벤트 리스너들 제거
        window.removeEventListener('load', sendHeightToParent);
        window.removeEventListener('resize', debouncedSendHeight);
        window.removeEventListener('beforeunload', cleanup);
        window.removeEventListener('unload', cleanup);

        // console.log('iframe 높이 조정 스크립트 정리 완료');
    }

    // ========== 이벤트 리스너 등록 ==========

    // 1. DOM 완전 로드 후 높이 전송
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', sendHeightToParent);
    } else {
        sendHeightToParent();
    }

    // 2. 모든 리소스 로딩 완료 후 재전송
    window.addEventListener('load', function () {
        setTimeout(sendHeightToParent, 100);
    });

    // 3. 윈도우 리사이즈 시 높이 재계산 (디바운스 적용)
    window.addEventListener('resize', debouncedSendHeight);

    // 4. 동적 콘텐츠 변화 감지
    if (window.MutationObserver) {
        mutationObserver = new MutationObserver(function (mutations) {
            if (isCleanedUp) return;

            let shouldUpdate = false;
            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    shouldUpdate = true;
                }
                if (mutation.type === 'attributes' &&
                    (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
                    shouldUpdate = true;
                }
            });

            if (shouldUpdate) {
                debouncedSendHeight();
            }
        });

        // body 전체 감시 시작
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });

        // console.log('MutationObserver 활성화');
    }

    // 5. 페이지 언로드 시 정리
    window.addEventListener('beforeunload', cleanup);
    window.addEventListener('unload', cleanup);

    // 6. 일정 시간 후 자동 정리 (30초)
    setTimeout(function () {
        if (!isCleanedUp) {
            // console.log('30초 경과로 자동 정리 실행');
            cleanup();
        }
    }, 30000);

    // 7. Visibility API를 사용한 정리 (페이지가 숨겨질 때)
    if (typeof document.hidden !== 'undefined') {
        document.addEventListener('visibilitychange', function () {
            if (document.hidden && !isCleanedUp) {
                console.log('페이지 숨김으로 정리 실행');
                cleanup();
            }
        });
    }

    // console.log('iframe 자동 높이 조정 스크립트 초기화 완료 (정리 로직 포함)');

})();
