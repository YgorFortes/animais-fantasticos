import ScrollSuave from './modules/scroll-suave.js';
import iniciarAnimacaoScroll from './modules/scroll-animacao.js';
import iniciarAccordion from './modules/accordion.js';
import iniciarTabNav from './modules/tab-nav.js';
import iniciarModal from './modules/modal.js';
import iniciarToolTip from './modules/tooltip.js';
import iniciarDropDownMenu from './modules/dropdown-menu.js';
import iniciarMenuMobile from './modules/menu-mobile.js';
import iniciarFuncionamento from './modules/funcionamento.js';
import iniciarFetchAnimais from './modules/fetch-animais.js';
import iniciarFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-tab="suave"] a[href^="#"]');
scrollSuave.init();

iniciarAnimacaoScroll();
iniciarAccordion();
iniciarTabNav();
iniciarModal();
iniciarToolTip();
iniciarDropDownMenu();
iniciarMenuMobile();
iniciarFuncionamento();
iniciarFetchAnimais();
iniciarFetchBitcoin();
