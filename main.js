// 청춘도약일자리교육원 - 메인 스크립트
(function() {
  'use strict';

  // DOM 로드 완료 후 실행
  document.addEventListener('DOMContentLoaded', function() {
    // 설정 확인
    if (typeof window.__SITE_CONFIG__ === 'undefined') {
      console.error('Site configuration not loaded');
      return;
    }

    const config = window.__SITE_CONFIG__;

    // 1. 히어로 섹션 렌더링
    renderHeroSection();

    // 2. 자가진단 섹션 렌더링
    renderSelfDiagnosis();

    // 3. 서류 샘플 섹션 렌더링
    renderDocumentSamples();

    // 4. 카카오 배너 렌더링
    renderKakaoBanner();

    // 5. 프로세스 가이드 렌더링
    renderProcessGuide();

    // 6. 기존 증빙 슬라이더 렌더링
    renderProofSlider();

    // 7. 가격 섹션 렌더링
    renderPricingSection();

    // 8. FAQ 섹션 렌더링
    renderFAQSection();

    // 9. 최종 CTA 렌더링
    renderFinalCTA();

    // 10. 푸터 렌더링
    renderFooter();

    // 11. 카카오 CTA 링크 설정
    setupKakaoLinks();

    // 12. 카카오 공식 위젯 설정 (옵션)
    setupKakaoWidget();

    // 13. 모바일 메뉴 토글
    setupMobileMenu();

    // 14. 이미지 지연 로딩
    setupLazyLoading();

    // 15. 스크롤 애니메이션
    setupScrollAnimations();

    console.log('청춘도약일자리교육원 웹사이트 로드 완료');
  });

  // 히어로 섹션 렌더링
  function renderHeroSection() {
    const tagline = document.getElementById('hero-tagline');
    const headline = document.getElementById('hero-headline');
    const subcopy = document.getElementById('hero-subcopy');
    const primaryCta = document.getElementById('hero-primary-cta');
    const badges = document.getElementById('hero-badges');
    const image = document.getElementById('hero-image');

    if (tagline) tagline.textContent = config.tagline;
    if (headline) headline.textContent = config.hero.headline;
    if (subcopy) subcopy.textContent = config.hero.subcopy;
    if (primaryCta) primaryCta.textContent = config.hero.primaryCta;

    if (badges && config.hero.badges) {
      badges.innerHTML = config.hero.badges.map(badge =>
        `<span class="hero-badge">${badge}</span>`
      ).join('');
    }

    if (image) {
      image.src = config.hero.image;
      image.alt = config.hero.headline;
    }
  }

  // 자가진단 섹션 렌더링
  function renderSelfDiagnosis() {
    const title = document.getElementById('diagnosis-title');
    const subtitle = document.getElementById('diagnosis-subtitle');
    const categories = document.getElementById('diagnosis-categories');
    const questions = document.getElementById('diagnosis-questions');
    const resultTitle = document.getElementById('result-title');
    const resultSubtitle = document.getElementById('result-subtitle');
    const resultCta = document.getElementById('result-cta');

    if (title) title.textContent = config.selfDiagnosis.title;
    if (subtitle) subtitle.textContent = config.selfDiagnosis.subtitle;

    // 현재 선택된 카테고리 추적
    let currentCategory = 'military-job';
    let currentQuestionIndex = 0;
    let userAnswers = {};

    // 현재 카테고리의 form 데이터 가져오기
    function getCurrentForm() {
      if (config.selfDiagnosis.forms && config.selfDiagnosis.forms[currentCategory]) {
        return config.selfDiagnosis.forms[currentCategory];
      }
      // fallback to default form
      return config.selfDiagnosis.form;
    }

    // 카테고리 탭 렌더링
    if (categories && config.selfDiagnosis.categories) {
      categories.innerHTML = config.selfDiagnosis.categories.map(category => `
        <button class="diagnosis-category ${category.active ? 'active' : ''}" data-category="${category.id}">
          <span class="category-icon">${category.icon}</span>
          <span class="category-title">${category.title}</span>
        </button>
      `).join('');

      // 카테고리 클릭 이벤트
      categories.addEventListener('click', function(e) {
        const categoryBtn = e.target.closest('.diagnosis-category');
        if (categoryBtn) {
          const newCategory = categoryBtn.dataset.category;

          // 카테고리가 변경된 경우에만 처리
          if (newCategory !== currentCategory) {
            // 모든 카테고리 비활성화
            categories.querySelectorAll('.diagnosis-category').forEach(btn =>
              btn.classList.remove('active')
            );
            // 클릭된 카테고리 활성화
            categoryBtn.classList.add('active');

            // 카테고리 변경
            currentCategory = newCategory;
            currentQuestionIndex = 0;
            userAnswers = {};

            // 결과 화면 숨기고 폼 다시 표시
            const form = document.getElementById('diagnosis-form');
            const result = document.getElementById('diagnosis-result');
            if (form) form.style.display = 'block';
            if (result) result.style.display = 'none';

            // 새 카테고리의 질문 렌더링
            renderCurrentQuestion();
            updateResultText();
          }
        }
      });
    }

    function renderCurrentQuestion() {
      const currentForm = getCurrentForm();
      if (!questions || !currentForm || !currentForm.questions) return;

      const totalQuestions = currentForm.questions.length;
      const question = currentForm.questions[currentQuestionIndex];

      questions.innerHTML = `
        <div class="diagnosis-question active">
          <div class="question-progress">
            <span class="progress-text">${currentQuestionIndex + 1} / ${totalQuestions}</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / totalQuestions) * 100}%"></div>
            </div>
          </div>
          <h4 class="question-title">${question.title}</h4>
          <div class="question-options">
            ${question.options.map((option, optionIndex) => `
              <label class="option-label">
                <input type="radio" name="current_question" value="${optionIndex}" required>
                <span class="option-text">${option}</span>
              </label>
            `).join('')}
          </div>
          ${currentQuestionIndex > 0 ? `
          <div class="question-navigation">
            <button type="button" class="btn btn-outline prev-question">이전</button>
          </div>` : ''}
        </div>
      `;

      // 라디오 버튼 선택 이벤트
      const radioButtons = questions.querySelectorAll('input[type="radio"]');
      const prevBtn = questions.querySelector('.prev-question');

      radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
          if (this.checked) {
            userAnswers[`question_${currentQuestionIndex}`] = this.value;

            // 자동으로 다음 질문으로 진행 (0.8초 딜레이)
            setTimeout(() => {
              if (currentQuestionIndex < totalQuestions - 1) {
                currentQuestionIndex++;
                renderCurrentQuestion();
              } else {
                // 마지막 질문 완료 - 결과 자동 표시
                showDiagnosisResult();
              }
            }, 800);
          }
        });
      });

      // 이전 버튼 이벤트
      if (prevBtn) {
        prevBtn.addEventListener('click', function() {
          if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderCurrentQuestion();

            // 이전 답변 복원
            const prevAnswer = userAnswers[`question_${currentQuestionIndex}`];
            if (prevAnswer !== undefined) {
              const prevRadio = questions.querySelector(`input[value="${prevAnswer}"]`);
              if (prevRadio) {
                prevRadio.checked = true;
              }
            }
          }
        });
      }
    }

    function showDiagnosisResult() {
      const form = document.getElementById('diagnosis-form');
      const result = document.getElementById('diagnosis-result');

      if (form && result) {
        form.style.display = 'none';
        result.style.display = 'block';
        result.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function updateResultText() {
      const currentForm = getCurrentForm();
      if (!currentForm || !currentForm.result) return;

      if (resultTitle) resultTitle.textContent = currentForm.result.title;
      if (resultSubtitle) resultSubtitle.textContent = currentForm.result.subtitle;
      if (resultCta) resultCta.textContent = currentForm.result.cta;
    }

    // 초기 질문 렌더링
    renderCurrentQuestion();
    updateResultText();
  }

  // 서류 샘플 섹션 렌더링
  function renderDocumentSamples() {
    const title = document.getElementById('documents-title');
    const subtitle = document.getElementById('documents-subtitle');
    const grid = document.getElementById('documents-grid');

    if (title) title.textContent = config.documentSamples.title;
    if (subtitle) subtitle.textContent = config.documentSamples.subtitle;

    if (grid && config.documentSamples.documents) {
      // 슬라이더 구조로 변경
      grid.innerHTML = `
        <div class="documents-slider">
          <div class="documents-slider-wrapper">
            <div class="documents-slider-container">
              ${config.documentSamples.documents.map((doc, index) => `
                <div class="document-slide" data-slide="${index}">
                  <div class="document-card">
                    <div class="document-image">
                      <img src="${doc.image}" alt="${doc.title}" loading="lazy">
                      ${doc.sample ? '<div class="sample-overlay">샘플</div>' : ''}
                    </div>
                    <div class="document-content">
                      <h3 class="document-title">${doc.title}</h3>
                      <p class="document-description">${doc.description}</p>
                      <ul class="document-features">
                        ${doc.features.map(feature => `<li>${feature}</li>`).join('')}
                      </ul>
                      <button class="btn btn-outline document-preview" data-doc="${doc.id}">
                        미리보기
                      </button>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <button class="documents-slider-prev" aria-label="이전 서류">‹</button>
          <button class="documents-slider-next" aria-label="다음 서류">›</button>
          <div class="documents-slider-dots">
            ${config.documentSamples.documents.map((_, index) => `
              <button class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="서류 ${index + 1}"></button>
            `).join('')}
          </div>
        </div>
      `;

      // 슬라이더 초기화
      const sliderContainer = grid.querySelector('.documents-slider-container');
      const slides = grid.querySelectorAll('.document-slide');
      const prevBtn = grid.querySelector('.documents-slider-prev');
      const nextBtn = grid.querySelector('.documents-slider-next');
      const dots = grid.querySelectorAll('.documents-slider-dots .dot');

      let currentSlide = 0;
      const totalSlides = slides.length;

      function showSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        sliderContainer.style.transform = `translateX(-${index * 100}%)`;

        // 도트 업데이트
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });

        currentSlide = index;
      }

      // 이전/다음 버튼 이벤트
      if (prevBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
      }

      // 도트 네비게이션
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
      });

      // 스와이프 지원 (터치 디바이스)
      let startX = 0;
      let startY = 0;
      let isDragging = false;

      sliderContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
      });

      sliderContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        // 이동 거리 계산
        const moveX = Math.abs(e.touches[0].clientX - startX);
        const moveY = Math.abs(e.touches[0].clientY - startY);

        // 수평 스와이프가 더 크면 스크롤 차단
        if (moveX > moveY) {
          e.preventDefault();
        }
      });

      sliderContainer.addEventListener('touchend', (e) => {
        if (!isDragging) return;

        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            showSlide(currentSlide + 1);
          } else {
            showSlide(currentSlide - 1);
          }
        }

        isDragging = false;
      });

      // 미리보기 버튼 이벤트
      grid.addEventListener('click', function(e) {
        if (e.target.classList.contains('document-preview')) {
          const docId = e.target.dataset.doc;
          const doc = config.documentSamples.documents.find(d => d.id === docId);
          if (doc && doc.image) {
            openImageModal(doc.image, doc.title);
          }
        }
      });
    }
  }

  // 프로세스 가이드 렌더링
  function renderProcessGuide() {
    const title = document.getElementById('process-title');
    const subtitle = document.getElementById('process-subtitle');
    const timeline = document.getElementById('process-timeline');

    if (title) title.textContent = config.process.title;
    if (subtitle) subtitle.textContent = config.process.subtitle;

    if (timeline && config.process.steps) {
      timeline.innerHTML = config.process.steps.map((step, index) => `
        <div class="process-step">
          <div class="step-content">
            <div class="step-number">${index + 1}</div>
            <h3 class="step-title">${step.title}</h3>
            <p class="step-description">${step.description}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 증빙 자료 슬라이더 (리뷰 섹션으로 대체됨)
  function renderProofSlider() {
    // 이 함수는 더 이상 사용되지 않음
    // 리뷰 섹션이 HTML에 직접 추가됨
    return;
  }


  // 가격 섹션 렌더링
  function renderPricingSection() {
    const grid = document.getElementById('pricing-grid');

    if (grid && config.pricing) {
      grid.innerHTML = config.pricing.map(item => `
        <div class="pricing-card ${item.popular ? 'popular' : ''}">
          ${item.popular ? '<div class="pricing-badge">인기</div>' : ''}
          <div class="pricing-header">
            <h3 class="pricing-title">${item.title.replace(' (', '<br>(')}</h3>
            <div class="pricing-header-cta">
              <a href="#" class="btn btn-primary btn-sm js-kakao-cta">${item.cta}</a>
            </div>
            <p class="pricing-subtitle">${item.subtitle}</p>
            <div class="pricing-price">
              <span class="price-amount">${item.price.toLocaleString()}</span>
              <span class="price-unit">${item.unit}</span>
            </div>
          </div>
          <div class="pricing-content">
            <ul class="pricing-features">
              ${item.features.map(feature => {
                // 카테고리 항목 확인 (추천 대상, 진행 내용, 제공 문서, 지원)
                const isCategory = ['추천 대상', '진행 내용', '제공 문서', '지원'].includes(feature);
                return `<li class="pricing-feature ${isCategory ? 'category-header' : ''}">${feature}</li>`;
              }).join('')}
            </ul>
            ${item.limitations && item.limitations.length > 0 ? `
              <ul class="pricing-limitations">
                ${item.limitations.map(limitation =>
                  `<li class="pricing-limitation">• ${limitation}</li>`
                ).join('')}
              </ul>
            ` : ''}
          </div>
          <div class="pricing-footer">
            <a href="#" class="btn btn-primary btn-block js-kakao-cta">${item.cta}</a>
            <p class="pricing-guarantee">${item.guarantee}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 카카오 배너 렌더링
  function renderKakaoBanner() {
    const title = document.getElementById('kakao-banner-title');
    const caption = document.getElementById('kakao-banner-caption');
    const cta = document.getElementById('kakao-banner-cta');
    const phoneMock = document.getElementById('kakao-phone-mock');

    if (title) title.textContent = config.kakaoBanner.title;
    if (caption) caption.textContent = config.kakaoBanner.caption;
    if (cta) cta.textContent = config.kakaoBanner.cta;
    if (phoneMock) {
      phoneMock.src = config.kakaoBanner.phoneMock;
      phoneMock.alt = config.kakaoBanner.title;
    }
  }

  // FAQ 섹션 렌더링
  function renderFAQSection() {
    const list = document.getElementById('faq-list');

    if (list && config.faq) {
      list.innerHTML = config.faq.map((item, index) => `
        <div class="faq-item">
          <button class="faq-question" data-faq="${index}">
            <span class="faq-q">${item.q}</span>
            <span class="faq-toggle">+</span>
          </button>
          <div class="faq-answer" data-faq="${index}">
            <p>${item.a}</p>
          </div>
        </div>
      `).join('');

      // FAQ 토글 기능
      list.addEventListener('click', function(e) {
        const question = e.target.closest('.faq-question');
        if (question) {
          const faqItem = question.closest('.faq-item');
          const index = question.dataset.faq;
          const toggle = question.querySelector('.faq-toggle');

          if (faqItem) {
            const isActive = faqItem.classList.contains('active');

            // 모든 FAQ 닫기
            list.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            list.querySelectorAll('.faq-toggle').forEach(t => t.textContent = '+');

            // 클릭된 FAQ 토글
            if (!isActive) {
              faqItem.classList.add('active');
              toggle.textContent = '+';
            }
          }
        }
      });
    }
  }

  // 최종 CTA 렌더링
  function renderFinalCTA() {
    const title = document.getElementById('final-cta-title');
    const subtitle = document.getElementById('final-cta-subtitle');
    const button = document.getElementById('final-cta-button');

    if (title) title.textContent = config.finalCta.title;
    if (subtitle) subtitle.textContent = config.finalCta.subtitle;
    if (button) button.textContent = config.finalCta.cta;
  }

  // 푸터 렌더링
  function renderFooter() {
    const description = document.getElementById('footer-description');
    const phone = document.getElementById('footer-phone');
    const email = document.getElementById('footer-email');
    const address = document.getElementById('footer-address');
    const businessNumber = document.getElementById('footer-business-number');
    const ceo = document.getElementById('footer-ceo');
    const bankAccount = document.getElementById('footer-bank-account');
    const links = document.getElementById('footer-links');
    const copyright = document.getElementById('footer-copyright');

    if (description) description.textContent = config.tagline || config.footer?.description || '2030 청년들을 위한 일자리 정보 포털';
    if (phone) phone.textContent = `상담 문의: ${config.contact.phone}`;
    if (address) address.textContent = config.contact.address;
    if (businessNumber) businessNumber.textContent = config.contact.businessNumber;
    if (ceo && config.contact.ceo) ceo.textContent = config.contact.ceo;
    if (bankAccount && config.contact.bankAccount) bankAccount.textContent = `계좌번호: ${config.contact.bankAccount}`;
    if (copyright) {
      const year = new Date().getFullYear();
      copyright.textContent = `© ${year} ${config.brandName}. All rights reserved.`;
    }

    if (links && config.footer?.links) {
      links.innerHTML = config.footer.links.map(link =>
        `<a href="${link.url}">${link.text}</a>`
      ).join('');
    }
  }

  // 카카오 CTA 링크 설정
  function setupKakaoLinks() {
    const kakaoButtons = document.querySelectorAll('.js-kakao-cta');

    kakaoButtons.forEach(button => {
      if (!config.kakaoAppKey || !config.kakaoChannelPublicId) {
        button.href = config.kakaoChannelUrl;
        button.target = '_blank';
        button.rel = 'noopener noreferrer';

        // 전환 추적 이벤트 추가
        button.addEventListener('click', function(e) {
          e.preventDefault();
          // gtag_report_conversion 함수가 존재하는지 확인
          if (typeof gtag_report_conversion === 'function') {
            gtag_report_conversion(config.kakaoChannelUrl);
          } else {
            window.open(config.kakaoChannelUrl, '_blank', 'noopener,noreferrer');
          }
        });
      }
    });
  }

  // 카카오 공식 위젯 설정
  function setupKakaoWidget() {
    if (!config.kakaoAppKey || !config.kakaoChannelPublicId) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.onload = function() {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(config.kakaoAppKey);

        const floatingBtn = document.getElementById('kakao-floating');
        if (floatingBtn) {
          floatingBtn.innerHTML = '';
          window.Kakao.Channel.createChatButton({
            container: '#kakao-floating',
            channelPublicId: config.kakaoChannelPublicId,
            title: 'consult',
            size: 'large',
            color: 'yellow',
            shape: 'pc'
          });
        }

        const kakaoButtons = document.querySelectorAll('.js-kakao-cta');
        kakaoButtons.forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            window.Kakao.Channel.chat({
              channelPublicId: config.kakaoChannelPublicId
            });
          });
        });
      }
    };
    document.head.appendChild(script);
  }

  // 모바일 메뉴 토글
  function setupMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
      });

      // 메뉴 링크 클릭 시 메뉴 닫기
      nav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
          nav.classList.remove('active');
          toggle.classList.remove('active');
        }
      });
    }
  }

  // 이미지 지연 로딩
  function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // 스크롤 애니메이션
  function setupScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.section-header, .pricing-card, .process-step, .document-card').forEach(el => {
        animationObserver.observe(el);
      });
    }
  }

  // 이미지 모달 열기
  function openImageModal(imageSrc, imageTitle) {
    // 모달이 이미 존재하면 제거
    const existingModal = document.getElementById('image-modal');
    if (existingModal) {
      existingModal.remove();
    }

    // 모달 생성
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = 'image-modal';
    modal.innerHTML = `
      <div class="image-modal-overlay"></div>
      <div class="image-modal-content">
        <button class="image-modal-close" aria-label="닫기">&times;</button>
        <img src="${imageSrc}" alt="${imageTitle}" class="image-modal-img">
        <p class="image-modal-title">${imageTitle}</p>
      </div>
    `;

    document.body.appendChild(modal);

    // 스크롤 방지
    document.body.style.overflow = 'hidden';

    // 애니메이션을 위한 약간의 딜레이
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);

    // 닫기 이벤트
    const closeModal = () => {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 300);
    };

    // 닫기 버튼 클릭
    modal.querySelector('.image-modal-close').addEventListener('click', closeModal);

    // 오버레이 클릭
    modal.querySelector('.image-modal-overlay').addEventListener('click', closeModal);

    // ESC 키로 닫기
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }
})();