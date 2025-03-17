import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from 'swiper/modules';
import {Button} from "../components/button.tsx";
import {
    mainImage,
    polygon1,
    polygon2,
    polygon3,
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4,
    sliderImg5,
    adobeImage1,
    intershipImg,
    questionsImg,
    interviewImg,
    attach,
    error,
    correct, mainImageMob,
} from '../components/images.tsx'
import React, {useEffect, useState} from "react";
import {NewsContainer} from "../components/slider.tsx";
import Foldable from "../components/foldableText.tsx";
import InputField from "../components/input.tsx";
import {Header} from "../components/header.tsx";

export const StartPage: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState(mainImage);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 960) {
                setBackgroundImage(mainImageMob);
            } else {
                setBackgroundImage(mainImage);
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = () => {
        alert("Что то произошло")
    }

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');
    const [message, setMessage] = useState('');

    const iconClose = (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.5" cy="11.5" r="10.5" stroke="#00B7EC" stroke-width="2"/>
            <path
                d="M16.5 11.134C17.1667 11.5189 17.1667 12.4811 16.5 12.866L9 17.1962C8.33333 17.5811 7.5 17.0999 7.5 16.3301L7.5 7.66987C7.5 6.90007 8.33333 6.41895 9 6.80385L16.5 11.134Z"
                fill="#00B7EC"/>
        </svg>
    );

    const iconOpen = (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.5" cy="11.5" r="10.5" transform="rotate(90 11.5 11.5)" stroke="#00B7EC" stroke-width="2"/>
            <path
                d="M11.866 16.5C11.4811 17.1667 10.5189 17.1667 10.134 16.5L5.80385 9C5.41895 8.33333 5.90007 7.5 6.66987 7.5L15.3301 7.5C16.0999 7.5 16.5811 8.33333 16.1962 9L11.866 16.5Z"
                fill="#00B7EC"/>
        </svg>
    )

    return (
        <div className="wrapper">
            <Header/>
            <div className="mainContainer" style={{backgroundImage: `url(${backgroundImage})`}}>
                <h1>Добро пожаловать <br/> в ГЭНДАЛЬФ!</h1>
                <p>
                    Мы готовы поделиться секретом, почему любим компанию,<br/>
                    в которой работаем. Если тебе будут близки наши ценности и идеи,<br/>
                    то смело записывайся на собеседование!
                </p>
                <div className="btnContainer">
                    <Button onClick={handleClick} variant="green">Почему мы</Button>
                    <Button onClick={handleClick} variant="whiteGreen">Записаться на собеседование</Button>
                </div>
            </div>
            <div className="container">
                <h2>О том, чем мы занимаемся</h2>
                <div className="weDoContainer">
                    <div className="wrapper">
                        <div className="textContainer">
                            <p>ГЭНДАЛЬФ – один из крупнейших игроков на рынке информационных технологий, занимающий 4
                                место среди 7000 партнеров фирмы «1С». У нас есть представительства в 15 городах России,
                                а нашими услугами пользуются 23 000 организаций-клиентов, в числе которых «Базэл Аэро»,
                                «Ростсельмаш», UTG. Аэропорт Кольцово и многие другие.</p>
                            <p>Мы тщательно подходим к выбору сотрудников, которые становятся частью команды
                                профессионалов.</p>
                            <p>У нас работают специалисты разных областей: программисты, маркетологи, менеджеры,
                                копирайтеры, методисты и другие, чей карьерный рост не
                                ограничен привычными рамками.
                            </p>
                        </div>
                        <div className="btnContainer">
                            <Button onClick={handleClick} variant="blue">Узнать больше</Button>
                            <Button onClick={handleClick} variant="whiteBlue">Записаться на собеседование</Button>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="polygon1" src={polygon1} alt="polygon1"/>
                        <img className="polygon2" src={polygon2} alt="polygon2"/>
                        <img className="polygon3" src={polygon3} alt="polygon3"/>
                        <img src={adobeImage1} alt="adobe"/>
                    </div>
                </div>
            </div>
            <div className="valuesContainer">
                <div className="container">
                    <h2>Наши ценности скажут о нас больше:</h2>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Navigation]}
                        navigation
                        slidesPerView={4}
                        className="mySwiper"
                        spaceBetween={25}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide><img src={sliderImg1} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={sliderImg2} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={sliderImg3} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={sliderImg4} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={sliderImg5} alt=""/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="developmentContainer">
                <h2>Инфраструктура для твоего развития и роста</h2>
                <div className="container">
                    <div className="textContainer">
                        <p>
                            Мы создаем платформу для профессионального развития каждого сотрудника. Главная цель – дать
                            возможность учиться, работать и получать удовольствие от каждой успешной задачи.
                        </p>
                        <p>
                            О возможностях личностного роста в ГЭНДАЛЬФ расскажет руководитель Департамента персонала и
                            карьеры Татьяна Арсенович.
                        </p>
                    </div>
                    <div className="videoContainer">
                        <iframe
                            src="https://rutube.ru/play/embed/95d5daa567cdd707899b9fb45ea247e1"
                            frameBorder="0"
                            allow="clipboard-write; autoplay"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Живая лента</h2>
                <NewsContainer/>
            </div>
            <div className="intershipContainer" style={{backgroundImage: `url(${intershipImg})`}}>
                <h1>Ты студент и хочешь устроиться <br/>на практику?</h1>
                <Button onClick={handleClick} variant="green">Оставить заявку</Button>
            </div>
            <div className="questionsContainer">
                <div className="container">
                    <h2>Ответы на вопросы</h2>
                    <div className="elemsContainer">
                        <div className="foldableTextContainer">
                            <Foldable
                                title="На что нужно обратить внимание на собеседовании?"
                                content={<>
                                    <p>
                                        Кроме умения представлять себя, грамотно разговаривать и опрятного внешнего
                                        вида,
                                        стоит обратить внимание еще на пару моментов. Они не очевидны, но очень
                                        эффективны.
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>Сохраняйте спокойствие.</strong> Конечно, собеседование – это
                                            стрессовая
                                            ситуация, которая мешает конструктивно мыслить. Если волнение берет верх –
                                            выпейте немного воды, прижмите стопы к полу, а главное, помните: ничего
                                            ужасного
                                            произойти не может.
                                        </li>
                                        <li>
                                            <strong>Внимание к самопрезентации.</strong> Если собеседование – пьеса, вы
                                            – ее
                                            главный герой. Подготовьте рассказ о себе заранее, опираясь на важные
                                            навыки, и
                                            опишите, почему это важно для данной работы. Все это придаст вам уверенности
                                            в
                                            себе.
                                        </li>
                                    </ul>
                                </>}
                                iconOpen={iconOpen}
                                iconClosed={iconClose}
                            />
                            <Foldable
                                title="Как правильно составить резюме?"
                                content="Советы по составлению резюме: структура, ключевые моменты, оформление."
                                iconOpen={iconOpen}
                                iconClosed={iconClose}
                            />
                            <Foldable
                                title="Возможно ли устроиться без опыта?"
                                content="Да, это возможно! Вот как это сделать: стажировки, портфолио, soft skills, сети, Junior-вакансии."
                                iconOpen={iconOpen}
                                iconClosed={iconClose}
                            />
                            <Foldable
                                title="Ошибки на собеседовании. Чего нужно избегать?"
                                content="Основные ошибки на собеседовании: недостаточная подготовка, неуверенность, излишняя самоуверенность, незнание своих слабостей, не задавать вопросы, одежда и поведение."
                                iconOpen={iconOpen}
                                iconClosed={iconClose}
                            />
                        </div>
                        <div className="imageContainer">
                            <img src={questionsImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interviewContainer" style={{backgroundImage: `url(${interviewImg})`}}>
                <div className="formContainer">
                    <div className="form">
                        <h2>Записаться на собеседование</h2>
                        <InputField
                            type="text"
                            value={name}
                            onChange={setName}
                            required
                            placeholder="Как к вам обращаться?"
                            iconCorrect={correct}
                            iconError={error}
                        />
                        <InputField
                            type="tel"
                            value={phone}
                            onChange={setPhone}
                            required
                            placeholder="Телефон"
                            iconCorrect={correct}
                            iconError={error}
                        />
                        <InputField
                            type="email"
                            value={email}
                            onChange={setEmail}
                            required
                            placeholder="Email"
                            iconCorrect={correct}
                            iconError={error}
                        />
                        <InputField
                            type="text"
                            value={position}
                            onChange={setPosition}
                            placeholder="Желаемая должность"
                            required
                            iconCorrect={correct}
                            iconError={error}
                        />
                        <InputField
                            label="Выберите категорию занятости"
                            type="radio"
                            value={experience}
                            onChange={setExperience}
                            required
                            options={['Работа в офисе', 'Стажировка', 'Удаленная работа']}
                        />
                        <InputField
                            type="textarea"
                            value={message}
                            onChange={setMessage}
                            required
                            placeholder="Ваши вопросы"
                            rows={5}
                        />
                        <div className="btnContainer">
                            <Button onClick={handleClick} variant="whiteGreen" icon={attach}>Прикрепить резюме</Button>
                            <Button onClick={handleClick} variant="green">Записаться</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};