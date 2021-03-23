export const select = {
  sidebar: {
    general: '#general',
    details: '#details',
    links: '#links',
    banners: '#banners',
    personalData: '#personal-data',
    payouts: '#payouts',
    postback: '#postback',
  },
  subpages: {
    allSubpages: '[class^="section-"]',
    mainPage: '.section-main-page',
    detailsPage: '.section-details',
    linksPage: '.section-links',
    bannersPage: '.section-banners',
    formPage: '.section-form',
    payoutPage: '.section-payout-details',
    postbackPage: '.section-new-postback',
  },
  buttons: {
    logOutBtn: '.log-out-btn',
    closeWindowBtns: '.close-window-btn a',
    chatButtons: '.sidebar-wrapper .friends li a',
    sidebarShow: '#sidebar-show',
  },
  components: {
    allModals: '.popup-overlay  > *',
    navbarItems: '.from-navbar',
    sidebar: '.st-container',
    linksPopUp: '.add-links-popup',
    bannersPopUp: '.add-banners-popup',
    chatPopUp: '.popup-overlay .personal-chat-popup',
    quitPopUp: '.quit-popup',
    popUpOverlay: '.popup-overlay',
  },
};

export const classNames = {
  popUps: {
    hidden: 'hidden',
  },
  sidebar: {
    active: 'active',
  },
};
