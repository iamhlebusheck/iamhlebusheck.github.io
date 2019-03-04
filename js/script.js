var counter = 0;
var a = 0;
var b = 0;
var c = 0

var textElement;
var buttonsElement

function createButton(value, onclick, width, margin){
    var button = document.createElement('input');
    button.type = 'button';
    button.value = value;
    button.setAttribute("onclick", onclick);
    button.style.width = width || '40%';
    button.style.margin = margin;
    button.style.height = '60px';
    buttonsElement.appendChild(button);
}

function startTest(){
    textElement = document.getElementById("text");
    textElement.innerHTML = questions[counter];
    buttonsElement = document.getElementById("buttons");
    buttonsElement.removeChild(document.getElementById("startButton"));
    createButton('Да', "goNext(true)", '40%', '5%');
    createButton('Нет', "goNext(false)", '40%', '5%');
    counter++;
}

function getResult(){
    removeChilds(buttonsElement);
    if(a>4){
        textElement.innerHTML = results[0];
        createButton('Мне жаль, попробую снова(', "location.reload()", '80%', '10%');
        return;
    } 
    else if(b<12 && c>12) textElement.innerHTML = results[1];
    else if(b<12 && c<12) textElement.innerHTML = results[2];
    else if(b>12 && c>12) textElement.innerHTML = results[3];
    else if(b>12 && c<12) textElement.innerHTML = results[4];
    else if(b==12 && c>12) textElement.innerHTML = results[5];
    else if(c==12 && b<12) textElement.innerHTML = results[6];
    else if(b==12 && c<12) textElement.innerHTML = results[7];
    else if(c==12 && b>12) textElement.innerHTML = results[8];
    else if(c==12 && b==12) textElement.innerHTML = results[9];
}

