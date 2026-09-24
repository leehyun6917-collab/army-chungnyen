# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
청년취업진흥교육원 - 군복무 청년을 위한 구직청원휴가 상담 서비스 랜딩페이지

## Key Commands

### Development Server
```bash
# Start local server
python3 -m http.server 8000
# Then open http://localhost:8000

# Kill existing server if needed
lsof -i :8000
kill -9 [PID]
```

### Git Operations
```bash
# Quick commit and push
git add -A
git commit -m "message"
git push

# Restore changes if needed
git restore .
```

## Architecture

### Core Structure
- **Static Site**: Pure HTML/CSS/JS without build process or dependencies
- **Configuration-Driven**: All content in `assets/config.js` - single source of truth
- **Responsive Design**: Mobile-first approach with breakpoint at 768px

### Key Files & Their Roles
1. **`assets/config.js`**: Central configuration containing:
   - `selfDiagnosis.forms`: Category-specific questionnaires (military-job, startup, education)
   - `pricing.plans`: Basic (49,000원) and Standard (89,000원) packages
   - `process.steps`: 5-step consultation process
   - `documents.samples`: Text consultation records and certificates
   - `proofs.images`: 3 certification images for slider

2. **`main.js`**: Dynamic rendering engine:
   - `renderSelfDiagnosis()`: Category switching and question navigation
   - `renderProofSlider()`: Fade-based image carousel with dots
   - `renderDocumentsSection()`: Manual horizontal slider
   - `initKakaoChannel()`: Kakao channel integration

3. **`styles.css`**: Design system with:
   - CSS variables for theming (--brand: #1f6fff)
   - Responsive utilities using clamp() for fluid typography
   - Grid-based pricing cards (2 columns on all devices)
   - Floating CTA button with centered positioning

### Component Implementations

#### Proof Slider (실제 서류 첨삭 사례)
- Opacity-based transitions instead of transform
- Absolute positioning for all slides
- Touch/swipe support for mobile
- Classes: `.proof-slider-new`, `.proof-slide`, `.proof-controls`

#### Pricing Cards
- Flex layout with `flex: 1` for equal width
- Responsive font sizing with clamp()
- Always displays 2 cards side-by-side
- Popular card has blue border

#### Self-Diagnosis System
- Three categories with unique question sets
- Progress tracking with current/total display
- Results calculation based on answers
- Dynamic form switching without page reload

## Critical Implementation Notes

### Mobile Responsiveness
- Pricing cards use grid with 2 columns even on mobile
- Process guide uses centered text with numbers above titles
- Hero background uses viewport units for proper scaling
- Footer includes business info: 455-12-52943, mystaryoyo4@naver.com

### Recent UI Decisions
- Removed reviews section from homepage
- Converted document samples to manual slider (not auto-scroll)
- Floating button changed from Kakao yellow to blue "지금 예약하기"
- Hero uses background image with overlay (0.7 opacity desktop, 0.8 mobile)

### Known Issues & Solutions
- If pricing cards text overflows: Check clamp() values in CSS
- If sliders show duplicate images: Verify config.js image arrays
- If sections disappear: Check main.js render functions are all called

## Content Update Locations

### Business Information
- Email: `config.contact.email`
- Business Number: `config.contact.businessNumber`
- Kakao URL: `config.kakaoChannelUrl`

### Visual Assets
- Hero background: `assets/images/b7f4fd81d147b0c0febb22f073b1365c.jpg`
- Logo: `assets/images/logo_jinheung.jpg`
- Certifications: `certification_1.jpg`, `certification_3.jpg`, `certification_4.jpg`
- Blog thumbnails: `thumb1.png` through `thumb6.png`