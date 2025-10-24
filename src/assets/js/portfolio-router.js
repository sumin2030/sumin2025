/**
 * 포트폴리오 라우팅 모듈
 * 이미지 클릭 시 이미지 뷰어 페이지로 이동하는 기능
 */

// 이미지 ID 매핑 (alt 속성 또는 특정 기준으로 매핑)
const imageIdMapping = {
    'comfort_sip': 'comfort_sip',
    'Wave': 'wave_tape_dispenser',
    'Flo': 'flo_roadkill_prevention',
    '연화_incense holder': 'incense_holder_lotus',
    'Bug Free': 'bug_free_africa',
    'side table': 'modular_side_table',
    'Fake chair': 'fake_chair',
    'Mrow': 'mrow_growing_furniture',
    'Amiro': 'amiro_pet_furniture',
    'custom table': 'custom_table_varius'
};

// 이미지 파일명에서 ID 추출
function extractImageIdFromSrc(src) {
    const filename = src.split('/').pop().split('.')[0]; // 파일명에서 확장자 제거
    const mapping = {
        'port01': 'comfort_sip',
        'port02': 'wave_tape_dispenser',
        'port03': 'flo_roadkill_prevention',
        'port04': 'incense_holder_lotus',
        'port05': 'bug_free_africa',
        'port06': 'modular_side_table',
        'port07': 'fake_chair',
        'port08': 'mrow_growing_furniture',
        'port09': 'amiro_pet_furniture',
        'port10': 'custom_table_varius'
    };
    return mapping[filename] || filename;
}

// 이미지 클릭 이벤트 처리
function handleImageClick(event) {
    event.preventDefault();
    
    const img = event.target.closest('img');
    if (!img) return;
    
    // 이미지 ID 추출 (alt 속성 또는 src에서)
    let imageId = imageIdMapping[img.alt] || extractImageIdFromSrc(img.src);
    
    if (!imageId) {
        console.warn('이미지 ID를 찾을 수 없습니다:', img);
        return;
    }
    
    // 이미지 뷰어 페이지로 이동
    navigateToImageViewer(imageId);
}

// 이미지 뷰어 페이지로 이동
function navigateToImageViewer(imageId) {
    // 깔끔한 URL로 이동: /comfort_sip 형태
    const newUrl = `/${imageId}`;
    window.location.href = newUrl;
}

// 포트폴리오 섹션 초기화
function initializePortfolioRouting() {
    const portSection = document.getElementById('port');
    if (!portSection) return;
    
    // 모든 포트폴리오 이미지에 클릭 이벤트 추가
    const portfolioImages = portSection.querySelectorAll('.port__item img');
    portfolioImages.forEach(img => {
        // 부모 a 태그의 href 제거
        const parentLink = img.closest('a');
        if (parentLink) {
            parentLink.removeAttribute('href');
            parentLink.style.cursor = 'pointer';
        }
        
        // 클릭 이벤트 추가
        img.addEventListener('click', handleImageClick);
        
        // 호버 효과를 위한 스타일 추가
        img.style.cursor = 'pointer';
        img.style.transition = 'transform 0.3s ease';
        
        // 호버 효과
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // "제품 보기" 버튼들도 이미지 뷰어로 이동하도록 수정
    const viewButtons = portSection.querySelectorAll('.port__item .site');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // 같은 article 내의 이미지 찾기
            const article = this.closest('.port__item');
            const img = article.querySelector('img');
            
            if (img) {
                let imageId = imageIdMapping[img.alt] || extractImageIdFromSrc(img.src);
                if (imageId) {
                    navigateToImageViewer(imageId);
                }
            }
        });
        
        // href 속성 제거
        button.removeAttribute('href');
        button.style.cursor = 'pointer';
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 메인 페이지인 경우에만 포트폴리오 라우팅 초기화
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        initializePortfolioRouting();
    }
});

// 유틸리티 함수들
export const PortfolioRouter = {
    // 새로운 이미지 ID 매핑 추가
    addImageMapping: function(alt, imageId) {
        imageIdMapping[alt] = imageId;
    },
    
    // 이미지 ID 매핑 수정
    updateImageMapping: function(alt, imageId) {
        imageIdMapping[alt] = imageId;
    },
    
    // 이미지 ID 매핑 삭제
    removeImageMapping: function(alt) {
        delete imageIdMapping[alt];
    },
    
    // 모든 이미지 ID 매핑 가져오기
    getAllImageMappings: function() {
        return { ...imageIdMapping };
    },
    
    // 수동으로 이미지 뷰어로 이동
    navigateToImage: function(imageId) {
        navigateToImageViewer(imageId);
    },
    
    // 포트폴리오 라우팅 재초기화
    reinitialize: function() {
        initializePortfolioRouting();
    }
};