function removeChilds(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function goNext(yesno){
    switch(counter){
        case 1: if(yesno) b++; break;
        case 2: if(yesno) c++; break;
        case 3: if(yesno) b++; break;
        case 4: if(yesno) c++; break;
        case 5: if(!yesno) b++; break;
        case 6: if(yesno) a++; break;
        case 7: if(yesno) c++; break;
        case 8: if(yesno) b++; break;
        case 9: if(yesno) c++; break;
        case 10: if(yesno) b++; break;
        case 11: if(yesno) c++; break;
        case 12: if(!yesno) a++; break;
        case 13: if(yesno) b++; break;
        case 14: if(yesno) c++; break;
        case 15: if(!yesno) b++; break;
        case 16: if(yesno) c++; break;
        case 17: if(yesno) b++; break;
        case 18: if(!yesno) a++; break;
        case 19: if(yesno) c++; break;
        case 20: if(!yesno) b++; break;
        case 21: if(yesno) c++; break;
        case 22: if(yesno) b++; break;
        case 23: if(yesno) c++; break;
        case 24: if(yesno) a++; break;
        case 25: if(yesno) b++; break;
        case 26: if(yesno) c++; break;
        case 27: if(yesno) b++; break;
        case 28: if(yesno) c++; break;
        case 29: if(!yesno) b++; break;
        case 30: if(!yesno) a++; break;
        case 31: if(yesno) c++; break;
        case 32: if(!yesno) b++; break;
        case 33: if(yesno) c++; break;
        case 34: if(!yesno) b++; break;
        case 35: if(yesno) c++; break;
        case 36: if(yesno) a++; break;
        case 37: if(!yesno) b++; break;
        case 38: if(yesno) c++; break;
        case 39: if(yesno) b++; break;
        case 40: if(yesno) c++; break;
        case 41: if(!yesno) b++; break;
        case 42: if(!yesno) a++; break;
        case 43: if(yesno) c++; break;
        case 44: if(yesno) b++; break;
        case 45: if(yesno) c++; break;
        case 46: if(yesno) b++; break;
        case 47: if(yesno) c++; break;
        case 48: if(!yesno) a++; break;
        case 49: if(yesno) b++; break;
        case 50: if(yesno) c++; break;
        case 51: if(!yesno) b++; break;
        case 52: if(yesno) c++; break;
        case 53: if(yesno) b++; break;
        case 54: if(!yesno) a++; break;
        case 55: if(yesno) c++; break;
        case 56: if(yesno) b++; break;
        case 57: if(yesno) c++; getResult(); return;
    }
    document.getElementById("text").innerHTML = questions[counter];
    counter++;
}

var questions = [
    "Часто ли вы испытываете тягу к новым впечатлениям, к тому, чтобы \"встряхнуться\", испытать возбуждение?",
    "Часто ли вы нуждаетесь в друзьях, которые могут вас ободрить или утешить?",
    "Вы считаете себя человеком беззаботным?",
    "Трудно ли вам отказаться от своих намерений?",
    "Обдумываете ли вы свои дела неспеша, предпочитаете подождать, прежде чем действовать?",
    "Всегда ли вы сдерживаете свои обещания?",
    "Часто ли у вас бывают спады и подъемы настроения?",
    "Обычно вы поступаете и говорите быстро, не раздумывая?",
    "Возникало ли у вас когда-нибудь чувство, что вы несчастливы, хотя никакой серьезной причины для этого не было?",
    "Верно ли, что на спор вы готовы решиться на очень многое?",
    "Смущаетесь ли вы, когда хотите познакомиться с человеком противоположного пола?",
    "Бывает ли когда-нибудь, что, разозлившись, вы выходите из себя?",
    "Часто ли вы действуете под влиянием минутного настроения?",
    "Часто ли вы беспокоитесь из-за того, что сделали или сказали что-нибудь такое, чего не следовало бы делать или говорить?",
    "Предпочитаете ли вы обычно книги встречам с людьми?",
    "Легко ли вас обидеть?",
    "Любите ли вы часто бывать в комании?",
    "Бывают ли у вас иногда мысли, которые вы хотели бы скрыть от других?",
    "Верно ли, что вы иногда полны энергии так, что все горит в руках, а иногда совсем вялы?",
    "Предпочитаете ли вы иметь поменьше друзей, но зато близких вам?",
    "Часто ли вы мечтаете?",
    "Когда на вас кричат, вы отвечаете тем же?",
    "Часто ли вас беспокоит чувство вины?",
    "Все ли ваши привычки хороши и желательны?",
    "Способны ли вы дать волю своим чувствам и вовсю повеселиться в компании?",
    "Можно ли сказать, что у вас часто нервы бывают натянуты до предела?",
    "Считают ли вас человеком живым или весёлым?",
    "Часто ли сделав какое-нибудь важное дело, вы испытываете чувство, что могли бы сделать его лучше?",
    "Вы больше молчите, когда находитесь в обществе других людей?",
    "Вы иногда сплетничаете?",
    "Бывает ли, что вам неспится из-за того, что пазные мысли лезут в голову?",
    "Если вы хотите узнать о чем-нибудь, то предпочитаете прочесть об этом в книге, нежели спросить у людей?",
    "Бываете ли вы иногда так возбуждены, что не можете усидеть на месте?",
    "Нравится ли вам работа, которая требует от вас постоянного внимания?",
    "Бывают ли у вас слабость или головокружение?",
    "Всегда ли вы платили бы за провоз багажа на транспорте, если бы не опасались проверки?",
    "Вам неприятно находиться в обществе, где подшучивают друг над другом?",
    "Раздражительны ли вы?",
    "Нравится ли вам работа, которая требует быстроты действий?",
    "Верно ли, что нередко вам не дают покоя мысли о разных неприятностях и ужасах, которые могли бы произойти, хотя все кончилось благополучно?",
    "Вы неторопливы в движениях?",
    "Вы когда-нибудь опаздывали на свидание или в школу(на работу)?",
    "Часто ли вам снятся кошмары?",
    "Верно ли, что вы так любите поговорить, что никогда не упустите случая побеседовать с незнакомым человеком?",
    "Бывают ли у вас сильные головные боли?",
    "Вы бы чувствовали себя несчастным, если бы длительное время были лишены общения с людьми?",
    "Можете ли вы назвать себя нервным человеком?",
    "Есть ли среди ваших знакомых люди, которые вам явно не нравятся?",
    "Можете ли вы сказать, что вы весьма уверенный в себе человек?",
    "Легко ли вы обижаетесь, когда люди указывают на ваши ошибки в работе или на ваши личные промахи?",
    "Вы считаете, что трудно получить настоящее удовольствие от вечеринки?",
    "Беспокоит ли вас чувство, что вы чем-то хуже других?",
    "Легко ли вам внести оживление в довольно скучную компанию?",
    "Бывает ли, что вы говорите о вещах, в которых не разбираетесь?",
    "Быспокоитесь ли вы о своем здоровье?",
    "Любите ли вы подшучивать над другими?",
    "Страдаете ли вы от длительной бессоницы?"
]

var results = [
    "Ответы были неискренними, результат не получен.",
    "Ваш тип темперамента <a href=\"infopage.html\">меланхолик</a>.",
    "Ваш тип темперамента <a href=\"infopage.html\">флегматик</a>.",
    "Ваш тип темперамента <a href=\"infopage.html\">холерик</a>.",
    "Ваш тип темперамента <a href=\"infopage.html\">сангвиник</a>.",
    "У вас промежуточный темперамент, между <a href=\"infopage.html\">холериком</a> и <a href=\"infopage.html\">меланхоликом</a>.",
    "У вас промежуточный темперамент, между <a href=\"infopage.html\">меланхоликом</a> и <a href=\"infopage.html\">флегматиком</a>.",
    "У вас промежуточный темперамент, между <a href=\"infopage.html\">флегматиком</a> и <a href=\"infopage.html\">сангвиником</a>.",
    "У вас промежуточный темперамент, между <a href=\"infopage.html\">сангвиником</a> и <a href=\"infopage.html\">холериком</a>.",
    "Ваше поведение адаптивно, черты вашего темперамента проявляются не в крайней степени, их легко контролировать (вам подходят все типы темперамента).",
]