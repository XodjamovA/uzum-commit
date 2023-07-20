import React, { Children } from 'react';
import location from '../img/location.svg'
import russia from '../img/russia.svg'
import btn from '../img/btn.jpg'
import logo from '../img/logo.svg'
import profile from '../img/profile.svg'
import basket from '../img/basket.svg'
import instagram from '../img/instagram.svg'
import telegram from '../img/telegram.svg'
import youTube from '../img/youTube.svg'
import facebook from '../img/facebook.svg'
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <header className='flex flex-col pb-6'>
                <div className='w-full h-8 bg-stone-100'>
                    <div className="container flex items-center justify-between">
                        <div className='flex'>
                            <div className='flex gap-3'>
                                <div className='flex items-center'>
                                    <img src={location} alt="" />
                                    <span>Город: Ташкент</span>
                                </div>
                                <span>Пункт выдачи</span>
                            </div>
                        </div>
                        <h5>Доставим ваш заказ бесплатно всего за 1 день</h5>
                        <div className='flex items-center gap-3'>
                            <h5>Вопрос-ответ</h5>
                            <h5>Мои заказы</h5>
                            <span className='flex items-center gap-2'>
                                <img src={russia} alt="" />
                                <h5>Русский</h5>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container flex flex-col">
                    <div className='pt-5 flex justify-between'>
                        <img src="data:image/svg+xml,%3csvg width='215' height='32' viewBox='0 0 215 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_264_8440)'%3e %3cpath d='M184.63 9.9482H189.047L183.466 16.2628L189.509 22.9514H185.081L179.25 16.5839V22.9514H175.5V5.92307H179.25V16.0406L184.63 9.9482Z' fill='%237000FF'/%3e %3cpath d='M167.097 12.7422V9.94467H163.347V22.9479H167.097V17.2047C167.097 14.9787 168.713 13.55 170.769 13.55H173.221V9.66951H171.38C169.101 9.68009 167.453 11.6133 167.097 12.7422Z' fill='%237000FF'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M158.496 9.94467V18.383C158.496 19.5189 158.817 19.7976 159.576 19.7941H160.169V22.9479H158.02C157.307 22.9842 156.603 22.7825 156.017 22.3744C155.431 21.9663 154.998 21.375 154.785 20.6937C153.872 22.3235 151.963 23.2513 149.882 23.2513C145.945 23.2513 143.426 19.847 143.507 16.4322C143.507 13.0561 145.733 9.69067 150.069 9.69067C152.587 9.69067 154.006 10.7913 154.813 11.9943L154.785 9.94467H158.496ZM147.127 16.471C147.127 18.5276 148.732 19.9987 150.848 19.9987C153.05 19.9987 154.641 18.51 154.641 16.471C154.641 14.4319 153.05 12.9891 150.848 12.9891C148.718 12.9891 147.127 14.4143 147.127 16.471Z' fill='%237000FF'/%3e %3cpath d='M130.328 12.1178C131.217 10.6608 133.005 9.6942 135.376 9.6942C139.408 9.6942 141.341 12.2377 141.341 15.388V22.9408H137.591V15.9065C137.591 14.4214 136.73 13.0843 134.928 13.0843C133.125 13.0843 132.236 14.3543 132.236 15.8642V22.962H128.472V15.8748C128.472 14.3649 127.527 13.0949 125.713 13.0949C123.9 13.0949 123.103 14.4214 123.103 15.9171V22.9514H119.353V15.388C119.353 12.2377 121.406 9.6942 125.424 9.6942C127.463 9.6942 129.424 10.6608 130.328 12.1178Z' fill='%237000FF'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M196.818 9.6942C192.497 9.6942 189.763 12.1036 189.763 16.4604C189.763 20.8171 192.493 23.2548 196.853 23.2548C203.112 23.2548 203.496 19.0215 203.496 19.0215H199.376C199.376 19.0215 199.058 20.3444 196.857 20.3444C194.458 20.3444 193.717 18.9016 193.717 17.4728H203.736C203.785 17.1386 203.812 16.8016 203.817 16.4639C203.817 12.1036 201.073 9.6942 196.818 9.6942ZM193.77 15.1763C193.77 14.118 194.476 12.6081 196.818 12.6081C199.161 12.6081 199.813 14.118 199.813 15.1763H193.77Z' fill='%237000FF'/%3e %3cpath d='M215 9.70126V12.721L210.915 12.7316V17.3176C210.915 19.1309 211.395 19.6988 212.679 19.6988H215V22.9831H212.679C208.943 22.9831 207.179 21.4486 207.179 17.808V12.7351H205.285V10.5761L208.904 7.12249H210.929V9.70126H215Z' fill='%237000FF'/%3e %3cpath d='M103.623 9.68008C101.249 9.68008 99.4607 10.6467 98.5717 12.1177C97.6721 10.6467 95.7107 9.68008 93.6682 9.68008C89.6642 9.68008 87.597 12.2377 87.597 15.3879V22.9514H91.3505V15.9171C91.3505 14.4072 92.1442 13.0949 93.961 13.0949C95.7778 13.0949 96.7302 14.3649 96.7302 15.8748V22.962H100.48V15.8642C100.48 14.3543 101.369 13.0843 103.172 13.0843C104.975 13.0843 105.835 14.4072 105.835 15.9065V22.9408H109.585V15.3879C109.585 12.2377 107.652 9.68008 103.623 9.68008Z' fill='%237000FF'/%3e %3cpath d='M68.3003 9.93408V13.0985L60.8109 19.787H68.7483V22.9514H55.8263V19.787L63.3297 13.0985H56.1191V9.93408H68.3003Z' fill='%237000FF'/%3e %3cpath d='M78.0827 19.7729C79.8183 19.7729 80.9825 18.8169 80.9825 16.7532V9.94467H84.736V16.8943C84.736 21.4345 80.9401 23.1983 78.0933 23.1983C75.2464 23.1983 71.4541 21.4239 71.4541 16.8943V9.94467H75.2182V16.7532C75.2182 18.8169 76.347 19.7729 78.0827 19.7729Z' fill='%237000FF'/%3e %3cpath d='M46.7212 19.7729C48.4427 19.7729 49.6104 18.8169 49.6104 16.7532V9.94467H53.3604V16.8943C53.3604 21.4345 49.5575 23.1983 46.7353 23.1983C43.8708 23.1983 40.0926 21.4239 40.0926 16.8943V9.94467H43.8461V16.7532C43.8461 18.8169 44.9997 19.7729 46.7212 19.7729Z' fill='%237000FF'/%3e %3cpath d='M31.9896 16.0053C31.9889 19.1704 31.0498 22.2643 29.2912 24.8955C27.5326 27.5268 25.0334 29.5772 22.1098 30.7875C19.1861 31.9978 15.9693 32.3135 12.8663 31.6949C9.76321 31.0762 6.91327 29.5508 4.6769 27.3117C2.44053 25.0726 0.918195 22.2204 0.302449 19.1158C-0.313297 16.0111 0.00520068 12.7936 1.21766 9.87001C2.43012 6.94646 4.48208 4.44826 7.114 2.6914C9.74592 0.934529 12.8396 -0.00208978 16.0037 3.50108e-06C18.1047 -0.000924639 20.1854 0.412484 22.1266 1.21658C24.0679 2.02068 25.8316 3.1997 27.317 4.68621C28.8023 6.17271 29.9802 7.93754 30.7831 9.87977C31.5861 11.822 31.9985 13.9035 31.9966 16.0053H31.9896ZM17.8304 5.5597C17.2309 5.50326 16.6173 5.47856 15.9966 5.47856C15.3759 5.47856 14.7658 5.50326 14.1663 5.5597V14.0933H17.8304V5.5597ZM26.2942 10.5338C24.9588 10.0949 23.5942 9.7507 22.2104 9.5037V16.672C22.2104 21.8296 20.0239 24.5424 15.9931 24.5424C11.9622 24.5424 9.78282 21.8296 9.78282 16.672V9.5037C8.39801 9.75113 7.03224 10.0953 5.69554 10.5338V16.7108C5.67022 18.0799 5.9179 19.4402 6.42412 20.7124C6.93033 21.9845 7.68493 23.143 8.64382 24.1201C9.60271 25.0973 10.7467 25.8734 12.0088 26.4033C13.271 26.9331 14.6261 27.206 15.9949 27.206C17.3637 27.206 18.7187 26.9331 19.9809 26.4033C21.2431 25.8734 22.387 25.0973 23.3459 24.1201C24.3048 23.143 25.0594 21.9845 25.5656 20.7124C26.0718 19.4402 26.3195 18.0799 26.2942 16.7108V10.5338Z' fill='%237000FF'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_264_8440'%3e %3crect width='215' height='32' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e" alt="" />
                        <div className='flex gap-3 items-center'>
                            <button className='flex w-32 h-10 bg-indigo-100 rounded items-center justify-center gap-2 text-indigo-800'>
                                <img src={btn} alt="" className='w-6' />
                                Каталог
                            </button>
                            <div className='h10 rounded border-2 border-gray-300 flex items-center justify-between overflow-hidden' id='inp'>
                                <input type="text" placeholder='Искать товары и категории' className='pl-4 pr-4 w-96' />
                                <button className='pl-5 pr-5 bg-gray-200 h-10'>
                                    <img src={logo} alt="" />
                                </button>
                            </div>
                        </div>
                        <span className='flex items-center gap-2'>
                            <img src={profile} alt="" />
                            <h5>Войти</h5>
                        </span>
                        <span className='flex items-center gap-2'>
                            <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z' fill='%23141415'/%3e %3c/svg%3e" alt="" />
                            <h5>Избранное</h5>
                        </span>
                        <span className='flex items-center gap-2'>
                            <img src={basket} alt="" />
                            <h5>Корзина</h5>
                        </span>
                    </div>
                    <div className='pt-5'>
                        <ul className='flex items-center justify-between'>
                            <li className='flex items-center gap-1'>
                                <img src="https://static.uzum.uz/product-action/paiment.png" alt="" className='h-6' />
                                <a href="">Халяльная рассрочка</a>
                            </li>
                            <li>
                                <a href="">Электроника</a>
                            </li>
                            <li>
                                <a href="">Бытовая техника</a>
                            </li>
                            <li>
                                <a href="">Одежда</a>
                            </li>
                            <li>
                                <a href="">Обувь</a>
                            </li>
                            <li>
                                <a href="">Аксесуары</a>
                            </li>
                            <li>
                                <a href="">Красота</a>
                            </li>
                            <li>
                                <a href="">Здоровье</a>
                            </li>
                            <li>
                                <a href="">Товары для дома</a>
                            </li>
                            <li>
                                <a href="">Строительство и ремонт</a>
                            </li>
                            <li>
                                <a href="">Ещё &#709;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className='pt-80'>
                <div className="container flex">
                    <div className='w-80 flex flex-col gap-3'>
                        <h5 className='font-bold'>О нас</h5>
                        <h5>Пункты выдачи</h5>
                        <h5>Вакансии</h5>
                    </div>
                    <div className='w-80 flex flex-col gap-3'>
                        <h5 className='font-bold'>Пользователям</h5>
                        <h5>Связаться с нами</h5>
                        <h5>Вопрос - Ответ</h5>
                    </div>
                    <div className='w-80 flex flex-col gap-3'>
                        <h5 className='font-bold'>Для предпринимателей</h5>
                        <h5>Продавайте на Uzum</h5>
                        <h5>Вход для продавцов</h5>
                    </div>
                    <div className='w-80 flex flex-col gap-10 pb-12'>
                        <div className='flex flex-col gap-3'>
                            <h5 className='font-bold'>Скачать приложение</h5>
                            <div className='flex gap-3'>
                                <span className='flex items-center gap-2'>
                                    <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M14.961 3.46878C15.6409 2.53501 16.1022 1.28122 15.9805 0C14.9853 0.0543415 13.7709 0.720988 13.0678 1.65549C12.4364 2.45575 11.8777 3.76203 12.0233 4.98954C13.1405 5.09596 14.2566 4.37635 14.961 3.46878Z' fill='black'/%3e %3cpath d='M16.3801 5.00736C14.559 4.8975 13.0106 6.05404 12.141 6.05404C11.2709 6.05404 9.93914 5.06272 8.49877 5.08943C6.62405 5.11732 4.88452 6.19078 3.93317 7.89808C1.97642 11.3135 3.41678 16.3798 5.31962 19.1615C6.24369 20.5377 7.35733 22.053 8.82474 21.9986C10.2112 21.9435 10.7546 21.0894 12.4399 21.0894C14.124 21.0894 14.6135 21.9986 16.0811 21.971C17.6031 21.9435 18.5546 20.5942 19.4787 19.2166C20.5387 17.6478 20.9727 16.133 21 16.0499C20.9727 16.0223 18.0652 14.8928 18.0382 11.5057C18.0108 8.66968 20.321 7.3207 20.4297 7.23704C19.1251 5.28304 17.0867 5.06272 16.3801 5.00736Z' fill='black'/%3e %3c/svg%3e" alt="" />
                                    AppStore
                                </span>
                                <span className='flex items-center gap-2'>
                                    <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M2.46656 0.400879C2.18662 0.680813 2 1.14737 2 1.70724V22.3291C2 22.8889 2.18662 23.3555 2.46656 23.6354L2.55987 23.7288L14.1305 12.1581L2.46656 0.400879Z' fill='url(%23paint0_linear)'/%3e %3cpath d='M17.9563 15.9831L14.1305 12.1574L17.9563 8.23828L22.5285 10.851C23.8349 11.5975 23.8349 12.8105 22.5285 13.557L17.9563 15.9831Z' fill='url(%23paint1_linear)'/%3e %3cpath d='M17.9563 15.9831L14.1305 12.1573L2.46655 23.6347C2.93311 24.1012 3.58629 24.1012 4.42609 23.728L17.9563 15.9831Z' fill='url(%23paint2_linear)'/%3e %3cpath d='M17.9563 8.23822L4.33278 0.306739C3.58629 -0.159819 2.8398 -0.0665074 2.46655 0.40005L14.1305 12.1573L17.9563 8.23822Z' fill='url(%23paint3_linear)'/%3e %3cdefs%3e %3clinearGradient id='paint0_linear' x1='13.036' y1='1.49188' x2='-2.62386' y2='17.1518' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%2300A0FF'/%3e %3cstop offset='0.00657445' stop-color='%2300A1FF'/%3e %3cstop offset='0.2601' stop-color='%2300BEFF'/%3e %3cstop offset='0.5122' stop-color='%2300D2FF'/%3e %3cstop offset='0.7604' stop-color='%2300DFFF'/%3e %3cstop offset='1' stop-color='%2300E3FF'/%3e %3c/linearGradient%3e %3clinearGradient id='paint1_linear' x1='24.2658' y1='12.0277' x2='1.68731' y2='12.0277' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23FFE000'/%3e %3cstop offset='0.4087' stop-color='%23FFBD00'/%3e %3cstop offset='0.7754' stop-color='%23FFA500'/%3e %3cstop offset='1' stop-color='%23FF9C00'/%3e %3c/linearGradient%3e %3clinearGradient id='paint2_linear' x1='15.8609' y1='14.1688' x2='-5.37525' y2='35.4049' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23FF3A44'/%3e %3cstop offset='1' stop-color='%23C31162'/%3e %3c/linearGradient%3e %3clinearGradient id='paint3_linear' x1='-0.496367' y1='-6.47169' x2='8.98651' y2='3.01109' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%2332A071'/%3e %3cstop offset='0.0685' stop-color='%232DA771'/%3e %3cstop offset='0.4762' stop-color='%2315CF74'/%3e %3cstop offset='0.8009' stop-color='%2306E775'/%3e %3cstop offset='1' stop-color='%2300F076'/%3e %3c/linearGradient%3e %3c/defs%3e %3c/svg%3e" alt="" />
                                    Google Play
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h5 className='font-bold'>Uzum в соцсетях</h5>
                            <div className='flex gap-2'>
                                <img src={instagram} alt="" />
                                <img src={telegram} alt="" />
                                <img src={youTube} alt="" />
                                <img src={facebook} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <hr className='w-full h-px' />
                        <div className='flex justify-between items-center pt-2 pb-2'>
                            <div className='flex gap-4'>
                                <h5 className='font-bold'>Соглашение о конфиденциальности</h5>
                                <h5 className='font-bold'>Пользовательское соглашение</h5>
                            </div>
                            <h6 className='fon'>«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;