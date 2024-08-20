const swiperJS = {
  id: 'swiper-js',
  name: 'SwiperJS',
  preview: true,
  includeAllValues: false,
  fields: [
    { id: 'direction', name: 'Direction', type: 'select', defaultValue: 'horizontal', options: [{ id: 'horizontal', name: 'Horizontal' }, { id: 'vertical', name: 'Vertical' }] },
    { id: 'slidesPerView', name: 'Slides Per View', type: 'number', defaultValue: 1 },
    { id: 'spaceBetween', name: 'Space Between', type: 'number', defaultValue: 0 },
    { id: 'slidesPerGroup', name: 'Slides Per Group', type: 'number', defaultValue: 1 },
    { id: 'slidesPerGroupSkip', name: 'Slides Per Group Skip', type: 'number', defaultValue: 0 },
    { id: 'centeredSlides', name: 'Centered Slides', type: 'checkbox', defaultValue: false },
    { id: 'centeredSlidesBounds', name: 'Centered Slides Bounds', type: 'checkbox', defaultValue: false },
    { id: 'grabCursor', name: 'Grab Cursor', type: 'checkbox', defaultValue: false },
    { id: 'loop', name: 'Loop', type: 'checkbox', defaultValue: false },
    { id: 'loopAddBlankSlides', name: 'Loop Add Blank Slides', type: 'checkbox', defaultValue: true },
    { id: 'loopAdditionalSlides', name: 'Loop Additional Slides', type: 'number', defaultValue: 0 },
    { id: 'loopFillGroupWithBlank', name: 'Loop Fill Group With Blank', type: 'checkbox', defaultValue: false },
    { id: 'loopPreventsSlide', name: 'Loop Prevents Slide', type: 'checkbox', defaultValue: true },
    { id: 'allowSlideNext', name: 'Allow Slide Next', type: 'checkbox', defaultValue: true },
    { id: 'allowSlidePrev', name: 'Allow Slide Prev', type: 'checkbox', defaultValue: true },
    { id: 'allowTouchMove', name: 'Allow Touch Move', type: 'checkbox', defaultValue: true },
    { id: 'touchEventsTarget', name: 'Touch Events Target', type: 'select', defaultValue: 'wrapper', options: [{ id: 'wrapper', name: 'Wrapper' }, { id: 'container', name: 'Container' }] },
    { id: 'autoHeight', name: 'Auto Height', type: 'checkbox', defaultValue: false },
    { id: 'effect', name: 'Effect', type: 'select', defaultValue: 'slide', options: [{ id: 'slide', name: 'Slide' }, { id: 'fade', name: 'Fade' }, { id: 'cube', name: 'Cube' }, { id: 'coverflow', name: 'Coverflow' }, { id: 'flip', name: 'Flip' }, { id: 'creative', name: 'Creative' }, { id: 'cards', name: 'Cards' }] },
    { id: 'speed', name: 'Speed', type: 'number', defaultValue: 300 },
    { id: 'autoplay', name: 'Autoplay', type: 'checkbox', defaultValue: false },
    { id: 'autoplayDelay', name: 'Autoplay Delay', type: 'number', defaultValue: 3000 },
    { id: 'autoplayDisableOnInteraction', name: 'Autoplay Disable On Interaction', type: 'checkbox', defaultValue: true },
    { id: 'autoplayPauseOnMouseEnter', name: 'Autoplay Pause On Mouse Enter', type: 'checkbox', defaultValue: false },
    { id: 'navigation', name: 'Navigation', type: 'group', defaultValue: false, fields: [
      { id: 'nextEl', name: 'Next Element', type: 'text', defaultValue: '.swiper-button-next' },
      { id: 'prevEl', name: 'Previous Element', type: 'text', defaultValue: '.swiper-button-prev' }
    ]},
    { id: 'pagination', name: 'Pagination', type: 'checkbox', defaultValue: false },
    { id: 'paginationType', name: 'Pagination Type', type: 'select', defaultValue: 'bullets', options: [{ id: 'bullets', name: 'Bullets' }, { id: 'fraction', name: 'Fraction' }, { id: 'progressbar', name: 'Progressbar' }, { id: 'custom', name: 'Custom' }] },
    { id: 'scrollbar', name: 'Scrollbar', type: 'checkbox', defaultValue: false },
    { id: 'keyboard', name: 'Keyboard Control', type: 'checkbox', defaultValue: false },
    { id: 'mousewheel', name: 'Mousewheel Control', type: 'checkbox', defaultValue: false },
    { id: 'lazy', name: 'Lazy Loading', type: 'checkbox', defaultValue: false },
    { id: 'watchSlidesProgress', name: 'Watch Slides Progress', type: 'checkbox', defaultValue: false },
    { id: 'watchSlidesVisibility', name: 'Watch Slides Visibility', type: 'checkbox', defaultValue: false },
    { id: 'breakpoints', name: 'Breakpoints', type: 'object', defaultValue: {} },
    { id: 'observer', name: 'Observer', type: 'checkbox', defaultValue: false },
    { id: 'observeParents', name: 'Observe Parents', type: 'checkbox', defaultValue: false },
    { id: 'observeSlideChildren', name: 'Observe Slide Children', type: 'checkbox', defaultValue: false },
  ],
  libraryCSS: `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css`,
  libraryJS: `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`,
  javascript: `
<script>
const swiper = new Swiper('.swiper', __DYNAMIC_CONFIG__);
</script>
`.trim(),
  html: `
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide"><img src="https://picsum.photos/800/400?random=1" alt="Slide 1"></div>
    <div class="swiper-slide"><img src="https://picsum.photos/800/400?random=2" alt="Slide 2"></div>
    <div class="swiper-slide"><img src="https://picsum.photos/800/400?random=3" alt="Slide 3"></div>
    <div class="swiper-slide"><img src="https://picsum.photos/800/400?random=4" alt="Slide 3"></div>
    <div class="swiper-slide"><img src="https://picsum.photos/800/400?random=5" alt="Slide 3"></div>
  </div>
  <!-- Optional elements (pagination, navigation, scrollbar) will be added dynamically -->
</div>
`.trim(),
}

export default swiperJS