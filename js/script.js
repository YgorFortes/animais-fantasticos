import ScrollSuave from './modules/scroll-suave.js';
import iniciarAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import iniciarDropDownMenu from './modules/dropdown-menu.js';
import iniciarMenuMobile from './modules/menu-mobile.js';
import iniciarFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import iniciarFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-tab="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li img', '[data-tab="content"] section');
tabNav.init();

iniciarAnimacaoScroll();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

iniciarDropDownMenu();
iniciarMenuMobile();
iniciarFuncionamento();
iniciarFetchBitcoin();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
