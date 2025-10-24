/**
 * 메인 라우터
 * URL에 따라 적절한 페이지를 표시하는 기능
 */

// 이미지 데이터 (image-viewer.js와 동일)
const imageData = {
    'comfort_sip': {
        src: 'assets/img/port01.jpg',
        title: 'comfort_sip',
        description: `이 제품은 사용자의 취향과 입맛, 알레르기 정보를 바탕으로,
내장된 찻잎을 배합해 그날의 컨디션에 꼭 맞는 차를 우려냅니다.
하단 주전자에서 물을 끓여 위쪽 포트에 부어주는 간단한 작동 방식은,
차를 준비하는 과정을 하나의 의식처럼 느끼게 합니다.

수많은 차 종류 앞에서 자신에게 맞는 차를 찾는 과정은 오히려 복잡하고 어려웠습니다.
이 제품은 그 과정을 단순화하고, 사용자가 차와 함께 온전한 휴식과 만족을 느낄 수 있도록 설계되었습니다.`
    },
    'wave_tape_dispenser': {
        src: 'assets/img/port02.jpg',
        title: 'Wave_Tape Dispenser',
        description: `물의 파동에서 영감을 받은 테이프 디스펜서입니다.
아크릴을 통해 물 위로 반사되는 빛을 담아내고, 표면의 문양은 잔잔한 물결처럼 펼쳐집니다.
중앙의 핀은 태양을 상징하며, 내부에 단단히 고정되어 테이프의 회전과 뚜껑의 분리를 자연스럽게 막아줍니다.

단순한 사무용품을 넘어, 일상 속에서도 자연의 감성을 느낄 수 있도록 설계되었습니다.
손끝에서 흐르는 테이프의 움직임은 마치 물결처럼 부드럽게 이어지며, 
사용자는 작은 순간 속에서도 빛과 물, 태양의 감각을 경험하며 여유와 즐거움을 느낄 수 있습니다.`
    },
    'flo_roadkill_prevention': {
        src: 'assets/img/port03.jpg',
        title: 'Flo_로드킬 방지 제품',
        description: `이 제품은 고라니와 인간이 안전하게 공존하도록 설계되었습니다.
로드킬을 예방하기 위해, 고라니의 생활 범위를 먹이와 소리로 자연스럽게 조절하며,
태양광으로 충전되는 드론은 지속적으로 작동해 환경을 방해하지 않고 안전을 유지합니다.

단순한 보호 장치를 넘어, 인간과 야생 동물이 함께 살아가는 순간을 경험하게 합니다.
고라니의 자유로운 움직임과 이를 지켜보는 사용자의 안도감이, 일상 속에서도 자연과의 연결을 선사합니다.`
    },
    'incense_holder_lotus': {
        src: 'assets/img/port04.jpg',
        title: '한국의 아름다움, 인센스 홀더_연화',
        description: `이 프로젝트는 한국의 아름다운 전통문화와 연등의 우아한 곡선에서 영감을 받았습니다.
단순히 전통 모티브를 활용하는 것을 넘어, 인센스 연기의 시각적 특징을 디자인에 접목했습니다.
몸통을 감싼 전통 문양 사이로 연기가 퍼져 나가는 모습은, 마치 연등이 빛을 발하듯 은은한 아름다움을 만들어냅니다.

한국적 정서와 기능적 요소를 결합하여, 전통문화의 현대적 계승을 보여주는 디자인을 완성했습니다.
일상 속에서도 전통의 미감을 경험하며, 보는 이에게 잔잔한 여유와 감각적 즐거움을 선사합니다.`
    },
    'bug_free_africa': {
        src: 'assets/img/port05.jpg',
        title: '아프리카 농민을 위한 Bug Free',
        description: `아프리카 소규모 농민을 위해 설계된 지속 가능한 해충 방지 장치입니다.
아이들의 놀이에서 착안한 에너지 전환 방식으로, 제품을 흔드는 것만으로 충전이 가능하며,
비축된 에너지는 해충 방지 초음파와 밤에는 유용한 조명으로 활용됩니다.

견고한 스테인리스 스틸과 아크릴 소재는 다양한 환경에서도 안전하게 사용되도록 하고,
단순한 해충 방지 도구를 넘어 농민들의 삶을 지켜주는 친환경적 동반자가 됩니다.`
    },
    'modular_side_table': {
        src: 'assets/img/port06.jpg',
        title: '조립식 사이드 테이블_정연',
        description: `좁은 공간에서도 효율적으로 사용할 수 있는 가구를 고민하며,
1인 가구를 위해 간단하지만 다양한 기능을 가진 사이드 테이블을 디자인했습니다.
분리가 가능해 필요에 따라 크기와 형태를 조절할 수 있으며,
책상이나 소파 옆, 작은 코너에서도 손쉽게 활용할 수 있습니다.

단순한 보조 가구를 넘어, 사용자가 일상 속에서 공간을 효율적으로 활용하면서도
자연스럽게 여유를 느낄 수 있도록 하는 경험을 제공합니다.
작은 테이블 하나가 1인 가구의 생활을 조금 더 편리하고 즐겁게 만들어 줍니다.`
    },
    'fake_chair': {
        src: 'assets/img/port07.jpg',
        title: '자극을 주는 가구_Fake chair',
        description: `사용자들이 당연하게 여기던 요소에 변화를 주어,
익숙함 속에서 독특한 자극을 느낄 수 있도록 디자인했습니다.
다양한 색감을 활용해 서로 다른 요소들의 대비를 극대화하며,
일상 속에서 작은 차이가 주는 재미와 시각적 즐거움을 경험하게 합니다.

단순한 디자인을 넘어, 사용자가 평범한 순간에서도 새로운 발견과 감각적 경험을 느낄 수 있도록 설계되었습니다.`
    },
    'mrow_growing_furniture': {
        src: 'assets/img/port08.jpg',
        title: '성장형 가구_Mrow',
        description: `유아용 가구는 평균 1~2년 정도 사용되는 짧은 수명을 가지며,
가볍고 쉽게 폐기되는 경우가 많습니다.
Mrow는 가구를 다양한 용도로 변형할 수 있도록 설계되었으며,
친환경 나무 소재를 사용해 지속 가능한 가치를 제공합니다.

단순한 가구 기능을 넘어, 아이와 함께 성장하며 변화하는 경험을 선사합니다.
Mrow는 아이의 생활과 발달을 고려한 디자인으로,
짧은 시간 속에서도 의미 있는 경험과 즐거움을 만들어주는 동반자가 됩니다.`
    },
    'amiro_pet_furniture': {
        src: 'assets/img/port09.jpg',
        title: '반려동물과 함께하는 Amiro',
        description: `1인 가구의 증가와 함께 반려동물을 키우는 사람이 늘어나고 있습니다.
반려동물을 위한 가구는 많지만, 수중 반려동물을 위한 가구는 거의 없다는 점에서 착안하여
수중 동물을 위한 맞춤형 가구를 디자인했습니다.

단순한 수조용 장치를 넘어, 수중 환경에서도 반려동물이 편안하게 생활할 수 있도록 고려했으며,
사용자와 반려동물이 함께 즐거운 경험을 나눌 수 있는 공간을 제공합니다.
작은 가구 하나가, 수중 생명과 인간의 일상을 자연스럽게 연결하는 역할을 합니다.`
    },
    'custom_table_varius': {
        src: 'assets/img/port10.jpg',
        title: '나를 위한 디자인_Varius',
        description: `재택근무의 확산으로 하나의 테이블이 모든 역할을 수행해야 하는 생활 방식이 늘어났습니다.
이로 인해 공간 활용은 비효율적이고, 작업과 휴식의 경계가 모호해졌습니다.

'Varius'는 사용자의 상황과 기분에 따라 자유롭게 변형할 수 있는 테이블입니다.
모듈 위치와 색상을 조합해 개인 취향에 맞는 세상에 단 하나뿐인 가구를 만들 수 있으며,
곡선형 수납공간, 미끄럼 방지 컵 홀더, 거치 홈 등 세심한 기능을 더했습니다.

단순한 가구를 넘어, 재택근무자와 1인 가구, 그리고 자신만의 생활을 디자인하고 싶은 사용자에게
능동적이고 즐거운 경험을 제공하는 제품입니다.`
    }
};

// URL에서 이미지 ID 추출
function getImageIdFromUrl() {
    const path = window.location.pathname;
    const segments = path.split('/');
    const imageId = segments[segments.length - 1];
    return imageId;
}

// 이미지 뷰어 HTML 생성
function createImageViewerHTML(imageData) {
    return `
        <section id="imageViewer">
            <div class="viewer__inner">
                <div class="viewer__header">
                    <button class="back-btn" id="backBtn" aria-label="뒤로가기">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        뒤로가기
                    </button>
                    <h1 class="viewer__title">${imageData.title}</h1>
                </div>
                
                <div class="viewer__content">
                    <div class="image-container" id="imageContainer">
                        <img id="mainImage" src="${imageData.src}" alt="${imageData.title}" />
                    </div>
                    
                    <div class="image-info" id="imageInfo">
                        <div class="image-description" id="imageDescription">
                            <h3>${imageData.title}</h3>
                            <p>${imageData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// 메인 페이지 HTML 복원
function showMainPage() {
    // 원래 메인 페이지 내용을 복원
    const main = document.getElementById('main');
    if (main) {
        // 원래 HTML 내용을 다시 로드하거나 복원
        location.reload();
    }
}

// 이미지 뷰어 페이지 표시
function showImageViewer(imageId) {
    const data = imageData[imageId];
    if (!data) {
        // 이미지 데이터가 없으면 메인 페이지로 리다이렉트
        window.location.href = '/';
        return;
    }

    // 페이지 제목 변경
    document.title = `${data.title} - 이미지 전체보기 - sunnmu`;

    // 메인 컨텐츠 교체
    const main = document.getElementById('main');
    if (main) {
        main.innerHTML = createImageViewerHTML(data);
        
        // 뒤로가기 버튼 이벤트 추가
        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.addEventListener('click', function() {
                window.location.href = '/';
            });
        }

        // 이미지 클릭 시 전체화면 모달 표시
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.addEventListener('click', function() {
                showImageModal(this.src, this.alt);
            });
            mainImage.style.cursor = 'pointer';
        }
    }

    // 이미지 뷰어 CSS 로드
    if (!document.querySelector('link[href*="image-viewer.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'assets/css/image-viewer.css';
        document.head.appendChild(link);
    }
}

// 라우터 초기화
function initializeRouter() {
    const imageId = getImageIdFromUrl();
    
    if (imageId && imageId !== '' && imageId !== 'index.html') {
        // 이미지 뷰어 페이지 표시
        showImageViewer(imageId);
    } else {
        // 메인 페이지 표시 (기본 동작)
        // 포트폴리오 라우팅 초기화
        if (typeof initializePortfolioRouting === 'function') {
            initializePortfolioRouting();
        }
    }
}

// 브라우저 뒤로가기/앞으로가기 처리
function setupBrowserNavigation() {
    window.addEventListener('popstate', function(event) {
        initializeRouter();
    });
}

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeRouter();
    setupBrowserNavigation();
});

// 이미지 모달 표시
function showImageModal(src, alt) {
    // 모달 HTML 생성
    const modalHTML = `
        <div id="imageModal" class="image-modal" role="dialog" aria-modal="true" aria-label="이미지 전체보기">
            <div class="modal-backdrop" id="modalBackdrop"></div>
            <div class="modal-content">
                <img src="${src}" alt="${alt}" class="modal-image" id="modalImage" />
                <div class="modal-info">
                    <h3>${alt}</h3>
                </div>
            </div>
        </div>
    `;

    // 모달을 body에 추가
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // 모달 표시 애니메이션
    const modal = document.getElementById('imageModal');
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // 모달 닫기 이벤트 추가
    setupModalEvents();
}

// 모달 이벤트 설정
function setupModalEvents() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const backdrop = document.getElementById('modalBackdrop');

    // 이미지 클릭 시 모달 닫기
    if (modalImage) {
        modalImage.addEventListener('click', closeImageModal);
    }

    // 배경 클릭 시 닫기
    if (backdrop) {
        backdrop.addEventListener('click', closeImageModal);
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal) {
            closeImageModal();
        }
    });
}

// 이미지 모달 닫기
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// 전역에서 사용할 수 있도록 export
window.initializeRouter = initializeRouter;
window.showImageModal = showImageModal;
window.closeImageModal = closeImageModal;

